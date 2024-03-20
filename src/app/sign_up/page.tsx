import SignUpForm from "@/components/auth/sign-up-form";

export default function SignUp() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-8">
      <div className="text-4xl font-bold">SIGN UP</div>
      <SignUpForm />
    </div>
  );
}
