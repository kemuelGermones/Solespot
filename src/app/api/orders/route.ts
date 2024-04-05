import { type NextRequest, NextResponse } from "next/server";
import z from "zod";
import db from "@/db";
import { auth } from "@/auth";
import ApiError from "@/utils/api-error";

const schema = z.object({
  id: z.string().cuid().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new ApiError(
        "Sorry, you must be signed in to do this. Please sign in first.",
        400,
      );
    }

    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      throw new ApiError(
        "Sorry, you didn't select a size or a validation error has occured. Please verify it and try again.",
        400,
      );
    }

    const product = await db.product.findUnique({
      where: { id: validation.data.id },
    });

    if (!product) {
      throw new ApiError(
        "Sorry, product was not found. Please try again.",
        400,
      );
    }

    await db.order.create({
      data: {
        userId: session.user.id,
        productId: product.id,
        isPaid: false,
      },
    });

    return NextResponse.json(null, { status: 200 });
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

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new ApiError(
        "Sorry, you must be signed in see this. Please sign in first.",
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

    const orders = results.map((result) => ({
      ...result,
      product: {
        ...result.product,
        price: result.product.price.toNumber(),
      },
    }));

    return NextResponse.json(orders, { status: 200 });
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
