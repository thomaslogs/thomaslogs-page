import React, { forwardRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';

const toolkitData = [
    {
        category: 'Skills',
        items: [
            'JavaScript',
            'TypeScript',
            'Python',
            'C++',
            'C',
            'MongoDB',
            'Solidity',
            'Node',
            'Express',
            'React',
            'Next.js',
            'Redux',
            'React Native',
            'NoSQL',
            'Git',
        ],
    },
    {
        category: 'Cloud & DevOps',
        items: [
            'Google Cloud Platform',
            'AWS',
            'Azure',
            'Cloud Computing',
            'CI/CD',
            'Serverless',
            'Unit Testing',
            'Lambda',
            'DevOps',
            'Docker',
            'Smart Contracts',
        ],
    },
    {
        category: 'Expertise',
        items: ['Microservices', 'Blockchain', 'NFT', 'DeFi', 'Frontend', 'Backend', 'Full-Stack'],
    },
    {
        category: 'Languages',
        items: ['French', 'English', 'Spanish'],
    },
];

const Toolkit = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box ref={ref} sx={{ py: 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Toolkit
            </Typography>
            {toolkitData.map((section, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        {section.category}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1, // Ensures consistent spacing between rows and columns
                        }}
                    >
                        {section.items.map((item, idx) => (
                            <Chip
                                key={idx}
                                label={item}
                                variant="outlined"
                                sx={{
                                    fontSize: '0.875rem',
                                    borderRadius: '5px',
                                    textTransform: 'uppercase',
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
});

Toolkit.displayName = 'Toolkit';

export default Toolkit;
