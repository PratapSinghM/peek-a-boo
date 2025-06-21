import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { CustomThemeProvider } from './context/ThemeContext.jsx'

// Get base path from environment or use default
const basename = import.meta.env.MODE === 'production' ? '/peek-a-boo' : '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <CustomThemeProvider>
        <CssBaseline />
        <App />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)