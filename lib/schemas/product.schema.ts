import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  categoryId: z.number().int(),
  stock: z.number().int().min(0),
});
