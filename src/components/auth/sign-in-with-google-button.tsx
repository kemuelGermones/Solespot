"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { BsGoogle } from "react-icons/bs";

export default function SignInWithGoogleButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full bg-foreground font-bold text-white"
      radius="none"
      type="submit"
      startContent={<BsGoogle />}
      isDisabled={pending}
    >
      SIGN IN WITH GOOGLE
    </Button>
  );
}
