"use client";

import { AppSeparator } from "@/components/primitives/AppSeparator";
import { AppButton } from "@/components/primitives/AppButton";

import imgVector from "@/assets/images/vector.svg";
import imgVector1 from "@/assets/images/vector1.svg";
import imgVector2 from "@/assets/images/vector2.svg";
import imgVector3 from "@/assets/images/vector3.svg";
import imgVector4 from "@/assets/images/vector4.svg";
import imgVector5 from "@/assets/images/vector5.svg";
import imgVector6 from "@/assets/images/vector6.svg";
import imgVector7 from "@/assets/images/vector7.svg";
import imgLoneV1 from "@/assets/images/lone-v1.svg";
import imgDashboard1 from "@/assets/images/dashboard1.png";
import imgInput from "@/assets/images/input.png";
import imgServiceApplet from "@/assets/images/service-applet.png";
import imgServiceApplet1 from "@/assets/images/service-applet1.png";
import imgPeopleCounting from "@/assets/images/people-counting.svg";
import imgPeopleCounting1 from "@/assets/images/people-counting1.png";

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
          isVariant2 ? "bg-background h-[219px]" : "bg-card h-[268px]",
        ].join(" ")}
      >
        <div className="bg-card content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/6,24px)] items-start min-w-px overflow-clip p-[var(--spacing\/9,36px)] relative" data-name="Dialog">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/1-5,6px)] items-start justify-center not-italic relative shrink-0 text-muted-foreground tracking-[var(--font\/letter-spacing\/normal,0px)] w-full" data-name="Header">
            <p className="font-semibold leading-[var(--font\/line-height\/6,24px)] relative shrink-0 text-base w-full">
              {isVariant1 ? "CUSTOMER FLOW AND SPACE ENGAGEMENT" : "NETWORK OVERVIEW"}
            </p>
            {isVariant2 && (
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="7381:18004">
                <div className="relative shrink-0 size-[16px]" data-node-id="7381:18001" data-name="li:check">
                  <div className="absolute inset-0 overflow-clip" data-node-id="I7381:18001;6604:6667" data-name="li:check">
                    <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[20.83%]" data-node-id="I7381:18001;6604:6667;402:34011" data-name="Vector">
                      <Img alt="" name="vector2" className="absolute block inset-0 max-w-none size-full" src={imgVector2.src} />
                    </div>
                  </div>
                </div>
                <p className="leading-[var(--font\/line-height\/5,20px)] not-italic relative shrink-0 text-muted-foreground text-sm tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17903">
                  Your sites are configured properly and running as expected.
                </p>
              </div>
            )}
          </div>
          <div className={`content-stretch flex gap-[var(--spacing\/12,48px)] relative shrink-0 w-full ${isVariant2 ? "items-center" : "items-start"}`} id={isVariant2 ? "node-7376_17904" : "node-7376_17533"}>
            <div className={`relative ${isVariant2 ? "content-stretch flex flex-col gap-[var(--spacing\/2,8px)] items-start justify-center shrink-0" : "flex-[1_0_0] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[122px] min-w-px"}`} id={isVariant2 ? "node-7381_18040" : "node-7376_17534"}>
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
                      <div className="relative shrink-0 size-[24px]" data-node-id="7376:17543" data-name="li:user">
                        <div className="absolute inset-0 overflow-clip" data-node-id="I7376:17543;6604:13510" data-name="li:user">
                          <div className="absolute inset-[58.33%_16.67%_8.33%_16.67%]" data-node-id="I7376:17543;6604:13510;402:38512" data-name="Vector">
                            <Img alt="" name="vector" className="absolute block inset-0 max-w-none size-full" src={imgVector.src} />
                          </div>
                          <div className="absolute bottom-1/2 left-[29.17%] right-[29.17%] top-[8.33%]" data-node-id="I7376:17543;6604:13510;402:38513" data-name="Vector">
                            <Img alt="" name="vector1" className="absolute block inset-0 max-w-none size-full" src={imgVector1.src} />
                          </div>
                        </div>
                      </div>
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
                    LICENSES
                  </p>
                  <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[49px] relative shrink-0 w-[469px]" data-node-id="7376:17905">
                    <div className="col-1 content-stretch flex gap-[var(--spacing\/px,1px)] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="7376:17906">
                      <div className="content-stretch flex items-center pt-[var(--spacing\/1,4px)] relative shrink-0" data-node-id="7412:6581">
                        <div className="relative shrink-0 size-[24px]" data-node-id="7381:18006" data-name="li:map-pin">
                          <div className="absolute inset-0 overflow-clip" data-node-id="I7381:18006;6604:10011" data-name="li:map-pin">
                            <div className="absolute inset-[4.17%_12.5%]" data-node-id="I7381:18006;6604:10011;402:36205" data-name="Vector">
                              <Img alt="" name="vector3" className="absolute block inset-0 max-w-none size-full" src={imgVector3.src} />
                            </div>
                            <div className="absolute bottom-[41.67%] left-[33.33%] right-[33.33%] top-1/4" data-node-id="I7381:18006;6604:10011;402:36206" data-name="Vector">
                              <Img alt="" name="vector4" className="absolute block inset-0 max-w-none size-full" src={imgVector4.src} />
                            </div>
                          </div>
                        </div>
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
                        <div className="relative shrink-0 size-[24px]" data-node-id="7381:18012" data-name="li:webcam">
                          <div className="absolute inset-0 overflow-clip" data-node-id="I7381:18012;6604:13726" data-name="li:webcam">
                            <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]" data-node-id="I7381:18012;6604:13726;402:38658" data-name="Vector">
                              <Img alt="" name="vector5" className="absolute block inset-0 max-w-none size-full" src={imgVector5.src} />
                            </div>
                            <div className="absolute bottom-[41.67%] left-[33.33%] right-[33.33%] top-1/4" data-node-id="I7381:18012;6604:13726;402:38659" data-name="Vector">
                              <Img alt="" name="vector4" className="absolute block inset-0 max-w-none size-full" src={imgVector4.src} />
                            </div>
                            <div className="absolute bottom-[4.17%] left-1/4 right-1/4 top-[87.5%]" data-node-id="I7381:18012;6604:13726;402:38660" data-name="Vector">
                              <Img alt="" name="vector6" className="absolute block inset-0 max-w-none size-full" src={imgVector6.src} />
                            </div>
                            <div className="absolute inset-[70.83%_45.83%_4.17%_45.83%]" data-node-id="I7381:18012;6604:13726;402:38661" data-name="Vector">
                              <Img alt="" name="vector7" className="absolute block inset-0 max-w-none size-full" src={imgVector7.src} />
                            </div>
                          </div>
                        </div>
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
                        <div className="relative shrink-0 size-[24px]" data-node-id="7381:18030" data-name="li:webcam">
                          <div className="absolute inset-0 overflow-clip" data-node-id="I7381:18030;6604:13726" data-name="li:webcam">
                            <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]" data-node-id="I7381:18030;6604:13726;402:38658" data-name="Vector">
                              <Img alt="" name="vector5" className="absolute block inset-0 max-w-none size-full" src={imgVector5.src} />
                            </div>
                            <div className="absolute bottom-[41.67%] left-[33.33%] right-[33.33%] top-1/4" data-node-id="I7381:18030;6604:13726;402:38659" data-name="Vector">
                              <Img alt="" name="vector4" className="absolute block inset-0 max-w-none size-full" src={imgVector4.src} />
                            </div>
                            <div className="absolute bottom-[4.17%] left-1/4 right-1/4 top-[87.5%]" data-node-id="I7381:18030;6604:13726;402:38660" data-name="Vector">
                              <Img alt="" name="vector6" className="absolute block inset-0 max-w-none size-full" src={imgVector6.src} />
                            </div>
                            <div className="absolute inset-[70.83%_45.83%_4.17%_45.83%]" data-node-id="I7381:18030;6604:13726;402:38661" data-name="Vector">
                              <Img alt="" name="vector7" className="absolute block inset-0 max-w-none size-full" src={imgVector7.src} />
                            </div>
                          </div>
                        </div>
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
                  <p className="leading-[var(--font\/line-height\/5,20px)] not-italic relative shrink-0 text-muted-foreground text-sm tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17548">
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
              {isVariant2 && <AppSeparator orientation="vertical" className="bg-border h-full shrink-0 w-px" />}
            </div>
            {isVariant2 && (
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/2,8px)] items-start min-w-px not-italic relative tracking-[var(--font\/letter-spacing\/normal,0px)] whitespace-nowrap" data-node-id="7376:17918">
                <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7381:17991">
                  LICENSES
                </p>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="7381:18005">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/px,1px)] items-start min-w-px relative" data-node-id="7381:17993">
                    <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7381:17994">
                      55
                    </p>
                    <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7381:17995">
                      AVAILABLE
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing\/px,1px)] items-start min-w-px relative" data-node-id="7381:17997">
                    <p className="leading-[var(--font\/line-height\/8,32px)] relative shrink-0 text-primary text-2xl" data-node-id="7381:17998">
                      201
                    </p>
                    <p className="leading-[var(--font\/line-height\/4,16px)] relative shrink-0 text-muted-foreground text-xs" data-node-id="7381:17999">
                      IN USE
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`relative ${isVariant2 ? "content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px px-[var(--spacing\/12,48px)]" : "h-[268px] overflow-clip shrink-0 w-[344px]"}`} id={isVariant2 ? "node-7376_17923" : "node-7376_17552"}>
          {isVariant1 && (
            <div className="absolute right-[-59px] size-[409px] top-[-70px]" data-node-id="7376:17553" data-name="dashboard 1">
              <Img alt="Dashboard" name="dashboard1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDashboard1.src} />
            </div>
          )}
          {isVariant2 && (
            <div className="h-[136px] relative shrink-0 w-[268px]" data-node-id="7381:18246" data-name="License">
              <div className="absolute inset-0 shadow-sm" data-node-id="I7381:18246;7381:18239" data-name="Input">
                <Img alt="License" name="input" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInput.src} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`absolute content-stretch flex items-center ${isVariant2 ? "-translate-x-1/2 -translate-y-1/2 gap-0 left-[calc(50%-533.5px)] top-[calc(50%-109.74px)]" : "gap-[var(--spacing\/2,8px)] inset-[-5.91%_87.62%_93.97%_2.82%]"}`} id={isVariant2 ? "node-7376_17925" : "node-7376_17554"}>
        {isVariant1 && (
          <>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17555" data-name="service-applet">
              <Img alt="Service applet" name="service-applet" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServiceApplet.src} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17556" data-name="service-applet">
              <div
                className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]"
                data-node-id="I7376:17556;17460:4374"
                style={{ maskImage: `url('${imgPeopleCounting.src}')` }}
                data-name="People Counting"
              >
                <Img alt="People counting" name="people-counting1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPeopleCounting1.src} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="7376:17557" data-name="service-applet">
              <Img alt="Service applet" name="service-applet1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgServiceApplet1.src} />
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
