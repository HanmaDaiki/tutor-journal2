import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/_src/app/config/theme";
import { AuthProvider } from "@/_src/app/providers/auth";
import { Header } from "@/_src/widgets/header";
import "../styles";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Журнал репетитора",
  description:
    "Инструмент для решения ключевых задач репетиторов в работе с учениками, включая учет уроков, планирование, контроль домашних заданий и коммуникацию.",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <CssBaseline />
              <Header />
              {children}
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
