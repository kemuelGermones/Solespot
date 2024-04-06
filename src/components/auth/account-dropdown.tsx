"use client";

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
import SignOutButton from "@/components/auth/sign-out-button";
import signOut from "@/actions/sign-out";

export default function AccountDropdown() {
  const { status, data } = useSession();

  if (status === "loading") {
    return (
      <Button
        radius="full"
        variant="light"
        type="button"
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
        radius="full"
        variant="light"
        type="button"
        href="/sign_in"
        isIconOnly={true}
        as={Link}
      >
        <BsPerson size="1.5em" />
      </Button>
    );
  }

  return (
    <Popover radius="none">
      <PopoverTrigger>
        <Button radius="full" variant="light" type="button" isIconOnly={true}>
          <BsPerson size="1.5em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] gap-0.5 p-2">
        <User
          classNames={{
            base: "w-full px-2 py-1.5 justify-start",
            description: "text-foreground-500",
          }}
          name={data!.user!.name!.toUpperCase()}
          description={data!.user!.email}
          avatarProps={{
            src: data!.user!.image!,
          }}
        />
        <Button
          className="w-full justify-start px-2 py-1.5"
          radius="none"
          variant="light"
          type="button"
          href="/orders"
          as={Link}
        >
          ORDERS
        </Button>
        <form className="w-full" action={signOut}>
          <SignOutButton />
        </form>
      </PopoverContent>
    </Popover>
  );
}
