# Viana Kit — AI Agent Guide

Read this fully before writing any code.

---

## What this repo is

`viana-kit` is a distribution repo for the Viana Kit design system. Your job is to build product UI by composing the pre-built primitives. Do not modify the primitives.

---

## Architecture — three layers

```
src/components/
├── ui/           ← Layer 1: shadcn/ui base. NEVER TOUCH.
├── primitives/   ← Layer 2: Viana Kit wrappers. NEVER TOUCH.
└── blocks/       ← Layer 3: YOUR work lives here.

src/app/          ← Pages. Import from blocks/ or primitives/ directly.
```

- `ui/` and `primitives/` are managed — the Viana CLI overwrites them on update.
- `blocks/` is yours. Create blocks and custom components here.

---

## Dashboard layout — mandatory starting point

Every page uses `AppDashboard`. **Do not compose the dashboard scaffold manually.**

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"
```

Pass your nav sections and page content. The sidebar brand, animated wave background, dark header (with search, network select, bento button, and avatar by default), and layout structure are all handled automatically:

```tsx
const nav = [
  { items: [{ title: "Dashboard", icon: LayoutDashboard, isActive: true }] },
  {
    label: "Manage",
    items: [
      { title: "Sites",   icon: MapPin },
      { title: "Devices", icon: Server },
    ],
  },
]

export default function Page() {
  return (
    <AppDashboard nav={nav}>
      {/* Your page content here */}
    </AppDashboard>
  )
}
```

Read `rules/dashboard.md` for the full props reference and examples.

### Background theme — `backgroundTheme` prop

The `backgroundTheme` prop locks the sidebar, header, and background to a fixed mode. The main content area still responds to the page theme toggle independently. Set it once per app.

| Value | Behaviour |
|-------|-----------|
| `"dark"` (default) | Sidebar/header/background always dark |
| `"light"` | Sidebar/header/background always light |

```tsx
// Dark background (default)
<AppDashboard nav={nav} backgroundTheme="dark">

// Light background
<AppDashboard nav={nav} backgroundTheme="light">
```

Do not add `bg-*`, `dark`, `background-light`, or `border-*` to the shell or its surrounding elements. Use `backgroundTheme` instead.

### What you control via AppDashboard

- `nav` — sidebar sections, groups, items, icons, active state
- `headerActions` — right-side controls; defaults to network select + bento + avatar
- `headerSearchbar` — searchbar slot (or `null` to hide)
- `mainClassName` — extra classes on the content area (e.g. `"p-0"` for full-bleed)
- `children` — your page content

---

## Component rules

Before using any primitive, read its rule file. Each file has the full prop list, usage examples, and dos/don'ts.

| Component | Rule file |
|-----------|-----------|
| AppDashboard (block) | `rules/dashboard.md` |
| Header (block) | `rules/header.md` |
| AppAccordion | `rules/accordion.md` |
| AppAlert | `rules/alert.md` |
| AppAlertDialog | `rules/alert-dialog.md` |
| AppAspectRatio | `rules/aspect-ratio.md` |
| AppAvatar | `rules/avatar.md` |
| AppBadge | `rules/badge.md` |
| AppBreadcrumb | `rules/breadcrumb.md` |
| AppButton | `rules/button.md` |
| AppButtonGroup | `rules/button-group.md` |
| AppCalendar | `rules/calendar.md` |
| AppCard | `rules/card.md` |
| AppCheckbox | `rules/checkbox.md` |
| AppCollapsible | `rules/collapsible.md` |
| AppCommand | `rules/command.md` |
| AppContextMenu | `rules/context-menu.md` |
| AppDialog | `rules/dialog.md` |
| AppDrawer | `rules/drawer.md` |
| AppDropdownMenu | `rules/dropdown-menu.md` |
| AppField | `rules/field.md` |
| AppForm | `rules/form.md` |
| AppHoverCard | `rules/hover-card.md` |
| AppInput | `rules/input.md` |
| AppLabel | `rules/label.md` |
| AppMenubar | `rules/menubar.md` |
| AppNavigationMenu | `rules/navigation-menu.md` |
| AppPagination | `rules/pagination.md` |
| AppPopover | `rules/popover.md` |
| AppProgress | `rules/progress.md` |
| AppRadioGroup | `rules/radio-group.md` |
| AppScrollArea | `rules/scroll-area.md` |
| AppScrollText | `rules/scroll-text.md` |
| AppSelect | `rules/select.md` |
| AppSeparator | `rules/separator.md` |
| AppSheet | `rules/sheet.md` |
| AppSkeleton | `rules/skeleton.md` |
| AppSpinner | `rules/spinner.md` |
| AppSwitch | `rules/switch.md` |
| AppTable | `rules/table.md` |
| AppTabs | `rules/tabs.md` |
| AppText | `rules/text.md` |
| AppTextarea | `rules/textarea.md` |
| AppToaster | `rules/toaster.md` |
| AppToggle | `rules/toggle.md` |
| AppToggleGroup | `rules/toggle-group.md` |
| AppTooltip | `rules/tooltip.md` |

Import from the individual file or from the barrel:

```tsx
// Barrel
import { AppButton, AppCard } from "@/components/primitives"

