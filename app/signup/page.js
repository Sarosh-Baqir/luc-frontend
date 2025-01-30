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

            "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
              {
                maxWidth: "700px",
              },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                {
                  fontSize: "4rem",
                },
              my: 3,
            }}
          >
            Sign up
          </Typography>
          <Typography
            variant="body2"
            sx={{
              "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                {
                  fontSize: "2.0rem",
                },
              mb: 3,
            }}
          >
            If you already have an account,{" "}
            <Typography
              component="span"
              color="#ec9941"
              fontWeight="bold"
              sx={{
                "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                  {
                    fontSize: "2.0rem",
                  },
                mb: 3,
              }}
            >
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
              <Form
                style={{
                  "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                    {
                      transform: "scale(3.0)",
                    },
                }}
              >
                {/* Email and Phone Input in one row */}
                <Grid
                  container
                  spacing={2}
                  sx={{
                    "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                      {
                        marginBottom: "2.0rem",
                        marginTop: "2rem",
                      },
                    mb: 3,
                  }}
                >
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
                        "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                          {
                            "& .MuiInputBase-input": {
                              fontSize: "2.0rem",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: "2.0rem",
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
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
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
                        startAdornment: <FiPhone className="responsive-icon" />,
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
                        "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                          {
                            "& .MuiInputBase-input": {
                              fontSize: "2.0rem",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: "2.0rem",
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
                      }}
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      style={{ color: "red" }}
                    />
                  </Grid>
                </Grid>

                {/* First Name and Last Name Input in one row */}
                <Grid
                  container
                  spacing={2}
                  sx={{
                    "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                      {
                        marginBottom: "2.0rem",
                      },
                    mb: 3,
                  }}
                >
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      margin="normal"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      type="text"
                      placeholder="Enter first name"
                      InputProps={{
                        startAdornment: <FiUser className="responsive-icon" />,
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
                        "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                          {
                            "& .MuiInputBase-input": {
                              fontSize: "2.0rem",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: "2.0rem",
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
                      }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
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
                      placeholder="Enter last name"
                      InputProps={{
                        startAdornment: <FiUser className="responsive-icon" />,
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
                        "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                          {
                            "& .MuiInputBase-input": {
                              fontSize: "2.0rem",
                            },
                            "& .MuiInputLabel-root": {
                              fontSize: "2.0rem",
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
                      }}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      style={{ color: "red" }}
                    />
                  </Grid>
                </Grid>
                <FormControl
                  component="fieldset"
                  sx={{ width: "100%", marginBottom: "2.0rem" }}
                >
                  <FormLabel
                    component="legend"
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                        {
                          fontSize: "2rem",
                        },
                    }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup row name="gender">
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white",
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              fill: "white",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "white",
                            },
                            "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                              {
                                transform: "scale(1.5)",
                              },
                          }}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white",
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              fill: "white",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "white",
                            },
                            "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                              {
                                transform: "scale(1.5)",
                              },
                          }}
                        />
                      }
                      label="Female"
                      sx={{
                        color: "white",
                        fontSize: "1rem",
                        "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                          {
                            fontSize: "2rem",
                          },
                      }}
                    />
                  </RadioGroup>
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
                    startAdornment: <FiLock className="responsive-icon" />,
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
                    mb: 3,
                    "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                      {
                        "& .MuiInputBase-input": {
                          fontSize: "2.0rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "2.0rem",
                        },
                        marginBottom: "2rem",
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
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="p"
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
                    startAdornment: <FiLock className="responsive-icon" />,
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
                    mb: 3,
                    "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                      {
                        "& .MuiInputBase-input": {
                          fontSize: "2.0rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "2.0rem",
                        },
                        marginBottom: "2rem",
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
                  }}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  style={{ color: "red" }}
                />

                {/* Profile Picture
                <Box display="flex" alignItems="center" my={2}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Profile Image"
                    placeholder="Select Profile Image"
                    InputProps={{
                      readOnly: true,
                      startAdornment: <FiImage className="responsive-icon" />,
                      style: { color: "white" },
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
                </Box>*/}

                {/* Register Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    backgroundColor: "#ec9941",
                    color: "white",
                    "@media (min-width: 820px) and (max-width: 1024px) and (min-height: 1180px) and (max-height: 1368px)":
                      {
                        fontSize: "2.0rem",
                        padding: "16px",
                      },
                  }}
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
