"use client";
import { User } from "lucide-react";
import { Bell } from "lucide-react";
import { SettingMenu } from "./icons/settingMenuIcon/settingMenuIcon";
import { RightMenu } from "./icons/rightMenuIcon/rightMenuIcon";

export default function Header() {
  return (
    <main className="sticky top-0 self-start z-50 bg-[#f0f2f5]">
      {/* 2 box */}
      <div className="w-full flex justify-between xl:justify-end p-3">
        {/* search box */}
        <div>
          <input
            type="search"
            placeholder="Search here"
            className="border 
                border-gray-300 rounded-xl
                p-2.5 w-42
                "
          />
        </div>
        {/* icons box */}
        <div
          className="flex flex-wrap items-center 
                  *:p-0 gap-x-4 xl:ml-5 *:cursor-pointer"
        >
          <User size={18} />
          <div className="xl:hidden">
            <RightMenu />
          </div>
          <SettingMenu />
          <Bell size={18} />
        </div>
      </div>
    </main>
  );
}
