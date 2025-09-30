import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return context;
};

const themePresets = {
  confetti: {
    label: 'Confetti Carnival',
    swatch: ['#FF6FB1', '#FFC75F', '#6C63FF'],
    primary: '#FF6FB1',
    primaryDark: '#FF4E8A',
    secondary: '#FFC75F',
    accent: '#6C63FF',
    success: '#2ED47A',
    info: '#7BDFF2',
    surface: '#FFFFFF',
    textPrimary: '#2D2242',
    textMuted: '#57496E',
    navbarGradient: 'linear-gradient(135deg, #FF4E8A 0%, #FF6FB1 45%, #FFC75F 100%)',
    bodyGradient: 'linear-gradient(180deg, #FFF7FB 0%, #FFF3F3 45%, #F8FFFB 100%)',
    backgroundPattern: 'radial-gradient(circle at 18% 20%, rgba(255,111,177,0.18) 0, rgba(255,111,177,0) 55%), radial-gradient(circle at 82% 16%, rgba(132,99,255,0.12) 0, rgba(132,99,255,0) 48%), radial-gradient(circle at 24% 82%, rgba(255,199,95,0.16) 0, rgba(255,199,95,0) 52%)',
    cardGradient: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(255,247,251,0.88) 100%)',
    badgeGradient: 'linear-gradient(135deg, rgba(255,111,177,0.24) 0%, rgba(132,99,255,0.24) 100%)',
  },
  lagoon: {
    label: 'Lagoon Lights',
    swatch: ['#4C6FFF', '#3DD6D0', '#FFB86C'],
    primary: '#4C6FFF',
    primaryDark: '#1B4EFF',
    secondary: '#3DD6D0',
    accent: '#FFB86C',
    success: '#31C48D',
    info: '#8BE8FD',
    surface: '#FFFFFF',
    textPrimary: '#202741',
    textMuted: '#4B587A',
    navbarGradient: 'linear-gradient(135deg, #1B4EFF 0%, #4C6FFF 50%, #3DD6D0 100%)',
    bodyGradient: 'linear-gradient(180deg, #F1F5FF 0%, #F0FFFE 45%, #F6F8FF 100%)',
    backgroundPattern: 'radial-gradient(circle at 15% 18%, rgba(76,111,255,0.18) 0, rgba(76,111,255,0) 55%), radial-gradient(circle at 78% 14%, rgba(61,214,208,0.18) 0, rgba(61,214,208,0) 48%), radial-gradient(circle at 28% 85%, rgba(255,184,108,0.16) 0, rgba(255,184,108,0) 52%)',
    cardGradient: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(241,245,255,0.9) 100%)',
    badgeGradient: 'linear-gradient(135deg, rgba(76,111,255,0.22) 0%, rgba(61,214,208,0.22) 100%)',
  },
  carnival: {
    label: 'Carnival Sunset',
    swatch: ['#FF8E8E', '#FFA45A', '#FFDF6B'],
    primary: '#FF8E8E',
    primaryDark: '#F76767',
    secondary: '#FFA45A',
    accent: '#FFDF6B',
    success: '#5AD2B9',
    info: '#FFD1DC',
    surface: '#FFFFFF',
    textPrimary: '#3A1A1A',
    textMuted: '#604242',
    navbarGradient: 'linear-gradient(135deg, #F76767 0%, #FF8E8E 45%, #FFA45A 100%)',
    bodyGradient: 'linear-gradient(180deg, #FFF2F1 0%, #FFF6EC 45%, #FFFBE3 100%)',
    backgroundPattern: 'radial-gradient(circle at 12% 18%, rgba(255,142,142,0.18) 0, rgba(255,142,142,0) 50%), radial-gradient(circle at 78% 22%, rgba(255,223,107,0.2) 0, rgba(255,223,107,0) 48%), radial-gradient(circle at 30% 78%, rgba(255,164,90,0.22) 0, rgba(255,164,90,0) 52%)',
    cardGradient: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(255,244,235,0.9) 100%)',
    badgeGradient: 'linear-gradient(135deg, rgba(255,142,142,0.2) 0%, rgba(255,164,90,0.2) 100%)',
  },
  emerald: {
    label: 'Emerald Fiesta',
    swatch: ['#22C55E', '#0EA5E9', '#FBBF24'],
    primary: '#22C55E',
    primaryDark: '#16A34A',
    secondary: '#0EA5E9',
    accent: '#FBBF24',
    success: '#4ADE80',
    info: '#86E1FF',
    surface: '#FFFFFF',
    textPrimary: '#103227',
    textMuted: '#3B6657',
    navbarGradient: 'linear-gradient(135deg, #16A34A 0%, #22C55E 40%, #0EA5E9 100%)',
    bodyGradient: 'linear-gradient(180deg, #ECFDF5 0%, #E0F7FF 40%, #FFF9E6 100%)',
    backgroundPattern: 'radial-gradient(circle at 20% 22%, rgba(34,197,94,0.18) 0, rgba(34,197,94,0) 55%), radial-gradient(circle at 80% 26%, rgba(14,165,233,0.18) 0, rgba(14,165,233,0) 50%), radial-gradient(circle at 32% 78%, rgba(251,191,36,0.18) 0, rgba(251,191,36,0) 52%)',
    cardGradient: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(236,253,245,0.9) 100%)',
    badgeGradient: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(14,165,233,0.2) 100%)',
  },
  royal: {
    label: 'Royal Indigo',
    swatch: ['#6366F1', '#8B5CF6', '#EC4899'],
    primary: '#6366F1',
    primaryDark: '#4F46E5',
    secondary: '#8B5CF6',
    accent: '#EC4899',
    success: '#34D399',
    info: '#A5B4FC',
    surface: '#FFFFFF',
    textPrimary: '#1B1B3A',
    textMuted: '#4C4C7A',
    navbarGradient: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 45%, #8B5CF6 100%)',
    bodyGradient: 'linear-gradient(180deg, #EEF2FF 0%, #F8F0FF 45%, #FFF4FA 100%)',
    backgroundPattern: 'radial-gradient(circle at 16% 24%, rgba(99,102,241,0.18) 0, rgba(99,102,241,0) 55%), radial-gradient(circle at 78% 20%, rgba(236,72,153,0.18) 0, rgba(236,72,153,0) 48%), radial-gradient(circle at 30% 80%, rgba(139,92,246,0.2) 0, rgba(139,92,246,0) 52%)',
    cardGradient: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(238,242,255,0.9) 100%)',
    badgeGradient: 'linear-gradient(135deg, rgba(99,102,241,0.24) 0%, rgba(236,72,153,0.24) 100%)',
  },
};

