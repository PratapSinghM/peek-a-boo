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
  Avatar,
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useCustomTheme } from '../context/ThemeContext';

const shimmerAnimation = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const artists = [
  {
    name: 'Rajesh the Magician',
    emoji: '🎩',
    description: 'Master of illusion with 10+ years of experience. Specializes in close-up magic, stage performances, and interactive shows that leave audiences spellbound.',
    specialties: ['Card Magic', 'Mind Reading', 'Stage Illusions', 'Kids Magic'],
  },
  {
    name: 'Priya the Puppeteer',
    emoji: '🎭',
    description: 'Creative storyteller who brings puppets to life! Expert in traditional hand puppets, marionettes, and interactive puppet shows for children.',
    specialties: ['Hand Puppets', 'Story Telling', 'Character Voices', 'Educational Shows'],
  },
  {
    name: 'Arjun the Anchor',
    emoji: '🎤',
    description: 'Energetic host and MC who keeps the party alive! Expert in crowd engagement, games coordination, and maintaining high energy throughout events.',
    specialties: ['Event Hosting', 'Games & Activities', 'Crowd Interaction', 'Bilingual MC'],
  },
  {
    name: 'Kavya the Bubble Artist',
    emoji: '🫧',
    description: 'Creates magical bubble experiences that mesmerize all ages. Specializes in giant bubbles, bubble art, and interactive bubble workshops.',
    specialties: ['Giant Bubbles', 'Bubble Art', 'Workshops', 'Interactive Shows'],
  },
  {
    name: 'Meera the Face Painter',
    emoji: '🎨',
    description: 'Artistic face painter who transforms faces into beautiful works of art. Expert in themed designs, glitter art, and child-friendly quick designs.',
    specialties: ['Face Painting', 'Glitter Art', 'Themed Designs', 'Body Art'],
  },
  {
    name: 'Team Peeka Boo',
    emoji: '🎪',
    description: 'Our amazing support team of decorators, coordinators, and activity specialists who work behind the scenes to make every event perfect.',
    specialties: ['Event Coordination', 'Decoration Setup', 'Activity Management', 'Guest Care'],
  },
];

const Artists = () => {
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
            mb: 3,
            color: colors.primaryDark,
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
          }}
        >
          🎭 Meet Our Talented Artists
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
          Our amazing team of performers who bring magic and joy to every celebration! ✨
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        {artists.map((artist, index) => (
          <Grid item xs={12} sm={6} md={4} key={artist.name} sx={{ display: 'flex' }}>
            <Grow in timeout={1000 + index * 200}>
              <Card
                sx={{
                  background: colors.cardGradient,
                  border: `2px solid ${colors.primary}`,
                  borderRadius: '20px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transition: 'left 0.5s',
                    zIndex: 1,
                  },
                  '&:hover::before': {
                    animation: `${shimmerAnimation} 0.5s ease-in-out`,
                  },
                }}
              >
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                  <Avatar
                    sx={{
                      width: isMobile ? 80 : 120,
                      height: isMobile ? 80 : 120,
                      margin: '0 auto 2rem',
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      fontSize: isMobile ? '2rem' : '3rem',
                      border: '4px solid white',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    }}
                  >
                    {artist.emoji}
                  </Avatar>

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: colors.primaryDark,
                      fontWeight: 700,
                      fontSize: isMobile ? '1.2rem' : '1.3rem',
                      mb: 2,
                    }}
                  >
                    {artist.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {artist.description}
                  </Typography>

                  <Box
                    sx={{
                      background: 'rgba(0,0,0,0.05)',
                      p: 2,
                      borderRadius: '10px',
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: colors.primaryDark,
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      Specialties:
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                      {artist.specialties.map((specialty, idx) => (
                        <span key={idx}>
                          • {specialty}
                          {idx < artist.specialties.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </Typography>
                  </Box>
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
              border: `3px solid ${colors.primary}`,
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
              🌟 Book Our Artists for Your Event
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
              Each of our artists brings years of experience and genuine passion for entertainment. Mix and match performers or book complete packages for unforgettable celebrations!
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
              🎉 Book Our Artists Now
            </Button>
          </Card>
        </Box>
      </Fade>
    </Container>
  );
};

export default Artists;
