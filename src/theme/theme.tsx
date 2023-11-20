// src/theme/theme.ts

import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#2196f3', // Replace with your preferred primary color
    },
    secondary: {
      main: '#ff5722', // Replace with your preferred secondary color
    },
  },
  // Add more customizations as needed
});

export default theme;
