"use client";
import { useAuthStore } from "@/_src/entities/auth/model";
import { useDeleteStudent } from "@/_src/features/tutor/list-of-students/model";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";

export const ListOfStudents = () => {
  const { user } = useAuthStore();
  const { handleDeleteStudent } = useDeleteStudent();
  return (
    <Card
      sx={{
        width: "100%",
        height: '100%',
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
          Мои ученики
        </Typography>
        <Box display={"flex"} gap={".2rem"} flexWrap={"wrap"}>
          {user?.students.map((student) => {
            return (
              <Chip
                key={student.id}
                onDelete={() => handleDeleteStudent(student.email)}
                color="primary"
                label={`${student.lastName} ${student.firstName.slice(0, 1)}.`}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};
