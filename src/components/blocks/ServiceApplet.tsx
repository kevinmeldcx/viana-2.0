"use client";

import imgServiceApplet from "@/assets/images/service-applet.png";
import imgPeopleCounting from "@/assets/images/people-counting.svg";
import imgServiceAppletZoneEngagement from "@/assets/images/service-applet-zone-engagement.png";
import imgServiceAppletShelfEngagement from "@/assets/images/service-applet-shelf-engagement.png";
import imgPeopleCounting1 from "@/assets/images/people-counting1.png"; // Used for imgPeopleCounting

type ServiceAppletProps = {
  className?: string;
  serviceApplet?: "SAMi for Environments" | "Zone Engagement" | "Shelf Engagement";
};

export function ServiceApplet({ className, serviceApplet = "SAMi for Environments" }: ServiceAppletProps) {
  const isShelfEngagement = serviceApplet === "Shelf Engagement";
  const isZoneEngagement = serviceApplet === "Zone Engagement";
  return (
    <div className={className || "overflow-clip relative size-[32px]"} id={isShelfEngagement ? "node-7376_17492" : isZoneEngagement ? "node-7376_17491" : "node-7376_17484"}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={isShelfEngagement ? imgServiceAppletShelfEngagement.src : isZoneEngagement ? imgServiceAppletZoneEngagement.src : imgServiceApplet.src} />
    </div>
  );
}