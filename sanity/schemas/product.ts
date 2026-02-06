export default {
  name: "product",
  title: "Prodotti",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome prodotto",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descrizione",
      type: "text",
      rows: 3,
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
