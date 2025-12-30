import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const products = await prisma.product.findMany({
    skip: (page - 1) * limit,
    take: limit,
    include: {
      category: true,
    },
  });

  return NextResponse.json({
    page,
    limit,
    data: products,
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      stock: body.stock,
      categoryId: body.categoryId,
    },
  });

  return NextResponse.json(product, { status: 201 });
}
