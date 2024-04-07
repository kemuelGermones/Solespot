"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import axios from "@/configs/axios";
import CartItemRemoveButton from "@/components/cart/cart-item-remove-button";
import formatPrice from "@/utils/format-price";
import type Order from "@/types/order";

interface CartItemsProps {
  onClose: () => void;
}

export default function CartItems({ onClose }: CartItemsProps) {
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
          "I learned that if you want to make it bad enough, no matter how bad
          it is, you can make it." -Gale Sayers
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
          Looks like you haven't made your choice yet...
        </div>
      </>
    );
  }

  return response!.data.map((order) => (
    <Link
      className="grid grid-cols-[1fr_2fr] gap-2"
      href={`/products/${order.product.name.replaceAll(" ", "_")}/${order.product.gender}`}
      onClick={onClose}
      key={order.id}
    >
      <Image
        width={500}
        height={500}
        quality={100}
        draggable={false}
        src={order.product.images[0].image.url}
        alt={order.product.name}
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
