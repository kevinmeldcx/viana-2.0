// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppCommand` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandDialog as CommandDialogBase,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command"

function AppCommand({ className, ...props }: React.ComponentProps<typeof Command>) {
  return <Command className={cn("rounded-md", className)} {...props} />
}

function AppCommandDialog(props: React.ComponentProps<typeof CommandDialogBase>) {
  return <CommandDialogBase {...props} />
}

function AppCommandInput({ className, ...props }: React.ComponentProps<typeof CommandInput>) {
  return <CommandInput className={cn("rounded-md", className)} {...props} />
}

function AppCommandList({ className, ...props }: React.ComponentProps<typeof CommandList>) {
  return <CommandList className={cn("rounded-md", className)} {...props} />
}

function AppCommandEmpty({ className, ...props }: React.ComponentProps<typeof CommandEmpty>) {
  return <CommandEmpty className={cn("rounded-md", className)} {...props} />
}

function AppCommandGroup({ className, ...props }: React.ComponentProps<typeof CommandGroup>) {
  return <CommandGroup className={cn("rounded-md", className)} {...props} />
}

function AppCommandItem({ className, ...props }: React.ComponentProps<typeof CommandItem>) {
  return <CommandItem className={cn("rounded-md", className)} {...props} />
}

function AppCommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <CommandShortcut className={cn("rounded-md", className)} {...props} />
}

function AppCommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandSeparator>) {
  return <CommandSeparator className={cn("rounded-md", className)} {...props} />
}

export {
  AppCommand,
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
  AppCommandShortcut,
  AppCommandSeparator,
}