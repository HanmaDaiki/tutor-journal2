import { SignupForm } from '@/_src/features/auth';
import { Box, Typography, Button } from '@mui/material';

export default function SignupPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
        background: 'linear-gradient(135deg, #ffffff, #f2f7fc)',
      }}
    >
      {/* Текстовая секция */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 500,
          textAlign: { xs: 'center', md: 'left' },
          padding: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            color: '#1e88e5',
          }}
        >
          Присоединяйтесь к нам!
        </Typography>
        <Typography variant="h6" mb={3} color="#555">
          Создайте аккаунт, чтобы воспользоваться всеми возможностями платформы.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#1e88e5',
            color: '#1e88e5',
            '&:hover': { backgroundColor: '#e3f2fd' },
          }}
        >
          Узнать больше
        </Button>
      </Box>

      {/* Форма регистрации */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 600,
          width: '100%',
          padding: { xs: 2, md: 4 },
        }}
      >
        <SignupForm />
      </Box>
    </Box>
  );
}
