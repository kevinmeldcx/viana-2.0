"use client"

import { cn } from "../../lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

function AppHoverCard({ children, ...props }: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard {...props}>{children}</HoverCard>
}

function AppHoverCardTrigger({ children }: { children: React.ReactNode }) {
  return <HoverCardTrigger>{children}</HoverCardTrigger>
}

function AppHoverCardContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof HoverCardContent>) {
  return <HoverCardContent className={cn("rounded-md", className)} {...props} />
}

export { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent }
