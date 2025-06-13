import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// ✅ Correct hrefs and color values
const navItems = [
  { label: 'About', href: '#about', color: '#ff4081' },
  { label: 'Skills', href: '#skills', color: '#7c4dff' },
  { label: 'Projects', href: '#projects', color: '#00e676' },
  { label: 'Contact', href: '#contact', color: '#ff6d00' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawerContent = (
    <Box sx={{ width: 250, mt: 2 }} onClick={toggleDrawer}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              },
              mb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Pacifico, cursive',
                fontSize: '1.3rem',
                color: item.color,
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
<AppBar
  position="sticky"
  sx={{
    top: 0,
    zIndex: theme => theme.zIndex.drawer + 1, // ensures it stays above drawers/sections
    backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c2c2c)',
    boxShadow: 'none',
  }}
>

      
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: 'Lobster, cursive',
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 1,
            }}
          >
            SimDev
          </Typography>

          {!isMobile &&
            navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  mx: 1,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Dancing Script, cursive',
                    color: item.color,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
