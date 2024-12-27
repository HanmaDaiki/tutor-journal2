"use client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Navigation } from "@/_src/features/navigation";
import { useAuthStore } from "@/_src/entities/auth/model";
import { ProfileMenu } from "@/_src/features/profile";
const Header = () => {
  const { isAuth, user } = useAuthStore();

  if (!isAuth) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Navigation />

          <ProfileMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
