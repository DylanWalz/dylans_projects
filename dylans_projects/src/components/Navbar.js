import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          D.Walz
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/projects")}>
            Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/resume")}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
