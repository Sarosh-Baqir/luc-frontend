"use client";
import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { FiMail, FiLock } from "react-icons/fi";
import { Formik, Field, Form, ErrorMessage } from "formik"; // Import Formik
import { loginValidationSchema } from "./validation_schemas/authentication_validation_schemas";

export default function LoginPage() {
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", backgroundColor: "#0F0F11", p: 2 }}
    >
      {/* Left Side */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          backgroundColor: "#0F0F11",
        }}
      >
        <Box
          sx={{
            color: "white",
            margin: "0 auto",
            maxWidth: "400px",
            minWidth: "300px",
            "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
              {
                maxWidth: "700px", // Increased font size for specified range
              },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                {
                  fontSize: "4rem", // Increased font size for specified range
                },
            }}
          >
            Sign in
          </Typography>
          <Typography
            variant="body2"
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                {
                  fontSize: "2.0rem", // Increased font size for specified range
                },
            }}
          >
            If you don’t have an account,{" "}
            <Typography
              component="span"
              color="#ec9941"
              fontWeight="bold"
              sx={{
                "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                  {
                    fontSize: "2.0rem", // Increased font size for specified range
                  },
              }}
            >
              Register here!
            </Typography>
          </Typography>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => {
              console.log("Form submitted with values:", values);
            }}
          >
            <Form
              style={{
                "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                  {
                    transform: "scale(3.0)", // Scale up the entire form on specified screens
                  },
              }}
            >
              {/* Email Input */}
              <Field
                name="email"
                as={TextField}
                fullWidth
                margin="normal"
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
                InputProps={{
                  startAdornment: <FiMail className="responsive-icon" />,
                  style: { color: "white" }, // Make input text white
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Make label white
                }}
                sx={{
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      "& .MuiInputBase-input": {
                        fontSize: "2.0rem", // Increase input text size
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "2.0rem", // Increase label text size
                      },
                    },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0", // Remove rounded corners
                    borderBottom: "2px solid white", // Set white bottom border
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove default border
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    borderBottom: "2px solid white", // Keep white bottom border on focus
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none", // Ensure no border on hover
                    },
                }}
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red" }}
              />

              {/* Password Input */}
              <Field
                name="password"
                as={TextField}
                fullWidth
                margin="normal"
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: <FiLock className="responsive-icon" />,
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      "& .MuiInputBase-input": {
                        fontSize: "2.0rem", // Increase input text size
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "2.0rem", // Increase label text size
                      },
                    },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0", // Remove rounded corners
                    borderBottom: "2px solid white", // Set white bottom border
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove default border
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    borderBottom: "2px solid white", // Keep white bottom border on focus
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none", // Ensure no border on hover
                    },
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />

              {/* Remember Me and Forgot Password */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Remember me"
                />
                <Typography
                  variant="body2"
                  component="a"
                  href="#"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Forgot Password?
                </Typography>
              </Box>

              {/* Login Button */}
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: "#ec9941",
                  color: "white",
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      fontSize: "2.0rem", // Increase button text size
                      padding: "16px", // Increase button padding
                    },
                }}
                type="submit"
                className="rounded-3xl"
              >
                Login
              </Button>
            </Form>
          </Formik>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          backgroundImage: `url('/KeinTitel.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative", // Enable absolute positioning inside the grid
        }}
      >
        <Box
          sx={{
            position: "absolute", // Position text container absolutely
            bottom: 0, // Place it at the bottom of the grid
            width: "100%", // Make it span the entire width
            textAlign: "center", // Center text horizontally
            padding: "16px",
            paddingBottom: "32px", // Add spacing at the bottom
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Sign in to Learning Platform
          </Typography>
          <Typography variant="body2" mb={3}>
            Lorem Ipsum is simply
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
