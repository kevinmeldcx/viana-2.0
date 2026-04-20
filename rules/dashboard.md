# AppDashboard

> **Single entry point** — Use this for every page. Do not compose the scaffold manually.

## Import

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nav` | `AppDashboardNavSection[]` | required | Sidebar navigation. Each section renders a group with an optional label. |
| `headerActions` | `ReactNode` | Network select + bento + theme toggle + avatar | Right-side header slot. Pass `null` to render nothing. |
| `headerSearchbar` | `ReactNode` | Standard search input | Searchbar slot. Pass `null` to suppress entirely. |
| `sidebarWidth` | `string` | `"14rem"` | Overrides the `--sidebar-width` CSS variable. |
| `headerHeight` | `string` | `"3.5rem"` | Overrides the `--header-height` CSS variable. |
| `mainClassName` | `string` | `"p-6"` | Extra classes on the main content area. |
| `backgroundTheme` | `"dark" \| "light"` | `"dark"` | Locks the sidebar, header, and background to a fixed mode regardless of the page's theme toggle. |
| `children` | `ReactNode` | required | Your page content. |

## Background theme

The `backgroundTheme` prop locks the sidebar, header, and background to a fixed mode. The main content area still responds to the page's theme toggle independently.

```tsx
// Dark background, light or dark content (default)
<AppDashboard nav={nav} backgroundTheme="dark">
  <PageContent />
</AppDashboard>

// Light background, light or dark content
<AppDashboard nav={nav} backgroundTheme="light">
  <PageContent />
</AppDashboard>
```

This is a one-time decision per app — set it once in your root layout and leave it.

## AppThemeProvider requirement

The theme toggle in the default header actions requires `AppThemeProvider` in the app tree. Wrap your root layout:

```tsx
import { AppThemeProvider } from "@/components/primitives/AppThemeProvider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}
```

Without `AppThemeProvider`, the toggle renders but is a no-op.

### AppDashboardNavSection

```ts
type AppDashboardNavSection = {
  label?: string
  items: AppDashboardNavItem[]
}
```

### AppDashboardNavItem

```ts
type AppDashboardNavItem = {
  title: string          // label and tooltip text
  icon: React.ElementType  // lucide-react icon component
  isActive?: boolean     // marks the current route
}
```

## Usage

### Minimal

```tsx
import { LayoutDashboard } from "lucide-react"
import { AppDashboard } from "@/components/blocks/AppDashboard"

const nav = [
  { items: [{ title: "Dashboard", icon: LayoutDashboard, isActive: true }] },
]

export default function Page() {
  return (
    <AppDashboard nav={nav}>
      <p>Page content here.</p>
    </AppDashboard>
  )
}
```

### Custom header actions

```tsx
<AppDashboard nav={nav} headerActions={<AppAvatar className="size-8"><AppAvatarFallback>KA</AppAvatarFallback></AppAvatar>}>
  <PageContent />
</AppDashboard>
```

### No searchbar

```tsx
<AppDashboard nav={nav} headerSearchbar={null}>
  <PageContent />
</AppDashboard>
```

### Full-bleed content area

```tsx
<AppDashboard nav={nav} mainClassName="p-0">
  <FullBleedContent />
</AppDashboard>
```

## AppDashboardBackground color tokens

`AppDashboardBackground` renders in the mode set by `backgroundTheme` (dark by default). Colors resolve from whichever theme class is active on the element:

| Role | Token | Usage |
|------|-------|-------|
| Background | `--card` → `--secondary` | `bg-gradient-to-br from-card to-secondary` |
| Wave lines | `--accent` | Canvas `strokeStyle`, read via `getComputedStyle` at mount |
| Mouse glow core | `--primary` | 50% opacity, blurred 100px |
| Mouse glow mid ring | `--muted` | 10% opacity, blurred 100px |
| Mouse glow overlay | `--sidebar-primary` | 20% opacity, `mix-blend-mode: screen`, blurred 100px |

## Rules

- **Do** use `AppDashboard` as the layout for every page — do not compose the scaffold manually.
- **Do** set `isActive` on exactly one nav item per page.
- **Do** pass icons as `React.ElementType` (the component itself, not `<Icon />`).
- **Don't** add `bg-*`, `dark`, or `border-*` to anything wrapping `AppDashboard`. Use `backgroundTheme` to control background theming instead.
- **Don't** import `AppDashboardContent`, `AppDashboardMain`, `AppSidebarProvider`, `AppHeader`, etc. to rebuild the scaffold yourself.
- **Don't** hardcode color values — all colors come from CSS variables in `globals.css`.

If a prop you need is missing, stop and inform the design team.
