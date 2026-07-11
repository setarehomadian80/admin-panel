"use client";

import Image from "next/image";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const projects = [
  {
    id: 1,
    image: "/image/profile/home-decor4.jpg",
    title: "Modern",
    category: "Project #1",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    members: [
      "/image/profile/team-1.jpg",
      "/image/profile/team-2.jpg",
      "/image/profile/team-4.jpg",
    ],
  },
  {
    id: 2,
    image: "/image/profile/home-decor3.jpg",
    title: "Scandinavian",
    category: "Project #2",
    description:
      "Music is something that every person has his or her own specific opinion.",
    members: [
      "/image/profile/team-1.jpg",
      "/image/profile/team-2.jpg",
      "/image/profile/team-4.jpg",
    ],
  },
  {
    id: 3,
    image: "/image/profile/home-decor1.jpg",
    title: "Minimalist",
    category: "Project #3",
    description:
      "Different people have different taste, and various types of music.",
    members: [
      "/image/profile/team-1.jpg",
      "/image/profile/team-2.jpg",
      "/image/profile/team-3.jpg",
    ],
  },
  {
    id: 4,
    image: "/image/profile/home-decor2.jpg",
    title: "Gothic",
    category: "Project #4",
    description:
      "Why would anyone pick blue over pink? Pink is obviously a better color.",
    members: [
      "/image/profile/team-1.jpg",
      "/image/profile/team-2.jpg",
      "/image/profile/team-3.jpg",
    ],
  },
];

export default function Project() {
  return (
    <Box
      sx={{
        mt: 6,
        px: {
          xs: 2,
          md: 4,
        },
        pb: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ marginInline: 2 }}>
          <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
            Projects
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ fontSize: 14, marginTop: 2 }}
          >
            Architects design houses
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid
            key={project.id}
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
          >
            <Card
              elevation={0}
              sx={{
                // backgroundColor: 'green',
                height: '100%',
                borderRadius: 4,
                overflow: "visible",
                // bgcolor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  height: {
                    xs: 150, // موبایل
                    md: 220, // تبلت و بالاتر
                    lg: 120,
                    xl: 180,
                    xxl: 250,
                  },
                  mx: 2,
                  mt: -2,
                  boxShadow: "0 20px 27px 0 rgba(0,0,0,.05)",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 25px 35px rgba(0,0,0,.15)",
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box sx={{ p: 3 }}>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 600 }}
                    >
                      {project.category}
                    </Typography>
                    {/* title */}
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontWeight: 700,
                        fontSize: 22,
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Stack>
                {/* description */}
                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    lineHeight: 1.8,
                    fontSize: 14,
                  }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  sx={{
                    marginTop: 4,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* AvatarGroup */}
                  <AvatarGroup
                    max={4}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: 28,
                        height: 28,
                        fontSize: 12,
                        border: "2px solid white",
                      },
                    }}
                  >
                    {project.members.map((member, index) => (
                      <Avatar key={index} src={member} />
                    ))}
                  </AvatarGroup>
                  {/*  View Project */}
                  <Button
                    variant="text"
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    View Project
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
