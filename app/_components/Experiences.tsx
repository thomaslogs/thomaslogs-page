import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import ExperienceCard from './ExperienceCard';

const calculateDuration = (start: string, end?: string | null): string => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();

    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1; // +1 to make it inclusive

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(' ') || 'Less than a month';
};

const rawExperiences = [
    {
        company: 'ROCHEGRUP SOFTWARES',
        title: 'Freelance - Senior Full Stack Engineer',
        from: '2020-10-01',
        to: null,
        description: 'Custom software agency and SaaS lab — we build scalable web, blockchain, and AI products.',
        tags: ['Full Stack Web Dev', 'Blockchain Dev'],
        logo: '/logo-rgs.png',
        link: 'https://www.rochegrup-softwares.com',
    },
    {
        company: "APP'INES",
        title: 'Full Stack Engineer',
        from: '2020-08-01',
        to: '2021-02-01',
        description: "Full Stack SE on App'Ines — optimized APIs, managed servers, and database performance.",
        tags: ['Full Stack Web Dev'],
        logo: '/logo-appines.jpeg',
        link: 'https://appines.fr',
    },
    {
        company: 'ALTEN',
        title: 'Full Stack Engineer',
        from: '2018-09-01',
        to: '2019-08-01',
        description: 'Full Stack SE of an internal web app for team and equipment management in building operations.',
        tags: ['Full Stack Web Dev'],
        logo: '/logo-alten.png',
        link: 'https://www.alten.com/',
    },
    {
        company: 'BGE Sud-Ouest',
        title: 'Software Engineer',
        from: '2017-08-01',
        to: '2017-12-01',
        description: 'SE for statistics and analysis forms.',
        tags: ['Full Stack Web Dev', '4D software'],
        logo: '/logo-bge.png',
        link: 'https://www.creer.fr',
    },
];

const experiencesData = rawExperiences.map((exp) => ({
    ...exp,
    date: `${new Date(exp.from).toLocaleString('default', { month: 'short', year: 'numeric' })} - ${
        exp.to ? new Date(exp.to).toLocaleString('default', { month: 'short', year: 'numeric' }) : 'Present'
    } (${calculateDuration(exp.from, exp.to)})`,
}));

const Experiences = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box ref={ref} sx={{ py: 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Experiences
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: 'repeat(3, 1fr)',
                    },
                    gap: 3,
                }}
            >
                {experiencesData.map((project, index) => (
                    <Box key={index} sx={{ gridColumn: 'span 1' }}>
                        <ExperienceCard {...project} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
});

Experiences.displayName = 'Experiences';

export default Experiences;
