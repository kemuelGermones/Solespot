"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Select, SelectItem, Button } from "@nextui-org/react";
import axios from "@/configs/axios";
import toast from "react-hot-toast";
import type Product from "@/types/product";
import { type Selection } from "@nextui-org/react";

interface ProductAddToCartFormProps {
  products: Product[];
}

export default function ProductAddToCartForm({
  products,
}: ProductAddToCartFormProps) {
  const [currentProduct, setCurrentProduct] = useState(
    new Set([products[0].id]),
  );
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => axios.post("/api/orders", { id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["api", "orders", { preview: true }],
      });
      queryClient.invalidateQueries({
        queryKey: ["api", "orders", { preview: false }],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleChangeProduct = (values: Selection) => {
    setCurrentProduct(values as Set<string>);
  };

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault();
    mutate(currentProduct.values().next().value);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleAddToCart}>
      <Select
        size="sm"
        label="SIZE"
        radius="none"
        placeholder="SELECT A SIZE"
        selectedKeys={currentProduct}
        isInvalid={!currentProduct.size}
        onSelectionChange={handleChangeProduct}
        popoverProps={{
          radius: "none",
        }}
        listboxProps={{
          itemClasses: {
            base: ["rounded-none"],
          },
        }}
      >
        {products.map((product) => (
          <SelectItem key={product.id} value={product.id}>
            {product.size.toUpperCase()}
          </SelectItem>
        ))}
      </Select>
      <Button
        className="bg-foreground font-bold text-white"
        type="submit"
        radius="none"
        isDisabled={isPending || !currentProduct.size}
      >
        ADD TO CART
      </Button>
    </form>
  );
}
