import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings } from "lucide-react";
import { useNavColor } from "@/app/context/NavColorContext";
import SwitchSizes from "./Switch";

const colors = [
  "#E32F6E",
  "#27272a",
  "#3c96ef",
  "#4ea952",
  "#ed4c49",
  "#fd9912",
];

export function SettingMenu() {
  const { navColor, setNavColor } = useNavColor();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="border-none bg-[#f0f2f5]">
          <Settings />
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={true} className="p-8 w-65!">
        <SheetHeader className="p-0">
          <SheetTitle>Material UI Configurator</SheetTitle>
          <SheetDescription>See our dashboard options.</SheetDescription>
        </SheetHeader>
        <div>
          {/* button theme */}
          <div>
            <h2 className="text-xl font-bold">Sidenav Colors</h2>
            <div className="flex gap-2">
              {colors.map((color) => (
                <span
                  key={color}
                  onClick={() => setNavColor(color)}
                  style={{ backgroundColor: color }}
                  className=" rounded-full w-5 h-5 cursor-pointer"
                ></span>
              ))}
            </div>
          </div>
          {/* color theme */}
          <div>
            <SwitchSizes />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
