"use client";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

type BillingItem = {
  id: number;
  name: string;
  company: string;
  email: string;
  vat: string;
};

const billingData: BillingItem[] = [
  {
    id: 1,
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@email.com",
    vat: "FRB1235476",
  },
  {
    id: 2,
    name: "Emma Roberts",
    company: "Stone Tech Zone",
    email: "emma@email.com",
    vat: "FRB7654321",
  },
  {
    id: 3,
    name: "Sophia Clark",
    company: "Fiber Notion",
    email: "sophia@email.com",
    vat: "FRB9876543",
  },
];

export default function BillingInformation() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className="bg-white dark:bg-[#202940] rounded-[14px] p-5">
      <Box>
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 700 }}>
          Billing Information
        </Typography>

        <Stack spacing={2}>
          {billingData.map((item) => (
            <Card
              key={item.id}
              elevation={0}
              sx={{
                borderRadius: 3,
              }}
            >
              <CardContent className="bg-[#eff1f4] dark:bg-[#202940]!">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <div
                      className="flex justify-between
                     w-full! items-center! my-2 h-10"
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700 }}
                        className="h-full! flex items-center"
                      >
                        {item.name}
                      </Typography>

                      <Stack direction="row" spacing={1}>
                        <IconButton color="error">
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>

                        <IconButton color="primary">
                          <EditOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </div>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 0.5 }}
                    >
                      Company Name: <strong>{item.company}</strong>
                    </Typography>

                    <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                      Email Address: <strong>{item.email}</strong>
                    </Typography>

                    <Typography variant="body2">
                      VAT Number: <strong>{item.vat}</strong>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  );
}
