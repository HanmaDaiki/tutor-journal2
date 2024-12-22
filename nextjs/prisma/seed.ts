import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tutor = await prisma.user.create({
    data: {
      email: 'tutor@example.com',
      password: 'securepassword',
      firstName: 'Иван',
      lastName: 'Иванов',
      role: 'TUTOR',
    },
  });

  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      password: 'securepassword',
      firstName: 'Алексей',
      lastName: 'Алексеев',
      role: 'STUDENT',
    },
  });

  const lesson = await prisma.lesson.create({
    data: {
      dateTime: new Date('2024-12-22T15:30:00'),
      topic: 'Математика: Алгебра',
      status: 'UNPAID',
      tutorId: tutor.id,
      studentId: student.id,
    },
  });

  const tutorComment = await prisma.comment.create({
    data: {
      content: 'Занятие прошло хорошо, студент усваивает материал.',
      lessonId: lesson.id,
      authorId: tutor.id,
    },
  });

  const studentComment = await prisma.comment.create({
    data: {
      content: 'Мне понравился урок, буду готовиться к следующему.',
      lessonId: lesson.id,
      authorId: student.id,
    },
  });

  console.log('Все данные успешно добавлены!');
}

main()
  .catch((e) => {
    console.error('Ошибка во время выполнения seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
