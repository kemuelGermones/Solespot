"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import SearchItems from "@/components/search/search-items";

export default function SearchModal() {
  const [currentValue, setCurrentValue] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [debouncedValue] = useDebounce(currentValue.trim(), 500);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  return (
    <>
      <Button
        className="w-full justify-start bg-default-100 text-foreground-500"
        type="button"
        radius="none"
        onPress={onOpen}
        startContent={<BsSearch />}
      >
        Search
      </Button>
      <Modal
        size="lg"
        radius="none"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ closeButton: "hidden" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <Input
                  size="sm"
                  type="search"
                  radius="none"
                  placeholder="Search"
                  value={currentValue}
                  startContent={<BsSearch />}
                  onChange={handleChangeValue}
                />
              </ModalHeader>
              <ModalBody className="gap-4">
                <SearchItems onClick={onClose} search={debouncedValue}  />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-foreground font-bold text-white"
                  type="button"
                  radius="none"
                  onPress={onClose}
                >
                  CLOSE
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
