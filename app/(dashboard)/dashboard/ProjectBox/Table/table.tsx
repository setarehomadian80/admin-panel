"use client";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function createData(
  logo: string,
  name: string,
  members: string[],
  budget: string,
  progress: number
) {
  return { logo, name, members, budget, progress };
}

const rows = [
  createData(
    "/image/logo-1.svg",
    "Material UI XD Version",
    ["/image/team-1.jpg", "/image/team-2.jpg", "/image/team-4.jpg"],
    "$14,000",
    80
  ),
  createData(
    "/image/logo-2.svg",
    "Add Progress Track",
    ["/image/team-1.jpg", "/image/team-3.jpg"],
    "$3,000",
    60
  ),
  createData(
    "/image/logo-3.svg",
    "Fix Platform Errors",
    ["/image/team-2.jpg", "/image/team-4.jpg", "/image/team-1.jpg"],
    "Not set",
    30
  ),
  createData(
    "/image/logo-4.svg",
    "Launch our Mobile App",
    ["/image/team-4.jpg", "/image/team-3.jpg", "/image/team-1.jpg", "/image/team-2.jpg"],
    "$20,500",
    95
  ),
  createData(
    "/image/logo-5.svg",
    "Add New Pricing Page",
    ["/image/team-4.jpg"],
    "$500",
    20
  ),
   createData(
    "/image/logo-6.svg",
    "Redesign New Online Shop",
    ["/image/team-2.jpg"],
    "$2,000",
    60
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }}>

        {/* HEADER */}
        <TableHead>
          <TableRow className="
           **:flex **:justify-center! **:text-gray-600">
            <TableCell><strong>Company</strong></TableCell>
            <TableCell><strong>Members</strong></TableCell>
            <TableCell align="right"><strong>Budget</strong></TableCell>
            <TableCell><strong>Progress</strong></TableCell>
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >

              {/* Company */}
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <img
                    src={row.logo}
                    alt={row.name}
                    width={32}
                    height={32}
                    style={{ borderRadius: "50%" }}
                  />
                  {row.name}
                </Box>
              </TableCell>

              {/* Members */}
              <TableCell className="*:flex *:justify-center">
                <AvatarGroup max={4}>
                  {row.members.map((img, i) => (
                    <Avatar
                      key={i}
                      src={img}
                      sx={{ width: 28, height: 28 }}
                    />
                  ))}
                </AvatarGroup>
              </TableCell>

              {/* Budget */}
              
              <TableCell align="right" sx={{ fontWeight: 600 }} className="text-center!">
                {row.budget}
              </TableCell>

              {/* Progress */}
              <TableCell sx={{ width: 220 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>

                  <Box sx={{ flex: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      color={
                        row.progress >= 80
                          ? "success"
                          : row.progress >= 50
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
                    {row.progress}%
                  </Box>

                </Box>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}