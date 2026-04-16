"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * AppDashboardBackground — Animated gradient dot pattern with mouse-follow glow.
 * Renders as an absolute-positioned layer behind all dashboard content.
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
  const hasEnteredRef = React.useRef(false)

  React.useEffect(() => {
    if (!interactive) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height

      if (isInside) {
        if (!hasEnteredRef.current) {
          hasEnteredRef.current = true
          cursorRef.current = { x, y }
          if (glowRef.current) glowRef.current.style.opacity = "1"
        }
        targetRef.current = { x, y }
      } else if (hasEnteredRef.current) {
        hasEnteredRef.current = false
        if (glowRef.current) glowRef.current.style.opacity = "0"
      }
    }

    const animate = () => {
      const cur = cursorRef.current
      const tg = targetRef.current
      cur.x += (tg.x - cur.x) / 8
      cur.y += (tg.y - cur.y) / 8
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cur.x}px, ${cur.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [interactive])

  const hexSpacing = spacing * 1.732
  const bg = "var(--card)"

  return (
    <motion.div
      ref={containerRef}
      className={cn("dark absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundColor: bg,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${bg} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, var(--muted), transparent 60%),
          radial-gradient(circle at 50% 50%, var(--secondary), transparent 60%),
          radial-gradient(circle at 50% 50%, var(--background), transparent 60%),
          radial-gradient(ellipse at 50% 50%, var(--muted), transparent 60%)
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
          className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 600,
            height: 600,
            opacity: 0,
            transition: "opacity 0.4s ease",
            willChange: "transform",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 50%, transparent) 0%, color-mix(in oklch, var(--muted) 10%, transparent) 30%, transparent 90%)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklch, var(--sidebar-primary) 20%, transparent) 0%, transparent 50%)",
              filter: "blur(100px)",
            }}
          />
        </div>
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
        "relative flex min-h-svh w-full",
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
