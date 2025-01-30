"use client";
import React, { useRef } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function OTPPage() {
  const inputRefs = useRef([]);

  const handleChange = (e, index, setFieldValue) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value) && value !== "") return;

    setFieldValue(`otp[${index}]`, value);

    if (value && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1].focus();
      }, 100);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "") {
      if (index > 0) {
        setTimeout(() => {
          inputRefs.current[index - 1].focus();
        }, 100);
      }
    }
  };

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
            OTP
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
            Please Enter the OTP you have received on your email
          </Typography>

          {/* Formik Form */}
          <Formik
            initialValues={{ otp: Array(6).fill("") }}
            onSubmit={(values) => {
              console.log("Form submitted");
              const otpString = values.otp.join("");
              console.log("OTP submitted:", otpString);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form
                style={{
                  "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                    {
                      transform: "scale(3.0)", // Scale up the entire form on specified screens
                    },
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Grid item key={index}>
                      <Field
                        name={`otp[${index}]`}
                        as={TextField}
                        variant="outlined"
                        value={values.otp[index]}
                        onChange={(e) => handleChange(e, index, setFieldValue)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        inputProps={{
                          maxLength: 1,
                          style: { textAlign: "center", width: "50px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            height: "50px",
                            width: "50px",
                            "& fieldset": {
                              borderColor: "white", // Set border color to white
                            },
                            "&:hover fieldset": {
                              borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white", // Ensure text color stays white
                          },
                          "@media (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)":
                            {
                              "& .MuiInputBase-input": {
                                fontSize: "2.0rem", // Increase input text size
                              },
                              "& .MuiOutlinedInput-root": {
                                height: "70px", // Increase input box height
                                width: "70px", // Increase input box width
                              },
                            },
                        }}
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        autoFocus={index === 0}
                      />
                    </Grid>
                  ))}
                </Grid>

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
            )}
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
