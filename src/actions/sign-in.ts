"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import db from "@/db";

interface SignInFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

const userSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6, { message: "Invalid password" }),
});

export default async function signIn(
  formState: SignInFormState,
  formData: FormData,
): Promise<SignInFormState> {
  const result = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await db.user.findUnique({
      where: { email: result.data.email },
    });

    if (!user) {
      throw new Error("User does not exist");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }

    return {
      errors: {
        _form: ["Something went wrong"],
      },
    };
  }

  redirect("/");
}
