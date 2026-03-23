"use client"

import { cn } from "../../lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

function AppSheet({ children, ...props }: React.ComponentProps<typeof Sheet>) {
  return <Sheet {...props}>{children}</Sheet>
}

function AppSheetTrigger({ children }: { children: React.ReactNode }) {
  return <SheetTrigger>{children}</SheetTrigger>
}

function AppSheetContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof SheetContent>) {
  return <SheetContent className={cn("rounded-md", className)} {...props}>{children}</SheetContent>
}

function AppSheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <SheetHeader className={cn("rounded-md", className)} {...props} />
}

function AppSheetTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetTitle>) {
  return <SheetTitle className={cn("rounded-md", className)} {...props} />
}

function AppSheetDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetDescription>) {
  return <SheetDescription className={cn("rounded-md", className)} {...props} />
}

export { AppSheet, AppSheetTrigger, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetDescription }
