import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "../..//../lib/ResponseHandler";
import { ERROR_CODES } from "@/lib/errorCodes";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });

    return sendSuccess(products, "Products fetched successfully");
  } catch (error) {
    return sendError(
      "Failed to fetch products",
      ERROR_CODES.DATABASE_ERROR,
      500,
      error
    );
  }
}
