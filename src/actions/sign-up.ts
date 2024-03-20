"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcryptjs";
import db from "@/db";

interface SignUpFormState {
  errors: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must contain at least 2 character(s)" })
    .max(50, { message: "First name must contain at most 50 character(s)" })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must contain at least 2 character(s)" })
    .max(50, { message: "Last name must contain at most 50 character(s)" })
    .trim(),
  email: z.string().email().trim(),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 character(s)" }),
});

export default async function signUp(
  formState: SignUpFormState,
  formData: FormData,
): Promise<SignUpFormState> {
  const result = userSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await db.user.findFirst({
      where: { email: result.data.email },
    });

    if (user) {
      throw new Error("Email is already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(result.data.password, salt);

    await db.user.create({
      data: {
        ...result.data,
        password: hash,
      },
    });
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
