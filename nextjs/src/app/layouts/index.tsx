import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Журнал репетитора",
  description:
    "Инструмент для решения ключевых задач репетиторов в работе с учениками, включая учет уроков, планирование, контроль домашних заданий и коммуникацию.",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
