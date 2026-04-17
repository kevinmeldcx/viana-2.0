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
| `headerActions` | `ReactNode` | Network select + bento + avatar | Right-side header slot. Pass `null` to render nothing. |
| `headerSearchbar` | `ReactNode` | Standard search input | Searchbar slot. Pass `null` to suppress entirely. |
| `sidebarWidth` | `string` | `"14rem"` | Overrides the `--sidebar-width` CSS variable. |
| `headerHeight` | `string` | `"3.5rem"` | Overrides the `--header-height` CSS variable. |
| `mainClassName` | `string` | `"p-6"` | Extra classes on the main content area. |
| `children` | `ReactNode` | required | Your page content. |

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

`AppDashboardBackground` always renders in `.dark` mode. Colors resolve from the dark theme:

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
- **Don't** add `bg-*`, `dark`, or `border-*` to anything wrapping `AppDashboard`.
- **Don't** import `AppDashboardContent`, `AppDashboardMain`, `AppSidebarProvider`, `AppHeader`, etc. to rebuild the scaffold yourself.
- **Don't** hardcode color values — all colors come from CSS variables in `globals.css`.

If a prop you need is missing, stop and inform the design team.
