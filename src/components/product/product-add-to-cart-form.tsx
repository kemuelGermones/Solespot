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
  const [currentId, setCurrentId] = useState(new Set([products[0].id]));
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

  const handleChangeId = (values: Selection) => {
    setCurrentId(values as Set<string>);
  };

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault();
    mutate(currentId.values().next().value);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleAddToCart}>
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
        isInvalid={!currentId.size}
        selectedKeys={currentId}
        onSelectionChange={handleChangeId}
      >
        {products.map((product) => (
          <SelectItem value={product.id} key={product.id}>
            {product.size.toUpperCase()}
          </SelectItem>
        ))}
      </Select>
      <Button
        className="bg-foreground font-bold text-white"
        radius="none"
        type="submit"
        isDisabled={!currentId.size || isPending}
      >
        ADD TO CART
      </Button>
    </form>
  );
}
