import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useCustomTheme } from '../../context/ThemeContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Experiences', path: '/events' },
  { label: 'Birthday Magic', path: '/birthday-details' },
  { label: 'Artists', path: '/artists' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { colors } = useCustomTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
        <CelebrationIcon sx={{ fontSize: '2rem', color: colors.primary }} />
        <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '0.6px' }}>
          Peeka Boo Events
        </Typography>
        <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
          Celebrations crafted with heart
        </Typography>
      </Box>

      <List sx={{ mt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                borderRadius: 3,
                mb: 0.5,
                backgroundColor:
                  location.pathname === item.path ? `${colors.primary}12` : 'transparent',
              }}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2, opacity: 0.3 }} />
      <Button
        variant="contained"
        fullWidth
        sx={{ borderRadius: 30, py: 1.5 }}
        onClick={() => handleNavigation('/contact')}
      >
        Plan an Event
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ zIndex: 1100 }}>
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: isMobile ? 'center' : 'baseline',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={() => handleNavigation('/')}
        >
          <CelebrationIcon sx={{ fontSize: isMobile ? '1.9rem' : '2.2rem', color: '#FFF' }} />
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 800,
                fontSize: isMobile ? '1.4rem' : '1.7rem',
                color: '#FFF',
                letterSpacing: '0.8px',
              }}
            >
              Peeka Boo Events
            </Typography>
            {!isMobile && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '1px',
                  fontWeight: 500,
                }}
              >
                Birthdays | Socials | Bespoke Celebrations
              </Typography>
            )}
          </Box>
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {navItems.map((item) => (
              <Box
                key={item.path}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: '999px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor:
                    location.pathname === item.path ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  },
                }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Box>
            ))}
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: 999,
                fontWeight: 700,
                px: 3,
                py: 1,
                boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
              }}
              onClick={() => handleNavigation('/contact')}
            >
              Plan an Event
            </Button>
          </Box>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            background: '#FFFFFF',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;