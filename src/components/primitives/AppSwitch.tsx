"use client"

import { cn } from "../../lib/utils"
import { Switch } from "../ui/switch"

type AppSwitchProps = React.ComponentPropsWithoutRef<typeof Switch>

function AppSwitch({ className, ...props }: AppSwitchProps) {
  return <Switch className={cn("rounded-md", className)} {...props} />
}

export { AppSwitch }