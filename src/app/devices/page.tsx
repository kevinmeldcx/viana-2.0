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
import { DevicesTable } from "@/components/blocks/DevicesTable"

const nav = [
  {
    items: [{ title: "Dashboard", icon: DashboardNavIcon, href: "/dashboard" }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: SiteNavIcon, href: "/sites" },
      { title: "Devices", icon: DevicesNavIcon, href: "/devices", isActive: true },
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

const DEVICES_LOCATION_TREE: TreeNode[] = [
  {
    label: "All",
    count: 65,
    children: [
      {
        label: "Philippines",
        count: 65,
        children: [
          {
            label: "Davao City Davao",
            count: 1,
            children: [{ label: "Davao City", count: 1 }],
          },
          {
            label: "Misamis Oriental",
            count: 64,
            children: [{ label: "Cagayan de Oro", count: 64 }],
          },
        ],
      },
    ],
  },
]

export default function DevicesPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <AppDashboard
      nav={nav}
      pageTitle={{
        title: "Manage Devices",
        subtitle: "Manage all your devices in one place.",
        breadcrumbs: [{ label: "Devices" }],
        actions: (
          <AppButton>
            <Plus className="size-4" />
            Add Device
          </AppButton>
        ),
      }}
    >
      <div className="flex gap-6 flex-1 min-w-0">
        <AppLocationTreeFilter
          data={DEVICES_LOCATION_TREE}
          showHelp
          searchPlaceholder="Search for a country, state, or..."
          unallocated={{ label: "Unallocated Devices", count: 135 }}
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <DevicesTable selectedLocation={selectedLocation} />
      </div>
    </AppDashboard>
  )
}
