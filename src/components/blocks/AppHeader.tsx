import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * AppHeader — Top-of-page header bar for application layouts.
 * Uses --header-height CSS variable for consistent sizing with the sidebar system.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHeader({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "dark flex h-(--header-height) shrink-0 items-center gap-2 border-b border-header-border bg-header text-header-foreground transition-[width,height] ease-linear",
        className
      )}
      {...props}
    />
  )
}
AppHeader.displayName = "AppHeader"

/**
 * AppHeaderContent — Inner layout container for AppHeader.
 * Handles horizontal padding and gap between children.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHeaderContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex w-full items-center gap-2 px-4 lg:px-6", className)}
      {...props}
    />
  )
}
AppHeaderContent.displayName = "AppHeaderContent"

/**
 * AppHeaderTitle — Optional page or section label inside AppHeader.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHeaderTitle({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("shrink-0 text-sm font-medium text-header-foreground", className)}
      {...props}
    />
  )
}
AppHeaderTitle.displayName = "AppHeaderTitle"

/**
 * AppHeaderSearchbar — Flex-1 layout slot for search input groups.
 * Compose with AppButtonGroup + AppInput + AppButton inside.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHeaderSearchbar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-1 items-center", className)}
      {...props}
    />
  )
}
AppHeaderSearchbar.displayName = "AppHeaderSearchbar"

/**
 * AppHeaderActions — Right-side slot for header controls.
 * Default composition: AppSelect + AppAvatar. Additional children can be freely inserted.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHeaderActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ml-auto flex items-center gap-2", className)}
      {...props}
    />
  )
}
AppHeaderActions.displayName = "AppHeaderActions"

export {
  AppHeader,
  AppHeaderContent,
  AppHeaderTitle,
  AppHeaderSearchbar,
  AppHeaderActions,
}
