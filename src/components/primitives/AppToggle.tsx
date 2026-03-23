"use client"

import { cn } from "../../lib/utils"
import { Toggle, toggleVariants } from "../ui/toggle"
import type { VariantProps } from "class-variance-authority"

type AppToggleProps = React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>

function AppToggle({ className, variant, size, ...props }: AppToggleProps) {
  return (
    <Toggle
      className={cn("rounded-md", className)}
      variant={variant}
      size={size}
      {...props}
    />
  )
}

export { AppToggle }