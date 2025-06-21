import React from 'react';
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
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useCustomTheme } from '../context/ThemeContext';

const contactMethods = [
  {
    icon: <PhoneIcon sx={{ fontSize: '3rem' }} />,
    title: 'Call Us',
    contact: '+91 98211 48631',
    subtitle: 'Available 9 AM - 9 PM',
    action: 'tel:+919821148631',
    buttonText: '📞 Call Now',
    color: 'linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #4169E1 100%)',
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: '3rem' }} />,
    title: 'WhatsApp',
    contact: '+91 98211 48631',
    subtitle: 'Quick responses guaranteed',
    action: 'https://wa.me/919821148631?text=Hi%20Peeka%20Boo!%20I%27d%20like%20to%20plan%20an%20event',
    buttonText: '💬 Chat on WhatsApp',
    color: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
    external: true,
  },
  {
    icon: <EmailIcon sx={{ fontSize: '3rem' }} />,
    title: 'Email Us',
    contact: 'hello@peekabooevents.com',
    subtitle: 'Detailed planning support',
    action: 'mailto:hello@peekabooevents.com?subject=Event%20Planning%20Inquiry',
    buttonText: '✉️ Send Email',
    color: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 50%, #34A853 100%)',
  },
];

const eventTypes = [
  { emoji: '🎂', name: 'Birthday Parties' },
  { emoji: '👰', name: 'Weddings' },
  { emoji: '💕', name: 'Anniversaries' },
  { emoji: '🤝', name: 'Get-togethers' },
];

const Contact = () => {
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleContactClick = (method) => {
    if (method.external) {
      window.open(method.action, '_blank');
    } else {
      window.location.href = method.action;
    }
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
          📞 Get in Touch
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
          Ready to plan your perfect celebration? Let's make it happen together! ✨
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        {contactMethods.map((method, index) => (
          <Grid item xs={12} md={4} key={method.title}>
            <Grow in timeout={1000 + index * 200}>
              <Card
                sx={{
                  background: method.color,
                  color: 'white',
                  textAlign: 'center',
                  minHeight: 320,
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
                  <Box sx={{ mb: 2 }}>
                    {method.icon}
                  </Box>
                  
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {method.title}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      fontWeight: 600,
                      mb: 2,
                      color: '#FFE4E1',
                    }}
                  >
                    {method.contact}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.9,
                      mb: 3,
                    }}
                  >
                    {method.subtitle}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    onClick={() => handleContactClick(method)}
                    sx={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      borderRadius: '25px',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        background: 'rgba(255,255,255,0.3)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={2000}>
        <Box sx={{ mt: 6 }}>
          <Card
            sx={{
              background: colors.cardGradient,
              p: 4,
              borderRadius: '20px',
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: 'center',
                color: colors.primaryDark,
                fontSize: isMobile ? '1.5rem' : '2.2rem',
                fontWeight: 700,
                mb: 3,
              }}
            >
              🎉 Let's Plan Something Amazing!
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                mb: 4,
                color: '#666',
                lineHeight: 1.8,
                fontSize: isMobile ? '1rem' : '1.1rem',
              }}
            >
              Whether it's an intimate gathering or a grand celebration, Peeka Boo is here to make your 
              event dreams come true. Get in touch and let's start planning your perfect celebration! 🌟
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {eventTypes.map((event, index) => (
                <Grid item xs={6} sm={3} key={event.name}>
                  <Grow in timeout={2500 + index * 100}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 2,
                        background: 'rgba(255,255,255,0.5)',
                        borderRadius: '15px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? '2rem' : '2.5rem',
                          mb: 1,
                        }}
                      >
                        {event.emoji}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: colors.primaryDark,
                          fontSize: isMobile ? '0.8rem' : '1rem',
                        }}
                      >
                        {event.name}
                      </Typography>
                    </Box>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>
      </Fade>
    </Container>
  );
};

export default Contact;