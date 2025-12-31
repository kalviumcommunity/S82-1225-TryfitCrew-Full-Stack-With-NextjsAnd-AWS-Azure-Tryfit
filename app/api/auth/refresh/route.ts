import { NextResponse } from "next/server";
import { verifyRefreshToken, generateAccessToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: "No refresh token" }, { status: 401 });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken) as { userId: string };

    const newAccessToken = generateAccessToken({
      userId: decoded.userId,
    });

    return NextResponse.json({
      accessToken: newAccessToken,
    });
  } catch {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 403 }
    );
  }
}
