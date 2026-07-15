"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  Bell,
  FileText,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  ReceiptText,
  TableProperties,
  User,
} from "lucide-react";

import { useNavColor } from "@/app/context/NavColorContext";

const menu = [
  { title: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
  { title: "Tables", icon: TableProperties, link: "/tables" },
  { title: "Billing", icon: ReceiptText, link: "/billing" },
  { title: "Notification", icon: Bell, link: "/notification" },
  { title: "Profile", icon: User, link: "/profile" },
  { title: "Sign In", icon: LogIn, link: "/sign-in" },
  { title: "Sign Up", icon: FileText, link: "/sign-up" },
];

export default function MenuIcon() {
const { resolvedTheme } = useTheme();
const isDark = resolvedTheme === "dark";


  const router = useRouter();
  const { navColor } = useNavColor();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const handleNavigate = (title: string, link: string) => {
    setActive(title);
    setOpen(false);

    router.push(link);
  };

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    setOpen(false);
    router.push("/sign-in");
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}   sx={{
    minWidth: 0,
    width: 22,
    height: 22,
    p: 0,
     color: "inherit",
  }}>
        <Menu size={18} />
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              px: 2.5,
              py: 2,
              
              backgroundColor: isDark ? "#1f283e !important" : "#212123 !important",     
            },
          },
        }}
      >
      <Typography
  sx={{
    fontWeight: 700,
    fontSize: 20,
    pb: 1,
    mb: 2,
       color: isDark ? "var(--sidebar-foreground)" : "#fff",
    borderBottom: "1px solid var(--sidebar-border)",
  }}
>
  Material Dashboard
</Typography>

        <List sx={{ p: 0 }}>
  {menu.map((item) => {
    const Icon = item.icon;
    const isActive = active === item.title;

    return (
      <ListItem key={item.title} disablePadding sx={{ mb: 0.5 }}>
        <ListItemButton
          onClick={() => handleNavigate(item.title, item.link)}
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems:'center',
            borderRadius: "8px",
            py: 1,
            px: 2,
            gap: 1,
            transition: "all .25s",
                color: isDark ? "var(--sidebar-foreground)" : "#fff",

            "&:hover": {
              backgroundColor: isActive
                ? navColor
                :  isDark
      ? "#FFFFFF1A"
      : "#90909b",
            },
            
          }}
           style={
                        isActive ? { backgroundColor: navColor } : undefined
                      }
        >
          <ListItemIcon
            sx={{
              minWidth: 22,
               color: "inherit",
            }}
          >
            <Icon size={18}/>
          </ListItemIcon>

          <ListItemText
            primary={item.title}
            slotProps={{
    primary: {
      sx: {
         color: "inherit",
        fontWeight: 500,
        fontSize: '14px',
      },
    },
  }}
          />
        </ListItemButton>
      </ListItem>
    );
  })}
</List>



        {/* logout */}

<ListItem disablePadding>
  <ListItemButton
    onClick={handleLogout}
    sx={{
      display: 'flex',
      justifyContent: 'start',
      borderRadius: "8px",
      py: 1,
      px: 2,
      gap: 1 ,
      transition: "all .25s",
       color: isDark ? "var(--sidebar-foreground)" : "#fff",

     "&:hover": {
              backgroundColor: isDark
      ? "#FFFFFF1A"
      : "#90909b",
            },
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 22,
         color: "inherit",
      }}
    >
      <LogOut size={18} />
    </ListItemIcon>

    <ListItemText
      primary="Logout"
        slotProps={{
    primary: {
      sx: {
        color: "inherit",
        fontWeight: 500,
        fontSize: '14px',
      },
    },
  }}
    />
  </ListItemButton>
</ListItem>
      </Drawer>
    </>
  );
}
