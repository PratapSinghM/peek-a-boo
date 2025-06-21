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
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useCustomTheme } from '../context/ThemeContext';
import PackageModal from '../components/Packages/PackageModal';

const rainbowAnimation = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  25% { transform: translateY(-8px) scale(1.05); }
  50% { transform: translateY(-12px) scale(1.1); }
  75% { transform: translateY(-8px) scale(1.05); }
`;

const birthdayServices = [
  {
    id: 1,
    emoji: '🎨',
    title: 'Decoration',
    description: 'Beautiful themed decorations tailored to your preferences with vibrant colors and festive elements',
    hasPackages: true,
    packageType: 'decoration',
  },
  {
    id: 2,
    emoji: '🎵',
    title: 'D.J with lights',
    description: 'Professional DJ services with stunning light displays that create an amazing party atmosphere',
    hasPackages: true,
    packageType: 'dj',
  },
  {
    id: 3,
    emoji: '🎯',
    title: 'Game stalls',
    description: 'Fun and engaging game stations for all ages that keep everyone entertained',
    hasPackages: true,
    packageType: 'games',
  },
  {
    id: 4,
    emoji: '🎪',
    title: 'Activities',
    description: 'Interactive activities designed to keep everyone engaged and create memorable moments',
  },
  {
    id: 5,
    emoji: '🎤',
    title: 'Anchor',
    description: 'Professional host to guide your event smoothly and keep the energy high',
  },
  {
    id: 6,
    emoji: '🎩',
    title: 'Magic show',
    description: 'Mesmerizing magic performances that amaze all ages and create wonder-filled moments',
  },
  {
    id: 7,
    emoji: '🫧',
    title: 'Bubble show',
    description: 'Enchanting bubble displays that create magical moments and delight children and adults',
  },
  {
    id: 8,
    emoji: '🎭',
    title: 'Puppet Show',
    description: 'Delightful puppet performances with engaging stories that captivate young audiences',
  },
  {
    id: 9,
    emoji: '❄️',
    title: 'Special entry with dry ice',
    description: 'Dramatic entrance with mesmerizing dry ice effects that make the birthday star feel special',
  },
  {
    id: 10,
    emoji: '🎁',
    title: 'Return gifts',
    description: 'Thoughtfully curated return gifts that guests will treasure as beautiful memories',
  },
];

const BirthdayDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackageType, setSelectedPackageType] = useState('');
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleServiceClick = (service) => {
    if (service.hasPackages) {
      setSelectedPackageType(service.packageType);
      setModalOpen(true);
    }
  };

  return (
    <Box
      sx={{
        background: colors.cardGradient,
        minHeight: '100vh',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 3,
              color: colors.primary,
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 700,
            }}
          >
            🎂 Birthday Party Services
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
            Complete birthday celebration packages to make your special day absolutely unforgettable! ✨
          </Typography>
        </Fade>

        <Grid container spacing={3}>
          {birthdayServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Grow in timeout={1000 + index * 100}>
                <Card
                  onClick={() => handleServiceClick(service)}
                  sx={{
                    background: colors.cardGradient,
                    border: `2px solid ${colors.primary}`,
                    borderRadius: '20px',
                    p: 2,
                    cursor: service.hasPackages ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 12px 30px rgba(255, 105, 180, 0.25)`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -3,
                      left: -3,
                      right: -3,
                      bottom: -3,
                      background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent}, ${colors.success}, ${colors.info}, ${colors.secondary}, ${colors.primary})`,
                      backgroundSize: '400% 400%',
                      borderRadius: '20px',
                      zIndex: -1,
                      animation: `${rainbowAnimation} 8s ease-in-out infinite`,
                    },
                    '&::after': {
                      content: '"🎂"',
                      position: 'absolute',
                      top: 15,
                      right: 20,
                      fontSize: '1.8rem',
                      animation: `${bounceAnimation} 1.5s ease-in-out infinite`,
                      filter: 'drop-shadow(2px 2px 4px rgba(255, 105, 180, 0.3))',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          borderRadius: '15px',
                          p: 1,
                          mr: 2,
                          boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: '2rem',
                          }}
                        >
                          {service.emoji}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: colors.primaryDark,
                          textShadow: '1px 1px 2px rgba(255, 105, 180, 0.2)',
                        }}
                      >
                        {service.id}. {service.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#444',
                        lineHeight: 1.6,
                        fontWeight: 500,
                        pl: 1,
                        borderLeft: `3px solid rgba(255, 105, 180, 0.3)`,
                        background: 'rgba(255, 255, 255, 0.4)',
                        p: 2,
                        borderRadius: '15px',
                      }}
                    >
                      {service.description}
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
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                color: 'white',
                p: 4,
                borderRadius: '20px',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  mb: 2,
                }}
              >
                🌟 Complete Birthday Packages Available
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: isMobile ? '1rem' : '1.1rem',
                }}
              >
                Mix and match services or choose our complete packages for a stress-free celebration. 
                Every birthday deserves to be special! ✨
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  px: isMobile ? 3 : 4,
                  py: isMobile ? 1.5 : 2,
                  '&:hover': {
                    background: 'rgba(255,255,255,0.3)',
                  },
                }}
              >
                🎂 Plan Your Birthday Party Now! 🎂
              </Button>
            </Card>
          </Box>
        </Fade>
      </Container>

      <PackageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        packageType={selectedPackageType}
      />
    </Box>
  );
};

export default BirthdayDetails;