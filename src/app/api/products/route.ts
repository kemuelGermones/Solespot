import { type NextRequest, NextResponse } from "next/server";
import db from "@/db";

export async function GET(request: NextRequest) {
  try {
    const {
      nextUrl: { searchParams },
    } = request;

    const contains = searchParams.get("search") ?? undefined;

    const results = await db.product.findMany({
      take: 8,
      distinct: ["name", "gender"],
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
      where: {
        AND: [
          {
            stock: {
              quantity: {
                gt: 0,
              },
            },
          },
          {
            name: {
              contains,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    const products = results.map((result) => ({
      ...result,
      price: result.price.toNumber(),
    }));

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Sorry, but it seems like an unexpected error has occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
