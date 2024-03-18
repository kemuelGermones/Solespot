"use client";

import useCart from "@/hook/use-cart";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";
import formatPrice from "@/util/format-price";

export default function CartList() {
  const { products, removeProduct } = useCart();

  const handleRemoveProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    removeProduct(products[+event.currentTarget.value]);
  };

  if (products.length === 0) {
    return (
      <>
        <div className="text-center text-4xl font-bold">YOUR CART IS EMPTY</div>
        <div className="text-center">
          Looks like you haven't made your choice yet...
        </div>
      </>
    );
  }

  return products.map((product, index) => (
    <Link
      className="grid grid-cols-[1fr_2fr] gap-2"
      href={`/products/${product.name.replaceAll(" ", "_")}/${product.gender}`}
      key={product.id}
    >
      <Image
        width={500}
        height={500}
        quality={100}
        draggable={false}
        src={product.images[0].image.url}
        alt={product.name}
      />
      <div className="flex flex-col gap-2">
        <div className="text-sm text-foreground-500">
          {product.brand.toUpperCase()}
        </div>
        <div className="font-bold">{product.name}</div>
        <div className="text-sm text-foreground-500">
          {`${product.size.toUpperCase()} / ${product.gender.toUpperCase()}`}
        </div>
        <div className="flex justify-between">
          <div>{formatPrice(product.price)}</div>
          <Button
            radius="full"
            variant="light"
            type="button"
            isIconOnly={true}
            value={index.toString()}
            onClick={handleRemoveProduct}
          >
            <BsTrash />
          </Button>
        </div>
      </div>
    </Link>
  ));
}
