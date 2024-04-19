import { Suspense } from "react";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import OrderList from "@/components/order/order-list";
import Pagination from "@/components/ui/pagination";
import ListSkeleton from "@/components/ui/list-skeleton";
import getOrdersPages from "@/queries/get-orders-pages";
import getOrders from "@/queries/get-orders";

interface OrdersProps {
  searchParams?: {
    page?: string;
  };
}

export default async function Orders({ searchParams }: OrdersProps) {
  const { page: part = "1" } = { ...searchParams };

  const session = await auth();
  if (!session?.user) {
    notFound();
  }

  const page = Number(part);
  const total = await getOrdersPages(session.user.id);
  if (
    page < 1 ||
    isNaN(page) ||
    (total === 0 && page !== 1) ||
    (total > 0 && page > total)
  ) {
    notFound();
  }

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
      <Suspense fallback={<ListSkeleton length={12} />}>
        <OrderList
          query={getOrders.bind(null, {
            take: 12,
            orderedAt: "desc",
            skip: (page - 1) * 12,
            userId: session.user.id,
          })}
        />
      </Suspense>
      <Pagination total={total} />
    </div>
  );
}
