import db from "@/db";
import type Product from "@/types/product";

export default async function getTopNewProducts() {
  const products = await db.product.groupBy({
    by: ["name", "price", "brand", "gender", "createdAt"],
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
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
