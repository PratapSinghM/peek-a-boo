import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useCustomTheme } from '../../context/ThemeContext';
import { useBasket } from '../../context/BasketContext';

const packages = [
  {
    name: 'Basic',
    price: '₹1,500',
    description: '200 balloons with ribbons and Happy Birthday strip banner or tag',
    images: [
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Basic/Decoration Package Basic 01.jpeg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Basic/Decoration Package Basic 02.jpeg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Basic/Decoration Package Basic 03.jpeg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Basic/Decoration Package Basic 04.jpeg',
    ],
  },
  {
    name: 'Standard',
    price: '₹2,500',
    description: '300 balloons with ribbons, happy birthday foil banner',
    images: [
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Standard/Decoration Package Standard 01.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Standard/Decoration Package Standard 02.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Standard/Decoration Package Standard 03.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Standard/Decoration Package Standard 04.jpg',
    ],
  },
  {
    name: 'Gold',
    price: '₹3,500',
    description: '500 balloons with ribbons, happy birthday foil banner, foil name, foil curtain',
    images: [
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Gold/Decoration Package Gold 01.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Gold/Decoration Package Gold 02.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Gold/Decoration Package Gold 03.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Gold/Decoration Package Gold 04.jpg',
    ],
  },
  {
    name: 'Premium',
    price: '₹5,500',
    description: '800 balloons with ribbons, happy birthday foil banner, foil name, foil curtain, foil theme balloons, two party poppers',
    images: [
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Premium/Decoration Package Premium 01.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Premium/Decoration Package Premium 02.jpg',
    ],
  },
  {
    name: 'Platinum',
    price: '₹8,500',
    description: 'Theme back drop, 1000 balloons with ribbons, happy birthday LED name, small led alphabetic name, Welcome board, foil theme balloons, balloon gate, Two LED lights on back drop, four party poppers',
    images: [
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Platinum/Decoration Package Platinum 01.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Platinum/Decoration Package Platinum 02.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Platinum/Decoration Package Platinum 03.jpg',
      'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Decoration Packages/Platinum/Decoration Package Platinum 04.jpg',
    ],
  },
];

const ImageViewer = ({ images, currentIndex, onClose, onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'rgba(0,0,0,0.95)',
          boxShadow: 'none',
          overflow: 'hidden',
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#333',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,1)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {images.length > 1 && (
          <>
            <IconButton
              onClick={() => onNavigate(-1)}
              sx={{
                position: 'absolute',
                left: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#333',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,1)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>

            <IconButton
              onClick={() => onNavigate(1)}
              sx={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#333',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,1)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>

            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {currentIndex + 1} / {images.length}
            </Box>
          </>
        )}

        <Box
          component="img"
          src={images[currentIndex]}
          alt={`Package image ${currentIndex + 1}`}
          sx={{
            maxWidth: '90%',
            maxHeight: '90%',
            objectFit: 'contain',
            borderRadius: '10px',
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

const DecorationPackages = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const { colors } = useCustomTheme();
  const { addToBasket, getItemQuantity } = useBasket();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleImageClick = (images, index) => {
    setSelectedImage(images);
    setCurrentImageIndex(index);
  };

  const handleImageNavigate = (direction) => {
    if (!selectedImage) return;
    
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < selectedImage.length) {
      setCurrentImageIndex(newIndex);
    } else if (newIndex < 0) {
      setCurrentImageIndex(selectedImage.length - 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handleAddToBasket = (packageItem) => {
    addToBasket({
      name: `${packageItem.name} Decoration Package`,
      price: packageItem.price,
      type: 'decoration',
    });
    setSnackbar({
      open: true,
      message: `${packageItem.name} package added to basket!`,
      severity: 'success',
    });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {packages.map((pkg, index) => (
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
                    mb: 2,
                  }}
                >
                  {pkg.description}
                </Typography>

                {pkg.images && pkg.images.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ color: colors.primaryDark, mb: 1, fontSize: '1.1rem' }}>
                      📸 Package Gallery
                    </Typography>
                    <ImageList
                      cols={isMobile ? 2 : 4}
                      gap={8}
                      sx={{
                        maxHeight: 200,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(0,0,0,0.02)',
                        p: 1,
                      }}
                    >
                      {pkg.images.map((image, imgIndex) => (
                        <ImageListItem
                          key={imgIndex}
                          sx={{
                            cursor: 'pointer',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                          onClick={() => handleImageClick(pkg.images, imgIndex)}
                        >
                          <img
                            src={image}
                            alt={`${pkg.name} ${imgIndex + 1}`}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                )}

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
                  {getItemQuantity(`${pkg.name} Decoration Package`, 'decoration') > 0 && (
                    <Typography component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
                      ({getItemQuantity(`${pkg.name} Decoration Package`, 'decoration')})
                    </Typography>
                  )}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedImage && (
        <ImageViewer
          images={selectedImage}
          currentIndex={currentImageIndex}
          onClose={() => setSelectedImage(null)}
          onNavigate={handleImageNavigate}
        />
      )}

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

export default DecorationPackages;