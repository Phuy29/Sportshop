import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
