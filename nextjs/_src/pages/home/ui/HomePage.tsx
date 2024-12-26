"use client";

import React, { use, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/_src/entities/auth/model";

export const HomePage = () => {
  const router = useRouter();
  const { isAuth } = useAuthStore();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        gap: 4,
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="primary"
      >
        Журнал Репетитора
      </Typography>

      {isAuth ? (
        <>
          {/* Описание для авторизованных пользователей */}
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            maxWidth={600}
          >
            Добро пожаловать обратно! Управляйте расписанием, следите за
            прогрессом учеников и контролируйте свои финансы.
          </Typography>

          {/* Карточки с ключевыми функциями */}
          <Grid container spacing={4} justifyContent="center">
            {/* Управление расписанием */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  padding: 2,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    Управление расписанием
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Создавайте и управляйте расписанием занятий, чтобы всегда
                    оставаться организованным.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/schedule")}
                  >
                    Открыть расписание
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Прогресс учеников */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  padding: 2,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    Прогресс учеников
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Отслеживайте успехи учеников и анализируйте их достижения.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/students")}
                  >
                    Просмотреть прогресс
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Финансовый учет */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  padding: 2,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    Финансовый учет
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Контролируйте свои доходы и расходы, чтобы эффективно вести
                    финансовую отчетность.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/finance")}
                  >
                    Управление финансами
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {/* Описание для неавторизованных пользователей */}
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

          {/* Призыв к действию для неавторизованных пользователей */}
          <Box textAlign="center" mt={4}>
            <Typography variant="h6" color="textSecondary" mb={2}>
              Начните упрощать свою работу прямо сейчас!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => router.push("/signup")}
            >
              Зарегистрироваться
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default HomePage;
