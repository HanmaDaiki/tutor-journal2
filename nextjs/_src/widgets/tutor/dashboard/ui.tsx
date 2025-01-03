"use client";
import { useAuthStore } from "@/_src/entities/auth/model";
import { AddNewStudent, ListOfStudents } from "@/_src/features/tutor";
import { Grid2 } from "@mui/material";

export const TutorDashboard = () => {
  const { user } = useAuthStore();

  if (user?.role !== "TUTOR") {
    return null;
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AddNewStudent />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ListOfStudents />
      </Grid2>
    </Grid2>
  );
};
