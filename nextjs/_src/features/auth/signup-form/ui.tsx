"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignup } from "./model";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
  CardContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Link from "next/link";

export const SignupForm = () => {
  const { handleSignup } = useSignup();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { firstName, lastName, email, password, role } = formData;

    if (!firstName || !lastName || !email || !password || !role) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      await handleSignup({ firstName, lastName, email, password, role });
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Произошла ошибка при регистрации.");
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 600,
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
          Создайте аккаунт
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
            label="Имя"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Фамилия"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Пароль"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
            fullWidth
          />

          <FormControl fullWidth required>
            <InputLabel id="role-select-label">Роль</InputLabel>
            <Select
              labelId="role-select-label"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              <MenuItem value="STUDENT">Ученик</MenuItem>
              <MenuItem value="TUTOR">Репетитор</MenuItem>
            </Select>
          </FormControl>

          {error && <Alert severity="error">{error}</Alert>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2" color="textSecondary">
            Уже есть аккаунт?{" "}
            <Button
              LinkComponent={Link}
              href="/login"
              variant="text"
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              Войдите
            </Button>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
