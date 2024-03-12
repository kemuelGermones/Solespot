import db from "@/db";

interface GetProductsParameters {
  take?: number;
  skip?: number;
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
  createdAt?: "desc" | "asc";
  price?: "desc" | "asc";
  name?: string;
  brand?: string[];
  category?: string[];
  gender?: string[];
  contains?: string;
}

export default async function getProducts({
  take,
  skip,
  distinct,
  createdAt,
  price,
  name,
  brand,
  category,
  gender,
  contains,
}: GetProductsParameters) {
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
