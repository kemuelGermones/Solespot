"use client";

import useCart from "@/hooks/use-cart";
import { Prisma } from "@prisma/client";
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
import CartList from "@/components/cart/cart-list";
import formatPrice from "@/utils/format-price";
import type Product from "@/types/product";

const sumUpProductsPrice = (products: Product[]) => {
  return products.reduce<Prisma.Decimal>(
    (subtotal, product) => new Prisma.Decimal(product.price).add(subtotal),
    new Prisma.Decimal(0),
  );
};

export default function CartModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { products } = useCart();

  return (
    <>
      <Badge
        color="danger"
        isInvisible={products.length === 0}
        content={products.length}
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
                <CartList />
              </ModalBody>
              <ModalFooter className="gap-4">
                <div className="flex grow items-center justify-between">
                  <div className="text-lg font-bold">SUBTOTAL</div>
                  <div className="text-lg font-bold">
                    {formatPrice(sumUpProductsPrice(products))}
                  </div>
                </div>
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
