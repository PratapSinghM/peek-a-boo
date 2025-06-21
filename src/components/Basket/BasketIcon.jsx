import React, { useState } from 'react';
import {
  Fab,
  Badge,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useBasket } from '../../context/BasketContext';
import { useCustomTheme } from '../../context/ThemeContext';
import BasketModal from './BasketModal';

const BasketIcon = () => {
  const [open, setOpen] = useState(false);
  const { getTotalItems } = useBasket();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const totalItems = getTotalItems();

  return (
    <>
      <Badge
        badgeContent={totalItems}
        color="error"
        sx={{
          position: 'fixed',
          top: isMobile ? 120 : 150,
          right: isMobile ? 10 : 20,
          zIndex: 2000,
          '& .MuiBadge-badge': {
            backgroundColor: '#FF1493',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.7rem',
          },
        }}
      >
        <Fab
          onClick={() => setOpen(true)}
          sx={{
            width: isMobile ? 45 : 60,
            height: isMobile ? 45 : 60,
            backgroundColor: colors.primary,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
              backgroundColor: colors.primaryDark,
            },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }} />
        </Fab>
      </Badge>

      <BasketModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default BasketIcon;