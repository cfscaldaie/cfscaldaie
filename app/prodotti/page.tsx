
import { getProducts } from "@/app/lib/sanity/fetchProducts";
import { ProductType } from "../types/product";
import ProductCard from "../components/ui/ProductCard";


export const metadata = {
  title: "Servizi",
  description:
    "Servizi C.F.S. Caldaie",
};


export default async function ProductsPage() {
  const products:ProductType[] = await getProducts();
    
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">I nostri Servizi</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product:ProductType) => (
          <div
            key={product._id}
            
          >
            <ProductCard key={product._id} {...product}/>
          </div>
        ))}
      </div>
    </section>
  );
}
