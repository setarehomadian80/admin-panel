"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ToastType = "success" | "error" | "warning" | "info";

type Toast = {
  id: number;
  type: ToastType;
  message: string;
};

const messages: Record<ToastType, string> = {
  success: "This is a success notification!",
  error: "Something went wrong!",
  warning: "Be careful with this action!",
  info: "Here is some information!",
};

export default function NotificationsToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleOpen = (type: ToastType) => {
    const toast: Toast = {
      id: Date.now() + Math.random(),
      type,
      message: messages[type],
    };

    setToasts((prev) => [...prev, toast]);

    // حذف خودکار بعد از ۳ ثانیه
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 1000);
  };

  const handleClose = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography sx={{ fontWeight: 700, marginBottom: 1 }}>
            Notifications
          </Typography>

          <Typography
            sx={{ fontWeight: 500, marginBottom: 4, color: "#9a9eb2" }}
          >
            Notifications on this page use Toasts from Bootstrap. Read more
            details here.
          </Typography>

          <Stack direction="row" spacing={2}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 *:w-full">
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={() => handleOpen("success")}
                
              >
                Success
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={() => handleOpen("error")}
              >
                Error
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="warning"
                onClick={() => handleOpen("warning")}
              >
                Warning
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="info"
                onClick={() => handleOpen("info")}
              >
                Info
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>

      {/* Toast Container */}
      <Box
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {toasts.map((toast) => (
          <Slide
            key={toast.id}
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Alert
              severity={toast.type}
              variant="filled"
              sx={{
                minWidth: 320,
                boxShadow: 4,
                alignItems: "center",
              }}
              action={
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => handleClose(toast.id)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            >
              {toast.message}
            </Alert>
          </Slide>
        ))}
      </Box>
    </>
  );
}
