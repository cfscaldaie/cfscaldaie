export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    siteTitle,
    menu,
    footerText,
    "imageUrl": image.asset->url
  }
`;
export const productsQuery = `
  *[_type == "product"]{
    _id,
    name,
    description,
    "imageUrl": image.asset->url
  }
`;

export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    name,
    description,
    "imageUrl": image.asset->url
  }
`;


export const galleryQuery = `
  *[_type == "galleryItem"] | order(order asc){
    _id,
    title,
    "imageUrl": image.asset->url
  }
`;

export const contactPageQuery = `
  *[_type == "contactPage"][0]{
    title,
    address,
    phone,
    email,
    openingHours,
    mapUrl
  }
`;

export const homeBannerQuery = `
  *[_type == "homeBanner"][0]{
    enabled,
    title,
    text,
    ctaLabel,
    ctaUrl,
    backgroundColor
  }
`;

export const homeQuery = `
    *[_type == "home"][0]{
      heroTitle,
      heroSubtitle,
      "heroImageUrl": heroImage.asset->url,
      name,
      intro,
      experience,
      philosophy
    }
  `