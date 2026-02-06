import Header from "./Header";
import Footer from "./Footer";

import CookieBanner from "@/app/components/ui/CookieBanner";
import { getSiteSettings } from "@/app/lib/sanity/fetchSitesSettings";

import { getContactPage } from "@/app/lib/sanity/fetchContact";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const data = await getContactPage();
  return (
    <>
      <Header phone={data.phone} email={data.email} imageUrl={settings.imageUrl} title={settings.siteTitle} menu={settings.menu} />
      <CookieBanner />
      <main>{children}</main>
      <Footer text={settings.footerText} data={data} imageUrl={settings.imageUrl} />
 
    </>
  );
}