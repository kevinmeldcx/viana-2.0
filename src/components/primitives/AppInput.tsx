import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"

/**
 * AppInput — the primary text input primitive for Viana Kit.
 *
 * @prop leftAdornment - Renders an icon or element inside the left edge of the input.
 *   Padding is adjusted automatically. Do not add padding or position it manually.
 * @prop rightAdornment - Renders an icon or element inside the right edge of the input.
 *   Padding is adjusted automatically. Do not add padding or position it manually.
 *
 * @note Never use a raw <input> element. Use AppInput.
 * @note Do not wrap AppInput in a relative div to position adornments — use these props instead.
 * @note If a prop you need is missing, stop and inform the design team.
 */
type AppInputProps = React.ComponentProps<typeof Input> & {
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode
}

function AppInput({ leftAdornment, rightAdornment, className, ...props }: AppInputProps) {
  if (!leftAdornment && !rightAdornment) {
    return <Input className={className} {...props} />
  }

  return (
    <div className="relative flex w-full items-center">
      {leftAdornment && (
        <span className="pointer-events-none absolute left-2.5 flex items-center text-muted-foreground">
          {leftAdornment}
        </span>
      )}
      <Input
        className={cn(
          leftAdornment && "pl-8",
          rightAdornment && "pr-8",
          className
        )}
        {...props}
      />
      {rightAdornment && (
        <span className="pointer-events-none absolute right-2.5 flex items-center text-muted-foreground">
          {rightAdornment}
        </span>
      )}
    </div>
  )
}

export { AppInput }
export type { AppInputProps }
