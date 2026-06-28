"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { Clock } from "lucide-react";

const data = [
  { name: "M", uv: 45 },
  { name: "T", uv: 20 },
  { name: "W", uv: 10 },
  { name: "T", uv: 22 },
  { name: "F", uv: 45 },
  { name: "S", uv: 10 },
  { name: "S", uv: 40 },
];
const dataline = [
  { name: "Apr", sales: 50 },
  { name: "May", sales: 8 },
  { name: "Jan", sales: 300 },
  { name: "Jul", sales: 320 },
  { name: "Aug", sales: 500 },
  { name: "Sep", sales: 380 },
  { name: "Oct", sales: 200 },
  { name: "Nov", sales: 230 },
  { name: "Dec", sales: 460 },
];

export default function MultiActionAreaCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       w-full *:w-full! 
    *:mx-auto gap-y-14 md:gap-x-6
     ">
      <Card
        sx={{
          // maxWidth: 550,
          borderRadius: 3,
          overflow: "visible",
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          {/* Chart */}
          <Box
            sx={{
              height: 200,
              mx: 2,
              mt: -3,
              borderRadius: 3,
              background: "linear-gradient(45deg,#49a3f1,#1A73E8)",
              boxShadow: 3,
              p: 1,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,.3)"
                />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#fff" }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  width={20}
                  tick={{ fill: "#fff" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  barSize={10}
                  dataKey="uv"
                  fill="#fff"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Content */}
          <CardContent>
            <Typography variant="h6" style={{fontSize: '18px'}}>
              Website Views
            </Typography>

            <Typography color="text.secondary" className="text-gray-600" style={{fontSize: '14px'}}>
              Last Campaign Performance
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="p-4! text-gray-600">
          <Clock size={20}/>
          <Typography variant="body2" color="text.secondary">
             Campaign sent 2 days ago
          </Typography>
        </CardActions>
      </Card>
      {/* ///////////////////////////////////////////////////////////// */}
      <Card
        sx={{
          // maxWidth: 550,
          borderRadius: 3,
          overflow: "visible",
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          {/* Chart */}
          <Box
            sx={{
              height: 200,
              mx: 2,
              mt: -3,
              borderRadius: 3,
              background:
                "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
              boxShadow: 3,
              p: 1,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataline}>
                <CartesianGrid
                  vertical={false}
                  stroke="rgba(255,255,255,.2)"
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#fff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  width={20}
                  tick={{ fill: "#fff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "#343439",
                    border: "none",
                    borderRadius: 10,
                    color: "#fff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#fff"
                  strokeWidth={3}
                  dot={{
                    fill: "#fff",
                    r: 4,
                  }}
                  activeDot={{
                    r: 6,
                    fill: "#fff",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Content */}
          <CardContent>
            <Typography variant="h6" style={{fontSize: '18px'}}>
              Daily Sales
            </Typography>

            <Typography color="text.secondary" style={{fontSize: '14px'}}>
              (+15%) increase in today sales.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="p-4! text-gray-600">
            <Clock size={20} />
          <Typography variant="body2" color="text.secondary" >
              (+15%) increase in today sales.
          </Typography>
        </CardActions>
      </Card>
      {/* ///////////////////////////////////////////////////////////// */}
      <Card
        sx={{
          // maxWidth: 550,
          borderRadius: 3,
          overflow: "visible",
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          {/* Chart */}
          <Box
            sx={{
              height: 200,
              mx: 2,
              mt: -3,
              borderRadius: 3,
              background:
                "linear-gradient(195deg, rgb(61, 61, 67), rgb(61, 61, 67))",
              boxShadow: 3,
              p: 1,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataline}>
                <CartesianGrid
                  vertical={false}
                  stroke="rgba(255,255,255,.2)"
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#fff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  width={20}
                  tick={{ fill: "#fff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "#343439",
                    border: "none",
                    borderRadius: 10,
                    color: "#fff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#fff"
                  strokeWidth={3}
                  dot={{
                    fill: "#fff",
                    r: 4,
                  }}
                  activeDot={{
                    r: 6,
                    fill: "#fff",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Content */}
          <CardContent>
            <Typography variant="h6" style={{fontSize: '18px'}}>
              completed tasks
            </Typography>

            <Typography color="text.secondary" style={{fontSize: '14px'}}>
              Last Campaign Performance
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="p-4! text-gray-600">
            <Clock size={20}/>
          <Typography variant="body2" color="text.secondary">
            just updated
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}