// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppNavigationMenu` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

function AppNavigationMenu({ className, ...props }: React.ComponentProps<typeof NavigationMenu>) {
  return <NavigationMenu className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuList>) {
  return <NavigationMenuList className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuItem>) {
  return <NavigationMenuItem className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuTrigger({ className, ...props }: React.ComponentProps<typeof NavigationMenuTrigger>) {
  return <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), className)} {...props} />
}

function AppNavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuContent>) {
  return <NavigationMenuContent className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuLink>) {
  return <NavigationMenuLink className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuIndicator({ className, ...props }: React.ComponentProps<typeof NavigationMenuIndicator>) {
  return <NavigationMenuIndicator className={cn("rounded-md", className)} {...props} />
}

function AppNavigationMenuViewport({ className, ...props }: React.ComponentProps<typeof NavigationMenuViewport>) {
  return <NavigationMenuViewport className={cn("rounded-md", className)} {...props} />
}

export {
  AppNavigationMenu,
  AppNavigationMenuList,
  AppNavigationMenuItem,
  AppNavigationMenuTrigger,
  AppNavigationMenuContent,
  AppNavigationMenuLink,
  AppNavigationMenuIndicator,
  AppNavigationMenuViewport,
  navigationMenuTriggerStyle,
}
