"use server";

import { signIn } from "@/auth";

export default async function signInWithGithub() {
  return signIn("github");
}
