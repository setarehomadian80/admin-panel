"use client";

import { Button } from "@/components/ui/button";
import {
  Bell,
  LayoutDashboard,
  LogIn,
  LucideIcon,
  ReceiptText,
  TableProperties,
  User,
  FileText,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { useNavColor } from "@/app/context/NavColorContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MenuItem {
  title: string;
  icon: LucideIcon;
  link: string;
}

const menu = [
  { title: "Daashboard", icon: LayoutDashboard, link: "./dashboard" },
  { title: "Tables", icon: TableProperties, link: "./tables" },
  { title: "Billing", icon: ReceiptText, link: "./billing" },
  { title: "Notification", icon: Bell, link: "./notification" },
  { title: "Profile", icon: User, link: "./profile" },
  { title: "Sign In", icon: LogIn, link: "./sign-in" },
  { title: "Sign Up", icon: FileText, link: "./sign-up" },
];

export function RightMenuDesktop() {
  const { navColor } = useNavColor();
  const [active, setActive] = useState("Dashboard");
  // logout
  const router = useRouter();

  // logout
  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";

    router.push("/sign-in");
  };

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden xl:flex sticky
       top-0 self-start bg-[#212123] dark:bg-[#1f283e]"
      >
        {/* sidebar container */}
        <div
          className="w-65 h-screen
                  px-5 py-4 shadow-lg 
                  "
        >
          {/* header */}
          <div
            className={`border-b border-gray-500 pb-3
                     mb-4 text-lg font-bold text-white
                     `}
          >
            Material Dashboard
          </div>

          {/* menu */}
          <div className="flex flex-col gap-2">
            {menu.map((item) => {
              const Icon = item.icon;

              const isActive = active === item.title;

              return (
                <Link
                  className="inline-block *:w-full"
                  key={item.title}
                  href={item.link}
                >
                  <Button
      onClick={() => setActive(item.title)}
     className={`
     flex items-center gap-2 justify-start cursor-pointer
     rounded-[8px] py-5
      transition-all duration-300
      bg-[#212123] dark:bg-[#1f283e] dark:text-white
     hover:bg-[#90909b]   dark:hover:bg-white/10
     `}
      style={isActive ? { backgroundColor: navColor } : undefined}
                  >
      <Icon size={18} />
      {item.title}
       </Button>
        </Link>
              );
            })}
            <Button
              onClick={handleLogout}
              className="
    flex items-center gap-2 justify-start
    rounded-[8px] py-5
    transition-all duration-300 bg-[#212123]
     dark:bg-[#1f283e] dark:text-white
    hover:bg-[#90909b]  dark:hover:bg-white/10
  "
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
