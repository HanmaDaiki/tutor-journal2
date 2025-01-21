import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const tutorId = request.headers.get("x-user-id");
    if (!tutorId) {
      return NextResponse.json(
        { error: "Пользователь не авторизован." },
        { status: 401 }
      );
    }
    const tutor = await prisma.user.findUnique({
      where: { id: parseInt(tutorId, 10) },
    });
    if (!tutor || tutor.role !== "TUTOR") {
      return NextResponse.json(
        {
          error: "Доступ запрещён. Только репетиторы могут добавлять уроки.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { studentId, topic, status, date } = body;
    if (!studentId || !topic || !status) {
      return NextResponse.json(
        {
          error: "Необходимо указать studentId, topic и status в теле запроса.",
        },
        { status: 400 }
      );
    }

    const newLesson = await prisma.lesson.create({
      data: {
        tutorId: parseInt(tutorId, 10),
        studentId,
        topic,
        status,
        dateTime: new Date(date),
      },
    });

    return NextResponse.json(
      { message: "Урок успешно добавлен" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при добавлении урока:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке запроса." },
      { status: 500 }
    );
  }
}
