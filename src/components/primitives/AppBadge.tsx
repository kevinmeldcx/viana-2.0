// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update badge` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils"
import { Badge, badgeVariants } from "@/components/ui/badge"
import type { VariantProps } from "class-variance-authority"

type AppBadgeProps = React.ComponentProps<typeof Badge> &
  VariantProps<typeof badgeVariants>

function AppBadge({ className, ...props }: AppBadgeProps) {
  return <Badge className={cn("rounded-md", className)} {...props} />
}

export { AppBadge, type AppBadgeProps }
