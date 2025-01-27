"use client";
import React from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  FiMail,
  FiLock,
  FiPhone,
  FiUser,
  FiImage,
  FiFile,
} from "react-icons/fi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpSchema } from "../validation_schemas/authentication_validation_schemas";

export default function SignUpPage() {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        overflowY: "auto",
        backgroundColor: "white",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{ display: "flex", justifyContent: "center", p: 2 }}
      >
        <Box sx={{ width: "100%", color: "black" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Sign up
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            If you already have an account, register{" "}
            <Typography component="span" color="primary" fontWeight="bold">
              Login here!
            </Typography>
          </Typography>

          <Formik
            initialValues={{
              email: "",
              phone: "",
              firstName: "",
              lastName: "",
              gender: "male",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                {/* Email and Phone Input in one row */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      InputProps={{
                        startAdornment: (
                          <FiMail style={{ marginRight: "8px" }} />
                        ),
                      }}
                      variant="standard"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "1px solid #000",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "2px solid #000",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      id="phone"
                      name="phone"
                      label="Phone"
                      type="tel"
                      placeholder="Enter your phone"
                      InputProps={{
                        startAdornment: (
                          <FiPhone style={{ marginRight: "8px" }} />
                        ),
                      }}
                      variant="standard"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "1px solid #000",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "2px solid #000",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                </Grid>

                {/* First Name and Last Name Input in one row */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      type="text"
                      placeholder="Enter your first name"
                      InputProps={{
                        startAdornment: (
                          <FiUser style={{ marginRight: "8px" }} />
                        ),
                      }}
                      variant="standard"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "1px solid #000",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "2px solid #000",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      type="text"
                      placeholder="Enter your last name"
                      InputProps={{
                        startAdornment: (
                          <FiUser style={{ marginRight: "8px" }} />
                        ),
                      }}
                      variant="standard"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "1px solid #000",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "2px solid #000",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                </Grid>

                {/* Gender Selection */}
                <FormControl component="fieldset" sx={{ mt: 1 }}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value="male"
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    style={{ color: "red" }}
                  />
                </FormControl>

                {/* Password Input */}
                <Field
                  as={TextField}
                  fullWidth
                  margin="normal"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your Password"
                  InputProps={{
                    startAdornment: <FiLock style={{ marginRight: "8px" }} />,
                  }}
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: "1px solid #000",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "2px solid #000",
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
                  as={TextField}
                  fullWidth
                  margin="normal"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your Password"
                  InputProps={{
                    startAdornment: <FiLock style={{ marginRight: "8px" }} />,
                  }}
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: "1px solid #000",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "2px solid #000",
                    },
                  }}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  style={{ color: "red" }}
                />

                {/* Profile Picture */}
                <Box display="flex" alignItems="center" my={2}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Profile Image"
                    variant="standard"
                    placeholder="Select Profile Image"
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <FiImage style={{ marginRight: "8px" }} />
                      ),
                      endAdornment: (
                        <FiFile
                          style={{
                            cursor: "pointer",
                            marginLeft: "8px",
                          }}
                          onClick={() =>
                            document.getElementById("file-upload").click()
                          }
                        />
                      ),
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottom: "1px solid black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  />
                  <input
                    id="file-upload"
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log(file.name);
                      }
                    }}
                  />
                </Box>

                {/* Register Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, backgroundColor: "#1229c2" }}
                  type="submit"
                  className="rounded-3xl"
                >
                  Register
                </Button>
              </Form>
            )}
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
