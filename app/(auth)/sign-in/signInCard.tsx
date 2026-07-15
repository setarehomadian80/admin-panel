"use client";

import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string().required("Password is required"),
});

export default function SignInCard() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const router = useRouter();

  const [error, setError] = useState("");

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 420,
        borderRadius: 4,
        overflow: "visible",
        p: 4,
        pt: 8,
        bgcolor: "var(--card)",
        color: "var(--card-foreground)",
        boxShadow: "0 20px 45px rgba(0,0,0,.12)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: 20,
          right: 20,
          borderRadius: 3,
          py: 3,
          background: "#3a94ee",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: 700,
          }}
        >
          Sign In
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
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
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.get(
              "https://68c1a77098c818a69402a75f.mockapi.io/users",
            );

            const user = response.data.find(
              (item: any) =>
                item.email === values.email &&
                item.password === values.password,
            );

            if (user) {
              document.cookie = "token=logged-in; path=/";
              router.push("/dashboard");
            } else {
              setError("Email or password is incorrect");
            }
          } catch (err) {
            setError("Connection error");
          }
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Stack spacing={2.5}>
              <TextField
                name="email"
                fullWidth
                label="Email"
                type="email"
                size="small"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: isDark ? "#a8b2d1" : "#67748e",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: isDark ? "#fff" : "#344767",
                    "& fieldset": {
                      borderColor: isDark ? "rgba(255,255,255,.2)" : "#d2d6da",
                    },
                  },
                }}
              />

              <TextField
                name="password"
                fullWidth
                label="Password"
                type="password"
                size="small"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: isDark ? "#a8b2d1" : "#67748e",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: isDark ? "#fff" : "#344767",
                    "& fieldset": {
                      borderColor: isDark ? "rgba(255,255,255,.2)" : "#d2d6da",
                    },
                  },
                }}
              />

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Switch defaultChecked sx={{ color: "#3a94ee" }} />

                <Typography variant="body2">Remember me</Typography>
              </Stack>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 700,
                  background: "#3a94ee",
                }}
              >
                Sign In
              </Button>

              {error && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ textAlign: "center" }}
                >
                  {error}
                </Typography>
              )}

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Don't have an account?
                <Link href="./sign-up" style={{ textDecoration: "none" }}>
                  <Typography
                    component="span"
                    sx={{
                      cursor: "pointer",
                      fontWeight: 700,
                      color: "#3a94ee",
                      ml: 1,
                    }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Stack>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
