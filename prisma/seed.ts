import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@example.com",
    },
  });

  const category = await prisma.category.create({
    data: { name: "T-Shirts" },
  });

  const product = await prisma.product.create({
    data: {
      name: "Black T-Shirt",
      price: 499,
      categoryId: category.id,
    },
  });

  const order = await prisma.order.create({
    data: {
      userId: user.id,
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order.id,
      productId: product.id,
      quantity: 1,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
