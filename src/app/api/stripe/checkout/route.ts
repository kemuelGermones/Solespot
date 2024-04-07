import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import db from "@/db";
import { auth } from "@/auth";
import ApiError from "@/utils/api-error";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

if (!STRIPE_SECRET_KEY || !CLIENT_URL) {
  throw new Error(
    "Sorry, an error occured due to missing Stripe or client credentials. Please provide it.",
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
      where: {
        AND: [{ userId: session.user.id }, { isPaid: false }],
      },
      orderBy: {
        orderedAt: "asc",
      },
      include: {
        product: {
          include: {
            images: {
              orderBy: {
                sequence: "asc",
              },
              select: {
                image: true,
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
      cancel_url: CLIENT_URL,
      success_url: `${CLIENT_URL}/orders`,
      customer_email: session.user.email!,
      client_reference_id: session.user.id,
      line_items: orders.map((order) => ({
        price_data: {
          unit_amount: order.product.price * 100,
          product_data: {
            name: order.product.name,
            images: order.product.images.map(({ image }) => image.url),
          },
          currency: "php",
        },
        quantity: 1,
      })),
      mode: "payment",
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["PH"],
      },
    });

    return NextResponse.json(checkout, { status: 200 });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      {
        message:
          "Sorry, but it seems like an unexpected error has occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
