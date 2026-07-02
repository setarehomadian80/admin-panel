"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const conversations = [
  {
    id: 1,
    name: "Esthera Jackson",
    message: "Hi! I need more information...",
    image: "./image/profile/team-2.jpg",
  },
  {
    id: 2,
    name: "Alexa Liras",
    message: "Awesome work, can you...",
    image: "./image/profile/team-1.jpg",
  },
  {
    id: 3,
    name: "Laurent Perrier",
    message: "About files I can...",
    image: "./image/profile/ivana-square.jpg",
  },
  {
    id: 4,
    name: "Michael Levi",
    message: "Have a great afternoon...",
    image: "./image/profile/kal-visuals.jpg",
  },
  {
    id: 5,
    name: "Richard Gran",
    message: "Hi! I need more information...",
    image: "./image/profile/marie.jpg",
  },
];

export default function Conversations() {
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#344767",
        }}
      >
        Conversations
      </Typography>

      <Stack divider={<Divider />} spacing={2}>
        {conversations.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                src={item.image}
                sx={{
                  width: 48,
                  height: 48,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#344767",
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#67748e",
                    fontSize: 13,
                  }}
                >
                  {item.message}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="text"
              sx={{
                minWidth: 0,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 12,
                color: "#e91e63",
              }}
            >
              Reply
            </Button>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}