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
  Stack,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useCustomTheme } from '../../context/ThemeContext';

const ThemeSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentTheme, changeTheme, themes, colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Switch colour mood" placement="left">
        <Fab
          onClick={handleClick}
          sx={{
            position: 'fixed',
            top: isMobile ? 76 : 90,
            right: isMobile ? 12 : 24,
            zIndex: 2000,
            width: isMobile ? 48 : 52,
            height: isMobile ? 48 : 52,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            color: '#FFFFFF',
            border: '2px solid rgba(255,255,255,0.8)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            '&:hover': {
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow: '0 16px 36px rgba(0,0,0,0.2)',
            },
          }}
        >
          <PaletteIcon sx={{ fontSize: isMobile ? '1.4rem' : '1.6rem' }} />
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
            borderRadius: 20,
            padding: theme.spacing(2.5),
            border: `1px solid ${colors.primary}44`,
            boxShadow: '0 20px 45px rgba(15, 23, 43, 0.15)',
            minWidth: isMobile ? 220 : 280,
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Stack spacing={1.5}>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: 'center',
                color: colors.primaryDark,
                fontWeight: 700,
                letterSpacing: '0.6px',
              }}
            >
              Choose your celebration palette
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'center',
                color: '#666',
                mt: 0.5,
              }}
            >
              Instantly restyle the party vibe across the site.
            </Typography>
          </Box>

          <Grid container spacing={1.5}>
            {Object.entries(themes).map(([key, preset]) => {
              const swatches = preset.swatch?.length
                ? [...preset.swatch]
                : [preset.primary, preset.secondary, preset.accent].filter(Boolean);
              if (swatches.length === 1 && preset.primaryDark) {
                swatches.push(preset.primaryDark);
              }
              const gradient = swatches.length > 1
                ? `linear-gradient(135deg, ${swatches.join(', ')})`
                : swatches[0];

              return (
                <Grid item xs={6} key={key}>
                  <Tooltip title={preset.label} placement="top">
                    <Box
                      onClick={() => {
                        changeTheme(key);
                        handleClose();
                      }}
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '18px',
                        padding: 1.2,
                        border: currentTheme === key
                          ? `2px solid ${colors.primary}`
                          : '2px solid transparent',
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        boxShadow: currentTheme === key
                          ? '0 10px 24px rgba(0,0,0,0.18)'
                          : '0 6px 18px rgba(0,0,0,0.12)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 32,
                          borderRadius: '12px',
                          background: gradient,
                          border: '1px solid rgba(255,255,255,0.6)',
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          textAlign: 'center',
                          fontWeight: 600,
                          mt: 1,
                          color: '#4b4164',
                        }}
                      >
                        {preset.label}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Popover>
    </>
  );
};

export default ThemeSelector;
