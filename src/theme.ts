import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const commonTypography = {
  fontFamily: "'Chakra Petch', 'IBM Plex Mono', sans-serif",
};

// Create the base light and dark themes
let lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    ...commonTypography,
    h1: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'IBM Plex Mono', sans-serif",
    },
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    ...commonTypography,
    h1: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Chakra Petch', sans-serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'IBM Plex Mono', sans-serif",
    },
  },
});

// Apply responsive font sizes
lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
