# AppPageTitle

> **Default page header block** — present on most pages. Suppress it explicitly with `pageTitle={false}`.

## Import

```tsx
import { AppPageTitle } from "@/components/blocks/AppPageTitle"
```

Or via `AppDashboard` (recommended):

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | auto | Page heading, rendered as an `<h1>`. Auto-derived from the last pathname segment when omitted. |
| `subtitle` | `string` | — | Optional description rendered below the heading. |
| `breadcrumbs` | `AppPageTitleBreadcrumb[]` | auto | Explicit breadcrumb trail. Auto-generated from `window.location.pathname` when omitted. |
| `actions` | `ReactNode` | — | Right-side action slot. Accepts any elements — buttons, selects, text, etc. Empty by default. |
| `hidden` | `boolean` | `false` | Hides the entire block. |
| `className` | `string` | — | Extra classes on the root element. |

### AppPageTitleBreadcrumb

```ts
type AppPageTitleBreadcrumb = {
  label: string
  href?: string  // Omit for the last (current-page) segment
}
```

## Usage via AppDashboard

### Default (title + breadcrumbs auto-derived from pathname)

```tsx
<AppDashboard nav={nav}>
  <PageContent />
</AppDashboard>
```

### With explicit title and subtitle

```tsx
<AppDashboard
  nav={nav}
  pageTitle={{ title: "Site", subtitle: "Stay up to date to everything in your network" }}
>
  <PageContent />
</AppDashboard>
```

### With actions

```tsx
<AppDashboard
  nav={nav}
  pageTitle={{
    title: "Site",
    subtitle: "Stay up to date to everything in your network",
    actions: <AppButton>+ Add Site</AppButton>,
  }}
>
  <PageContent />
</AppDashboard>
```

### Hidden

```tsx
<AppDashboard nav={nav} pageTitle={false}>
  <PageContent />
</AppDashboard>
```

### Manual breadcrumbs

```tsx
<AppDashboard
  nav={nav}
  pageTitle={{
    title: "Site Details",
    breadcrumbs: [
      { label: "Manage", href: "/manage" },
      { label: "Site", href: "/manage/site" },
      { label: "Site Details" },
    ],
  }}
>
  <PageContent />
</AppDashboard>
```

## Breadcrumb auto-generation

When `breadcrumbs` is omitted, the component reads `window.location.pathname` on mount and converts each path segment into a readable label:

- Segments are split on `-` and `_`, then title-cased (`site-settings` → `Site Settings`)
- The final segment has no `href` (current page, non-linked)
- All preceding segments get `href` values pointing to their cumulative path

## Rules

- **Do** use `pageTitle` on `AppDashboard` rather than placing `AppPageTitle` manually inside the page content.
- **Do** pass `pageTitle={false}` to explicitly suppress the block — do not conditionally omit it based on state.
- **Do** put action buttons in the `actions` slot — do not place them above the title.
- **Don't** hardcode breadcrumbs when auto-generation is correct — only override when the URL structure doesn't match the desired labels.
- **Don't** add additional margin-top to page content — `AppPageTitle` already provides `mb-6` spacing.

If a prop you need is missing, stop and inform the design team.
