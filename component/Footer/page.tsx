"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 4,
        px: { xs: 2, md: 4 },
        py: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: "wrap",
          gap: 0.5,
          color: "text.secondary",
          fontSize: "0.875rem",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        © {new Date().getFullYear()}, made with
        <FavoriteIcon
          sx={{
            fontSize: 16,
            color: "#e91e63",
          }}
        />
        by
        <Link
          component={NextLink}
          href="https://www.creative-tim.com"
          target="_blank"
          underline="none"
          sx={{
            ml: 0.5,
            fontWeight: 600,
            color: "text.primary",
            transition: "all .2s ease",

            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Creative Tim
        </Link>
        for a better web.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          component={NextLink}
          href="https://www.creative-tim.com"
          target="_blank"
          underline="none"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "all .2s ease",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          Creative Tim
        </Link>

        <Link
          component={NextLink}
          href="https://www.creative-tim.com/presentation"
          target="_blank"
          underline="none"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "all .2s ease",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          About Us
        </Link>

        <Link
          component={NextLink}
          href="https://www.creative-tim.com/blog"
          target="_blank"
          underline="none"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "all .2s ease",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          Blog
        </Link>

        <Link
          component={NextLink}
          href="https://www.creative-tim.com/license"
          target="_blank"
          underline="none"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "all .2s ease",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          License
        </Link>
      </Box>
    </Box>
  );
}