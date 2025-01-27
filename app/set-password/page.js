"use client";
import React from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { FiLock } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setPasswordValidationSchema } from "../validation_schemas/authentication_validation_schemas";

export default function SetPasswordPage() {
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
        lg={7}
        xl={6}
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
            Set Password
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            Please set your new password
          </Typography>

          {/* Formik Form */}
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={setPasswordValidationSchema}
            onSubmit={(values) => {
              console.log("Password Set Form submitted with values:", values);
            }}
          >
            <Form>
              {/* New Password Input */}
              <Field
                name="password"
                as={TextField}
                fullWidth
                margin="normal"
                id="password"
                label="New Password"
                type="password"
                placeholder="Enter your new password"
                InputProps={{
                  startAdornment: <FiLock style={{ marginRight: "8px" }} />,
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
                name="password"
                component="div"
                style={{ color: "red" }}
              />

              {/* Confirm Password Input */}
              <Field
                name="confirmPassword"
                as={TextField}
                fullWidth
                margin="normal"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your new password"
                InputProps={{
                  startAdornment: <FiLock style={{ marginRight: "8px" }} />,
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
                name="confirmPassword"
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
                Set Password
              </Button>
            </Form>
          </Formik>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={false}
        sm={false}
        md={false}
        lg={5}
        xl={6}
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
