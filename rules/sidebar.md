# AppSidebar

> Docs: https://viana-kit.vercel.app/docs/components/sidebar

```tsx
import {
  AppSidebarProvider,
  AppSidebar,
  AppSidebarBrand,
  AppSidebarTrigger,
  AppSidebarRail,
  AppSidebarInset,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarSeparator,
  AppSidebarInput,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupAction,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
  AppSidebarMenuAction,
  AppSidebarMenuBadge,
  AppSidebarMenuSkeleton,
  AppSidebarMenuSub,
  AppSidebarMenuSubItem,
  AppSidebarMenuSubButton,
  useSidebar,
} from "@/components/primitives/AppSidebar"
```

## AppSidebarProvider

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultOpen` | `boolean` | `true` | Initial open state (uncontrolled). |
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback for open state changes. |

## AppSidebar

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `side` | `"left" \| "right"` | `"left"` | Which edge the sidebar is anchored to. |
| `variant` | `"sidebar" \| "floating" \| "inset"` | `"sidebar"` | Visual presentation style. |
| `collapsible` | `"offcanvas" \| "icon" \| "none"` | `"offcanvas"` | How the sidebar collapses. |

## AppSidebarBrand

Place as the first child of `AppSidebarHeader`. The logo is always **horizontally centered**. When a `dropdown` is provided, the chevron is absolutely positioned to the right edge so it does not shift the logo off-center.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `logo` | `string \| ReactNode` | `<WhiteLogo width={90} height={28} />` | Text label or logo component. Defaults to the white Viana Kit logo for dark backgrounds. |
| `collapsedLogo` | `ReactNode` | `<WhiteSymbol width={24} height={24} />` | Icon shown when the sidebar is collapsed to icon mode. |
| `dropdown` | `AppSidebarBrandDropdownItem[]` | — | When provided, wraps the brand in a dropdown trigger. Omit for a non-interactive header. |
| `showChevron` | `boolean` | `true` | Show the caret icon. Only applies when `dropdown` is set. |
| `className` | `string` | — | Additional classes for the brand container. |

### AppSidebarBrandDropdownItem

Two shapes are accepted in the same array:

```ts
// Regular item
{ label: string; onClick?: () => void; icon?: ReactNode; disabled?: boolean }

// Separator
{ separator: true }
```

## AppSidebarMenuButton

No background fill by default or on hover. The **primary brand color** background is applied **only when `isActive={true}`** — using `bg-primary` and `text-primary-foreground`.

> **Note:** Tailwind v4 compiles `data-active:` to the CSS selector `[data-active]`, which matches all buttons (the attribute is always present). `AppSidebarMenuButton` corrects this by overriding with `data-active:bg-transparent` and re-applying the primary color only via `data-[active=true]:bg-primary data-[active=true]:text-primary-foreground`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Render as child element (e.g. a router Link). |
| `isActive` | `boolean` | `false` | Marks this item as the active route. Applies accent background + medium font weight. |
| `variant` | `"default" \| "outline"` | `"default"` | Visual style. |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | Height and text size. |
| `tooltip` | `string \| TooltipContentProps` | — | Tooltip shown when sidebar is collapsed to icon mode. |

## AppSidebarMenuSubButton

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Render as child element. |
| `isActive` | `boolean` | `false` | Marks the sub-item as active. |
| `size` | `"sm" \| "md"` | `"md"` | Text size. |

## AppSidebarMenuSkeleton

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `showIcon` | `boolean` | `false` | Show a skeleton icon placeholder. |

## useSidebar

Returns `{ state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar }`.

Must be called inside an `AppSidebarProvider`.

---

## Usage

### Default (Viana logo, no dropdown)

```tsx
<AppSidebarHeader>
  <AppSidebarBrand />
</AppSidebarHeader>
```

### Text logo

```tsx
<AppSidebarHeader>
  <AppSidebarBrand logo="My App" />
</AppSidebarHeader>
```

### Image logo

```tsx
import { WhiteLogo } from "@/assets/logos"

<AppSidebarHeader>
  <AppSidebarBrand logo={<WhiteLogo width={90} height={28} />} />
</AppSidebarHeader>
```

### With workspace dropdown

```tsx
<AppSidebarBrand
  dropdown={[
    { label: "Acme Corp", onClick: () => switchWorkspace("acme") },
    { label: "Personal", onClick: () => switchWorkspace("personal") },
    { separator: true },
    { label: "Create workspace", onClick: openCreateModal },
  ]}
/>
```

### Dropdown with icons

```tsx
import { UserIcon, CreditCardIcon, LogOutIcon } from "lucide-react"

<AppSidebarBrand
  dropdown={[
    { label: "Profile", icon: <UserIcon className="size-4" />, onClick: goToProfile },
    { label: "Billing", icon: <CreditCardIcon className="size-4" />, onClick: goToBilling },
    { separator: true },
    { label: "Log out", icon: <LogOutIcon className="size-4" />, onClick: logout },
  ]}
