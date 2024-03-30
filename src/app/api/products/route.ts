import { type NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import db from "@/db";

export async function GET(request: NextRequest) {
  try {
    const {
      nextUrl: { searchParams },
    } = request;

    const contains = searchParams.get("search") || undefined;

    const products = await db.product.findMany({
      take: 8,
      distinct: ["name", "gender"],
      orderBy: {
        createdAt: "desc",
      },
      where: {
        name: {
          contains,
          mode: "insensitive",
        },
      },
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
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        {
          message:
            "Sorry, a database connection error has occured. Please verify credentials and try again.",
        },
        { status: 500 },
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
