import db from "@/db";

export default async function getOrdersPages(userId?: string) {
  const orders = await db.order.findMany({
    where: {
      AND: [{ userId }, { isPaid: true }],
    },
  });

  return Math.ceil(orders.length / 12);
}
