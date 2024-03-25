"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import { BsGoogle } from "react-icons/bs";
import signInWithGoogle from "@/actions/sign-in-with-google";

export default function SignInWithGoogleForm() {
  const { pending } = useFormStatus();

  return (
    <form action={signInWithGoogle}>
      <Button
        className="w-full bg-foreground font-bold text-white"
        radius="none"
        type="submit"
        startContent={<BsGoogle />}
        disabled={pending}
      >
        SIGN IN WITH GOOGLE
      </Button>
    </form>
  );
}
