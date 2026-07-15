"use client";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import { EllipsisVertical } from "lucide-react";

function createData(
  logo: string,
  name: string,
  budget: string,
  status: string,
  completion: number,
  action: string,
) {
  return { logo, name, budget, status, completion, action };
}

const rows = [
  createData("/image/asana.svg", "Asana", "$2,500", "working", 60, "Edit"),
  createData("/image/github.svg", "Github", "$5,000", "done", 100, "Edit"),
  createData(
    "/image/Atlassian.svg",
    "Atlassian",
    "$3,400",
    "canceled",
    30,
    "Edit",
  ),
  createData("/image/Spotify.svg", "Spotify", "$14,000", "working", 80, "Edit"),
  createData("/image/Slack.svg", "Slack", "$1,000", "done", 0, "Edit"),
  createData(
    "/image/Invesion.svg",
    "Invesion",
    "$2,300",
    "canceled",
    100,
    "Edit",
  ),
];

export default function ProjectsTable() {
  return (
    <div className="relative rounded-xl bg-[#f0f2f5] dark:bg-[#1a2035]">
      {/* HEADER FLOATING (بیرون از scroll) */}
      <div
        className="absolute top-4
       left-1/2 -translate-x-1/2
        w-[95%] bg-[#1e88e5] text-white
         px-6 py-4 rounded-[12px]
          shadow-lg z-20"
      >
        <h2 className="text-lg font-semibold">Projects Table</h2>
      </div>

      {/* SCROLL WRAPPER فقط برای جدول */}
      <div className="w-full overflow-x-auto rounded-xl">
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 4,
            paddingTop: 6,
            // boxShadow: 6,
            mt: 6, // برای جا دادن header
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            {/* HEADER */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                  project
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                  budget
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, color: "#6b7280" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, color: "#6b7280" }}
                >
                  completion
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, color: "#6b7280" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            {/* BODY */}
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      borderBottom: "none",
                    },
                  }}
                >
                  {/* name */}
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img
                        src={row.logo}
                        width={38}
                        height={38}
                        style={{ borderRadius: "50%" }}
                      />
                      <Box sx={{ fontWeight: 600 }}>{row.name}</Box>
                    </Box>
                  </TableCell>

                  {/* budget */}
                  <TableCell>
                    <Box sx={{ fontWeight: 600 }}>{row.budget}</Box>
                  </TableCell>

                  {/* status */}
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 600, textTransform: "capitalize" }}
                  >
                    {row.status}
                  </TableCell>

                  {/* Progress */}
                  <TableCell sx={{ width: 220 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={row.completion}
                          color={
                            row.completion >= 80
                              ? "success"
                              : row.completion >= 50
                                ? "warning"
                                : "error"
                          }
                          sx={{
                            height: 8,
                            borderRadius: 5,
                          }}
                        />
                      </Box>

                      <Box sx={{ minWidth: 40, fontWeight: 600 }}>
                        {row.completion}%
                      </Box>
                    </Box>
                  </TableCell>

                  {/* action */}
                  <TableCell align="center">
                    <Box
                      sx={{
                        cursor: "pointer",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        margin: "0 auto",
                      }}
                    >
                      <EllipsisVertical size={18} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
