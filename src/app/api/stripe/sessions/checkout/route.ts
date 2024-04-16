import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import db from "@/db";
import { auth } from "@/auth";
import ApiError from "@/utils/api-error";

const CLIENT_URL = process.env.CLIENT_URL;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!CLIENT_URL || !STRIPE_SECRET_KEY) {
  throw new Error(
    "Sorry, an error occured due to missing Stripe or client credentials. Please provide it and try again.",
  );
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new ApiError(
        "Sorry, you must be signed in to do this. Please sign in first.",
        400,
      );
    }

    const results = await db.order.findMany({
      orderBy: {
        orderedAt: "asc",
      },
      where: {
        AND: [{ isPaid: false }, { userId: session.user.id }],
      },
      include: {
        product: {
          include: {
            images: {
              select: {
                image: true,
              },
              orderBy: {
                sequence: "asc",
              },
            },
          },
        },
      },
    });

    if (!results.length) {
      throw new ApiError(
        "Sorry, you're cart is empty. Please add products and try again.",
        400,
      );
    }

    const orders = results.map((result) => ({
      ...result,
      product: {
        ...result.product,
        price: result.product.price.toNumber(),
      },
    }));

    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      cancel_url: CLIENT_URL,
      payment_method_types: ["card"],
      success_url: `${CLIENT_URL}/orders`,
      customer_email: session.user.email!,
      client_reference_id: session.user.id,
      shipping_address_collection: {
        allowed_countries: ["PH"],
      },
      line_items: orders.map((order) => ({
        quantity: 1,
        price_data: {
          currency: "php",
          unit_amount: order.product.price * 100,
          product_data: {
            name: order.product.name,
            images: order.product.images.map(({ image }) => image.url),
            metadata: {
              order_id: order.id,
              product_id: order.product.id,
            },
          },
        },
      })),
    });

    return NextResponse.json(checkout, { status: 200 });
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
