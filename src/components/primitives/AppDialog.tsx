"use client"

import { cn } from "../../lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

type AppDialogProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function AppDialog({ children, ...props }: AppDialogProps) {
  return <Dialog {...props}>{children}</Dialog>
}

function AppDialogTrigger({ children }: { children: React.ReactNode }) {
  return <DialogTrigger>{children}</DialogTrigger>
}

function AppDialogContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof DialogContent>) {
  return <DialogContent className={cn("rounded-md", className)} {...props}>{children}</DialogContent>
}

function AppDialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <DialogHeader className={cn("rounded-md", className)} {...props} />
}

function AppDialogTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogTitle>) {
  return <DialogTitle className={cn("rounded-md", className)} {...props} />
}

function AppDialogDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogDescription>) {
  return <DialogDescription className={cn("rounded-md", className)} {...props} />
}

export {
  AppDialog,
  AppDialogTrigger,
  AppDialogContent,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogDescription,
}