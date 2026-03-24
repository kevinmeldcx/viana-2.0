// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppTabs` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

type AppTabsProps = React.ComponentProps<typeof Tabs>

function AppTabs({ className, ...props }: AppTabsProps) {
  return <Tabs className={cn("rounded-md", className)} {...props} />
}

function AppTabsList({ className, ...props }: React.ComponentProps<typeof TabsList>) {
  return <TabsList className={cn("rounded-md", className)} {...props} />
}

function AppTabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) {
  return <TabsTrigger className={cn("rounded-md", className)} {...props} />
}

function AppTabsContent({ className, ...props }: React.ComponentProps<typeof TabsContent>) {
  return <TabsContent className={cn("rounded-md", className)} {...props} />
}

export { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent }