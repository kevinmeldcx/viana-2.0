"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import {
  DashboardNavIcon,
  SiteNavIcon,
  DevicesNavIcon,
  SensorNavIcon,
  XrayNavIcon,
  ManifestNavIcon,
  InstallerNavIcon,
} from "@/components/blocks/NavIcons"
import { AppDashboard } from "@/components/blocks/AppDashboard"
import { AppButton } from "@/components/primitives/AppButton"
import { AppLocationTreeFilter, type TreeNode } from "@/components/blocks/AppLocationTreeFilter"
import { SitesTable } from "@/components/blocks/SitesTable"

const nav = [
  {
    items: [{ title: "Dashboard", icon: DashboardNavIcon, href: "/dashboard" }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: SiteNavIcon, href: "/sites", isActive: true },
      { title: "Devices", icon: DevicesNavIcon, href: "/devices" },
      { title: "Sensors", icon: SensorNavIcon, href: "/sensors" },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: XrayNavIcon, href: "/xray" },
      { title: "Manifest", icon: ManifestNavIcon, href: "/manifest" },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: InstallerNavIcon, href: "/installers" }],
  },
]

const SITES_LOCATION_TREE: TreeNode[] = [
  {
    label: "All",
    count: 73,
    children: [
      { label: "Australia", count: 6 },
      { label: "China", count: 1 },
      { label: "Germany", count: 1 },
      { label: "Kiribati", count: 1 },
      { label: "Philippines", count: 58 },
      { label: "South Africa", count: 1 },
      { label: "United States", count: 1 },
      { label: "United States of America", count: 4 },
    ],
  },
]

export default function SitesPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <AppDashboard
      nav={nav}
      pageTitle={{
        title: "Manage Sites",
        subtitle: "Manage all your sites in one place.",
        breadcrumbs: [{ label: "Sites" }],
        actions: (
          <AppButton>
            <Plus className="size-4" />
            New Site
          </AppButton>
        ),
      }}
    >
      <div className="flex gap-6 flex-1 min-w-0">
        <AppLocationTreeFilter
          data={SITES_LOCATION_TREE}
          showHelp
          searchPlaceholder="Search for a country, state, or..."
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <SitesTable selectedLocation={selectedLocation} />
      </div>
    </AppDashboard>
  )
}
