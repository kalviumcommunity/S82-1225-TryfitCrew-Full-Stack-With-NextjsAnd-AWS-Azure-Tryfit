import { prisma } from "@/lib/prisma";

export async function placeOrder(
  userId: number,
  productId: number,
  quantity: number
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product || product.stock < quantity) {
        throw new Error("Insufficient stock");
      }

      const order = await tx.order.create({
        data: {
          userId,
          total: product.price * quantity,
          status: "CONFIRMED",
        },
      });

      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId,
          quantity,
        },
      });

      await tx.product.update({
        where: { id: productId },
        data: {
          stock: {
            decrement: quantity,
          },
        },
      });

      return order;
    });

    console.log("Transaction successful:", result);
    return result;
  } catch (error) {
    console.error("Transaction failed. Rolled back.", error);
    throw error;
  }
}
