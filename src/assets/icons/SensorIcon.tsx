import type { SVGProps } from "react"

export function SensorIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2C16.4183 2 20 5.58172 20 10C20 14.0795 16.9462 17.4433 13 17.9355V23H11V17.9355C7.05384 17.4433 4 14.0795 4 10C4 5.58172 7.58172 2 12 2Z" fill="url(#paint0_linear_8260_14657)" fillOpacity="0.6"/>
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="white" fillOpacity="0.3" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="21" width="2" height="8" rx="1" transform="rotate(90 16 21)" fill="#DBEAFE"/>
      <defs>
        <linearGradient id="paint0_linear_8260_14657" x1="12" y1="2" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#50A5FF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#50A5FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
