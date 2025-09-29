import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCustomTheme } from '../../context/ThemeContext';
import DecorationPackages from './DecorationPackages';
import DJPackages from './DJPackages';
import GamePackages from './GamePackages';

const PackageModal = ({ open, onClose, packageType }) => {
  const { colors } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getTitleAndContent = () => {
    switch (packageType) {
      case 'decoration':
        return {
          title: '🎨 Decoration Packages',
          content: <DecorationPackages />,
        };
      case 'dj':
        return {
          title: '🎵 D.J with Light Packages',
          content: <DJPackages />,
        };
      case 'games':
        return {
          title: '🎯 Game Stalls Packages',
          content: <GamePackages />,
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getTitleAndContent();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: isMobile ? 0 : '20px',
          maxHeight: isMobile ? '100vh' : '90vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          position: 'sticky',
          top: 0,
          background: colors.primary,
          color: 'white',
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: isMobile ? 2 : 4 }}>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default PackageModal;