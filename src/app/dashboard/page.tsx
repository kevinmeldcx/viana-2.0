"use client";

import { AppDashboard } from "@/components/blocks/AppDashboard";
import { AppButton } from "@/components/primitives/AppButton";
import { AppInput } from "@/components/primitives/AppInput";
import { AppText } from "@/components/primitives/AppText";
import { HeroCard } from "@/components/blocks/HeroCard";
import { DriveThruCard } from "@/components/blocks/DriveThruCard";
import { DashboardSidebar } from "@/components/blocks/DashboardSidebar";
import {
  DashboardNavIcon,
  SiteNavIcon,
  DevicesNavIcon,
  SensorNavIcon,
  XrayNavIcon,
  ManifestNavIcon,
  InstallerNavIcon,
} from "@/components/blocks/NavIcons";

import imgRectangle1 from "@/assets/images/rectangle1.svg";
import imgPersistentIcon from "@/assets/images/persistent-icon.png";

const nav = [
  {
    items: [{ title: "Dashboards", icon: DashboardNavIcon, href: "/dashboard", isActive: true }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: SiteNavIcon, href: "/sites" },
      { title: "Devices", icon: DevicesNavIcon },
      { title: "Sensors", icon: SensorNavIcon },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: XrayNavIcon },
      { title: "Manifest", icon: ManifestNavIcon },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: InstallerNavIcon }],
  },
];

export default function DashboardPage() {
  return (
    <AppDashboard
      nav={nav}
      pageTitle={{
        title: "Hi Kevin! Welcome to Viana",
        subtitle: "Stay up to date to everything in your network",
        breadcrumbs: [{ label: "Dashboard" }],
        titleColor: "primary",
        icon: (
          <img
            src={imgPersistentIcon.src}
            alt="Dashboard icon"
            className="size-16"
          />
        ),
      }}
    >
      <div className="flex gap-6 flex-1">
        <div className="flex flex-col flex-1 space-y-8">

          {/* Header row */}
          <div className="flex items-center justify-between animate-fade-in-up">
            <div>
              <AppText variant="h3">Your Operations at a Glance</AppText>
              <AppText variant="muted">As of 31 May, 6:00 PM</AppText>
            </div>
            <AppButton variant="outline">Customize Dashboard</AppButton>
          </div>

          {/* AI input */}
          <div className="bg-muted border border-border rounded-2xl p-6 space-y-2 animate-fade-in-up [animation-delay:0.1s]">
            <div className="flex items-center space-x-2">
              <img
                src={imgRectangle1.src}
                alt=""
                className="h-[15px] w-[16px] shrink-0"
              />
              <AppText variant="small" className="font-semibold text-primary">
                Ask questions about your dashboard data and get instant insights.
              </AppText>
            </div>
            <AppInput
              placeholder="Ask about today's data, trends, or status"
              className="w-full bg-input"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-7">
            <div className="animate-fade-in-up [animation-delay:0.2s]">
              <HeroCard property1="Variant 1" />
            </div>
            <div className="animate-fade-in-up [animation-delay:0.3s]">
              <DriveThruCard />
            </div>
            <div className="animate-fade-in-up [animation-delay:0.4s]">
              <HeroCard property1="Variant 2" />
            </div>
          </div>

        </div>

        <DashboardSidebar />
      </div>
    </AppDashboard>
  );
}
