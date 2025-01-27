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
      sx={{ height: "100vh", backgroundColor: "white", p: 4 }}
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
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            color: "black",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            OTP
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
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
              <Form>
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
                  sx={{ mt: 2, backgroundColor: "#1229c2" }}
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050e44",
          color: "white",
          borderRadius: "16px",
          overflow: "hidden",
          padding: "32px",
        }}
      >
        <Box textAlign="center">
          <img
            src="/Layer_1.png"
            alt="Learning Platform Illustration"
            style={{ width: "80%", marginBottom: "16px" }}
          />
          <Typography variant="h5" fontWeight="bold">
            Sign in to Learning Platform
          </Typography>
          <Typography variant="body2">Lorem Ipsum is simply</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
