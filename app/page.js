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
            width: "90%",
            maxWidth: "400px",
            minWidth: "280px",

            "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
              {
                maxWidth: "700px",
              },
          }}
        >
          <img src="/Logo.svg" alt="Logo" width={100} height={100} />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                {
                  fontSize: "4rem",
                },
              mt: 3,
            }}
          >
            Sign in
          </Typography>
          <Typography
            variant="body2"
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                {
                  fontSize: "2.0rem",
                },
              my: 3,
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
                    fontSize: "2.0rem",
                  },
                my: 3,
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
                    transform: "scale(3.0)",
                  },
              }}
            >
              <Field
                name="email"
                as={TextField}
                fullWidth
                margin="dense"
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
                InputProps={{
                  startAdornment: <FiMail className="responsive-icon" />,
                  sx: { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                    transform: "translate(14px, 0px) scale(0.75)",
                    "&.Mui-focused": { color: "white" },
                  },
                }}
                sx={{
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      "& .MuiInputBase-input": {
                        fontSize: "2.0rem",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "2.0rem",
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
                style={{ color: "red", minHeight: "20px" }}
              />

              <Field
                name="password"
                as={TextField}
                fullWidth
                margin="dense"
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: <FiLock className="responsive-icon" />,
                  sx: { color: "white" },
                }}
                InputLabelProps={{
                  sx: {
                    color: "white",
                    transform: "translate(14px, 0px) scale(0.75)",
                    "&.Mui-focused": { color: "white" },
                    "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                      {
                        marginBottom: "40px", // Adjust for mid-screen sizes
                      },
                  },
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
                    borderRadius: "0",
                    borderBottom: "2px solid white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    borderBottom: "2px solid white",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                  mt: 3,
                }}
              />

              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red", minHeight: "20px" }}
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
                  mt: 3,
                  backgroundColor: "#ec9941",
                  color: "white",
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      fontSize: "2.0rem",
                      padding: "16px",
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
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            padding: "16px",
            paddingBottom: "32px",
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
