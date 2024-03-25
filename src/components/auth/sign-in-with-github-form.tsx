"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import signInWithGithub from "@/actions/sign-in-with-github";

export default function SignInWithGithubForm() {
  const { pending } = useFormStatus();

  return (
    <form action={signInWithGithub}>
      <Button
        className="w-full bg-foreground font-bold text-white"
        radius="none"
        type="submit"
        startContent={<BsGithub />}
        disabled={pending}
      >
        SIGN IN WITH GITHUB
      </Button>
    </form>
  );
}
