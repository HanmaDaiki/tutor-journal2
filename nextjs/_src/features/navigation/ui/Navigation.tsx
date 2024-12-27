import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
const pages = [
  { text: "Дашборд", link: "/dashboard" },
  { text: "Расписание", link: "/schedule" },
  { text: "Журнал", link: "/journal" },
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <Box display={"flex"} gap={2}>
      <Button
        LinkComponent={Link}
        sx={{
          color: "white",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: ".2rem",
        }}
        href="/"
      >
        <AutoStoriesIcon />
        <Typography
          variant="h6"
          noWrap
        >
          Журнал
        </Typography>
      </Button>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
          disableScrollLock
        >
          <MenuItem>
            <Typography sx={{ textAlign: "center", color: "#000" }}>
              {" "}
              <AutoStoriesIcon /> Журнал
            </Typography>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          {pages.map((page) => (
            <MenuItem
              key={page.text}
              LinkComponent={Link}
              href={page.link}
              onClick={handleCloseNavMenu}
            >
              <Typography sx={{ textAlign: "center" }}>{page.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
        {pages.map((page) => (
          <Button
            LinkComponent={Link}
            key={page.text}
            onClick={handleCloseNavMenu}
            sx={{ color: "white", display: "flex", alignItems: "center" }}
            href={page.link}
          >
            {page.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;
