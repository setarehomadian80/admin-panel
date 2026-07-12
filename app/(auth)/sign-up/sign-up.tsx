"use client";

import { Box } from "@mui/material";
import SignupCard from "./SignupCard";

export default function Sign_up() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        backgroundImage: "url('/image/bg-sign-up.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SignupCard />
    </Box>
  );
}