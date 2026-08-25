
"use client";

import EcommerceProductCard from "./productCard";


export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();


  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.isArray(products) &&
        products.map((p: any) => (
          <EcommerceProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            subtitle={p.category}
            price={p.price}
            imageUrl={p.image}
            imageAlt={p.title}
          />
        ))}
    </div>
  );
}

