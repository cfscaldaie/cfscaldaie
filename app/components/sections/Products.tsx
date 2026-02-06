import ProductCard from "../ui/ProductCard";
type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

type ProductsProps = {
  items: Product[];
};

export const metadata = {
  title: "Servizi",
  description:
    "C.F.S. Caldaie servizi",
};

export default function Products({ items }: ProductsProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        I nostri servizi
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
