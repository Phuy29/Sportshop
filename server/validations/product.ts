import { z } from "zod";

export const createProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string().or(z.null()),
  status: z.enum(["ACTIVE", "ARCHIVED", "DRAFT"]),
  collectionId: z.string(),
});
