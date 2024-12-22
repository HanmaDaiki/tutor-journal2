"use client";
import React, { useState } from "react";
import { useLogin } from "./model";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
  CardContent,
} from "@mui/material";

export const LoginForm = () => {
  const { handleLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await handleLogin({ email, password });
      alert("Вы успешно вошли!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        background: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          mb={2}
          color="primary"
        >
          Вход в аккаунт
        </Typography>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Войти
          </Button>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2" color="textSecondary">
            Ещё нет аккаунта?{" "}
            <Button
              href="/signup"
              variant="text"
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              Зарегистрируйтесь
            </Button>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
