
"use client";

import { useCookieConsent } from "@/app/hooks/useCookieConsent";

export default function CookieBanner() {
  const { consent, accept, reject } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <>
      {/* Overlay che blocca l'interazione */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-auto"></div>

      {/* Banner cookie */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            Questo sito utilizza cookie tecnici e di terze parti per migliorare
            l’esperienza utente.
          </p>

          <div className="flex gap-3">
            <button
              onClick={reject}
              className="border border-white px-4 py-2 text-sm"
            >
              Rifiuta
            </button>
            <button
              onClick={accept}
              className="bg-white text-black px-4 py-2 text-sm"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
