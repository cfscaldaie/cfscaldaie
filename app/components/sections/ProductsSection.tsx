
import ProductCard from "../ui/ProductCard";
import { getProducts } from "@/app/lib/sanity/fetchProducts";
import { ProductType } from "@/app/types/product";
export const metadata = {
  title: "Servizi",
  description:
    "C.F.S. Caldaie servizi, manutenzione, idraulica, termoconvettori",
};

export default async function ProductsSection() {
const products: ProductType[] = await getProducts();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        I nostri servizi
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product: ProductType) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}
