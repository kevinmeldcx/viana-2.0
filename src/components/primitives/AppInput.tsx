// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update input` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

function AppInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return <Input className={cn("rounded-md bg-input", className)} {...props} />
}

export { AppInput }
