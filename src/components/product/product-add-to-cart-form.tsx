"use client";

import { useState } from "react";
import useCart from "@/hooks/use-cart";
import { Select, SelectItem, Button } from "@nextui-org/react";
import type Product from "@/types/product";
import type { Selection } from "@nextui-org/react";

interface AddToCartFormProps {
  products: Product[];
}

export default function ProductAddToCartForm({ products }: AddToCartFormProps) {
  const [currentIndex, setCurrentIndex] = useState("0");
  const { addProduct } = useCart();

  const handleChangeIndex = (values: Selection) => {
    setCurrentIndex((values as Set<string>).values().next().value);
  };

  const handleAddProduct = (event: React.FormEvent) => {
    event.preventDefault();
    addProduct(products[+currentIndex]);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleAddProduct}>
      <Select
        size="sm"
        radius="none"
        label="SIZE"
        placeholder="SELECT A SIZE"
        popoverProps={{
          radius: "none",
        }}
        listboxProps={{
          itemClasses: {
            base: ["rounded-none"],
          },
        }}
        selectedKeys={new Set([currentIndex])}
        onSelectionChange={handleChangeIndex}
      >
        {products.map((product, index) => (
          <SelectItem value={index.toString()} key={index.toString()}>
            {product.size.toUpperCase()}
          </SelectItem>
        ))}
      </Select>
      <Button
        className="bg-foreground font-bold text-white"
        radius="none"
        type="submit"
      >
        ADD TO CART
      </Button>
    </form>
  );
}
