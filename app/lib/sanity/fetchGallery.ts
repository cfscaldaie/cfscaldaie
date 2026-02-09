import { client } from "./client";
import { galleryQuery } from "./queries";
import { GalleryItemType } from "@/app/types/gallery";
export async function getGalleryItems() : Promise<GalleryItemType[]> {
  return client.fetch(galleryQuery);
}
