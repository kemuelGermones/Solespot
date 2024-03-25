import db from "@/db";

interface GetProductsPages {
  distinct?: ("name" | "gender")[];
  name?: string;
  brands?: string[];
  contains?: string;
  genders?: string[];
  categories?: string[];
}

export default async function getProductsPages({
  name,
  brands,
  genders,
  distinct,
  contains,
  categories,
}: GetProductsPages) {
  const products = await db.product.findMany({
    distinct,
    where: {
      AND: [
        { name },
        {
          brand: {
            in: brands,
          },
        },
        {
          category: {
            in: categories,
          },
        },
        {
          gender: {
            in: genders,
          },
        },
        {
          name: {
            contains,
            mode: "insensitive",
          },
        },
        {
          stock: {
            quantity: {
              gt: 0,
            },
          },
        },
      ],
    },
  });

  return Math.ceil(products.length / 12);
}
