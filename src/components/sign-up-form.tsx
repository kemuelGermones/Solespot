import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <form className="px-4 py-8 max-w-lg mx-auto flex flex-col gap-4">
      <div className="font-bold text-4xl">SIGN UP</div>
      <Input
        radius="none"
        type="text"
        label="First Name"
        placeholder="Enter your first name"
        labelPlacement="outside"
      />
      <Input
        radius="none"
        type="text"
        label="Last Name"
        placeholder="Enter your last name"
        labelPlacement="outside"
      />
      <Input
        radius="none"
        type="email"
        label="Email"
        placeholder="Enter your email"
        labelPlacement="outside"
      />
      <Input
        radius="none"
        type="password"
        label="Password"
        placeholder="Enter your password"
        labelPlacement="outside"
      />
      <Button className="bg-black text-white" radius="none" type="button">
        SIGN UP
      </Button>
      <div>
        <Link className="text-sm hover:underline" href="/signin">
          Sign In
        </Link>
      </div>
    </form>
  );
}
