import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
        { error: "Доступ запрещён. Только репетиторы имеют доступ." },
        { status: 403 }
      );
    }

    const students = await prisma.user.findMany({
      where: {
        tutors: {
          some: { id: parseInt(tutorId, 10) },
        },
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    return NextResponse.json({ students });
  } catch (error) {
    console.error("Ошибка при получении списка учеников:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке запроса." },
      { status: 500 }
    );
  }
}

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
          error: "Доступ запрещён. Только репетиторы могут добавлять учеников.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { studentEmail } = body;

    if (!studentEmail) {
      return NextResponse.json(
        { error: "Необходимо указать studentEmail в теле запроса." },
        { status: 400 }
      );
    }

    const student = await prisma.user.findUnique({
      where: { email: studentEmail },
    });
    if (!student || student.role !== "STUDENT") {
      return NextResponse.json(
        { error: "Ученик не найден или не является учеником." },
        { status: 404 }
      );
    }

    await prisma.user.update({
      where: { id: parseInt(tutorId, 10) },
      data: {
        students: {
          connect: { id: student.id },
        },
      },
    });

    await prisma.user.update({
      where: { id: student.id },
      data: {
        tutors: {
          connect: { id: parseInt(tutorId, 10) },
        },
      },
    });

    return NextResponse.json({
      message: "Ученик успешно добавлен в список учеников репетитора.",
    });
  } catch (error) {
    console.error("Ошибка при добавлении ученика:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке запроса." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
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
          error:
            "Доступ запрещён. Только репетиторы могут удалять учеников из своего списка.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { studentEmail } = body;

    if (!studentEmail) {
      return NextResponse.json(
        { error: "Необходимо указать studentEmail в теле запроса." },
        { status: 400 }
      );
    }

    const student = await prisma.user.findUnique({
      where: { email: studentEmail },
    });

    if (!student || student.role !== "STUDENT") {
      return NextResponse.json(
        { error: "Ученик не найден или не является учеником." },
        { status: 404 }
      );
    }

    // Разрыв связи между репетитором и учеником
    await prisma.user.update({
      where: { id: parseInt(tutorId, 10) },
      data: {
        students: {
          disconnect: { id: student.id },
        },
      },
    });

    await prisma.user.update({
      where: { id: student.id },
      data: {
        tutors: {
          disconnect: { id: parseInt(tutorId, 10) },
        },
      },
    });

    return NextResponse.json({
      message: "Ученик успешно удален из списка учеников репетитора.",
    });
  } catch (error) {
    console.error("Ошибка при удалении ученика:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке запроса." },
      { status: 500 }
    );
  }
}
