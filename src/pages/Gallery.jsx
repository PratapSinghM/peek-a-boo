import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useCustomTheme } from '../context/ThemeContext';

const galleryItems = [
  {
    type: 'video',
    src: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Ajit HB1.mp4',
    title: '🎬 Birthday Party',
    description: 'Birthday celebration highlights with Ajit - Full of joy and magical moments! 🎉',
  },
  {
    type: 'video',
    src: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Ajit HB2.mp4',
    title: '🎬 Ajit HB2.mp4',
    description: 'More birthday celebration moments filled with laughter and happiness! 🎊',
  },
  {
    type: 'image',
    src: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Ajit Image1.jpeg',
    title: '📸 Ajit - Our Founder',
    description: 'Meet Ajit, the passionate founder of Peeka Boo Events - Creating magical celebrations! 🎨',
  },
  {
    type: 'image',
    src: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Ajit Image2.jpeg',
    title: '📸 Event Setup Magic',
    description: 'Magical celebration setup and decorations that create unforgettable memories! ✨',
  },
  {
    type: 'image',
    src: 'https://strdevajiteastus001.blob.core.windows.net/ajitem/resources/Ajit Image3.jpeg',
    title: '📸 Professional Management',
    description: 'Professional event management in action - Creating joy and celebration! 🎉',
  },
];

const MediaViewer = ({ open, onClose, item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!item) return null;

  return (
    <Dialog
      open={open}
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

        {item.type === 'video' ? (
          <Box
            component="video"
            controls
            autoPlay
            sx={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
            }}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        ) : (
          <Box
            component="img"
            src={item.src}
            alt={item.title}
            sx={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '10px',
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedItem(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Fade in timeout={1000}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: colors.primaryDark,
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
          }}
        >
          📸 Our Event Gallery
        </Typography>
      </Fade>

      <Fade in timeout={1200}>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            fontSize: isMobile ? '1rem' : '1.2rem',
          }}
        >
          Capturing the joy and magic of our celebrations ✨
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        {galleryItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Grow in timeout={1000 + index * 200}>
              <Card
                onClick={() => handleItemClick(item)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 250,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.type === 'video' ? (
                    <>
                      <Box
                        component="video"
                        muted
                        loop
                        preload="metadata"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                      >
                        <source src={item.src} type="video/mp4" />
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          opacity: 0.8,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            opacity: 1,
                            transform: 'translate(-50%, -50%) scale(1.1)',
                          },
                        }}
                      >
                        <PlayArrowIcon sx={{ fontSize: '2rem', ml: 0.5 }} />
                      </Box>
                    </>
                  ) : (
                    <Box
                      component="img"
                      src={item.src}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<div style="color: white; font-size: 2rem; display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; gap: 10px;"><div>🎊</div><div style="font-size: 1rem;">Image Loading...</div></div>';
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: colors.primaryDark,
                      fontWeight: 700,
                      fontSize: isMobile ? '1rem' : '1.1rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={2000}>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Card
            sx={{
              background: colors.cardGradient,
              p: 4,
              borderRadius: '20px',
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: colors.primaryDark,
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 700,
                mb: 2,
              }}
            >
              📱 Share Your Magical Moments
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#666',
                lineHeight: 1.8,
                fontSize: isMobile ? '1rem' : '1.1rem',
              }}
            >
              We love seeing the joy on our clients' faces! Share your event photos with us and 
              let's celebrate together. Tag us on social media to be featured in our gallery! 🌈
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                px: isMobile ? 3 : 4,
                py: isMobile ? 1.5 : 2,
              }}
            >
              🎊 Get Your Event Featured! 🎊
            </Button>
          </Card>
        </Box>
      </Fade>

      <MediaViewer
        open={viewerOpen}
        onClose={handleCloseViewer}
        item={selectedItem}
      />
    </Container>
  );
};

export default Gallery;