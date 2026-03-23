// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update label` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

function AppLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  return <Label className={cn("rounded-md", className)} {...props} />
}

export { AppLabel }
