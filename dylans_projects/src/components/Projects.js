import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Chip,
} from "@mui/material";

const categories = [
  "All",
  "Data Science",
  "Machine Learning",
  "Computer Science",
  "Actuary",
];

const allProjects = [
  {
    title: "Data Analysis Tool",
    category: "Data Science",
    description: "A powerful tool for analyzing complex datasets.",
    tags: ["Data Science"],
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/example/data-analysis-tool",
  },
  {
    title: "ML Classifier",
    category: "Machine Learning",
    description: "A classifier that uses ML algorithms to predict outcomes.",
    tags: ["Machine Learning", "Data Science"],
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/example/ml-classifier",
  },
  {
    title: "Sorting Algorithm Visualizer",
    category: "Computer Science",
    description: "An interactive visualizer for sorting algorithms.",
    tags: ["Computer Science", "Data Science"],
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    github: "https://github.com/example/sorting-algorithm-visualizer",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 4 }}>
        My Projects
      </Typography>

      {/* Filter Buttons */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            sx={{ margin: 1 }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Projects Layout */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(33.333% - 16px)",
              maxWidth: "300px",
              cursor: "pointer",
            }}
            onClick={() => handleOpenModal(project)} // Open modal on click
          >
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.tags.map((tag, tagIndex) => (
                  <Chip key={tagIndex} label={tag} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal */}
      <Modal open={!!selectedProject} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedProject && (
            <>
              <CardMedia
                component="img"
                height="300"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ borderRadius: 2, marginBottom: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {selectedProject.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  marginBottom: 2,
                }}
              >
                {selectedProject.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" />
                ))}
              </Box>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {selectedProject.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={selectedProject.github}
                target="_blank"
                sx={{ marginRight: 2 }}
              >
                GitHub
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;
