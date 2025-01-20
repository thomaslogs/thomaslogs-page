import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        company: 'LINKIOO',
        date: 'Jan 2024',
        description: 'B2B SaaS - Authenticity, Brand-Client relationship, Sustainability, Analytics',
        link: 'https://www.linkioo.io',
        tags: ['Full Stack Web Dev', 'Blockchain Dev'],
        logo: '/logo-linkioo.png',
    },
    {
        company: 'CREATORSJET',
        date: 'Aug 2023',
        description: 'SaaS - All-in-one solution for content creators',
        link: 'https://www.creatorsjet.com',
        tags: ['Full Stack Web Dev'],
        logo: '/logo-cjet.png',
    },
    {
        company: 'PRIVATE MUSEUM',
        date: 'Nov 2021',
        description: 'NFT marketplace',
        link: 'https://www.privatemuseum.art',
        tags: ['Full Stack Web Dev', 'Blockchain Dev'],
        logo: '/logo-pm.png',
    },
    {
        company: 'YOUFINDUP',
        date: 'Oct 2020',
        description: 'SaaS - Real Estate marketplace for professinals',
        link: null,
        tags: ['Full Stack Web Dev'],
        logo: '/logo-yfu.png',
    },
];

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box ref={ref} sx={{ py: 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Projects
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
                {projectsData.map((project, index) => (
                    <Box key={index} sx={{ gridColumn: 'span 1' }}>
                        <ProjectCard {...project} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
});

Projects.displayName = 'Projects';

export default Projects;
