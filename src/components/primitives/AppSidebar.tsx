"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { WhiteLogo, WhiteSymbol } from "../../assets/logos"
import {
  DashboardIcon,
  DashboardActiveIcon,
  SiteIcon,
  SiteActiveIcon,
  DevicesIcon,
  DevicesActiveIcon,
  SensorIcon,
  SensorActiveIcon,
  XrayIcon,
  XrayActiveIcon,
  ManifestIcon,
  ManifestActiveIcon,
  InstallerIcon,
  InstallerActiveIcon,
} from "../../assets/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar"

// ─── AppSidebarBrand ─────────────────────────────────────────────────────────

export type AppSidebarBrandDropdownItem =
  | { separator: true }
  | {
      separator?: false
      label: string
      onClick?: () => void
      icon?: React.ReactNode
      disabled?: boolean
    }

export type AppSidebarBrandProps = {
  logo?: string | React.ReactNode
  collapsedLogo?: React.ReactNode
  dropdown?: AppSidebarBrandDropdownItem[]
  showChevron?: boolean
  className?: string
}

function AppSidebarBrand({
  logo = <WhiteLogo width={90} height={28} />,
  collapsedLogo = <WhiteSymbol width={24} height={24} />,
  dropdown,
  showChevron = true,
  className,
}: AppSidebarBrandProps) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const inner = (
    <div className="relative flex w-full items-center justify-center py-1">
      {isCollapsed ? (
        <span className="[filter:var(--logo-filter,invert(1))]">{collapsedLogo}</span>
      ) : typeof logo === "string" ? (
        <span className="text-sm font-semibold text-foreground">{logo}</span>
      ) : (
        <span className="[filter:var(--logo-filter,invert(1))]">{logo}</span>
      )}
      {!isCollapsed && dropdown && showChevron && (
        <ChevronDown className="absolute right-0 size-4 shrink-0 text-muted-foreground" />
      )}
    </div>
  )

  if (!dropdown || isCollapsed) {
    return (
      <div className={cn("flex items-center px-2", className)}>
        {inner}
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex w-full items-center rounded-md px-2 outline-none",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            "focus-visible:ring-2 focus-visible:ring-sidebar-ring",
            className
          )}
        >
          {inner}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="min-w-(--radix-dropdown-menu-trigger-width)"
      >
        {dropdown.map((item, i) => {
          if ("separator" in item && item.separator) {
            return <DropdownMenuSeparator key={i} />
          }
          const { label, onClick, icon, disabled } = item as Exclude<
            AppSidebarBrandDropdownItem,
            { separator: true }
          >
          return (
            <DropdownMenuItem key={i} disabled={disabled} onClick={onClick}>
              {icon && <span className="mr-2 flex items-center">{icon}</span>}
              {label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// ─── AppSidebarNavIcon ────────────────────────────────────────────────────────

type AppSidebarNavIconProps = {
  icon: React.ReactNode
  activeIcon: React.ReactNode
}

function AppSidebarNavIcon({ icon, activeIcon }: AppSidebarNavIconProps) {
  return (
    <>
      <span className="group-data-[active=true]/menu-button:hidden">{icon}</span>
      <span className="hidden group-data-[active=true]/menu-button:block">{activeIcon}</span>
    </>
  )
}

// ─── Internal nav-icon wrappers ───────────────────────────────────────────────

function DashboardNavIcon() {
  return <AppSidebarNavIcon icon={<DashboardIcon />} activeIcon={<DashboardActiveIcon />} />
}

function SiteNavIcon() {
  return <AppSidebarNavIcon icon={<SiteIcon />} activeIcon={<SiteActiveIcon />} />
}

function DevicesNavIcon() {
  return <AppSidebarNavIcon icon={<DevicesIcon />} activeIcon={<DevicesActiveIcon />} />
}

function SensorNavIcon() {
  return <AppSidebarNavIcon icon={<SensorIcon />} activeIcon={<SensorActiveIcon />} />
}

function XrayNavIcon() {
  return <AppSidebarNavIcon icon={<XrayIcon />} activeIcon={<XrayActiveIcon />} />
}

function ManifestNavIcon() {
  return <AppSidebarNavIcon icon={<ManifestIcon />} activeIcon={<ManifestActiveIcon />} />
}

function InstallerNavIcon() {
  return <AppSidebarNavIcon icon={<InstallerIcon />} activeIcon={<InstallerActiveIcon />} />
}

// ─── DEFAULT_NAV ──────────────────────────────────────────────────────────────

export type AppSidebarDefaultNavItem = {
  title: string
  icon: React.ElementType
  isActive?: boolean
  href?: string
}

export type AppSidebarDefaultNavSection = {
  label?: string
  items: AppSidebarDefaultNavItem[]
}

export const DEFAULT_NAV: AppSidebarDefaultNavSection[] = [
  {
    items: [
      { title: "Dashboards", icon: DashboardNavIcon, isActive: false, href: "#" },
    ],
  },
  {
    label: "MANAGE",
    items: [
      { title: "Site", icon: SiteNavIcon, isActive: false, href: "#" },
      { title: "Devices", icon: DevicesNavIcon, isActive: false, href: "#" },
      { title: "Sensor", icon: SensorNavIcon, isActive: false, href: "#" },
    ],
  },
  {
    label: "INSIGHTS",
    items: [
      { title: "X-ray", icon: XrayNavIcon, isActive: false, href: "#" },
      { title: "Manifest", icon: ManifestNavIcon, isActive: false, href: "#" },
    ],
  },
  {
    label: "DOWNLOADS",
    items: [
      { title: "Installers", icon: InstallerNavIcon, isActive: false, href: "#" },
    ],
  },
]

// ─── Passthrough wrappers ─────────────────────────────────────────────────────

function AppSidebarProvider(props: React.ComponentProps<typeof SidebarProvider>) {
  return <SidebarProvider {...props} />
}

function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className={cn("group-data-[side=left]:border-r-0 bg-sidebar/0 [&_[data-slot=sidebar-inner]]:bg-sidebar/0", className)}
      {...props}
    />
  )
}

function AppSidebarTrigger(props: React.ComponentProps<typeof SidebarTrigger>) {
  return <SidebarTrigger {...props} />
}

function AppSidebarRail(props: React.ComponentProps<typeof SidebarRail>) {
  return <SidebarRail {...props} />
}

function AppSidebarInset(props: React.ComponentProps<typeof SidebarInset>) {
  return <SidebarInset {...props} />
}

function AppSidebarInput(props: React.ComponentProps<typeof SidebarInput>) {
  return <SidebarInput {...props} />
}

function AppSidebarHeader(props: React.ComponentProps<typeof SidebarHeader>) {
  return <SidebarHeader {...props} />
}

function AppSidebarFooter(props: React.ComponentProps<typeof SidebarFooter>) {
  return <SidebarFooter {...props} />
}

function AppSidebarSeparator(props: React.ComponentProps<typeof SidebarSeparator>) {
  return <SidebarSeparator {...props} />
}

function AppSidebarContent(props: React.ComponentProps<typeof SidebarContent>) {
  return <SidebarContent {...props} />
}

function AppSidebarGroup(props: React.ComponentProps<typeof SidebarGroup>) {
  return <SidebarGroup {...props} />
}

function AppSidebarGroupLabel(props: React.ComponentProps<typeof SidebarGroupLabel>) {
  return <SidebarGroupLabel {...props} />
}

function AppSidebarGroupAction(props: React.ComponentProps<typeof SidebarGroupAction>) {
  return <SidebarGroupAction {...props} />
}

function AppSidebarGroupContent(props: React.ComponentProps<typeof SidebarGroupContent>) {
  return <SidebarGroupContent {...props} />
}

function AppSidebarMenu(props: React.ComponentProps<typeof SidebarMenu>) {
  return <SidebarMenu {...props} />
}

function AppSidebarMenuItem(props: React.ComponentProps<typeof SidebarMenuItem>) {
  return <SidebarMenuItem {...props} />
}

function AppSidebarMenuButton({ className, ...props }: React.ComponentProps<typeof SidebarMenuButton>) {
  return (
    <SidebarMenuButton
      className={cn(
        // Remove fill on hover and CSS :active
        "hover:bg-transparent hover:text-sidebar-foreground",
        "active:bg-transparent active:text-sidebar-foreground",
        // data-active: matches ALL buttons (attribute present even when "false") — reset to transparent
        "data-active:bg-transparent data-active:font-normal data-active:text-sidebar-foreground",
        // Re-apply accent only when explicitly true — use primary color for active state
        "data-[active=true]:bg-primary data-[active=true]:font-medium data-[active=true]:text-primary-foreground",
        // Slightly larger icons and font than the shadcn default
        "[&_svg]:size-5",
        "text-base",
        className
      )}
      {...props}
    />
  )
}

function AppSidebarMenuAction(props: React.ComponentProps<typeof SidebarMenuAction>) {
  return <SidebarMenuAction {...props} />
}

function AppSidebarMenuBadge(props: React.ComponentProps<typeof SidebarMenuBadge>) {
  return <SidebarMenuBadge {...props} />
}

function AppSidebarMenuSkeleton(props: React.ComponentProps<typeof SidebarMenuSkeleton>) {
  return <SidebarMenuSkeleton {...props} />
}

function AppSidebarMenuSub(props: React.ComponentProps<typeof SidebarMenuSub>) {
  return <SidebarMenuSub {...props} />
}

function AppSidebarMenuSubItem(props: React.ComponentProps<typeof SidebarMenuSubItem>) {
  return <SidebarMenuSubItem {...props} />
}

function AppSidebarMenuSubButton(props: React.ComponentProps<typeof SidebarMenuSubButton>) {
  return <SidebarMenuSubButton {...props} />
}

export {
  AppSidebar,
  AppSidebarBrand,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarGroup,
  AppSidebarGroupAction,
  AppSidebarGroupContent,
  AppSidebarGroupLabel,
  AppSidebarHeader,
  AppSidebarInput,
  AppSidebarInset,
  AppSidebarMenu,
  AppSidebarMenuAction,
  AppSidebarMenuBadge,
  AppSidebarMenuButton,
  AppSidebarMenuItem,
  AppSidebarMenuSkeleton,
  AppSidebarMenuSub,
  AppSidebarMenuSubButton,
  AppSidebarMenuSubItem,
  AppSidebarProvider,
  AppSidebarRail,
  AppSidebarSeparator,
  AppSidebarTrigger,
  useSidebar,
}
