import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import ExperienceCard from './ExperienceCard';

const experiencesData = [
    {
        company: 'ROCHEGRUP SOFTWARES',
        title: 'Co-founder & CTO',
        date: 'Oct 2020 - Present',
        description:
            'We offer a broad range of product development services to help you create the best of Web, Web3/Blockchain solutions for your business.',
        tags: ['Full Stack Web Dev', 'Blockchain Dev'],
        logo: '/logo-rgs.png',
        link: 'https://www.rochegrup-softwares.com',
    },
    {
        company: "APP'INES",
        title: 'Full Stack Engineer',
        date: 'Aug 2020 - Feb 2021 (7 months)',
        description:
            "Full Stack development of the App'Ines solution, optimization of the API and management of the database and servers.",
        tags: ['Full Stack Web Dev'],
        logo: '/logo-appines.jpeg',
        link: 'https://appines.fr',
    },
    {
        company: 'ALTEN',
        title: 'Full Stack Engineer',
        date: 'Sep 2018 - Aug 2019 (1 year)',
        description: 'Development from scratch SAAS (Management of teams and equipment within buildings)',
        tags: ['Full Stack Web Dev'],
        logo: '/logo-alten.png',
        link: 'https://www.alten.com/',
    },
    {
        company: 'BGE Sud-Ouest',
        title: 'Software Engineer',
        date: 'Aug 2017 - Dec 2017 (5 months)',
        description: 'Software development for statistics and analysis forms.',
        tags: ['Full Stack Web Dev', '4D software'],
        logo: '/logo-bge.png',
        link: 'https://www.creer.fr',
    },
];

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
