import SignInForm from "@/components/auth/sign-in-form";

export default function SignIn() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-8">
      <div className="text-4xl font-bold">SIGN IN</div>
      <SignInForm />
    </div>
  );
}
