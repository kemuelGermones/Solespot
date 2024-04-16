import { type NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { auth } from "@/auth";
import ApiError from "@/utils/api-error";

interface DeleteParams {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: DeleteParams) {
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
      throw new ApiError(
        "Sorry, cart item was not found. Please try again.",
        400,
      );
    }

    if (order.userId !== session.user.id) {
      throw new ApiError(
        "Sorry, you're not allowed to delete this cart item. Please try again.",
        400,
      );
    }

    await db.order.delete({ where: { id: params.id } });

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
