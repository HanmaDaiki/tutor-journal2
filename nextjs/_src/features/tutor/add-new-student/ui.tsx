"use client";
import { useAddNewStudent } from "@/_src/features/tutor/add-new-student/model";
import React, { useState } from "react";
import {
  TextField,
  Card,
  Typography,
  Button,
  Alert,
  Box,
  CardContent,
} from "@mui/material";

export const AddNewStudent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { handleAddNewStudent } = useAddNewStudent();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await handleAddNewStudent(email);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        background: "#fff",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="left"
          mb={2}
          color="primary"
        >
          Добавить нового ученика
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
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Добавить ученика
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
