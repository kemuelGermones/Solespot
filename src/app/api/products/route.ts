import { type NextRequest, NextResponse } from "next/server";
import getProducts from "@/queries/get-products";

export async function GET(request: NextRequest) {
  const contains = request.nextUrl.searchParams.get("contains") || undefined;

  const products = await getProducts({
    contains,
    take: 8,
    createdAt: "desc",
    distinct: ["name", "gender"],
  });

  return NextResponse.json(products);
}
