import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { sendSuccess } from "@/lib/responseHandler";
import { handleError } from "..//..//../lib/ErrorHandler";

export async function GET() {
  const cacheKey = "users:list";

  try {
    const cachedUsers = await redis.get(cacheKey);

    if (cachedUsers) {
      console.log("🟢 Cache HIT");
      return sendSuccess(JSON.parse(cachedUsers), "Users fetched from cache");
    }

    console.log("🟡 Cache MISS - Fetching from DB");
    const users = await prisma.user.findMany();

    await redis.set(cacheKey, JSON.stringify(users), "EX", 60); // TTL = 60s

    return sendSuccess(users, "Users fetched from database");
  } catch (error) {
    return handleError(error, "GET /api/users");
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user, { status: 201 });
}
