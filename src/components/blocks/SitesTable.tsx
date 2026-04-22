"use client"

import React, { useState, useMemo } from "react"
import {
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
  SlidersHorizontal,
  MoreHorizontal,
  List,
  LayoutGrid,
  MapPin,
  Clock,
  ChevronUp,
} from "lucide-react"
import {
  AppTable,
  AppTableHeader,
  AppTableBody,
  AppTableHead,
  AppTableRow,
  AppTableCell,
} from "@/components/primitives/AppTable"
import { AppBadge } from "@/components/primitives/AppBadge"
import { AppButton } from "@/components/primitives/AppButton"
import {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
} from "@/components/primitives/AppPagination"
import {
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
} from "@/components/primitives/AppSelect"
import {
  AppToggleGroup,
  AppToggleGroupItem,
} from "@/components/primitives/AppToggleGroup"
import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuSeparator,
} from "@/components/primitives/AppDropdownMenu"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type SiteStatus = "in-sync" | "out-of-sync"

type Site = {
  id: string
  name: string
  address: string
  tags: string[]
  dateAdded: string
  status: SiteStatus
  country: string
  zones: number
  devices: number
  sensors: number
  timezone: string
}

type SortColumn = "name" | "dateAdded"
type SortDir = "asc" | "desc"

// ─── Placeholder data — replace with API call ─────────────────────────────────

const SITES: Site[] = [
  {
    id: "1",
    name: "123 Upper Balulang",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2025-08-19T13:08:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "2",
    name: "123 aam-coatro",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2025-10-16T18:19:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "3",
    name: "123 Coatro",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: ["am coatro", "coatrowst"],
    dateAdded: "2023-01-11T16:28:00",
    status: "in-sync",
    country: "Philippines",
    zones: 2,
    devices: 4,
    sensors: 8,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "4",
    name: "123 Solution Accuracy",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2023-05-23T16:05:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "5",
    name: "123 Turks Rd",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2025-08-19T13:35:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 1,
    devices: 2,
    sensors: 3,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "6",
    name: "AAM-Coatro",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2025-10-14T13:19:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "7",
    name: "am-nano",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2025-10-16T12:56:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 1,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "8",
    name: "amaya231",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2022-01-03T15:37:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "9",
    name: "Angel Site_test26",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2026-01-30T15:06:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 0,
    sensors: 0,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "10",
    name: "ARGO SITE",
    address: "Cagayan de Oro, Misamis Oriental, Philippines",
    tags: [],
    dateAdded: "2022-02-07T17:59:00",
    status: "out-of-sync",
    country: "Philippines",
    zones: 0,
    devices: 3,
    sensors: 6,
    timezone: "(UTC+8) Asia/Manila",
  },
  {
    id: "11",
    name: "Sydney Central",
    address: "Sydney, New South Wales, Australia",
    tags: ["retail"],
    dateAdded: "2024-03-15T09:00:00",
    status: "in-sync",
    country: "Australia",
    zones: 3,
    devices: 10,
    sensors: 15,
    timezone: "(UTC+11) Australia/Sydney",
  },
  {
    id: "12",
    name: "Melbourne Hub",
    address: "Melbourne, Victoria, Australia",
    tags: [],
    dateAdded: "2024-04-01T10:30:00",
    status: "out-of-sync",
    country: "Australia",
    zones: 2,
    devices: 5,
    sensors: 8,
    timezone: "(UTC+11) Australia/Melbourne",
  },
  {
    id: "13",
    name: "Brisbane North",
    address: "Brisbane, Queensland, Australia",
    tags: ["flagship"],
    dateAdded: "2024-06-12T08:00:00",
    status: "in-sync",
    country: "Australia",
    zones: 4,
    devices: 12,
    sensors: 20,
    timezone: "(UTC+10) Australia/Brisbane",
  },
  {
    id: "14",
    name: "Beijing Site A",
    address: "Chaoyang, Beijing, China",
    tags: [],
    dateAdded: "2024-07-01T07:00:00",
    status: "out-of-sync",
    country: "China",
    zones: 1,
    devices: 2,
    sensors: 4,
    timezone: "(UTC+8) Asia/Shanghai",
  },
  {
    id: "15",
    name: "Berlin Flagship",
    address: "Mitte, Berlin, Germany",
    tags: ["flagship"],
    dateAdded: "2024-09-15T11:00:00",
    status: "in-sync",
    country: "Germany",
    zones: 5,
    devices: 20,
    sensors: 30,
    timezone: "(UTC+1) Europe/Berlin",
  },
]

