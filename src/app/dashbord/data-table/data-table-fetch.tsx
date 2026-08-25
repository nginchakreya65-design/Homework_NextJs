"use client"

import useSWR from "swr"

import { DataTable } from "./data-tables"
import { columns } from "./column"
import type { product } from "./page"

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default function DataTableFetch() {
  const { data, error, isLoading } = useSWR<product[]>(
    "https://api.escuelajs.co/api/v1/products",
    fetcher,
  )

  if (error) return <div>Failed to load product</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  console.log("My Data:", data)

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}