"use client";
import { useAuthStore } from "@/_src/entities/auth/model";
import { ListOfTutors } from "@/_src/features/student";
import { Grid2 } from "@mui/material";

export const StudentDashboard = () => {
  const { user } = useAuthStore();

  if (user?.role !== "STUDENT") {
    return null;
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ListOfTutors />
      </Grid2>
    </Grid2>
  );
};
