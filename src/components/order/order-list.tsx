import Image from "next/image";
import Link from "next/link";
import formatPrice from "@/utils/format-price";
import type Order from "@/types/order";

interface OrderListProps {
  query: () => Promise<Order[]>;
}

export default async function OrderList({ query }: OrderListProps) {
  const orders = await query();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {orders.length ? (
        orders.map((order) => (
          <Link
            className="flex flex-col gap-2"
            key={order.id}
            href={`/products/${order.product.name.replaceAll(" ", "_")}/${
              order.product.gender
            }`}
          >
            <Image
              width={500}
              height={500}
              quality={100}
              draggable={false}
              alt={order.product.name}
              src={order.product.images[0].image.url}
            />
            <div className="text-sm text-foreground-500">
              {order.product.brand.toUpperCase()}
            </div>
            <div className="font-bold">{order.product.name}</div>
            <div className="text-sm text-foreground-500">
              {`${order.product.size.toUpperCase()} / ${order.product.gender.toUpperCase()}`}
            </div>
            <div>{formatPrice(order.product.price)}</div>
            {order.receivedAt ? (
              <div className="text-success">DELIVERED</div>
            ) : (
              <div className="text-warning">SHIPPED</div>
            )}
          </Link>
        ))
      ) : (
        <>
          <div className="col-span-2 text-center text-4xl font-bold md:col-span-4">
            YOU DON&apos;T HAVE ANY ORDERS YET
          </div>
          <div className="col-span-2 text-center md:col-span-4">
            Looks like you haven&apos;t made your choice yet...
          </div>
        </>
      )}
    </div>
  );
}
