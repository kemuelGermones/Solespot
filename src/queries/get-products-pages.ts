import db from "@/db";

interface GetProductsPagesParameters {
  distinct?: (
    | "id"
    | "name"
    | "price"
    | "brand"
    | "category"
    | "gender"
    | "size"
    | "about"
    | "description"
    | "createdAt"
  )[];
  name?: string;
  brand?: string[];
  category?: string[];
  gender?: string[];
}

export default async function getProductsPages({
  distinct,
  name,
  brand,
  category,
  gender,
}: GetProductsPagesParameters) {
  const products = await db.product.findMany({
    distinct,
    where: {
      AND: [
        { name },
        { brand: { in: brand } },
        { category: { in: category } },
        { gender: { in: gender } },
      ],
    },
  });

  return Math.ceil(products.length / 12);
}
