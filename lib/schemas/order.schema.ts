import { z } from "zod";

export const orderSchema = z.object({
  userId: z.number().int(),
  productId: z.number().int(),
  quantity: z.number().int().min(1),
});
