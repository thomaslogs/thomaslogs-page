import React, { forwardRef } from "react";
import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { Email, LinkedIn, GitHub, Twitter } from "@mui/icons-material";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box ref={ref} sx={{ textAlign: "center", py: 4 }}>
      <Avatar
        src="/pfp.jpeg"
        alt="Profile Picture"
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
        Thomas R.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Full-stack software engineer with experience in Blockchain, AI, and SaaS
        development.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
        📍 Seoul, South Korea
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <IconButton href="mailto:0xthomas26@gmail.com">
          <Email />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/thomas-roche"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/0xthomas26" target="_blank">
          <GitHub />
        </IconButton>
      </Stack>
    </Box>
  );
});

export default Profile;
