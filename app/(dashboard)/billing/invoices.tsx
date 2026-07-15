"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Stack,
  Button,
} from "@mui/material";

const invoices = [
  {
    date: "March, 01, 2020",
    id: "#MS-415646",
    amount: "$180",
    status: "PDF",
  },
  {
    date: "February, 10, 2021",
    id: "#RV-126749",
    amount: "$250",
    status: "PDF",
  },
  {
    date: "April, 05, 2020",
    id: "#QW-103578",
    amount: "$120",
    status: "PDF",
  },
  {
    date: "June, 25, 2019",
    id: "#MS-415646",
    amount: "$180",
    status: "PDF",
  },
  {
    date: "March, 01, 2019",
    id: "#AR-803481",
    amount: "$300",
    status: "PDF",
  },
];

export default function InvoicesCard() {
  return (
    <div className="h-full">
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: "none",
          p: 2,
          height: "100%",
          backgroundColor: "var(--card)",
          color: "var(--card-foreground)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: 2,
            mb: 2,
          }}
        >
          <div>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Invoices
            </Typography>
          </div>
          <Button variant="contained" size="small">
            View all
          </Button>
        </Box>

        <Divider />

        {/* List */}
        <List>
          {invoices.map((inv, index) => (
            <ListItem
              key={`${inv.id}-${index}`}
              secondaryAction={
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Typography variant="body2">{inv.amount}</Typography>

                  <Typography
                    variant="body2"
                    className="font-bold! cursor-pointer"
                  >
                    {inv.status}
                  </Typography>
                </Stack>
              }
            >
              <ListItemText
                primary={inv.date}
                secondary={inv.id}
                slotProps={{
                  primary: {
                    sx: {
                      color: "var(--foreground)",
                      fontWeight: 600,
                    },
                  },
                  secondary: {
                    sx: {
                      color: "var(--muted-foreground)",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}
