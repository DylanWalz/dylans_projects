import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 4,
        height: "80vh",
        gap: "5%",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, paddingRight: 4, textAlign: "right" }}>
        <Typography variant="h6" sx={{ fontWeight: "light", marginBottom: 1 }}>
          I am
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Dylan Walz
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", marginBottom: 4 }}
        >
          Full time actuary, part time coder
        </Typography>
        <Button
          variant="contained"
          onClick={handleProjectsClick}
          sx={{
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "#fff",
          }}
        >
          My Projects
        </Button>
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1 }}>
        <img
          src="/profilePicture.png"
          alt="Dylan Walz"
          style={{ borderRadius: "8px", width: "100%", maxWidth: "400px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
