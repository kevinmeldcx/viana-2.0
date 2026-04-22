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
import { AppProgress } from "@/components/primitives/AppProgress"
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
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuSeparator,
} from "@/components/primitives/AppDropdownMenu"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type DeviceStatus = "online" | "offline"

type Device = {
  id: string
  name: string
  site: string
  zone: string
  dateAdded: string
  status: DeviceStatus
  lastActive: string
  lastModified: string
  lastModifiedBy: string
  serialNumber: string
  sensorsConnected: number
  vianaVersion: string
  model: string
  os: string
  ipAddress: string
  macAddress: string
  cpu: number
  memory: number
  storagePct: number
  storageUsed: number
  storageTotal: number
  location: string
}

type SortColumn = "name" | "dateAdded" | "lastActive" | "lastModified"
type SortDir = "asc" | "desc"

// ─── Placeholder data — replace with API call ─────────────────────────────────

const KEY_INSIGHTS = [
  "Audience Measurement",
  "People Counting",
  "Content Effectiveness",
  "Zone Engagement",
  "Traffic Measurement",
  "SAM Lines",
]

const DEVICES: Device[] = [
  {
    id: "1",
    name: "SENECA-I7",
    site: "123 Coatro",
    zone: "AM Coatro",
    dateAdded: "2026-04-20T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-20T17:56:00",
    lastModifiedBy: "Jession Dev",
    serialNumber: "d5e53774-12de-4315-bc1f-2564e1761d11",
    sensorsConnected: 1,
    vianaVersion: "—",
    model: "10TCS0DS00",
    os: "Microsoft Windows 10 IoT Enterprise LTSC",
    ipAddress: "192.168.0.150",
    macAddress: "AC-6-7:-5D:-6-2--64:-D-9",
    cpu: 20,
    memory: 57,
    storagePct: 30,
    storageUsed: 73,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "2",
    name: "TENSOR",
    site: "amaya231",
    zone: "test",
    dateAdded: "2026-04-20T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-21T10:51:00",
    lastModifiedBy: "Jession Dev",
    serialNumber: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    sensorsConnected: 0,
    vianaVersion: "2.1.4",
    model: "TENSOR-X1",
    os: "Linux Ubuntu 22.04 LTS",
    ipAddress: "192.168.1.101",
    macAddress: "B4-2E-99-A1-C3-F0",
    cpu: 45,
    memory: 62,
    storagePct: 18,
    storageUsed: 43,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "3",
    name: "DESKTOP-H5U06IP",
    site: "123 Solution Accuracy",
    zone: "JNY Standard A",
    dateAdded: "2026-04-01T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-01T17:25:00",
    lastModifiedBy: "Yves Arbues",
    serialNumber: "c9d8e7f6-a5b4-3210-fedc-ba9876543210",
    sensorsConnected: 2,
    vianaVersion: "2.0.9",
    model: "HP ProDesk 600 G6",
    os: "Microsoft Windows 10 Pro",
    ipAddress: "10.0.0.55",
    macAddress: "00-1A-2B-3C-4D-5E",
    cpu: 12,
    memory: 38,
    storagePct: 52,
    storageUsed: 123,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "4",
    name: "DESKTOP-NCBTMD5",
    site: "SkunkWorks Ph",
    zone: "Arrow test",
    dateAdded: "2026-04-21T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-21T14:02:00",
    lastModifiedBy: "Marc Chelo Suello",
    serialNumber: "f1e2d3c4-b5a6-9870-cdef-012345678901",
    sensorsConnected: 3,
    vianaVersion: "2.1.0",
    model: "Dell OptiPlex 7090",
    os: "Microsoft Windows 11 Pro",
    ipAddress: "172.16.0.23",
    macAddress: "A0-B1-C2-D3-E4-F5",
    cpu: 67,
    memory: 81,
    storagePct: 44,
    storageUsed: 104,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "5",
    name: "ubuntumarc-NUC11PAHi7",
    site: "SkunkWorks Ph",
    zone: "Arrow test",
    dateAdded: "2026-04-14T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-17T10:46:00",
    lastModifiedBy: "Marc Chelo Suello",
    serialNumber: "11223344-5566-7788-99aa-bbccddeeff00",
    sensorsConnected: 1,
    vianaVersion: "2.1.2",
    model: "Intel NUC11PAHi7",
    os: "Ubuntu 22.04.3 LTS",
    ipAddress: "192.168.2.77",
    macAddress: "FC-AA-14-7B-3E-29",
    cpu: 33,
    memory: 49,
    storagePct: 71,
    storageUsed: 168,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "6",
    name: "alzer-B560M-DS3H-V2",
    site: "123 Coatro",
    zone: "TRAM Coatro",
    dateAdded: "2026-03-13T00:00:00",
    status: "online",
    lastActive: "2026-04-21T23:17:00",
    lastModified: "2026-04-20T16:48:00",
    lastModifiedBy: "Marc Chelo Suello",
    serialNumber: "deadbeef-cafe-babe-face-0123456789ab",
    sensorsConnected: 2,
    vianaVersion: "2.0.7",
    model: "Gigabyte B560M DS3H V2",
    os: "Microsoft Windows 10 Home",
    ipAddress: "192.168.0.212",
    macAddress: "28-D2-44-EF-08-1C",
    cpu: 8,
    memory: 22,
    storagePct: 35,
    storageUsed: 83,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "7",
    name: "NANO-CDO-01",
    site: "am-nano",
    zone: "Floor A",
    dateAdded: "2025-12-10T00:00:00",
    status: "offline",
    lastActive: "2026-04-19T08:00:00",
    lastModified: "2026-04-10T09:30:00",
    lastModifiedBy: "Jession Dev",
    serialNumber: "99887766-5544-3322-1100-ffeeddccbbaa",
    sensorsConnected: 0,
    vianaVersion: "1.9.5",
    model: "NVIDIA Jetson Nano",
    os: "JetPack 5.1.2",
    ipAddress: "192.168.3.45",
    macAddress: "48-B0-2D-A1-7F-E3",
    cpu: 0,
    memory: 0,
    storagePct: 0,
    storageUsed: 0,
    storageTotal: 237,
    location: "Philippines",
  },
  {
    id: "8",
    name: "ARGO-KIOSK-01",
    site: "ARGO SITE",
    zone: "Entrance",
    dateAdded: "2022-02-07T00:00:00",
    status: "online",
    lastActive: "2026-04-21T20:00:00",
    lastModified: "2026-04-18T14:00:00",
    lastModifiedBy: "Jession Dev",
    serialNumber: "aabbccdd-eeff-0011-2233-445566778899",
    sensorsConnected: 3,
    vianaVersion: "2.1.1",
    model: "Custom Kiosk X200",
    os: "Microsoft Windows 10 IoT Enterprise LTSC",
    ipAddress: "10.10.1.5",
    macAddress: "DC-A6-32-11-22-33",
    cpu: 55,
    memory: 70,
    storagePct: 60,
    storageUsed: 142,
    storageTotal: 237,
    location: "Philippines",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const d = new Date(iso)
  const month = d.toLocaleString("en-US", { month: "short" })
  const day = String(d.getDate()).padStart(2, "0")
  const year = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, "0")
  const mm = String(d.getMinutes()).padStart(2, "0")
  const ampm = d.getHours() >= 12 ? "PM" : "AM"
  return `${day} ${month} ${year} ${hh}:${mm} ${ampm}`
}

