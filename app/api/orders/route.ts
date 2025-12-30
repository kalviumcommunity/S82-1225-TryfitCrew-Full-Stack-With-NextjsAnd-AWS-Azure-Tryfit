import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCodes";

export async function POST(req: Request) {
  try {
    const { userId, productId, quantity } = await req.json();

    if (!userId || !productId || !quantity) {
      return sendError(
        "Missing required fields",
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const order = await prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product || product.stock < quantity) {
        throw new Error("OUT_OF_STOCK");
      }

      const newOrder = await tx.order.create({
        data: {
          userId,
          total: product.price * quantity,
          status: "CONFIRMED",
        },
      });

      await tx.orderItem.create({
        data: {
          orderId: newOrder.id,
          productId,
          quantity,
        },
      });

      await tx.product.update({
        where: { id: productId },
        data: {
          stock: { decrement: quantity },
        },
      });

      return newOrder;
    });

    return sendSuccess(order, "Order placed successfully", 201);
  } catch (error: any) {
    if (error.message === "OUT_OF_STOCK") {
      return sendError(
        "Product is out of stock",
        ERROR_CODES.OUT_OF_STOCK,
        409
      );
    }

    return sendError(
      "Order creation failed",
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
