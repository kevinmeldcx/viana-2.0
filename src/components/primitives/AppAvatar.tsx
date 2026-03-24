// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppAvatar` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function AppAvatar({ className, ...props }: React.ComponentProps<typeof Avatar>) {
  return <Avatar className={cn("rounded-md", className)} {...props} />
}

function AppAvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarImage>) {
  return <AvatarImage className={cn("rounded-md", className)} {...props} />
}

function AppAvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarFallback>) {
  return <AvatarFallback className={cn("rounded-md", className)} {...props} />
}

export { AppAvatar, AppAvatarImage, AppAvatarFallback }
