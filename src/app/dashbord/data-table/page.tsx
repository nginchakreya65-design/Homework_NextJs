import { columns } from "./column"
import { DataTable } from "./data-tables"

export type product = {
  id: string | number
  price: number
  title: string
  image?: string
  images?: string[]
}

async function getData(): Promise<product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products")

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const data = (await res.json()) as product[]

  return data.map((item) => ({
    ...item,
    image: item.image ?? item.images?.[0] ?? "",
  }))
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}