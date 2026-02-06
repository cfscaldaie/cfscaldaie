import { client } from "./client";
import { galleryQuery } from "./queries";

export async function getGalleryItems() {
  return client.fetch(galleryQuery);
}
