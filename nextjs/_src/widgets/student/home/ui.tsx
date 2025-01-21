import {
  Typography,
  Grid2,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useAuthStore } from "@/_src/entities/auth/model";

export function StudentHome() {
  const { user } = useAuthStore();

  if (user?.role !== "STUDENT") {
    return null;
  }
  return (
    <>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="primary"
        sx={{ mb: 2 }}
      >
        Журнал ученика
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="textSecondary"
        sx={{ mb: 4 }}
      >
        Добро пожаловать, {user?.firstName} {user?.lastName}! Следите за
        расписанием занятий, выполняйте домашние задания и улучшайте свои
        результаты!
      </Typography>
      <Grid2 container spacing={2} overflow={"scroll"} >
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
    </>
  );
}
