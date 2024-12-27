"use client";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid2,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/_src/entities/auth/model";
import Link from "next/link";

const HomePage = () => {
  const router = useRouter();
  const { isAuth, user } = useAuthStore();

  if (!isAuth) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 2,
        }}
      >
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
        >
          Добро пожаловать в цифровой инструмент для репетиторов! Управляйте
          расписанием, следите за прогрессом учеников и оптимизируйте свою
          работу легко и эффективно.
        </Typography>

        <Box textAlign="center" mt={4}>
          <Typography variant="h6" color="textSecondary" mb={2}>
            Начните упрощать свою работу прямо сейчас!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => router.push("/login")}
            LinkComponent={Link}
          >
            Войти
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="primary"
      >
        Журнал {user?.role === "STUDENT" ? "ученика" : "репетитора"}
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        color="textSecondary"
        maxWidth={600}
      >
        Добро пожаловать обратно, {user?.firstName} {user?.lastName}!
        {user?.role === "TUTOR"
          ? " Вы можете управлять расписанием, следить за прогрессом учеников и оптимизировать свою работу легко и эффективно."
          : " Вы можете просматривать расписание, оставлять комментарии и следить за своим прогрессом."}
      </Typography>
      <Grid2 container spacing={1}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Дашборд</Typography>
              <Typography variant="body2">
                Здесь будет дашборд
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/dashboard")}
              >
                К дашборду
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Расписание</Typography>
              <Typography variant="body2">
                Здесь будет ваше расписание
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/schedule")}
              >
                К расписанию
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6">Журнал</Typography>
              <Typography variant="body2">Здесь будет ваш журнал</Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                size="large"
                onClick={() => router.push("/journal")}
              >
                К журналу
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
