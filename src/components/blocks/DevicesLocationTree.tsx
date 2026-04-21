"use client"

import { useState } from "react"
import { Search, ChevronRight, ChevronDown, Building2, AlertCircle, HelpCircle } from "lucide-react"
import {
  AppCollapsible,
  AppCollapsibleContent,
  AppCollapsibleTrigger,
} from "@/components/primitives/AppCollapsible"
import { AppInput } from "@/components/primitives/AppInput"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type LocationNode = {
  label: string
  count: number
  children?: LocationNode[]
}

// ─── Placeholder data — replace with API call ─────────────────────────────────

const UNALLOCATED_COUNT = 135

const LOCATION_TREE: LocationNode[] = [
  {
    label: "All",
    count: 65,
    children: [
      {
        label: "Philippines",
        count: 65,
        children: [
          {
            label: "Davao City Davao",
            count: 1,
            children: [{ label: "Davao City", count: 1 }],
          },
          {
            label: "Misamis Oriental",
            count: 64,
            children: [{ label: "Cagayan de Oro", count: 64 }],
          },
        ],
      },
    ],
  },
]

// ─── TreeNode ─────────────────────────────────────────────────────────────────

type TreeNodeProps = {
  node: LocationNode
  depth?: number
  selected: string | null
  onSelect: (location: string | null) => void
  searchQuery: string
}

function matchesSearch(node: LocationNode, query: string): boolean {
  if (!query) return true
  if (node.label.toLowerCase().includes(query.toLowerCase())) return true
  return node.children?.some((c) => matchesSearch(c, query)) ?? false
}

function TreeNode({ node, depth = 0, selected, onSelect, searchQuery }: TreeNodeProps) {
  const [open, setOpen] = useState(depth <= 1)
  const hasChildren = !!node.children?.length
  const isAll = node.label === "All"
  const isSelected = isAll ? selected === null : selected === node.label

  const visibleChildren = searchQuery
    ? node.children?.filter((c) => matchesSearch(c, searchQuery))
    : node.children

  if (!hasChildren) {
    return (
      <button
        onClick={() => onSelect(node.label)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded px-2 py-0.5 text-sm text-left",
          "hover:bg-accent hover:text-accent-foreground transition-colors",
          isSelected && "bg-accent text-accent-foreground font-medium"
        )}
        style={{ paddingLeft: `${(depth + 1) * 14}px` }}
      >
        <Building2 className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="truncate flex-1">{node.label}</span>
        <span className="text-muted-foreground text-xs">({node.count})</span>
      </button>
    )
  }

  return (
    <AppCollapsible open={open} onOpenChange={setOpen}>
      <AppCollapsibleTrigger asChild>
        <button
          onClick={() => onSelect(isAll ? null : node.label)}
          className={cn(
            "flex w-full items-center gap-1 rounded px-2 py-0.5 text-sm text-left",
            "hover:bg-accent hover:text-accent-foreground transition-colors",
            isSelected && "bg-accent text-accent-foreground font-medium"
          )}
          style={{ paddingLeft: `${depth * 14}px` }}
        >
          {open ? (
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
            <TreeNode
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

// ─── DevicesLocationTree ──────────────────────────────────────────────────────

export type DevicesLocationTreeProps = {
  selected: string | null
  onSelect: (location: string | null) => void
}

export function DevicesLocationTree({ selected, onSelect }: DevicesLocationTreeProps) {
  const [search, setSearch] = useState("")

  const isUnallocatedSelected = selected === "__unallocated__"

  return (
    <div className="flex flex-col gap-3 w-56 shrink-0">
      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
        Filter by Location
        <HelpCircle className="size-3.5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
        <AppInput
          className="pl-8 text-sm h-8"
          placeholder="Search for a country, state, or..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        {/* Unallocated Devices */}
        <button
          onClick={() => onSelect("__unallocated__")}
          className={cn(
            "flex w-full items-center gap-1.5 rounded px-2 py-0.5 text-sm text-left",
            "hover:bg-accent hover:text-accent-foreground transition-colors",
            isUnallocatedSelected && "bg-accent text-accent-foreground font-medium"
          )}
        >
          <AlertCircle className="size-3.5 shrink-0 text-warning" />
          <span className="truncate flex-1">Unallocated Devices</span>
          <span className="text-muted-foreground text-xs">({UNALLOCATED_COUNT})</span>
        </button>
        {/* Location tree */}
        {LOCATION_TREE.map((node) => (
          <TreeNode
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
