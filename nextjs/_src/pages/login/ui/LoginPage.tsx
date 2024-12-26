import { LoginForm } from "@/_src/features/auth";
import { Box, Typography, Button } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        background: "linear-gradient(135deg, #ffffff, #f2f7fc)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: 500,
          textAlign: { xs: "center", md: "left" },
          padding: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.2,
            color: "#1e88e5",
          }}
        >
          Добро пожаловать!
        </Typography>
        <Typography variant="h6" mb={3} color="#555">
          Войдите в систему, чтобы получить доступ к своим данным и начать
          работу с нашим сервисом.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1e88e5",
            color: "#1e88e5",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          href="/"
        >
          Узнать больше
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          maxWidth: 400,
          width: "100%",
          padding: { xs: 2, md: 4 },
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
