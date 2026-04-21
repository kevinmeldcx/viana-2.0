"use client";

import { AppDashboard } from "@/components/blocks/AppDashboard";
import { AppButton } from "@/components/primitives/AppButton";
import { AppInput } from "@/components/primitives/AppInput";
import { AppSeparator } from "@/components/primitives/AppSeparator";
import { AppText } from "@/components/primitives/AppText";
import { HeroCard } from "@/components/blocks/HeroCard";
import {
  LayoutDashboard,
  MapPin,
  Server,
  Cpu,
  Scan,
  FileText,
  Download,
} from "lucide-react";

import imgRectangle1 from "@/assets/images/rectangle1.svg";
import imgDriveThru1 from "@/assets/images/drive-thru1.png";
import imgPersistentIcon from "@/assets/images/persistent-icon.png";

function Img({
  src,
  alt,
  name,
  className,
}: {
  src?: string;
  alt: string;
  name: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`bg-muted border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground ${className ?? ""}`}
        title={`[missing asset: ${name}]`}
      >
        {name}
      </div>
    );
  }
  return <img alt={alt} className={className} src={src} />;
}

const nav = [
  {
    items: [{ title: "Dashboards", icon: LayoutDashboard, isActive: true }],
  },
  {
    label: "Manage",
    items: [
      { title: "Site", icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensor", icon: Cpu },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: Scan },
      { title: "Manifest", icon: FileText },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download }],
  },
];

export default function DashboardPage() {
  return (
    <AppDashboard
      nav={nav}
      pageTitle={false}
    >
      <div className="flex gap-6 flex-1">
        {/* Main content */}
        <div className="flex flex-col flex-1 space-y-8">
          {/* Page Title */}
          <div className="flex items-center gap-4">
            <img
              src={imgPersistentIcon.src}
              alt="Dashboard icon"
              className="h-16 w-auto shrink-0"
            />
            <div className="flex flex-col gap-1">
              <AppText variant="muted">Dashboard</AppText>
              <AppText variant="h1" className="text-primary">Hi Kevin! Welcome to Viana</AppText>
              <AppText variant="muted">Stay up to date to everything in your network</AppText>
            </div>
          </div>

          {/* Your Operations at a Glance */}
          <div className="flex items-center justify-between">
            <div>
              <AppText variant="h3">Your Operations at a Glance</AppText>
              <AppText variant="muted">As of 31 May, 6:00 PM</AppText>
            </div>
            <AppButton variant="outline">Customize Dashboard</AppButton>
          </div>

          {/* Ask questions about your dashboard data */}
          <div className="bg-muted border border-border rounded-2xl p-6 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="h-[15px] relative shrink-0 w-[16px]">
                <Img src={imgRectangle1.src} alt="icon" name="rectangle1" className="absolute block inset-0 max-w-none size-full" />
              </div>
              <AppText variant="small" className="font-semibold text-primary">
                Ask questions about your dashboard data and get instant insights.
              </AppText>
            </div>
            <AppInput
              placeholder="Ask about today's data, trends, or status"
              className="w-full bg-input"
            />
          </div>

          {/* Hero Cards */}
          <div className="flex flex-col gap-7">
            {/* Customer Flow and Space Engagement */}
            <HeroCard property1="Variant 1" />

            {/* Drive Thru Performance */}
            <div className="flex flex-col gap-[10px] items-start relative w-full">
              <div className="bg-card content-stretch flex h-[268px] items-start overflow-clip relative rounded-lg shadow-sm shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-6 items-start min-w-px overflow-clip p-9 relative" data-name="Dialog">
                  <div className="content-stretch flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-muted-foreground w-full" data-name="Header">
                    <p className="font-semibold leading-6 relative shrink-0 text-base w-full">
                      DRIVE THRU PERFORMANCE
                    </p>
                    <p className="leading-5 relative shrink-0 text-sm w-full">
                      Description here
                    </p>
                  </div>
                  <div className="content-stretch flex gap-12 items-start relative shrink-0 w-full">
                    <div className="flex-[1_0_0] gap-6 grid grid-cols-2 grid-rows-2 h-[122px] min-w-px not-italic relative whitespace-nowrap">
                      <div className="col-1 content-stretch flex flex-col gap-px items-start justify-self-stretch relative row-1 self-start shrink-0">
                        <p className="leading-8 relative shrink-0 text-primary text-2xl">39.9 sec</p>
                        <p className="leading-4 relative shrink-0 text-muted-foreground text-xs">AVG SERVICE TIME</p>
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-px items-start justify-self-stretch relative row-1 self-start shrink-0">
                        <p className="leading-8 relative shrink-0 text-primary text-2xl">Luxury Sedan</p>
                        <p className="leading-4 relative shrink-0 text-muted-foreground text-xs">TOP VEHICLE CLASS AND TYPE</p>
                      </div>
                      <div className="col-1 content-stretch flex flex-col gap-px items-start justify-self-stretch relative row-2 self-start shrink-0">
                        <p className="leading-8 relative shrink-0 text-primary text-2xl">1488</p>
                        <p className="leading-4 relative shrink-0 text-muted-foreground text-xs">TOTAL SERVED</p>
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-px items-start justify-self-stretch relative row-2 self-start shrink-0">
                        <p className="leading-8 relative shrink-0 text-primary text-2xl">87.8 sec</p>
                        <p className="leading-4 relative shrink-0 text-muted-foreground text-xs">LONGEST JOURNEY TIME</p>
                      </div>
                    </div>
                    <AppSeparator orientation="vertical" className="bg-border self-stretch shrink-0 w-px" />
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0">
                      <p className="leading-5 not-italic relative shrink-0 text-muted-foreground text-sm whitespace-nowrap">
                        See more data
                      </p>
                      <AppButton variant="link">Retail Engagement Dashboard</AppButton>
                      <AppButton variant="link">People Counting</AppButton>
                      <AppButton variant="link">Zone Engagement</AppButton>
                    </div>
                  </div>
                </div>
                <div className="h-[268px] relative shrink-0 w-[344px]">
                  <div className="absolute left-0 size-[393px] top-[-44px]" data-name="drive-thru 1">
                    <Img src={imgDriveThru1.src} alt="Drive thru" name="drive-thru1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Network Overview */}
            <HeroCard property1="Variant 2" />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-8 shrink-0">
          <div>
            <AppText variant="h4" className="text-muted-foreground">Quick Tasks</AppText>
            <div className="flex flex-col space-y-2 mt-2">
              <AppButton variant="link" className="justify-start">Manage Floor Plan</AppButton>
              <AppButton variant="link" className="justify-start">Manage Sensors</AppButton>
              <AppButton variant="link" className="justify-start">Manage Shelves</AppButton>
              <AppButton variant="link" className="justify-start">Manage Planograms</AppButton>
            </div>
          </div>

          <div>
            <AppText variant="h4" className="text-muted-foreground">Add New Components</AppText>
            <div className="flex flex-col space-y-2 mt-2">
              <AppButton variant="link" className="justify-start">+ Add Site</AppButton>
              <AppButton variant="link" className="justify-start">+ Add Device</AppButton>
              <AppButton variant="link" className="justify-start">+ Add Sensor</AppButton>
            </div>
          </div>

          <div>
            <AppText variant="h4" className="text-muted-foreground">Other Shortcuts</AppText>
            <div className="flex flex-col space-y-2 mt-2">
              <AppButton variant="link" className="justify-start">Open Retail Engagement Dashboard</AppButton>
            </div>
          </div>
        </div>
      </div>
    </AppDashboard>
  );
}
