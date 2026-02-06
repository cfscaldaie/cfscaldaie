"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<null | boolean>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setConsent(stored === "true");
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setConsent(true);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "false");
    setConsent(false);
  };

  return { consent, accept, reject };
}
