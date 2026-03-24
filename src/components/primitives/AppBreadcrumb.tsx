// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppBreadcrumb` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"

function AppBreadcrumb({ className, ...props }: React.ComponentProps<typeof Breadcrumb>) {
  return <Breadcrumb className={cn("rounded-md", className)} {...props} />
}

function AppBreadcrumbList({ className, ...props }: React.ComponentProps<typeof BreadcrumbList>) {
  return <BreadcrumbList className={cn("rounded-md", className)} {...props} />
}

function AppBreadcrumbItem({ className, ...props }: React.ComponentProps<typeof BreadcrumbItem>) {
  return <BreadcrumbItem className={cn("rounded-md", className)} {...props} />
}

function AppBreadcrumbLink({ className, asChild, ...props }: React.ComponentProps<typeof BreadcrumbLink> & { asChild?: boolean }) {
  return <BreadcrumbLink className={cn("rounded-md", className)} asChild={asChild} {...props} />
}

function AppBreadcrumbPage({ className, ...props }: React.ComponentProps<typeof BreadcrumbPage>) {
  return <BreadcrumbPage className={cn("rounded-md", className)} {...props} />
}

function AppBreadcrumbSeparator({ className, ...props }: React.ComponentProps<typeof BreadcrumbSeparator>) {
  return <BreadcrumbSeparator className={cn("rounded-md", className)} {...props} />
}

function AppBreadcrumbEllipsis({ className, ...props }: React.ComponentProps<typeof BreadcrumbEllipsis>) {
  return <BreadcrumbEllipsis className={cn("rounded-md", className)} {...props} />
}

export {
  AppBreadcrumb,
  AppBreadcrumbList,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
  AppBreadcrumbEllipsis,
}
