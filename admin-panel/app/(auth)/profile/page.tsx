import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import PlatformSettings from "./desCard/platformSettings";
import ProfileInformation from "./desCard/profileInformation";
import Conversations from "./desCard/conversations";
import ProfileMenu from "./desCard/profileMenu";

export default function ProfileCard() {
  return (
    <div className="w-full bg-white">
      {/* base box */}
      <Card
        sx={{
          width: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          overflow: "visible",
        }}
      >
        <CardContent
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            p: 3,
            height: "100%",
          }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div className="flex items-center gap-5">
            {/* image */}
            <Avatar
              src="./image/profile/bruce.jpg"
              sx={{
                width: 74,
                height: 74,
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            {/* name */}
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 0.5, fontWeight: 700, fontSize: 18 }}
              >
                Richard Davis
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5, fontSize: 14 }}
              >
                CEO / Co-Founder
              </Typography>
            </Box>
          </div>

          <div className="w-full">
            <ProfileMenu />
          </div>
        </CardContent>

        {/* platform settings */}
        <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 *:h-full">
          <div>
            <PlatformSettings />
          </div>
          <div>
            <ProfileInformation />
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <Conversations />
          </div>
        </div>
      </Card>
    </div>
  );
}
