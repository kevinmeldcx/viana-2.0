"use client";

import { AppSeparator } from "@/components/primitives/AppSeparator";
import { AppButton } from "@/components/primitives/AppButton";

import { Check, User, MapPin, Webcam, Server } from "lucide-react";
import imgLoneV1 from "@/assets/logos/primary_symbol.svg";
import imgDashboard1 from "@/assets/images/dashboard1.png";
import imgInput from "@/assets/images/input.png";
import imgAppletPeopleCounting from "@/assets/Service-applets-apps/People Counting.png";
import imgAppletZoneEngagement from "@/assets/Service-applets-apps/viana-service-applets-zone engagement 1.png";
import imgAppletAudienceMeasurement from "@/assets/Service-applets-apps/Anonymous Audience Measurement.png";

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

type HeroCardProps = {
  className?: string;
  property1: "Variant 1" | "Variant 2";
};

export function HeroCard({ className, property1 }: HeroCardProps) {
  const isVariant1 = property1 === "Variant 1";
  const isVariant2 = property1 === "Variant 2";

  return (
    <div className={className ?? "flex flex-col gap-[10px] items-start relative w-full"}>
      <div
        className={[
          "content-stretch flex items-start overflow-clip relative rounded-lg shadow-sm shrink-0 w-full",
          isVariant2 ? "bg-card h-[268px]" : "bg-card h-[268px]",
        ].join(" ")}
      >
        <div className="bg-card content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/6,24px)] items-start min-w-px overflow-clip p-[var(--spacing\/9,36px)] relative" data-name="Dialog">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/1-5,6px)] items-start justify-center not-italic relative shrink-0 text-muted-foreground tracking-[var(--font\/letter-spacing\/normal,0px)] w-full" data-name="Header">
            <p className="font-semibold leading-[var(--font\/line-height\/6,24px)] relative shrink-0 text-base w-full">
              {isVariant1 ? "CUSTOMER FLOW AND SPACE ENGAGEMENT" : "NETWORK OVERVIEW"}
            </p>
            {isVariant2 && (
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="7381:18004">
                <Check className="size-4 shrink-0 text-primary" />
                <p className="leading-[var(--font\/line-height\/5,20px)] not-italic relative shrink-0 text-muted-foreground text-sm tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17903">
                  Your sites are configured properly and running as expected.
                </p>
              </div>
            )}
          </div>
          <div className={`content-stretch flex gap-[var(--spacing\/12,48px)] relative shrink-0 w-full ${isVariant2 ? "items-center" : "items-start"}`} id={isVariant2 ? "node-7376_17904" : "node-7376_17533"}>
            <div className={`relative ${isVariant2 ? "flex flex-col gap-2 items-start flex-[1_0_0] min-w-px" : "flex-[1_0_0] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[122px] min-w-px"}`} id={isVariant2 ? "node-7381_18040" : "node-7376_17534"}>
              {isVariant1 && (
                <>
                  <div className="col-1 content-stretch flex flex-col gap-[var(--spacing\/px,1px)] items-start justify-self-stretch not-italic relative row-1 self-start shrink-0 tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17535">
                    <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7376:17536">
                      1378
                    </p>
                    <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7376:17537">
                      TOTAL VISITORS
                    </p>
                  </div>
                  <div className="col-2 content-stretch flex flex-col gap-[var(--spacing\/px,1px)] items-start justify-self-stretch not-italic relative row-1 self-start shrink-0 tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17538">
                    <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7376:17539">
                      Discovery
                    </p>
                    <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7376:17540">
                      BEST PERFORMING ZONE
                    </p>
                  </div>
                  <div className="col-1 content-stretch flex flex-col gap-[var(--spacing\/px,1px)] items-start justify-self-stretch relative row-2 self-start shrink-0" data-node-id="7376:17541">
                    <div className="content-stretch flex gap-[var(--spacing\/2,8px)] items-center relative shrink-0" data-node-id="7376:17542">
                      <User className="size-6 shrink-0 text-primary" />
                      <p className="leading-[var(--font\/line-height\/8,32px)] not-italic relative shrink-0 text-primary text-2xl tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17544">
                        Male Adult
                      </p>
                    </div>
                    <p className="leading-[var(--font\/line-height\/4,16px)] not-italic relative shrink-0 text-muted-foreground text-xs tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17545">
                      TOP AUDIENCE
                    </p>
                  </div>
                </>
              )}
              {isVariant2 && (
                <>
                  <p className="leading-[var(--font\/line-height\/4,16px)] not-italic relative shrink-0 text-muted-foreground text-xs tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7381:18038">
                    OVERVIEW
                  </p>
                  <div className="grid grid-cols-3 gap-6 relative shrink-0" data-node-id="7376:17905">
                    <div className="col-1 content-stretch flex gap-[var(--spacing\/px,1px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="7376:17906">
                      <div className="content-stretch flex items-center pt-[var(--spacing\/1,4px)] relative shrink-0" data-node-id="7412:6581">
                        <MapPin className="size-6 shrink-0 text-primary" />
                      </div>
                      <div className="content-stretch flex flex-col gap-px items-start not-italic relative shrink-0 tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7381:18010">
                        <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7376:17907">
                          149
                        </p>
                        <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7376:17908">
                          SITES
                        </p>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex gap-[var(--spacing\/px,1px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="7381:18011">
                      <div className="content-stretch flex items-center pt-[var(--spacing\/1,4px)] relative shrink-0" data-node-id="7412:6590">
                        <Server className="size-6 shrink-0 text-primary" />
                      </div>
                      <div className="content-stretch flex flex-col gap-px items-start not-italic relative shrink-0 tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7381:18013">
                        <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7381:18014">
                          149
                        </p>
                        <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7381:18015">
                          DEVICES
                        </p>
                      </div>
                    </div>
                    <div className="col-3 content-stretch flex gap-[var(--spacing\/px,1px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="7381:18029">
                      <div className="content-stretch flex items-center pt-[var(--spacing\/1,4px)] relative shrink-0" data-node-id="7412:6601">
                        <Webcam className="size-6 shrink-0 text-primary" />
                      </div>
                      <div className="content-stretch flex flex-col gap-px items-start not-italic relative shrink-0 tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7381:18031">
                        <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7381:18032">
                          149
                        </p>
                        <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7381:18033">
                          SENSORS
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {isVariant1 && <AppSeparator orientation="vertical" className="bg-border self-stretch shrink-0 w-px" />}
            <div className={`flex ${isVariant2 ? "flex-row items-center self-stretch" : "content-stretch flex-col gap-[var(--spacing\/2,8px)] items-start relative shrink-0"}`} id={isVariant1 ? "node-7376_17547" : undefined}>
              {isVariant1 && (
                <>
                  <p className="leading-[var(--font\/line-height\/5,20px)] not-italic relative shrink-0 text-muted-foreground text-sm tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap px-2.5" data-node-id="7376:17548">
                    See more data
                  </p>
                  <AppButton variant="link">
                    Retail Engagement Dashboard
                  </AppButton>
                  <AppButton variant="link">
                    People Counting
                  </AppButton>
                  <AppButton variant="link">
                    Zone Engagement
                  </AppButton>
                </>
              )}
            </div>
            {isVariant2 && (
              <div className="flex flex-[1_0_0] flex-col gap-2 items-start min-w-px" data-node-id="7376:17918">
                <p className="leading-4 text-muted-foreground text-xs" data-node-id="7381:17991">
                  LICENSES
                </p>
                <div className="flex gap-6 items-start" data-node-id="7381:18005">
                  <div className="flex flex-col gap-px" data-node-id="7381:17993">
                    <p className="leading-8 text-primary text-2xl" data-node-id="7381:17994">
                      55
                    </p>
                    <p className="leading-4 text-muted-foreground text-xs" data-node-id="7381:17995">
                      AVAILABLE
                    </p>
                  </div>
                  <div className="flex flex-col gap-px" data-node-id="7381:17997">
                    <p className="leading-8 text-primary text-2xl" data-node-id="7381:17998">
                      201
                    </p>
                    <p className="leading-4 text-muted-foreground text-xs" data-node-id="7381:17999">
                      IN USE
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`h-[268px] relative shrink-0 w-[344px] ${isVariant1 ? "overflow-clip" : "flex items-center justify-center p-6"}`} id={isVariant2 ? "node-7376_17923" : "node-7376_17552"}>
          {isVariant1 && (
            <div className="absolute right-[-59px] size-[409px] top-[-70px]" data-node-id="7376:17553" data-name="dashboard 1">
              <Img alt="Dashboard" name="dashboard1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDashboard1.src} />
            </div>
          )}
          {isVariant2 && (
            <Img alt="License" name="input" className="w-full h-auto object-contain rounded-lg shadow-sm" src={imgInput.src} />
          )}
        </div>
      </div>
      <div className="absolute content-stretch flex items-center gap-[var(--spacing\/2,8px)] inset-[-5.91%_87.62%_93.97%_2.82%]" id={isVariant2 ? "node-7376_17925" : "node-7376_17554"}>
        {isVariant1 && (
          <>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17555" data-name="service-applet">
              <Img alt="People Counting" name="people-counting" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppletPeopleCounting.src} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17556" data-name="service-applet">
              <Img alt="Zone Engagement" name="zone-engagement" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppletZoneEngagement.src} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17557" data-name="service-applet">
              <Img alt="Audience Measurement" name="audience-measurement" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppletAudienceMeasurement.src} />
            </div>
          </>
        )}
        {isVariant2 && (
          <div className="relative shrink-0 size-[32px]" data-node-id="7376:17926" data-name="Viana logo_blue">
            <div className="absolute inset-[0_4.29%_0.23%_4.29%] overflow-clip" data-node-id="I7376:17926;20470:4024" data-name="Lone V 1">
              <Img alt="Viana logo" name="lone-v1" className="absolute block inset-0 max-w-none size-full" src={imgLoneV1.src} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
