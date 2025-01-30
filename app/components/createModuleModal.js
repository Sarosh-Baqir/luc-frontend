import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Input,
} from "@mui/material";
import { Edit, InsertDriveFile, Close } from "@mui/icons-material";

const CreateModuleModal = ({ open, onClose }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "black",
          borderRadius: "8px",
          padding: "20px",
          color: "white",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close Button at the top right corner */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#B0B0B0", // Greyish background
            borderRadius: "50%", // Circle shape
            width: 30, // Circle width
            height: 30, // Circle height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={onClose} // Close the modal when clicked
        >
          <Close sx={{ color: "white", fontSize: 18 }} />
        </Box>

        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#FF8C00", // Yellow background color
              borderRadius: "50%", // Makes it circular
              width: 30, // Set a fixed width
              height: 30, // Set a fixed height to match the width (perfect circle)
              display: "flex",
              justifyContent: "center", // Center icon horizontally
              alignItems: "center", // Center icon vertically
              marginRight: 1, // Spacing between the icon and text
            }}
          >
            <Edit sx={{ fontSize: 16, color: "black" }} />{" "}
            {/* Black icon color */}
          </Box>
          Create New Module
        </Typography>

        {/* Learn Module text with icon */}
        <Typography
          sx={{
            display: "inline-flex", // Prevents stretching across the row
            alignItems: "center",
            color: "#B0B0B0", // Light gray color for text
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: "#2C2C2C",
            borderRadius: 1,
            padding: "4px 8px", // Padding for spacing around the content
            width: "140px", // Ensures it only takes up necessary space
          }}
        >
          <InsertDriveFile sx={{ fontSize: 16, marginRight: 1 }} />
          Learn Module
        </Typography>

        <TextField
          variant="outlined"
          label="Module Title"
          sx={{
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: "#1E1E1E",
            borderRadius: 1,
          }}
          fullWidth
          InputLabelProps={{
            style: { color: "#B0B0B0" },
          }}
        />

        <TextField
          variant="outlined"
          label="Module Description"
          sx={{
            marginBottom: 2,
            backgroundColor: "#1E1E1E",
            borderRadius: 1,
          }}
          fullWidth
          InputLabelProps={{
            style: { color: "#B0B0B0" },
          }}
        />

        <Box
          sx={{
            border: "2px dashed #616161",
            backgroundColor: "#1E1E1E",
            padding: 2.5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onDragOver={(e) => e.preventDefault()} // Allow drag-over
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Preview"
              style={{
                width: "8rem", // equivalent to w-32 in tailwind
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
          ) : (
            <Typography sx={{ color: "#B0B0B0", marginBottom: 1 }}>
              Drag and drop an image or
            </Typography>
          )}

          <Input
            type="file"
            inputProps={{ accept: "image/*" }}
            sx={{ display: "none" }}
            id="imageUpload"
            onChange={handleImageUpload}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EC9941",
              color: "black",
              padding: "6px 16px",
              borderRadius: "8px",
              marginTop: "8px",
            }}
            onClick={() => document.getElementById("imageUpload").click()}
          >
            Choose File
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            marginTop: "1.5rem",
          }}
        >
          <Button variant="outlined" sx={{ color: "white" }} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#FF8C00" }}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateModuleModal;
