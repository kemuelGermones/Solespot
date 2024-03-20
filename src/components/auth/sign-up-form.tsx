"use client";

import { useFormState } from "react-dom";
import { Input, Button, Link as Anchor } from "@nextui-org/react";
import Link from "next/link";
import signUp from "@/actions/sign-up";

export default function SignUpForm() {
  const [formState, action] = useFormState(signUp, { errors: {} });

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
        label="First Name"
        labelPlacement="outside"
        type="text"
        name="firstName"
        placeholder="Enter your first name"
        isInvalid={!!formState.errors.firstName}
        errorMessage={formState.errors.firstName?.join(". ")}
      />
      <Input
        radius="none"
        label="Last Name"
        labelPlacement="outside"
        type="text"
        name="lastName"
        placeholder="Enter your last name"
        isInvalid={!!formState.errors.lastName}
        errorMessage={formState.errors.lastName?.join(". ")}
      />
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
        SIGN UP
      </Button>
      <Anchor
        className="max-w-max text-sm"
        color="foreground"
        href="/sign_in"
        as={Link}
      >
        Sign In
      </Anchor>
    </form>
  );
}
