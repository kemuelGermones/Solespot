"use client";

import { useQuery } from "@tanstack/react-query";
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
import CartItems from "@/components/cart/cart-items";
import type Order from "@/types/order";

export default function CartModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: response } = useQuery({
    queryKey: ["api", "orders"],
    queryFn: () => axios.get<Order[]>("/api/orders"),
  });

  return (
    <>
      <Badge
        color="danger"
        isInvisible={!response || !response.data.length}
        content={response ? response.data.length : undefined}
      >
        <Button
          radius="full"
          variant="light"
          type="button"
          isIconOnly={true}
          onClick={onOpen}
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
                <CartItems onClose={onClose} />
              </ModalBody>
              <ModalFooter className="gap-4">
                <Button
                  className="bg-foreground font-bold text-white"
                  radius="none"
                  type="button"
                  onPress={onClose}
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
