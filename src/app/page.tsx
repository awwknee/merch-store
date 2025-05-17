
async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">The Merch :3</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {products.map((p: any) => (
          <li key={p.id} className="border p-4 rounded shadow">
            <h2 className="text-xl">{p.name}</h2>
            <p>${p.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
