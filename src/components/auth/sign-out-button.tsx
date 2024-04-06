"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

export default function SignOutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full justify-start px-2 py-1.5"
      radius="none"
      variant="light"
      type="submit"
      disabled={pending}
    >
      SIGN OUT
    </Button>
  );
}
