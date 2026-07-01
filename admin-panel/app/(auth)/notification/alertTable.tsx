"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";


import CloseIcon from "@mui/icons-material/Close";

type NotificationType =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

type NotificationItem = {
  id: number;
  message: string;
  type: NotificationType;
};

const initialData: NotificationItem[] = [
  { id: 1, message: "A simple primary alert with an example link.", type: "primary" },
  { id: 2, message: "A simple secondary alert with an example link.", type: "secondary" },
  { id: 3, message: "A simple success alert with an example link.", type: "success" },
  { id: 4, message: "A simple error alert with an example link.", type: "error" },
  { id: 5, message: "A simple warning alert with an example link.", type: "warning" },
  { id: 6, message: "A simple info alert with an example link.", type: "info" },
  { id: 7, message: "A simple light alert with an example link.", type: "light" },
  { id: 8, message: "A simple dark alert with an example link.", type: "dark" },
];

const getColor = (type: NotificationType) => {
  switch (type) {
    case "primary":
      return "#1a73e8"; // blue
    case "secondary":
      return "#6c757d"; // gray
    case "success":
      return "#4caf50"; // green
    case "error":
      return "#f44336"; // red
    case "warning":
      return "#ff9800"; // orange
    case "info":
      return "#2196f3"; // light blue
    case "light":
      return "#dfe4e9"; // light gray
    case "dark":
      return "#343a40"; // dark gray
    default:
      return "#2196f3";
  }
};

export default function Alert() {
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialData);

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <Box >
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Header */}
          <Typography sx={{fontWeight:700 , marginBottom: 2}}>
            Alerts
          </Typography>

          {/* List */}
          <Stack spacing={1}>
            {notifications.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1.5,
                  borderRadius: 2,
                  border: `1px solid ${getColor(item.type)}`,
                  backgroundColor: `${getColor(item.type)}`,
                }}
              >
                {/* message */}
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    flex: 1,
                     color: 'white' ,
                  }}
                >
                  {item.message}
                </Typography>

                {/* close button */}
                <IconButton
                  size="small"
                  onClick={() => handleDelete(item.id)}
                  sx={{ color: 'white' ,}}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Stack>

          {/* empty state */}
          {notifications.length === 0 && (
            <Typography sx={{ marginBottom: 3 , alignItems: 'center'}} color="text.secondary">
              No notifications
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}