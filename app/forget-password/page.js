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
        <Box sx={{ width: "100%", color: "black" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
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
            <Form>
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
                  startAdornment: <FiMail style={{ marginRight: "8px" }} />,
                }}
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid black",
                  },
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />

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
