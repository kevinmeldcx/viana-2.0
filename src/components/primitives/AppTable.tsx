// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppTable` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"

function AppTable({ className, ...props }: React.ComponentProps<typeof Table>) {
  return <Table className={cn("rounded-md", className)} {...props} />
}

function AppTableHeader({ className, ...props }: React.ComponentProps<typeof TableHeader>) {
  return <TableHeader className={cn("rounded-md", className)} {...props} />
}

function AppTableBody({ className, ...props }: React.ComponentProps<typeof TableBody>) {
  return <TableBody className={cn("rounded-md", className)} {...props} />
}

function AppTableFooter({ className, ...props }: React.ComponentProps<typeof TableFooter>) {
  return <TableFooter className={cn("rounded-md", className)} {...props} />
}

function AppTableHead({ className, ...props }: React.ComponentProps<typeof TableHead>) {
  return <TableHead className={cn("rounded-md", className)} {...props} />
}

function AppTableRow({ className, ...props }: React.ComponentProps<typeof TableRow>) {
  return <TableRow className={cn("rounded-md", className)} {...props} />
}

function AppTableCell({ className, ...props }: React.ComponentProps<typeof TableCell>) {
  return <TableCell className={cn("rounded-md", className)} {...props} />
}

function AppTableCaption({ className, ...props }: React.ComponentProps<typeof TableCaption>) {
  return <TableCaption className={cn("rounded-md", className)} {...props} />
}

export { AppTable, AppTableHeader, AppTableBody, AppTableFooter, AppTableHead, AppTableRow, AppTableCell, AppTableCaption }
