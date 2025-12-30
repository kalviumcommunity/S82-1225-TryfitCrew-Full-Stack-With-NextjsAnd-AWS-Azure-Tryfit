import { NextResponse } from "next/server";
import { placeOrder } from "@/lib/placeOrder";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order = await placeOrder(
      body.userId,
      body.productId,
      body.quantity
    );

    return NextResponse.json(order, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
