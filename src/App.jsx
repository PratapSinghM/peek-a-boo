import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { BasketProvider } from './context/BasketContext';
import { useCustomTheme } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ThemeSelector from './components/UI/ThemeSelector';
import BasketIcon from './components/Basket/BasketIcon';
import HomePage from './pages/Home';
import Events from './pages/Events';
import BirthdayDetails from './pages/BirthdayDetails';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const { colors } = useCustomTheme();

  return (
    <BasketProvider>
      <Box
        sx={{
          minHeight: '100vh',
          background: colors.bodyGradient,
          transition: 'all 0.3s ease',
        }}
      >
        <Navbar />
        <ThemeSelector />
        <BasketIcon />
        
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/birthday-details" element={<BirthdayDetails />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
        
        <Footer />
      </Box>
    </BasketProvider>
  );
}

export default App;