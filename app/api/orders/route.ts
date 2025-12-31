import { ZodError } from "zod";
import { orderSchema } from "@/lib/schemas/order.schema";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { placeOrder } from "@/lib/transactions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = orderSchema.parse(body);

    const order = await placeOrder(
      data.userId,
      data.productId,
      data.quantity
    );

    return sendSuccess(order, "Order placed successfully", 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return sendError(
        "Validation Error",
        "VALIDATION_ERROR",
        400,
        error.errors.map(e => ({
          field: e.path[0],
          message: e.message,
        }))
      );
    }

    return sendError("Order failed", "ORDER_ERROR", 500, error);
  }
}
