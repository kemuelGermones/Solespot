"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import Stripe from "stripe";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BsCart4 } from "react-icons/bs";
import axios from "@/configs/axios";
import toast from "react-hot-toast";
import CartItems from "@/components/cart/cart-items";
import type Order from "@/types/order";

export default function CartModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    isError,
    isLoading,
    data: response,
  } = useQuery({
    retry: false,
    queryKey: ["api", "orders", { preview: true }],
    queryFn: () => axios.get<Order[]>("/api/orders"),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      axios.post<Stripe.Response<Stripe.Checkout.Session>>(
        `/api/stripe/sessions/checkout`,
      ),
    onSuccess: (feedback) => {
      window.location.assign(feedback.data.url!);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleCheckout = () => {
    mutate();
  };

  return (
    <>
      <Badge
        color="danger"
        isInvisible={isLoading || isError || !response!.data.length}
        content={!isLoading && !isError ? response!.data.length : null}
      >
        <Button
          type="button"
          radius="full"
          variant="light"
          onPress={onOpen}
          isIconOnly={true}
          isDisabled={isLoading}
        >
          <BsCart4 size="1.5em" />
        </Button>
      </Badge>
      <Modal
        size="lg"
        radius="none"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>CART</ModalHeader>
              <ModalBody className="gap-4">
                <CartItems onClick={onClose} />
              </ModalBody>
              <ModalFooter className="gap-4">
                <Button
                  className="bg-foreground font-bold text-white"
                  type="button"
                  radius="none"
                  onPress={handleCheckout}
                  isDisabled={
                    isLoading || isPending || isError || !response!.data.length
                  }
                >
                  CHECKOUT
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