const KEY_INSIGHTS = [
  "Audience Measurement",
  "People Counting",
  "Content Effectiveness",
  "Zone Engagement",
  "Traffic Measurement",
  "SAM Lines",
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const d = new Date(iso)
  const month = d.toLocaleString("en-US", { month: "short" })
  const day = String(d.getDate()).padStart(2, "0")
  const year = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, "0")
  const mm = String(d.getMinutes()).padStart(2, "0")
  return `${month}-${day}-${year} ${hh}:${mm} ${d.getHours() >= 12 ? "PM" : "AM"}`
}

function truncateAddress(address: string, max = 38): string {
  return address.length > max ? address.slice(0, max) + "..." : address
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SortIcon({ col, sortColumn, sortDir }: { col: SortColumn; sortColumn: SortColumn; sortDir: SortDir }) {
  if (sortColumn !== col) return <ChevronsUpDown className="size-3 ml-1 text-muted-foreground" />
  return sortDir === "asc"
    ? <ArrowUp className="size-3 ml-1" />
    : <ArrowDown className="size-3 ml-1" />
}

function StatusDot({ status }: { status: SiteStatus }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={cn(
          "size-2 rounded-full shrink-0",
          status === "in-sync" ? "bg-success" : "bg-destructive"
        )}
      />
      <span className="text-sm">{status === "in-sync" ? "In Sync" : "Out of Sync"}</span>
    </div>
  )
}

