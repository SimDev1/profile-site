import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          textAlign: 'center',
          fontWeight: 700,
          fontFamily: 'Inter, Roboto, sans-serif',
        }}
      >
        SimDev
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.04)',
                transform: 'translateX(5px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                fontFamily: 'Inter, Roboto, sans-serif',
                color: item.color,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c2c2c)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: 'Inter, Roboto, sans-serif',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: 1,
              fontSize: { xs: '1.5rem', sm: '1.8rem' },
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
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter, Roboto, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: item.color,
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
