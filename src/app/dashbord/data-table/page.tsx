import { Metadata } from "next";
import { columns } from "./column"
import { DataTable } from "./data-tables"
// static metadata for product page
export const metadata: Metadata = {
  title: 'Products',
  description: "This is product page which list down many products from the website.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'Products',
     description: 'This is product page which list down many products from the website.',
     images: ['A1_Thumbnail_project.png']
  }
};

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