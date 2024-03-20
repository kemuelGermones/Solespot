"use client";

import { useFormState } from "react-dom";
import { Input, Button, Link as Anchor } from "@nextui-org/react";
import Link from "next/link";
import signIn from "@/actions/sign-in";

export default function SignInForm() {
  const [formState, action] = useFormState(signIn, { errors: {} });

  return (
    <form className="flex flex-col gap-4" action={action}>
      {formState.errors._form ? (
        <div className="bg-danger-50 px-4 py-2.5">
          <div className="text-sm text-danger">
            {formState.errors._form.join(". ")}
          </div>
        </div>
      ) : null}
      <Input
        radius="none"
        label="Email"
        labelPlacement="outside"
        type="email"
        name="email"
        placeholder="Enter your email"
        isInvalid={!!formState.errors.email}
        errorMessage={formState.errors.email?.join(". ")}
      />
      <Input
        radius="none"
        label="Password"
        labelPlacement="outside"
        type="password"
        name="password"
        placeholder="Enter your password"
        isInvalid={!!formState.errors.password}
        errorMessage={formState.errors.password?.join(". ")}
      />
      <Button
        className="bg-foreground font-bold text-white"
        radius="none"
        type="submit"
      >
        SIGN IN
      </Button>
      <Anchor
        className="max-w-max text-sm"
        color="foreground"
        href="/sign_up"
        as={Link}
      >
        Sign Up
      </Anchor>
    </form>
  );
}
