"use client";
import { useAuthStore, User } from "@/_src/entities/auth/model";
import { CircularProgress, Container } from "@mui/material";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setIsAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setUser(res.data);
      setIsAuth(true);
    } catch (e) {
      if (isAxiosError(e)) console.log(e.message);
      setUser(null);
      setIsAuth(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
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
        <CircularProgress size="3rem" />
      </Container>
    );
  }

  return <>{children}</>;
};
