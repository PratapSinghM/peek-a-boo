import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useBasket } from '../../context/BasketContext';
import { useCustomTheme } from '../../context/ThemeContext';

const BasketModal = ({ open, onClose }) => {
  const {
    basket,
    removeFromBasket,
    updateQuantity,
    getTotalPrice,
    generateWhatsAppMessage,
  } = useBasket();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [snackbar, setSnackbar] = React.useState({ open: false, message: '', severity: 'success' });

  const handleWhatsAppOrder = () => {
    if (basket.length === 0) {
      setSnackbar({ open: true, message: 'Your basket is empty!', severity: 'warning' });
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919821148631?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: isMobile ? 0 : '20px',
            maxHeight: isMobile ? '100vh' : '80vh',
          },
        }}
      >
        <DialogTitle
          sx={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShoppingCartIcon /> Your Order Basket
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0, minHeight: 200 }}>
          {basket.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                px: 4,
                color: '#666',
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: '3rem', mb: 2, color: '#ddd' }} />
              <Typography variant="h6" gutterBottom>
                Your basket is empty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add services to start building your perfect event!
              </Typography>
            </Box>
          ) : (
            <List sx={{ p: 0 }}>
              {basket.map((item, index) => {
                const itemTotal = parseInt(item.price.replace('₹', '').replace(',', '')) * item.quantity;
                return (
                  <React.Fragment key={item.id}>
                    <ListItem
                      sx={{
                        py: 2,
                        px: 3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.primaryDark }}>
                              {item.name}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {item.price} × {item.quantity} = ₹{itemTotal.toLocaleString()}
                            </Typography>
                          }
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, -1)}
                          sx={{
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            width: 30,
                            height: 30,
                            '&:hover': { backgroundColor: '#c0392b' },
                          }}
                        >
                          <RemoveIcon sx={{ fontSize: '0.9rem' }} />
                        </IconButton>
                        
                        <Chip
                          label={item.quantity}
                          sx={{
                            fontWeight: 'bold',
                            minWidth: 40,
                            backgroundColor: colors.primary,
                            color: 'white',
                          }}
                        />
                        
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, 1)}
                          sx={{
                            backgroundColor: colors.success,
                            color: 'white',
                            width: 30,
                            height: 30,
                            '&:hover': { backgroundColor: '#27ae60' },
                          }}
                        >
                          <AddIcon sx={{ fontSize: '0.9rem' }} />
                        </IconButton>
                        
                        <IconButton
                          size="small"
                          onClick={() => removeFromBasket(item.id)}
                          sx={{
                            color: '#e74c3c',
                            '&:hover': { backgroundColor: 'rgba(231, 76, 60, 0.1)' },
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </ListItem>
                    {index < basket.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </List>
          )}
        </DialogContent>

        {basket.length > 0 && (
          <DialogActions
            sx={{
              flexDirection: 'column',
              gap: 2,
              p: 3,
              background: colors.cardGradient,
              borderTop: `2px solid ${colors.primary}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: colors.primaryDark,
                textAlign: 'center',
              }}
            >
              Total: ₹{getTotalPrice().toLocaleString()}
            </Typography>
            
            <Button
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppOrder}
              sx={{
                background: '#25D366',
                color: 'white',
                fontSize: '1.1rem',
                py: 1.5,
                '&:hover': {
                  background: '#128C7E',
                },
              }}
            >
              💬 Send Order to WhatsApp
            </Button>
          </DialogActions>
        )}
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BasketModal;