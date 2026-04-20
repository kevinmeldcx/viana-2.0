"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  AppBreadcrumb,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from "@/components/primitives/AppBreadcrumb"

// ─── Types ────────────────────────────────────────────────────────────────────

export type AppPageTitleBreadcrumb = {
  label: string
  /** Omit for the last (current-page) segment. */
  href?: string
}

export type AppPageTitleProps = {
  /**
   * Page heading rendered as an <h1>.
   * Auto-derived from the last pathname segment when omitted.
   */
  title?: string
  /** Optional description rendered below the heading. */
  subtitle?: string
  /**
   * Breadcrumb trail. Auto-generated from window.location.pathname when omitted.
   * Pass an explicit array to override.
   */
  breadcrumbs?: AppPageTitleBreadcrumb[]
  /**
   * Right-side action slot. Accepts any ReactNode — buttons, selects, text, etc.
   * Renders nothing by default.
   */
  actions?: React.ReactNode
  /** Hides the entire block when true. */
  hidden?: boolean
  className?: string
}

// ─── Breadcrumb auto-generator ────────────────────────────────────────────────

function parseBreadcrumbs(pathname: string): AppPageTitleBreadcrumb[] {
  const segments = pathname.split("/").filter(Boolean)
  return segments.map((segment, i) => {
    const label = segment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    const isLast = i === segments.length - 1
    return {
      label,
      href: isLast ? undefined : "/" + segments.slice(0, i + 1).join("/"),
    }
  })
}

// ─── AppPageTitle ─────────────────────────────────────────────────────────────

/**
 * AppPageTitle — Standard page header block used across most pages.
 *
 * Renders a breadcrumb trail (auto-generated from the current pathname when not
 * provided), an <h1> title, an optional subtitle, and a right-side action slot
 * that is empty by default.
 *
 * Used inside AppDashboard via the `pageTitle` prop. Can also be composed
 * directly for custom layouts.
 *
 * @example
 * ```tsx
 * // Via AppDashboard (recommended)
 * <AppDashboard
 *   nav={nav}
 *   pageTitle={{ title: "Site", subtitle: "Stay up to date to everything in your network" }}
 * >
 *   <PageContent />
 * </AppDashboard>
 *
 * // With actions
 * <AppDashboard
 *   nav={nav}
 *   pageTitle={{
 *     title: "Site",
 *     subtitle: "Stay up to date to everything in your network",
 *     actions: <AppButton>+ Add Site</AppButton>,
 *   }}
 * >
 *   <PageContent />
 * </AppDashboard>
 *
 * // Hidden (title block suppressed)
 * <AppDashboard nav={nav} pageTitle={false}>
 *   <PageContent />
 * </AppDashboard>
 * ```
 *
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPageTitle({
  title,
  subtitle,
  breadcrumbs,
  actions,
  hidden = false,
  className,
}: AppPageTitleProps) {
  const [autoCrumbs, setAutoCrumbs] = React.useState<AppPageTitleBreadcrumb[]>([])
  const [autoTitle, setAutoTitle] = React.useState("")

  React.useEffect(() => {
    if (breadcrumbs === undefined || title === undefined) {
      const parsed = parseBreadcrumbs(window.location.pathname)
      if (breadcrumbs === undefined) setAutoCrumbs(parsed)
      if (title === undefined) setAutoTitle(parsed[parsed.length - 1]?.label ?? "")
    }
  }, [breadcrumbs, title])

  if (hidden) return null

  const crumbs = breadcrumbs ?? autoCrumbs
  const heading = title ?? autoTitle

  return (
    <div className={cn("mb-6 flex items-start justify-between gap-4", className)}>
      <div className="space-y-1 min-w-0">
        {crumbs.length > 0 && (
          <AppBreadcrumb>
            <AppBreadcrumbList>
              {crumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <AppBreadcrumbItem>
                    {crumb.href ? (
                      <AppBreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </AppBreadcrumbLink>
                    ) : (
                      <AppBreadcrumbPage>{crumb.label}</AppBreadcrumbPage>
                    )}
                  </AppBreadcrumbItem>
                  {i < crumbs.length - 1 && <AppBreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </AppBreadcrumbList>
          </AppBreadcrumb>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {heading}
        </h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
AppPageTitle.displayName = "AppPageTitle"

export { AppPageTitle }
