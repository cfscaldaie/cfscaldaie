
import GalleryItem from "@/app/components/ui/GalleryItem";
import { GalleryItemType } from "@/app/types/gallery";
import { getGalleryItems } from "@/app/lib/sanity/fetchGallery";


export const metadata = {
  title: "Aree di intervento",
  description:
    "Aree di intervento, val seriana, val di scalve, bergamo, clusone.",
};

export default async function GallerySection() {

  const items:GalleryItemType[] = await getGalleryItems();
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Le nostre aree di intervento
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {items.map((item: GalleryItemType) => (
           <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
