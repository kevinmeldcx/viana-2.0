// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update card` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

function AppCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return <Card className={cn("rounded-md", className)} {...props} />
}

function AppCardHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />
}

function AppCardTitle(props: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle {...props} />
}

function AppCardDescription(
  props: React.ComponentProps<typeof CardDescription>
) {
  return <CardDescription {...props} />
}

function AppCardAction(props: React.ComponentProps<typeof CardAction>) {
  return <CardAction {...props} />
}

function AppCardContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />
}

function AppCardFooter(props: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter {...props} />
}

export {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
}
