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
  Stack,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useCustomTheme } from '../context/ThemeContext';

const pulseSoft = keyframes`
  0% { transform: scale(0.95); opacity: 0.35; }
  50% { transform: scale(1.05); opacity: 0.55; }
  100% { transform: scale(0.95); opacity: 0.35; }
`;

const floatBadge = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const heroStats = [
    { label: 'Signature events delivered', value: '350+' },
    { label: 'Years of happy memories', value: '12' },
    { label: 'Client satisfaction score', value: '4.9/5' },
  ];

  const heroTags = ['Birthdays', 'Baby showers', 'Corporate galas', 'Community fests'];

  const heroHighlights = [
    {
      icon: CelebrationIcon,
      title: 'Immersive themes',
      description: 'Handcrafted styling that makes every celebration feel cinematic.',
    },
    {
      icon: EventAvailableIcon,
      title: 'End-to-end planning',
      description: 'From budgeting to on-day coordination, we keep every detail on track.',
    },
    {
      icon: FavoriteIcon,
      title: 'Moments with heart',
      description: 'Surprise elements that keep guests smiling long after the lights fade.',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
        background: `linear-gradient(120deg, ${colors.primaryDark} 0%, ${colors.primary} 45%, ${colors.secondary} 100%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.18)',
          filter: 'blur(140px)',
          top: '-90px',
          right: '-120px',
          animation: `${pulseSoft} 9s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 240,
          height: 240,
          borderRadius: '40%',
          background: 'rgba(255,255,255,0.12)',
          top: '16%',
          left: '-70px',
          animation: `${floatBadge} 14s ease-in-out infinite`,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1, py: { xs: 12, md: 16 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" rowGap={1}>
                {heroTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>

              <Typography
                component="h1"
                sx={{
                  fontSize: isMdDown ? '2.6rem' : '3.6rem',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  textShadow: '0 12px 32px rgba(0,0,0,0.45)',
                }}
              >
                Peeka Boo brings your celebrations to life with color, craft, and care.
              </Typography>

              <Typography
                component="p"
                sx={{
                  fontSize: isMdDown ? '1.1rem' : '1.2rem',
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: 520,
                  lineHeight: 1.7,
                }}
              >
                We are a family-led event curation studio from India. From intimate birthday corners to full-scale destination experiences, our team designs every detail so you can simply show up and celebrate.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/events')}
                >
                  Plan an event
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/contact')}
                >
                  Book a discovery call
                </Button>
              </Stack>

              <Grid container spacing={2} sx={{ pt: 1 }}>
                {heroStats.map((stat) => (
                  <Grid item xs={12} sm={4} key={stat.label}>
                    <Box
                      sx={{
                        borderRadius: 3,
                        px: 3,
                        py: 3,
                        backgroundColor: 'rgba(255,255,255,0.16)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(18px)',
                      }}
                    >
                      <Typography sx={{ fontSize: '1.8rem', fontWeight: 700 }}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: colors.cardGradient,
                border: `2px solid ${colors.primary}`,
                boxShadow: '0 18px 45px rgba(0,0,0,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -60,
                  right: -80,
                  width: 220,
                  height: 220,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.45)',
                  filter: 'blur(30px)',
                }}
              />
              <CardContent sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src="/media/decoration-packages/platinum/platinum-07.jpg"
                  alt="Signature birthday stage backdrop"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    objectFit: 'cover',
                    height: isMdDown ? 220 : 260,
                    mb: 3,
                    boxShadow: '0 16px 38px rgba(15,23,43,0.12)',
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Signature experiences
                </Typography>
                <Typography sx={{ color: '#5b5b5b', lineHeight: 1.7 }}>
                  Our stylists, planners, and production partners collaborate closely to transform your celebration into an unforgettable story.
                </Typography>

                <Stack spacing={2.5} sx={{ mt: 3 }}>
                  {heroHighlights.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Stack
                        key={item.title}
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            boxShadow: '0 12px 24px rgba(147,112,219,0.35)',
                          }}
                        >
                          <IconComponent sx={{ fontSize: 28 }} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  })}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const highlights = [
    {
      icon: AutoAwesomeIcon,
      title: 'Creative storytelling',
      description: 'Every brief begins with your family traditions, favorite colors, and the emotion you want guests to feel.',
    },
    {
      icon: EmojiEventsIcon,
      title: 'Zero-stress planning',
      description: 'Dedicated planners manage vendor coordination, run sheets, and guest flow so you can stay present.',
    },
    {
      icon: LocalFloristIcon,
      title: 'Trusted partners',
      description: 'Stylists, entertainers, and chefs we have vetted over the years to deliver top-notch experiences.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'rgba(255,255,255,0.85)' }}>
      <Container>
        <Stack spacing={isSmDown ? 3 : 4} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Designed for joy, built on trust
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#555', maxWidth: 720, mx: 'auto', lineHeight: 1.8 }}>
            We blend aesthetics with meticulous planning. Our team stays with you from the first moodboard to the final goodbye hug, making sure every guest feels the warmth of your celebration.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    border: `2px solid rgba(147,112,219,0.18)`,
                    boxShadow: '0 18px 36px rgba(0,0,0,0.08)',
                  }}
                >
                  <Stack spacing={2.5} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.18)',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.3rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#666', lineHeight: 1.8 }}>
                      {item.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const EventShowcaseSection = () => {
  const { colors } = useCustomTheme();

  const eventCategories = [
    {
      title: 'Birthday magic',
      description: 'Whimsical worlds for toddlers, teens, and the young at heart. Think immersive themes, curated games, and crowd-pleasing food corners.',
      bulletPoints: ['Theme styling and decor', 'Interactive hosts and entertainment', 'Personalized gifting experiences'],
      icon: CelebrationIcon,
      accent: colors.primary,
    },
    {
      title: 'Milestones and weddings',
      description: 'From intimate roka ceremonies to grand sangeet nights, we design meaningful rituals, mood lighting, and heartfelt surprises.',
      bulletPoints: ['Custom rituals and stage design', 'Live music and artist curation', 'Hospitality and guest concierge'],
      icon: WbSunnyIcon,
      accent: colors.secondary,
    },
    {
      title: 'Corporate and community',
      description: 'Festive launches, cultural festivals, and employee family days that boost engagement while staying on brand.',
      bulletPoints: ['Concept and theme decks', 'Experience zones and styling', 'Production and show flow management'],
      icon: EmojiEventsIcon,
      accent: colors.primaryDark,
    },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Events we love curating
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#555', maxWidth: 760, mx: 'auto', lineHeight: 1.8 }}>
            Whether you are planning for twenty guests or two thousand, our collaborative approach keeps everything organised and beautiful.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {eventCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Grid item xs={12} md={4} key={category.title}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    border: `2px solid rgba(147,112,219,0.2)`,
                    background: colors.cardGradient,
                  }}
                >
                  <Stack spacing={2.5}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '18px',
                        background: `linear-gradient(135deg, ${category.accent} 0%, ${colors.accent} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 30 }} />
                    </Box>

                    <Typography sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
                      {category.title}
                    </Typography>
                    <Typography sx={{ color: '#666', lineHeight: 1.8 }}>
                      {category.description}
                    </Typography>

                    <Stack spacing={1}>
                      {category.bulletPoints.map((point) => (
                        <Typography
                          key={point}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#555',
                            fontSize: '0.98rem',
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              backgroundColor: category.accent,
                              display: 'inline-block',
                            }}
                          />
                          {point}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const MediaSpotlightSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { colors } = useCustomTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'rgba(255,255,255,0.92)',
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="video"
              src="/media/gallery/ajit-hb1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: '0 24px 55px rgba(15,23,43,0.12)',
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ mt: 2.5, color: colors.primaryDark, fontWeight: 600 }}
            >
              Spotlight: Galaxy explorer birthday
            </Typography>
            <Typography sx={{ color: '#5a4f6d', lineHeight: 1.7 }}>
              Behind the scenes of our space-themed celebration, complete with astronaut tunnel, light choreography, and a confetti finale.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2.5}>
              <Box
                component="img"
                src="/media/decoration-packages/gold/gold-04.jpg"
                alt="Balloon-filled birthday stage"
                loading="lazy"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  objectFit: 'cover',
                  boxShadow: '0 18px 45px rgba(15,23,43,0.08)',
                  maxHeight: isMdDown ? 320 : 260,
                }}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Box
                  component="img"
                  src="/media/gallery/ajit-image-1.jpeg"
                  alt="Founder coordinating a celebration"
                  loading="lazy"
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    objectFit: 'cover',
                    height: isMdDown ? 200 : 180,
                    boxShadow: '0 16px 38px rgba(15,23,43,0.12)',
                  }}
                />
                <Box
                  component="img"
                  src="/media/decoration-packages/basic/basic-02.jpeg"
                  alt="Kids enjoying a game stall"
                  loading="lazy"
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    objectFit: 'cover',
                    height: isMdDown ? 200 : 180,
                    boxShadow: '0 16px 38px rgba(15,23,43,0.12)',
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const TestimonialsSection = () => {
  const { colors } = useCustomTheme();

  const testimonials = [
    {
      name: 'Meera and Sanjay',
      role: 'Parents of Aarav, 6',
      quote: 'The Peeka Boo team made our son feel like the hero of his story. Every guest spoke about the thoughtful touches.',
    },
    {
      name: 'Yashika Verma',
      role: 'Bride, Jaipur',
      quote: 'They listened to our family rituals and brought them alive with the most elegant decor and perfectly timed surprises.',
    },
    {
      name: 'Anand Group',
      role: 'Corporate family day',
      quote: 'Flawless execution for 1,200 guests. Vibrant zones, happy children, and a smooth show flow from start to finish.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'rgba(255,255,255,0.9)' }}>
      <Container>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Loved by families and brands alike
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#555', maxWidth: 720, mx: 'auto', lineHeight: 1.8 }}>
            Our relationships last well beyond the event day. Here are a few notes that keep us inspired.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.name}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  border: `2px solid rgba(147,112,219,0.18)`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                }}
              >
                <Stack spacing={2.5}>
                  <Typography sx={{ color: colors.primaryDark, fontWeight: 700, fontSize: '1.05rem' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography sx={{ color: '#777', fontStyle: 'italic', fontSize: '0.96rem' }}>
                    {testimonial.role}
                  </Typography>
                  <Typography sx={{ color: '#555', lineHeight: 1.8 }}>
                    {`"${testimonial.quote}"`}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const CallToActionSection = () => {
  const navigate = useNavigate();
  const { colors } = useCustomTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 45%, ${colors.accent} 100%)`,
        color: '#fff',
      }}
    >
      <Container>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Ready to paint your next celebration?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', maxWidth: 640, lineHeight: 1.8, color: 'rgba(255,255,255,0.9)' }}>
            Let us curate a celebration that feels tailor-made for your people. Share your ideas, and we will turn them into a moodboard within days.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" onClick={() => navigate('/contact')}>
              Start a conversation
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={() => navigate('/gallery')}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.7)',
                '&:hover': {
                  borderColor: '#fff',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                },
              }}
            >
              View our gallery
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <EventShowcaseSection />
      <MediaSpotlightSection />
      <TestimonialsSection />
      <CallToActionSection />
    </Box>
  );
};

export default HomePage;








