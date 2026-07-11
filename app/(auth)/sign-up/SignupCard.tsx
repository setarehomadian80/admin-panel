"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignupCard() {
  const router = useRouter();

  const [message, setMessage] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/image/bgSignin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 8,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
          position: "relative",
          pt: 9,
          pb: 5,
          px: 4,
          overflow: "visible",
          boxShadow: "0 20px 45px rgba(0,0,0,.15)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -80,
            left: 20,
            right: 20,
            borderRadius: 3,
            background: "#3c95ef",
            py: 3,
            boxShadow: "0 10px 25px #3c95ef",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            Sign Up
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", mt: 2 }}
          >
            <IconButton sx={{ color: "#fff" }}>
              <FacebookRoundedIcon />
            </IconButton>

            <IconButton sx={{ color: "#fff" }}>
              <GitHubIcon />
            </IconButton>

            <IconButton sx={{ color: "#fff" }}>
              <GoogleIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ mb: 3 }} />

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              // آدرس Mock API خودت را اینجا بگذار
              await axios.post(
                "https://68c1a77098c818a69402a75f.mockapi.io/users",
                values,
              );

              setMessage("Account created successfully");

              resetForm();
              router.push("/dashboard");
            } catch (error) {
              setMessage("Something went wrong");
            }
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Stack spacing={2}>
                <TextField
                  name="name"
                  label="Name"
                  fullWidth
                  size="small"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  size="small"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  size="small"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#3c95ef",
                        "&.Mui-checked": {
                          color: "#3c95ef",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree the Terms and Conditions
                    </Typography>
                  }
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.4,
                    borderRadius: 2,
                    background: "#3c95ef",
                    boxShadow: "0 8px 20px #3c95ef",
                  }}
                >
                  SIGN UP
                </Button>

                {message && (
                  <Typography sx={{ color: "#3c95ef", textAlign: "center" }}>
                    {message}
                  </Typography>
                )}

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Already have an account?
                  <Link href="./sign-in" style={{ textDecoration: "none" }}>
                    <Typography
                      component="span"
                      sx={{
                        cursor: "pointer",
                        fontWeight: 700,
                        color: "#3a94ee",
                        ml: 1,
                      }}
                    >
                      Sign In
                    </Typography>
                  </Link>
                </Typography>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
