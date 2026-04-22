"use client";

import { AppSeparator } from "@/components/primitives/AppSeparator";
import { AppButton } from "@/components/primitives/AppButton";
import imgDriveThru1 from "@/assets/images/drive-thru1.png";

export function DriveThruCard() {
  return (
    <div className="bg-card flex h-[268px] items-start overflow-clip relative rounded-lg shadow-sm w-full">
      <div className="flex flex-[1_0_0] flex-col gap-6 items-start min-w-px overflow-clip p-9">
        <div className="flex flex-col gap-1.5 items-start text-muted-foreground w-full">
          <p className="font-semibold leading-6 text-base w-full">DRIVE THRU PERFORMANCE</p>
          <p className="leading-5 text-sm w-full">Description here</p>
        </div>
        <div className="flex gap-12 items-start w-full">
          <div className="flex-[1_0_0] grid grid-cols-2 grid-rows-2 gap-6 h-[122px] min-w-px">
            <div className="flex flex-col gap-px items-start self-start">
              <p className="leading-8 text-primary text-2xl">39.9 sec</p>
              <p className="leading-4 text-muted-foreground text-xs">AVG SERVICE TIME</p>
            </div>
            <div className="flex flex-col gap-px items-start self-start">
              <p className="leading-8 text-primary text-2xl">Luxury Sedan</p>
              <p className="leading-4 text-muted-foreground text-xs">TOP VEHICLE CLASS AND TYPE</p>
            </div>
            <div className="flex flex-col gap-px items-start self-start">
              <p className="leading-8 text-primary text-2xl">1488</p>
              <p className="leading-4 text-muted-foreground text-xs">TOTAL SERVED</p>
            </div>
            <div className="flex flex-col gap-px items-start self-start">
              <p className="leading-8 text-primary text-2xl">87.8 sec</p>
              <p className="leading-4 text-muted-foreground text-xs">LONGEST JOURNEY TIME</p>
            </div>
          </div>
          <AppSeparator orientation="vertical" className="bg-border self-stretch shrink-0 w-px" />
          <div className="flex flex-col gap-1 items-start shrink-0">
            <p className="leading-5 text-muted-foreground text-sm whitespace-nowrap px-2.5">See more data</p>
            <AppButton variant="link">Retail Engagement Dashboard</AppButton>
            <AppButton variant="link">People Counting</AppButton>
            <AppButton variant="link">Zone Engagement</AppButton>
          </div>
        </div>
      </div>
      <div className="h-[268px] relative shrink-0 w-[344px]">
        <div className="absolute left-0 size-[393px] top-[-44px]">
          <img
            src={imgDriveThru1.src}
            alt="Drive thru"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>
      </div>
    </div>
  );
}
