"use client"

import { cn } from "../../lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

function AppSelect({ children, ...props }: React.ComponentProps<typeof Select>) {
  return <Select {...props}>{children}</Select>
}

function AppSelectTrigger({ className, ...props }: React.ComponentPropsWithoutRef<typeof SelectTrigger>) {
  return <SelectTrigger className={cn("rounded-md", className)} {...props} />
}

function AppSelectValue(props: React.ComponentPropsWithoutRef<typeof SelectValue>) {
  return <SelectValue {...props} />
}

function AppSelectContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof SelectContent>) {
  return <SelectContent className={cn("rounded-md", className)} {...props} />
}

function AppSelectItem({ ...props }: React.ComponentPropsWithoutRef<typeof SelectItem>) {
  return <SelectItem {...props} />
}

function AppSelectLabel({ ...props }: React.ComponentPropsWithoutRef<typeof SelectLabel>) {
  return <SelectLabel {...props} />
}

export { AppSelect, AppSelectTrigger, AppSelectValue, AppSelectContent, AppSelectItem, AppSelectLabel }
