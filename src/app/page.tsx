
import ProductCardList from "@/components/productcard/productCardList";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Featured Products</h1>
      </div>
      <ProductCardList />
    </main>
  );
}