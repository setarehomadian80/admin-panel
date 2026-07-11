"use client";

import { Box } from "@mui/material";
import SignInCard from "./signInCard";

export default function Page() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        backgroundImage: "url('/image/bg-sign-in.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SignInCard />
    </Box>
  );
}