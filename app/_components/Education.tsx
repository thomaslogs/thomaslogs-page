import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';

const educationData = [
    {
        institution: 'EPITECH - European Institute of Technology',
        duration: '2019 - 2021',
        location: 'Paris, France',
        degree: 'Master in Computer Science',
        activities:
            'Focused on advanced topics in software engineering, system architecture, and data science. Worked on collaborative capstone projects to design and develop scalable applications. Participated in innovation-driven hackathons and technical workshops to enhance problem-solving and leadership skills.',
    },
    {
        institution: 'Haute-Alsace Mulhouse-Colmar University',
        duration: '2020 - 2021',
        location: 'Paris, France',
        degree: 'Master, Entrepreneurship/Entrepreneurial Studies',
        activities:
            "Completed a master's program in Entrepreneurship, focusing on business development, startup creation, and innovative project management. Engaged in practical entrepreneurial case studies and collaborated with peers to develop innovative solutions to real-world challenges.",
    },
    {
        institution: 'Chung-Ang University',
        duration: '2019 - 2020',
        location: 'Seoul, South Korea',
        degree: 'AI & ML / Computer Science',
        activities:
            'Completed an exchange program with a focus on AI and ML. Gained hands-on experience in neural networks, data analysis, and algorithm development. Participated in cross-cultural research initiatives and collaborated with international peers on innovative AI projects.',
    },
    {
        institution: 'EPITECH - European Institute of Technology',
        duration: '2016 - 2019',
        location: 'Toulouse, France',
        degree: 'Bachelor in Computer Science',
        activities:
            'Acquired a strong foundation in computer science, specializing in software engineering and algorithm development. Collaborated on group projects, showcasing leadership and technical skills in real-world scenarios. Participated in extracurricular activities and hackathons to hone problem-solving abilities.',
    },
];

const Education = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box ref={ref} sx={{ py: 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Education
            </Typography>
            {educationData.map((edu, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    {/* Institution Name */}
                    <Typography variant="h6">{edu.institution}</Typography>

                    {/* Duration and Location */}
                    <Typography variant="body2" color="text.secondary">
                        {edu.duration} | {edu.location}
                    </Typography>

                    {/* Degree */}
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="body2">{edu.degree}</Typography>
                    </Box>

                    {/* Activities */}
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        {edu.activities}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
});

Education.displayName = 'Education';

export default Education;
