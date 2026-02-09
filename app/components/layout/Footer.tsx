
"use client";

type Props = {
  text: string;
  data: any;
};

export default function Footer({ text, data }: Props) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-neutral-900 text-neutral-200 py-12 mt-20" style={{ backgroundColor: "#1e397f" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID PRINCIPALE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative">

          {/* COLONNA 1 - INDIRIZZO */}
          <div>
            <p className="whitespace-pre-line">{data.address}</p>
          </div>

          {/* COLONNA 2 - CONTATTI */}
          <div>
            <a href={`tel:${data.phone}`} className="block hover:underline">
              {data.phone}
            </a>
            <a href={`mailto:${data.email}`} className="block hover:underline mt-1">
              {data.email}
            </a>
          </div>

          

          {/* PULSANTE TORNA SU */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 -top-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 cursor-pointer transition"
            aria-label="Torna su"
          >
            ↑
          </button>
        </div>

        {/* LINEA */}
        <div className="border-t border-neutral-700 mt-10 pt-6 text-sm">
          <p className="whitespace-pre-wrap">{text}</p>

          {/* POLICY */}
          <p className="mt-2 text-xs">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> ·{" "}
        
            <a href="/cookie" className="hover:underline">Cookie Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
