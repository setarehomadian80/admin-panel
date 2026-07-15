"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-10 border-t pt-5">
      <FieldGroup className="w-full max-w-40">
        <Field orientation="horizontal">
          <FieldLabel htmlFor="switch-size-sm">
            Navbar Fixed
          </FieldLabel>

          <Switch
            className="cursor-pointer"
            id="switch-size-sm"
            size="default"
          />
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="theme-switch">
            Light / Dark
          </FieldLabel>

          <Switch
            id="theme-switch"
            size="default"
            className="cursor-pointer"
            checked={theme === "dark"}
            onCheckedChange={(checked) =>
              setTheme(checked ? "dark" : "light")
            }
          />
        </Field>
      </FieldGroup>
    </div>
  );
}