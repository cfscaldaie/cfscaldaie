export default {
  name: "galleryItem",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
    },
    {
      name: "image",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Ordine",
      type: "number",
    },
  ],
};
