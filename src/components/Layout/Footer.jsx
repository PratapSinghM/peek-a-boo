import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useCustomTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { colors } = useCustomTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 40%, ${colors.secondary} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.25,
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, rgba(255,255,255,0) 45%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
        <Stack spacing={{ xs: 4, md: 3 }} alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '0.8px' }}>
              Peeka Boo Events
            </Typography>
            <Typography sx={{ opacity: 0.85, mt: 1 }}>
              Crafting joy-filled birthdays, social soirees, and milestone moments across Mumbai & beyond.
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 6 }}>
            <Stack spacing={0.5}>
              <Typography sx={{ fontWeight: 600, letterSpacing: '0.6px' }}>Call us</Typography>
              <Typography component="a" href="tel:+919821148631" sx={{ color: 'inherit', textDecoration: 'none' }}>
                +91 98211 48631
              </Typography>
            </Stack>
            <Stack spacing={0.5}>
              <Typography sx={{ fontWeight: 600, letterSpacing: '0.6px' }}>Write to us</Typography>
              <Typography component="a" href="mailto:hello@peekabooevents.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
                hello@peekabooevents.com
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1.5}>
            <IconButton
              aria-label="Chat on WhatsApp"
              component="a"
              href="https://wa.me/919821148631?text=Hi%20Peeka%20Boo!%20Let's%20plan%20an%20event"
              target="_blank"
              rel="noreferrer"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              aria-label="Follow on Instagram"
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Email Peeka Boo Events"
              component="a"
              href="mailto:hello@peekabooevents.com"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
              }}
            >
              <MailOutlineIcon />
            </IconButton>
          </Stack>

          <Typography sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
            Copyright {new Date().getFullYear()} Peeka Boo Events. All rights reserved. Designed to delight every guest.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;