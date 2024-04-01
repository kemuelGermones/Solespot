import db from "@/db";

interface GetProducts {
  take?: number;
  skip?: number;
  name?: string;
  brands?: string[];
  genders?: string[];
  categories?: string[];
  price?: "desc" | "asc";
  createdAt?: "desc" | "asc";
  distinct?: ("name" | "gender")[];
}

export default async function getProducts({
  skip,
  name,
  take,
  price,
  brands,
  genders,
  distinct,
  createdAt,
  categories,
}: GetProducts) {
  const results = await db.product.findMany({
    take,
    skip,
    distinct,
    orderBy: {
      createdAt,
      price,
    },
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

  const products = results.map((result) => ({
    ...result,
    price: result.price.toNumber(),
  }));

  return products;
}
