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
import SearchList from "@/components/search/search-list";

export default function SearchModal() {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search.trim(), 500);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Button
        className="w-full justify-start bg-default-100 text-foreground-500"
        radius="none"
        type="button"
        startContent={<BsSearch />}
        onClick={onOpen}
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
                  radius="none"
                  size="sm"
                  type="search"
                  placeholder="Search"
                  startContent={<BsSearch />}
                  value={search}
                  onChange={handleChangeSearch}
                />
              </ModalHeader>
              <ModalBody className="gap-4">
                <SearchList search={value} onClose={onClose} />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-foreground font-bold text-white"
                  radius="none"
                  type="button"
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
