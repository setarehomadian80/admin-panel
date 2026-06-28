"use client";

import { Button } from "@/components/ui/button"
import { Bell, LayoutDashboard, LogIn, Menu, ReceiptText, TableProperties, User } from "lucide-react"
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

export function RightMenuDesktop() {


    const { navColor } = useNavColor()
    const [active, setActive] = useState('Dashboard');


    return (
        <>
            {/* Desktop */}
            <div className="hidden xl:flex sticky top-0 self-start">
                {/* sidebar container */}
                <div className="w-65 h-screen
                 rounded-2xl
                  px-5 py-4 shadow-lg bg-[#27272a]
                  "
                >

                    {/* header */}
                    <div className={`border-b border-gray-500 pb-3
                     mb-4 text-lg font-bold  text-white
                     `}>
                        Material Dashboard
                    </div>

                    {/* menu */}
                    <div className="flex flex-col gap-2">
                        {menu.map((item) => {
                            const Icon = item.icon;

                            const isActive = active === item.title;

                            return (
                                <Button
                                    key={item.title}
                                    onClick={() => setActive(item.title)}
                                    className={`
                  flex items-center gap-2 justify-start cursor-pointer
                  rounded-[8px] py-5
                  transition-all duration-300
                  hover:bg-[#3a3a3f]
                `}
                                    style={
                                        isActive
                                            ? { backgroundColor: navColor }
                                            : undefined
                                    }
                                >
                                    <Icon size={18} />
                                    {item.title}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
