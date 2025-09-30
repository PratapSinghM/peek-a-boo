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
  Stack,
  Chip,
} from '@mui/material';
import { useCustomTheme } from '../context/ThemeContext';

const eventTypes = [
  {
    title: 'Showstopper Birthdays',
    emoji: '🎂',
    highlight: 'Themed styling, interactive zones, spotlight entries, and wow-worthy cakes.',
    gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
    link: '/birthday-details',
    cta: 'Explore birthday magic',
    tags: ['Balloon art', 'Grand entries', 'Return gifts'],
    media: {
      type: 'image',
      src: '/media/decoration-packages/platinum/platinum-07.jpg',
      alt: 'Plush pink and gold birthday stage styling',
    },
  },
  {
    title: 'Intimate Soirees',
    emoji: '🥂',
    highlight: 'Chic dinner parties, milestone anniversaries, and elegant proposals with curated styling.',
    gradient: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)',
    tags: ['Tablescapes', 'Live music', 'Mood lighting'],
    media: {
      type: 'image',
      src: '/media/decoration-packages/gold/gold-05.jpg',
      alt: 'Romantic anniversary dinner table with candlelight',
    },
  },
  {
    title: 'Community Gatherings',
    emoji: '🎈',
    highlight: 'Festivals, society days, school fairs, and family carnivals that feel effortlessly hosted.',
    gradient: 'linear-gradient(135deg, #FAD961 0%, #F76B1C 100%)',
    tags: ['Themed zones', 'Activity stalls', 'Stage flow'],
    media: {
      type: 'image',
      src: '/media/decoration-packages/premium/premium-02.jpg',
      alt: 'Outdoor carnival setup with colourful canopies',
    },
  },
  {
    title: 'Corporate Celebrations',
    emoji: '🏆',
    highlight: 'Team days, product launches, and award nights that blend precision with personality.',
    gradient: 'linear-gradient(135deg, #43CEA2 0%, #185A9D 100%)',
    tags: ['Show direction', 'AV & tech', 'Branded gifting'],
    media: {
      type: 'video',
      src: '/media/gallery/ajit-hb2.mp4',
      alt: 'Corporate celebration highlight reel',
    },
  },
];

const Events = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Fade in timeout={800}>
        <Stack spacing={2.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: colors.primaryDark,
              fontSize: isMobile ? '2.2rem' : '3.2rem',
              fontWeight: 800,
            }}
          >
            Celebrations that feel custom-crafted
          </Typography>
          <Typography sx={{ maxWidth: 720, color: '#5a4f6d', lineHeight: 1.8 }}>
            From jaw-dropping balloon installs to seamless show flow, our planners obsess over every detail so you can stay in the moment with your favourite people.
          </Typography>
        </Stack>
      </Fade>

      <Grid container spacing={{ xs: 4, md: 5 }}>
        {eventTypes.map((event, index) => (
          <Grid item xs={12} md={6} key={event.title} sx={{ display: 'flex' }}>
            <Grow in timeout={900 + index * 200}>
              <Card
                sx={{
                  flex: 1,
                  height: '100%',
                  background: event.gradient,
                  color: '#1F1235',
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  boxShadow: '0 18px 45px rgba(15, 23, 43, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  component={event.media.type === 'video' ? 'video' : 'img'}
                  src={event.media.src}
                  alt={event.media.alt}
                  autoPlay={event.media.type === 'video'}
                  muted={event.media.type === 'video'}
                  loop={event.media.type === 'video'}
                  playsInline={event.media.type === 'video'}
                  controls={false}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />

                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 2.5,
                  }}
                >
                  <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          fontSize: '2.5rem',
                          backgroundColor: 'rgba(255,255,255,0.4)',
                          borderRadius: '18px',
                          padding: '8px 14px',
                          boxShadow: '0 8px 20px rgba(15,23,43,0.12)',
                        }}
                      >
                        {event.emoji}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {event.title}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: '#2D2242', fontWeight: 500 }}>
                      {event.highlight}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
                      {event.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          sx={{
                            backgroundColor: 'rgba(255,255,255,0.65)',
                            color: '#2D2242',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>

                  {event.link && (
                    <Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate(event.link)}
                        sx={{
                          borderRadius: 999,
                          fontSize: '0.95rem',
                          px: 3,
                          py: 1.2,
                        }}
                      >
                        {event.cta}
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      <Fade in timeout={1600}>
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 7, md: 9 },
            background: colors.cardGradient,
            borderRadius: 6,
            p: { xs: 4, md: 6 },
            boxShadow: '0 18px 45px rgba(15, 23, 43, 0.08)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: colors.primaryDark,
              fontWeight: 800,
              fontSize: isMobile ? '1.8rem' : '2.4rem',
            }}
          >
            Ready to plan a celebration everyone remembers?
          </Typography>
          <Typography sx={{ maxWidth: 640, mx: 'auto', color: '#5a4f6d', lineHeight: 1.8, mb: 3 }}>
            Tell us about your milestone and we will share an inspiration deck with mood boards, budgets, and an event flow within three business days.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ px: 4, py: 1.6 }}
          >
            Start planning with us
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default Events;
