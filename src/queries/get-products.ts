import db from "@/db";

interface GetProducts {
  take?: number;
  skip?: number;
  distinct?: ("name" | "gender")[];
  name?: string;
  brands?: string[];
  contains?: string;
  genders?: string[];
  categories?: string[];
  price?: "desc" | "asc";
  createdAt?: "desc" | "asc";
}

export default async function getProducts({
  skip,
  name,
  take,
  price,
  brands,
  genders,
  distinct,
  contains,
  createdAt,
  categories,
}: GetProducts) {
  const products = await db.product.findMany({
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

  return products;
}
