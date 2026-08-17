
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <main className="container mx-auto py-16">
        <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
          Product not found.
        </div>
      </main>
    );
  }

  const product = await res.json();

  return (
    <main className="container mx-auto py-12">
      <div className="grid gap-8 rounded-2xl border bg-card p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="flex items-center justify-center rounded-2xl bg-muted/30 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
              In Stock
            </span>
          </div>

          <p className="mt-6 text-base leading-7 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Add to cart
            </button>
            <button className="rounded-xl border px-6 py-3 font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
