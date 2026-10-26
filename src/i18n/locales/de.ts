import type { Dict } from './en';

const de: Dict = {
  meta: {
    homeTitle: 'Website herunterladen – Webseite kostenlos als ZIP speichern',
    homeDescription:
      'Website herunterladen, kostenlos und ohne Anmeldung: Speichere jede Webseite oder Landingpage mit HTML, CSS, JavaScript, Bildern und Schriften als ZIP.',
    ogImageAlt: 'Website als ZIP speichern: HTML, CSS, JavaScript, Bilder und Schriften in einem Archiv',
    appFeatures: [
      'Jede Webseite als ZIP-Archiv herunterladen',
      'Speichert HTML, CSS, JavaScript, Bilder und Schriften',
      'Alle Dateien umbenennen',
      'Mobile Version einer Website kopieren',
      'Vereinfachter Download ohne JavaScript',
      'Originale Ordnerstruktur der Website beibehalten',
      'Saubere Kopie ohne Tracker, Werbung und Cookie-Banner',
      'Seite als eine eigenständige HTML-Datei speichern',
      'Mehrere Seiten oder die Desktop- und die mobile Version in einem Archiv herunterladen',
      'Archivbericht mit Einblicken in die Seite: Farben, Schriften, Seitengröße und Technik',
    ],
  },

  common: {
    skipToContent: 'Zum Inhalt springen',
    languageMenuLabel: 'Sprache',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Design wechseln',
    lastUpdated: 'Zuletzt aktualisiert: {date}',
  },

  nav: {
    howItWorks: 'So funktioniert’s',
    whatsSaved: 'Was gespeichert wird',
    faq: 'FAQ',
    cta: 'Website speichern',
    mainLabel: 'Hauptnavigation',
    footerLabel: 'Fußzeile',
  },

  footer: {
    tagline: 'Kostenloser Website-Downloader. Speichere nur Seiten, die du kopieren darfst.',
    about: 'Über uns',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    languages: 'Sprachen',
  },

  hero: {
    title: 'Website herunterladen und als ZIP speichern.',
    titleAccent: 'Kein Detail geht verloren.',
    lead: 'Ein kostenloser Website-Downloader. Füge die URL einer Seite ein und erhalte HTML, CSS, JavaScript, Bilder und Schriften in einem Archiv.',
    fieldLabel: 'Adresse der Webseite',
    placeholder: 'z. B. example.com/landing-page…',
    save: 'Speichern',
    saving: 'Wird gespeichert…',
    modeLegend: 'Umfang',
    modes: { single: 'Eine Seite', multi: 'Mehrere Seiten' },
    multiFieldLabel: 'Adressen der Webseiten',
    multiPlaceholder: 'Eine Adresse pro Zeile, bis zu {max}',
    findPages: 'Seiten auf dieser Website finden',
    findingPages: 'Seiten werden gesucht…',
    pagesFound: { one: '{count} Seite gefunden', other: '{count} Seiten gefunden' },
    noPagesFound: 'Auf {host} wurden keine weiteren Seiten gefunden. Füge die Adressen selbst hinzu, eine pro Zeile.',
    addPages: 'Ausgewählte Seiten hinzufügen',
    selectAll: 'Alle auswählen',
    clearSelection: 'Auswahl aufheben',
    deviceLegend: 'Version',
    devices: { desktop: 'Desktop', mobile: 'Mobil', both: 'Beide' },
    outputLegend: 'Speichern als',
    outputs: { zip: 'ZIP-Archiv', single: 'Einzelne HTML-Datei' },
    optionsLegend: 'Download-Optionen',
    moreOptions: 'Download anpassen',
    tryExample: 'Beispiel ausprobieren',
    options: {
      cleanCopy: { title: 'Saubere Kopie', hint: 'Tracker, Werbung und Cookie-Banner entfernen' },
      simplified: { title: 'Vereinfachter Download', hint: 'Ohne JavaScript' },
      renameAssets: { title: 'Alle Dateien umbenennen', hint: 'Kurze, saubere Namen wie image-1.jpg' },
      keepStructure: { title: 'Ordnerstruktur beibehalten', hint: 'Pfade wie auf der Original-Website' },
      prettify: { title: 'Code formatieren', hint: 'Minifiziertes HTML, CSS und JavaScript einrücken' },
      pickFiles: { title: 'Dateien vorher auswählen', hint: 'Archiv vor dem Download prüfen' },
    },
    scene: {
      nav: ['Start', 'Über uns', 'Projekte', 'Kontakt'],
      pageTitle: 'Ein klareres, helleres Web',
      idleTitle: 'Bereit zum Speichern',
      idleNote: 'Alle Dateien inklusive',
      workingTitle: 'Dateien werden gepackt',
      workingNote: 'Alle Dateien werden gesammelt',
      doneTitle: 'Gespeichert',
      doneNote: 'Archiv ist fertig',
    },
  },

  status: {
    downloading: '{host} wird heruntergeladen. Große Seiten können bis zu einer Minute dauern.',
    saved: '{filename} mit {files} gespeichert.',
    files: { one: '{count} Datei', other: '{count} Dateien' },
    missed: {
      one: '{count} Datei konnte nicht heruntergeladen werden und verweist weiterhin auf die Original-Website.',
      other: '{count} Dateien konnten nicht heruntergeladen werden und verweisen weiterhin auf die Original-Website.',
    },
    ready: 'Bereit: {files}. Wähle aus, was du behalten möchtest, und lade dann das Archiv herunter.',
    serverUnreachable: 'Der Server ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.',
    failed: 'Das Archiv konnte nicht erstellt werden. Versuche es erneut.',
  },

  errors: {
    emptyUrl: 'Gib die Adresse der Seite ein, die du speichern möchtest.',
    invalidUrl: '„{input}“ ist keine gültige Webadresse. Versuche es z. B. mit example.com.',
    protocol: 'Nur Adressen mit http:// oder https:// können gespeichert werden.',
    credentials: 'Entferne Benutzername und Passwort aus der Adresse und versuche es erneut.',
    localAddress: 'Lokale und interne Adressen können nicht gespeichert werden. Gib eine öffentliche Webadresse ein.',
    privateAddress: 'Adressen aus privaten Netzwerken können nicht gespeichert werden. Gib eine öffentliche Webadresse ein.',
    notPublicDomain: '„{host}“ ist keine öffentliche Domain. Gib die vollständige Domain ein, z. B. example.com.',
    privateNetwork: 'Diese Adresse führt in ein privates Netzwerk und kann nicht gespeichert werden. Gib eine öffentliche Webadresse ein.',
    notFound: '{host} wurde nicht gefunden. Prüfe die Schreibweise der Adresse.',
    timeout: '{host} hat zu lange nicht geantwortet. Versuche es gleich noch einmal.',
    unreachable: '{host} ist nicht erreichbar. Prüfe die Adresse und versuche es erneut.',
    httpError: '{host} hat mit Fehler {status} geantwortet, daher gibt es nichts zu speichern. Prüfe die Adresse oder versuche es später erneut.',
    notHtml: 'Diese Adresse liefert eine Datei, keine Webseite. Gib stattdessen die Adresse einer Seite ein.',
    badRequest: 'Die Anfrage war fehlerhaft. Lade die Seite neu und versuche es erneut.',
    internal: 'Beim Erstellen des Archivs ist etwas schiefgelaufen. Versuche es erneut oder probiere eine andere Seite.',
    tooManyPages: 'Du kannst bis zu {max} Seiten auf einmal hinzufügen.',
    busy: 'Du hast bereits laufende Downloads. Warte, bis sie fertig sind, und versuche es dann erneut.',
  },

  result: {
    title: 'Dein Archiv',
    downloadAgain: 'Erneut herunterladen',
    downloadSelected: 'Auswahl herunterladen',
    selection: '{files} ausgewählt, {size}',
    score: 'offline verfügbar',
    scoreHint: 'Anteil der Dateien der Seite, die im Archiv gespeichert sind. Alles andere wird weiterhin von der Original-Website geladen.',
    saved: { one: '{count} Datei gespeichert', other: '{count} Dateien gespeichert' },
    failed: {
      one: '{count} Datei konnte nicht gespeichert werden',
      other: '{count} Dateien konnten nicht gespeichert werden',
    },
    pages: { one: '{count} Seite', other: '{count} Seiten' },
    removed: { one: '{count} Element entfernt', other: '{count} Elemente entfernt' },
    liveLinks: {
      one: '{count} Link zu einer anderen Seite öffnet weiterhin die Original-Website.',
      other: '{count} Links zu anderen Seiten öffnen weiterhin die Original-Website.',
    },
    tabs: { files: 'Dateien', problems: 'Probleme', insights: 'Analyse' },
    filesHint: 'Entferne das Häkchen bei Dateien, die du nicht brauchst. Alles, was sie verwendet hat, lädt sie stattdessen von der Original-Website.',
    singleHint: 'Eine einzelne HTML-Datei enthält alles in sich, daher gibt es keine separaten Dateien zur Auswahl.',
    noProblems: 'Alle Dateien wurden gespeichert.',
    moreProblems: { one: 'Und {count} weitere.', other: 'Und {count} weitere.' },
    removedTitle: 'Von „Saubere Kopie“ entfernt',
    removedKinds: { tracker: 'Tracker und Tags', consent: 'Cookie-Banner', redirect: 'Automatische Weiterleitungen' },
    kinds: { html: 'Seite', css: 'CSS', js: 'JavaScript', image: 'Bild', font: 'Schrift', media: 'Medien', other: 'Datei' },
    reasons: {
      http: 'Der Server hat mit Fehler {status} geantwortet',
      timeout: 'Download hat zu lange gedauert',
      tooLarge: 'Größer als das Limit von {size} pro Datei',
      notAsset: 'Hat eine Webseite statt einer Datei geliefert',
      blocked: 'Verweist auf eine private oder gesperrte Adresse',
      network: 'Nicht erreichbar',
      deadline: 'Übersprungen: Das Zeitlimit für einen Download wurde erreicht',
      archiveFull: 'Übersprungen: Das Archiv hat seine maximale Größe erreicht',
      limit: 'Übersprungen: Die Seite verwendet mehr als {max} Dateien',
    },
    insights: {
      colors: 'Farben',
      neutrals: 'Neutraltöne',
      cssVariables: { one: '{count} CSS-Variable', other: '{count} CSS-Variablen' },
      copyColor: '{hex} kopieren',
      copied: '{hex} kopiert',
      fonts: 'Schriften',
      licenses: {
        google: 'Google Fonts: kostenlos nutzbar (Open Font License)',
        adobe: 'Adobe Fonts: lizenzpflichtig, nicht frei wiederverwendbar',
        unknown: 'Prüfe die Lizenz, bevor du sie wiederverwendest',
        system: 'Systemschrift: kommt vom Gerät, nicht von der Seite',
      },
      weight: 'Seitengröße',
      tech: 'Erstellt mit',
      techCategories: {
        cms: 'Website-Baukästen und CMS',
        framework: 'Frameworks',
        library: 'Bibliotheken und Dienste',
        analytics: 'Webanalyse und Werbung',
        consent: 'Cookie-Einwilligung',
      },
      seo: 'Suche und Teilen',
      seoItems: {
        title: 'Titel',
        description: 'Beschreibung',
        canonical: 'Kanonische Adresse',
        lang: 'Sprache',
        h1: 'Hauptüberschrift',
        ogImage: 'Vorschaubild zum Teilen',
        twitterCard: 'X (Twitter) Card',
        robots: 'Robots',
        structuredData: 'Strukturierte Daten',
        alt: 'Bilder ohne Alt-Text',
      },
      length: { one: '{count} Zeichen', other: '{count} Zeichen' },
      missing: 'Fehlt',
      none: 'Keine gefunden',
      altSummary: '{missing} von {total}',
    },
  },

  report: {
    title: 'Archivbericht: {host}',
    savedFrom: 'Gespeichert von {url} am {date}.',
    options: 'Optionen',
    optionsNone: 'Keine',
    files: 'Dateien in diesem Archiv',
    columns: { file: 'Datei', from: 'Originaladresse', size: 'Größe' },
    problems: 'Nicht in diesem Archiv',
    chooserTitle: 'Version von {host} auswählen',
    chooserText: 'Dieses Archiv enthält zwei Kopien der Seite: die Version, die Desktop-Browser erhalten, und die, die Smartphones erhalten.',
  },

  bookmarklet: {
    title: 'Jede Seite direkt aus deinem Browser speichern',
    text: 'Zieh den Button in deine Lesezeichenleiste. Klicke dann auf einer beliebigen Webseite auf das Lesezeichen, um {name} mit der bereits eingetragenen Adresse dieser Seite zu öffnen.',
    button: 'Mit {name} speichern',
    dragHint: 'Zieh diesen Button in deine Lesezeichenleiste.',
  },

  steps: {
    title: 'So funktioniert’s',
    lead: 'Drei Schritte, kein Konto. Die meisten Seiten sind in wenigen Sekunden fertig.',
    items: [
      {
        title: 'Adresse der Seite einfügen',
        text: 'Kopiere die URL aus der Adressleiste deines Browsers. Das https:// kannst du weglassen.',
      },
      {
        title: 'Optionen wählen',
        text: 'Tracker entfernen, die mobile Version speichern, JavaScript weglassen oder alles in einer einzigen HTML-Datei behalten.',
      },
      {
        title: 'Entpacken und index.html öffnen',
        text: 'Die ZIP-Datei wird sofort heruntergeladen. Öffne die Seite in einem beliebigen Browser oder bearbeite sie in deinem Code-Editor.',
      },
    ],
  },

  features: {
    title: 'Alle Dateien einer Website als Archiv herunterladen',
    lead: 'Lade eine Landingpage, eine komplette Website oder jede andere Seite völlig kostenlos herunter. Gib die URL oben in das Feld ein und klicke auf „Speichern“, um ein Archiv mit allen Dateien zu erhalten.',
    html: { title: 'HTML', text: 'Das Markup der Seite, bei dem jeder Verweis auf die gespeicherten Dateien umgeschrieben wird.' },
    code: { title: 'CSS & JavaScript', text: 'Stylesheets und Skripte, samt allem, was sie importieren.' },
    images: { title: 'Bilder', text: 'Fotos, Icons, SVGs, responsive srcset-Varianten und CSS-Hintergründe.' },
    fonts: { title: 'Schriften', text: 'Webfonts, die per @font-face geladen werden, einschließlich Google Fonts.' },
  },

  highlights: {
    title: 'Mehr als eine ZIP-Datei',
    lead: 'Zu jedem Download gibt es einen Bericht und Optionen, die die meisten Website-Downloader nicht haben.',
    items: [
      {
        title: 'Saubere Kopie',
        text: 'Tracker, Werbepixel, Cookie-Banner und Weiterleitungen werden entfernt. Die eigenen Skripte der Seite bleiben erhalten.',
      },
      {
        title: 'Ein Bericht zu jedem Archiv',
        text: 'Sieh, was gespeichert wurde, was nicht und warum, dazu Farben, Schriften, Seitengröße und Technik der Seite.',
      },
      {
        title: 'Mehrere Seiten auf einmal',
        text: 'Wähle bis zu 20 Seiten aus den Links und der Sitemap der Website. Links zwischen ihnen funktionieren offline.',
      },
      {
        title: 'Eine Datei oder beide Versionen',
        text: 'Speichere eine Seite als eigenständige HTML-Datei oder erhalte ihre Desktop- und mobile Kopie nebeneinander.',
      },
    ],
  },

  guide: {
    title: 'Website herunterladen: jede Webseite kostenlos als ZIP speichern',
    tocTitle: 'Auf dieser Seite',
    tocLabel: 'Inhaltsverzeichnis',
    introHtml: `<p>Dieser Website-Downloader kopiert eine Webseite samt allem, was sie zur Darstellung braucht, und gibt sie dir als eine einzige ZIP-Datei. Du erhältst das HTML, das CSS, das JavaScript, alle Bilder und alle Webfonts, sortiert in Ordnern und so verknüpft, dass sich die Seite auf deinem eigenen Computer öffnen lässt. Du musst nichts installieren und kein Konto anlegen: URL einfügen, auf „Speichern“ klicken, und das Archiv wird in deinem Browser heruntergeladen.</p>
<p>Er ist für die Seiten gemacht, die man am häufigsten behalten möchte: Landingpages, Produktseiten, Portfolios, Newsletter-Anmeldeseiten und One-Pager. Statt jede Datei einzeln über die Entwicklertools deines Browsers zu speichern, hast du die komplette Seite in wenigen Sekunden.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'Website als ZIP herunterladen – so geht’s',
        html: `<ol>
<li>Öffne die Seite, die du speichern möchtest, und kopiere ihre Adresse aus der Adressleiste des Browsers.</li>
<li>Füge die Adresse oben auf dieser Seite in das Feld ein. Das <code>https://</code> kannst du weglassen.</li>
<li>Wähle die Optionen, die du brauchst, zum Beispiel Dateien umbenennen oder die originale Ordnerstruktur der Website beibehalten. Die Vorschau neben dem Feld zeigt, wie das Archiv aufgebaut sein wird.</li>
<li>Klicke auf „Speichern“. Sobald das Archiv fertig ist, lädt dein Browser eine Datei herunter, die nach der Website benannt ist, zum Beispiel <code>example.com.zip</code>. Entpacke sie und öffne <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'Was im Archiv enthalten ist',
        html: `<p>Der Downloader liest das HTML der Seite und findet jede Datei, auf die es verweist: Stylesheets, Skripte, Icons, Bilder, responsive Bildgrößen aus <code>srcset</code>, Video-Poster, Inline-Styles und Bilder, die erst beim Scrollen geladen werden. Danach öffnet er jedes Stylesheet und folgt dessen <code>@import</code>-Regeln und <code>url()</code>-Verweisen. So landen auch Hintergrundbilder und Webfonts, einschließlich Google Fonts, im Archiv.</p>
<p>Jeder Verweis wird auf die gespeicherte Kopie umgeschrieben, sodass die Seite ihre eigenen lokalen Dateien lädt, statt auf den Originalserver zuzugreifen. Kann eine Datei nicht heruntergeladen werden, etwa weil ihr Server Anfragen von anderen Websites ablehnt, behält der Link seine ursprüngliche Webadresse. Die Seite lädt diese Datei dann weiterhin, solange du online bist, und nichts geht unbemerkt kaputt.</p>
<p>Jedes Archiv enthält außerdem <code>archive-report.html</code>, einen übersichtlichen Bericht darüber, was gespeichert wurde, welche Dateien nicht gespeichert werden konnten und warum, und wie viel der Seite jetzt offline funktioniert. Zudem listet er die Farben und Schriften der Seite samt Lizenzen auf, ihre Seitengröße nach Dateityp, die Tools, mit denen sie erstellt wurde, und ihre Tags für Suche und Teilen.</p>`,
      },
      {
        id: 'save-page-as',
        heading: 'Warum nicht einfach „Seite speichern unter“?',
        html: `<p>Browser können eine Seite speichern, aber das Ergebnis ist oft unvollständig. Beim Speichern als „vollständige“ Webseite landen meist alle Dateien in einem Ordner mit langen, automatisch erzeugten Namen, und oft fehlen die Schriften und Hintergrundbilder, die Stylesheets laden, sowie Bilder, die erst beim Scrollen erscheinen. Eine einzelne MHTML-Datei ist aufgeräumter, lässt sich aber nicht in jedem Browser oder Code-Editor öffnen. Ein Website-Downloader folgt jedem Stylesheet bis zu seinen Schriften und Hintergründen und liefert dir eine normale ZIP-Datei, die sich überall öffnen lässt, mit der Ordnerstruktur deiner Wahl.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Landingpage herunterladen, um sie zu analysieren, zu testen oder nachzubauen',
        html: `<p>Marketer und Affiliates speichern Landingpages, um ein Swipe File mit Angeboten, Headlines und Layouts anzulegen, die gut konvertieren. Designer laden eine Seite herunter, um Abstände, Farben und Typografie in Ruhe zu untersuchen. Entwickler nutzen das Tool, um eine alte statische Website zu kopieren und auf ein neues Hosting umzuziehen, schnell ein lokales Mock-up für einen Kunden zu bauen oder Änderungen an einer Kopie zu testen, ohne die Live-Website anzufassen. Agenturen archivieren die Seite eines Kunden vor einem Redesign, damit festgehalten ist, wie sie vorher aussah.</p>
<p>Da das Archiv aus einfachen Dateien besteht, kannst du es in jedem Code-Editor öffnen, Texte oder Styles ändern und das Ergebnis sofort im Browser ansehen.</p>`,
      },
      {
        id: 'options',
        heading: 'Die richtigen Optionen wählen',
        html: `<p><strong>Saubere Kopie</strong> entfernt Analyse- und Werbe-Tags, Session-Recorder und Cookie-Banner sowie automatische Weiterleitungen. Die eigenen Skripte der Seite bleiben erhalten, sodass Slider und Menüs weiter funktionieren, aber die gespeicherte Kopie meldet keine Besuche mehr an Dritte und verdeckt das Design nicht mit einem Banner.</p>
<p><strong>Vereinfachter Download</strong> entfernt das gesamte JavaScript und behält einen statischen Schnappschuss von HTML, CSS, Bildern und Schriften. Bilder, die normalerweise erst nach einem Skript laden, werden auf sofortiges Laden umgestellt, damit sie trotzdem erscheinen. Das ist die beste Wahl, wenn es dir nur um das Design geht.</p>
<p><strong>Alle Dateien umbenennen</strong> ersetzt lange, gehashte Dateinamen durch kurze wie <code>style-1.css</code> und <code>image-4.webp</code>. Aktiviere die Option, wenn du die Seite bearbeiten willst und ein aufgeräumtes Projekt möchtest.</p>
<p><strong>Ordnerstruktur beibehalten</strong> übernimmt die Ordnerpfade, die die Website selbst verwendet, etwa <code>assets/css/main.css</code>, statt die Dateien nach Typ zu gruppieren. Dateien von anderen Domains landen im Ordner <code>external</code>, sortiert nach ihrem Host.</p>
<p><strong>Version</strong> legt fest, welche Kopie der Seite du bekommst. „Mobil“ ruft die Seite so ab, wie es ein iPhone tut; manche Websites liefern an Smartphones ein anderes Layout, kleinere Bilder oder andere Inhalte aus. „Beide“ speichert die Desktop- und die mobile Kopie nebeneinander in einem Archiv.</p>
<p>Mit <strong>Speichern als</strong> „Einzelne HTML-Datei“ landen alle Bilder, Schriften, Stylesheets und Skripte in einer einzigen <code>.html</code>-Datei. Sie ist größer als ein ZIP, aber es gibt nichts zu entpacken, und sie lässt sich leicht aufbewahren, an eine E-Mail anhängen oder auf einem anderen Computer öffnen.</p>
<p>Unter <strong>Download anpassen</strong> rückt <strong>Code formatieren</strong> minifiziertes HTML, CSS und JavaScript ein, damit sich der Code leicht lesen lässt, und <strong>Dateien vorher auswählen</strong> zeigt die Dateien des Archivs, bevor etwas heruntergeladen wird. So kannst du große Videos oder Bilder weglassen, die du nicht brauchst.</p>`,
      },
      {
        id: 'offline',
        heading: 'Website herunterladen und offline nutzen',
        html: `<p>Eine heruntergeladene Seite öffnet sich auch ohne Internetverbindung, solange ihre Dateien gespeichert wurden. Eine Offline-Kopie ist praktisch für Präsentationen, um eine Seite im Flugzeug durchzusehen oder um eine Seite aufzubewahren, die sich ändern oder verschwinden könnte.</p>
<ol>
<li>Füge die Adresse der Seite oben auf dieser Seite ein und klicke auf <strong>Speichern</strong>.</li>
<li>Entpacke das Archiv in einen Ordner auf deinem Computer.</li>
<li>Öffne <code>index.html</code> in einem beliebigen Browser. Bilder, Stile und Schriften laden aus den Ordnern daneben, deshalb funktioniert die Seite offline.</li>
</ol>
<p>Um mehr als eine Seite offline anzusehen, wechsle zu <strong>Mehrere Seiten</strong> und trage bis zu 20 Adressen ein, oder wähle <strong>Seiten auf dieser Website finden</strong>, um sie aus den Links und der Sitemap der Website auszuwählen. Sie landen in einem Archiv, gemeinsam genutzte Dateien werden nur einmal gespeichert, und Links zwischen den gespeicherten Seiten öffnen die lokalen Kopien. Links zu Seiten, die du nicht gespeichert hast, zeigen weiterhin auf die Live-Website, und der Archivbericht zeigt, wie viel von jeder Seite offline funktioniert.</p>`,
      },
      {
        id: 'limits',
        heading: 'Was ein Website-Downloader nicht kopieren kann',
        html: `<p>Jeder Website-Ripper kann nur speichern, was der Server an einen Browser sendet. Alles, was auf dem Server läuft, etwa PHP, Datenbanken, APIs und Zahlungssysteme, verlässt nie den Webserver und ist deshalb nicht enthalten. Seiten hinter einem Login sind nicht erreichbar. Websites, die ihre Inhalte erst nach dem Laden per JavaScript aufbauen, wie es bei Single-Page-Apps üblich ist, werden unter Umständen nur als leere Hülle gespeichert. Formulare auf einer gespeicherten Seite senden ihre Daten weiterhin an die Original-Website.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Heruntergeladene Websites verantwortungsvoll nutzen',
        html: `<p>Durch das Herunterladen einer Seite gehen keine Rechte an ihr auf dich über. Texte, Bilder, Code und Schriften gehören weiterhin ihren Eigentümern. Speichere Seiten, um von ihnen zu lernen, um deine eigene Arbeit zu sichern oder mit Erlaubnis des Eigentümers, und prüfe die Lizenz jeder Schrift und jedes Bildes, bevor du sie wiederverwendest. Veröffentliche eine kopierte Website nicht als deine eigene.</p>`,
      },
    ],
  },

  faq: {
    title: 'Häufig gestellte Fragen',
    leadHtml: 'Hast du eine andere Frage? <a href="{contactUrl}">Schreibe uns</a> und wir beantworten sie.',
    items: [
      {
        question: 'Was ist ein Website-Downloader?',
        answer:
          'Ein Website-Downloader ist ein Tool, das eine Webseite samt allen Dateien kopiert, die sie zur Darstellung braucht: HTML, Stylesheets, Skripte, Bilder und Schriften. Dieses Tool packt alles in ein einziges ZIP-Archiv, das du auf deinem Computer öffnen kannst. Dabei wird jeder Link so umgeschrieben, dass die Seite mit den lokalen Dateien funktioniert.',
      },
      {
        question: 'Ist dieser Website-Downloader kostenlos?',
        answer:
          'Ja. Die Nutzung ist kostenlos, ohne Konto, ohne Anmeldung und ohne Software-Installation. Füge eine URL ein, klicke auf „Speichern“, und die ZIP-Datei wird in deinem Browser heruntergeladen.',
      },
      {
        question: 'Wie lade ich eine Website als ZIP-Datei herunter?',
        answer:
          'Kopiere die Adresse der gewünschten Seite, füge sie oben auf dieser Seite in das Feld ein und klicke auf „Speichern“. Wähle vorher bei Bedarf Optionen aus, etwa „Alle Dateien umbenennen“ oder „Ordnerstruktur beibehalten“. Sobald das Archiv fertig ist, lädt dein Browser es als .zip-Datei herunter, benannt nach der Website.',
      },
      {
        question: 'Kann ich eine komplette Website mit allen Unterseiten herunterladen?',
        answer:
          'Du kannst bis zu 20 Seiten einer Website in einem Archiv speichern. Wechsle zu „Mehrere Seiten“ und füge dann die Adressen ein oder klicke auf „Seiten auf dieser Website finden“, um sie aus den Links und der Sitemap der Website auszuwählen. Dateien, die die Seiten gemeinsam nutzen, werden nur einmal gespeichert, und Links zwischen den gespeicherten Seiten funktionieren auch offline. Links zu Seiten, die du nicht gespeichert hast, verweisen weiterhin auf die Live-Website.',
      },
      {
        question: 'Kann ich den Quellcode einer Website herunterladen?',
        answer:
          'Du erhältst den Frontend-Quellcode: das HTML, CSS und JavaScript, das dein Browser empfängt, dazu Bilder und Schriften. Serverseitiger Code wie PHP, Datenbanken, APIs und Backend-Logik verlässt nie den Webserver, daher kann ihn kein Website-Downloader kopieren.',
      },
      {
        question: 'Kann ich eine Landingpage mit Bildern und CSS herunterladen?',
        answer:
          'Ja. Landingpages kann dieses Tool am besten. Es speichert das Markup der Seite, jedes Stylesheet und die Dateien, die diese Stylesheets importieren, Hintergrundbilder, responsive Bildgrößen aus srcset, per Lazy Loading geladene Bilder und Webfonts, einschließlich Google Fonts.',
      },
      {
        question: 'Kann ich alle Bilder einer Website herunterladen?',
        answer:
          'Ja, von den Seiten, die du speicherst. Das Archiv enthält jedes Bild, das diese Seiten verwenden: normale Bilder, responsive Größen aus srcset, SVG-Icons, CSS-Hintergrundbilder und per Lazy Loading geladene Bilder. Aktiviere „Dateien vorher auswählen“, um die Liste vor dem Download zu sehen und nur die Dateien zu behalten, die du brauchst.',
      },
      {
        question: 'Wie lade ich eine Website für die Offline-Nutzung herunter?',
        answer:
          'Füge die Adresse der Seite oben auf dieser Seite ein, klicke auf „Speichern“ und entpacke das Archiv. Öffne index.html, und die Seite lädt aus den gespeicherten Dateien, ganz ohne Internetverbindung. Für mehrere Seiten wechselst du zu „Mehrere Seiten“ und fügst bis zu 20 Adressen hinzu; Links zwischen den gespeicherten Seiten funktionieren dann ebenfalls offline.',
      },
      {
        question: 'Wie öffne ich eine Website nach dem Herunterladen?',
        answer:
          'Entpacke das Archiv und öffne index.html in einem beliebigen Browser. Bilder, Styles und Schriften werden aus den Ordnern daneben geladen. Um die Seite zu bearbeiten, öffne den Ordner in einem Code-Editor wie VS Code.',
      },
      {
        question: 'Warum sieht meine heruntergeladene Seite anders aus als das Original?',
        answer:
          'Manche Websites bauen ihre Inhalte erst nach dem Laden per JavaScript auf oder laden Dateien von Servern, die andere Websites blockieren. Der Downloader speichert die Seite so, wie der Server sie zuerst ausliefert. Inhalte, die erst nach dem Ausführen von Skripten erscheinen, können daher fehlen. Dateien, die nicht heruntergeladen werden konnten, behalten ihre ursprüngliche Webadresse und laden weiterhin, solange du online bist. Der Archivbericht führt jede dieser Dateien mit dem Grund auf.',
      },
      {
        question: 'Kann ich die mobile Version einer Website herunterladen?',
        answer:
          'Ja. Wähle unter „Version“ die Option „Mobil“, bevor du auf „Speichern“ klickst. Die Seite und ihre Dateien werden dann wie von einem iPhone-Browser angefordert, sodass Websites mit eigenem mobilen Layout diese Version ausliefern. Wähle „Beide“, um die Desktop- und die mobile Kopie in einem Archiv zu erhalten.',
      },
      {
        question: 'Was macht „Vereinfachter Download“?',
        answer:
          'Diese Option entfernt das gesamte JavaScript aus der gespeicherten Seite und lässt einen statischen Schnappschuss von HTML, CSS, Bildern und Schriften übrig. Per Lazy Loading geladene Bilder werden auf normales Laden umgestellt, damit sie auch ohne Skripte erscheinen. Nutze sie, wenn du nur Layout und Design brauchst.',
      },
      {
        question: 'Was entfernt „Saubere Kopie“?',
        answer:
          'Analyse- und Werbe-Tags wie Google Analytics, Google Tag Manager und das Meta-Pixel, Session-Recorder wie Hotjar und Microsoft Clarity, Cookie-Banner wie OneTrust und Cookiebot sowie automatische Weiterleitungen. Die eigenen Skripte der Seite bleiben erhalten. Der Archivbericht listet alles auf, was entfernt wurde.',
      },
      {
        question: 'Kann ich eine Webseite als einzelne HTML-Datei speichern?',
        answer:
          'Ja. Wähle unter „Speichern als“ die Option „Einzelne HTML-Datei“. Alle Bilder, Schriften, Stylesheets und Skripte landen dann in einer einzigen .html-Datei, die sich in jedem Browser öffnen lässt, ohne dass du etwas entpacken musst.',
      },
      {
        question: 'Was steht im Archivbericht?',
        answer:
          'Jedes Archiv enthält die Datei archive-report.html. Sie zeigt, wie viel der Seite für die Offline-Nutzung gespeichert wurde, listet jede Datei, die nicht gespeichert werden konnte, samt Grund auf und beschreibt die Seite: ihre Farben, Schriften und deren Lizenzen, die Seitengröße nach Dateityp, die Tools, mit denen sie erstellt wurde, und ihre Tags für Suche und Teilen. Dieselben Angaben erscheinen nach jedem Download auch auf dieser Seite.',
      },
      {
        question: 'Gibt es eine Größenbegrenzung?',
        answer:
          'Eine einzelne Seite kann bis zu 400 Dateien enthalten, mehrere Seiten zusammen bis zu 1.000. Jede Datei darf bis zu 25 MB groß sein, ein Archiv bis zu 30 MB, und du kannst bis zu 20 Seiten auf einmal speichern. Ein Download bricht nach etwa 90 Sekunden ab, bei mehreren Seiten oder beiden Versionen nach 150 Sekunden; alle Dateien, die bis dahin nicht gespeichert wurden, verweisen weiterhin auf die Live-Website und werden im Archivbericht aufgeführt.',
      },
      {
        question: 'Was ist der Unterschied zu HTTrack und anderen Website-Kopierern?',
        answer:
          'HTTrack und Cyotek WebCopy sind Desktop-Programme: Du installierst sie, und sie durchsuchen eine Website von deinem Computer aus, indem sie ihren Links folgen. Dieser Website-Downloader läuft im Browser, ganz ohne Installation. Er speichert die Seiten, die du auswählst, bis zu 20 auf einmal, als ein ZIP mit Bericht und kann dabei Tracker und Cookie-Banner entfernen. Um eine große Website mit Tausenden Seiten zu spiegeln, ist ein Desktop-Crawler die bessere Wahl.',
      },
      {
        question: 'Ist es legal, eine Website herunterzuladen?',
        answer:
          'Eine Seite zum persönlichen Lernen, zum Testen oder zur Archivierung zu speichern, ist in der Regel unproblematisch. Texte, Bilder, Code und Schriften gehören aber weiterhin ihren Eigentümern. Veröffentliche eine heruntergeladene Website nicht erneut und nutze ihre Inhalte nicht ohne Erlaubnis kommerziell. Prüfe außerdem die Lizenz von Schriften oder Bildern, bevor du sie wiederverwendest.',
      },
      {
        question: 'Speichert ihr die Websites, die ich herunterlade?',
        answer:
          'Nein. Jedes Archiv wird für deine Anfrage im Arbeitsspeicher erstellt und direkt an deinen Browser gesendet. Wir behalten keine Kopie der Seiten, die du speicherst, oder der Dateien darin.',
      },
    ],
  },

  cta: {
    title: 'Deine nächste Seite ist nur einen Klick entfernt',
    text: 'Kostenlos, ohne Anmeldung, und das Archiv öffnet sich in jedem Browser.',
    button: 'Website speichern',
  },

  about: {
    title: 'Über uns – Kostenloser Website-Downloader',
    heading: 'Über {name}',
    description:
      '{name}, der kostenlose Website-Downloader: warum es ihn gibt, wer ihn nutzt und wie er Websites mit HTML, CSS, Bildern und Schriften als ZIP speichert.',
    lead: 'Wir entwickeln ein kostenloses Tool, das jede öffentliche Webseite mit allem, was sie zur Darstellung braucht, als eine einzige ZIP-Datei speichert, die du offline öffnen kannst.',
    bodyHtml: `<h2>Was {name} macht</h2>
<p>{name} ist ein kostenloser <a href="{homeUrl}">Online-Website-Downloader</a>. Füge die Adresse einer Webseite ein, und das Tool sammelt das HTML der Seite samt allen Stylesheets, Skripten, Bildern und Schriften, die sie verwendet, schreibt die Links so um, dass sie auf die gespeicherten Dateien verweisen, und liefert dir ein einziges ZIP-Archiv. Entpacke es, öffne <code>index.html</code>, und die Seite lädt in deinem Browser auch ohne Internetverbindung.</p>
<p>Du musst nichts installieren und kein Konto anlegen. Das Tool funktioniert in jedem modernen Browser, unter Windows, macOS, Linux, Android und iOS.</p>
<h2>Warum wir es entwickelt haben</h2>
<p>Eine Webseite zu speichern sollte einfach sein, ist es aber selten. Die Browserfunktion „Seite speichern unter“ übersieht oft Webfonts, CSS-Hintergrundbilder, responsive Bildgrößen und die Dateien, die ein Stylesheet importiert, sodass die Kopie beim späteren Öffnen fehlerhaft aussieht. Alles von Hand aus den Entwicklertools zusammenzusuchen, dauert lange und ist fehleranfällig. Wir wollten einen einzigen Schritt, der die ganze Arbeit erledigt: URL einfügen, auf „Speichern“ klicken und ein aufgeräumtes Archiv erhalten, das genauso aussieht wie das Original.</p>
<h2>Wer {name} nutzt</h2>
<ul>
<li><strong>Marketer und Affiliates</strong> bewahren Kopien von Landingpages auf, von denen sie lernen wollen, und sichern ihre eigenen Seiten vor einem Redesign.</li>
<li><strong>Designer</strong> speichern Seiten, um Layout, Farben und Typografie zu studieren, und sehen im Archivbericht, welche Schriften und Farben eine Seite verwendet.</li>
<li><strong>Entwickler</strong> ziehen alte statische Seiten auf ein neues Hosting um, erstellen Offline-Demos und testen Änderungen an einer lokalen Kopie statt an der Live-Website.</li>
<li><strong>Lernende und Lehrende</strong> laden echte Seiten herunter, um zu verstehen, wie HTML, CSS und JavaScript zusammenspielen.</li>
<li><strong>Forscher und Archivare</strong> dokumentieren eine Seite, bevor sie sich ändert oder verschwindet.</li>
</ul>
<h2>Was du speichern kannst</h2>
<p>Jeder Download enthält die Seite und die Dateien, die sie zur Darstellung braucht. Mit den Optionen passt du das Archiv an deine Aufgabe an:</p>
<ul>
<li>Bis zu 20 Seiten einer Website in einem Archiv speichern, wobei die Links zwischen ihnen offline funktionieren.</li>
<li>Die mobile Version einer Website herunterladen oder die Desktop- und die mobile Version nebeneinander.</li>
<li>Eine Seite als eigenständige HTML-Datei statt als ZIP speichern.</li>
<li>Eine saubere Kopie ohne Analyse-Tags, Werbeskripte oder Cookie-Banner erstellen.</li>
<li>Die originale Ordnerstruktur der Website beibehalten oder jeder Datei einen kurzen, sauberen Namen geben.</li>
</ul>
<p>Jedes Archiv enthält außerdem einen Bericht. Er listet jede gespeicherte Datei auf, nennt alles, was nicht gespeichert werden konnte, samt Grund, und bietet Einblicke in die Seite, etwa ihre Farben, Schriften und Seitengröße. Die vollständige Liste findest du unter <a href="{homeUrl}#whats-saved">Was bei einem Download gespeichert wird</a>.</p>
<h2>So funktioniert’s</h2>
<p>Wenn du eine Adresse absendest, ruft unser Server die Seite ab, findet alle Stylesheets, Skripte, Bilder und Schriften, die sie verwendet, lädt sie herunter und schreibt die Seite so um, dass sie auf die gespeicherten Kopien verweist. Das Archiv wird für deine Anfrage im Arbeitsspeicher erstellt und direkt an deinen Browser gesendet. Wir behalten keine Kopie der Seite oder des Archivs. Die <a href="{homeUrl}#how-it-works">Schritt-für-Schritt-Anleitung</a> zeigt den Ablauf von Anfang bis Ende.</p>
<h2>Wofür wir stehen</h2>
<ul>
<li><strong>Kostenlos nutzbar.</strong> Kein Konto, keine Anmeldung und keine Software zum Installieren.</li>
<li><strong>Standardmäßig privat.</strong> Wir speichern weder die Seiten, die du sicherst, noch die Dateien darin. Unsere <a href="{privacyUrl}">Datenschutzerklärung</a> erläutert genau, welche Daten wir erfassen.</li>
<li><strong>Ehrliche Ergebnisse.</strong> Kann eine Datei nicht gespeichert werden, steht das samt Grund im Archivbericht, sodass du nicht erst später auf eine fehlerhafte Seite stößt.</li>
<li><strong>Respekt vor Urhebern.</strong> Das Herunterladen einer Seite gibt dir keine Rechte daran. Unsere <a href="{termsUrl}">Nutzungsbedingungen</a> verlangen, dass du nur speicherst, was du verwenden darfst.</li>
</ul>
<h2>Kontakt</h2>
<p>Du hast eine Seite gefunden, die sich nicht richtig speichern lässt, oder eine Idee für eine neue Funktion? Viele häufige Fragen beantworten wir in unseren <a href="{homeUrl}#faq">FAQ</a>. Für alles andere <a href="{contactUrl}">schreibe uns</a>. Wir lesen jede Nachricht.</p>`,
  },

  contact: {
    title: 'Kontakt – Hilfe zum Website-Downloader',
    heading: 'Kontakt',
    description:
      'Kontakt zu {name}: Hilfe zum Website-Downloader, Meldungen zu nicht gespeicherten Seiten, Funktionswünsche, Urheberrechts- und Datenschutzanfragen.',
    lead: 'Fragen, Fehlerberichte, Ideen für neue Funktionen, Urheberrechtsmeldungen und Datenschutzanfragen landen alle im selben Postfach, und wir lesen jede Nachricht.',
    bodyHtml: `<h2>Wobei wir helfen können</h2>
<ul>
<li><strong>Hilfe bei einem Download.</strong> Eine Seite wurde nicht gespeichert, sieht offline anders aus oder ist mittendrin abgebrochen.</li>
<li><strong>Fehlerberichte.</strong> Etwas auf der Website funktioniert nicht so, wie es sollte.</li>
<li><strong>Ideen für Funktionen.</strong> Eine Option, die du dir für den Website-Downloader wünschst.</li>
<li><strong>Meldungen zu Urheberrecht und Missbrauch.</strong> Du glaubst, dass der Dienst genutzt wird, um deine Inhalte ohne Erlaubnis zu kopieren.</li>
<li><strong>Datenschutzanfragen.</strong> Du möchtest wissen, welche Daten wir über dich gespeichert haben, oder uns bitten, diese zu löschen.</li>
<li><strong>Partnerschaften und Presse.</strong> Du möchtest mit uns zusammenarbeiten oder über {name} berichten.</li>
</ul>
<h2>Bevor du uns schreibst</h2>
<p>Viele Fragen, etwa wie du eine komplette Website herunterlädst, die mobile Version speicherst oder eine Website nach dem Herunterladen öffnest, beantworten unsere <a href="{homeUrl}#faq">häufig gestellten Fragen</a>. Dort findest du oft am schnellsten eine Antwort.</p>
<h2>Eine Seite melden, die nicht richtig gespeichert wurde</h2>
<p>Damit wir das Problem schnell beheben können, gib bitte Folgendes an:</p>
<ul>
<li>Die Adresse der Seite, die du speichern wolltest.</li>
<li>Die Optionen, die du aktiviert hattest.</li>
<li>Die Meldung unter dem Button „Speichern“, falls eine angezeigt wurde.</li>
<li>Was beim Öffnen der gespeicherten Seite falsch aussieht.</li>
<li>Falls vorhanden, die Datei <code>archive-report.html</code> aus dem ZIP. Darin ist jede Datei aufgeführt, die nicht gespeichert werden konnte, samt Grund.</li>
</ul>
<h2>Meldungen zu Urheberrecht und Missbrauch</h2>
<p>{name} hostet die Seiten nicht, die Nutzer speichern: Jedes Archiv wird für eine einzelne Anfrage erstellt und nie auf unseren Servern gespeichert. Wenn du glaubst, dass der Dienst genutzt wird, um deine Inhalte auf eine Weise zu kopieren, die deine Rechte verletzt, schreibe uns eine E-Mail mit der Adresse deiner Seite, einer Beschreibung des Problems und Angaben dazu, wie wir dich erreichen können. Wir prüfen jede Meldung. Welche Angaben eine förmliche Meldung enthalten sollte, steht in unseren <a href="{termsUrl}">Nutzungsbedingungen</a>.</p>
<h2>Datenschutzanfragen</h2>
<p>Wenn du erfahren möchtest, welche personenbezogenen Daten wir über dich gespeichert haben, oder diese berichtigen oder löschen lassen möchtest, schreibe uns bitte eine E-Mail von der Adresse, die die Anfrage betrifft. Unsere <a href="{privacyUrl}">Datenschutzerklärung</a> erläutert, welche Daten wir erfassen und welche Rechte du hast.</p>
<h2>Antwortzeit</h2>
<p>In der Regel antworten wir innerhalb weniger Werktage.</p>`,
  },

  privacy: {
    title: 'Datenschutz – Umgang mit deinen Daten',
    heading: 'Datenschutzerklärung',
    description:
      'Datenschutzerklärung von {name}: was der Website-Downloader erfasst, was wir nie speichern, Cookies, Drittanbieterdienste und deine Datenschutzrechte.',
    lead: 'Diese Datenschutzerklärung erläutert, welche Informationen {name} erfasst, wenn du diese Website und den zugehörigen Website-Downloader nutzt, warum wir sie erfassen und welche Wahlmöglichkeiten du hast.',
    shortHtml: `<h2>Kurz zusammengefasst</h2>
<ul>
<li>Für die Nutzung des Website-Downloaders benötigst du weder ein Konto noch deinen Namen oder deine E-Mail-Adresse.</li>
<li>Wir speichern weder die Adressen, die du eingibst, noch die Seiten, die wir für dich abrufen, noch die Archive, die wir erstellen.</li>
<li>Wir verkaufen deine personenbezogenen Daten nicht und verwenden sie nicht für Werbung.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'Wir nutzen Google Analytics, um Besuche zu zählen und zu verstehen, wie die Website genutzt wird.',
    analyticsSummaryOff: 'Wir verwenden keine Werbe- oder Analyse-Cookies.',
    givenHtml: `<h2>Wer wir sind</h2>
<p>{name} („wir“, „uns“) betreibt diese Website und den darauf angebotenen Website-Downloader und ist für die Verarbeitung der in dieser Datenschutzerklärung beschriebenen personenbezogenen Daten verantwortlich. Du erreichst uns unter <a href="mailto:{email}">{email}</a>.</p>
<h2>Daten, die du uns übermittelst</h2>
<p><strong>Webadressen und Optionen.</strong> Wenn du auf „Speichern“ klickst, werden die eingegebenen Adressen und die gewählten Optionen an unseren Server gesendet, damit er diese Seiten abrufen kann. Wenn du uns bittest, Seiten auf einer Website zu finden, wird deren Adresse gesendet, damit wir die Seiten auflisten können. Adressen werden ausschließlich verwendet, um deine Anfrage auszuführen. Das Archiv wird im Arbeitsspeicher erstellt, an deinen Browser gesendet und anschließend verworfen. Wir behalten keine Kopie der Seiten oder ihrer Dateien.</p>
<p><strong>Dein Archiv.</strong> Die Übersicht, die nach einem Download erscheint, liest den Bericht im ZIP direkt in deinem Browser aus. Auch das Auswählen von Dateien und das erneute Packen des ZIP finden auf deinem Gerät statt, und dabei wird nichts an uns zurückgesendet.</p>
<p><strong>E-Mails.</strong> Wenn du uns unter <a href="mailto:{email}">{email}</a> kontaktierst, erhalten wir deine E-Mail-Adresse und den Inhalt deiner Nachricht. Wir verwenden diese Angaben ausschließlich, um dir zu antworten, und bewahren sie nur so lange auf, wie es für die Bearbeitung deiner Nachricht erforderlich ist.</p>
<h2>Automatisch erfasste Daten</h2>
<p>Wie bei den meisten Websites protokolliert unser Hosting-Anbieter bei jeder Anfrage grundlegende technische Daten, etwa IP-Adresse, Browsertyp, die aufgerufene Seite und den Zeitpunkt. Diese Protokolle dienen dazu, den Betrieb des Dienstes aufrechtzuerhalten, Fehler zu untersuchen und Missbrauch zu verhindern, und werden regelmäßig gelöscht.</p>
<p>Während ein Download läuft, verwendet unser Server deine IP-Adresse außerdem, um zu begrenzen, wie viele Downloads ein Besucher gleichzeitig ausführen kann. Dieser Zähler wird nur im Arbeitsspeicher gehalten und verschwindet, sobald der Download beendet ist.</p>
<h2>Wofür wir Daten verwenden</h2>
<ul>
<li>Um die von dir angeforderten Seiten abzurufen und dein Archiv zu erstellen.</li>
<li>Um deine E-Mails und Anfragen zu beantworten.</li>
<li>Um den Dienst für alle sicher, zuverlässig und fair zu halten und Missbrauch zu verhindern.</li>
<li>Um Fehler zu finden und zu beheben.</li>
<li>Um unsere rechtlichen Pflichten zu erfüllen.</li>
</ul>
<h2>Rechtsgrundlagen der Verarbeitung</h2>
<p>Wenn du dich im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in der Schweiz aufhältst, verarbeiten wir personenbezogene Daten, weil dies zur Bereitstellung des von dir angeforderten Dienstes erforderlich ist, weil wir ein berechtigtes Interesse daran haben, einen sicheren und zuverlässigen Dienst zu betreiben und Missbrauch zu verhindern, oder um gesetzliche Pflichten zu erfüllen.</p>`,
    analyticsHtml: `<h2>Webanalyse</h2>
<p>Wir nutzen Google Analytics, einen Dienst der Google LLC, um zu verstehen, wie Besucher die Website nutzen, etwa welche Seiten aufgerufen werden und wie Besucher zu uns finden. Google Analytics setzt Cookies und verarbeitet Daten, einschließlich deiner IP-Adresse, auf Servern von Google, die sich außerhalb deines Landes befinden können. Wir werten die Berichte nur in zusammengefasster Form aus und nutzen sie nicht, um dich zu identifizieren. Du kannst die <a href="https://policies.google.com/privacy">Datenschutzerklärung von Google</a> lesen und die Erfassung mit dem <a href="https://tools.google.com/dlpage/gaoptout">Browser-Add-on zur Deaktivierung von Google Analytics</a> abschalten.</p>`,
    cookiesTitle: 'Cookies und lokaler Speicher',
    cookiesOn:
      'Wir setzen keine eigenen Cookies. Google Analytics setzt Cookies, um Besuche voneinander zu unterscheiden. Du kannst Cookies in deinen Browsereinstellungen blockieren oder löschen; der Website-Downloader funktioniert auch ohne sie.',
    cookiesOff: 'Wir setzen keine Cookies, und der Website-Downloader benötigt sie nicht, um zu funktionieren.',
    restHtml: `<p>Wenn du ein helles oder dunkles Design wählst, wird diese Auswahl im lokalen Speicher deines Browsers abgelegt, damit die Website sie sich merkt. Die Auswahl verlässt nie dein Gerät und wird entfernt, wenn du deine Browserdaten löschst.</p>
<h2>Dienste von Drittanbietern</h2>
<ul>
<li><strong>Hosting.</strong> Unser Hosting-Anbieter betreibt die Server dieser Website und verarbeitet die oben beschriebenen Anfrageprotokolle in unserem Auftrag.</li>
<li><strong>Google Fonts.</strong> Die Website lädt ihre Schriftarten von Google Fonts. Dabei verbindet sich dein Browser mit Servern von Google, die deine IP-Adresse erhalten.</li>
</ul>
<h2>Die Websites, die du speicherst</h2>
<p>Wenn du eine Seite speicherst, kontaktiert unser Server, nicht dein Browser, die eingegebene Website und alle Server, auf denen ihre Dateien liegen. Diese Websites sehen eine Anfrage von unserem Server, nicht von deiner IP-Adresse. Die Anfrage meldet sich als gewöhnlicher Browser (als mobiler Browser, wenn du die mobile Version wählst) und enthält weder deine Cookies noch personenbezogene Daten von dir.</p>
<h2>Wir verkaufen deine Daten nicht</h2>
<p>Wir verkaufen, vermieten oder tauschen keine personenbezogenen Daten, wir geben sie nicht für zielgerichtete Werbung weiter, und wir erstellen keine Profile von Besuchern. Wir geben Daten nur an die in dieser Datenschutzerklärung genannten Dienstleister weiter oder wenn das Gesetz es verlangt.</p>
<h2>Internationale Datenübermittlungen</h2>
<p>Unsere Dienstleister können Daten in anderen Ländern als deinem Wohnsitzland verarbeiten, auch in den Vereinigten Staaten. Soweit gesetzlich vorgeschrieben, stützen sich diese Übermittlungen auf geeignete Garantien, etwa Angemessenheitsbeschlüsse oder Standardvertragsklauseln.</p>
<h2>Wie lange wir Daten speichern</h2>
<ul>
<li><strong>Eingegebene Adressen und Archive:</strong> Diese werden nicht gespeichert und existieren nur, solange dein Download erstellt wird.</li>
<li><strong>Server-Logs:</strong> Diese werden aus Sicherheitsgründen und zur Fehlerbehebung für einen begrenzten Zeitraum aufbewahrt und anschließend gelöscht.</li>
<li><strong>E-Mails:</strong> Diese werden nur so lange aufbewahrt, wie es für ihre Beantwortung und eine etwaige weitere Bearbeitung erforderlich ist.</li>
</ul>
<h2>Sicherheit</h2>
<p>Der gesamte Datenverkehr zu dieser Website wird per HTTPS verschlüsselt. Archive werden im Arbeitsspeicher erstellt und nie auf einen Datenträger geschrieben, und der Website-Downloader verweigert den Zugriff auf private Netzwerke und interne Adressen. Keine Methode der Übertragung oder Speicherung ist vollkommen sicher, wir setzen uns aber dafür ein, die wenigen Daten zu schützen, die wir verarbeiten.</p>
<h2>Datenschutz bei Kindern</h2>
<p>Dieser Dienst richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen. Wenn du glaubst, dass uns ein Kind personenbezogene Daten übermittelt hat, <a href="{contactUrl}">kontaktiere uns</a>, und wir löschen sie.</p>
<h2>Deine Datenschutzrechte</h2>
<p>Je nachdem, wo du lebst, hast du möglicherweise folgende Rechte:</p>
<ul>
<li>Auskunft darüber, welche personenbezogenen Daten wir über dich gespeichert haben, und eine Kopie dieser Daten.</li>
<li>Berichtigung unrichtiger Daten.</li>
<li>Löschung deiner Daten.</li>
<li>Widerspruch gegen die Verwendung deiner Daten oder deren Einschränkung.</li>
<li>Erhalt deiner Daten in einem übertragbaren Format.</li>
<li>Beschwerde bei deiner örtlichen Datenschutzbehörde.</li>
</ul>
<p>Wenn du in Kalifornien oder einem anderen US-Bundesstaat mit einem Verbraucherdatenschutzgesetz lebst, hast du außerdem das Recht zu erfahren, welche Daten wir erfassen, diese berichtigen und löschen zu lassen und nicht benachteiligt zu werden, weil du diese Rechte ausübst. Wir verkaufen oder teilen keine personenbezogenen Daten im Sinne dieser Gesetze.</p>
<p>Für eine Anfrage schreibe bitte eine E-Mail an <a href="mailto:{email}">{email}</a>. Gegebenenfalls müssen wir zunächst deine Identität überprüfen, und wir antworten innerhalb der gesetzlich vorgesehenen Frist. Da wir so wenig speichern, liegen uns häufig überhaupt keine Daten über dich vor.</p>
<h2>Links zu anderen Websites</h2>
<p>Diese Datenschutzerklärung gilt nur für {name}. Die Websites, die du herunterlädst, und Websites, auf die wir verlinken, haben eigene Datenschutzerklärungen, und wir sind nicht dafür verantwortlich, wie sie mit Daten umgehen.</p>
<h2>Änderungen dieser Datenschutzerklärung</h2>
<p>Wenn wir diese Datenschutzerklärung ändern, aktualisieren wir das Datum oben auf dieser Seite. Wesentliche Änderungen heben wir auf der Website hervor.</p>
<h2>Kontakt</h2>
<p>Fragen zu dieser Datenschutzerklärung oder zum Umgang mit deinen Daten? Schreibe eine E-Mail an <a href="mailto:{email}">{email}</a> oder nutze unsere <a href="{contactUrl}">Kontaktseite</a>.</p>`,
  },

  terms: {
    title: 'Allgemeine Nutzungsbedingungen',
    heading: 'Nutzungsbedingungen',
    description:
      'Nutzungsbedingungen für {name}, den kostenlosen Website-Downloader: zulässige Nutzung, Urheberrecht, Nutzungsgrenzen, Gewährleistung und Haftung.',
    lead: 'Diese Nutzungsbedingungen gelten, wenn du {name} und den zugehörigen Website-Downloader nutzt. Mit der Nutzung der Website erklärst du dich mit ihnen einverstanden. Bitte lies sie daher sorgfältig.',
    bodyHtml: `<h2>Über diese Bedingungen</h2>
<p>Diese Nutzungsbedingungen („Bedingungen“) sind eine Vereinbarung zwischen dir und {name} („wir“, „uns“). Die Bedingungen regeln deine Nutzung dieser Website und des darauf angebotenen Website-Downloaders (zusammen der „Dienst“). Wenn du mit ihnen nicht einverstanden bist, nutze den Dienst bitte nicht.</p>
<h2>Wer den Dienst nutzen darf</h2>
<p>Du musst mindestens 13 Jahre alt sein, um den Dienst zu nutzen. Wenn du an deinem Wohnort noch nicht volljährig bist, darfst du den Dienst nur mit Zustimmung eines Elternteils oder Erziehungsberechtigten nutzen. Wenn du den Dienst für ein Unternehmen oder eine andere Organisation nutzt, bestätigst du, dass du befugt bist, diese Bedingungen in deren Namen anzunehmen.</p>
<h2>Der Dienst</h2>
<p>Mit {name} kannst du die Adresse einer öffentlichen Webseite eingeben und ein ZIP-Archiv herunterladen, das diese Seite und die von ihr verwendeten Dateien enthält, etwa Stylesheets, Skripte, Bilder und Schriften. Du kannst auch mehrere Seiten auf einmal, die mobile Version einer Seite oder eine einzelne, eigenständige HTML-Datei speichern. Der Dienst ist kostenlos, erfordert kein Konto und wird so bereitgestellt, wie er ist. Wir können jederzeit Funktionen hinzufügen, ändern oder entfernen.</p>
<h2>Zulässige Nutzung</h2>
<p>Du verpflichtest dich, den Dienst nur für rechtmäßige Zwecke zu nutzen. Insbesondere verpflichtest du dich, Folgendes zu unterlassen:</p>
<ul>
<li>Inhalte herunterladen, kopieren oder erneut veröffentlichen, zu deren Nutzung du nicht berechtigt bist.</li>
<li>Eine heruntergeladene Website als deine eigene ausgeben oder sie nutzen, um dich als eine andere Person oder ein anderes Unternehmen auszugeben.</li>
<li>Heruntergeladene Seiten für Phishing, Betrug, Schadsoftware oder zum Sammeln von Daten anderer Personen verwenden.</li>
<li>Versuchen, auf private Netzwerke, interne Dienste oder Seiten zuzugreifen, die eine Anmeldung erfordern.</li>
<li>Automatisierte oder übermäßige Anfragen senden, die unsere Server oder die Websites, die du herunterlädst, unangemessen belasten.</li>
<li>Versuchen, die Sicherheit oder die Grenzen des Dienstes auszuhebeln, auszuloten oder zu umgehen.</li>
<li>Den Dienst ohne unsere schriftliche Genehmigung weiterverkaufen oder als Teil eines anderen Produkts anbieten.</li>
</ul>
<h2>Urheberrecht und Inhalte anderer</h2>
<p>Websites, die du herunterlädst, gehören ihren Eigentümern. Durch das Speichern einer Seite gehen keine Rechte an ihren Texten, Bildern, ihrem Code, ihren Schriften oder Marken auf dich über. Du bist dafür verantwortlich, sicherzustellen, dass deine Nutzung heruntergeladener Inhalte erlaubt ist, zum Beispiel zum persönlichen Lernen, zur Sicherung deiner eigenen Website oder mit Erlaubnis des Eigentümers. Prüfe die Lizenz jeder Schrift und jedes Bildes, bevor du sie wiederverwendest.</p>
<p>{name} ist ein Tool, kein Hosting-Dienst: Jedes Archiv wird für eine einzelne Anfrage erstellt und weder auf unseren Servern gespeichert noch von uns veröffentlicht.</p>
<h2>Urheberrechtsbeschwerden</h2>
<p>Wenn du glaubst, dass der Dienst genutzt wird, um dein Urheberrecht oder andere Rechte zu verletzen, schreibe eine E-Mail an <a href="mailto:{email}">{email}</a> mit folgenden Angaben:</p>
<ul>
<li>Dein Name und deine Kontaktdaten.</li>
<li>Eine Beschreibung des Werks, das deiner Ansicht nach verletzt wird.</li>
<li>Die Adresse der betreffenden Seite.</li>
<li>Eine Erklärung, dass du in gutem Glauben davon ausgehst, dass die Nutzung weder vom Rechteinhaber noch von dessen Vertreter noch durch das Gesetz gestattet ist.</li>
<li>Eine Erklärung, dass die Angaben in deiner Meldung zutreffend sind und dass du der Rechteinhaber bist oder befugt bist, in dessen Namen zu handeln.</li>
<li>Deine eigenhändige oder elektronische Unterschrift.</li>
</ul>
<p>Wir prüfen jede Meldung und können Maßnahmen ergreifen, etwa Anfragen für die betreffende Adresse sperren.</p>
<h2>Unsere Inhalte und unsere Marke</h2>
<p>Der Name {name}, das Logo, das Design der Website, die Texte und die Software gehören uns oder unseren Lizenzgebern. Diese Bedingungen geben dir keinerlei Recht, sie zu verwenden, außer um korrekt auf den Dienst zu verweisen.</p>
<h2>Websites Dritter</h2>
<p>Die Seiten, die du herunterlädst, und alle Links auf dieser Website führen zu Websites, auf die wir keinen Einfluss haben. Wir sind nicht für deren Inhalte, Verfügbarkeit oder Praktiken verantwortlich, und das Speichern einer Seite bedeutet nicht, dass wir sie befürworten.</p>
<h2>Grenzen und Verfügbarkeit</h2>
<p>Damit der Dienst schnell und fair bleibt, ist jeder Download in der Anzahl der Seiten und Dateien, der Dateigröße und der Dauer begrenzt, und jeder Besucher kann nur wenige Downloads gleichzeitig ausführen. Wir können diese Grenzen ändern, Anfragen blockieren, die den Dienst missbrauchen, oder den Zugang jederzeit mit oder ohne Vorankündigung sperren oder beenden. Außerdem können wir den Dienst für Wartungsarbeiten unterbrechen oder ihn ganz einstellen.</p>
<h2>Keine Gewährleistung</h2>
<p>Der Dienst wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne ausdrückliche oder stillschweigende Gewährleistung jeglicher Art, einschließlich der Gewährleistung der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter. Wir garantieren nicht, dass jede Seite vollständig heruntergeladen wird oder genauso aussieht wie das Original oder dass der Dienst unterbrechungsfrei, sicher oder fehlerfrei funktioniert.</p>
<h2>Haftungsbeschränkung</h2>
<p>Im größtmöglichen gesetzlich zulässigen Umfang haftet {name} nicht für indirekte, zufällige, besondere oder Folgeschäden oder für den Verlust von Daten, Gewinnen oder Geschäften, die sich aus deiner Nutzung des Dienstes oder von Inhalten ergeben, die du damit herunterlädst. In manchen Rechtsordnungen sind solche Beschränkungen nicht zulässig, sodass einige davon für dich möglicherweise nicht gelten.</p>
<h2>Freistellung</h2>
<p>Du verpflichtest dich, {name} von allen Ansprüchen, Verlusten oder Kosten, einschließlich angemessener Anwaltskosten, freizustellen und schadlos zu halten, die sich aus deiner missbräuchlichen Nutzung des Dienstes oder deinem Verstoß gegen diese Bedingungen ergeben.</p>
<h2>Allgemeines</h2>
<p>Sollte sich eine Bestimmung dieser Bedingungen als nicht durchsetzbar erweisen, bleiben die übrigen Bestimmungen in Kraft. Wenn wir eine Bestimmung nicht sofort durchsetzen, verzichten wir damit nicht auf das Recht, sie später durchzusetzen. Diese Bedingungen bilden zusammen mit unserer <a href="{privacyUrl}">Datenschutzerklärung</a> die gesamte Vereinbarung zwischen dir und uns über den Dienst.</p>
<h2>Änderungen dieser Bedingungen</h2>
<p>Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum oben auf dieser Seite zeigt, wann sie zuletzt geändert wurden. Wenn du den Dienst nach einer Änderung weiter nutzt, akzeptierst du die aktualisierten Bedingungen.</p>
<h2>Kontakt</h2>
<p>Fragen zu diesen Bedingungen? Schreibe eine E-Mail an <a href="mailto:{email}">{email}</a> oder nutze unsere <a href="{contactUrl}">Kontaktseite</a>.</p>`,
  },

  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Diese Seite existiert nicht.',
    heading: 'Diese Seite gibt es nicht',
    text: 'Der Link ist vielleicht fehlerhaft, oder die Seite wurde verschoben. Prüfe die Adresse oder kehre zum Website-Downloader zurück.',
    button: 'Zum Website-Downloader',
  },

  serverError: {
    title: 'Etwas ist schiefgelaufen',
    description: 'Bei uns ist ein unerwarteter Fehler aufgetreten.',
    heading: 'Bei uns ist etwas schiefgelaufen',
    textHtml:
      'Beim Laden dieser Seite ist auf dem Server ein unerwarteter Fehler aufgetreten. Versuche es gleich noch einmal. Wenn das Problem bleibt, <a href="{contactUrl}">gib uns Bescheid</a>.',
    button: 'Zum Website-Downloader',
  },
};

export default de;
