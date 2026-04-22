# Viana Kit — v0.1.26

A Next.js design system starter with pre-built UI primitives, layout blocks, design tokens, and AI skill support.

Built on shadcn/ui + Tailwind CSS v4. All components are managed — you compose, never modify.

---

## Quick Start

```bash
git clone https://github.com/kevinmeldcx/viana-kit.git
cd viana-kit
npm install
npm run dev
```

Full component documentation: **https://viana-kit-core.vercel.app/docs/introduction**

---

## Architecture

```
src/components/
├── ui/           ← shadcn/ui base. NEVER TOUCH.
├── primitives/   ← Viana Kit App* wrappers. NEVER TOUCH.
├── blocks/       ← Managed layout blocks (Dashboard, Header). NEVER TOUCH.
└── your-code/    ← Your pages and custom compositions go in src/app/ or new block files.
```

- `ui/`, `primitives/`, and `blocks/` are managed. The Viana CLI overwrites them on update.
- Build product UI by composing `App*` primitives and using the Dashboard scaffold as a starting point.
- Never import from `ui/` in your own code — always go through `primitives/` or `blocks/`.

---

## Dashboard Scaffold — Start Here

Every new page starts from `AppDashboard` — the canonical layout with an animated gradient background, collapsible sidebar, dark header (search, network select, bento button, avatar), and rounded content area. The built-in Viana Kit nav (`DEFAULT_NAV`) is used automatically when no `nav` prop is passed.

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"

export default function Page() {
  return (
    <AppDashboard>
      {/* Your page content here */}
    </AppDashboard>
  )
}
```

To use a custom nav, pass your own sections:

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"

function MyNavIcon() {
  // Render both default and active icon variants; CSS handles show/hide
  // See rules/sidebar.md for the active/default icon swap pattern
}

const nav = [
  { items: [{ title: "Home", icon: MyNavIcon, isActive: true }] },
]

export default function Page() {
  return (
    <AppDashboard nav={nav}>
      {/* Your page content here */}
    </AppDashboard>
  )
}
```

See `rules/dashboard.md` for the full props reference and `rules/sidebar.md` for the nav icon pattern.

---

## Available Components

### Layout
| Component | Exports |
|-----------|---------|
| **AppCard** | `AppCard`, `AppCardHeader`, `AppCardTitle`, `AppCardDescription`, `AppCardAction`, `AppCardContent`, `AppCardFooter` |
| **AppAspectRatio** | `AppAspectRatio` |
| **AppSeparator** | `AppSeparator` |
| **AppScrollArea** | `AppScrollArea`, `AppScrollBar` |
| **AppScrollText** | `AppScrollText` |

### Typography & Feedback
| Component | Exports |
|-----------|---------|
| **AppAlert** | `AppAlert`, `AppAlertTitle`, `AppAlertDescription` |
| **AppBadge** | `AppBadge` |
| **AppSkeleton** | `AppSkeleton` |
| **AppSpinner** | `AppSpinner` |
| **AppProgress** | `AppProgress` |
| **AppToast** | `useAppToast`, `toast` |
| **AppToaster** | `AppToaster`, `sonnerToast` |

### Forms & Inputs
| Component | Exports |
|-----------|---------|
| **AppButton** | `AppButton` |
| **AppButtonGroup** | `AppButtonGroup` |
| **AppInput** | `AppInput` |
| **AppLabel** | `AppLabel` |
| **AppField** | `AppField`, `AppFieldLabel`, `AppFieldDescription`, `AppFieldError` |
| **AppCheckbox** | `AppCheckbox` |
| **AppRadioGroup** | `AppRadioGroup`, `AppRadioGroupItem` |
| **AppSwitch** | `AppSwitch` |
| **AppToggle** | `AppToggle` |
| **AppToggleGroup** | `AppToggleGroup`, `AppToggleGroupItem` |
| **AppTextarea** | `AppTextarea` |
| **AppSelect** | `AppSelect`, `AppSelectTrigger`, `AppSelectValue`, `AppSelectContent`, `AppSelectItem`, `AppSelectLabel`, `AppSelectSeparator` |
| **AppForm** | `AppForm`, `AppFormField`, `AppFormItem`, `AppFormLabel`, `AppFormControl`, `AppFormDescription`, `AppFormMessage` |
| **AppCalendar** | `AppCalendar` |

