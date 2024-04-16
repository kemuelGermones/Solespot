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
        "Sorry, product was not found. Please try again.",
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
        isPaid: false,
        productId: product.id,
        userId: session.user.id,
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

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new ApiError(
        "Sorry, you must be signed in see this. Please sign in first.",
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
      select: {
        id: true,
        isPaid: true,
        orderedAt: true,
        receivedAt: true,
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

    const orders = results.map((result) => ({
      ...result,
      product: {
        ...result.product,
        price: result.product.price.toNumber(),
      },
    }));

    return NextResponse.json(orders, { status: 200 });
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
