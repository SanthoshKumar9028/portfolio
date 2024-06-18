import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import dataSource from "../../dataSource";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState: boolean) => () => {
    setOpen(openState);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography
              component="a"
              variant="h6"
              href="#"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Sk
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {dataSource.nav.items.map(({ text, href }) => (
                <Button key={text} href={href} sx={{ color: "white", mx: 1 }}>
                  {text}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
        <Drawer open={open} anchor="right" onClick={toggleDrawer(false)}>
          <Box width="250px">
            <List>
              {dataSource.nav.items.map(({ text, href, Icon }) => (
                <ListItem disablePadding key={text}>
                  <ListItemButton href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
