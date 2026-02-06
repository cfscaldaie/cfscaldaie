"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactForm() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!window.grecaptcha) {
    console.error("reCAPTCHA non è ancora pronto");
    return;
  }
  const recaptchaToken = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );
    
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        recaptchaToken,
      }),
    });

    form.reset();
  }

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-4xl font-bold mb-6">Scrivici</h1>
      <input name="name" required placeholder="Nome" className="border p-2 w-full" />
      <input name="email" required type="email" placeholder="Email" className="border p-2 w-full" />
      <textarea name="message" required placeholder="Messaggio" className="border p-2 w-full" />
      <button className="bg-black text-white px-4 py-2">Invia</button>
    </form>
  );

}