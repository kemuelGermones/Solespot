import db from "@/db";

interface GetProductsParameters {
  take?: number;
  skip?: number;
  distinct?: (
    | "id"
    | "name"
    | "size"
    | "about"
    | "price"
    | "brand"
    | "gender"
    | "category"
    | "createdAt"
    | "description"
  )[];
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
