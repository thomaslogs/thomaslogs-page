"use client";

import React, { useRef } from "react";
import { Box, Container, Divider } from "@mui/material";
import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Education from "./_components/Education";
import Experiences from "./_components/Experiences";
import Projects from "./_components/Projects";
import Toolkit from "./_components/ToolKit";

const HomePage: React.FC = () => {
  // Create refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const toolkitRef = useRef<HTMLDivElement>(null);

  const sections = [
    { name: "About", ref: aboutRef },
    { name: "Education", ref: educationRef },
    { name: "Experiences", ref: experiencesRef },
    { name: "Projects", ref: projectsRef },
    { name: "Toolkit", ref: toolkitRef },
  ];

  return (
    <Box>
      <Header sections={sections} />
      <Container maxWidth="lg">
        <Profile ref={aboutRef} />
        <Divider />
        <Education ref={educationRef} />
        <Divider />
        <Experiences ref={experiencesRef} />
        <Divider />
        <Projects ref={projectsRef} />
        <Divider />
        <Toolkit ref={toolkitRef} />
      </Container>
    </Box>
  );
};

export default HomePage;
