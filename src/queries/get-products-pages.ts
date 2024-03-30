import db from "@/db";

interface GetProductsPages {
  name?: string;
  brands?: string[];
  genders?: string[];
  categories?: string[];
  distinct?: ("name" | "gender")[];
}

export default async function getProductsPages({
  name,
  brands,
  genders,
  distinct,
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
