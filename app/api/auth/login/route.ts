import { NextResponse } from "next/server";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // ✅ assume user validation success
  const user = { id: "123", email, role: "user" };

  const accessToken = generateAccessToken({
    userId: user.id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    userId: user.id,
  });

  const res = NextResponse.json({
    success: true,
    accessToken,
  });

  // 🔒 Secure refresh token cookie
  res.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return res;
}
