# Header Block

## When to use

- Use `AppHeader` as the top-of-page bar inside `AppDashboardContent` (dashboard layout) or `AppSidebarInset` (standalone sidebar layout).
- The header is always dark-themed — it applies the `dark` class so child components render in dark mode automatically.

## Composition order

```
AppHeader className="border-none"        <- always border-none inside dashboard
  AppHeaderContent
    AppSidebarTrigger                    <- collapse/expand sidebar
    AppSeparator orientation="vertical"  <- visual divider
    AppHeaderTitle                       <- optional page title
    AppHeaderSearchbar                   <- flex-1 search slot
      AppButtonGroup
        AppInput placeholder="Search..."
        AppButton variant="outline"
    AppHeaderActions                     <- right-aligned controls
      AppSelect                          <- network/workspace selector
      AppButton variant="ghost" size="icon"  <- bento / icon buttons
      AppAvatar                          <- user avatar
```

## Sub-components

| Component | Purpose |
|-----------|---------|
| `AppHeader` | Outer `<header>` element. Height set by `--header-height` CSS variable. Dark-themed with transparent background. |
| `AppHeaderContent` | Inner flex container with horizontal padding and gap. |
| `AppHeaderTitle` | Optional page label. `shrink-0` so it never compresses. Omit when context is obvious. |
| `AppHeaderSearchbar` | `flex-1` slot for search input groups. Expands to fill available space. |
| `AppHeaderActions` | `ml-auto` right-side slot for controls. |

## Rules

- **Do** pass `className="border-none"` when using inside `AppDashboard` — the gradient background makes the default border inappropriate.
- **Do** place `AppSidebarTrigger` as the first child of `AppHeaderContent` when used with a sidebar.
- **Do** add `AppSeparator orientation="vertical" className="mx-1 h-4"` after the trigger for visual separation.
- **Do** use `AppButtonGroup` inside `AppHeaderSearchbar` to compose input + button combinations.
- **Do** set `--header-height` on `AppSidebarProvider` alongside `--sidebar-width`.
- **Don't** add background colors to `AppHeader` inside the dashboard — it uses a transparent background so the animated dot background shows through.
- **Don't** remove the `dark` class behavior — child components depend on it for correct dark-mode rendering.
- **Don't** use raw `<input>` or `<button>` inside the header — use `AppInput`, `AppButton`, `AppSelect`.

## Usage inside dashboard (standard)

```tsx
import { LayoutGrid, Search } from "lucide-react"

<AppHeader className="border-none">
  <AppHeaderContent>
    <AppSidebarTrigger />
    <AppSeparator orientation="vertical" className="mx-1 h-4" />
    <AppHeaderSearchbar>
      <AppButtonGroup className="w-full max-w-sm">
        <AppInput placeholder="Search for sites, sensors, and more..." />
        <AppButton variant="outline">
          <Search className="h-4 w-4" />
        </AppButton>
      </AppButtonGroup>
    </AppHeaderSearchbar>
    <AppHeaderActions>
      <AppSelect defaultValue="network-1">
        <AppSelectTrigger className="w-40">
          <AppSelectValue />
        </AppSelectTrigger>
        <AppSelectContent>
          <AppSelectItem value="network-1">MeldCX Network</AppSelectItem>
        </AppSelectContent>
      </AppSelect>
      <AppButton variant="ghost" size="icon">
        <LayoutGrid className="size-4" />
      </AppButton>
      <AppAvatar className="size-8">
        <AppAvatarFallback>KA</AppAvatarFallback>
      </AppAvatar>
    </AppHeaderActions>
  </AppHeaderContent>
</AppHeader>
```

## Usage standalone (with sidebar, no dashboard)

```tsx
<AppSidebarProvider
  style={{
    "--sidebar-width": "14rem",
    "--header-height": "3.5rem",
  } as React.CSSProperties}
>
  <AppSidebar>...</AppSidebar>
  <AppSidebarInset>
    <AppHeader>
      <AppHeaderContent>
        <AppSidebarTrigger />
        <AppHeaderTitle>Sites</AppHeaderTitle>
        <AppHeaderSearchbar>...</AppHeaderSearchbar>
        <AppHeaderActions>...</AppHeaderActions>
      </AppHeaderContent>
    </AppHeader>
    <main>Page content</main>
  </AppSidebarInset>
</AppSidebarProvider>
```

If a prop you need is missing, stop and inform the design team.
