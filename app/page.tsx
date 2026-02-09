import Hero from "./components/sections/Hero";
import ProductsSection from "./components/sections/ProductsSection";
import GallerySection from "./components/sections/GallerySection";
import { getHomeBanner } from "./lib/sanity/fetchBanner";
import { getHomeData } from "./lib/sanity/fetchHome";
import HomeBanner from "./components/ui/HomeBanner";

export default async function Home() {
  const banner = await getHomeBanner();
  const homeData = await getHomeData();
  
  return (
    <div>
      <HomeBanner banner={banner}></HomeBanner>
    
      <Hero
        title={homeData.heroTitle}
        subtitle={homeData.heroSubtitle}
        imageUrl={homeData.heroImageUrl}
      />

      <section className="max-w-4xl mx-auto px-6 py-20 text-white"> {/* Aggiunto text-white qui */}
        {homeData.name && homeData.name.trim() !== "" && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-3">Chi sono</h3>
            <p className="text-lg">{homeData.name}</p> {/* Rimosso text-gray-700 */}
          </div>
        )}
       
{homeData.intro && homeData.intro.trim() !== "" && (
  <div className="mb-12 max-w-3xl">
    <h3 className="text-2xl font-bold mb-3">Introduzione</h3>
    <p className="leading-relaxed whitespace-pre-line">
      {homeData.intro}
    </p>
  </div>
)}

{homeData.experience && homeData.experience.trim() !== "" && (
  <div className="mb-12 max-w-3xl">
    <h3 className="text-2xl font-bold mb-3">Esperienza</h3>
    <p className="leading-relaxed whitespace-pre-line">
      {homeData.experience}
    </p>
  </div>
)}

{homeData.philosophy && homeData.philosophy.trim() !== "" && (
  <div className="mb-12 max-w-3xl">
    <h3 className="text-2xl font-bold mb-3">Filosofia</h3>
    <p className="leading-relaxed whitespace-pre-line">
      {homeData.philosophy}
    </p>
  </div>
)}

      </section>

      <ProductsSection></ProductsSection>
      <GallerySection />
    </div>
  );
}