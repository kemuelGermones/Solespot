"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Select, SelectItem, Button } from "@nextui-org/react";
import axios from "@/configs/axios";
import type Product from "@/types/product";
import { type Selection } from "@nextui-org/react";

interface AddToCartFormProps {
  products: Product[];
}

export default function ProductAddToCartForm({ products }: AddToCartFormProps) {
  const [currentId, setCurrentId] = useState(new Set([products[0].id]));
  const queryClient = useQueryClient();

  const { mutate, error, isPending, isError } = useMutation({
    mutationFn: (id: string) => axios.post("/api/orders", { id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api", "orders"] });
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
        disabled={!currentId.size || isPending}
      >
        {isPending ? "LOADING..." : "ADD TO CART"}
      </Button>
      {isError ? (
        <div className="text-xs text-danger">{error.message}</div>
      ) : null}
    </form>
  );
}
