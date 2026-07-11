"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bell,
  LayoutDashboard,
  LogIn,
  Menu,
  ReceiptText,
  TableProperties,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavColor } from "@/app/context/NavColorContext";

const menu = [
  { title: "Daashboard", icon: LayoutDashboard },
  { title: "Tables", icon: TableProperties },
  { title: "Billing", icon: ReceiptText },
  { title: "Notification", icon: Bell },
  { title: "Profile", icon: User },
  { title: "Sign In", icon: LogIn },
  { title: "Sign Up", icon: LogIn },
];

export function RightMenu() {
  const { navColor } = useNavColor();

  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#f0f2f5]
                         border-none p-0 py-0!"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-[#2c2c30]
             [&>button]:text-white px-5 w-[260px]! m-3 rounded-2xl
             
             "
        >
          <SheetHeader>
            <SheetTitle
              className="text-white border-b
                     border-gray-400! pb-2 "
            >
              Material Dashboard
            </SheetTitle>
          </SheetHeader>
          <div
            className="text-white grid grid-cols-1
                 gap-1 *:bg-[#2c2c30]
                 *:flex *:justify-start
                 *:rounded-[8px]
                 *:py-6
                 "
          >
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <Button
                  className="cursor-pointer"
                  key={item.title}
                  onClick={() => setActive(item.title)}
                  style={
                    active === item.title
                      ? { backgroundColor: navColor }
                      : undefined
                  }
                >
                  <Icon />
                  {item.title}
                </Button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
