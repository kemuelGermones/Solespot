"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import axios from "@/configs/axios";
import CartItemRemoveButton from "@/components/cart/cart-item-remove-button";
import formatPrice from "@/utils/format-price";
import type Order from "@/types/order";

interface CartItemsProps {
  onClick: () => void;
}

export default function CartItems({ onClick }: CartItemsProps) {
  const {
    error,
    isError,
    isLoading,
    data: response,
  } = useQuery({
    queryKey: ["api", "orders", { preview: false }],
    queryFn: () => axios.get<Order[]>("/api/orders"),
  });

  if (isLoading) {
    return (
      <>
        <div className="text-center text-4xl font-bold">LOADING...</div>
        <div className="text-center">
          &quot;I learned that if you want to make it bad enough, no matter how
          bad it is, you can make it.&quot; -Gale Sayers
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="text-center text-4xl font-bold">
          OOPS! SOMETHING WENT WRONG
        </div>
        <div className="text-center">{error.message}</div>
      </>
    );
  }

  if (!response!.data.length) {
    return (
      <>
        <div className="text-center text-4xl font-bold">YOUR CART IS EMPTY</div>
        <div className="text-center">
          Looks like you haven&apos;t made your choice yet...
        </div>
      </>
    );
  }

  return response!.data.map((order) => (
    <Link
      className="grid grid-cols-[1fr_2fr] gap-2"
      key={order.id}
      onClick={onClick}
      href={`/products/${order.product.name.replaceAll(" ", "_")}/${order.product.gender}`}
    >
      <Image
        width={500}
        height={500}
        quality={100}
        draggable={false}
        alt={order.product.name}
        src={order.product.images[0].image.url}
      />
      <div className="flex flex-col gap-2">
        <div className="text-sm text-foreground-500">
          {order.product.brand.toUpperCase()}
        </div>
        <div className="font-bold">{order.product.name}</div>
        <div className="text-sm text-foreground-500">
          {`${order.product.size.toUpperCase()} / ${order.product.gender.toUpperCase()}`}
        </div>
        <div className="flex justify-between">
          <div>{formatPrice(order.product.price)}</div>
          <CartItemRemoveButton id={order.id} />
        </div>
      </div>
    </Link>
  ));
}
