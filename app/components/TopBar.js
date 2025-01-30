"use client";
import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import {
  Search,
  Notifications,
  Settings,
  HelpOutline,
} from "@mui/icons-material";

const TopBar = () => {
  const [topSearch, setTopSearch] = useState("");
  return (
    <>
      {/* Header with Top Search and Icons */}
      <AppBar
        position="static"
        sx={{ bgcolor: "#121212", boxShadow: "none", p: 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side - Search Box */}
          <TextField
            variant="outlined"
            placeholder="Search"
            value={topSearch}
            onChange={(e) => setTopSearch(e.target.value)}
            sx={{
              bgcolor: "#1E1E1E",
              borderRadius: "8px",
              input: { color: "white" },
              width: "250px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Right Side - Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1E1E1E", // Matching black shade
                width: 40,
                height: 40,
                borderRadius: "1.5",
                mr: 1, // Adds margin between the icons
              }}
            >
              <IconButton color="inherit">
                <HelpOutline />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1E1E1E", // Matching black shade
                width: 40,
                height: 40,
                borderRadius: "1.5",
                mr: 1, // Adds margin between the icons
              }}
            >
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1E1E1E", // Matching black shade
                width: 40,
                height: 40,
                borderRadius: "1.5",
                mr: 1, // Adds margin between the icons
              }}
            >
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </Box>

            {/* Circle with the "W" */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red", // Red background for the circle
                width: 40,
                height: 40,
                borderRadius: "50%", // This makes it a perfect circle
                color: "white", // White text color
                fontWeight: "bold", // Make the "W" stand out more
                fontSize: "18px", // Size of the letter
              }}
            >
              W
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
