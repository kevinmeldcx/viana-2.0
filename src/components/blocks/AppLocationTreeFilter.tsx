"use client"

import { useState } from "react"
import { Search, ChevronRight, ChevronDown, Building2, AlertCircle, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  AppCollapsible,
  AppCollapsibleContent,
  AppCollapsibleTrigger,
} from "@/components/primitives/AppCollapsible"
import { AppInput } from "@/components/primitives/AppInput"

// ─── Types ────────────────────────────────────────────────────────────────────

export type TreeNode = {
  /** Display label for this node */
  label: string
  /** Badge count shown alongside the label */
  count: number
  /** Child nodes — if present, renders as a collapsible branch */
  children?: TreeNode[]
}

export type UnallocatedConfig = {
  /** Row label. Defaults to "Unallocated". */
  label?: string
  /** Badge count for this row */
  count: number
  /**
   * Sentinel value emitted when this row is selected.
   * Defaults to "__unallocated__". If storing in URL params,
   * encode/decode this value at the call site.
   */
  value?: string
}

export type AppLocationTreeFilterProps = {
  /** Tree data — top-level nodes, each may have nested children */
  data: TreeNode[]
  /** Title shown above the search input. Defaults to "Filter by Location". */
  title?: string
  /** When true, renders a help icon next to the title. Defaults to false. */
  showHelp?: boolean
  /** Placeholder text for the search input */
  searchPlaceholder?: string
  /** Optional pinned "unallocated" row rendered above the tree. Omit to hide. */
  unallocated?: UnallocatedConfig
  /**
   * The currently selected value.
   * - `null` — root / "show all" state (top-level branch nodes emit this)
   * - `"__unallocated__"` (or `unallocated.value`) — unallocated row is selected
   * - Any other string — a leaf or mid-level node label
   */
  selected: string | null
  /** Fired when the user selects a node or the unallocated row */
  onSelect: (value: string | null) => void
  /** Extra classes on the root container */
  className?: string
}

// ─── Depth indentation lookup ─────────────────────────────────────────────────
//
// Tailwind cannot generate arbitrary classes from runtime values.
// These static strings are scanned at build time so all utilities are included.

const DEPTH_PL = [
  "pl-0",
  "pl-[14px]",
  "pl-[28px]",
  "pl-[42px]",
  "pl-[56px]",
  "pl-[70px]",
  "pl-[84px]",
  "pl-[98px]",
] as const

function getDepthPl(depth: number): string {
  return DEPTH_PL[Math.min(depth, DEPTH_PL.length - 1)] ?? "pl-[98px]"
}

// ─── Search helper ────────────────────────────────────────────────────────────

function matchesSearch(node: TreeNode, query: string): boolean {
  if (!query) return true
  if (node.label.toLowerCase().includes(query.toLowerCase())) return true
  return node.children?.some((c) => matchesSearch(c, query)) ?? false
}

// ─── TreeNodeItem (internal recursive component) ──────────────────────────────

type TreeNodeItemProps = {
  node: TreeNode
  depth: number
  selected: string | null
  onSelect: (value: string | null) => void
  searchQuery: string
}

function TreeNodeItem({ node, depth, selected, onSelect, searchQuery }: TreeNodeItemProps) {
  const [open, setOpen] = useState(depth <= 1)
  const hasChildren = !!node.children?.length

  // Top-level branch nodes represent the "show all" root state → emit null
  const isRoot = depth === 0 && hasChildren
  const isSelected = isRoot ? selected === null : selected === node.label

  const visibleChildren = searchQuery
    ? node.children?.filter((c) => matchesSearch(c, searchQuery))
    : node.children

  // When a search is active, auto-expand branches that contain matches
  const isForceOpen = searchQuery.length > 0 && matchesSearch(node, searchQuery)
  const effectiveOpen = isForceOpen || open

  const rowBase = cn(
    "flex w-full items-center rounded px-2 py-0.5 text-sm text-left transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    isSelected && "bg-accent text-accent-foreground font-medium"
  )

  if (!hasChildren) {
    return (
      <button
        type="button"
        onClick={() => onSelect(node.label)}
        className={cn(rowBase, "gap-1.5", getDepthPl(depth + 1))}
      >
        <Building2 className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="truncate flex-1">{node.label}</span>
        <span className="text-muted-foreground text-xs">({node.count})</span>
      </button>
    )
  }

  return (
    <AppCollapsible open={effectiveOpen} onOpenChange={setOpen}>
      <AppCollapsibleTrigger asChild>
        <button
          type="button"
          onClick={() => onSelect(isRoot ? null : node.label)}
          className={cn(rowBase, "gap-1", getDepthPl(depth))}
        >
          {effectiveOpen ? (
            <ChevronDown className="size-3.5 shrink-0" />
          ) : (
            <ChevronRight className="size-3.5 shrink-0" />
          )}
          <span className="truncate flex-1 font-medium">{node.label}</span>
          <span className="text-muted-foreground text-xs">({node.count})</span>
        </button>
      </AppCollapsibleTrigger>
      <AppCollapsibleContent>
        <div className="flex flex-col gap-0.5 mt-0.5">
          {(visibleChildren ?? []).map((child) => (
            <TreeNodeItem
              key={child.label}
              node={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </AppCollapsibleContent>
    </AppCollapsible>
  )
}

// ─── AppLocationTreeFilter ────────────────────────────────────────────────────

export function AppLocationTreeFilter({
  data,
  title = "Filter by Location",
  showHelp = false,
  searchPlaceholder = "Search locations...",
  unallocated,
  selected,
  onSelect,
  className,
}: AppLocationTreeFilterProps) {
  const [search, setSearch] = useState("")
  const unallocatedValue = unallocated?.value ?? "__unallocated__"
  const isUnallocatedSelected = selected === unallocatedValue

  return (
    <div className={cn("flex flex-col gap-3 w-56 shrink-0", className)}>
      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
        {title}
        {showHelp && <HelpCircle className="size-3.5 text-muted-foreground" />}
      </div>

      <AppInput
        leftAdornment={<Search className="size-3.5" />}
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-8 text-sm"
      />

      <div className="flex flex-col gap-0.5">
        {unallocated && (
          <button
            type="button"
            onClick={() => onSelect(unallocatedValue)}
            className={cn(
              "flex w-full items-center gap-1.5 rounded px-2 py-0.5 text-sm text-left transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isUnallocatedSelected && "bg-accent text-accent-foreground font-medium"
            )}
          >
            <AlertCircle className="size-3.5 shrink-0 text-warning" />
            <span className="truncate flex-1">{unallocated.label ?? "Unallocated"}</span>
            <span className="text-muted-foreground text-xs">({unallocated.count})</span>
          </button>
        )}

        {data.map((node) => (
          <TreeNodeItem
            key={node.label}
            node={node}
            depth={0}
            selected={selected}
            onSelect={onSelect}
            searchQuery={search}
          />
        ))}
      </div>
    </div>
  )
}
