"use client"

import { cn } from "../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type AppPopoverProps = React.ComponentProps<typeof Popover>

function AppPopover({ children, ...props }: AppPopoverProps) {
  return <Popover {...props}>{children}</Popover>
}

function AppPopoverTrigger({ children, ...props }: React.ComponentProps<typeof PopoverTrigger>) {
  return <PopoverTrigger {...props}>{children}</PopoverTrigger>
}

function AppPopoverContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof PopoverContent>) {
  return (
    <PopoverContent className={cn("rounded-md", className)} {...props}>
      {children}
    </PopoverContent>
  )
}

export { AppPopover, AppPopoverTrigger, AppPopoverContent }