"use client";
import { useAuthStore, User } from "@/_src/entities/auth/model";
import { CircularProgress, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setIsAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const res = await axios.get("/api/users/me");

    if (res.status === 200) {
      setUser(res.data);
      setIsAuth(true);
    } else {
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
