"use server";

import { signIn } from "@/auth";

export default async function signInWithGithub() {
  return await signIn("github", { redirectTo: "/" });
}
