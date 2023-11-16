// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; // Adjust the path to your theme file
import App from './App';
import './styles/color.css';
import './styles/font.css';
import './styles/index.css';
import './styles/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
