"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Menu,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  Search,
  MoreVert,
  Notifications,
  Settings,
  HelpOutline,
} from "@mui/icons-material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TopBar from "@/app/components/TopBar";

const courses = [
  {
    id: 1,
    title: "Course Name",
    date: "Created at 12/02/2024",
    image: "/KeinTitel.png",
  },
  {
    id: 2,
    title: "Course Name",
    date: "Created at 12/02/2024",
    image: "/Layer_1.png",
  },
];

const CourseDashboard = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const handleAddCourse = () => {
    router.push("/dashboard/course/add-course");
  };

  return (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh", color: "white", p: 3 }}>
      {/* Header with Top Search and Icons */}
      <TopBar />

      {/* Title and Add Course Button Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
        }}
      >
        {/* Left Side - Course Title & Breadcrumb */}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Course
          </Typography>
          <Typography variant="body2" color="gray">
            Dashboard &gt; Courses
          </Typography>
        </Box>

        {/* Right Side - Add Course Button */}
        <Button
          variant="contained"
          sx={{ bgcolor: "#FF9800", borderRadius: "8px" }}
          onClick={handleAddCourse}
        >
          + Create New Course
        </Button>
      </Box>

      {/* Third Row - Search and Sort Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
        }}
      >
        {/* Left Side - Search Box */}
        <TextField
          variant="outlined"
          placeholder="Search Course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgcolor: "#1E1E1E",
            borderRadius: "8px",
            input: { color: "white" },
            width: "300px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />
        {/* Right Side - Sort Filter */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1" sx={{ color: "gray" }}>
            Sort
          </Typography>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              displayEmpty
              sx={{
                color: "white",
                borderBottom: "2px solid white",
                borderRadius: 0,
                "& .MuiSelect-icon": { color: "#D4913D" }, // Brown color for dropdown arrow
                "&:before": { borderBottom: "2px solid white" },
                "&:hover:before": { borderBottom: "2px solid white" },
                "&.Mui-focused:before": { borderBottom: "2px solid white" },
              }}
            >
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
          {/* Calendar Icon inside a Black-Shaded Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1E1E1E", // Matching black shade
              width: 40,
              height: 40,
              borderRadius: 1.5,
            }}
          >
            <CalendarTodayIcon sx={{ color: "#D4913D" }} />{" "}
            {/* Brown Calendar Icon */}
          </Box>
        </Box>
      </Box>

      {/* Course Grid */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                bgcolor: "#1E1E1E",
                color: "white",
                borderRadius: "12px",
                position: "relative",
                display: "flex",
                flexDirection: "column", // Ensures the content and image stack properly
                height: "100%", // Ensure cards take full available height
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  height: 140, // Set a fixed height for all images
                  objectFit: "cover", // Ensures the image covers the space
                  width: "100%", // Ensures the image spans the full width of the card
                }}
              />
              <CardContent
                sx={{
                  flex: 1, // Ensures content area takes the remaining space
                  display: "flex",
                  flexDirection: "column", // Ensures proper alignment of content
                  justifyContent: "space-between", // Ensures spacing between content
                }}
              >
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" color="gray">
                  {course.date}
                </Typography>
              </CardContent>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  bgcolor: "rgba(0,0,0,0.6)",
                }}
                onClick={(e) => handleMenuOpen(e, course.id)}
              >
                <MoreVert sx={{ color: "white" }} />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: "red" }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CourseDashboard;
