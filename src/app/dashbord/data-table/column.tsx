"use client"

import { createColumnHelper, type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { DataTableFeatures } from "./data-table-features"
import type { product } from "./page"

const columnHelper = createColumnHelper<DataTableFeatures, product>()

export const columns = [
  columnHelper.accessor("title", {
    id: "title",
    header: "Title",
    cell: ({ getValue }) => <span>{String(getValue())}</span>,
  }),
  columnHelper.accessor("price", {
    id: "price",
    header: "Price",
    cell: ({ getValue }) => <span>${Number(getValue()).toFixed(2)}</span>,
  }),
  columnHelper.accessor("image", {
    id: "image",
    header: "Image",
    cell: ({ getValue }) => {
      const src = String(getValue() ?? "")

      if (!src) return <span>No image</span>

      return (
        <img
          src={src}
          alt="Product"
          className="h-12 w-12 rounded-md object-cover"
        />
      )
    },
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0" type="button">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(product.id))}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>View product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }),
]