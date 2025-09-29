import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useCustomTheme } from '../context/ThemeContext';

const floatAnimation = keyframes`
  0% { transform: translateX(-20%); }
  100% { transform: translateX(120%); }
`;

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), ${colors.gradient}`,
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-20%',
          width: '140%',
          fontSize: '2rem',
          opacity: 0.2,
          animation: `${floatAnimation} 30s linear infinite`,
          whiteSpace: 'nowrap',
        }}
      >
        🎂 🎈 🎁 🎊 ✨ 🎂 🎈 🎁 🎊 ✨ 🎂 🎈 🎁 🎊 ✨
      </Box>

      <Fade in timeout={1000}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: isMobile ? '2.2rem' : '3rem',
              fontWeight: 800,
              mb: 2,
              color: '#fff',
              textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
            }}
          >
            🎉 Welcome to Peeka Boo Events
          </Typography>
          
          <Typography
            component="h2"
            sx={{
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              mb: 4,
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#FFE4E1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            "Let's Celebrate Moments that Matter"
          </Typography>
          
          <Grow in timeout={1500}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/events')}
              sx={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                px: isMobile ? 3 : 4,
                py: isMobile ? 1.5 : 2,
                borderRadius: '30px',
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.primaryDark}, ${colors.secondary})`,
                border: '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              ✨ Explore Our Magical Events ✨
            </Button>
          </Grow>
        </Box>
      </Fade>
    </Box>
  );
};

const AboutSection = () => {
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    { icon: '🎨', text: 'Creative & Colorful Decorations' },
    { icon: '👨‍👩‍👧‍👦', text: 'Family-Run with Personal Touch' },
    { icon: '🎵', text: 'Traditional & Modern Entertainment' },
    { icon: '💝', text: 'End-to-End Event Management' },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    color: colors.primaryDark,
                    mb: 3,
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: 700,
                  }}
                >
                  🌟 About Ajit & Peeka Boo
                </Typography>
                
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: '1.2rem',
                    mb: 3,
                    color: '#555',
                    lineHeight: 1.8,
                  }}
                >
                  Welcome to our vibrant world of celebrations! Founded by Ajit, Peeka Boo is a passionate, 
                  family-run Indian events company dedicated to creating magical moments that last a lifetime.
                </Typography>
                
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
                >
                  From intimate birthday parties to grand weddings, from joyful get-togethers to milestone anniversaries, 
                  we bring the authentic spirit of Indian celebrations to every event. Our team understands that each 
                  occasion is unique and deserves personalized attention.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ color: '#666', lineHeight: 1.8 }}
                >
                  With years of experience and a deep love for bringing people together, we specialize in creating 
                  unforgettable experiences filled with color, music, joy, and the warmth of Indian hospitality.
                </Typography>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grow in timeout={1500}>
              <Card
                sx={{
                  background: colors.cardGradient,
                  border: `3px solid ${colors.primary}`,
                  borderRadius: '20px',
                  p: 2,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colors.primaryDark,
                      textAlign: 'center',
                      mb: 4,
                      fontSize: isMobile ? '1.5rem' : '2rem',
                      fontWeight: 700,
                    }}
                  >
                    🌟 Why Choose Peeka Boo?
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {features.map((feature, index) => (
                      <Fade in timeout={2000 + index * 200} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            background: 'rgba(255,255,255,0.5)',
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '2rem',
                              mr: 2,
                              animation: `${bounceAnimation} 3s ease-in-out infinite`,
                              animationDelay: `${index * 0.5}s`,
                            }}
                          >
                            {feature.icon}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, color: '#555' }}
                          >
                            {feature.text}
                          </Typography>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
    </Box>
  );
};

export default HomePage;