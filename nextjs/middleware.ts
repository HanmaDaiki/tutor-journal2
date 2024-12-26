import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export interface UserPayload {
  userId: string;
}

// Расшифровка JWT токена
function decodedJwt(token: string): string | null {
  try {
    const decoded = jwt.decode(token, { complete: true }) as {
      payload: UserPayload;
    } | null;

    if (!decoded) {
      return null;
    }

    return decoded.payload.userId;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/dashboard", "/profile", "/api/users"];

  if (token) {
    const userId = decodedJwt(token);

    if (userId) {
      if (pathname === "/login" || pathname === "/signup") {
        return NextResponse.redirect(new URL("/", request.url));
      }

      const response = NextResponse.next();
      response.headers.set("x-user-id", userId);
      return response;
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
