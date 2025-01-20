"use client";

import React from "react";
import { Card, CardContent, Typography, Chip, Stack, Box } from "@mui/material";
import Image from "next/image";

interface ProjectCardProps {
  company: string;
  title?: string;
  date: string;
  description: string;
  tags: string[];
  link?: string | null;
  logo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  company,
  title,
  date,
  description,
  tags,
  link,
  logo,
}) => {
  return (
    <Box onClick={() => link && window.open(link, "blank")}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          borderRadius: "10px",
          cursor: link && "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {company}
            </Typography>
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              style={{ borderRadius: "10%", objectFit: "contain" }}
            />
          </Box>
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {date}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {tags.map((tag, idx) => (
              <Chip key={idx} label={tag} size="small" />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectCard;
