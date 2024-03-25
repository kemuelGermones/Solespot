"use server";

import { signOut as logOut } from "@/auth";

export default async function signOut() {
  return logOut();
}
