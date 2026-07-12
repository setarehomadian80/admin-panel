"use client"

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: "income" | "expense";
  icon: React.ReactNode;
};

const newest: Transaction[] = [
  {
    id: 1,
    title: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: "-$2500",
    type: "expense",
    icon: <ArrowDownwardIcon fontSize="small" />,
  },
  {
    id: 2,
    title: "Apple",
    date: "27 March 2020, at 04:30 AM",
    amount: "+$2500",
    type: "income",
    icon: <ArrowUpwardIcon fontSize="small" />,
  },
];

const yesterday: Transaction[] = [
  {
    id: 3,
    title: "Stripe",
    date: "26 March 2020, at 01:00 PM",
    amount: "+$1200",
    type: "income",
    icon: <ArrowUpwardIcon fontSize="small" />,
  },
  {
    id: 4,
    title: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+$1700",
    type: "income",
    icon: <ArrowUpwardIcon fontSize="small" />,
  },
  {
    id: 5,
    title: "Creative Tim",
    date: "26 March 2020, at 08:30 AM",
    amount: "+$2400",
    type: "income",
    icon: <ArrowUpwardIcon fontSize="small" />,
  },
  {
    id: 6,
    title: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    amount: "Pending",
    type: "expense",
    icon: <ArrowDownwardIcon fontSize="small" />,
  },
];

const TransactionItem = ({ item }: { item: Transaction }) => (
  <Box
    sx={{
      paddingBlock: 1.5,
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
    }}
  >
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Avatar
        sx={{
          width: 38,
          height: 38,
          bgcolor: item.type === "income" ? "success.light" : "error.light",
          color: item.type === "income" ? "success.main" : "error.main",
          cursor:'pointer'
        }}
      >
        {item.icon}
      </Avatar>

      <Box>
        <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>

        <Typography variant="caption" color="text.secondary">
          {item.date}
        </Typography>
      </Box>
    </Stack>

    <Typography
      sx={{
        fontSize: 14 ,
        fontWeight: 600,
        color: item.amount.startsWith("+") ? "success.main" : "error.main",
      }}
    >
      {item.amount}
    </Typography>
  </Box>
);

export default function TransactionsCard() {
  return (
    <Card
      sx={{
        borderRadius: 3,
        border:'none',
        boxShadow:"none"
      }}
    >
      <CardContent sx={{border:"none"}}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Your Transaction's
        </Typography>

        <Box sx={{ marginTop: 3 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontWeight: 700, marginBlock: 4 }}
          >
            NEWEST
          </Typography>

          <Stack divider={<Divider />} sx={{ marginTop: 1 }}>
            {newest.map((item) => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </Stack>
        </Box>

        <Box sx={{ marginTop: 3 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontWeight: 700 }}
          >
            YESTERDAY
          </Typography>

          <Stack divider={<Divider />} sx={{ marginTop: 1 }}>
            {yesterday.map((item) => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
