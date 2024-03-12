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
  contains?: string;
}

export default async function getProductsPages({
  distinct,
  name,
  brand,
  category,
  gender,
  contains,
}: GetProductsPagesParameters) {
  const products = await db.product.findMany({
    distinct,
    where: {
      AND: [
        { name },
        {
          brand: {
            in: brand,
          },
        },
        {
          category: {
            in: category,
          },
        },
        {
          gender: {
            in: gender,
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

  return Math.ceil(products.length / 12);
}
