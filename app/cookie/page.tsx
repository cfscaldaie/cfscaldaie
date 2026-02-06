
import { getContactPage } from "@/app/lib/sanity/fetchContact";


export const metadata = {
  title: "Cookie Policy",
  description: "Informativa sull’uso dei cookie",
};

export default async function CookiePolicyPage() {
    const data = await getContactPage();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 prose prose-neutral">
      <h1>Cookie Policy</h1>

      <p>
        La presente Cookie Policy descrive l’uso dei cookie da parte di questo
        sito web. Utilizzando il sito, l’utente accetta l’uso dei cookie nei
        termini descritti in questa informativa.
      </p>

      <h2>Che cosa sono i cookie?</h2>
      <p>
        I cookie sono piccoli file di testo che i siti web visitati inviano al
        terminale dell’utente, dove vengono memorizzati per essere poi ritrasmessi
        agli stessi siti alla visita successiva. I cookie permettono al sito di
        funzionare correttamente, migliorare l’esperienza dell’utente e raccogliere
        informazioni statistiche.
      </p>

      <h2>Tipologie di cookie utilizzati</h2>

      <h3>1. Cookie tecnici (necessari)</h3>
      <p>
        Sono cookie indispensabili al corretto funzionamento del sito e
        necessari per fornire il servizio richiesto dall’utente. Senza questi
        cookie, alcune funzionalità non sarebbero accessibili.
      </p>

      <h3>2. Cookie di preferenza</h3>
      <p>
        Consentono al sito di ricordare informazioni che influenzano il modo in
        cui il sito si presenta o si comporta, come la lingua o la regione
        selezionata.
      </p>

      <h3>3. Cookie statistici (analitici)</h3>
      <p>
        Raccolgono informazioni in forma aggregata sul numero di visitatori e su
        come il sito viene utilizzato. Se anonimizzati, sono equiparati ai cookie
        tecnici secondo il Garante Privacy.
      </p>

      <h3>4. Cookie di marketing / profilazione</h3>
      <p>
        Sono utilizzati per tracciare la navigazione dell’utente e costruire un
        profilo basato sui suoi interessi, in modo da mostrare annunci pertinenti.
        Questi cookie vengono installati SOLO previo consenso dell’utente.
      </p>

      <h2>Cookie di terze parti</h2>
      <p>
        Alcune funzionalità del sito fanno uso di servizi esterni (es. Google
        Maps, YouTube, strumenti statistici o social network). Tali servizi possono
        installare cookie gestiti direttamente dalle terze parti.
      </p>
      <p>
        Per maggiori informazioni si invita a consultare le privacy policy
        dei rispettivi provider.
      </p>

      <h2>Gestione del consenso</h2>
      <p>
        Quando l’utente accede al sito, viene mostrato un banner che richiede il
        consenso all’uso dei cookie non tecnici. L’utente può:
      </p>
      <ul>
        <li>accettare tutti i cookie;</li>
        <li>rifiutare i cookie non necessari;</li>
        <li>personalizzare le scelte.</li>
      </ul>

      <p>
        Il consenso può essere modificato o revocato in qualsiasi momento cliccando 
        sul pulsante “Gestisci cookie” presente nel footer o nelle impostazioni del
        browser.
      </p>

      <h2>Come disabilitare i cookie dal browser</h2>
      <p>È possibile disabilitare i cookie direttamente dalle impostazioni del browser:</p>

      <ul>
        <li>
          <a href="https://support.google.com/accounts/answer/61416?hl=it" target="_blank">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank">
            Apple Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">
            Internet Explorer / Edge
          </a>
        </li>
      </ul>

      <h2>Titolare del trattamento</h2>
      <p>
        <strong>CFS Caldaie</strong><br />
        {data.address}<br />
        Email: {data.email}<br />
        Telefono:{ data.phone}
      </p>

      <h2>Modifiche alla Cookie Policy</h2>
      <p>
        La presente informativa può essere modificata in qualsiasi momento.
        Le modifiche saranno pubblicate su questa pagina. L’ultimo aggiornamento
        è datato {new Date().getFullYear()}.
      </p>

    </section>
  );
}
