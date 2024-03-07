import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

export default function SignInForm() {
  return (
    <form className="px-4 py-8 max-w-lg mx-auto flex flex-col gap-4">
      <div className="font-bold text-4xl">SIGN IN</div>
      <Input
        radius="none"
        label="Email"
        labelPlacement="outside"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        radius="none"
        label="Password"
        labelPlacement="outside"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        className="bg-foreground text-white font-bold"
        radius="none"
        type="button"
      >
        SIGN IN
      </Button>
      <div>
        <Link className="text-sm hover:underline" href="/sign-up">
          Register
        </Link>
      </div>
    </form>
  );
}