function formatDateShort(iso: string): string {
  const d = new Date(iso)
  const month = d.toLocaleString("en-US", { month: "short" })
  const day = String(d.getDate()).padStart(2, "0")
  const year = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, "0")
  const mm = String(d.getMinutes()).padStart(2, "0")
  const ampm = d.getHours() >= 12 ? "PM" : "AM"
  return `${day} ${month} ${year} ${hh}:${mm} ${ampm}`
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SortIcon({
  col,
  sortColumn,
  sortDir,
}: {
  col: SortColumn
  sortColumn: SortColumn
  sortDir: SortDir
}) {
  if (sortColumn !== col) return <ChevronsUpDown className="size-3 ml-1 text-muted-foreground" />
  return sortDir === "asc" ? (
    <ArrowUp className="size-3 ml-1" />
  ) : (
    <ArrowDown className="size-3 ml-1" />
  )
}

function StatusDot({ status }: { status: DeviceStatus }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={cn(
          "size-2 rounded-full shrink-0",
          status === "online" ? "bg-success" : "bg-muted-foreground"
        )}
      />
      <span className="text-sm">{status === "online" ? "Online" : "Offline"}</span>
    </div>
  )
}

function DeviceHealthBar({
  label,
  value,
  detail,
}: {
  label: string
  value: number
  detail?: string
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-foreground w-20 shrink-0">{label}</span>
      <div className="flex-1">
        <AppProgress value={value} />
      </div>
      <span className="text-sm text-muted-foreground shrink-0 text-right w-28">
        {detail ?? `${value}%`}
      </span>
    </div>
  )
}

