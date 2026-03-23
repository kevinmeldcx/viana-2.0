"use client"

import { cn } from "../../lib/utils"
import { Textarea } from "../ui/textarea"

type AppTextareaProps = React.ComponentPropsWithoutRef<typeof Textarea>

function AppTextarea({ className, ...props }: AppTextareaProps) {
  return <Textarea className={cn("rounded-md bg-input", className)} {...props} />
}

export { AppTextarea }