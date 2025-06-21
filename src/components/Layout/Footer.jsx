import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useCustomTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { colors } = useCustomTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 50%, ${colors.secondary} 100%)`,
        color: 'white',
        textAlign: 'center',
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" sx={{ fontSize: '1rem' }}>
          © 2025 Peeka Boo Events. All rights reserved. | Bringing Joy to Every Celebration 🎊
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;