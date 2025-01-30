"use client";
import React from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { FiMail } from "react-icons/fi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { forgetPasswordValidationSchema } from "../validation_schemas/authentication_validation_schemas"; // Import validation schema

export default function ForgetPasswordPage() {
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
            Forgot Password
          </Typography>
          <Typography
            variant="body2"
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                {
                  fontSize: "2.0rem", // Increased font size for specified range
                },
              marginBottom: "1.0rem",
            }}
          >
            If you have forgotten your password, Please enter your email to
            reset it.
          </Typography>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "" }}
            validationSchema={forgetPasswordValidationSchema}
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

              {/* Submit Button */}
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
                Submit
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
