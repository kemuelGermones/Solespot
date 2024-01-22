"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ScrollShadow,
} from "@nextui-org/react";
import { BsCart4, BsTrash } from "react-icons/bs";
import Image from "next/image";

export default function Cart() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button type="button" onClick={onOpen}>
        <BsCart4 size="1.5em" />
      </button>
      <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>CART</ModalHeader>
              <ModalBody>
                <ScrollShadow
                  className="max-h-80 flex flex-col gap-3"
                  size={0}
                  hideScrollBar
                >
                  <div className="flex gap-2">
                    <Image
                      src="/shoe.webp"
                      alt="shoe"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-2">
                      <div className="font-bold">
                        Under Armour Curry 11 "Champion Mindset"
                      </div>
                      <div className="text-gray-500 text-sm">Size: 7.5</div>
                      <div className="flex justify-between">
                        <div>₱9,195.00</div>
                        <button className="outline-none" type="button">
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollShadow>
                <div className="flex justify-between">
                  <div className="font-bold">SUBTOTAL</div>
                  <div className="font-bold">₱9,195.00</div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-black text-white"
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
