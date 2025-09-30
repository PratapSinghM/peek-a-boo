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
  Stack,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useCustomTheme } from '../context/ThemeContext';

const contactMethods = [
  {
    icon: <PhoneIcon sx={{ fontSize: '3rem' }} />,
    title: 'Call the studio',
    contact: '+91 98211 48631',
    subtitle: 'Available 9:00 AM - 9:00 PM IST',
    action: 'tel:+919821148631',
    buttonText: 'Call Peeka Boo',
    gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: '3rem' }} />,
    title: 'Chat on WhatsApp',
    contact: '+91 98211 48631',
    subtitle: 'Quick replies with sample decks',
    action: 'https://wa.me/919821148631?text=Hi%20Peeka%20Boo!%20Let%27s%20plan%20an%20event',
    buttonText: 'Say hello on WhatsApp',
    gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    external: true,
  },
  {
    icon: <EmailIcon sx={{ fontSize: '3rem' }} />,
    title: 'Write to us',
    contact: 'hello@peekabooevents.com',
    subtitle: 'Share briefs, mood boards, or RFPs',
    action: 'mailto:hello@peekabooevents.com?subject=Event%20Planning%20Inquiry',
    buttonText: 'Send an email',
    gradient: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)',
  },
];

const celebrationTypes = [
  { label: 'Birthdays', icon: <CakeIcon /> },
  { label: 'Anniversaries', icon: <FavoriteIcon /> },
  { label: 'Social soirees', icon: <Diversity3Icon /> },
  { label: 'Corporate moments', icon: <EmojiEventsIcon /> },
];

const Contact = () => {
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleContactClick = (method) => {
    if (method.external) {
      window.open(method.action, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = method.action;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Fade in timeout={800}>
        <Stack spacing={2} textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: colors.primaryDark,
              fontWeight: 800,
              fontSize: isMobile ? '2.2rem' : '3.1rem',
            }}
          >
            Let's start planning your next celebration
          </Typography>
          <Typography sx={{ maxWidth: 720, mx: 'auto', color: '#5a4f6d', lineHeight: 1.8 }}>
            Tell us about the milestone, guest vibe, and wish list. We will respond within one business day with ideas and a discovery call slot.
          </Typography>
        </Stack>
      </Fade>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {contactMethods.map((method, index) => (
          <Grid item xs={12} md={4} key={method.title} sx={{ display: 'flex' }}>
            <Grow in timeout={900 + index * 150}>
              <Card
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: method.gradient,
                  color: '#1F1235',
                  textAlign: 'center',
                  borderRadius: 4,
                  boxShadow: '0 20px 45px rgba(15,23,43,0.16)',
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 4, md: 4.5 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Stack spacing={2.5} alignItems="center" sx={{ flexGrow: 1, width: '100%' }}>
                    <Box sx={{ color: '#402A64' }}>{method.icon}</Box>
                    <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {method.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 600 }}>{method.contact}</Typography>
                      <Typography sx={{ color: '#4B3A63', lineHeight: 1.6 }}>
                        {method.subtitle}
                      </Typography>
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={() => handleContactClick(method)}
                      sx={{
                        borderRadius: 999,
                        px: 3,
                        py: 1.2,
                        boxShadow: '0 14px 32px rgba(15,23,43,0.18)',
                        mt: 'auto',
                        backgroundColor: '#ffffff',
                        color: '#1F1235',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: '#1F1235',
                        },
                      }}
                    >
                      {method.buttonText}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={1400}>
        <Card
          sx={{
            mt: { xs: 8, md: 9 },
            borderRadius: 5,
            background: colors.cardGradient,
            boxShadow: '0 24px 55px rgba(15,23,43,0.12)',
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography
                variant="h4"
                sx={{
                  color: colors.primaryDark,
                  fontWeight: 800,
                  fontSize: isMobile ? '1.8rem' : '2.4rem',
                }}
              >
                We specialise in
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {celebrationTypes.map((item, index) => (
                  <Grid item xs={6} sm={3} key={item.label}>
                    <Grow in timeout={1500 + index * 120}>
                      <Box
                        sx={{
                          background: 'rgba(255,255,255,0.7)',
                          borderRadius: 4,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                          fontWeight: 600,
                          color: colors.primaryDark,
                          minHeight: 120,
                        }}
                      >
                        <Box sx={{ fontSize: isMobile ? '2.2rem' : '2.5rem' }}>{item.icon}</Box>
                        <Typography variant="body2">{item.label}</Typography>
                      </Box>
                    </Grow>
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ maxWidth: 640, color: '#5a4f6d', lineHeight: 1.8 }}>
                New idea on your mind? We love building fresh experiences from scratch. Share your brief, Pinterest board, or even a quick bullet list and we will take it forward.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
};

export default Contact;
