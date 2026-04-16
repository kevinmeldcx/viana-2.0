import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * AppButtonGroup — A layout helper for grouping buttons together.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppButtonGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0 [&>*_input]:rounded-none [&>*:first-child_input]:rounded-l-md [&>*:last-child_input]:rounded-r-md",
        className
      )}
      {...props}
    />
  )
}
AppButtonGroup.displayName = "AppButtonGroup"

export { AppButtonGroup }
