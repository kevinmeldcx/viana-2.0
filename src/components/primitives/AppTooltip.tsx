"use client"

import { cn } from "../../lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

function AppTooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}

function AppTooltip({ children, ...props }: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip {...props}>{children}</Tooltip>
}

function AppTooltipTrigger({ children, ...props }: React.ComponentProps<typeof TooltipTrigger>) {
  return <TooltipTrigger {...props}>{children}</TooltipTrigger>
}

function AppTooltipContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof TooltipContent>) {
  return (
    <TooltipContent className={cn("rounded-md", className)} {...props}>
      {children}
    </TooltipContent>
  )
}

export { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent }
