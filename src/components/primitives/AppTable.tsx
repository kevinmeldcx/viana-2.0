"use client"

import * as React from "react"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"

/**
 * AppTable — A responsive table component for displaying data in rows and columns.
 * @note Never use the raw HTML equivalent. Use AppTable.
 * @note If a prop you need is missing, stop and inform the design team.
 */
type AppTableProps = React.ComponentProps<typeof Table>

function AppTable(props: AppTableProps) {
  return <Table {...props} />
}

/**
 * AppTableHeader — The header section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableHeader.
 */
type AppTableHeaderProps = React.ComponentProps<typeof TableHeader>

function AppTableHeader(props: AppTableHeaderProps) {
  return <TableHeader {...props} />
}

/**
 * AppTableBody — The body section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableBody.
 */
type AppTableBodyProps = React.ComponentProps<typeof TableBody>

function AppTableBody(props: AppTableBodyProps) {
  return <TableBody {...props} />
}

/**
 * AppTableFooter — The footer section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableFooter.
 */
type AppTableFooterProps = React.ComponentProps<typeof TableFooter>

function AppTableFooter(props: AppTableFooterProps) {
  return <TableFooter {...props} />
}

/**
 * AppTableHead — A header cell within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableHead.
 */
type AppTableHeadProps = React.ComponentProps<typeof TableHead>

function AppTableHead(props: AppTableHeadProps) {
  return <TableHead {...props} />
}

/**
 * AppTableRow — A row within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableRow.
 * @note Set data-state="selected" to apply the selection highlight.
 */
type AppTableRowProps = React.ComponentProps<typeof TableRow>

function AppTableRow(props: AppTableRowProps) {
  return <TableRow {...props} />
}

/**
 * AppTableCell — A cell within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableCell.
 */
type AppTableCellProps = React.ComponentProps<typeof TableCell>

function AppTableCell(props: AppTableCellProps) {
  return <TableCell {...props} />
}

/**
 * AppTableCaption — A caption for an AppTable. Place as the first child of AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableCaption.
 */
type AppTableCaptionProps = React.ComponentProps<typeof TableCaption>

function AppTableCaption(props: AppTableCaptionProps) {
  return <TableCaption {...props} />
}

export {
  AppTable, type AppTableProps,
  AppTableHeader, type AppTableHeaderProps,
  AppTableBody, type AppTableBodyProps,
  AppTableFooter, type AppTableFooterProps,
  AppTableHead, type AppTableHeadProps,
  AppTableRow, type AppTableRowProps,
  AppTableCell, type AppTableCellProps,
  AppTableCaption, type AppTableCaptionProps,
}
