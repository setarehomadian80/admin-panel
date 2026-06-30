"use client";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";

function createData(
  logo: string,
  name: string[],
  myfunction: string[],
  status: string,
  employed: string,
  action: string,
) {
  return { logo, name, myfunction, status, employed, action };
}

const rows = [
  createData(
    "/image/team-3.jpg",
    ["John Michael", "john@creative-tim.com"],
    ["Manager", "Organization"],
    "online",
    "23/04/18",
    "Edit",
  ),
  createData(
    "/image/team-2.jpg",
    ["Alexa Liras", "alexa@creative-tim.com"],
    ["Programmer", "Developer"],
    "offline",
    "11/01/19",
    "Edit",
  ),
  createData(
    "/image/team-1.jpg",
    ["Laurent Perrier", "laurent@creative-tim.com"],
    ["Manager", "Projects"],
    "online",
    "19/09/17",
    "Edit",
  ),
  createData(
    "/image/team-2.jpg",
    ["Michael Levi", "michael@creative-tim.com"],
    ["Programmer", "Developer"],
    "offline",
    "24/12/08",
    "Edit",
  ),
  createData(
    "/image/team-2.jpg",
    ["Richard Gran", "richard@creative-tim.com"],
    ["Manager", "Executive"],
    "online",
    "04/10/21",
    "Edit",
  ),
  createData(
    "/image/team-1.jpg",
    ["Miriam Eric", "miriam@creative-tim.com"],
    ["Programmer", "Developer"],
    "offline",
    "14/09/20",
    "Edit",
  ),
];

export default function AuthorsTable() {
  return (
    <div className="relative rounded-xl">
      {/* HEADER FLOATING (بیرون از scroll) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[95%] bg-[#1e88e5] text-white px-6 py-4 rounded-xl shadow-lg z-20">
        <h2 className="text-lg font-semibold">Authors Table</h2>
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
                  Author
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#6b7280" }}>
                  Function
                </TableCell>
                
                {/* Status */}
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, color: "#6b7280" }}
                >
                  Status
                </TableCell>

                {/* Employed */}
                <TableCell
                  align='left'
                  sx={{ fontWeight: 600, color: "#6b7280" }}
                >
                  Employed
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
                    "&:hover": { backgroundColor: "#f9fafb" },
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img
                        src={row.logo}
                        width={38}
                        height={38}
                        style={{ borderRadius: "50%" }}
                      />
                      {/* name */}
                      <Box>
                        <Box sx={{ fontWeight: 600 }}>{row.name[0]}</Box>
                        <Box sx={{ fontSize: 13, color: "gray" }}>
                          {row.name[1]}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box sx={{ fontWeight: 600 }}>{row.myfunction[0]}</Box>
                    <Box sx={{ fontSize: 13, color: "gray" }}>
                      {row.myfunction[1]}
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor:
                          row.status === "online" ? "#22c55e" : "#9ca3af",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>

                  <TableCell>{row.employed}</TableCell>

                  <TableCell align="center">
                    <Box
                      sx={{
                        cursor: "pointer",
                        fontWeight: 600,
                        color: "#6b7280",
                        "&:hover": { color: "#111827" },
                      }}
                    >
                      {row.action}
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
