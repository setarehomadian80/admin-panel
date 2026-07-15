"use client";

import EditIcon from "@mui/icons-material/Edit";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Card,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function ProfileInformation() {
  return (
    <Card
      sx={{
        p: 3,
        height: "100%",
        border: "none",
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
          }}
        >
          Profile Information
        </Typography>

        <IconButton
          size="small"
          sx={{
            color: "#7b809a",
            ".dark &": {
              color: "#8392ab",
            },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term because pain avoids larger pain in the future.
      </Typography>

      <Box sx={{ mb: 4 }} />

      <Stack spacing={2}>
        <Box sx={{ display: "flex" }}>
          {/* name */}
          <Typography
            sx={{
              fontWeight: 700,
              width: 120,
              fontSize: 14,
            }}
          >
            Full Name:
          </Typography>

          <Typography sx={{ fontSize: 14 }}>Alec Thompson</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: 700,
              width: 120,
              fontSize: 14,
            }}
          >
            Mobile:
          </Typography>

          <Typography sx={{ fontSize: 14 }}>(+44) 123 1234 123</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: 700,
              width: 120,
              fontSize: 14,
            }}
          >
            Email:
          </Typography>

          <Typography sx={{ fontSize: 14 }}>alec@mail.com</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontWeight: 700,
              width: 120,
              fontSize: 14,
            }}
          >
            Location:
          </Typography>

          <Typography sx={{ fontSize: 14 }}>USA</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              width: 120,
              fontSize: 14,
            }}
          >
            Social:
          </Typography>

          <Stack direction="row" spacing={1}>
            <Link href="#" color="inherit">
              <FacebookRoundedIcon
                sx={{
                  color: "#1877F2",
                  fontSize: 20,
                }}
              />
            </Link>

            <Link href="#" color="inherit">
              <TwitterIcon
                sx={{
                  color: "#1DA1F2",
                  fontSize: 20,
                }}
              />
            </Link>

            <Link href="#" color="inherit">
              <InstagramIcon
                sx={{
                  color: "#E4405F",
                  fontSize: 20,
                }}
              />
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
