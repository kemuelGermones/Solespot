import SignInWithGoogleButton from "@/components/auth/sign-in-with-google-button";
import SignInWithGithubButton from "@/components/auth/sign-in-with-github-button";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import signInWithGoogle from "@/actions/sign-in-with-google";
import signInWithGithub from "@/actions/sign-in-with-github";

interface SignInProps {
  searchParams?: {
    error?: string;
  };
}

export default async function SignIn({ searchParams }: SignInProps) {
  const { error } = { ...searchParams };

  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-8">
      <div className="text-center text-4xl font-bold">SIGN IN</div>
      <div className="text-center">
        Seize exclusive deals and seamless checkout. Sign in now for your
        shopping adventure!
      </div>
      <form action={signInWithGoogle}>
        <SignInWithGoogleButton />
      </form>
      <div className="flex items-center gap-2">
        <div className="flex-grow border-t bg-foreground-500"></div>
        <span className="text-sm text-foreground-500">OR</span>
        <div className="flex-grow border-t bg-foreground-500"></div>
      </div>
      <form action={signInWithGithub}>
        <SignInWithGithubButton />
      </form>
      {error === "CallbackRouteError" ? (
        <div className="text-center text-xs text-danger">
          Sorry, but it seems like an unexpected error has occurred. Please try
          another provider or try again later.
        </div>
      ) : null}
    </div>
  );
}
