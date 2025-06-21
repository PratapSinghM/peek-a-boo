import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return context;
};

const themes = {
  pink: {
    primary: '#FF69B4',
    primaryDark: '#FF1493',
    secondary: '#9370DB',
    accent: '#FFD700',
    success: '#32CD32',
    info: '#4169E1',
    gradient: 'linear-gradient(135deg, #FF69B4 0%, #9370DB 25%, #4169E1 50%, #32CD32 75%, #FFD700 100%)',
    navbarGradient: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 50%, #9370DB 100%)',
    cardGradient: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 50%, #F0F8FF 100%)',
    bodyGradient: 'linear-gradient(135deg, #FFE5F1 0%, #FFD6E8 25%, #E8F4FD 50%, #F0F8E8 75%, #FFF9E5 100%)',
  },
  blue: {
    primary: '#4169E1',
    primaryDark: '#1E90FF',
    secondary: '#00CED1',
    accent: '#FFD700',
    success: '#32CD32',
    info: '#87CEEB',
    gradient: 'linear-gradient(135deg, #4169E1 0%, #00CED1 25%, #87CEEB 50%, #32CD32 75%, #FFD700 100%)',
    navbarGradient: 'linear-gradient(135deg, #4169E1 0%, #1E90FF 50%, #00CED1 100%)',
    cardGradient: 'linear-gradient(135deg, #E0F6FF 0%, #F0F8FF 50%, #E6F3FF 100%)',
    bodyGradient: 'linear-gradient(135deg, #E0F6FF 0%, #F0F8FF 25%, #E6F3FF 50%, #F0FFFF 75%, #F5FFFA 100%)',
  },
  purple: {
    primary: '#9370DB',
    primaryDark: '#8A2BE2',
    secondary: '#DA70D6',
    accent: '#FFD700',
    success: '#32CD32',
    info: '#DDA0DD',
    gradient: 'linear-gradient(135deg, #9370DB 0%, #8A2BE2 25%, #DA70D6 50%, #32CD32 75%, #FFD700 100%)',
    navbarGradient: 'linear-gradient(135deg, #9370DB 0%, #8A2BE2 50%, #DA70D6 100%)',
    cardGradient: 'linear-gradient(135deg, #F8F0FF 0%, #F5F0FF 50%, #FFF0FF 100%)',
    bodyGradient: 'linear-gradient(135deg, #F8F0FF 0%, #F5F0FF 25%, #FFF0FF 50%, #FAF0E6 75%, #FFF8DC 100%)',
  },
  green: {
    primary: '#32CD32',
    primaryDark: '#228B22',
    secondary: '#90EE90',
    accent: '#FFD700',
    success: '#00FF7F',
    info: '#98FB98',
    gradient: 'linear-gradient(135deg, #32CD32 0%, #228B22 25%, #90EE90 50%, #00FF7F 75%, #FFD700 100%)',
    navbarGradient: 'linear-gradient(135deg, #32CD32 0%, #228B22 50%, #90EE90 100%)',
    cardGradient: 'linear-gradient(135deg, #F0FFF0 0%, #F5FFFA 50%, #F0FFF0 100%)',
    bodyGradient: 'linear-gradient(135deg, #F0FFF0 0%, #F5FFFA 25%, #F0FFF0 50%, #F5FFFA 75%, #FFFAF0 100%)',
  },
  orange: {
    primary: '#FF8C00',
    primaryDark: '#FF6347',
    secondary: '#FFA500',
    accent: '#FFD700',
    success: '#32CD32',
    info: '#FFAB91',
    gradient: 'linear-gradient(135deg, #FF8C00 0%, #FF6347 25%, #FFA500 50%, #32CD32 75%, #FFD700 100%)',
    navbarGradient: 'linear-gradient(135deg, #FF8C00 0%, #FF6347 50%, #FFA500 100%)',
    cardGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFFAF0 50%, #FFF5EE 100%)',
    bodyGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFFAF0 25%, #FFF5EE 50%, #FAF0E6 75%, #FFF8DC 100%)',
  },
  yellow: {
    primary: '#FFD700',
    primaryDark: '#FFA500',
    secondary: '#FFFF00',
    accent: '#FF8C00',
    success: '#32CD32',
    info: '#F0E68C',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFFF00 50%, #32CD32 75%, #FF8C00 100%)',
    navbarGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFFF00 100%)',
    cardGradient: 'linear-gradient(135deg, #FFFACD 0%, #FFF8DC 50%, #FFFFE0 100%)',
    bodyGradient: 'linear-gradient(135deg, #FFFACD 0%, #FFF8DC 25%, #FFFFE0 50%, #FFFAF0 75%, #FFF8DC 100%)',
  },
};

const createCustomTheme = (themeKey) => {
  const themeColors = themes[themeKey];
  
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
        default: '#fff',
        paper: '#fff',
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontWeight: 800,
        fontSize: '3rem',
        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
        '@media (max-width:768px)': {
          fontSize: '2.2rem',
        },
        '@media (max-width:480px)': {
          fontSize: '1.8rem',
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: '1.8rem',
        '@media (max-width:768px)': {
          fontSize: '1.4rem',
        },
        '@media (max-width:480px)': {
          fontSize: '1.1rem',
        },
      },
      h3: {
        fontWeight: 700,
        fontSize: '1.5rem',
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "'Poppins', Arial, sans-serif",
            background: themeColors.bodyGradient,
            minHeight: '100vh',
            lineHeight: 1.6,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: 700,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
          },
          contained: {
            background: `linear-gradient(45deg, ${themeColors.primary}, ${themeColors.primaryDark}, ${themeColors.secondary})`,
            border: '2px solid rgba(255,255,255,0.3)',
            color: 'white',
            '&:hover': {
              background: `linear-gradient(45deg, ${themeColors.primaryDark}, ${themeColors.primary}, ${themeColors.secondary})`,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            border: '3px solid transparent',
            background: 'white',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: themeColors.navbarGradient,
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
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
  const [currentTheme, setCurrentTheme] = useState('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
    localStorage.setItem('selectedTheme', themeKey);
  };

  const theme = createCustomTheme(currentTheme);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes, colors: themes[currentTheme] }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};