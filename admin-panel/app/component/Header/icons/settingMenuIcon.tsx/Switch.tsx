"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="mt-10 border-t pt-5">
      <FieldGroup className="w-full max-w-40">
        <Field orientation="horizontal">
          <FieldLabel htmlFor="switch-size-sm">Navbar Fixed</FieldLabel>
          <Switch className="cursor-pointer" id="switch-size-sm" size="default" />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="switch-size-default">Light / Dark</FieldLabel>
          <Switch className="cursor-pointer"  id="switch-size-default" size="default" />
        </Field>
      </FieldGroup>
    </div>
  )
}
