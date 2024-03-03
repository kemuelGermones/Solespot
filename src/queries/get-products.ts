import db from "@/db";
import type Product from "@/types/product";

interface GetProductsParameters {
  take?: number;
  skip?: number;
  createdAt?: "desc" | "asc";
  price?: "desc" | "asc";
  brand?: string[];
  category?: string[];
  gender?: string[];
}

export default async function getProducts({
  take,
  skip,
  createdAt,
  price,
  brand,
  category,
  gender,
}: GetProductsParameters) {
  const products = await db.product.groupBy({
    take,
    skip,
    orderBy: {
      createdAt,
      price,
    },
    where: {
      brand: {
        in: brand,
      },
      category: {
        in: category,
      },
      gender: {
        in: gender,
      },
    },
    by: ["name", "price", "brand", "gender", "createdAt"],
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
