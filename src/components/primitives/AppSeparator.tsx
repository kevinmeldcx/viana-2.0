// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppSeparator` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"

function AppSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn("rounded-md", className)} {...props} />
}

export { AppSeparator }
