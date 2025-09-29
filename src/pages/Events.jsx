import React from 'react';
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
import { useCustomTheme } from '../context/ThemeContext';

const eventTypes = [
  {
    title: 'Birthday Parties',
    emoji: '🎂',
    description: 'Magical celebrations for all ages with decorations, entertainment, and unforgettable memories!',
    color: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)',
    link: '/birthday-details',
    buttonText: '🎁 View Birthday Services',
  },
  {
    title: 'Get-togethers',
    emoji: '🤝',
    description: 'Warm and welcoming gatherings that bring family and friends closer together!',
    color: 'linear-gradient(135deg, #32CD32 0%, #228B22 100%)',
  },
  {
    title: 'Anniversaries',
    emoji: '💕',
    description: 'Romantic and elegant celebrations of love and milestone moments!',
    color: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
  },
  {
    title: 'Weddings',
    emoji: '👰',
    description: 'Grand celebrations with traditional Indian customs and modern elegance!',
    color: 'linear-gradient(135deg, #9370DB 0%, #8A2BE2 100%)',
  },
];

const Events = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Fade in timeout={1000}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: colors.primaryDark,
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
          }}
        >
          🎊 Our Magical Event Services
        </Typography>
      </Fade>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {eventTypes.map((event, index) => (
          <Grid item xs={12} md={6} key={event.title}>
            <Grow in timeout={1000 + index * 200}>
              <Card
                sx={{
                  background: event.color,
                  color: 'white',
                  textAlign: 'center',
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    {event.emoji}
                  </Typography>
                  
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      mb: 2,
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    {event.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      mb: 3,
                      opacity: 0.95,
                    }}
                  >
                    {event.description}
                  </Typography>
                  
                  {event.link && (
                    <Button
                      variant="contained"
                      onClick={() => navigate(event.link)}
                      sx={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.3)',
                          transform: 'translateY(-2px)',
                        },
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                      }}
                    >
                      {event.buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={2000}>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mb: 3,
              color: colors.primaryDark,
              fontSize: isMobile ? '1.5rem' : '2rem',
            }}
          >
            🌟 Ready to Plan Your Perfect Event? 🌟
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
            🎊 Get in Touch Today! 🎊
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default Events;