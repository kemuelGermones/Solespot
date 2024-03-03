import db from "@/db";

interface GetProductsPagesParameters {
  brand?: string[];
  category?: string[];
  gender?: string[];
}

export default async function getProductsPages({
  brand,
  category,
  gender,
}: GetProductsPagesParameters) {
  const products = await db.product.groupBy({
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

  return Math.ceil(products.length / 12);
}
