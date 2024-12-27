import { useAuthStore } from "@/_src/entities/auth/model";
import { Avatar, Box, Typography } from "@mui/material";

const ProfileMenu = () => {
  const { user } = useAuthStore();
  return (
    <Box ml="auto" display={"flex"} gap={2} alignItems={"center"}>
      <Typography variant="body1">
        {user?.firstName} {user?.lastName},{" "}
        {user?.role === "TUTOR" ? "Репетитор" : "Ученик"}
      </Typography>

      <Avatar>
        {user?.firstName.slice(0, 1)}
        {user?.lastName.slice(0, 1)}
      </Avatar>
    </Box>
  );
};

export default ProfileMenu;
