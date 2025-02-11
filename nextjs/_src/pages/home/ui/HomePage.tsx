"use client";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid2,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/_src/entities/auth/model";
import { PageTitle, PageWrapper } from "@/_src/shared/ui";

const HomePage = () => {
  const router = useRouter();
  const { isAuth, user } = useAuthStore();

  if (!isAuth) {
    return (
      <PageWrapper>
        <Box textAlign="center">
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            color="primary"
          >
            Журнал Репетитора
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            maxWidth={600}
            sx={{ margin: "0 auto", mt: 2 }}
          >
            Ваш личный помощник для оптимизации учебного процесса. Управляйте
            занятиями, домашними заданиями и расписанием легко и эффективно.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => router.push("/login")}
            sx={{ mt: 4 }}
          >
            Войти
          </Button>
        </Box>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageTitle>Главная</PageTitle>

      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="primary"
        sx={{ mb: 2 }}
      >
        Журнал {user?.role === "STUDENT" ? "ученика" : "репетитора"}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="textSecondary"
        sx={{ mb: 4 }}
      >
        Добро пожаловать, {user?.firstName} {user?.lastName}!{" "}
        {user?.role === "TUTOR"
          ? "Управляйте занятиями, следите за прогрессом учеников и упрощайте свою работу с помощью удобного инструмента."
          : "Следите за расписанием занятий, выполняйте домашние задания и улучшайте свои результаты!"}
      </Typography>
      <Grid2 container spacing={2}>
        {/* Панель управления */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Панель управления</Typography>
              <Typography variant="body2" color="textSecondary">
                Получите обзор ближайших событий, статуса оплаты и важных задач.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/dashboard")}
              >
                Перейти
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        {/* Расписание */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Расписание</Typography>
              <Typography variant="body2" color="textSecondary">
                Легко планируйте, переносите и управляйте занятиями без
                путаницы.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/schedule")}
              >
                Перейти
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        {/* Журнал */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Журнал</Typography>
              <Typography variant="body2" color="textSecondary">
                Отмечайте проведённые уроки, фиксируйте оплаты и просматривайте
                комментарии.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/journal")}
              >
                Перейти
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </PageWrapper>
  );
};

export default HomePage;
