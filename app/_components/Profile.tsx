import React, { forwardRef } from 'react';
import { Box, Typography, Avatar, Stack, IconButton, Container } from '@mui/material';
import { Email, GitHub } from '@mui/icons-material';

const getTotalExperienceYears = (start: string): number => {
    const startDate = new Date(start);
    const now = new Date();
    const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    return Math.floor(totalMonths / 12);
};

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box ref={ref} sx={{ textAlign: 'center', py: 4 }}>
            <Avatar src="/pfp.jpeg" alt="Profile Picture" sx={{ width: 100, height: 100, margin: '0 auto' }} />
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
                @thomaslogs
            </Typography>
            <Container maxWidth="sm" sx={{ mt: 2, mb: 2 }}>
                <Typography variant="body1">
                    Full Stack Software Engineer with {getTotalExperienceYears('2017-08-01')}+ years of experience in
                    SaaS, AI, and Blockchain.
                </Typography>
            </Container>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                📍 Remote
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <IconButton href="mailto:thomaslogs.work@gmail.com">
                    <Email />
                </IconButton>
                {/* <IconButton href="https://www.linkedin.com/in/thomas-roche" target="_blank">
                    <LinkedIn />
                </IconButton> */}
                <IconButton href="https://github.com/thomaslogs" target="_blank">
                    <GitHub />
                </IconButton>
            </Stack>
        </Box>
    );
});

Profile.displayName = 'Profile';

export default Profile;
