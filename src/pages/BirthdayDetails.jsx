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
  Stack,
  Chip,
  Fade,
  Grow,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCustomTheme } from '../context/ThemeContext';
import PackageModal from '../components/Packages/PackageModal';

const serviceSections = [
  {
    title: 'Party Essentials',
    subtitle: 'Foundational elements that set the scene for unforgettable celebrations.',
    items: [
      {
        id: 'decor',
        emoji: '🎈',
        title: 'Immersive Decor Styling',
        description: "Statement backdrops, thematic installs, luxe balloon art, floral accents, and tailored tablescapes that mirror your child's personality.",
        hasPackages: true,
        packageType: 'decoration',
        tags: ['Balloon couture', 'Photo-ready zones', 'Entrance arches'],
        media: { type: 'image', src: '/media/decoration-packages/platinum/platinum-05.jpg', alt: 'Storybook stage with balloon arches' },
      },
      {
        id: 'dj',
        emoji: '🎧',
        title: 'DJ & Dynamic Lighting',
        description: 'Party anthems, surprise audio cues, moving heads, LED walls, cold pyro sparks, and controlled smoke for grand entries.',
        hasPackages: true,
        packageType: 'dj',
        tags: ['Grand entries', 'Sound engineering', 'Dance-floor lighting'],
        media: { type: 'image', src: '/media/decoration-packages/gold/gold-11.jpg', alt: 'DJ console with vibrant dance floor lighting' },
      },
      {
        id: 'games',
        emoji: '🎪',
        title: 'Interactive Game Stalls',
        description: 'Carnival counters, skill challenges, branded prizes, and cheerful hosts keeping every age group entertained.',
        hasPackages: true,
        packageType: 'games',
        tags: ['Carnival vibes', 'Branded prizes', 'Host crew'],
        media: { type: 'image', src: '/media/decoration-packages/gold/gold-06.jpg', alt: 'Children playing colourful midway games' },
      },
    ],
  },
  {
    title: 'Entertainment & Engagement',
    subtitle: 'Curated acts and activities that leave kids wide-eyed and adults smiling.',
    items: [
      {
        id: 'magic',
        emoji: '🪄',
        title: 'Magicians & Illusionists',
        description: 'High-energy performers, mind-bending illusions, and warm storytelling that keeps audiences hooked.',
        tags: ['Interactive sets', 'Stage-ready', 'Photo ops'],
        media: { type: 'video', src: '/media/gallery/ajit-hb1.mp4', alt: 'Crowd reacting to a magic show' },
      },
      {
        id: 'bubble',
        emoji: '🫧',
        title: 'Giant Bubble Show',
        description: 'Shimmering bubbles, smoke-filled surprises, and kids stepping into larger-than-life bubble domes.',
        tags: ['Glow-in-the-dark', 'Kids participation', 'Indoor safe'],
        media: { type: 'image', src: '/media/decoration-packages/premium/premium-01.jpg', alt: 'Performer creating giant bubbles' },
      },
      {
        id: 'activities',
        emoji: '🎨',
        title: 'Creative Activity Corners',
        description: 'Face art, glitter tattoos, slime labs, craft bars, photobooths, and interactive storytelling corners.',
        tags: ['Custom themes', 'Talent team', 'Take-home keepsakes'],
        media: { type: 'image', src: '/media/decoration-packages/gold/gold-03.jpg', alt: 'Craft table with colourful supplies' },
      },
      {
        id: 'anchor',
        emoji: '🎤',
        title: 'Professional MC & Host',
        description: 'Warm anchors who connect with families, run games, manage timelines, and keep the energy upbeat.',
        tags: ['Game flow', 'Guest engagement', 'Time management'],
        media: { type: 'image', src: '/media/decoration-packages/platinum/platinum-10.jpg', alt: 'Event host engaging the crowd' },
      },
    ],
  },
  {
    title: 'Wow Moments & Memories',
    subtitle: 'Signature experiences that guarantee goosebumps, gasps, and shareable photos.',
    items: [
      {
        id: 'entry',
        emoji: '🚪',
        title: 'Signature Entrances',
        description: 'Dry ice clouds, spotlight runs, confetti bursts, LED tunnels, and thematic chariots to introduce the birthday star.',
        tags: ['Dry ice', 'Confetti blast', 'Spotlight cues'],
        media: { type: 'image', src: '/media/decoration-packages/gold/gold-09.jpg', alt: 'Grand birthday entry with dry ice' },
      },
      {
        id: 'gifts',
        emoji: '🎁',
        title: 'Personalised Return Hampers',
        description: 'Theme-coordinated keepsakes, interactive goodies, and eco-friendly packaging curated to delight guests.',
        tags: ['Custom tags', 'Age perfect', 'Eco options'],
        media: { type: 'image', src: '/media/decoration-packages/premium/premium-02.jpg', alt: 'Curated hamper display' },
      },
      {
        id: 'memories',
        emoji: '📸',
        title: 'Memory Capture',
        description: 'Professional photography, cinematic reels, live streaming, and instant prints to relive the magic.',
        tags: ['Highlight reels', 'Same-day edits', 'Backdrops'],
        media: { type: 'image', src: '/media/gallery/ajit-image-2.jpeg', alt: 'Photographer capturing a celebration' },
      },
    ],
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
    <Box sx={{ background: colors.cardGradient, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
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
              Birthday experiences with heart
            </Typography>
            <Typography sx={{ maxWidth: 760, mx: 'auto', color: '#554A6A', lineHeight: 1.8 }}>
              Whether you dream of a whimsical first birthday or a tween-friendly dance battle, our planners choreograph every moment so you can stay present for the giggles, gasps, and happy tears.
            </Typography>
          </Stack>
        </Fade>

        <Stack spacing={{ xs: 6, md: 8 }}>
          {serviceSections.map((section, sectionIndex) => (
            <Box key={section.title}>
              <Fade in timeout={900 + sectionIndex * 200}>
                <Stack spacing={1.5} sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.primaryDark }}>
                    {section.title}
                  </Typography>
                  <Typography sx={{ color: '#5a4f6d', maxWidth: 720 }}>
                    {section.subtitle}
                  </Typography>
                </Stack>
              </Fade>

              <Grid container spacing={{ xs: 3, md: 4 }}>
                {section.items.map((service, index) => (
                  <Grid item xs={12} md={6} key={service.id} sx={{ display: 'flex' }}>
                    <Grow in timeout={1000 + index * 150}>
                      <Card
                        onClick={() => handleServiceClick(service)}
                        sx={{
                          flex: 1,
                          height: '100%',
                          borderRadius: 4,
                          cursor: service.hasPackages ? 'pointer' : 'default',
                          position: 'relative',
                          overflow: 'hidden',
                          border: service.hasPackages
                            ? `1px solid ${colors.primary}55`
                            : '1px solid rgba(255,255,255,0.7)',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '&:hover': {
                            transform: service.hasPackages ? 'translateY(-6px)' : 'translateY(-3px)',
                            boxShadow: '0 22px 45px rgba(15,23,43,0.12)',
                          },
                        }}
                      >
                        {service.media && (
                          <Box
                            component={service.media.type === 'video' ? 'video' : 'img'}
                            src={service.media.src}
                            alt={service.media.alt}
                            autoPlay={service.media.type === 'video'}
                            muted={service.media.type === 'video'}
                            loop={service.media.type === 'video'}
                            playsInline={service.media.type === 'video'}
                            controls={false}
                            loading="lazy"
                            sx={{
                              width: '100%',
                              aspectRatio: '16 / 10',
                              objectFit: 'cover',
                            }}
                          />
                        )}

                        <CardContent sx={{ p: { xs: 3, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <Box
                                sx={{
                                  fontSize: '2.25rem',
                                  backgroundColor: 'rgba(255,255,255,0.8)',
                                  borderRadius: '18px',
                                  padding: '6px 14px',
                                  boxShadow: '0 10px 25px rgba(15,23,43,0.08)',
                                }}
                              >
                                {service.emoji}
                              </Box>
                              <Typography variant="h5" sx={{ fontWeight: 700, color: colors.primaryDark }}>
                                {service.title}
                              </Typography>
                            </Box>

                            <Typography sx={{ color: '#4c405e', lineHeight: 1.7 }}>
                              {service.description}
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
                              {service.tags?.map((tag) => (
                                <Chip
                                  key={tag}
                                  label={tag}
                                  sx={{
                                    backgroundColor: 'rgba(255,255,255,0.7)',
                                    color: colors.primaryDark,
                                    fontWeight: 600,
                                  }}
                                />
                              ))}
                            </Stack>

                            {service.hasPackages && (
                                                            <Typography
                                variant="subtitle2"
                                sx={{
                                  mt: 1,
                                  fontWeight: 600,
                                  color: colors.primaryDark,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                }}
                              >
                                Tap to view curated packages
                                <Box component="span" aria-hidden="true" sx={{ fontSize: '1.1em', lineHeight: 1 }}>
                                  &rarr;
                                </Box>
                              </Typography>
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>

        <Fade in timeout={1500}>
          <Card
            sx={{
              mt: { xs: 8, md: 10 },
              borderRadius: 5,
              background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 45%, ${colors.accent} 100%)`,
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 24px 55px rgba(15, 23, 43, 0.18)',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Stack spacing={2.5} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 800, fontSize: isMobile ? '1.8rem' : '2.4rem' }}>
                  Bundle services for a stress-free celebration
                </Typography>
                <Typography sx={{ maxWidth: 660, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
                  Mix-and-match offerings or choose a curated bundle. We handle vendor coordination, timeline scripting, and on-ground execution while you enjoy the applause.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4, py: 1.4, backgroundColor: '#ffffff', color: colors.primaryDark, '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' } }}
                  >
                    Let's design your party
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    onClick={() => setModalOpen(true)}
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.7)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                      },
                    }}
                  >
                    Preview package menus
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
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


