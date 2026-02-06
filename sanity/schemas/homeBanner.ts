export default {
  name: "homeBanner",
  title: "Banner Homepage",
  type: "document",
  fields: [
    {
      name: "enabled",
      title: "Banner attivo",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Titolo",
      type: "string",
    },
    {
      name: "text",
      title: "Testo",
      type: "text",
      rows: 3,
    },
    {
      name: "ctaLabel",
      title: "Testo bottone",
      type: "string",
    },
    {
      name: "ctaUrl",
      title: "Link bottone",
      type: "string",
    },
    {
      name: "backgroundColor",
      title: "Colore sfondo (hex)",
      type: "string",
      initialValue: "#111827",
    },
  ],
};