function ExpandedRow({ device }: { device: Device }) {
  return (
    <div className="flex border-t border-border bg-muted/20">
      {/* Left panel — device info */}
      <div className="flex flex-col gap-3 min-w-[260px] border-r border-border p-6">
        <h3 className="text-lg font-bold text-primary">{device.name}</h3>
        <div className="flex flex-col gap-2 text-sm">
          {[
            { label: "Serial Number:", value: device.serialNumber, mono: true },
            {
              label: "",
              value: `${device.sensorsConnected} Sensor(s) Connected`,
            },
            { label: "Viana Version", value: device.vianaVersion },
            { label: "Model", value: device.model },
            { label: "OS", value: device.os },
            { label: "IP Address", value: device.ipAddress },
            { label: "MAC Address", value: device.macAddress },
          ].map(({ label, value, mono }, i) => (
            <div key={i} className="flex gap-4">
              {label ? (
                <>
                  <span className="text-muted-foreground font-medium w-28 shrink-0">{label}</span>
                  <span className={cn("text-foreground break-all", mono && "font-mono text-xs")}>
                    {value}
                  </span>
                </>
              ) : (
                <span className="text-muted-foreground text-xs col-span-2">{value}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-auto pt-2">
          Last active:{" "}
          <span className="font-semibold text-foreground">{formatDate(device.lastActive)}</span>
        </p>
      </div>

      {/* Center panel — device health */}
      <div className="flex flex-col gap-4 flex-1 border-r border-border p-6">
        <h4 className="font-semibold text-foreground">Device Health</h4>
        <div className="flex flex-col gap-3">
          <DeviceHealthBar label="CPU" value={device.cpu} />
          <DeviceHealthBar label="Memory" value={device.memory} />
          <DeviceHealthBar
            label="Storage"
            value={device.storagePct}
            detail={`${device.storagePct}% (${device.storageUsed} GB / ${device.storageTotal} GB)`}
          />
        </div>
      </div>

      {/* Right panel — key insights */}
      <div className="flex flex-col gap-3 flex-1 p-6">
        <h4 className="font-semibold text-foreground">Today's Key Insights</h4>
        <div className="flex flex-col gap-2">
          {KEY_INSIGHTS.map((insight) => (
            <div key={insight} className="flex items-center gap-3">
              <ChevronUp className="size-3 text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground">{insight}</span>
              <AppBadge variant="default" className="text-xs">
                COMING SOON
              </AppBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── DevicesTable ─────────────────────────────────────────────────────────────

export type DevicesTableProps = {
  selectedLocation: string | null
}

export function DevicesTable({ selectedLocation }: DevicesTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [sortColumn, setSortColumn] = useState<SortColumn>("name")
  const [sortDir, setSortDir] = useState<SortDir>("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState("10")

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

  const filtered = useMemo(() => {
    if (!selectedLocation) return DEVICES
    if (selectedLocation === "__unallocated__") return []
    return DEVICES.filter((d) => d.location === selectedLocation)
  }, [selectedLocation])

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => {
        let cmp = 0
        if (sortColumn === "name") cmp = a.name.localeCompare(b.name)
        if (sortColumn === "dateAdded")
          cmp = new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        if (sortColumn === "lastActive")
          cmp = new Date(a.lastActive).getTime() - new Date(b.lastActive).getTime()
        if (sortColumn === "lastModified")
          cmp = new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime()
        return sortDir === "asc" ? cmp : -cmp
      }),
    [filtered, sortColumn, sortDir]
  )

  const rows = parseInt(rowsPerPage, 10)
  const totalPages = Math.max(1, Math.ceil(sorted.length / rows))
  const paginated = sorted.slice((currentPage - 1) * rows, currentPage * rows)

  const locationLabel =
    selectedLocation === "__unallocated__"
      ? "Unallocated"
      : selectedLocation ?? "All"

  const goToPage = (page: number, e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentPage(Math.max(1, Math.min(totalPages, page)))
  }

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "ellipsis")[] = [1]
    if (currentPage > 3) pages.push("ellipsis")
    for (
      let p = Math.max(2, currentPage - 1);
      p <= Math.min(totalPages - 1, currentPage + 1);
      p++
    ) {
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
            {locationLabel === "All" ? "All Devices" : `Devices in ${locationLabel}`}
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
            <AppTableHead>
              <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
                Site
                <SlidersHorizontal className="size-3 text-muted-foreground" />
              </span>
            </AppTableHead>
            <AppTableHead className="text-xs font-semibold uppercase tracking-wide">
              Zone
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
                Device Status
                <SlidersHorizontal className="size-3 text-muted-foreground" />
              </span>
            </AppTableHead>
            <AppTableHead>
              <button
                onClick={() => handleSort("lastActive")}
                className="flex items-center text-xs font-semibold uppercase tracking-wide hover:text-foreground transition-colors"
              >
                Last Active
                <SortIcon col="lastActive" sortColumn={sortColumn} sortDir={sortDir} />
              </button>
            </AppTableHead>
            <AppTableHead>
              <button
                onClick={() => handleSort("lastModified")}
                className="flex items-center text-xs font-semibold uppercase tracking-wide hover:text-foreground transition-colors"
              >
                Last Modified
                <SortIcon col="lastModified" sortColumn={sortColumn} sortDir={sortDir} />
              </button>
            </AppTableHead>
            <AppTableHead className="text-xs font-semibold uppercase tracking-wide text-right">
              Actions
            </AppTableHead>
          </AppTableRow>
        </AppTableHeader>
        <AppTableBody>
          {paginated.map((device) => {
            const isExpanded = expandedRows.has(device.id)
            return (
              <React.Fragment key={device.id}>
                <AppTableRow>
                  <AppTableCell>
                    <AppButton
                      variant="outline"
                      size="icon"
                      className="size-6"
                      onClick={() => toggleRow(device.id)}
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
                      {device.name}
                    </button>
                  </AppTableCell>
                  <AppTableCell>
                    <button className="text-primary text-sm hover:underline text-left">
                      {device.site}
                    </button>
                  </AppTableCell>
                  <AppTableCell className="text-sm text-muted-foreground">
                    {device.zone}
                  </AppTableCell>
                  <AppTableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDateShort(device.dateAdded)}
                  </AppTableCell>
                  <AppTableCell>
                    <StatusDot status={device.status} />
                  </AppTableCell>
                  <AppTableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDate(device.lastActive)}
                  </AppTableCell>
                  <AppTableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    <div className="flex flex-col">
                      <span>{formatDateShort(device.lastModified)}</span>
                      <span className="text-xs">by {device.lastModifiedBy}</span>
                    </div>
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
                        <AppDropdownMenuItem>Edit Device</AppDropdownMenuItem>
                        <AppDropdownMenuItem>Restart Device</AppDropdownMenuItem>
                        <AppDropdownMenuSeparator />
                        <AppDropdownMenuItem className="text-destructive focus:text-destructive">
                          Delete Device
                        </AppDropdownMenuItem>
                      </AppDropdownMenuContent>
                    </AppDropdownMenu>
                  </AppTableCell>
                </AppTableRow>
                {isExpanded && (
                  <AppTableRow>
                    <AppTableCell colSpan={9} className="p-0">
                      <ExpandedRow device={device} />
                    </AppTableCell>
                  </AppTableRow>
                )}
              </React.Fragment>
            )
          })}
          {paginated.length === 0 && (
            <AppTableRow>
              <AppTableCell
                colSpan={9}
                className="text-center text-muted-foreground py-12 text-sm"
              >
                No devices found for this location.
              </AppTableCell>
            </AppTableRow>
          )}
        </AppTableBody>
      </AppTable>
    </div>
  )
}