const createCustomTheme = (themeKey) => {
  const themeColors = themePresets[themeKey];

  return createTheme({
    palette: {
      primary: {
        main: themeColors.primary,
        dark: themeColors.primaryDark,
      },
      secondary: {
        main: themeColors.secondary,
      },
      success: {
        main: themeColors.success,
      },
      info: {
        main: themeColors.info,
      },
      background: {
        default: themeColors.surface,
        paper: '#FFFFFF',
      },
      text: {
        primary: themeColors.textPrimary,
        secondary: themeColors.textMuted,
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Baloo 2', 'Segoe UI', sans-serif",
      h1: {
        fontFamily: "'Baloo 2', 'Poppins', sans-serif",
        fontWeight: 800,
        fontSize: '3.2rem',
        letterSpacing: '-0.5px',
        '@media (max-width:900px)': {
          fontSize: '2.6rem',
        },
        '@media (max-width:600px)': {
          fontSize: '2.1rem',
        },
      },
      h2: {
        fontFamily: "'Baloo 2', 'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: '2.2rem',
        letterSpacing: '-0.3px',
        '@media (max-width:900px)': {
          fontSize: '1.8rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h3: {
        fontFamily: "'Baloo 2', 'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: '1.8rem',
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
        letterSpacing: '0.4px',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: themeColors.surface,
            backgroundImage: `${themeColors.bodyGradient}, ${themeColors.backgroundPattern}`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover, 600px 600px',
            backgroundPosition: 'center, top left',
            color: themeColors.textPrimary,
            minHeight: '100vh',
            transition: 'background-color 0.3s ease, background-image 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: '14px 28px',
            fontSize: '1rem',
            fontWeight: 700,
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px) scale(1.01)',
              boxShadow: '0 14px 40px rgba(0,0,0,0.16)',
            },
          },
          contained: {
            background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primaryDark})`,
            color: '#FFFFFF',
            '&:hover': {
              background: `linear-gradient(135deg, ${themeColors.primaryDark}, ${themeColors.primary})`,
            },
          },
          outlined: {
            borderColor: `${themeColors.primary}55`,
            color: themeColors.primaryDark,
            backgroundColor: '#FFFFFF',
            '&:hover': {
              backgroundColor: `${themeColors.primary}10`,
              borderColor: themeColors.primary,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 22,
            border: '1px solid rgba(255,255,255,0.7)',
            backgroundImage: themeColors.cardGradient,
            boxShadow: '0 18px 45px rgba(15, 23, 43, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 24px 55px rgba(15, 23, 43, 0.12)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderBottomLeftRadius: 26,
            borderBottomRightRadius: 26,
            background: themeColors.navbarGradient,
            boxShadow: '0 18px 40px rgba(15, 23, 43, 0.18)',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: 1180,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            background: themeColors.badgeGradient,
            color: themeColors.primaryDark,
            fontWeight: 600,
          },
        },
      },
    },
    custom: {
      colors: themeColors,
    },
  });
};

export const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('confetti');

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themePresets[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
    localStorage.setItem('selectedTheme', themeKey);
  };

  const theme = useMemo(() => createCustomTheme(currentTheme), [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        changeTheme,
        themes: themePresets,
        colors: themePresets[currentTheme],
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
