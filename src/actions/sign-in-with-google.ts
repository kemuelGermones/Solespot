"use server";

import { signIn } from "@/auth";

export default async function signInWithGoogle() {
  return signIn("google");
}
