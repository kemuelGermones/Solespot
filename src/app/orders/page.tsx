import { notFound } from "next/navigation";
import { auth } from "@/auth";
import OrderList from "@/components/order/order-list";
import Pagination from "@/components/ui/pagination";
import getOrdersPages from "@/queries/get-orders-pages";
import getOrders from "@/queries/get-orders";

interface OrdersProps {
  searchParams?: {
    page?: string;
  };
}

export default async function Orders({ searchParams }: OrdersProps) {
  const { page = "1" } = { ...searchParams };

  const session = await auth();

  if (!session?.user) {
    notFound();
  }

  const totalPages = await getOrdersPages(session.user.id);

  const leaf = Number(page);
  if (
    leaf < 1 ||
    isNaN(leaf) ||
    (totalPages === 0 && leaf !== 1) ||
    (totalPages > 0 && leaf > totalPages)
  ) {
    notFound();
  }

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
      <OrderList
        query={getOrders.bind(null, {
          skip: (leaf - 1) * 12,
          userId: session.user.id,
          take: 12,
          orderedAt: "desc",
        })}
      />
      <Pagination total={totalPages} />
    </div>
  );
}
