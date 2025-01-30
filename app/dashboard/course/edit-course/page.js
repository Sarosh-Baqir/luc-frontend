"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  MoreVert,
  Visibility,
  People,
  Info,
  Edit,
  MenuBook,
} from "@mui/icons-material";
import TopBar from "@/app/components/TopBar";
import CreateModuleModal from "@/app/components/createModuleModal";

const EditCourse = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <TopBar />
      <Box
        sx={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          color: "white",
          p: 3,
          transition: "filter 0.3s ease", // Smooth transition for blur
          filter: openModal ? "blur(5px)" : "none", // Apply blur when modal is open
        }}
      >
        {/* Breadcrumbs */}
        <Typography variant="h6" gutterBottom>
          Edit Course
        </Typography>
        <Typography variant="body2" color="gray">
          Dashboard &gt; The Foundation One
        </Typography>

        <Card
          sx={{
            backgroundColor: "#1E1E1E",
            mt: 3,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side: Image & Course Info */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/Layer_1.png"
              alt="Course Thumbnail"
              style={{
                width: 100,
                height: 70,
                borderRadius: 8,
                marginRight: 16,
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ color: "white" }}>
                The Foundation One
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Course
              </Typography>
            </Box>
          </Box>

          {/* Right Side: Update & Preview Buttons */}
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A05A2C",
                mr: 1,
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "6px",
                width: "auto",
                fontSize: "10px",
              }}
            >
              <Visibility sx={{ fontSize: 20, mb: 1 }} />{" "}
              {/* Smaller icon size */}
              Member Preview
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ec9941",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "6px",
                width: "auto",
                fontSize: "10px",
                color: "black", // Text color set to black
                "& .MuiSvgIcon-root": {
                  color: "black", // Icon color set to black
                },
              }}
            >
              <Edit sx={{ fontSize: 20, mb: 1 }} /> {/* Smaller icon size */}
              Update Course
            </Button>
          </Box>
        </Card>

        {/* Row for Additional Buttons */}
        <Box
          sx={{
            display: "flex",
            mt: 2,
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<MenuBook />}
            sx={{
              backgroundColor: "#ec9941",
              textTransform: "none",
              color: "black", // Text color set to black
              "& .MuiSvgIcon-root": {
                color: "black", // Icon color set to black
              },
            }}
          >
            Content
          </Button>
          <Button
            variant="contained"
            startIcon={<Info />}
            sx={{ backgroundColor: "#A05A2C", textTransform: "none" }}
          >
            Information
          </Button>
          <Button
            variant="contained"
            startIcon={<People />}
            sx={{ backgroundColor: "#A05A2C", textTransform: "none" }}
          >
            Users
          </Button>
        </Box>
        {/* Course Module Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="h6">Course Module</Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ec9941", mb: 2, color: "black" }}
            onClick={handleOpenModal}
          >
            + Create New Module
          </Button>
        </Box>

        {/* Course Modules */}
        {["Hamail' Course", "Fahad’s Course"].map((course, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#1E1E1E",
              mt: 2,
              display: "flex",
              alignItems: "center",
              p: 2,
            }}
          >
            <img
              src="/Layer_1.png"
              alt="Module Thumbnail"
              style={{
                width: 70,
                height: 50,
                borderRadius: 8,
                marginRight: 16,
              }}
            />
            <Box flex={1}>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                {course}
              </Typography>
              <Typography
                variant="caption"
                color="gray"
                sx={{ color: "white" }}
              >
                LEARNING MODULE
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Visibility />}
              sx={{ backgroundColor: "#28A745" }}
            >
              Visible
            </Button>
            <IconButton sx={{ ml: 1, color: "white" }}>
              <MoreVert />
            </IconButton>
          </Card>
        ))}
      </Box>

      {/* Modal Component */}
      <CreateModuleModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default EditCourse;
