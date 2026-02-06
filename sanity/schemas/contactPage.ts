export default {
  name: "contactPage",
  title: "Pagina Contatti",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
    },
    {
      name: "address",
      title: "Indirizzo",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefono",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "openingHours",
      title: "Orari di apertura",
      type: "text",
      rows: 4,
    },
    {
      name: "mapUrl",
      title: "Google Maps Embed URL",
      type: "url",
    },
  ],
};
