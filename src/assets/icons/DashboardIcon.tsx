import type { SVGProps } from "react"

export function DashboardIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="21" y="5" width="14" height="18" rx="1" transform="rotate(90 21 5)" fill="url(#paint0_linear_8260_14597)" fillOpacity="0.6"/>
      <rect x="13" y="17" width="2" height="3" rx="1" transform="rotate(-180 13 17)" fill="url(#paint1_linear_8260_14597)"/>
      <rect x="16" y="17" width="2" height="5" rx="1" transform="rotate(-180 16 17)" fill="url(#paint2_linear_8260_14597)"/>
      <rect x="19" y="17" width="2" height="7" rx="1" transform="rotate(-180 19 17)" fill="url(#paint3_linear_8260_14597)"/>
      <path d="M8 10H11C11 11.6569 9.65685 13 8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7V10Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_8260_14597" x1="20.6316" y1="14" x2="39.9781" y2="11.8958" gradientUnits="userSpaceOnUse">
          <stop stopColor="#50A5FF" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#50A5FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_8260_14597" x1="13" y1="19.8125" x2="13.3008" y2="17.0054" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#E3ECFB"/>
        </linearGradient>
        <linearGradient id="paint2_linear_8260_14597" x1="16" y1="21.6875" x2="16.8189" y2="17.1016" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#E3ECFB"/>
        </linearGradient>
        <linearGradient id="paint3_linear_8260_14597" x1="19" y1="23.5625" x2="20.5588" y2="17.3272" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="#E3ECFB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
