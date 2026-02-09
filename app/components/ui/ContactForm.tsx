"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false); 
  const [token, setToken] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (loading) return;
    
    setLoading(true); 

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (!window.grecaptcha) {
      console.error("reCAPTCHA non è ancora pronto");
      setLoading(false); 
      return;
    }
    
    try {
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
      
     
      alert("Messaggio inviato con successo!");
      
    } catch (error) {
      console.error("Errore nell'invio:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-4xl font-bold mb-6">Scrivici</h1>
      
      <input 
        name="name" 
        required 
        placeholder="Nome" 
        className="border p-2 w-full" 
        disabled={loading} 
      />
      
      <input 
        name="email" 
        required 
        type="email" 
        placeholder="Email" 
        className="border p-2 w-full" 
        disabled={loading}
      />
      
      <textarea 
        name="message" 
        required 
        placeholder="Messaggio" 
        className="border p-2 w-full" 
        disabled={loading}
      />
      
      <button 
        type="submit"
        disabled={loading} 
        className={`bg-black text-white px-4 py-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Invio in corso...
          </span>
        ) : (
          "Invia"
        )}
      </button>
    </form>
  );
}