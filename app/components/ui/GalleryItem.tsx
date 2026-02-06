
import Image from "next/image";
import { GalleryItem } from "@/app/types/gallery";

type Props = {
  item: GalleryItem;
};

export default function GalleryItemComponent({ item }: Props) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded">
      <Image
        src={item.imageUrl}
        alt={item.title ?? "Gallery image"}
        fill
        className="object-cover hover:scale-105 transition"
      />

      {/* Overlay con il titolo */}
      {item.title && (
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2">
          {item.title}
        </div>
      )}
    </div>
  );
}
