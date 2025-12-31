import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * JWT payload shape used across the app
 */
interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect only these routes
  if (pathname.startsWith("/api/users") || pathname.startsWith("/api/admin")) {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    // ❌ Token missing
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token missing" },
        { status: 401 }
      );
    }

    try {
      // ✅ Verify and strongly type JWT payload
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

      // ❌ Role-based access control
      if (pathname.startsWith("/api/admin") && decoded.role !== "admin") {
        return NextResponse.json(
          { success: false, message: "Access denied" },
          { status: 403 }
        );
      }

      // ✅ Token valid & authorized
      return NextResponse.next();
    } catch {
      // ❌ Invalid or expired token
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 403 }
      );
    }
  }

  // Public routes
  return NextResponse.next();
}
