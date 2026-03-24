// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppAccordion` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

function AppAccordion({ className, ...props }: React.ComponentProps<typeof Accordion>) {
  return <Accordion className={cn("rounded-md", className)} {...props} />
}

function AppAccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionItem>) {
  return <AccordionItem className={cn("rounded-md", className)} {...props} />
}

function AppAccordionTrigger({ className, ...props }: React.ComponentProps<typeof AccordionTrigger>) {
  return <AccordionTrigger className={cn("rounded-md", className)} {...props} />
}

function AppAccordionContent({ className, ...props }: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent className={cn("rounded-md", className)} {...props} />
}

export { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent }