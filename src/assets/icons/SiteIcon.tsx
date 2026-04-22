import type { SVGProps } from "react"

export function SiteIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12.5599 20.8207C12.2247 21.0598 11.7753 21.0598 11.4401 20.8207C6.61138 17.3773 1.48557 10.2971 6.6667 5.18128C8.08118 3.78463 9.99963 3 12 3C14.0004 3 15.9188 3.78463 17.3333 5.18128C22.5144 10.2971 17.3886 17.3773 12.5599 20.8207Z" fill="url(#paint0_linear_8260_14630)" fillOpacity="0.6"/>
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="white" fillOpacity="0.3" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_8260_14630" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#50A5FF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#50A5FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
