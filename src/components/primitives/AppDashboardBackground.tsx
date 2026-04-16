"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const appDashboardBackgroundVariants = cva("absolute inset-0 overflow-hidden", {
  variants: {
    variant: {
      dots: "",
    },
  },
  defaultVariants: {
    variant: "dots",
  },
})

type AppDashboardBackgroundProps = {
  dotSize?: number
  spacing?: number
  duration?: number
  interactive?: boolean
} & VariantProps<typeof appDashboardBackgroundVariants> &
  React.ComponentProps<typeof motion.div>

/**
 * AppDashboardBackground — Animated background layer with multiple visual variants.
 * Renders as an absolute-positioned layer behind all dashboard content.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardBackground({
  variant,
  dotSize = 8,
  spacing = 10,
  duration = 30,
  interactive = true,
  className,
  ...props
}: AppDashboardBackgroundProps) {
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
  const bg = "var(--card)"

  return (
    <motion.div
      ref={containerRef}
      className={cn(appDashboardBackgroundVariants({ variant }), className)}
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
          className="pointer-events-none absolute h-[600px] w-[600px] rounded-full opacity-30 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, var(--primary), var(--muted), transparent 70%)",
          }}
        />
      )}
    </motion.div>
  )
}
AppDashboardBackground.displayName = "AppDashboardBackground"

export { AppDashboardBackground, appDashboardBackgroundVariants }
export type { AppDashboardBackgroundProps }
