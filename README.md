# viana-kit

A lightweight Next.js starter kit with pre-built UI components.

## Quick Start

```bash
git clone https://github.com/kevinmeldcx/viana-kit.git
cd viana-kit
npm install
npm run dev
```

## Available Components

### Form Components
| Component | Import |
|-----------|--------|
| Button | `@/components/primitives/AppButton` |
| Badge | `@/components/primitives/AppBadge` |
| Input | `@/components/primitives/AppInput` |
| Label | `@/components/primitives/AppLabel` |
| Checkbox | `@/components/primitives/AppCheckbox` |
| Radio Group | `@/components/primitives/AppRadioGroup` |
| Switch | `@/components/primitives/AppSwitch` |
| Toggle | `@/components/primitives/AppToggle` |
| Textarea | `@/components/primitives/AppTextarea` |
| Progress | `@/components/primitives/AppProgress` |

### Overlay Components
| Component | Import |
|-----------|--------|
| Dialog | `@/components/primitives/AppDialog` |
| Sheet | `@/components/primitives/AppSheet` |
| Popover | `@/components/primitives/AppPopover` |
| Tooltip | `@/components/primitives/AppTooltip` |
| Hover Card | `@/components/primitives/AppHoverCard` |
| Select | `@/components/primitives/AppSelect` |

### Layout Components
| Component | Import |
|-----------|--------|
| Card | `@/components/primitives/AppCard` |

## Usage

```tsx
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return <AppButton>Click me</AppButton>
}
```

## Tech Stack

- Next.js 16
- Tailwind CSS v4
- Radix UI
- TypeScript

## License

MIT
