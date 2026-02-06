export type MenuItem = {
  label: string;
  href: string;
};

export type SiteSettings = {
  siteTitle: string;
  menu: MenuItem[];
  footerText: string;
  imageUrl: string;
};