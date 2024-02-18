import db from "@/db";
import { notFound } from "next/navigation";
import type Product from "@/types/product";

export default async function getTopRecommendedProducts(name: string) {
  const product = await db.product.findFirst({
    where: {
      name,
    },
    select: {
      category: true,
      gender: true,
    },
  });

  if (!product) {
    notFound();
  }

  const products = await db.product.groupBy({
    by: ["name", "price", "brand", "gender", "createdAt"],
    where: {
      category: product.category,
      gender: product.gender,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  const response: Product[] = [];
  for (let product of products) {
    const image = (await db.thumbnail.findFirst({
      where: {
        sequence: 0,
        image: {
          name: product.name,
        },
      },
      select: {
        image: true,
      },
    }))!.image;
    response.push({ ...product, image: image.url });
  }

  return response;
}
