"use client"

import { cn } from "../../lib/utils"
import { Progress } from "../ui/progress"

type AppProgressProps = React.ComponentPropsWithoutRef<typeof Progress>

function AppProgress({ className, ...props }: AppProgressProps) {
  return <Progress className={cn("rounded-md", className)} {...props} />
}

export { AppProgress }