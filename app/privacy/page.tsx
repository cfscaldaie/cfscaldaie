
import { getContactPage } from "@/app/lib/sanity/fetchContact";



export const metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali",
};

export default async function PrivacyPolicyPage() {
const data = await getContactPage();
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 prose prose-neutral">
      <h1>Privacy Policy</h1>

      <p>
        La presente informativa viene resa ai sensi degli articoli 13 e 14 del
        Regolamento UE 2016/679 (“GDPR”) e descrive le modalità con cui questo
        sito tratta i dati personali degli utenti che lo consultano o che
        utilizzano i servizi offerti.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        <strong>CFS Caldaie</strong><br />
        {data.address}<br />
        Email: {data.email}<br />
        Telefono:{ data.phone}
      </p>

      <h2>Tipologie di dati trattati</h2>

      <h3>Dati di navigazione</h3>
      <p>
        I sistemi informatici e le procedure software preposte al funzionamento
        di questo sito web acquisiscono, nel corso del loro normale esercizio,
        alcuni dati personali la cui trasmissione è implicita nell’uso dei
        protocolli di comunicazione di Internet.
      </p>

      <h3>Dati forniti volontariamente dall’utente</h3>
      <p>
        L’invio facoltativo e volontario di dati (ad esempio tramite moduli di
        contatto, email o form di richiesta informazioni) comporta l’acquisizione
        delle informazioni fornite dall’utente, necessarie per rispondere alla
        richiesta.
      </p>

      <h3>Cookie e strumenti di tracciamento</h3>
      <p>
        Il sito utilizza cookie tecnici e, previo consenso, cookie analitici e/o
        di profilazione. Per maggiori informazioni consulta la{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>Finalità del trattamento</h2>
      <ul>
        <li>garantire il corretto funzionamento tecnico del sito;</li>
        <li>rispondere alle richieste inviate dall’utente;</li>
        <li>effettuare analisi statistiche in forma aggregata;</li>
        <li>gestire sicurezza, manutenzione e performance del sito;</li>
        <li>
          previo consenso, inviare comunicazioni promozionali o aggiornamenti sui
          servizi offerti.
        </li>
      </ul>

      <h2>Base giuridica del trattamento</h2>
      <ul>
        <li>
          <strong>Esecuzione di un contratto</strong> o misure precontrattuali
          (richieste dell’utente).
        </li>
        <li>
          <strong>Obbligo legale</strong> per l’adempimento di normative vigenti.
        </li>
        <li>
          <strong>Legittimo interesse del titolare</strong> per la sicurezza e il
          miglioramento del sito.
        </li>
        <li>
          <strong>Consenso dell’utente</strong> per cookie non tecnici o
          comunicazioni marketing.
        </li>
      </ul>

      <h2>Modalità di trattamento</h2>
      <p>
        Il trattamento viene effettuato con strumenti informatici e telematici,
        adottando misure tecniche e organizzative adeguate a garantire la
        sicurezza dei dati, nel rispetto degli articoli 24, 25 e 32 del GDPR.
      </p>

      <h2>Periodo di conservazione dei dati</h2>
      <p>I dati vengono conservati per il tempo necessario alle finalità indicate:</p>
      <ul>
        <li>dati tecnici di navigazione: pochi giorni;</li>
        <li>richieste tramite form: 12 mesi;</li>
        <li>
          finalità commerciali e newsletter: fino a revoca del consenso.
        </li>
      </ul>

      <h2>Comunicazione e trasferimento dei dati</h2>
      <p>
        I dati possono essere trattati da fornitori di servizi tecnologici,
        hosting, manutenzione e sicurezza informatica, debitamente nominati
        responsabili del trattamento ai sensi dell’art. 28 GDPR.
      </p>
      <p>
        Il Titolare non trasferisce dati extra-UE salvo utilizzo di strumenti
        conformi agli articoli 44-49 del GDPR (es. Clausole Contrattuali
        Standard).
      </p>

      <h2>Diritti dell’utente</h2>
      <p>L’utente può esercitare in qualsiasi momento i diritti previsti dagli art. 15–22 del GDPR:</p>

      <ul>
        <li>accesso ai dati;</li>
        <li>rettifica o cancellazione;</li>
        <li>limitazione o opposizione al trattamento;</li>
        <li>portabilità dei dati;</li>
        <li>revoca del consenso senza pregiudicare i trattamenti precedenti.</li>
      </ul>

      <p>
        Per esercitare i propri diritti è possibile contattare il Titolare del
        trattamento all’indirizzo email indicato sopra.
      </p>

      <h2>Diritto di reclamo</h2>
      <p>
        L’utente ha il diritto di proporre reclamo al Garante per la protezione
        dei dati personali (www.garanteprivacy.it).
      </p>

      <h2>Modifiche alla presente informativa</h2>
      <p>
        La presente informativa può essere aggiornata. Le modifiche saranno
        pubblicate su questa pagina. Ultimo aggiornamento:{" "}
        {new Date().getFullYear()}.
      </p>
    </section>
  );
}
