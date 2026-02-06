export default {
  name: "siteSettings",
  title: "Impostazioni sito",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Titolo sito",
      type: "string",
    },
    {
      name: "menu",
      title: "Menu di navigazione",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Etichetta" },
            { name: "href", type: "string", title: "Link" },
          ],
        },
      ],
    },
    {
      name: "footerText",
      title: "Testo footer",
      type: "text",
    },
    {
      name: "image",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
