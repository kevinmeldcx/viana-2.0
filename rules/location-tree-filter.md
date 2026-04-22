# AppLocationTreeFilter

> Docs: https://viana-kit.vercel.app/docs/blocks/location-tree-filter

**This is a block — import from `blocks/`, not `primitives/`.**

```tsx
import { AppLocationTreeFilter } from "@/components/blocks/AppLocationTreeFilter"
```

Also available from the barrel:

```tsx
import { AppLocationTreeFilter } from "@/components/blocks"
```

## Hard stop

> ❌ **Never compose a location tree filter manually using `AppCollapsible`, raw `<details>`, or any other approach.**
>
> `AppLocationTreeFilter` handles the full tree rendering, recursive collapsible structure, search/filter, depth indentation, selection state, and unallocated row. Building this from scratch will produce inconsistent behaviour and visual drift. Use this block.

## Types

```tsx
type TreeNode = {
  label: string         // Display label and the value emitted when this node is selected
  count: number         // Badge count shown alongside the label
  children?: TreeNode[] // If present, renders as a collapsible branch
}

type UnallocatedConfig = {
  label?: string  // Row label. Defaults to "Unallocated"
  count: number   // Badge count
  value?: string  // Sentinel value emitted on click. Defaults to "__unallocated__"
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TreeNode[]` | required | Tree data. Top-level nodes with optional nested children. |
| `selected` | `string \| null` | required | Current selection value. `null` = root/all state. |
| `onSelect` | `(value: string \| null) => void` | required | Fired when user clicks a node or the unallocated row. |
| `title` | `string` | `"Filter by Location"` | Label shown above the search input. |
| `showHelp` | `boolean` | `false` | Shows a help icon next to the title. |
| `searchPlaceholder` | `string` | `"Search locations..."` | Placeholder for the search input. |
| `unallocated` | `UnallocatedConfig` | `undefined` | Pinned row above the tree for unallocated records. Omit to hide. |
| `className` | `string` | `—` | Extra classes on the root container (default width: `w-56`). |

## Selection model

The block is **uncontrolled for tree state** (collapse/expand), but **controlled for selection** — your component owns `selected`.

| `onSelect` emits | Meaning |
|-----------------|---------|
| `null` | Top-level branch node clicked — "show all" / root state |
| `node.label` | A mid-level or leaf node was clicked — filter by that label |
| `unallocated.value` (default: `"__unallocated__"`) | The unallocated row was clicked |

```tsx
const [selected, setSelected] = React.useState<string | null>(null)

<AppLocationTreeFilter
  data={tree}
  selected={selected}
  onSelect={setSelected}
/>
```

## Search behavior

Typing in the search input filters visible tree nodes by label. Branches that contain a matching descendant are automatically expanded. Clearing the search restores the original collapsed state.

## Usage

### Basic

```tsx
const tree: TreeNode[] = [
  {
    label: "All",
    count: 65,
    children: [
      {
        label: "Philippines",
        count: 65,
        children: [
          { label: "Davao City", count: 1 },
          { label: "Cagayan de Oro", count: 64 },
        ],
      },
    ],
  },
]

export default function Page() {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <AppLocationTreeFilter
      data={tree}
      selected={selected}
      onSelect={setSelected}
    />
  )
}
```

### With unallocated row

```tsx
<AppLocationTreeFilter
  data={tree}
  title="Filter by Location"
  showHelp
  unallocated={{ label: "Unallocated Devices", count: 135 }}
  selected={selected}
  onSelect={setSelected}
/>
```

### URL search params

The `unallocated.value` sentinel (default `"__unallocated__"`) must be encoded when storing in URL params:

```tsx
// Writing to URL
const params = new URLSearchParams()
if (selected !== null) params.set("location", encodeURIComponent(selected))

// Reading from URL
const raw = params.get("location")
const selected = raw ? decodeURIComponent(raw) : null
```

### Custom width

Override the default `w-56` via `className`:

```tsx
<AppLocationTreeFilter
  data={tree}
  selected={selected}
  onSelect={setSelected}
  className="w-64"
/>
```

## Rules

- ✅ Always use `AppLocationTreeFilter` for hierarchical location filtering — never compose manually
- ✅ Provide a top-level node (e.g. "All") as the root branch — it emits `null` on click and represents the "show all" state
- ✅ Own the `selected` state in your page or parent component — the block does not manage selection internally
- ✅ Use `unallocated` whenever records can exist without an assigned location
- ✅ Set a custom `unallocated.value` if `"__unallocated__"` conflicts with any real location label in your dataset
- ❌ Never import `AppCollapsible` to build a tree structure — use this block
- ❌ Never manage tree expand/collapse state externally — the block handles it internally
- ❌ Never pass a flat list as `data` — the tree structure must be nested via `children`
- ❌ If a prop you need is missing, stop and inform the design team
