# Dashboard Block

> **Canonical scaffold** — This is the standard application layout. AI agents MUST use this structure as the starting point for any new page, prototype, or design generation. Do not deviate from the composition order.

## When to use

- Use `AppDashboard` as the outermost layout shell for any page that needs the branded gradient background with a sidebar and header.
- Use it as the **default skeleton** when building or prototyping new pages — start here, then fill in the `AppDashboardMain` content area.

## Composition order (immutable)

```
AppSidebarProvider
  AppDashboard                 <- gradient background + animated dot pattern
    AppSidebar collapsible="icon"
      AppSidebarHeader
        AppSidebarBrand        <- white logo, collapsed icon auto-handled
      AppSidebarContent
        AppSidebarGroup        <- one per nav section
          AppSidebarGroupLabel <- optional section label
          AppSidebarGroupContent
            AppSidebarMenu
              AppSidebarMenuItem
                AppSidebarMenuButton isActive tooltip="..."
                  <Icon />
                  <span>Label</span>
      AppSidebarRail
    AppDashboardContent
      AppHeader className="border-none"
        AppHeaderContent
          AppSidebarTrigger
          AppSeparator orientation="vertical"
          AppHeaderSearchbar   <- search input group
          AppHeaderActions     <- selects, buttons, avatar
      AppDashboardMain className="p-6"
        {/* YOUR CONTENT HERE — this is the only area you should modify */}
```

## What AI agents CAN change

- **Sidebar menu items** — add, remove, or reorder `AppSidebarMenuItem` entries. Change icons, labels, and `isActive` state.
- **Sidebar groups** — add or remove `AppSidebarGroup` sections with labels.
- **AppDashboardMain content** — everything inside `<AppDashboardMain>` is your canvas. Build page content here.
- **AppHeaderActions content** — swap selects, add buttons, change the avatar.
- **AppHeaderSearchbar content** — customize the search input group.
- **CSS variables** — override `--sidebar-width` and `--header-height` on `AppSidebarProvider`.

## What AI agents MUST NOT change

- **The composition order** — do not rearrange, remove, or skip any of the structural components listed above.
- **AppDashboard** — do not add background colors or modify its children structure. The animated background is provided by `AppDashboardBackground`.
- **AppDashboardBackground** — do not remove or replace the animated dot background.
- **AppDashboardContent** — do not add extra wrappers or change its flex layout.
- **AppHeader placement** — it must be the first child of `AppDashboardContent` with `className="border-none"`.
- **AppSidebarProvider** — it must be the outermost wrapper.
- **AppSidebar props** — always use `collapsible="icon"`. Do not change `side` or `variant`.
- **AppSidebarBrand** — do not replace with a manual logo. Use the component as-is or pass a custom `logo` prop.
- **AppSidebarRail** — do not remove. It provides the drag-to-resize handle.

## Starter template

```tsx
import {
  AppDashboard,
  AppDashboardContent,
  AppDashboardMain,
  AppHeader,
  AppHeaderContent,
  AppHeaderSearchbar,
  AppHeaderActions,
  AppSidebarProvider,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
  AppSidebarBrand,
  AppSidebarTrigger,
  AppSidebarRail,
  AppSeparator,
  AppButtonGroup,
  AppButton,
  AppInput,
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppAvatar,
  AppAvatarFallback,
} from "@/components/primitives"
import {
  AppDashboard,
  AppDashboardContent,
  AppDashboardMain,
} from "@/components/blocks/AppDashboard"
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderSearchbar,
  AppHeaderActions,
} from "@/components/blocks/AppHeader"
import {
  Search,
  LayoutDashboard,
  // add your icons here
} from "lucide-react"

export default function Page() {
  return (
    <AppSidebarProvider
      style={{
        "--sidebar-width": "14rem",
        "--header-height": "3.5rem",
      } as React.CSSProperties}
    >
      <AppDashboard>
        <AppSidebar collapsible="icon">
          <AppSidebarHeader>
            <AppSidebarBrand />
          </AppSidebarHeader>
          <AppSidebarContent>
            <AppSidebarGroup>
              <AppSidebarGroupLabel>Manage</AppSidebarGroupLabel>
              <AppSidebarGroupContent>
                <AppSidebarMenu>
                  <AppSidebarMenuItem>
                    <AppSidebarMenuButton isActive tooltip="Dashboards">
                      <LayoutDashboard />
                      <span>Dashboards</span>
                    </AppSidebarMenuButton>
                  </AppSidebarMenuItem>
                  {/* Add more menu items here */}
                </AppSidebarMenu>
              </AppSidebarGroupContent>
            </AppSidebarGroup>
          </AppSidebarContent>
          <AppSidebarRail />
        </AppSidebar>

        <AppDashboardContent>
          <AppHeader className="border-none">
            <AppHeaderContent>
              <AppSidebarTrigger />
              <AppSeparator orientation="vertical" className="mx-1 h-4" />
              <AppHeaderSearchbar>
                <AppButtonGroup className="w-full max-w-sm">
                  <AppInput placeholder="Search..." />
                  <AppButton variant="outline">
                    <Search className="h-4 w-4" />
                  </AppButton>
                </AppButtonGroup>
              </AppHeaderSearchbar>
              <AppHeaderActions>
                <AppAvatar className="size-8">
                  <AppAvatarFallback>U</AppAvatarFallback>
                </AppAvatar>
              </AppHeaderActions>
            </AppHeaderContent>
          </AppHeader>

          <AppDashboardMain className="p-6">
            {/* Page content goes here */}
          </AppDashboardMain>
        </AppDashboardContent>
      </AppDashboard>
    </AppSidebarProvider>
  )
}
```

## Rules

- Always wrap in `AppSidebarProvider` — the sidebar system depends on its context.
- Always pass `className="border-none"` to `AppHeader` inside the dashboard — the default bottom border is not appropriate against the dark background.
- Do not add background colors to `AppSidebar` or `AppHeader` — both components apply their own `dark` class and use a transparent background so the animated dot background shows through.
- `AppDashboardMain` follows the page theme — it is light when the app is in light mode and dark when the app is in dark mode. Only the sidebar and header are always dark.
- The animated background uses standard dark-mode tokens (`--card`, `--muted`, `--secondary`, `--background`, `--primary`). To change the color scheme, update those tokens in your theme (e.g. via tweakcn).
- Always pass `tooltip` to every `AppSidebarMenuButton` — required for icon-only collapsed mode.
- Always include an icon and a `<span>` label inside each `AppSidebarMenuButton`.
- Use `isActive` to mark the current route — never apply manual background classes.

## Do not

- Do not nest `AppSidebarInset` inside `AppDashboard` — use `AppDashboardContent` + `AppDashboardMain` instead.
- Do not set `bg-sidebar` or any background on the sidebar when inside `AppDashboard`.
- Do not remove or modify the `AppDashboardBackground` animated dot pattern.
- Do not skip `AppSidebarRail` — it is required for collapse interaction.

If a prop you need is missing, stop and inform the design team.