// Individual (preferred for tree-shaking)
import { AppButton } from "@/components/primitives/AppButton"
```

---

## How to create a block

A **block** is a product-specific composition of primitives. It lives in `src/components/blocks/`.

Create a block when:
- A UI pattern repeats across multiple pages
- It has product-specific copy, layout, or logic baked in

A **custom component** is a reusable wrapper that locks or extends a primitive. Also lives in `src/components/blocks/`.

Create a custom component when:
- You need a variant of a primitive not in the design system (e.g. a pill button used everywhere)
- You need to lock certain props from being overridden

**Block example:**
```tsx
// src/components/blocks/LoginForm.tsx
import { AppButton } from "@/components/primitives/AppButton"
import { AppInput } from "@/components/primitives/AppInput"
import { AppCard, AppCardHeader, AppCardTitle, AppCardContent, AppCardFooter } from "@/components/primitives/AppCard"
import { AppField, AppFieldLabel } from "@/components/primitives/AppField"

export function LoginForm() {
  return (
    <AppCard className="w-full max-w-sm">
      <AppCardHeader>
        <AppCardTitle>Sign in</AppCardTitle>
      </AppCardHeader>
      <AppCardContent className="space-y-4">
        <AppField>
          <AppFieldLabel htmlFor="email">Email</AppFieldLabel>
          <AppInput id="email" type="email" placeholder="you@example.com" />
        </AppField>
        <AppField>
          <AppFieldLabel htmlFor="password">Password</AppFieldLabel>
          <AppInput id="password" type="password" placeholder="••••••••" />
        </AppField>
      </AppCardContent>
      <AppCardFooter>
        <AppButton className="w-full">Sign in</AppButton>
      </AppCardFooter>
    </AppCard>
  )
}
```

**Custom component example:**
```tsx
// src/components/blocks/PrimaryActionButton.tsx
import { AppButton, type AppButtonProps } from "@/components/primitives/AppButton"
import { cn } from "@/lib/utils"

type PrimaryActionButtonProps = Omit<AppButtonProps, "variant"> & {
  children: React.ReactNode
}

