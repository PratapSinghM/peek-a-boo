import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import { useCustomTheme } from '../../context/ThemeContext';
import { useBasket } from '../../context/BasketContext';

const gameStalls = [
  {
    name: 'Buzz Wire',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Buzz Wire.jpeg',
  },
  {
    name: 'Feed the Clown',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Feed the Clown.jpeg',
  },
  {
    name: 'Knock the Cans',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Knock the Cans.jpeg',
  },
  {
    name: 'Hit the Hammer',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Hit the Hammer.jpeg',
  },
  {
    name: 'Balloon Shootings',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Balloon Shootings.jpeg',
  },
  {
    name: 'Basket Ball',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Basket Ball.jpeg',
  },
  {
    name: 'Ring Toss',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Ring Toss.jpeg',
  },
  {
    name: 'Twister',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Twister.jpeg',
  },
  {
    name: 'Wheel of Fortune',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Wheel of Fortune.jpeg',
  },
  {
    name: 'Archery',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Archery.jpeg',
  },
  {
    name: 'Bowling Alley',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Bowling alley.jpeg',
  },
  {
    name: 'Dart Game',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Dart.jpeg',
  },
  {
    name: 'Jenga',
    image: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Game Stalls/Jenga.jpeg',
  },
];

const GamePackages = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const { colors } = useCustomTheme();
  const { addToBasket, getItemQuantity } = useBasket();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddToBasket = (game) => {
    addToBasket({
      name: `${game.name} Game Stall`,
      price: '₹3,000',
      type: 'games',
    });
    setSnackbar({
      open: true,
      message: `${game.name} Game Stall added to basket!`,
      severity: 'success',
    });
  };

  return (
    <Box>
      <Card
        sx={{
          textAlign: 'center',
          background: colors.cardGradient,
          p: 3,
          borderRadius: '15px',
          mb: 4,
          border: `2px solid ${colors.primary}`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.primaryDark,
            fontWeight: 700,
            fontSize: isMobile ? '1.3rem' : '1.5rem',
          }}
        >
          ₹3,000 Per Game Stall
        </Typography>
      </Card>

      <Grid container spacing={2}>
        {gameStalls.map((game, index) => (
          <Grid item xs={6} sm={4} md={3} key={game.name}>
            <Card
              sx={{
                background: colors.cardGradient,
                border: `2px solid ${colors.primary}`,
                borderRadius: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: isMobile ? 120 : 150,
                  borderRadius: '10px 10px 0 0',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src={game.image}
                  alt={game.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div style="color: white; font-size: 2rem;">🎯</div>';
                  }}
                />
              </Box>

              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.primaryDark,
                    fontWeight: 700,
                    fontSize: isMobile ? '0.9rem' : '1.1rem',
                    mb: 1,
                  }}
                >
                  {index + 1}. {game.name}
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleAddToBasket(game)}
                  sx={{
                    backgroundColor: colors.success,
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    px: 2,
                    py: 0.5,
                    '&:hover': {
                      backgroundColor: '#228B22',
                      transform: 'translateY(-1px)',
                    },
                  }}
                  startIcon={<Typography sx={{ fontSize: '0.8rem' }}>🛒</Typography>}
                >
                  Add
                  {getItemQuantity(`${game.name} Game Stall`, 'games') > 0 && (
                    <Typography component="span" sx={{ ml: 0.5, fontWeight: 'bold', fontSize: '0.7rem' }}>
                      ({getItemQuantity(`${game.name} Game Stall`, 'games')})
                    </Typography>
                  )}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GamePackages;