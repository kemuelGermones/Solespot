"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "@/configs/axios";

interface CartDeleteButtonProps {
  id: string;
}

export default function CartItemRemoveButton({ id }: CartDeleteButtonProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.delete(`/api/orders/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api", "orders"] });
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
      radius="full"
      variant="light"
      type="button"
      isIconOnly={true}
      disabled={isPending}
      onClick={handleRemoveToCart}
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <BsTrash />
      )}
    </Button>
  );
}