export function PrimaryActionButton({ className, children, ...props }: PrimaryActionButtonProps) {
  return (
    <AppButton variant="default" className={cn("w-full", className)} {...props}>
      {children}
    </AppButton>
  )
}
```

**Rules:**
- Only import from `@/components/primitives/*` — never from `@/components/ui/*`
- Always extend from `App*` primitives — never from `ui/` directly
- Use `cn()` from `@/lib/utils` to merge classNames — never concatenate strings
- Add `"use client"` only if the block uses state or browser events
- Keep business logic (API calls, state) in the page or a custom hook, not in the block
- Props must be explicitly typed — no implicit `any`

---

## Styling rules

Viana Kit uses **Tailwind CSS v4** with design tokens as CSS variables.

**Do:**
- Use Tailwind utility classes for all layout and spacing
- Use semantic token classes for all color: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary-foreground`, etc.
- Use `cn()` to conditionally merge classes

**Never:**
- ❌ `font-family` — managed by the token layer
- ❌ Raw color values: `text-blue-500`, `bg-[#fff]`, `text-[#333]` — use semantic tokens only
- ❌ Hardcoded color values in any form: `oklch(...)`, `hsl(...)`, `#hex`, `rgb(...)` — all colors must come from CSS variables defined in `globals.css` via `var(--token-name)` or Tailwind semantic classes
- ❌ Custom color definition files (`colors.ts`, `palette.ts`) — the single source of truth is `globals.css` CSS variables
- ❌ Arbitrary font sizes: `text-[13px]` — use Tailwind scale: `text-sm`, `text-base`, `text-lg`
- ❌ Inline `style={{}}` for any visual property
- ❌ Custom CSS outside of `globals.css`

**Semantic tokens:**

| Token | Class | Use for |
|-------|-------|---------|
| background | `bg-background` | Page background |
| foreground | `text-foreground` | Primary body text |
| muted | `bg-muted` | Subtle backgrounds |
| muted-foreground | `text-muted-foreground` | Secondary text, placeholders |
| primary | `bg-primary` / `text-primary-foreground` | Brand color, primary actions |
| secondary | `bg-secondary` / `text-secondary-foreground` | Lower-emphasis surfaces |
| accent | `bg-accent` / `text-accent-foreground` | Hover states, highlights |
| destructive | `bg-destructive` / `text-destructive` | Errors, delete actions |
| border | `border-border` | All borders |
| input | `border-input` | Input borders |
| ring | `ring-ring` | Focus rings |
| card | `bg-card` / `text-card-foreground` | Card surfaces |
| popover | `bg-popover` / `text-popover-foreground` | Dropdowns, popovers |

---

## Missing primitives — hard stop

If you need a component not listed in the table above, **do not create it.**

Stop and tell the user:

> "The [ComponentName] primitive does not exist in Viana Kit. Please inform the design team so it can be added to the system before proceeding."

Never compose a substitute from raw HTML or generic wrappers.

---

## Enhancing primitives

If a primitive exists but lacks a prop you need, **do not compose the pattern manually.**

Check the rule file first to confirm the prop doesn't exist. If it doesn't, stop and tell the user:

> "AppButton does not have a `loading` prop yet. Please ask the design team to add it before using it."

---

## What NOT to do

| ❌ Never | ✅ Instead |
|----------|-----------|
| Compose the dashboard scaffold manually | Use `AppDashboard` from `@/components/blocks/AppDashboard` |
| Add `bg-*`/`dark`/`border-*` to sidebar or header | These are controlled internally — do not override |
| Edit any file in `src/components/ui/` | Import from `@/components/primitives/*` |
| Edit any file in `src/components/primitives/` | Create a wrapper in `src/components/blocks/` |
| Import from `@/components/ui/*` in app code | Always go through the `App*` layer |
| Use a primitive that doesn't exist | Stop and inform the user to notify the design team |
| Compose a missing prop manually | Stop and inform the user to notify the design team |
| Use inline styles | Use Tailwind utility classes |
| Use raw color values (`text-blue-500`, `bg-[#fff]`) | Use semantic token classes only |
| Hardcode color values (`oklch(...)`, `hsl(...)`, `#hex`, `rgb(...)`) | Use CSS variables from `globals.css` via `var(--token)` or Tailwind classes |
| Create custom color files (`colors.ts`, `palette.ts`) | All colors live as CSS variables in `globals.css` only |
| Set `font-family` | The system font is managed by the token layer |
| Set arbitrary font sizes (`text-[13px]`) | Use Tailwind type scale (`text-sm`, `text-lg`, etc.) |
| Copy-paste shadcn code into a block | Compose the existing `App*` primitive |
| Modify `globals.css` token block | The token block is managed — only edit below it |

---

## File structure

```
src/
├── app/
│   ├── globals.css          ← Tokens + Tailwind config. Token block is managed.
│   ├── layout.tsx           ← Root layout. Add providers here.
│   └── page.tsx             ← Home page.
├── components/
│   ├── ui/                  ← MANAGED. Do not touch.
│   ├── primitives/          ← MANAGED. Do not touch.
│   └── blocks/              ← YOUR CODE. Blocks and custom components go here.
└── lib/
    └── utils.ts             ← Contains cn(). Do not modify.
```
