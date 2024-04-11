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

  const total = await getOrdersPages(session.user.id);

  if (
    +page < 1 ||
    (total > 0 && +page > total) ||
    (total === 0 && +page !== 1)
  ) {
    notFound();
  }

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
      <OrderList
        query={getOrders.bind(null, {
          take: 12,
          orderedAt: "desc",
          skip: (+page - 1) * 12,
          userId: session.user.id,
        })}
      />
      {total > 1 ? <Pagination total={total} /> : null}
    </div>
  );
}
