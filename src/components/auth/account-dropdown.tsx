"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
} from "@nextui-org/react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import signOut from "@/actions/sign-out";

export default function AccountDropdown() {
  const [isContentOpen, setIsContentOpen] = useState(false);
  const { status, data } = useSession();

  const handleCloseContent = () => {
    setIsContentOpen(false);
  };

  if (status === "loading") {
    return (
      <Button
        type="button"
        radius="full"
        variant="light"
        isIconOnly={true}
        isDisabled={true}
      >
        <BsPerson size="1.5em" />
      </Button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Button
        type="button"
        radius="full"
        href="/sign_in"
        variant="light"
        as={Link}
        isIconOnly={true}
      >
        <BsPerson size="1.5em" />
      </Button>
    );
  }

  return (
    <Popover
      radius="none"
      isOpen={isContentOpen}
      onOpenChange={setIsContentOpen}
    >
      <PopoverTrigger>
        <Button type="button" radius="full" variant="light" isIconOnly={true}>
          <BsPerson size="1.5em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] gap-0.5 p-2">
        <User
          description={data!.user!.email!}
          name={data!.user!.name!.toUpperCase()}
          avatarProps={{
            src: data!.user!.image!,
          }}
          classNames={{
            description: "text-foreground-500",
            base: "w-full px-2 py-1.5 justify-start",
          }}
        />
        <Button
          className="w-full justify-start px-2 py-1.5"
          type="button"
          radius="none"
          href="/orders"
          variant="light"
          as={Link}
          onPress={handleCloseContent}
        >
          ORDERS
        </Button>
        <form className="w-full" action={signOut}>
          <Button
            className="w-full justify-start px-2 py-1.5"
            type="submit"
            radius="none"
            variant="light"
            onPress={handleCloseContent}
          >
            SIGN OUT
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
