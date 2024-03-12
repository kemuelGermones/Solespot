import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <form className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-8">
      <div className="text-4xl font-bold">SIGN UP</div>
      <Input
        radius="none"
        label="First Name"
        labelPlacement="outside"
        type="text"
        placeholder="Enter your first name"
      />
      <Input
        radius="none"
        label="Last Name"
        labelPlacement="outside"
        type="text"
        placeholder="Enter your last name"
      />
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
        className="bg-foreground font-bold text-white"
        radius="none"
        type="button"
      >
        SIGN UP
      </Button>
      <div>
        <Link className="text-sm hover:underline" href="/sign_in">
          Sign In
        </Link>
      </div>
    </form>
  );
}
