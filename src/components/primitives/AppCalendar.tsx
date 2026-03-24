// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppCalendar` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Calendar } from "../ui/calendar"

function AppCalendar({ className, ...props }: React.ComponentProps<typeof Calendar>) {
  return <Calendar className={cn("rounded-md", className)} {...props} />
}

export { AppCalendar }
