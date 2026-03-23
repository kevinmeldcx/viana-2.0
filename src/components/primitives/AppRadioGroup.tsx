"use client"

import { cn } from "../../lib/utils"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type AppRadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroup>

function AppRadioGroup({ className, ...props }: AppRadioGroupProps) {
  return <RadioGroup className={cn("rounded-md", className)} {...props} />
}

function AppRadioGroupItem(props: React.ComponentPropsWithoutRef<typeof RadioGroupItem>) {
  return <RadioGroupItem {...props} />
}

export { AppRadioGroup, AppRadioGroupItem }