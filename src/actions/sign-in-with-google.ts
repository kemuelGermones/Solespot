"use server";

import { signIn } from "@/auth";

export default async function signInWithGoogle() {
  return await signIn("google", { redirectTo: "/" });
}
