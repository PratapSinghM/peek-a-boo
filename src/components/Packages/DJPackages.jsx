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

const djPackages = [
  {
    name: 'Basic DJ Setup',
    price: '₹5,000',
    description: '2 50inch speakers, DJ console, Professional D.J. operator',
  },
  {
    name: 'Two Way DJ Setup',
    price: '₹7,000',
    description: '2 Tower Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand',
  },
  {
    name: 'Three Way DJ Setup',
    price: '₹10,000',
    description: '2 Bass & 2 Top Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand',
  },
];

const DJPackages = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const { colors } = useCustomTheme();
  const { addToBasket, getItemQuantity } = useBasket();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddToBasket = (packageItem) => {
    addToBasket({
      name: packageItem.name,
      price: packageItem.price,
      type: 'dj',
    });
    setSnackbar({
      open: true,
      message: `${packageItem.name} added to basket!`,
      severity: 'success',
    });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {djPackages.map((pkg, index) => (
          <Grid item xs={12} key={pkg.name}>
            <Card
              sx={{
                background: colors.cardGradient,
                border: `2px solid ${colors.primary}`,
                borderRadius: '15px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: colors.primaryDark,
                      fontWeight: 700,
                      fontSize: isMobile ? '1.2rem' : '1.3rem',
                    }}
                  >
                    {index + 1}. {pkg.name}
                  </Typography>
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: '20px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {pkg.price}
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  {pkg.description}
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => handleAddToBasket(pkg)}
                  sx={{
                    backgroundColor: colors.success,
                    color: 'white',
                    borderRadius: '25px',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#228B22',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  startIcon={<Typography>🛒</Typography>}
                >
                  Add to Basket
                  {getItemQuantity(pkg.name, 'dj') > 0 && (
                    <Typography component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
                      ({getItemQuantity(pkg.name, 'dj')})
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

export default DJPackages;