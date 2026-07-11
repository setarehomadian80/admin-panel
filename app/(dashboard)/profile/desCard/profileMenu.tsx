"use client";

import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ProfileMenu() {
  const [active, setActive] = useState(0);

  const menus = [
    {
      title: "APP",
      icon: <AppsIcon sx={{ fontSize: 18 }} />,
    },
    {
      title: "MESSAGE",
      icon: <EmailIcon sx={{ fontSize: 18 }} />,
    },
    {
      title: "SETTINGS",
      icon: <SettingsIcon sx={{ fontSize: 18 }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f8f9fa",
        borderRadius: 3,
        p: 0.5,
        border: "none",
      }}
    >
      <Grid container spacing={1}>
        {menus.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Box
              onClick={() => setActive(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                py: 1.2,
                px: 2,
                borderRadius: 2,
                cursor: "pointer",
                transition: ".3s",

                bgcolor: active === index ? "#fff" : "transparent",

                boxShadow:
                  active === index ? "0 4px 12px rgba(0,0,0,.08)" : "none",

                "&:hover": {
                  bgcolor: active === index ? "#fff" : "#eceff3",
                },
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#344767",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
