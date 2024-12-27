import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const registerSchema = z.object({
  email: z.string().email("Некорректный email адрес"),
  password: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .max(100, "Пароль слишком длинный"),
  role: z.enum(["STUDENT", "TUTOR"], {
    required_error: "Необходимо выбрать роль",
  }),
  firstName: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное"),
  lastName: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = registerSchema.safeParse(body);
    if (!result.success) {
      const { errors } = result.error;
      return NextResponse.json({ error: errors[0].message }, { status: 400 });
    }

    const { email, password, role, firstName, lastName } = result.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с такой почтой уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    await prisma.$transaction(async (prisma: Prisma.TransactionClient) => {
      await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          password: hashedPassword,
          role,
        },
      });
    });

    return NextResponse.json(
      {
        message: "Пользователь успешно создан",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка регистрации:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при создании аккаунта" },
      { status: 500 }
    );
  }
}