### Overlays & Dialogs
| Component | Exports |
|-----------|---------|
| **AppDialog** | `AppDialog`, `AppDialogTrigger`, `AppDialogContent`, `AppDialogHeader`, `AppDialogTitle`, `AppDialogDescription`, `AppDialogFooter`, `AppDialogClose` |
| **AppAlertDialog** | `AppAlertDialog`, `AppAlertDialogTrigger`, `AppAlertDialogContent`, `AppAlertDialogHeader`, `AppAlertDialogFooter`, `AppAlertDialogTitle`, `AppAlertDialogDescription`, `AppAlertDialogAction`, `AppAlertDialogCancel` |
| **AppSheet** | `AppSheet`, `AppSheetTrigger`, `AppSheetContent`, `AppSheetHeader`, `AppSheetTitle`, `AppSheetDescription`, `AppSheetFooter`, `AppSheetClose` |
| **AppDrawer** | `AppDrawer`, `AppDrawerTrigger`, `AppDrawerContent`, `AppDrawerHeader`, `AppDrawerTitle`, `AppDrawerDescription`, `AppDrawerFooter`, `AppDrawerClose` |
| **AppPopover** | `AppPopover`, `AppPopoverTrigger`, `AppPopoverContent` |
| **AppTooltip** | `AppTooltip`, `AppTooltipProvider`, `AppTooltipTrigger`, `AppTooltipContent` |
| **AppHoverCard** | `AppHoverCard`, `AppHoverCardTrigger`, `AppHoverCardContent` |

### Navigation
| Component | Exports |
|-----------|---------|
| **AppBreadcrumb** | `AppBreadcrumb`, `AppBreadcrumbList`, `AppBreadcrumbItem`, `AppBreadcrumbLink`, `AppBreadcrumbPage`, `AppBreadcrumbSeparator`, `AppBreadcrumbEllipsis` |
| **AppNavigationMenu** | `AppNavigationMenu`, `AppNavigationMenuList`, `AppNavigationMenuItem`, `AppNavigationMenuTrigger`, `AppNavigationMenuContent`, `AppNavigationMenuLink` |
| **AppPagination** | `AppPagination`, `AppPaginationContent`, `AppPaginationItem`, `AppPaginationLink`, `AppPaginationPrevious`, `AppPaginationNext`, `AppPaginationEllipsis` |
| **AppTabs** | `AppTabs`, `AppTabsList`, `AppTabsTrigger`, `AppTabsContent` |

### Data Display
| Component | Exports |
|-----------|---------|
| **AppTable** | `AppTable`, `AppTableHeader`, `AppTableBody`, `AppTableFooter`, `AppTableHead`, `AppTableRow`, `AppTableCell`, `AppTableCaption` |
| **AppAccordion** | `AppAccordion`, `AppAccordionItem`, `AppAccordionTrigger`, `AppAccordionContent` |
| **AppAvatar** | `AppAvatar`, `AppAvatarImage`, `AppAvatarFallback` |
| **AppCollapsible** | `AppCollapsible`, `AppCollapsibleTrigger`, `AppCollapsibleContent` |

### Menus & Commands
| Component | Exports |
|-----------|---------|
| **AppDropdownMenu** | `AppDropdownMenu`, `AppDropdownMenuTrigger`, `AppDropdownMenuContent`, `AppDropdownMenuItem`, `AppDropdownMenuSeparator`, `AppDropdownMenuLabel`, `AppDropdownMenuCheckboxItem`, `AppDropdownMenuRadioGroup`, `AppDropdownMenuRadioItem`, `AppDropdownMenuSub`, `AppDropdownMenuSubTrigger`, `AppDropdownMenuSubContent`, `AppDropdownMenuShortcut` |
| **AppContextMenu** | `AppContextMenu`, `AppContextMenuTrigger`, `AppContextMenuContent`, `AppContextMenuItem`, `AppContextMenuSeparator`, `AppContextMenuLabel` |
| **AppCommand** | `AppCommand`, `AppCommandDialog`, `AppCommandInput`, `AppCommandList`, `AppCommandEmpty`, `AppCommandGroup`, `AppCommandItem`, `AppCommandShortcut`, `AppCommandSeparator` |

---

## Usage

```tsx
import { AppButton } from "@/components/primitives/AppButton"
import { AppCard, AppCardHeader, AppCardTitle, AppCardContent } from "@/components/primitives/AppCard"

export function Example() {
  return (
    <AppCard className="w-80">
      <AppCardHeader>
        <AppCardTitle>Hello</AppCardTitle>
      </AppCardHeader>
      <AppCardContent>
        <AppButton>Get started</AppButton>
      </AppCardContent>
    </AppCard>
  )
}
```

### New in v0.1.4

