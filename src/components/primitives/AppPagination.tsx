// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppPagination` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

function AppPagination({ className, ...props }: React.ComponentProps<typeof Pagination>) {
  return <Pagination className={cn("rounded-md", className)} {...props} />
}

function AppPaginationContent({ className, ...props }: React.ComponentProps<typeof PaginationContent>) {
  return <PaginationContent className={cn("rounded-md", className)} {...props} />
}

function AppPaginationItem({ className, ...props }: React.ComponentProps<typeof PaginationItem>) {
  return <PaginationItem className={cn("rounded-md", className)} {...props} />
}

function AppPaginationLink({ className, isActive, ...props }: React.ComponentProps<typeof PaginationLink> & { isActive?: boolean }) {
  return <PaginationLink className={cn("rounded-md", className)} isActive={isActive} {...props} />
}

function AppPaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationPrevious>) {
  return <PaginationPrevious className={cn("rounded-md", className)} {...props} />
}

function AppPaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationNext>) {
  return <PaginationNext className={cn("rounded-md", className)} {...props} />
}

function AppPaginationEllipsis({ className, ...props }: React.ComponentProps<typeof PaginationEllipsis>) {
  return <PaginationEllipsis className={cn("rounded-md", className)} {...props} />
}

export {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
}
