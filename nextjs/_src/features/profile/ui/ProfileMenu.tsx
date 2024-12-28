import { useAuthStore } from "@/_src/entities/auth/model";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useLogout from "../model/logout";

const ProfileMenu = () => {
  const { user } = useAuthStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleLogout } = useLogout();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box ml="auto" display={"flex"} gap={2} alignItems={"center"}>
        <Typography variant="body1">
          {user?.firstName} {user?.lastName},{" "}
          {user?.role === "TUTOR" ? "Репетитор" : "Ученик"}
        </Typography>
        <Button size="small" aria-describedby={id} onClick={handleClick}>
          <Avatar>
            {user?.firstName.slice(0, 1)}
            {user?.lastName.slice(0, 1)}
          </Avatar>
        </Button>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        disableScrollLock
      >
        <Button fullWidth>Профиль</Button>
        <Divider />
        <Button color="error" onClick={handleLogout}>
          Выход из аккаунта
        </Button>
      </Popover>
    </>
  );
};

export default ProfileMenu;
