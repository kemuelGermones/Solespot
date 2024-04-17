import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import db from "@/db";
import ApiError from "@/utils/api-error";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET_KEY = process.env.STRIPE_WEBHOOK_SECRET_KEY;

if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET_KEY) {
  throw new Error(
    "Sorry, an error occured due to missing Stripe credentials. Please provide it and try again.",
  );
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    const signature = headers().get("stripe-signature");

    if (!signature) {
      throw new ApiError(
        "Sorry, an error occured due to missing Stripe signature. Please provide it and try again.",
        400,
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET_KEY!,
    );

    if (event.type !== "checkout.session.completed") {
      throw new ApiError(
        "Sorry, an error occured due to unhandled Stripe event. Please try again.",
        400,
      );
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(
      event.data.object.id,
      { expand: ["data.price.product"] },
    );

    if (!lineItems.data.length) {
      throw new ApiError(
        "Sorry, an error occured due to missing Stripe line items. Please provide it and try again.",
        400,
      );
    }

    for (let lineItem of lineItems.data) {
      if (
        !lineItem.price ||
        !(lineItem.price.product as Stripe.Product).metadata.order_id ||
        !(lineItem.price.product as Stripe.Product).metadata.product_id
      ) {
        throw new ApiError(
          "Sorry, an error occured due to missing Stripe price data. Please provide it and try again.",
          400,
        );
      }
    }

    await db.order.updateMany({
      data: {
        isPaid: true,
        orderedAt: new Date(event.created * 1000),
      },
      where: {
        id: {
          in: lineItems.data.map(
            (lineItem) =>
              (lineItem.price!.product as Stripe.Product).metadata.order_id,
          ),
        },
      },
    });

    await db.stock.updateMany({
      data: {
        quantity: {
          decrement: 1,
        },
      },
      where: {
        productId: {
          in: lineItems.data.map(
            (lineItem) =>
              (lineItem.price!.product as Stripe.Product).metadata.product_id,
          ),
        },
      },
    });

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    let status = 500;
    let message =
      "Sorry, but it seems like an unexpected error has occurred. Please try again later.";

    if (error instanceof ApiError) {
      status = error.status;
      message = error.message;
    }

    return NextResponse.json({ message }, { status });
  }
}
