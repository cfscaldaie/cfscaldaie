
export default {
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Titolo",
      type: "string",
    },
    {
      name: "heroSubtitle",
      title: "Sotto-titolo",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Immagine principale",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Nome",
      type: "string",
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 4,
    },
    {
      name: "experience",
      title: "Esperienza",
      type: "text",
      rows: 4,
    },
    {
      name: "philosophy",
      title: "Filosofia",
      type: "text",
      rows: 4,
    },
  ],
};
