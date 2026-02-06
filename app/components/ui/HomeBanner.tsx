import Link from "next/link";
import { HomeBanner as BannerType } from "@/app/types/banner";

export default function HomeBanner({ banner }: { banner: BannerType }) {
  if (!banner?.enabled) return null;

  return (
    <div
      className="text-white py-6 px-6 text-center"
      style={{ backgroundColor: banner.backgroundColor }}
    >
      <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
      <p className="mb-4">{banner.text}</p>

      {banner.ctaLabel && banner.ctaUrl && (
        <Link
          href={banner.ctaUrl}
          className="inline-block bg-white text-black px-4 py-2 rounded"
        >
          {banner.ctaLabel}
        </Link>
      )}
    </div>
  );
}
