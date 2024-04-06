"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";

export default function SignInWithGithubButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full bg-foreground font-bold text-white"
      radius="none"
      type="submit"
      startContent={<BsGithub />}
      disabled={pending}
    >
      SIGN IN WITH GITHUB
    </Button>
  );
}
