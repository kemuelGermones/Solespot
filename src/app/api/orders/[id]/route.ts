import { type NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { auth } from "@/auth";
import ApiError from "@/utils/api-error";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new ApiError(
        "Sorry, you must be signed in to do this. Please sign in first.",
        400,
      );
    }

    const order = await db.order.findFirst({
      where: {
        AND: [{ id: params.id }, { isPaid: false }],
      },
    });

    if (!order) {
      throw new ApiError("Sorry, no order were found. Please try again.", 400);
    }

    if (session.user.id !== order.userId) {
      throw new ApiError(
        "Sorry, you're not allowed to delete this order. Please try again.",
        400,
      );
    }

    await db.order.delete({ where: { id: params.id } });

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
