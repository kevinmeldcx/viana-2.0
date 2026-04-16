"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * AppDashboardBackground — Animated gradient dot pattern with mouse-follow glow.
 * Renders as an absolute-positioned layer behind all dashboard content.
 * Uses the dashboard blue brand palette visible through a hexagonal dot grid.
 * A radial glow tracks the cursor with lerp-smoothed movement.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardBackground({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  interactive = true,
  className,
  ...props
}: {
  dotSize?: number
  spacing?: number
  duration?: number
  interactive?: boolean
} & React.ComponentProps<typeof motion.div>) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const cursorRef = React.useRef({ x: 0, y: 0 })
  const targetRef = React.useRef({ x: 0, y: 0 })
  const glowRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number>(0)

  React.useEffect(() => {
    if (!interactive) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const animate = () => {
      const cur = cursorRef.current
      const tg = targetRef.current
      cur.x += (tg.x - cur.x) / 20
      cur.y += (tg.y - cur.y) / 20

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cur.x - 300}px, ${cur.y - 300}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    container.addEventListener("mousemove", handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [interactive])

  const hexSpacing = spacing * 1.732
  const bg = "oklch(0.1697 0.0844 272.5400)"

  return (
    <motion.div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundColor: bg,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, oklch(0.3118 0.1196 260.76), transparent 60%),
          radial-gradient(circle at 50% 50%, oklch(0.2795 0.0910 267.94), transparent 60%),
          radial-gradient(circle at 50% 50%, oklch(0.2077 0.0657 258.32), transparent 60%),
          radial-gradient(ellipse at 50% 50%, oklch(0.3118 0.1196 260.76), transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      }}
      {...props}
    >
      {interactive && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute h-[600px] w-[600px] rounded-full opacity-30 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5461 0.2152 262.88), oklch(0.3118 0.1196 260.76), transparent 70%)",
          }}
        />
      )}
    </motion.div>
  )
}
AppDashboardBackground.displayName = "AppDashboardBackground"

/**
 * AppDashboard — Full-page layout shell with an animated gradient dot background.
 * Composes AppSidebarProvider > AppSidebar + AppDashboardContent > AppHeader + AppDashboardMain.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full bg-linear-to-br from-dashboard-gradient-from via-dashboard-gradient-via to-dashboard-gradient-to",
        className
      )}
      {...props}
    >
      <AppDashboardBackground />
      {children}
    </div>
  )
}
AppDashboard.displayName = "AppDashboard"

/**
 * AppDashboardContent — The main column next to the sidebar.
 * Wraps the header and main content area.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  )
}
AppDashboardContent.displayName = "AppDashboardContent"

/**
 * AppDashboardMain — The primary content area with a rounded top-left corner.
 * Sits below the header inside AppDashboardContent.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardMain({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        "flex-1 rounded-tl-3xl bg-background shadow-2xl",
        className
      )}
      {...props}
    />
  )
}
AppDashboardMain.displayName = "AppDashboardMain"

export {
  AppDashboard,
  AppDashboardBackground,
  AppDashboardContent,
  AppDashboardMain,
}
