import type { Dict } from './en';

const it: Dict = {
  meta: {
    homeTitle: 'Scaricare sito web – Salva qualsiasi sito in ZIP gratis',
    homeDescription:
      'Scaricare sito web gratis: salva qualsiasi pagina o landing page in ZIP con HTML, CSS, JavaScript, immagini e font. Senza registrazione né software.',
    ogImageAlt: 'Salvare un sito web in ZIP: HTML, CSS, JavaScript, immagini e font in un unico archivio',
    appFeatures: [
      'Scarica qualsiasi pagina web come archivio ZIP',
      'Salva HTML, CSS, JavaScript, immagini e font',
      'Rinomina tutte le risorse',
      'Copia la versione mobile di un sito web',
      'Download semplificato senza JavaScript',
      'Mantieni la struttura originale delle cartelle del sito',
      'Copia pulita senza tracker, pubblicità o banner dei cookie',
      'Salva una pagina in un unico file HTML autonomo',
      'Scarica più pagine, o le versioni desktop e mobile, in un unico archivio',
      'Report dell’archivio con analisi della pagina: colori, font, peso della pagina e tecnologie',
    ],
  },

  common: {
    skipToContent: 'Vai al contenuto',
    languageMenuLabel: 'Lingua',
    themeToLight: 'Passa al tema chiaro',
    themeToDark: 'Passa al tema scuro',
    lastUpdated: 'Ultimo aggiornamento: {date}',
  },

  nav: {
    howItWorks: 'Come funziona',
    whatsSaved: 'Cosa viene salvato',
    faq: 'FAQ',
    cta: 'Salva un sito web',
    mainLabel: 'Principale',
    footerLabel: 'Piè di pagina',
  },

  footer: {
    tagline: 'Strumento gratuito per scaricare siti web. Salva solo le pagine che hai il diritto di copiare.',
    about: 'Chi siamo',
    contact: 'Contattaci',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
    languages: 'Lingue',
  },

  hero: {
    title: 'Scarica un sito web in ZIP.',
    titleAccent: 'Senza perdere un dettaglio.',
    lead: 'Uno strumento gratuito per scaricare siti web. Incolla l’URL di qualsiasi pagina e ottieni HTML, CSS, JavaScript, immagini e font in un unico archivio.',
    fieldLabel: 'Indirizzo della pagina web',
    placeholder: 'es. example.com/landing-page…',
    save: 'Salva',
    saving: 'Salvataggio…',
    modeLegend: 'Cosa salvare',
    modes: { single: 'Una pagina', multi: 'Più pagine' },
    multiFieldLabel: 'Indirizzi delle pagine',
    multiPlaceholder: 'Un indirizzo per riga, fino a {max}',
    findPages: 'Trova le pagine di questo sito',
    findingPages: 'Ricerca delle pagine…',
    pagesFound: { one: '{count} pagina trovata', other: '{count} pagine trovate' },
    noPagesFound: 'Non sono state trovate altre pagine su {host}. Aggiungi tu gli indirizzi, uno per riga.',
    addPages: 'Aggiungi le pagine selezionate',
    selectAll: 'Seleziona tutto',
    clearSelection: 'Deseleziona',
    deviceLegend: 'Versione',
    devices: { desktop: 'Desktop', mobile: 'Mobile', both: 'Entrambe' },
    outputLegend: 'Salva come',
    outputs: { zip: 'Archivio ZIP', single: 'File HTML unico' },
    optionsLegend: 'Opzioni di download',
    moreOptions: 'Personalizza il download',
    tryExample: 'Prova con un esempio',
    options: {
      cleanCopy: { title: 'Copia pulita', hint: 'Rimuovi tracker, pubblicità e banner dei cookie' },
      simplified: { title: 'Download semplificato', hint: 'Escludi JavaScript' },
      renameAssets: { title: 'Rinomina tutte le risorse', hint: 'Nomi brevi e ordinati, come image-1.jpg' },
      keepStructure: { title: 'Salva struttura del sito', hint: 'Mantieni i percorsi originali delle cartelle' },
      prettify: { title: 'Formatta il codice', hint: 'Indenta HTML, CSS e JavaScript minificati' },
      pickFiles: { title: 'Scegli prima i file', hint: 'Controlla l’archivio prima del download' },
    },
    scene: {
      nav: ['Home', 'Chi siamo', 'Progetti', 'Contatti'],
      pageTitle: 'Un web più pulito e luminoso',
      idleTitle: 'Pronto da salvare',
      idleNote: 'Tutte le risorse incluse',
      workingTitle: 'Compressione dei file',
      workingNote: 'Raccolta di ogni risorsa',
      doneTitle: 'Salvato',
      doneNote: 'Archivio pronto',
    },
  },

  // Messages shown under the Save button while and after downloading.
  status: {
    downloading: 'Download di {host} in corso. Le pagine più grandi possono richiedere fino a un minuto.',
    saved: 'Archivio {filename} salvato con {files}.',
    files: { one: '{count} file', other: '{count} file' },
    missed: {
      one: '{count} file non è stato scaricato e rimanda ancora al sito online.',
      other: '{count} file non sono stati scaricati e rimandano ancora al sito online.',
    },
    ready: 'Pronto: {files}. Scegli cosa tenere, poi scarica.',
    serverUnreachable: 'Impossibile raggiungere il server. Controlla la connessione e riprova.',
    failed: 'Impossibile creare l’archivio. Riprova.',
  },

  // Errors explained to the visitor. Sent by the server in the visitor's language.
  errors: {
    emptyUrl: 'Inserisci l’indirizzo della pagina che vuoi salvare.',
    invalidUrl: '«{input}» non è un indirizzo web valido. Prova con un indirizzo come example.com.',
    protocol: 'Puoi salvare solo indirizzi http:// e https://.',
    credentials: 'Rimuovi nome utente e password dall’indirizzo e riprova.',
    localAddress: 'Gli indirizzi locali e interni non si possono salvare.',
    privateAddress: 'Gli indirizzi di rete privata non si possono salvare.',
    notPublicDomain: '«{host}» non è un dominio pubblico. Inserisci il dominio completo, come example.com.',
    privateNetwork: 'Questo indirizzo punta a una rete privata e non si può salvare.',
    notFound: 'Non abbiamo trovato {host}. Controlla che l’indirizzo sia scritto correttamente.',
    timeout: '{host} ha impiegato troppo tempo a rispondere. Riprova tra poco.',
    unreachable: 'Impossibile raggiungere {host}. Controlla l’indirizzo e riprova.',
    httpError: '{host} ha risposto con l’errore {status}, quindi non c’è nulla da salvare.',
    notHtml: 'Questo indirizzo restituisce un file, non una pagina web. Inserisci invece l’indirizzo di una pagina.',
    badRequest: 'La richiesta non è valida. Ricarica la pagina e riprova.',
    internal: 'Si è verificato un problema durante la creazione dell’archivio. Riprova o prova con un’altra pagina.',
    tooManyPages: 'Puoi aggiungere fino a {max} pagine alla volta.',
    busy: 'Hai già dei download in corso. Aspetta che finiscano, poi riprova.',
  },

  // The panel that opens under the hero once an archive is ready.
  result: {
    title: 'Il tuo archivio',
    downloadAgain: 'Scarica di nuovo',
    downloadSelected: 'Scarica la selezione',
    selection: 'Selezione: {files}, {size}',
    score: 'disponibile offline',
    scoreHint: 'Quota dei file della pagina salvati nell’archivio. Tutto il resto viene ancora caricato dal sito online.',
    saved: { one: '{count} file salvato', other: '{count} file salvati' },
    failed: { one: 'Impossibile salvare {count} file', other: 'Impossibile salvare {count} file' },
    pages: { one: '{count} pagina', other: '{count} pagine' },
    removed: { one: '{count} elemento rimosso', other: '{count} elementi rimossi' },
    liveLinks: {
      one: '{count} link a un’altra pagina apre ancora il sito online.',
      other: '{count} link ad altre pagine aprono ancora il sito online.',
    },
    tabs: { files: 'File', problems: 'Problemi', insights: 'Analisi' },
    filesHint: 'Deseleziona i file che non ti servono. Ciò che li usava li caricherà invece dal sito online.',
    singleHint: 'Un file HTML unico contiene tutto al suo interno, quindi non ci sono file separati da scegliere.',
    noProblems: 'Tutti i file sono stati salvati.',
    moreProblems: { one: 'E {count} altro.', other: 'E altri {count}.' },
    removedTitle: 'Rimosso da «Copia pulita»',
    removedKinds: { tracker: 'Tracker e tag', consent: 'Banner dei cookie', redirect: 'Reindirizzamenti automatici' },
    kinds: { html: 'Pagina', css: 'CSS', js: 'JavaScript', image: 'Immagine', font: 'Font', media: 'Media', other: 'File' },
    reasons: {
      http: 'Il server ha risposto con l’errore {status}',
      timeout: 'Il download ha richiesto troppo tempo',
      tooLarge: 'Supera il limite di {size} per file',
      notAsset: 'Ha restituito una pagina web invece di un file',
      blocked: 'Punta a un indirizzo privato o bloccato',
      network: 'Non raggiungibile',
      deadline: 'Saltato: raggiunto il tempo massimo per un download',
      archiveFull: 'Saltato: l’archivio ha raggiunto la dimensione massima',
      limit: 'Saltato: la pagina usa più di {max} file',
    },
    insights: {
      colors: 'Colori',
      neutrals: 'Neutri',
      cssVariables: { one: '{count} variabile CSS', other: '{count} variabili CSS' },
      copyColor: 'Copia {hex}',
      copied: '{hex} copiato',
      fonts: 'Font',
      licenses: {
        google: 'Google Fonts: uso gratuito (Open Font License)',
        adobe: 'Adobe Fonts: con licenza, non riutilizzabili liberamente',
        unknown: 'Controlla la licenza prima di riutilizzarlo',
        system: 'Font di sistema: è già sul dispositivo, non arriva con la pagina',
      },
      weight: 'Peso della pagina',
      tech: 'Realizzato con',
      techCategories: {
        cms: 'Site builder e CMS',
        framework: 'Framework',
        library: 'Librerie e servizi',
        analytics: 'Analytics e pubblicità',
        consent: 'Consenso ai cookie',
      },
      seo: 'Ricerca e condivisione',
      seoItems: {
        title: 'Titolo',
        description: 'Descrizione',
        canonical: 'Indirizzo canonico',
        lang: 'Lingua',
        h1: 'Titolo principale',
        ogImage: 'Immagine di condivisione',
        twitterCard: 'Card di X (Twitter)',
        robots: 'Robots',
        structuredData: 'Dati strutturati',
        alt: 'Immagini senza testo alt',
      },
      length: { one: '{count} carattere', other: '{count} caratteri' },
      missing: 'Mancante',
      none: 'Nessun risultato',
      altSummary: '{missing} su {total}',
    },
  },

  // archive-report.html inside every archive.
  report: {
    title: 'Report dell’archivio: {host}',
    savedFrom: 'Salvato da {url} il {date}.',
    options: 'Opzioni',
    optionsNone: 'Nessuna',
    files: 'File in questo archivio',
    columns: { file: 'File', from: 'Indirizzo originale', size: 'Dimensione' },
    problems: 'Non inclusi in questo archivio',
  },

  // "Save from any tab" bookmarklet on the home page.
  bookmarklet: {
    title: 'Salva qualsiasi pagina dal tuo browser',
    text: 'Trascina il pulsante nella barra dei preferiti. Su qualsiasi pagina web, fai clic sul preferito per aprire {name} con l’indirizzo di quella pagina già inserito.',
    button: 'Salva con {name}',
    dragHint: 'Trascina questo pulsante nella barra dei preferiti.',
  },

  steps: {
    title: 'Come funziona',
    lead: 'Tre passaggi, nessun account. La maggior parte delle pagine è pronta in pochi secondi.',
    items: [
      {
        title: 'Incolla l’indirizzo della pagina',
        text: 'Copia l’URL dalla barra degli indirizzi del browser. Puoi omettere https://.',
      },
      {
        title: 'Scegli le opzioni',
        text: 'Rimuovi i tracker, salva la versione mobile, escludi JavaScript o tieni tutto in un unico file HTML.',
      },
      {
        title: 'Estrai lo ZIP e apri index.html',
        text: 'Lo ZIP si scarica subito. Apri la pagina in qualsiasi browser o modificala nel tuo editor di codice.',
      },
    ],
  },

  features: {
    title: 'Scaricare tutti i file di un sito web in un archivio',
    lead: 'Scarica una landing page, un sito intero o qualsiasi pagina, completamente gratis. Inserisci l’URL del sito nella casella qui sopra e seleziona Salva per ottenere un archivio con tutti i suoi file.',
    html: { title: 'HTML', text: 'Il markup della pagina, con ogni riferimento riscritto per puntare ai file salvati.' },
    code: { title: 'CSS e JavaScript', text: 'Fogli di stile e script, più tutto ciò che importano.' },
    images: { title: 'Immagini', text: 'Foto, icone, SVG, varianti responsive in srcset e sfondi CSS.' },
    fonts: { title: 'Font', text: 'Web font caricati tramite @font-face, compresi i Google Fonts.' },
  },

  // "More than a ZIP file": the features that set the tool apart, each with a small preview.
  highlights: {
    title: 'Più di un file ZIP',
    lead: 'Ogni download include un report e opzioni che la maggior parte degli strumenti per scaricare siti non offre.',
    items: [
      {
        title: 'Copia pulita',
        text: 'Tracker, pixel pubblicitari, banner dei cookie e reindirizzamenti vengono rimossi. Gli script propri della pagina restano.',
      },
      {
        title: 'Un report in ogni archivio',
        text: 'Scopri cosa è stato salvato, cosa no e perché, oltre a colori, font, peso e tecnologie della pagina.',
      },
      {
        title: 'Più pagine insieme',
        text: 'Scegli fino a 20 pagine tra i link e la sitemap del sito. I link tra le pagine funzionano offline.',
      },
      {
        title: 'Un solo file o entrambe le versioni',
        text: 'Salva una pagina in un unico file HTML autonomo, oppure ottieni le copie desktop e mobile una accanto all’altra.',
      },
    ],
  },

  // The long-form article on the home page (written for search engines and for readers).
  guide: {
    title: 'Scaricare un sito web gratis e salvare qualsiasi pagina in ZIP',
    tocTitle: 'In questa pagina',
    tocLabel: 'Indice dell’articolo',
    introHtml: `<p>Questo strumento per scaricare siti web copia una pagina web e tutto ciò che le serve per essere visualizzata, poi te la consegna in un unico file ZIP. Ottieni l’HTML, il CSS, il JavaScript, ogni immagine e ogni web font, organizzati in cartelle e collegati tra loro, così la pagina si apre sul tuo computer. Non c’è nulla da installare e nessun account da creare: incolla un URL, seleziona Salva e l’archivio si scarica nel browser.</p>
<p>È pensato per le pagine che si vogliono conservare più spesso: landing page, pagine prodotto, portfolio, pagine di iscrizione alla newsletter e siti one-page. Invece di salvare ogni file a mano dagli strumenti per sviluppatori del browser, ottieni la pagina completa in pochi secondi.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'Come scaricare un sito web in ZIP',
        html: `<ol>
<li>Apri la pagina che vuoi salvare e copia il suo indirizzo dalla barra degli indirizzi del browser.</li>
<li>Incolla l’indirizzo nella casella in cima a questa pagina. Puoi omettere <code>https://</code>.</li>
<li>Scegli le opzioni che ti servono, come rinominare i file o mantenere la struttura originale delle cartelle del sito. L’anteprima accanto alla casella mostra come sarà organizzato l’archivio.</li>
<li>Seleziona Salva. Quando l’archivio è pronto, il browser scarica un file con il nome del sito, ad esempio <code>example.com.zip</code>. Estrailo e apri <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'Cosa trovi nell’archivio',
        html: `<p>Lo strumento legge l’HTML della pagina e trova ogni file a cui fa riferimento: fogli di stile, script, icone, immagini, le dimensioni delle immagini responsive elencate in <code>srcset</code>, le anteprime dei video, gli stili inline e le immagini che si caricano solo durante lo scorrimento. Poi apre ogni foglio di stile e segue le sue regole <code>@import</code> e i riferimenti <code>url()</code>: è così che anche le immagini di sfondo e i web font, compresi i Google Fonts, finiscono nell’archivio.</p>
<p>Ogni riferimento viene riscritto per puntare alla copia salvata, così la pagina carica i propri file locali invece di collegarsi al server originale. Se un file non si può scaricare, ad esempio perché il suo server rifiuta le richieste provenienti da altri siti, il link mantiene l’indirizzo web originale. Finché sei online la pagina continua a caricare quel file, e niente smette di funzionare senza che te ne accorga.</p>
<p>Ogni archivio contiene anche <code>archive-report.html</code>, un report leggibile che indica cosa è stato salvato, quali file non è stato possibile salvare e perché, e quanta parte della pagina ora funziona offline. Elenca inoltre i colori della pagina, i font e le relative licenze, il peso della pagina per tipo di file, gli strumenti con cui è realizzata e i tag per la ricerca e la condivisione.</p>`,
      },
      {
        id: 'save-page-as',
        heading: 'Perché non usare semplicemente «Salva pagina con nome»?',
        html: `<p>I browser possono salvare una pagina, ma il risultato è spesso incompleto. Un salvataggio «completo» di solito mette tutti i file in un’unica cartella con nomi lunghi generati automaticamente, e spesso perde i font e le immagini di sfondo caricati dai fogli di stile, oltre alle immagini che compaiono solo durante lo scorrimento. Salvare in un unico file MHTML è più ordinato, ma altri browser ed editor di codice non sempre riescono ad aprirlo. Uno strumento per scaricare siti web segue ogni foglio di stile fino ai suoi font e sfondi e ti restituisce un normale file ZIP che si apre ovunque, con la struttura di cartelle che scegli tu.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Scaricare una landing page per studiarla, testarla o ricostruirla',
        html: `<p>Marketer e affiliati salvano le landing page per tenere uno swipe file di offerte, titoli e layout che convertono. I designer scaricano una pagina per analizzarne con calma spaziature, colori e tipografia. Gli sviluppatori copiano un sito web per spostare una vecchia pagina statica su un nuovo hosting, creare al volo un mock-up locale per un cliente o testare modifiche su una copia senza toccare il sito online. Le agenzie archiviano la pagina di un cliente prima di un redesign, così resta traccia di com’era prima.</p>
<p>Poiché l’archivio contiene semplici file, puoi aprirlo in qualsiasi editor di codice, modificare testi o stili e vedere subito il risultato nel browser.</p>`,
      },
      {
        id: 'options',
        heading: 'Scegli le opzioni giuste',
        html: `<p><strong>Copia pulita</strong> rimuove i tag di analytics e pubblicità, i registratori di sessione e i banner per il consenso ai cookie, oltre ai reindirizzamenti automatici. Gli script propri della pagina restano, quindi slider e menu continuano a funzionare, ma la copia salvata non segnala più le visite a nessuno e non copre il design con un banner.</p>
<p><strong>Download semplificato</strong> rimuove tutto il JavaScript e mantiene un’istantanea statica di HTML, CSS, immagini e font. Le immagini che di solito aspettano uno script per caricarsi vengono impostate per caricarsi subito, così compaiono comunque. È la scelta migliore quando ti interessa solo il design.</p>
<p><strong>Rinomina tutte le risorse</strong> sostituisce i nomi di file lunghi e pieni di hash con nomi brevi come <code>style-1.css</code> e <code>image-4.webp</code>. Attivala se pensi di modificare la pagina e vuoi un progetto ordinato.</p>
<p><strong>Salva struttura del sito</strong> mantiene i percorsi delle cartelle usati dal sito stesso, come <code>assets/css/main.css</code>, invece di raggruppare i file per tipo. I file ospitati su altri domini finiscono nella cartella <code>external</code>, in una cartella con il nome del loro host.</p>
<p><strong>Versione</strong> sceglie quale copia della pagina ottieni. «Mobile» richiede la pagina come fa un iPhone: alcuni siti inviano ai telefoni un layout diverso, immagini più piccole o altri contenuti. «Entrambe» salva le copie desktop e mobile una accanto all’altra in un unico archivio.</p>
<p><strong>Salva come</strong> «File HTML unico» inserisce ogni immagine, font, foglio di stile e script in un solo file <code>.html</code>. È più pesante di uno ZIP, ma non c’è nulla da estrarre ed è facile da conservare, allegare a un’email o aprire su un altro computer.</p>
<p>In <strong>Personalizza il download</strong>, <strong>Formatta il codice</strong> indenta HTML, CSS e JavaScript minificati per rendere il codice facile da leggere, e <strong>Scegli prima i file</strong> mostra i file dell’archivio prima che inizi il download, così puoi escludere video o immagini pesanti che non ti servono.</p>`,
      },
      {
        id: 'offline',
        heading: 'Scaricare un sito web per usarlo offline',
        html: `<p>Una pagina scaricata si apre senza connessione a internet, a patto che i suoi file siano stati salvati. Una copia offline è utile per le presentazioni, per rivedere una pagina in aereo e per conservare una pagina che potrebbe cambiare o sparire.</p>
<ol>
<li>Incolla l’indirizzo della pagina in cima a questa pagina e seleziona <strong>Salva</strong>.</li>
<li>Estrai l’archivio in una cartella del tuo computer.</li>
<li>Apri <code>index.html</code> in qualsiasi browser. Immagini, stili e font si caricano dalle cartelle accanto, quindi la pagina funziona offline.</li>
</ol>
<p>Per consultare più pagine offline, passa a <strong>Più pagine</strong> e inserisci fino a 20 indirizzi, oppure seleziona <strong>Trova le pagine di questo sito</strong> per sceglierle tra i link e la sitemap del sito. Finiscono in un unico archivio, i file in comune vengono salvati una sola volta e i link tra le pagine salvate aprono le copie locali. I link alle pagine che non hai salvato puntano ancora al sito online, e il report dell’archivio mostra quanto di ogni pagina funziona offline.</p>`,
      },
      {
        id: 'limits',
        heading: 'Cosa non si può copiare di un sito web',
        html: `<p>Qualsiasi strumento per copiare siti web può salvare solo ciò che il server invia al browser. Il codice lato server, come PHP, database, API e sistemi di pagamento, non lascia mai il server web, quindi non è incluso. Le pagine protette da login non sono raggiungibili. I siti che costruiscono i contenuti con JavaScript dopo il caricamento della pagina, cosa comune nelle single-page app, potrebbero essere salvati come un guscio vuoto. I moduli di una pagina salvata inviano ancora i dati al sito originale.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Usa i siti scaricati in modo responsabile',
        html: `<p>Scaricare una pagina non ti trasferisce alcun diritto su di essa. Testi, immagini, codice e font restano dei rispettivi proprietari. Salva le pagine per studiarle, per fare un backup del tuo lavoro o con il permesso del proprietario, e controlla la licenza di font e immagini prima di riutilizzarli. Non ripubblicare un sito copiato come se fosse tuo.</p>`,
      },
    ],
  },

  faq: {
    title: 'Domande frequenti',
    leadHtml: 'Hai un’altra domanda? <a href="{contactUrl}">Contattaci</a> e ti risponderemo.',
    items: [
      {
        question: 'Cos’è uno strumento per scaricare siti web?',
        answer:
          'È uno strumento che copia una pagina web e tutti i file che le servono per essere visualizzata: HTML, fogli di stile, script, immagini e font. Questo li raccoglie in un unico archivio ZIP che puoi aprire sul tuo computer, con ogni link riscritto in modo che la pagina funzioni con i file locali.',
      },
      {
        question: 'Scaricare un sito web con questo strumento è gratis?',
        answer:
          'Sì. È gratuito, senza account, senza registrazione e senza software da installare. Incolla un URL, seleziona Salva e il file ZIP si scarica nel browser.',
      },
      {
        question: 'Come faccio a scaricare una pagina web in ZIP?',
        answer:
          'Copia l’indirizzo della pagina che ti interessa, incollalo nella casella in cima a questa pagina e seleziona Salva. Prima puoi scegliere le opzioni, come rinominare le risorse o mantenere la struttura originale delle cartelle. Quando l’archivio è pronto, il browser lo scarica come file .zip con il nome del sito.',
      },
      {
        question: 'Posso scaricare un sito intero con tutte le pagine?',
        answer:
          'Puoi salvare fino a 20 pagine di un sito in un unico archivio. Passa a «Più pagine», poi incolla gli indirizzi o seleziona «Trova le pagine di questo sito» per sceglierle tra i link e la sitemap del sito. I file in comune tra le pagine vengono salvati una sola volta e i link tra le pagine salvate funzionano offline. I link alle pagine che non hai salvato continuano a puntare al sito online.',
      },
      {
        question: 'Posso scaricare il codice sorgente di un sito?',
        answer:
          'Ottieni il codice sorgente front-end: l’HTML, il CSS e il JavaScript che riceve il browser, più immagini e font. Il codice lato server, come PHP, database, API e logica back-end, non lascia mai il server web, quindi nessuno strumento per scaricare siti web può copiarlo.',
      },
      {
        question: 'Posso scaricare una landing page con immagini e CSS?',
        answer:
          'Sì. Le landing page sono ciò che questo strumento gestisce meglio. Salva il markup della pagina, ogni foglio di stile e i file che importa, le immagini di sfondo, le dimensioni responsive delle immagini da srcset, le immagini in lazy loading e i web font, compresi i Google Fonts.',
      },
      {
        question: 'Posso scaricare tutte le immagini di un sito web?',
        answer:
          'Sì, quelle delle pagine che salvi. L’archivio include tutte le immagini usate da quelle pagine: immagini normali, dimensioni responsive da srcset, icone SVG, immagini di sfondo CSS e immagini con caricamento differito. Attiva «Scegli prima i file» per vedere l’elenco prima del download e tenere solo i file che ti servono.',
      },
      {
        question: 'Come scarico un sito web per usarlo offline?',
        answer:
          'Incolla l’indirizzo della pagina in cima a questa pagina, seleziona Salva ed estrai l’archivio. Apri index.html e la pagina si carica dai file salvati, senza bisogno di connessione a internet. Per salvare più pagine, passa a «Più pagine» e aggiungi fino a 20 indirizzi; anche i link tra le pagine salvate funzioneranno offline.',
      },
      {
        question: 'Come apro un sito web dopo averlo scaricato?',
        answer:
          'Estrai l’archivio e apri index.html in qualsiasi browser. Immagini, stili e font si caricano dalle cartelle che si trovano accanto. Per modificare la pagina, apri la cartella in un editor di codice come VS Code.',
      },
      {
        question: 'Perché la pagina scaricata è diversa dal sito online?',
        answer:
          'Alcuni siti costruiscono i contenuti con JavaScript dopo il caricamento della pagina, oppure caricano file da server che bloccano gli altri siti web. Lo strumento salva la pagina così come il server la invia all’inizio, quindi i contenuti che compaiono solo dopo l’esecuzione degli script potrebbero mancare. I file che non è stato possibile scaricare mantengono il loro indirizzo web originale, così si caricano comunque quando sei online, e il report dell’archivio li elenca uno per uno con il motivo.',
      },
      {
        question: 'Posso scaricare la versione mobile di un sito web?',
        answer:
          'Sì. Scegli «Mobile» in «Versione» prima di selezionare Salva. La pagina e i suoi file vengono richiesti come farebbe il browser di un iPhone, così i siti con un layout mobile diverso inviano quella versione. Scegli «Entrambe» per avere le copie desktop e mobile in un unico archivio.',
      },
      {
        question: 'Cosa fa «Download semplificato»?',
        answer:
          'Rimuove tutto il JavaScript dalla pagina salvata e lascia un’istantanea statica di HTML, CSS, immagini e font. Le immagini in lazy loading vengono impostate per caricarsi normalmente, così compaiono anche senza script. Usalo quando ti servono solo layout e design.',
      },
      {
        question: 'Cosa rimuove «Copia pulita»?',
        answer:
          'I tag di analytics e pubblicità come Google Analytics, Google Tag Manager e il Meta Pixel, i registratori di sessione come Hotjar e Microsoft Clarity, i banner per il consenso ai cookie come OneTrust e Cookiebot e i reindirizzamenti automatici. Gli script propri della pagina vengono mantenuti. Il report dell’archivio elenca tutto ciò che è stato rimosso.',
      },
      {
        question: 'Posso salvare una pagina web in un unico file HTML?',
        answer:
          'Sì. Scegli «File HTML unico» in «Salva come». Ogni immagine, font, foglio di stile e script viene inserito in un solo file .html che si apre in qualsiasi browser, senza nulla da estrarre.',
      },
      {
        question: 'Cosa contiene il report dell’archivio?',
        answer:
          'Ogni archivio include archive-report.html. Mostra quanta parte della pagina è stata salvata per l’uso offline, elenca ogni file che non è stato possibile salvare e il motivo, e descrive la pagina: colori, font e relative licenze, peso della pagina per tipo di file, gli strumenti con cui è realizzata e i tag per la ricerca e la condivisione. Gli stessi dettagli compaiono su questa pagina dopo ogni download.',
      },
      {
        question: 'C’è un limite di dimensione?',
        answer:
          'Una singola pagina può includere fino a 400 file, e più pagine fino a 1.000 in totale. Ogni file può arrivare a 25 MB, con un massimo di 30 MB per archivio e 20 pagine alla volta. Un download si interrompe dopo circa 90 secondi, o 150 secondi per più pagine o per entrambe le versioni; i file non ancora salvati a quel punto continuano a puntare al sito online e sono elencati nel report dell’archivio.',
      },
      {
        question: 'Che differenza c’è con HTTrack e altri programmi per copiare siti web?',
        answer:
          'HTTrack e Cyotek WebCopy sono programmi desktop: li installi ed esplorano un sito dal tuo computer seguendone i link. Questo strumento funziona nel browser, senza installare nulla. Salva le pagine che scegli, fino a 20 alla volta, in un unico ZIP con un report, e può rimuovere tracker e banner dei cookie lungo il percorso. Per copiare un sito grande con migliaia di pagine, un programma desktop è la scelta migliore.',
      },
      {
        question: 'È legale scaricare un sito web?',
        answer:
          'Salvare una pagina per studio personale, test o archiviazione in genere è consentito, ma testi, immagini, codice e font restano dei rispettivi proprietari. Non ripubblicare un sito scaricato e non usarne i contenuti a scopo commerciale senza permesso, e controlla la licenza di font e immagini prima di riutilizzarli.',
      },
      {
        question: 'Conservate i siti web che scarico?',
        answer:
          'No. Ogni archivio viene creato in memoria per la tua richiesta e inviato direttamente al browser. Non conserviamo copie delle pagine che salvi né dei file che contengono.',
      },
    ],
  },

  cta: {
    title: 'Per la tua prossima pagina basta incollare un URL',
    text: 'Gratis, senza registrazione, e l’archivio si apre in qualsiasi browser.',
    button: 'Salva un sito web',
  },

  about: {
    title: 'Chi siamo – Scaricare un sito web gratis',
    heading: 'Informazioni su {name}',
    description:
      'Scopri {name}, lo strumento gratis per scaricare siti web: perché è nato, chi lo usa e come salva un sito web in ZIP con HTML, CSS, immagini e font.',
    lead: 'Creiamo uno strumento gratuito che salva qualsiasi pagina web pubblica, con tutto ciò che le serve per essere visualizzata, in un unico file ZIP da aprire offline.',
    bodyHtml: `<h2>Cosa fa {name}</h2>
<p>{name} è uno <a href="{homeUrl}">strumento online gratuito per scaricare siti web</a>. Incolla l’indirizzo di una pagina web: lo strumento raccoglie l’HTML della pagina insieme a ogni foglio di stile, script, immagine e font che usa, riscrive i link perché puntino ai file salvati e ti consegna un unico archivio ZIP. Estrailo, apri <code>index.html</code> e la pagina si carica nel browser senza connessione a internet.</p>
<p>Non c’è nulla da installare e nessun account da creare. Funziona in qualsiasi browser moderno, su Windows, macOS, Linux, Android e iOS.</p>
<h2>Perché l’abbiamo creato</h2>
<p>Salvare una pagina web dovrebbe essere semplice, ma raramente lo è. Il comando «Salva pagina con nome» del browser spesso perde i web font, le immagini di sfondo CSS, le dimensioni delle immagini responsive e i file importati da un foglio di stile, così la copia appare danneggiata quando la riapri. Raccogliere tutto a mano dagli strumenti per sviluppatori richiede molto tempo ed è facile sbagliare. Volevamo un solo passaggio che facesse tutto il lavoro: incolla un URL, seleziona Salva e ottieni un archivio ordinato con lo stesso aspetto dell’originale.</p>
<h2>Chi usa {name}</h2>
<ul>
<li><strong>Marketer e affiliati</strong> conservano copie delle landing page da cui vogliono imparare e fanno un backup delle proprie pagine prima di un redesign.</li>
<li><strong>I designer</strong> salvano pagine per studiarne layout, colori e tipografia, e usano il report dell’archivio per vedere quali font e colori usa una pagina.</li>
<li><strong>Gli sviluppatori</strong> spostano vecchie pagine statiche su un nuovo hosting, preparano demo offline e testano modifiche su una copia locale invece che sul sito online.</li>
<li><strong>Studenti e insegnanti</strong> scaricano pagine reali per capire come HTML, CSS e JavaScript lavorano insieme.</li>
<li><strong>Ricercatori e archivisti</strong> conservano una traccia di una pagina prima che cambi o sparisca.</li>
</ul>
<h2>Cosa puoi salvare</h2>
<p>Ogni download include la pagina e i file che le servono per essere visualizzata. Le opzioni ti permettono di adattare l’archivio a ciò che devi fare:</p>
<ul>
<li>Salva fino a 20 pagine di un sito in un unico archivio, con i link tra le pagine funzionanti offline.</li>
<li>Scarica la versione mobile di un sito web, oppure le versioni desktop e mobile una accanto all’altra.</li>
<li>Salva una pagina in un unico file HTML autonomo invece che in uno ZIP.</li>
<li>Crea una copia pulita senza tag di analytics, script pubblicitari o banner dei cookie.</li>
<li>Mantieni la struttura originale delle cartelle del sito, oppure dai a ogni risorsa un nome breve e ordinato.</li>
</ul>
<p>Ogni archivio contiene anche un report che elenca ogni file salvato, tutto ciò che non è stato possibile salvare e il motivo, oltre a un’analisi della pagina con i suoi colori, i font e il peso della pagina. Consulta <a href="{homeUrl}#whats-saved">cosa viene salvato in un download</a> per l’elenco completo.</p>
<h2>Come funziona</h2>
<p>Quando invii un indirizzo, il nostro server richiede la pagina, trova ogni foglio di stile, script, immagine e font che usa, li scarica e riscrive la pagina in modo che punti alle copie salvate. L’archivio viene creato in memoria per la tua richiesta e inviato direttamente al tuo browser. Non conserviamo copie della pagina né dell’archivio. La <a href="{homeUrl}#how-it-works">guida passo passo</a> mostra il procedimento dall’inizio alla fine.</p>
<h2>I nostri principi</h2>
<ul>
<li><strong>Gratis.</strong> Nessun account, nessuna registrazione e nessun software da installare.</li>
<li><strong>Privacy per impostazione predefinita.</strong> Non conserviamo le pagine che salvi né i file che contengono. La nostra <a href="{privacyUrl}">informativa sulla privacy</a> spiega esattamente cosa raccogliamo.</li>
<li><strong>Risultati onesti.</strong> Se un file non si può salvare, il report dell’archivio lo segnala e ne spiega il motivo, così non scopri mai più tardi che una pagina è danneggiata.</li>
<li><strong>Rispetto per i creatori.</strong> Scaricare una pagina non ti dà alcun diritto su di essa. I nostri <a href="{termsUrl}">termini e condizioni</a> ti chiedono di salvare solo ciò che hai il diritto di usare.</li>
</ul>
<h2>Scrivici</h2>
<p>Hai trovato una pagina che non si salva correttamente o hai un’idea per una nuova funzione? Molte domande comuni trovano risposta nelle nostre <a href="{homeUrl}#faq">FAQ</a>. Per tutto il resto, <a href="{contactUrl}">contattaci</a>. Leggiamo ogni messaggio.</p>`,
  },

  contact: {
    title: 'Contattaci – Aiuto per scaricare siti web',
    heading: 'Contattaci',
    description:
      'Contatta {name}: aiuto per scaricare un sito web, segnalazioni di pagine non salvate, idee per nuove funzioni e richieste su copyright o privacy.',
    lead: 'Domande, segnalazioni di bug, idee per nuove funzioni, notifiche sul copyright e richieste sulla privacy arrivano tutte alla stessa casella, e leggiamo ogni messaggio.',
    bodyHtml: `<h2>Come possiamo aiutarti</h2>
<ul>
<li><strong>Aiuto con un download.</strong> Una pagina non si è salvata, appare diversa offline o si è interrotta a metà.</li>
<li><strong>Segnalazioni di bug.</strong> Qualcosa sul sito non funziona come dovrebbe.</li>
<li><strong>Idee per nuove funzioni.</strong> Un’opzione che vorresti trovare nello strumento per scaricare siti web.</li>
<li><strong>Segnalazioni di copyright e abusi.</strong> Ritieni che il servizio venga usato per copiare i tuoi contenuti senza permesso.</li>
<li><strong>Richieste sulla privacy.</strong> Vuoi sapere quali dati conserviamo su di te o chiederci di cancellarli.</li>
<li><strong>Partnership e stampa.</strong> Vorresti collaborare con noi o scrivere di {name}.</li>
</ul>
<h2>Prima di scriverci</h2>
<p>Molte domande, ad esempio come scaricare un sito web intero, salvare la versione mobile o aprire un sito dopo averlo scaricato, trovano risposta nelle nostre <a href="{homeUrl}#faq">domande frequenti</a>. Spesso è il modo più rapido per avere una risposta.</p>
<h2>Segnalare una pagina che non si è salvata correttamente</h2>
<p>Per aiutarci a risolvere il problema in fretta, indica:</p>
<ul>
<li>L’indirizzo della pagina che hai provato a salvare.</li>
<li>Le opzioni che avevi attivato.</li>
<li>Il messaggio mostrato sotto il pulsante Salva, se c’era.</li>
<li>Cosa non va quando apri la pagina salvata.</li>
<li>Se ce l’hai, il file <code>archive-report.html</code> che si trova nello ZIP. Elenca ogni file che non è stato possibile salvare e il motivo.</li>
</ul>
<h2>Segnalazioni di copyright e abusi</h2>
<p>{name} non ospita le pagine che le persone salvano: ogni archivio viene creato per una singola richiesta e non viene mai conservato sui nostri server. Se ritieni che il servizio venga usato per copiare i tuoi contenuti violando i tuoi diritti, scrivici un’email con l’indirizzo della tua pagina, una descrizione del problema e il modo in cui possiamo contattarti. Esaminiamo ogni segnalazione. I nostri <a href="{termsUrl}">termini e condizioni</a> indicano cosa includere in una notifica formale.</p>
<h2>Richieste sulla privacy</h2>
<p>Per sapere quali dati personali conserviamo su di te, o per farli correggere o cancellare, scrivici dall’indirizzo email a cui si riferisce la richiesta. La nostra <a href="{privacyUrl}">informativa sulla privacy</a> spiega cosa raccogliamo e quali diritti hai.</p>
<h2>Tempi di risposta</h2>
<p>Di solito rispondiamo entro pochi giorni lavorativi.</p>`,
  },

  privacy: {
    title: 'Informativa privacy e trattamento dei dati',
    heading: 'Informativa sulla privacy',
    description:
      'Informativa privacy di {name}: cosa raccoglie lo strumento per scaricare siti web, cosa non conserviamo mai, cookie, servizi di terzi e i tuoi diritti.',
    lead: 'Questa informativa spiega quali informazioni raccoglie {name} quando usi questo sito e il suo strumento per scaricare siti web, perché le raccogliamo e quali scelte hai.',
    shortHtml: `<h2>In breve</h2>
<ul>
<li>Per usare lo strumento per scaricare siti web non servono un account, il tuo nome o il tuo indirizzo email.</li>
<li>Non conserviamo gli indirizzi che invii, le pagine che scarichiamo per te né gli archivi che creiamo.</li>
<li>Non vendiamo i tuoi dati personali e non li usiamo per fare pubblicità.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'Usiamo Google Analytics per contare le visite e capire come viene usato il sito.',
    analyticsSummaryOff: 'Non usiamo cookie pubblicitari o di analisi.',
    givenHtml: `<h2>Chi siamo</h2>
<p>{name} («noi») gestisce questo sito e lo strumento per scaricare siti web che offre, ed è titolare del trattamento dei dati personali descritti in questa informativa. Puoi contattarci all’indirizzo <a href="mailto:{email}">{email}</a>.</p>
<h2>Informazioni che ci fornisci</h2>
<p><strong>Indirizzi web e opzioni.</strong> Quando selezioni Salva, gli indirizzi che hai inserito e le opzioni che hai scelto vengono inviati al nostro server perché possa scaricare quelle pagine. Quando ci chiedi di trovare le pagine di un sito, ci viene inviato il suo indirizzo perché possiamo elencarle. Gli indirizzi vengono usati solo per completare la tua richiesta. L’archivio viene creato in memoria, inviato al tuo browser e poi eliminato. Non conserviamo copie delle pagine né dei loro file.</p>
<p><strong>Il tuo archivio.</strong> Il pannello che compare dopo un download legge il report contenuto nello ZIP direttamente nel tuo browser. Anche la scelta dei file e la ricompressione dello ZIP avvengono sul tuo dispositivo, e nulla ci viene inviato.</p>
<p><strong>Email.</strong> Se ci scrivi a <a href="mailto:{email}">{email}</a>, riceviamo il tuo indirizzo email e tutto ciò che scrivi. Li usiamo solo per risponderti e li conserviamo solo per il tempo necessario a gestire il tuo messaggio.</p>
<h2>Informazioni raccolte automaticamente</h2>
<p>Come la maggior parte dei siti web, il nostro provider di hosting registra alcuni dati tecnici di base per ogni richiesta, come l’indirizzo IP, il tipo di browser, la pagina richiesta e l’orario. Questi log servono a mantenere attivo il servizio, a indagare sugli errori e a prevenire abusi, e vengono eliminati a intervalli regolari.</p>
<p>Mentre un download è in corso, il nostro server usa anche il tuo indirizzo IP per limitare il numero di download che un singolo visitatore può eseguire contemporaneamente. Questo conteggio è conservato solo in memoria e scompare non appena il download termina.</p>
<h2>Come usiamo le informazioni</h2>
<ul>
<li>Per scaricare le pagine che richiedi e creare il tuo archivio.</li>
<li>Per rispondere alle tue email e alle tue richieste.</li>
<li>Per mantenere il servizio sicuro, affidabile ed equo per tutti, e per prevenire abusi.</li>
<li>Per individuare e correggere gli errori.</li>
<li>Per adempiere ai nostri obblighi di legge.</li>
</ul>
<h2>Basi giuridiche del trattamento</h2>
<p>Se ti trovi nello Spazio economico europeo, nel Regno Unito o in Svizzera, trattiamo i dati personali perché sono necessari per fornire il servizio che richiedi, sulla base del nostro legittimo interesse a gestire un servizio sicuro e affidabile e a prevenire abusi, oppure per adempiere a obblighi di legge.</p>`,
    analyticsHtml: `<h2>Strumenti di analisi</h2>
<p>Usiamo Google Analytics, un servizio di Google LLC, per capire come i visitatori usano il sito, ad esempio quali pagine vengono visualizzate e come arrivano le persone. Google Analytics imposta cookie e tratta dati, compreso il tuo indirizzo IP, sui server di Google, che potrebbero trovarsi al di fuori del tuo paese. Consultiamo i report solo in forma aggregata e non li usiamo per identificarti. Puoi leggere l’<a href="https://policies.google.com/privacy">informativa sulla privacy di Google</a> e disattivare il monitoraggio con il <a href="https://tools.google.com/dlpage/gaoptout">componente aggiuntivo del browser per la disattivazione di Google Analytics</a>.</p>`,
    cookiesTitle: 'Cookie e memoria locale',
    cookiesOn:
      'Non impostiamo cookie nostri. Google Analytics imposta cookie per distinguere le visite. Puoi bloccare o eliminare i cookie dalle impostazioni del browser: lo strumento per scaricare siti web continua a funzionare anche senza.',
    cookiesOff: 'Non impostiamo alcun cookie, e lo strumento per scaricare siti web non ne ha bisogno per funzionare.',
    restHtml: `<p>Se scegli un tema chiaro o scuro, la scelta viene salvata nella memoria locale del browser, così il sito la ricorda. Non lascia mai il tuo dispositivo e viene rimossa quando cancelli i dati del browser.</p>
<h2>Servizi di terze parti</h2>
<ul>
<li><strong>Hosting.</strong> Il nostro provider di hosting gestisce i server su cui funziona questo sito e tratta per nostro conto i log delle richieste descritti sopra.</li>
<li><strong>Google Fonts.</strong> Il sito carica i caratteri tipografici da Google Fonts, quindi il tuo browser si collega ai server di Google, che ricevono il tuo indirizzo IP.</li>
</ul>
<h2>I siti web che salvi</h2>
<p>Quando salvi una pagina, è il nostro server, non il tuo browser, a contattare il sito web che hai inserito e gli eventuali server che ospitano i suoi file. Quei siti vedono una richiesta proveniente dal nostro server, non dal tuo indirizzo IP. La richiesta si identifica come un normale browser (un browser mobile se scegli la versione mobile) e non contiene nessuno dei tuoi cookie né alcuna informazione personale.</p>
<h2>Non vendiamo i tuoi dati</h2>
<p>Non vendiamo, non affittiamo e non scambiamo dati personali, non li condividiamo per pubblicità mirata e non creiamo profili dei visitatori. Condividiamo informazioni solo con i fornitori di servizi indicati in questa informativa, o quando la legge lo richiede.</p>
<h2>Trasferimenti internazionali</h2>
<p>I nostri fornitori di servizi possono trattare le informazioni in paesi diversi da quello in cui vivi, compresi gli Stati Uniti. Quando la legge lo richiede, questi trasferimenti si basano su garanzie adeguate, come decisioni di adeguatezza o clausole contrattuali standard.</p>
<h2>Per quanto tempo conserviamo le informazioni</h2>
<ul>
<li><strong>Indirizzi inviati e archivi:</strong> non vengono conservati. Esistono solo mentre il tuo download viene creato.</li>
<li><strong>Log del server:</strong> conservati per un periodo limitato per motivi di sicurezza e di risoluzione dei problemi, poi eliminati.</li>
<li><strong>Email:</strong> conservate solo per il tempo necessario a rispondere e a gestire eventuali seguiti.</li>
</ul>
<h2>Sicurezza</h2>
<p>Tutto il traffico verso questo sito è cifrato con HTTPS. Gli archivi vengono creati in memoria e mai salvati su disco, e lo strumento per scaricare siti web si rifiuta di raggiungere reti private e indirizzi interni. Nessun metodo di trasmissione o di archiviazione è completamente sicuro, ma ci impegniamo a proteggere le poche informazioni che trattiamo.</p>
<h2>Privacy dei minori</h2>
<p>Questo servizio non è rivolto ai minori di 13 anni e non raccogliamo consapevolmente dati personali che li riguardano. Se ritieni che un minore ci abbia inviato dati personali, <a href="{contactUrl}">contattaci</a> e li cancelleremo.</p>
<h2>I tuoi diritti sulla privacy</h2>
<p>A seconda di dove vivi, potresti avere il diritto di:</p>
<ul>
<li>Chiedere quali dati personali conserviamo su di te e riceverne una copia.</li>
<li>Far correggere le informazioni inesatte.</li>
<li>Far cancellare le tue informazioni.</li>
<li>Opporti al modo in cui le usiamo o chiederne la limitazione.</li>
<li>Ricevere le tue informazioni in un formato portabile.</li>
<li>Presentare un reclamo all’autorità per la protezione dei dati del luogo in cui vivi.</li>
</ul>
<p>Se vivi in California o in un altro stato degli Stati Uniti con una legge sulla privacy dei consumatori, hai anche il diritto di sapere quali dati raccogliamo, di correggerli e cancellarli, e di non subire un trattamento diverso perché eserciti questi diritti. Non vendiamo né condividiamo dati personali secondo la definizione di queste leggi.</p>
<p>Per fare una richiesta, scrivi a <a href="mailto:{email}">{email}</a>. Potremmo dover prima verificare la tua identità, e risponderemo entro i tempi previsti dalla legge. Poiché conserviamo così pochi dati, spesso non abbiamo alcuna informazione su di te.</p>
<h2>Link ad altri siti web</h2>
<p>Questa informativa riguarda solo {name}. I siti web che scarichi e quelli a cui rimandiamo hanno le proprie informative sulla privacy, e non siamo responsabili del modo in cui trattano le informazioni.</p>
<h2>Modifiche a questa informativa</h2>
<p>Se modifichiamo questa informativa, aggiorneremo la data in cima a questa pagina. Le modifiche rilevanti saranno messe in evidenza sul sito.</p>
<h2>Contatti</h2>
<p>Hai domande su questa informativa o sul modo in cui trattiamo i tuoi dati? Scrivi a <a href="mailto:{email}">{email}</a> o usa la nostra <a href="{contactUrl}">pagina dei contatti</a>.</p>`,
  },

  terms: {
    title: 'Termini e condizioni d’uso',
    heading: 'Termini e condizioni',
    description:
      'Termini e condizioni di {name}, lo strumento gratis per scaricare siti web: uso consentito, copyright, limiti del servizio, garanzie e responsabilità.',
    lead: 'Questi termini si applicano quando usi {name} e il suo strumento per scaricare siti web. Usando il sito, li accetti, quindi ti invitiamo a leggerli con attenzione.',
    bodyHtml: `<h2>Informazioni su questi termini</h2>
<p>I presenti termini e condizioni («termini») costituiscono un accordo tra te e {name} («noi»). Regolano l’uso di questo sito web e dello strumento per scaricare siti web che offre (insieme, il «servizio»). Se non li accetti, ti preghiamo di non usare il servizio.</p>
<h2>Chi può usare il servizio</h2>
<p>Per usare il servizio devi avere almeno 13 anni. Se non hai raggiunto la maggiore età prevista nel luogo in cui vivi, puoi usarlo solo con il permesso di un genitore o di un tutore. Se usi il servizio per conto di un’azienda o di un’altra organizzazione, confermi di avere l’autorità per accettare questi termini a suo nome.</p>
<h2>Il servizio</h2>
<p>{name} ti permette di inserire l’indirizzo di una pagina web pubblica e di scaricare un archivio ZIP che contiene quella pagina e i file che usa, come fogli di stile, script, immagini e font. Puoi anche salvare più pagine insieme, la versione mobile di una pagina o un unico file HTML autonomo. Il servizio è gratuito, non richiede un account e viene fornito così com’è. Possiamo aggiungere, modificare o rimuovere funzioni in qualsiasi momento.</p>
<h2>Uso consentito</h2>
<p>Ti impegni a usare il servizio solo per scopi leciti. In particolare, ti impegni a non:</p>
<ul>
<li>Scaricare, copiare o ripubblicare contenuti che non hai il diritto di usare.</li>
<li>Spacciare un sito scaricato per tuo, o usarlo per impersonare un’altra persona o un’azienda.</li>
<li>Usare le pagine scaricate per phishing, frodi, malware o per raccogliere informazioni di altre persone.</li>
<li>Tentare di accedere a reti private, servizi interni o pagine che richiedono un login.</li>
<li>Inviare richieste automatiche o eccessive che impongano un carico irragionevole sui nostri server o sui siti web che scarichi.</li>
<li>Tentare di violare, sondare o aggirare la sicurezza o i limiti del servizio.</li>
<li>Rivendere il servizio, o offrirlo come parte di un altro prodotto, senza il nostro permesso scritto.</li>
</ul>
<h2>Copyright e contenuti di terzi</h2>
<p>I siti web che scarichi appartengono ai rispettivi proprietari. Salvare una pagina non trasferisce alcun diritto sui suoi testi, immagini, codice, font o marchi. Sei responsabile di verificare che l’uso che fai del materiale scaricato sia consentito, ad esempio per studio personale, per il backup del tuo sito o con il permesso del proprietario. Controlla la licenza di qualsiasi font o immagine prima di riutilizzarli.</p>
<p>{name} è uno strumento, non un servizio di hosting: ogni archivio viene creato per una singola richiesta e non viene conservato sui nostri server né pubblicato da noi.</p>
<h2>Segnalazioni di violazione del copyright</h2>
<p>Se ritieni che il servizio venga usato per violare il tuo copyright o altri tuoi diritti, scrivi a <a href="mailto:{email}">{email}</a> indicando:</p>
<ul>
<li>Il tuo nome e i tuoi recapiti.</li>
<li>Una descrizione dell’opera che ritieni violata.</li>
<li>L’indirizzo della pagina interessata.</li>
<li>Una dichiarazione in cui affermi di ritenere in buona fede che l’uso non sia autorizzato dal titolare dei diritti, da un suo rappresentante o dalla legge.</li>
<li>Una dichiarazione in cui affermi che le informazioni contenute nella segnalazione sono accurate e che sei il titolare dei diritti o sei autorizzato ad agire per suo conto.</li>
<li>La tua firma autografa o elettronica.</li>
</ul>
<p>Esaminiamo ogni segnalazione e possiamo adottare misure come il blocco delle richieste per l’indirizzo interessato.</p>
<h2>I nostri contenuti e il nostro marchio</h2>
<p>Il nome {name}, il logo, il design del sito, i testi e il software appartengono a noi o ai nostri licenzianti. Questi termini non ti conferiscono alcun diritto di usarli, se non per fare riferimento al servizio in modo corretto.</p>
<h2>Siti web di terzi</h2>
<p>Le pagine che scarichi e gli eventuali link presenti su questo sito portano a siti web che non controlliamo. Non siamo responsabili dei loro contenuti, della loro disponibilità o delle loro pratiche, e salvare una pagina non significa che la approviamo.</p>
<h2>Limiti e disponibilità</h2>
<p>Per mantenere il servizio veloce ed equo, ogni download ha dei limiti sul numero di pagine e di file, sulla dimensione dei file e sul tempo impiegato, e ogni visitatore può eseguire solo pochi download alla volta. Possiamo modificare questi limiti, bloccare le richieste che abusano del servizio o sospendere o revocare l’accesso in qualsiasi momento, con o senza preavviso. Possiamo anche interrompere temporaneamente il servizio per manutenzione o cessare di offrirlo.</p>
<h2>Nessuna garanzia</h2>
<p>Il servizio è fornito «così com’è» e «secondo disponibilità», senza garanzie di alcun tipo, espresse o implicite, comprese le garanzie di commerciabilità, di idoneità a uno scopo specifico e di non violazione. Non garantiamo che ogni pagina venga scaricata completamente o appaia identica all’originale, né che il servizio sia ininterrotto, sicuro o privo di errori.</p>
<h2>Limitazione di responsabilità</h2>
<p>Nella misura massima consentita dalla legge, {name} non è responsabile di eventuali danni indiretti, incidentali, speciali o consequenziali, né di perdite di dati, profitti o opportunità commerciali, derivanti dall’uso del servizio o di qualsiasi contenuto scaricato tramite esso. Alcuni ordinamenti non consentono queste limitazioni, quindi alcune di esse potrebbero non applicarsi a te.</p>
<h2>Manleva</h2>
<p>Ti impegni a difendere e a tenere indenne {name} da qualsiasi pretesa, perdita o costo, comprese le ragionevoli spese legali, derivanti da un uso improprio del servizio da parte tua o dalla tua violazione di questi termini.</p>
<h2>Disposizioni generali</h2>
<p>Se una qualsiasi parte di questi termini viene ritenuta inapplicabile, il resto rimane in vigore. Se non facciamo valere subito un termine, non rinunciamo al diritto di farlo valere in seguito. Questi termini, insieme alla nostra <a href="{privacyUrl}">informativa sulla privacy</a>, costituiscono l’intero accordo tra te e noi in merito al servizio.</p>
<h2>Modifiche a questi termini</h2>
<p>Possiamo aggiornare questi termini di tanto in tanto. La data in cima a questa pagina indica quando sono stati modificati l’ultima volta. Se continui a usare il servizio dopo una modifica, accetti i termini aggiornati.</p>
<h2>Contatti</h2>
<p>Domande su questi termini? Scrivi a <a href="mailto:{email}">{email}</a> o usa la nostra <a href="{contactUrl}">pagina dei contatti</a>.</p>`,
  },

  notFound: {
    title: 'Pagina non trovata',
    description: 'Questa pagina non esiste.',
    heading: 'Questa pagina non esiste',
    text: 'Il link potrebbe essere errato o la pagina potrebbe essere stata spostata. Controlla l’indirizzo o torna allo strumento per scaricare siti web.',
    button: 'Vai allo strumento per scaricare siti web',
  },

  serverError: {
    title: 'Qualcosa è andato storto',
    description: 'Si è verificato un errore imprevisto da parte nostra.',
    heading: 'Qualcosa è andato storto da parte nostra',
    textHtml:
      'Il server ha riscontrato un errore imprevisto durante il caricamento di questa pagina. Riprova tra poco. Se il problema persiste, <a href="{contactUrl}">faccelo sapere</a>.',
    button: 'Vai allo strumento per scaricare siti web',
  },
};

export default it;
