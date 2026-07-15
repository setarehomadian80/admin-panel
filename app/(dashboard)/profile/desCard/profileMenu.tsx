"use client";

import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";

export default function ProfileMenu() {
  
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  
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
        borderRadius: 3,
        p: 0.5,
        border: "none",
        bgcolor: isDark ? "#202940" : "#f8f9fa",
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

                bgcolor: active === index ? "#1a2035" : "transparent",

                boxShadow:
                  active === index ? "0 4px 12px rgba(0,0,0,.08)" : "none",

                color:
                  active === index ? "#ffffff" : isDark ? "#ffffff" : "#344767",
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
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