**AppField** — structured form field with label, description, and error slots:
```tsx
import { AppField, AppFieldLabel, AppFieldDescription, AppFieldError } from "@/components/primitives/AppField"
import { AppInput } from "@/components/primitives/AppInput"

<AppField>
  <AppFieldLabel htmlFor="email" required>Email</AppFieldLabel>
  <AppInput id="email" type="email" />
  <AppFieldDescription>We'll never share your email.</AppFieldDescription>
  <AppFieldError>Email is required.</AppFieldError>
</AppField>
```

**AppButtonGroup** — joins adjacent buttons and inputs into a seamless row:
```tsx
import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"
import { AppInput } from "@/components/primitives/AppInput"
import { AppButton } from "@/components/primitives/AppButton"

<AppButtonGroup>
  <AppInput placeholder="Search…" />
  <AppButton variant="outline">Go</AppButton>
</AppButtonGroup>
```

**AppSpinner** — accessible animated loading indicator:
```tsx
import { AppSpinner } from "@/components/primitives/AppSpinner"

<AppSpinner />                                      // default h-5 w-5
<AppSpinner className="h-4 w-4 text-primary" />    // sized + colored
<AppButton disabled><AppSpinner className="h-4 w-4" />Saving…</AppButton>
```

---

## Styling rules

Viana Kit uses Tailwind CSS v4 with shadcn semantic design tokens.

**Always use semantic token classes for color:**

| Use case | Class |
|----------|-------|
| Page background | `bg-background` |
| Primary text | `text-foreground` |
| Secondary text | `text-muted-foreground` |
| Brand / primary action | `bg-primary`, `text-primary-foreground` |
| Secondary action | `bg-secondary`, `text-secondary-foreground` |
| Subtle background | `bg-muted` |
| Hover / highlight | `bg-accent`, `text-accent-foreground` |
| Error / destructive | `bg-destructive`, `text-destructive` |
| All borders | `border-border` |
| Card surface | `bg-card`, `text-card-foreground` |

**Hard rules — never do these:**

| ❌ Forbidden | ✅ Use instead |
|-------------|---------------|
| `text-blue-500`, `bg-[#fff]`, `text-[#333]` | Semantic token classes |
| `font-family: ...` or `font-['Roboto']` | System font is managed by the token layer |
| `text-[13px]`, `text-[1.1rem]` | `text-xs`, `text-sm`, `text-base`, `text-lg` … |
| `style={{ color: '...' }}` | Tailwind utility classes |
| Editing `ui/` or `primitives/` files | Create a wrapper in `blocks/` |

---

## Creating a Viana Kit skill (for Claude / paper.design)

A **skill** is a Markdown prompt file that teaches an AI assistant to generate Viana Kit-compliant UI. It enforces all system constraints so the AI never goes outside the design system.

### 1. Create the skill file

Create `.claude/skills/viana-ui.md` in your project:

```markdown
---
name: viana-ui
description: Generate UI using Viana Kit primitives. Use for any screen, page, mockup, or component.
---

You are building UI using the Viana Kit design system. Follow every rule below exactly.

## Imports
Import all components from `@/components/primitives/*`.
Never import from `@/components/ui/*`.

## Available components
[paste the full component table from AGENTS.md]

## Strict styling rules
- Use ONLY Tailwind utility classes. No inline styles.
- Use ONLY semantic token classes for color:
  bg-background, text-foreground, bg-primary, text-primary-foreground,
  text-muted-foreground, border-border, bg-muted, bg-card, text-card-foreground,
  bg-destructive, text-destructive, bg-secondary, bg-accent, etc.
- NEVER use raw color values: no text-blue-500, no bg-[#fff], no text-[#333].
- NEVER set font-family. The system font is managed by the token layer.
- NEVER set arbitrary font sizes like text-[13px]. Use Tailwind scale only:
  text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl.
- NEVER use inline style={{}} for any visual property.
- Spacing: use Tailwind scale (p-2, p-4, gap-3). No arbitrary values like p-[7px].
- Border radius: use rounded-sm, rounded-md, rounded-lg, rounded-full. No arbitrary radius.

## Output format
Return a single .tsx file.
Add "use client" only if the component uses state or browser events.
```

### 2. Use the skill in Claude Code

```bash
/viana-ui Build a user settings page with avatar, name, email, and a save button
```

### 3. Use the skill in paper.design

1. Open your paper.design workspace → **Settings** → **Custom Prompts**
2. Click **Add Prompt** and paste the skill file content as the system prompt
3. Name it `Viana Kit UI`
4. When generating mockups, select **Viana Kit UI** as the active prompt

All generated code will be system-compliant — correct imports, semantic tokens, no raw colors or fonts.

---

## Tech Stack

- Next.js 16
- Tailwind CSS v4
- Radix UI (via shadcn/ui)
- React DayPicker v9
- TypeScript

## License

MIT
