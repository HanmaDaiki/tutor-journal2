import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "Успешный выход" },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Ошибка выхода:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при выходе" },
      { status: 500 }
    );
  }
}
