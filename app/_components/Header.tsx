'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from '@/components/ui/themeSwitcher';

interface HeaderProps {
    sections: { name: string; ref: React.RefObject<HTMLDivElement | null> }[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const toolbarHeight = document.querySelector('header')?.clientHeight || 0;

            // Scroll to the section minus the toolbar height
            const offsetTop = ref.current.offsetTop - toolbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }

        setDrawerOpen(false); // Close the drawer for mobile
    };

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <AppBar position="sticky" color="transparent" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        py: 2,
                        justifyContent: 'space-between',
                        background: (theme) => theme.palette.background.default,
                    }}
                    disableGutters
                >
                    {/* Left: Logo */}
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="h4" fontWeight="bold">
                            Portfolio
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            {sections.map((section) => (
                                <Button
                                    key={section.name}
                                    color="inherit"
                                    sx={{ textTransform: 'none', fontSize: '16px' }}
                                    onClick={() => handleScroll(section.ref)}
                                >
                                    {section.name}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    {/* Right: Desktop Menu */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <ThemeSwitcher />
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <ThemeSwitcher />
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Drawer for Mobile Menu */}
                    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            // onClick={handleDrawerToggle}
                            onKeyDown={handleDrawerToggle}
                        >
                            <List>
                                {sections.map((section) => (
                                    <ListItem
                                        key={section.name}
                                        onClick={() => handleScroll(section.ref)}
                                        sx={{ cursor: 'pointer', gap: 1 }}
                                    >
                                        <ListItemText primary={section.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
