# AppTable

> Docs: https://viana-kit.vercel.app/docs/components/table

```tsx
import {
  AppTable,
  AppTableHeader,
  AppTableBody,
  AppTableFooter,
  AppTableHead,
  AppTableRow,
  AppTableCell,
  AppTableCaption,
} from "@/components/primitives/AppTable"
```

## Sub-components

### AppTable

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<table>` via `cn()`. The overflow scroll wrapper is not className-accessible. |

### AppTableHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<thead>`. Default: `[&_tr]:border-b`. |

### AppTableBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<tbody>`. Default removes border from the last row. |

### AppTableFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<tfoot>`. Default: `border-t bg-muted/50 font-medium [&>tr]:last:border-b-0`. |

### AppTableHead

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<th>`. Default: `h-10 px-2 text-left align-middle font-medium text-muted-foreground`. |

### AppTableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data-state` | `"selected" \| undefined` | — | Set to `"selected"` to apply the selection highlight (`bg-muted`). Controlled by your state. |
| `className` | `string` | — | Merged onto `<tr>`. Default: `border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`. |

### AppTableCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colSpan` | `number` | — | Span multiple columns. Common in footer summary rows. |
| `className` | `string` | — | Merged onto `<td>`. Default: `p-2 align-middle`. |

### AppTableCaption

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Merged onto `<caption>`. Default: `mt-4 text-sm text-muted-foreground`. Renders below body via `caption-bottom`. |

## Usage

### Basic

```tsx
<AppTable>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Name</AppTableHead>
      <AppTableHead>Role</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell>John Doe</AppTableCell>
      <AppTableCell>Admin</AppTableCell>
    </AppTableRow>
  </AppTableBody>
</AppTable>
```

### With caption

Place `AppTableCaption` as the first child of `AppTable`. It renders below the body via `caption-bottom`.

```tsx
<AppTable>
  <AppTableCaption>A list of your recent invoices.</AppTableCaption>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Invoice</AppTableHead>
      <AppTableHead>Status</AppTableHead>
      <AppTableHead className="text-right">Amount</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell className="font-medium">INV-001</AppTableCell>
      <AppTableCell>Paid</AppTableCell>
      <AppTableCell className="text-right">$250.00</AppTableCell>
    </AppTableRow>
  </AppTableBody>
</AppTable>
```

### With footer

Use `AppTableFooter` for totals or summary rows. Use `colSpan` on `AppTableCell` to span multiple columns.

```tsx
<AppTable>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Invoice</AppTableHead>
      <AppTableHead>Status</AppTableHead>
      <AppTableHead className="text-right">Amount</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell className="font-medium">INV-001</AppTableCell>
      <AppTableCell>Paid</AppTableCell>
      <AppTableCell className="text-right">$250.00</AppTableCell>
    </AppTableRow>
  </AppTableBody>
  <AppTableFooter>
    <AppTableRow>
      <AppTableCell colSpan={2}>Total</AppTableCell>
      <AppTableCell className="text-right">$250.00</AppTableCell>
    </AppTableRow>
  </AppTableFooter>
</AppTable>
```

### With selected row

Set `data-state="selected"` on any `AppTableRow` to apply the selection highlight. No built-in selection logic is included — control this via your own state.

```tsx
const [selectedId, setSelectedId] = React.useState<string | null>(null)

<AppTableBody>
  {rows.map((row) => (
    <AppTableRow
      key={row.id}
      data-state={selectedId === row.id ? "selected" : undefined}
      onClick={() => setSelectedId(row.id)}
    >
      <AppTableCell>{row.name}</AppTableCell>
      <AppTableCell>{row.email}</AppTableCell>
    </AppTableRow>
  ))}
</AppTableBody>
```

## Rules

- ✅ Always use `AppTable` and its sub-components — never use raw `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`, or `<caption>`
- ✅ Use `AppTableHeader` for column title rows and `AppTableBody` for data rows
- ✅ Place `AppTableCaption` as the **first child** of `AppTable`
- ✅ Use `AppTableFooter` for totals and aggregates — it applies the correct muted background automatically
- ✅ Use `colSpan` on `AppTableCell` in footer rows to span multiple columns
- ✅ Control row selection via `data-state="selected"` on `AppTableRow` — do not add custom selected styling
- ❌ Do not add `border-b` manually to rows — `AppTableRow` already applies it
- ❌ Do not nest `AppTableHead` inside `AppTableBody` or `AppTableCell` inside `AppTableHeader`
- ❌ Do not place `AppTableCaption` after `AppTableBody` — always put it first inside `AppTable`
- ❌ Do not apply direct width/height to table cells unless absolutely necessary — use container-level Tailwind classes instead
- ❌ If a prop you need is missing, stop and inform the design team
