
import { getContactPage } from "@/app/lib/sanity/fetchContact";
import ContactForm from "@/app/components/ui/ContactForm";



export default async function ContactPage() {
  const data = await getContactPage();

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto flex flex-col items-center text-center gap-12">

      {/* SEZIONE CONTATTI */}
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

        <p><strong>Indirizzo:</strong> {data.address}</p>
        <p><strong>Telefono:</strong> 
        <a
            href="tel:{data.phone}">
              {data.phone}
            </a>
        
        
        </p>
        <p><strong>WhatsApp:</strong> <a
  href={`https://wa.me/${data.phone.replace(/\D/g, "")}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {data.phone}
</a></p>
        <p><strong>Email:</strong> {data.email}</p>

        <pre className="mt-4 whitespace-pre-line">
          {data.openingHours}
        </pre>

        {data.mapUrl && (
          <iframe
            src={data.mapUrl}
            className="w-full h-64 mt-6 rounded"
            loading="lazy"
          />
        )}
      </div>

      {/* FORM CONTATTI SOTTO */}
      <div className="w-full">
        <ContactForm />
      </div>

    </section>
  );
}
