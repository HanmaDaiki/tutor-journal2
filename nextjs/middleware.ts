import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export interface UserPayload {
  userId: string;
}

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

  if (token) {
    const userId = decodedJwt(token);

    if (userId) {
      const response = NextResponse.next();
      response.headers.set("x-user-id", userId);
      return response;
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }
}