/>
```

### Disable the chevron

```tsx
<AppSidebarBrand dropdown={items} showChevron={false} />
```

Use `showChevron={false}` when the logo itself already communicates the affordance, or for a minimal header style. The dropdown still works — the entire brand area remains clickable.

### Full layout with sectioned navigation

```tsx
import {
  LayoutDashboard, MapPin, Server, Cctv,
  LineChart, FileText, Download,
} from "lucide-react"

const navSections = [
  {
    items: [{ title: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Manage",
    items: [
      { title: "Site",    icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensor",  icon: Cctv },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray",    icon: LineChart },
      { title: "Manifest", icon: FileText },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download }],
  },
]

<AppSidebarProvider>
  <AppSidebar collapsible="icon">
    <AppSidebarHeader>
      <AppSidebarBrand dropdown={workspaces} />
    </AppSidebarHeader>
    <AppSidebarContent>
      {navSections.map((section, i) => (
        <AppSidebarGroup key={i}>
          {section.label && (
            <AppSidebarGroupLabel>{section.label}</AppSidebarGroupLabel>
          )}
          <AppSidebarGroupContent>
            <AppSidebarMenu>
              {section.items.map((item) => (
                <AppSidebarMenuItem key={item.title}>
                  <AppSidebarMenuButton isActive={item.title === "Dashboard"} tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </AppSidebarMenuButton>
                </AppSidebarMenuItem>
              ))}
            </AppSidebarMenu>
          </AppSidebarGroupContent>
        </AppSidebarGroup>
      ))}
    </AppSidebarContent>
    <AppSidebarFooter>
      <span className="text-xs text-sidebar-foreground/50">v1.0.0</span>
    </AppSidebarFooter>
    <AppSidebarRail />
  </AppSidebar>
  <AppSidebarInset>
    <header className="flex items-center gap-2 border-b border-border px-4 py-3">
      <AppSidebarTrigger />
    </header>
    <main>Page content</main>
  </AppSidebarInset>
</AppSidebarProvider>
```

### Menu button as link

```tsx
<AppSidebarMenuButton asChild isActive>
  <a href="/dashboard">Dashboard</a>
</AppSidebarMenuButton>
```

### With submenu

```tsx
<AppSidebarMenu>
  <AppSidebarMenuItem>
    <AppSidebarMenuButton>Projects</AppSidebarMenuButton>
    <AppSidebarMenuSub>
      <AppSidebarMenuSubItem>
        <AppSidebarMenuSubButton asChild>
          <a href="/projects/alpha">Alpha</a>
        </AppSidebarMenuSubButton>
      </AppSidebarMenuSubItem>
    </AppSidebarMenuSub>
  </AppSidebarMenuItem>
</AppSidebarMenu>
```

### Containing sidebar inside a preview box

When embedding a sidebar inside a fixed-height container (e.g. a component preview), the sidebar uses `position: fixed` which breaks out of the parent. Add `[contain:layout]` to the wrapper to create a containing block. The sidebar has a transparent background, so the wrapper must provide a dark background:

```tsx
<div className="dark relative h-96 overflow-hidden rounded-lg border bg-linear-to-br from-background via-muted to-card [contain:layout]">
  <AppSidebarProvider className="min-h-0 h-full">
    <AppSidebar collapsible="icon">...</AppSidebar>
    <AppSidebarInset>...</AppSidebarInset>
  </AppSidebarProvider>
</div>
```

---

## Rules

- **Do** always include an icon and a `<span>` label inside each `AppSidebarMenuButton` — both are required for icon-only collapsed mode.
- **Do** place the sidebar inside a dark container (e.g. `AppDashboard` or a dark gradient wrapper) — the sidebar background is transparent by default with light text.
- **Do** wrap the entire page layout in `AppSidebarProvider` — it manages state for all children.
- **Do** use `AppSidebarInset` as the wrapper for your main content area.
- **Do** add `AppSidebarRail` inside `AppSidebar` to allow drag-to-resize on desktop.
- **Do** place `AppSidebarBrand` inside `AppSidebarHeader` as the first child.
- **Do** pass a `tooltip` to `AppSidebarMenuButton` when using `collapsible="icon"` so labels remain accessible.
- **Do** use `AppSidebarMenuButton asChild` with a router `<Link>` for navigation items.
- **Do** use `isActive` to mark the current route — never apply manual background classes to menu items.
- **Don't** nest `AppSidebarProvider` — one per layout root.
- **Don't** use raw `<button>` or `<a>` tags for menu items; always go through `AppSidebarMenuButton`.
- **Don't** use `AppSidebarMenuSub` more than one level deep.
- **Don't** skip `AppSidebarBrand` and wire up a logo manually — use the component for consistent centering and interaction.
- **Don't** add `hover:bg-*` or `bg-*` classes to `AppSidebarMenuButton` — the fill behaviour is intentionally controlled by `isActive` only.

If a prop you need is missing, stop and inform the design team.
