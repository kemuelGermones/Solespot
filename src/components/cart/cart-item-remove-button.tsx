"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "@/configs/axios";

interface CartItemRemoveButtonProps {
  id: string;
}

export default function CartItemRemoveButton({
  id,
}: CartItemRemoveButtonProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.delete(`/api/orders/${id}`),
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

  const handleRemoveToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    mutate();
  };

  return (
    <Button
      type="button"
      radius="full"
      variant="light"
      isIconOnly={true}
      isDisabled={isPending}
      onClick={handleRemoveToCart}
    >
      <BsTrash />
    </Button>
  );
}
