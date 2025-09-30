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
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useCustomTheme } from '../context/ThemeContext';

const galleryItems = [
  {
    type: 'video',
    src: '/media/gallery/ajit-hb1.mp4',
    title: 'Galaxy explorer birthday (Age 6)',
    description: 'From astronaut welcome tunnels to surprise confetti showers, this party was packed with cosmic joy.',
  },
  {
    type: 'video',
    src: '/media/gallery/ajit-hb2.mp4',
    title: 'Carnival under the stars',
    description: 'An outdoor birthday with game stalls, live caricature artists, and a dramatic pyro finale.',
  },
  {
    type: 'image',
    src: '/media/gallery/ajit-image-1.jpeg',
    title: 'Ajit, our founder in action',
    description: 'Hands-on supervision to ensure every timeline cue and vendor handshake lands perfectly.',
  },
  {
    type: 'image',
    src: '/media/gallery/ajit-image-2.jpeg',
    title: 'Curating the stage reveal',
    description: 'Final lighting and prop checks moments before guests walk in for the grand surprise.',
  },
  {
    type: 'image',
    src: '/media/gallery/ajit-image-3.jpeg',
    title: 'Backstage coordination',
    description: 'Our core team orchestrating entertainers, decor artists, and hospitality to keep the celebration flowing.',
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
              maxWidth: isMobile ? '100%' : '75vw',
              maxHeight: '85vh',
              borderRadius: '16px',
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
              maxWidth: isMobile ? '95%' : '75vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '16px',
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenViewer = (item) => {
    setSelectedItem(item);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedItem(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Fade in timeout={800}>
        <Stack spacing={2.5} textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: colors.primaryDark,
              fontSize: isMobile ? '2.2rem' : '3.1rem',
            }}
          >
            A peek into the parties we curate
          </Typography>
          <Typography sx={{ maxWidth: 760, mx: 'auto', color: '#5a4f6d', lineHeight: 1.8 }}>
            Every frame captures handcrafted moments, happy faces, and the behind-the-scenes coordination that keeps your celebration on cue.
          </Typography>
        </Stack>
      </Fade>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {galleryItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.src}>
            <Grow in timeout={900 + index * 150}>
              <Card
                onClick={() => handleOpenViewer(item)}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 45px rgba(15,23,43,0.12)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', paddingTop: '62%', overflow: 'hidden' }}>
                  <Box
                    component={item.type === 'video' ? 'video' : 'img'}
                    src={item.src}
                    alt={item.title}
                    controls={false}
                    muted
                    autoPlay={false}
                    loop={false}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {item.type === 'video' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        borderRadius: '50%',
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: '2.1rem', ml: 0.3 }} />
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primaryDark, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#5a4f6d', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={1600}>
        <Card
          sx={{
            mt: { xs: 7, md: 9 },
            borderRadius: 5,
            background: colors.cardGradient,
            boxShadow: '0 24px 55px rgba(15,23,43,0.12)',
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 5 } }}>
            <Stack spacing={2.5} alignItems="center" textAlign="center">
              <Typography
                variant="h4"
                sx={{
                  color: colors.primaryDark,
                  fontWeight: 800,
                  fontSize: isMobile ? '1.8rem' : '2.3rem',
                }}
              >
                Want your celebration spotlighted next?
              </Typography>
              <Typography sx={{ maxWidth: 620, color: '#5a4f6d', lineHeight: 1.8 }}>
                Share your Peeka Boo event photographs or invite us to capture the next one. We love featuring joyful stories from our client family.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ px: 4, py: 1.4 }}
              >
                Tell us about your event
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Fade>

      <MediaViewer open={viewerOpen} onClose={handleCloseViewer} item={selectedItem} />
    </Container>
  );
};

export default Gallery;