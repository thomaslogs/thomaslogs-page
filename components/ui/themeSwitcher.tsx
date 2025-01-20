'use client';

import { ThemeMode, useThemeMode } from '@/app/_contexts/theme';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';

const ThemeSwitcher: React.FC = () => {
    const { mode, setMode } = useThemeMode();

    // Toggle between light and dark modes
    const toggleTheme = () => {
        setMode(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
    };

    return (
        <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label="Toggle theme"
            sx={{
                borderRadius: '10px',
                transition: 'background-color 0.3s',
                backgroundColor: mode === ThemeMode.LIGHT ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
            }}
        >
            {mode === ThemeMode.LIGHT ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
};

export default ThemeSwitcher;
