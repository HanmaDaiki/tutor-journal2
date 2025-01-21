import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { pages } from "./model";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const togglerDrawer = (state: boolean) => {
    setOpen(state);
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
        <Typography variant="h6" noWrap>
          Журнал
        </Typography>
      </Button>

      <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
        {pages.map((page) => (
          <Button
            LinkComponent={Link}
            key={page.text}
            sx={{ color: "white", display: "flex", alignItems: "center" }}
            href={page.link}
          >
            {page.text}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => togglerDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={open} onClose={() => togglerDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => togglerDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemIcon>
                  <AutoStoriesIcon />
                </ListItemIcon>
                <ListItemText primary="Журнал" />
              </ListItemButton>
            </ListItem>
            <Divider />
            {pages.map((page) => (
              <ListItem key={page.text} disablePadding>
                <ListItemButton LinkComponent={Link} href={page.link}>
                  <ListItemText primary={page.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navigation;
