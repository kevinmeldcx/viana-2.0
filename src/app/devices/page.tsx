"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  MapPin,
  Server,
  Cpu,
  Bell,
  Scan,
  MessageSquare,
  FileText,
  Download,
  Plus,
} from "lucide-react"
import { AppDashboard } from "@/components/blocks/AppDashboard"
import { AppButton } from "@/components/primitives/AppButton"
import { DevicesLocationTree } from "@/components/blocks/DevicesLocationTree"
import { DevicesTable } from "@/components/blocks/DevicesTable"

const nav = [
  {
    items: [{ title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: MapPin, href: "/sites" },
      { title: "Devices", icon: Server, href: "/devices", isActive: true },
      { title: "Sensors", icon: Cpu, href: "/sensors" },
      { title: "Alerts", icon: Bell, href: "/alerts" },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: Scan, href: "/xray" },
      { title: "Ask Vi", icon: MessageSquare, href: "/ask-vi" },
      { title: "Manifest", icon: FileText, href: "/manifest" },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download, href: "/installers" }],
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
        <DevicesLocationTree
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <DevicesTable selectedLocation={selectedLocation} />
      </div>
    </AppDashboard>
  )
}
