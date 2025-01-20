import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Chakra_Petch, IBM_Plex_Mono } from 'next/font/google';

const chakraPetch = Chakra_Petch({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const commonTypography = {
    fontFamily: `${chakraPetch.style.fontFamily}, ${ibmPlexMono.style.fontFamily}, sans-serif`,
};

// Create the base light and dark themes
let lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        ...commonTypography,
        h1: {
            fontFamily: chakraPetch.style.fontFamily,
            fontWeight: 600,
        },
        h2: {
            fontFamily: chakraPetch.style.fontFamily,
            fontWeight: 500,
        },
        body1: {
            fontFamily: ibmPlexMono.style.fontFamily,
        },
    },
});

let darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        ...commonTypography,
        h1: {
            fontFamily: chakraPetch.style.fontFamily,
            fontWeight: 600,
        },
        h2: {
            fontFamily: chakraPetch.style.fontFamily,
            fontWeight: 500,
        },
        body1: {
            fontFamily: ibmPlexMono.style.fontFamily,
        },
    },
});

// Apply responsive font sizes
lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
