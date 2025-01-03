import { StudentDashboard } from "@/_src/widgets/student";
import { TutorDashboard } from "@/_src/widgets/tutor";
import { Container } from "@mui/material";

const DashboardPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        padding: "80px 0 20px",
      }}
    >
      <TutorDashboard />
      <StudentDashboard />
    </Container>
  );
};

export default DashboardPage;
