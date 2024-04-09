import db from "@/db";

interface GetOrders {
  skip?: number;
  take?: number;
  userId?: string;
  orderedAt?: "desc" | "asc";
}

export default async function getOrders({
  skip,
  take,
  userId,
  orderedAt,
}: GetOrders) {
  const results = await db.order.findMany({
    skip,
    take,
    orderBy: {
      orderedAt,
    },
    where: {
      AND: [{ userId }, { isPaid: true }],
    },
    include: {
      product: {
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
      },
    },
  });

  const orders = results.map((result) => ({
    ...result,
    product: {
      ...result.product,
      price: result.product.price.toNumber(),
    },
  }));

  return orders;
}
