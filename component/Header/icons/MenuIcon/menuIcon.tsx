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
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

const menu = [
  { title: "Daashboard", icon: LayoutDashboard, link: "./dashboard" },
  { title: "Tables", icon: TableProperties, link: "./tables" },
  { title: "Billing", icon: ReceiptText, link: "./billing" },
  { title: "Notification", icon: Bell, link: "./notification" },
  { title: "Profile", icon: User, link: "./profile" },
  { title: "Sign In", icon: LogIn, link: "./sign-in" },
  { title: "Sign Up", icon: LogIn, link: "./sign-up" },
];

export function MenuIcon() {
  const { navColor } = useNavColor();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
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
             [&>button]:text-white px-5 w-65!  rounded-2xl)]
             
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
            className="text-white flex flex-col gap-2
                 "
          >
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.title;

              return (
                <SheetClose key={item.title} asChild>
                  <Link href={item.link} className="inline-block *:w-full">
                    <Button
                      onClick={() => setActive(item.title)}
                      className={`
                      flex items-center gap-2 justify-start cursor-pointer
                       rounded-[8px] py-5
                         transition-all duration-300
                          hover:bg-[#3a3a3f]
                         `}
                      style={
                        isActive ? { backgroundColor: navColor } : undefined
                      }
                    >
                      <Icon size={18} />
                      {item.title}
                    </Button>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
