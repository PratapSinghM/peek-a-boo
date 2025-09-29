import React, { useState } from 'react';
import {
  Box,
  Fab,
  Popover,
  Typography,
  Grid,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useCustomTheme } from '../../context/ThemeContext';

const themeOptions = [
  { key: 'pink', label: '👧 Girl', color: '#FF69B4', tooltip: 'Pink Paradise' },
  { key: 'blue', label: '👦 Boy', color: '#4169E1', tooltip: 'Ocean Blue' },
  { key: 'purple', label: '💒 Wedding', color: '#9370DB', tooltip: 'Royal Purple' },
  { key: 'green', label: '🏢 Corporate', color: '#32CD32', tooltip: 'Nature Green' },
  { key: 'orange', label: '🤝 Get-together', color: '#FF8C00', tooltip: 'Sunset Orange' },
  { key: 'yellow', label: '☀️ Sunshine', color: '#FFD700', tooltip: 'Sunshine Yellow' },
];

const ThemeSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentTheme, changeTheme, colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeKey) => {
    changeTheme(themeKey);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Choose Theme" placement="left">
        <Fab
          onClick={handleClick}
          sx={{
            position: 'fixed',
            top: isMobile ? 70 : 80,
            right: isMobile ? 10 : 20,
            zIndex: 2000,
            width: isMobile ? 45 : 50,
            height: isMobile ? 45 : 50,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            color: 'white',
            border: '2px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            },
          }}
        >
          <PaletteIcon sx={{ fontSize: isMobile ? '1.3rem' : '1.5rem' }} />
        </Fab>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '15px',
            p: 2,
            border: `2px solid ${colors.primary}`,
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            minWidth: isMobile ? 160 : 200,
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: 'center',
            mb: 1,
            color: colors.primaryDark,
            fontWeight: 600,
            fontSize: isMobile ? '0.8rem' : '0.9rem',
          }}
        >
          🎨 Choose Theme
        </Typography>
        
        <Grid container spacing={1}>
          {themeOptions.map((option) => (
            <Grid item xs={6} key={option.key}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Tooltip title={option.tooltip} placement="top">
                  <Box
                    onClick={() => handleThemeChange(option.key)}
                    sx={{
                      width: isMobile ? 25 : 35,
                      height: isMobile ? 25 : 35,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${option.color}, ${option.color}dd)`,
                      border: currentTheme === option.key 
                        ? `3px solid ${colors.primary}` 
                        : '3px solid white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      transform: currentTheme === option.key ? 'scale(1.15)' : 'scale(1)',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      },
                    }}
                  />
                </Tooltip>
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: 'center',
                    fontSize: isMobile ? '0.5rem' : '0.6rem',
                    fontWeight: 600,
                    color: colors.primaryDark,
                    lineHeight: 1.2,
                  }}
                >
                  {option.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );
};

export default ThemeSelector;