function ExpandedRow({ site }: { site: Site }) {
  return (
    <div className="flex gap-0 border-t border-border bg-muted/20">
      {/* Left panel */}
      <div className="flex flex-col gap-4 min-w-[280px] border-r border-border p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-primary">{site.name}</h3>
          <AppBadge
            variant={site.status === "in-sync" ? "secondary" : "destructive"}
            className={cn(
              "w-fit",
              site.status === "in-sync" && "bg-success text-success-foreground"
            )}
          >
            {site.status === "in-sync" ? "In Sync" : "Out of Sync"}
          </AppBadge>
        </div>
        <div className="flex gap-6">
          {[
            { label: "Zones", value: site.zones },
            { label: "Devices", value: site.devices },
            { label: "Sensors", value: site.sensors },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className="text-2xl font-semibold text-foreground">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin className="size-4 shrink-0 mt-0.5" />
            <span>{site.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0" />
            <span>{site.timezone}</span>
          </div>
        </div>
      </div>
      {/* Right panel */}
      <div className="flex flex-col gap-3 flex-1 p-6">
        <h4 className="font-semibold text-foreground">Today's Key Insights</h4>
        <div className="flex flex-col gap-2">
          {KEY_INSIGHTS.map((insight) => (
            <div key={insight} className="flex items-center gap-3">
              <ChevronUp className="size-3 text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground">{insight}</span>
              <AppBadge variant="default" className="text-xs">COMING SOON</AppBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SitesTable ───────────────────────────────────────────────────────────────

export type SitesTableProps = {
  selectedLocation: string | null
}

export function SitesTable({ selectedLocation }: SitesTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [sortColumn, setSortColumn] = useState<SortColumn>("name")
  const [sortDir, setSortDir] = useState<SortDir>("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState("10")
  const [view, setView] = useState("list")

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleSort = (col: SortColumn) => {
    if (sortColumn === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortColumn(col)
      setSortDir("asc")
    }
  }

  const filtered = useMemo(
    () => (selectedLocation ? SITES.filter((s) => s.country === selectedLocation) : SITES),
    [selectedLocation]
  )

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => {
        let cmp = 0
        if (sortColumn === "name") cmp = a.name.localeCompare(b.name)
        if (sortColumn === "dateAdded")
          cmp = new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        return sortDir === "asc" ? cmp : -cmp
      }),
    [filtered, sortColumn, sortDir]
  )

  const rows = parseInt(rowsPerPage, 10)
  const totalPages = Math.max(1, Math.ceil(sorted.length / rows))
  const paginated = sorted.slice((currentPage - 1) * rows, currentPage * rows)
  const locationLabel = selectedLocation ?? "All"

  const goToPage = (page: number, e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentPage(Math.max(1, Math.min(totalPages, page)))
  }

  // Build visible page numbers with ellipsis
  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "ellipsis")[] = [1]
    if (currentPage > 3) pages.push("ellipsis")
    for (let p = Math.max(2, currentPage - 1); p <= Math.min(totalPages - 1, currentPage + 1); p++) {
      pages.push(p)
    }
    if (currentPage < totalPages - 2) pages.push("ellipsis")
    pages.push(totalPages)
    return pages
  }, [totalPages, currentPage])

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0 bg-card rounded-lg p-4">
      {/* Controls bar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="font-semibold text-foreground text-sm">
            Sites in {locationLabel}
          </span>
          <span className="text-sm text-muted-foreground">{sorted.length} results</span>
        </div>
        {/* Rows per page */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Rows:</span>
          <AppSelect
            value={rowsPerPage}
            onValueChange={(v) => {
              setRowsPerPage(v)
              setCurrentPage(1)
            }}
          >
            <AppSelectTrigger className="h-8 w-16 text-sm">
              <AppSelectValue />
            </AppSelectTrigger>
            <AppSelectContent>
              <AppSelectItem value="10">10</AppSelectItem>
              <AppSelectItem value="25">25</AppSelectItem>
              <AppSelectItem value="50">50</AppSelectItem>
            </AppSelectContent>
          </AppSelect>
        </div>
        {/* Pagination */}
        <AppPagination className="w-auto mx-0 justify-end">
          <AppPaginationContent>
            <AppPaginationItem>
              <AppPaginationPrevious
                href="#"
                onClick={(e) => goToPage(currentPage - 1, e)}
                className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
              />
            </AppPaginationItem>
            {pageNumbers.map((p, i) =>
              p === "ellipsis" ? (
                <AppPaginationItem key={`ellipsis-${i}`}>
                  <AppPaginationEllipsis />
                </AppPaginationItem>
              ) : (
                <AppPaginationItem key={p}>
                  <AppPaginationLink
                    href="#"
                    isActive={currentPage === p}
                    onClick={(e) => goToPage(p, e)}
                  >
                    {p}
                  </AppPaginationLink>
                </AppPaginationItem>
              )
            )}
            <AppPaginationItem>
              <AppPaginationNext
                href="#"
                onClick={(e) => goToPage(currentPage + 1, e)}
                className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
              />
            </AppPaginationItem>
          </AppPaginationContent>
        </AppPagination>
        {/* View toggle */}
        <AppToggleGroup
          type="single"
          value={view}
          onValueChange={(v) => v && setView(v)}
          variant="outline"
          size="sm"
        >
          <AppToggleGroupItem value="list" aria-label="List view">
            <List className="size-4" />
          </AppToggleGroupItem>
          <AppToggleGroupItem value="grid" aria-label="Grid view (coming soon)" disabled>
            <LayoutGrid className="size-4" />
          </AppToggleGroupItem>
        </AppToggleGroup>
      </div>

      {/* Table */}
      <AppTable>
        <AppTableHeader>
          <AppTableRow>
            <AppTableHead className="w-10" />
            <AppTableHead>
              <button
                onClick={() => handleSort("name")}
                className="flex items-center text-xs font-semibold uppercase tracking-wide hover:text-foreground transition-colors"
              >
                Name
                <SortIcon col="name" sortColumn={sortColumn} sortDir={sortDir} />
              </button>
            </AppTableHead>
            <AppTableHead className="text-xs font-semibold uppercase tracking-wide">
              Address
            </AppTableHead>
            <AppTableHead>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
                Tags
                <SlidersHorizontal className="size-3 text-muted-foreground" />
              </span>
            </AppTableHead>
            <AppTableHead>
              <button
                onClick={() => handleSort("dateAdded")}
                className="flex items-center text-xs font-semibold uppercase tracking-wide hover:text-foreground transition-colors"
              >
                Date Added
                <SortIcon col="dateAdded" sortColumn={sortColumn} sortDir={sortDir} />
              </button>
            </AppTableHead>
            <AppTableHead>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
                Status
                <SlidersHorizontal className="size-3 text-muted-foreground" />
              </span>
            </AppTableHead>
            <AppTableHead className="text-xs font-semibold uppercase tracking-wide text-right">
              Actions
            </AppTableHead>
          </AppTableRow>
        </AppTableHeader>
        <AppTableBody>
          {paginated.map((site) => {
            const isExpanded = expandedRows.has(site.id)
            return (
              <React.Fragment key={site.id}>
                <AppTableRow>
                  <AppTableCell>
                    <AppButton
                      variant="outline"
                      size="icon"
                      className="size-6"
                      onClick={() => toggleRow(site.id)}
                    >
                      {isExpanded ? (
                        <Minus className="size-3" />
                      ) : (
                        <Plus className="size-3" />
                      )}
                    </AppButton>
                  </AppTableCell>
                  <AppTableCell>
                    <button className="text-primary text-sm font-medium hover:underline text-left">
                      {site.name}
                    </button>
                  </AppTableCell>
                  <AppTableCell className="text-muted-foreground text-sm">
                    {truncateAddress(site.address)}
                  </AppTableCell>
                  <AppTableCell>
                    <div className="flex flex-wrap gap-1">
                      {site.tags.map((tag) => (
                        <AppBadge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </AppBadge>
                      ))}
                    </div>
                  </AppTableCell>
                  <AppTableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDate(site.dateAdded)}
                  </AppTableCell>
                  <AppTableCell>
                    <StatusDot status={site.status} />
                  </AppTableCell>
                  <AppTableCell className="text-right">
                    <AppDropdownMenu>
                      <AppDropdownMenuTrigger asChild>
                        <AppButton variant="ghost" size="icon" className="size-8">
                          <MoreHorizontal className="size-4" />
                        </AppButton>
                      </AppDropdownMenuTrigger>
                      <AppDropdownMenuContent align="end">
                        <AppDropdownMenuItem>View Details</AppDropdownMenuItem>
                        <AppDropdownMenuItem>Edit Site</AppDropdownMenuItem>
                        <AppDropdownMenuItem>Sync Now</AppDropdownMenuItem>
                        <AppDropdownMenuSeparator />
                        <AppDropdownMenuItem className="text-destructive focus:text-destructive">
                          Delete Site
                        </AppDropdownMenuItem>
                      </AppDropdownMenuContent>
                    </AppDropdownMenu>
                  </AppTableCell>
                </AppTableRow>
                {isExpanded && (
                  <AppTableRow>
                    <AppTableCell colSpan={7} className="p-0">
                      <ExpandedRow site={site} />
                    </AppTableCell>
                  </AppTableRow>
                )}
              </React.Fragment>
            )
          })}
          {paginated.length === 0 && (
            <AppTableRow>
              <AppTableCell
                colSpan={7}
                className="text-center text-muted-foreground py-12 text-sm"
              >
                No sites found for this location.
              </AppTableCell>
            </AppTableRow>
          )}
        </AppTableBody>
      </AppTable>
    </div>
  )
}
