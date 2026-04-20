"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { AppButton } from "./AppButton"

// ─── Types ─────────────────────────────────────────────────────────────────────

export type AppTheme = "light" | "dark"

export type AppThemeContextValue = {
  theme: AppTheme
  toggle: () => void
}

// ─── Context ───────────────────────────────────────────────────────────────────

const AppThemeContext = React.createContext<AppThemeContextValue>({
  theme: "light",
  toggle: () => {},
})

// ─── AppThemeProvider ──────────────────────────────────────────────────────────

export type AppThemeProviderProps = {
  children: React.ReactNode
  /** localStorage key used to persist the theme preference. Default: "viana-theme" */
  storageKey?: string
  /** Theme to use when no stored preference exists. Default: "light" */
  defaultTheme?: AppTheme
}

/**
 * AppThemeProvider — Provides theme context and persists the user's light/dark
 * preference to localStorage. Toggles the `dark` class on `<html>`.
 *
 * Place this near the root of your app (e.g. in layout.tsx):
 * ```tsx
 * <AppThemeProvider>
 *   {children}
 * </AppThemeProvider>
 * ```
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppThemeProvider({
  children,
  storageKey = "viana-theme",
  defaultTheme = "light",
}: AppThemeProviderProps) {
  const [theme, setTheme] = React.useState<AppTheme>(defaultTheme)

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as AppTheme | null
    const resolved: AppTheme = stored === "dark" ? "dark" : "light"
    setTheme(resolved)
    document.documentElement.classList.toggle("dark", resolved === "dark")
  }, [storageKey])

  const toggle = React.useCallback(() => {
    setTheme((prev) => {
      const next: AppTheme = prev === "light" ? "dark" : "light"
      localStorage.setItem(storageKey, next)
      document.documentElement.classList.toggle("dark", next === "dark")
      return next
    })
  }, [storageKey])

  return (
    <AppThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </AppThemeContext.Provider>
  )
}
AppThemeProvider.displayName = "AppThemeProvider"

// ─── useAppTheme ───────────────────────────────────────────────────────────────

/**
 * useAppTheme — Returns the current theme and a toggle function.
 * Requires AppThemeProvider to be present in the tree.
 * Falls back to `{ theme: "light", toggle: () => {} }` if no provider is found.
 */
function useAppTheme(): AppThemeContextValue {
  return React.useContext(AppThemeContext)
}

// ─── AppThemeToggle ────────────────────────────────────────────────────────────

/**
 * AppThemeToggle — Ghost icon button that switches between Sun (light) and Moon (dark).
 * Requires AppThemeProvider to be present in the tree.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppThemeToggle({ ...props }: React.ComponentProps<typeof AppButton>) {
  const { theme, toggle } = useAppTheme()

  return (
    <AppButton
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      {...props}
    >
      {theme === "light" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </AppButton>
  )
}
AppThemeToggle.displayName = "AppThemeToggle"

export { AppThemeProvider, useAppTheme, AppThemeToggle }
