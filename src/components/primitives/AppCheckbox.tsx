"use client"

import { cn } from "../../lib/utils"
import { Checkbox as CheckboxPrimitive } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>

function AppCheckbox({ className, ...props }: AppCheckboxProps) {
  return (
    <CheckboxPrimitive
      className={cn("rounded", className)}
      {...props}
    />
  )
}

export { AppCheckbox }