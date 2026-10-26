import type { Dict } from './en';

const fr: Dict = {
  meta: {
    homeTitle: 'Télécharger un site web en ZIP – Aspirateur de site gratuit',
    homeDescription:
      'Télécharger un site web ou une landing page en ZIP avec HTML, CSS, JavaScript, images et polices. Aspirateur de site gratuit, sans inscription.',
    ogImageAlt: 'Enregistrer un site web en ZIP : HTML, CSS, JavaScript, images et polices dans une seule archive',
    appFeatures: [
      'Télécharger n’importe quelle page web en archive ZIP',
      'Enregistre le HTML, le CSS, le JavaScript, les images et les polices',
      'Renommer tous les fichiers',
      'Copier la version mobile d’un site web',
      'Téléchargement simplifié sans JavaScript',
      'Conserver la structure de dossiers du site d’origine',
      'Copie propre, sans traceurs, publicités ni bannières de cookies',
      'Enregistrer une page dans un seul fichier HTML autonome',
      'Télécharger plusieurs pages, ou les versions ordinateur et mobile, dans une seule archive',
      'Rapport d’archive avec analyse de la page : couleurs, polices, poids de la page et technologies',
    ],
  },

  common: {
    skipToContent: 'Aller au contenu',
    languageMenuLabel: 'Langue',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    lastUpdated: 'Dernière mise à jour : {date}',
  },

  nav: {
    howItWorks: 'Comment ça marche',
    whatsSaved: 'Ce qui est enregistré',
    faq: 'FAQ',
    cta: 'Enregistrer un site',
    mainLabel: 'Principal',
    footerLabel: 'Pied de page',
  },

  footer: {
    tagline: 'Aspirateur de site web gratuit. N’enregistrez que les pages que vous avez le droit de copier.',
    about: 'À propos',
    contact: 'Nous contacter',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales d’utilisation',
    languages: 'Langues',
  },

  hero: {
    title: 'Télécharger un site web en ZIP.',
    titleAccent: 'Sans perdre un seul détail.',
    lead: 'Un aspirateur de site web gratuit. Collez l’URL d’une page et récupérez son HTML, son CSS, son JavaScript, ses images et ses polices dans une seule archive.',
    fieldLabel: 'Adresse de la page web',
    placeholder: 'ex. : example.com/landing-page…',
    save: 'Enregistrer',
    saving: 'Enregistrement…',
    modeLegend: 'Pages à enregistrer',
    modes: { single: 'Une page', multi: 'Plusieurs pages' },
    multiFieldLabel: 'Adresses des pages',
    multiPlaceholder: 'Une adresse par ligne, jusqu’à {max}',
    findPages: 'Trouver les pages de ce site',
    findingPages: 'Recherche des pages…',
    pagesFound: { one: '{count} page trouvée', other: '{count} pages trouvées' },
    noPagesFound: 'Aucune autre page n’a été trouvée sur {host}. Ajoutez vous-même les adresses, une par ligne.',
    addPages: 'Ajouter les pages sélectionnées',
    selectAll: 'Tout sélectionner',
    clearSelection: 'Tout désélectionner',
    deviceLegend: 'Version',
    devices: { desktop: 'Ordinateur', mobile: 'Mobile', both: 'Les deux' },
    outputLegend: 'Enregistrer en',
    outputs: { zip: 'Archive ZIP', single: 'Fichier HTML unique' },
    optionsLegend: 'Options de téléchargement',
    moreOptions: 'Personnaliser le téléchargement',
    tryExample: 'Essayer un exemple',
    options: {
      cleanCopy: { title: 'Copie propre', hint: 'Retirer les traceurs, les publicités et les bannières de cookies' },
      simplified: { title: 'Téléchargement simplifié', hint: 'Sans JavaScript' },
      renameAssets: { title: 'Renommer tous les fichiers', hint: 'Des noms courts et clairs, comme image-1.jpg' },
      keepStructure: { title: 'Conserver la structure du site', hint: 'Garder les chemins de dossiers d’origine' },
      prettify: { title: 'Formater le code', hint: 'Indenter le HTML, le CSS et le JavaScript minifiés' },
      pickFiles: { title: 'Choisir les fichiers d’abord', hint: 'Vérifier l’archive avant son téléchargement' },
    },
    scene: {
      nav: ['Accueil', 'À propos', 'Projets', 'Contact'],
      pageTitle: 'Un web plus clair et lumineux',
      idleTitle: 'Prêt à enregistrer',
      idleNote: 'Toutes les ressources incluses',
      workingTitle: 'Compression des fichiers',
      workingNote: 'Récupération de chaque ressource',
      doneTitle: 'Enregistré',
      doneNote: 'Archive prête',
    },
  },

  status: {
    downloading: 'Téléchargement de {host}. Les pages volumineuses peuvent prendre jusqu’à une minute.',
    saved: '{filename} enregistré avec {files}.',
    files: { one: '{count} fichier', other: '{count} fichiers' },
    missed: {
      one: '{count} fichier n’a pas pu être téléchargé et pointe toujours vers le site en ligne.',
      other: '{count} fichiers n’ont pas pu être téléchargés et pointent toujours vers le site en ligne.',
    },
    ready: 'Prêt : {files}. Choisissez ce que vous voulez garder, puis téléchargez.',
    serverUnreachable: 'Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.',
    failed: 'Impossible de créer l’archive. Réessayez.',
  },

  errors: {
    emptyUrl: 'Saisissez l’adresse de la page à enregistrer.',
    invalidUrl: '« {input} » n’est pas une adresse web valide. Essayez par exemple example.com.',
    protocol: 'Seules les adresses http:// et https:// peuvent être enregistrées. Vérifiez le début de l’adresse.',
    credentials: 'Retirez le nom d’utilisateur et le mot de passe de l’adresse, puis réessayez.',
    localAddress: 'Les adresses locales et internes ne peuvent pas être enregistrées. Saisissez l’adresse d’un site public.',
    privateAddress: 'Les adresses de réseau privé ne peuvent pas être enregistrées. Saisissez l’adresse d’un site public.',
    notPublicDomain: '« {host} » n’est pas un domaine public. Saisissez le domaine complet, par exemple example.com.',
    privateNetwork: 'Cette adresse pointe vers un réseau privé et ne peut pas être enregistrée. Saisissez l’adresse d’un site public.',
    notFound: 'Impossible de trouver {host}. Vérifiez l’orthographe de l’adresse.',
    timeout: '{host} a mis trop de temps à répondre. Réessayez dans un instant.',
    unreachable: 'Impossible de joindre {host}. Vérifiez l’adresse et réessayez.',
    httpError: '{host} a répondu avec l’erreur {status}, il n’y a donc rien à enregistrer. Vérifiez l’adresse et réessayez.',
    notHtml: 'Cette adresse renvoie un fichier, pas une page web. Saisissez plutôt l’adresse d’une page.',
    badRequest: 'La requête est mal formée. Rechargez la page et réessayez.',
    internal: 'Un problème est survenu lors de la création de l’archive. Réessayez, ou essayez une autre page.',
    tooManyPages: 'Ajoutez jusqu’à {max} pages à la fois.',
    busy: 'Vous avez déjà des téléchargements en cours. Attendez qu’ils se terminent, puis réessayez.',
  },

  result: {
    title: 'Votre archive',
    downloadAgain: 'Télécharger à nouveau',
    downloadSelected: 'Télécharger la sélection',
    selection: 'Sélection : {files}, {size}',
    score: 'disponible hors ligne',
    scoreHint: 'Part des fichiers de la page enregistrés dans l’archive. Le reste se charge toujours depuis le site en ligne.',
    saved: { one: '{count} fichier enregistré', other: '{count} fichiers enregistrés' },
    failed: { one: '{count} fichier n’a pas pu être enregistré', other: '{count} fichiers n’ont pas pu être enregistrés' },
    pages: { one: '{count} page', other: '{count} pages' },
    removed: { one: '{count} élément retiré', other: '{count} éléments retirés' },
    liveLinks: {
      one: '{count} lien vers une autre page ouvre toujours le site en ligne.',
      other: '{count} liens vers d’autres pages ouvrent toujours le site en ligne.',
    },
    tabs: { files: 'Fichiers', problems: 'Problèmes', insights: 'Analyse' },
    filesHint: 'Décochez les fichiers dont vous n’avez pas besoin. Ce qui les utilisait les chargera alors depuis le site en ligne.',
    singleHint: 'Un fichier HTML unique contient tout, il n’y a donc pas de fichiers séparés à choisir.',
    noProblems: 'Tous les fichiers ont été enregistrés.',
    moreProblems: { one: 'Et {count} autre.', other: 'Et {count} autres.' },
    removedTitle: 'Retiré par « Copie propre »',
    removedKinds: { tracker: 'Traceurs et balises', consent: 'Bannières de cookies', redirect: 'Redirections automatiques' },
    kinds: { html: 'Page', css: 'CSS', js: 'JavaScript', image: 'Image', font: 'Police', media: 'Média', other: 'Fichier' },
    reasons: {
      http: 'Le serveur a répondu avec l’erreur {status}',
      timeout: 'Téléchargement trop long',
      tooLarge: 'Dépasse la limite de {size} par fichier',
      notAsset: 'A renvoyé une page web au lieu d’un fichier',
      blocked: 'Pointe vers une adresse privée ou bloquée',
      network: 'Impossible à joindre',
      deadline: 'Ignoré : la durée maximale d’un téléchargement a été atteinte',
      archiveFull: 'Ignoré : l’archive a atteint sa taille maximale',
      limit: 'Ignoré : la page utilise plus de {max} fichiers',
    },
    insights: {
      colors: 'Couleurs',
      neutrals: 'Neutres',
      cssVariables: { one: '{count} variable CSS', other: '{count} variables CSS' },
      copyColor: 'Copier {hex}',
      copied: '{hex} copié',
      fonts: 'Polices',
      licenses: {
        google: 'Google Fonts : libres d’utilisation (Open Font License)',
        adobe: 'Adobe Fonts : sous licence, réutilisation non libre',
        unknown: 'Vérifiez la licence avant de la réutiliser',
        system: 'Police système : fournie par l’appareil, pas par la page',
      },
      weight: 'Poids de la page',
      tech: 'Conçu avec',
      techCategories: {
        cms: 'Créateurs de sites et CMS',
        framework: 'Frameworks',
        library: 'Bibliothèques et services',
        analytics: 'Statistiques et publicité',
        consent: 'Consentement aux cookies',
      },
      seo: 'Recherche et partage',
      seoItems: {
        title: 'Titre',
        description: 'Description',
        canonical: 'Adresse canonique',
        lang: 'Langue',
        h1: 'Titre principal',
        ogImage: 'Image de partage',
        twitterCard: 'Carte X (Twitter)',
        robots: 'Robots',
        structuredData: 'Données structurées',
        alt: 'Images sans texte alt',
      },
      length: { one: '{count} caractère', other: '{count} caractères' },
      missing: 'Manquant',
      none: 'Aucun résultat',
      altSummary: '{missing} sur {total}',
    },
  },

  report: {
    title: 'Rapport d’archive : {host}',
    savedFrom: 'Enregistré depuis {url} le {date}.',
    options: 'Options',
    optionsNone: 'Aucune',
    files: 'Fichiers de cette archive',
    columns: { file: 'Fichier', from: 'Adresse d’origine', size: 'Taille' },
    problems: 'Absents de cette archive',
    chooserTitle: 'Choisissez une version de {host}',
    chooserText: 'Cette archive contient deux copies de la page : celle que reçoivent les navigateurs d’ordinateur et celle que reçoivent les téléphones.',
  },

  bookmarklet: {
    title: 'Enregistrer n’importe quelle page depuis votre navigateur',
    text: 'Faites glisser le bouton dans votre barre de favoris. Sur n’importe quelle page web, cliquez sur le favori pour ouvrir {name} avec l’adresse de la page déjà renseignée.',
    button: 'Enregistrer avec {name}',
    dragHint: 'Faites glisser ce bouton dans votre barre de favoris.',
  },

  steps: {
    title: 'Comment ça marche',
    lead: 'Trois étapes, sans compte. La plupart des pages sont prêtes en quelques secondes.',
    items: [
      {
        title: 'Collez l’adresse de la page',
        text: 'Copiez l’URL dans la barre d’adresse de votre navigateur. Inutile d’ajouter https://.',
      },
      {
        title: 'Choisissez vos options',
        text: 'Supprimez les traceurs, enregistrez la version mobile, retirez le JavaScript ou gardez tout dans un seul fichier HTML.',
      },
      {
        title: 'Décompressez et ouvrez index.html',
        text: 'Le ZIP se télécharge immédiatement. Ouvrez la page dans n’importe quel navigateur ou modifiez-la dans votre éditeur de code.',
      },
    ],
  },

  features: {
    title: 'Télécharger une page web en ZIP avec tous ses fichiers',
    lead: 'Téléchargez une landing page, un site web complet ou n’importe quelle page, gratuitement. Collez l’URL du site dans le champ ci-dessus et cliquez sur Enregistrer pour obtenir une archive avec tous ses fichiers.',
    html: { title: 'HTML', text: 'Le code de la page, dont chaque référence est réécrite pour pointer vers les fichiers enregistrés.' },
    code: { title: 'CSS et JavaScript', text: 'Les feuilles de style et les scripts, ainsi que tout ce qu’ils importent.' },
    images: { title: 'Images', text: 'Photos, icônes, SVG, variantes srcset responsives et arrière-plans CSS.' },
    fonts: { title: 'Polices', text: 'Polices web chargées via @font-face, y compris Google Fonts.' },
  },

  highlights: {
    title: 'Plus qu’un simple fichier ZIP',
    lead: 'Chaque téléchargement est accompagné d’un rapport et d’options que la plupart des aspirateurs de site n’ont pas.',
    items: [
      {
        title: 'Copie propre',
        text: 'Les traceurs, les pixels publicitaires, les bannières de cookies et les redirections disparaissent. Les scripts propres à la page restent.',
      },
      {
        title: 'Un rapport avec chaque archive',
        text: 'Voyez ce qui a été enregistré, ce qui ne l’a pas été et pourquoi, ainsi que les couleurs, les polices, le poids et les technologies de la page.',
      },
      {
        title: 'Plusieurs pages à la fois',
        text: 'Choisissez jusqu’à 20 pages parmi les liens et le plan du site. Les liens entre elles fonctionnent hors ligne.',
      },
      {
        title: 'Un seul fichier, ou les deux versions',
        text: 'Enregistrez une page dans un seul fichier HTML autonome, ou récupérez côte à côte ses copies pour ordinateur et pour mobile.',
      },
    ],
  },

  guide: {
    title: 'Un aspirateur de site web gratuit pour télécharger n’importe quelle page en ZIP',
    tocTitle: 'Sur cette page',
    tocLabel: 'Sommaire de l’article',
    introHtml: `<p>Cet aspirateur de site web copie une page web et tout ce dont elle a besoin pour s’afficher, puis vous la remet sous la forme d’un seul fichier ZIP. Vous obtenez le HTML, le CSS, le JavaScript, chaque image et chaque police web, rangés dans des dossiers et reliés entre eux pour que la page s’ouvre sur votre ordinateur. Rien à installer, aucun compte à créer : collez une URL, cliquez sur Enregistrer, et l’archive se télécharge dans votre navigateur.</p>
<p>Il est conçu pour les pages que l’on veut le plus souvent conserver : landing pages, pages produit, portfolios, pages d’inscription à une newsletter et sites d’une seule page. Au lieu d’enregistrer chaque fichier à la main depuis les outils de développement de votre navigateur, vous récupérez la page complète en quelques secondes.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'Comment télécharger un site web en ZIP',
        html: `<ol>
<li>Ouvrez la page à enregistrer et copiez son adresse dans la barre d’adresse du navigateur.</li>
<li>Collez l’adresse dans le champ en haut de cette page. Inutile d’ajouter <code>https://</code>.</li>
<li>Choisissez les options dont vous avez besoin, par exemple renommer les fichiers ou conserver la structure de dossiers d’origine du site. L’aperçu à côté du champ montre comment l’archive sera organisée.</li>
<li>Cliquez sur Enregistrer. Quand l’archive est prête, votre navigateur télécharge un fichier qui porte le nom du site, par exemple <code>example.com.zip</code>. Décompressez-le et ouvrez <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'Ce que contient l’archive',
        html: `<p>L’aspirateur lit le HTML de la page et repère chaque fichier qu’elle référence : feuilles de style, scripts, icônes, images, tailles d’image responsives listées dans <code>srcset</code>, vignettes de vidéos, styles en ligne et images qui ne se chargent qu’au défilement. Il ouvre ensuite chaque feuille de style et suit ses règles <code>@import</code> et ses références <code>url()</code> : c’est ainsi que les images d’arrière-plan et les polices web, y compris Google Fonts, se retrouvent elles aussi dans l’archive.</p>
<p>Chaque référence est réécrite pour pointer vers la copie enregistrée : la page charge donc ses propres fichiers locaux au lieu de retourner sur le serveur d’origine. Si un fichier ne peut pas être téléchargé, par exemple parce que son serveur refuse les requêtes venant d’autres sites, le lien garde son adresse web d’origine. La page continue de charger ce fichier tant que vous êtes en ligne, et rien ne casse sans que vous le sachiez.</p>
<p>Chaque archive contient aussi <code>archive-report.html</code>, un rapport lisible qui indique ce qui a été enregistré, quels fichiers n’ont pas pu l’être et pourquoi, et quelle part de la page fonctionne désormais hors ligne. Il liste également les couleurs de la page, ses polices et leurs licences, le poids de la page par type de fichier, les outils avec lesquels elle est conçue et ses balises de recherche et de partage.</p>`,
      },
      {
        id: 'save-page-as',
        heading: 'Pourquoi ne pas simplement utiliser « Enregistrer sous » ?',
        html: `<p>Les navigateurs savent enregistrer une page, mais le résultat est souvent incomplet. Un enregistrement « complet » place généralement tous les fichiers dans un seul dossier avec de longs noms générés, et oublie souvent les polices et les images d’arrière-plan chargées par les feuilles de style, ainsi que les images qui n’apparaissent qu’au défilement. L’enregistrement en un seul fichier MHTML est plus propre, mais les autres navigateurs et les éditeurs de code ne savent pas toujours l’ouvrir. Un aspirateur de site web suit chaque feuille de style jusqu’à ses polices et ses arrière-plans, et vous fournit un fichier ZIP standard qui s’ouvre partout, avec l’organisation de dossiers de votre choix.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Télécharger une landing page pour l’étudier, la tester ou la refaire',
        html: `<p>Les marketeurs et les affiliés enregistrent des landing pages pour se constituer une bibliothèque d’offres, de titres et de mises en page qui convertissent. Les designers téléchargent une page pour en examiner les espacements, les couleurs et la typographie à leur rythme. Les développeurs copient un site web pour migrer une ancienne page statique vers un nouvel hébergement, réaliser rapidement une maquette locale pour un client ou tester des modifications sur une copie sans toucher au site en ligne. Les agences archivent la page d’un client avant une refonte pour garder une trace de l’existant.</p>
<p>Comme l’archive contient de simples fichiers, vous pouvez l’ouvrir dans n’importe quel éditeur de code, modifier les textes ou les styles et voir immédiatement le résultat dans votre navigateur.</p>`,
      },
      {
        id: 'options',
        heading: 'Choisir les bonnes options',
        html: `<p>L’option <strong>Copie propre</strong> supprime les balises de statistiques et de publicité, les outils d’enregistrement de session et les bannières de consentement aux cookies, ainsi que les redirections automatiques. Les scripts propres à la page sont conservés, donc les carrousels et les menus fonctionnent toujours, mais la copie enregistrée ne signale plus les visites à personne et ne masque plus le design derrière une bannière.</p>
<p>L’option <strong>Téléchargement simplifié</strong> supprime tout le JavaScript et conserve un instantané statique du HTML, du CSS, des images et des polices. Les images qui attendent normalement un script pour se charger sont modifiées pour se charger immédiatement, et s’affichent donc quand même. C’est le meilleur choix si seul le design vous intéresse.</p>
<p>L’option <strong>Renommer tous les fichiers</strong> remplace les noms de fichiers longs et hachés par des noms courts comme <code>style-1.css</code> et <code>image-4.webp</code>. Activez-la si vous comptez modifier la page et voulez un projet bien rangé.</p>
<p>L’option <strong>Conserver la structure du site</strong> garde les chemins de dossiers utilisés par le site lui-même, comme <code>assets/css/main.css</code>, au lieu de regrouper les fichiers par type. Les fichiers hébergés sur d’autres domaines sont placés dans un dossier <code>external</code>, dans un sous-dossier au nom de leur hôte.</p>
<p>L’option <strong>Version</strong> détermine la copie de la page que vous obtenez. « Mobile » demande la page comme le ferait un iPhone : certains sites envoient aux téléphones une mise en page différente, des images plus petites ou un autre contenu. « Les deux » enregistre côte à côte les copies pour ordinateur et pour mobile dans une seule archive.</p>
<p>L’option <strong>Enregistrer en</strong> « Fichier HTML unique » place chaque image, police, feuille de style et script dans un seul fichier <code>.html</code>. Il est plus lourd qu’un ZIP, mais il n’y a rien à décompresser, et il est facile à conserver, à joindre à un e-mail ou à ouvrir sur un autre ordinateur.</p>
<p>Dans <strong>Personnaliser le téléchargement</strong>, <strong>Formater le code</strong> indente le HTML, le CSS et le JavaScript minifiés pour rendre le code facile à lire, et <strong>Choisir les fichiers d’abord</strong> affiche les fichiers de l’archive avant tout téléchargement, pour que vous puissiez écarter les grosses vidéos ou les images dont vous n’avez pas besoin.</p>`,
      },
      {
        id: 'offline',
        heading: 'Télécharger un site web pour le consulter hors ligne',
        html: `<p>Une page téléchargée s’ouvre sans connexion Internet, à condition que ses fichiers aient été enregistrés. Une copie hors ligne est utile pour les présentations, pour relire une page dans l’avion ou pour garder une page susceptible de changer ou de disparaître.</p>
<ol>
<li>Collez l’adresse de la page en haut de cette page et cliquez sur <strong>Enregistrer</strong>.</li>
<li>Décompressez l’archive dans un dossier de votre ordinateur.</li>
<li>Ouvrez <code>index.html</code> dans n’importe quel navigateur. Les images, les styles et les polices se chargent depuis les dossiers voisins : la page fonctionne donc hors ligne.</li>
</ol>
<p>Pour consulter plusieurs pages hors ligne, passez à <strong>Plusieurs pages</strong> et indiquez jusqu’à 20 adresses, ou sélectionnez <strong>Trouver les pages de ce site</strong> pour les choisir parmi les liens et le sitemap du site. Elles sont réunies dans une seule archive, les fichiers qu’elles partagent ne sont enregistrés qu’une fois, et les liens entre les pages enregistrées ouvrent les copies locales. Les liens vers les pages non enregistrées pointent toujours vers le site en ligne, et le rapport d’archive indique quelle part de chaque page fonctionne hors ligne.</p>`,
      },
      {
        id: 'limits',
        heading: 'Ce qu’un aspirateur de site web ne peut pas copier',
        html: `<p>Tout aspirateur de site web ne peut enregistrer que ce que le serveur envoie au navigateur. Le code côté serveur, comme le PHP, les bases de données, les API et les systèmes de paiement, ne quitte jamais le serveur web : il n’est donc pas inclus. Les pages protégées par une connexion sont inaccessibles. Les sites qui construisent leur contenu en JavaScript après le chargement de la page, comme c’est souvent le cas des applications monopages, peuvent être enregistrés sous la forme d’une coquille vide. Les formulaires d’une page enregistrée envoient toujours leurs données au site d’origine.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Utiliser les sites téléchargés de façon responsable',
        html: `<p>Télécharger une page ne vous donne aucun droit sur celle-ci. Les textes, les images, le code et les polices appartiennent toujours à leurs propriétaires. Enregistrez des pages pour les étudier, pour sauvegarder votre propre travail ou avec l’autorisation du propriétaire, et vérifiez la licence de toute police ou image avant de la réutiliser. Ne republiez pas un site copié comme s’il était le vôtre.</p>`,
      },
    ],
  },

  faq: {
    title: 'Questions fréquentes',
    leadHtml: 'Une autre question ? <a href="{contactUrl}">Contactez-nous</a> et nous vous répondrons.',
    items: [
      {
        question: 'Qu’est-ce qu’un aspirateur de site web ?',
        answer:
          'Un aspirateur de site web est un outil qui copie une page web et tous les fichiers nécessaires à son affichage : le HTML, les feuilles de style, les scripts, les images et les polices. Celui-ci les regroupe dans une seule archive ZIP que vous pouvez ouvrir sur votre ordinateur, avec chaque lien réécrit pour que la page fonctionne à partir des fichiers locaux.',
      },
      {
        question: 'Cet aspirateur de site web est-il gratuit ?',
        answer:
          'Oui. Il est gratuit, sans compte, sans inscription et sans logiciel à installer. Collez une URL, cliquez sur Enregistrer et le fichier ZIP se télécharge dans votre navigateur.',
      },
      {
        question: 'Comment télécharger un site web en fichier ZIP ?',
        answer:
          'Copiez l’adresse de la page souhaitée, collez-la dans le champ en haut de cette page et cliquez sur Enregistrer. Choisissez d’abord vos options, comme « Renommer tous les fichiers » ou « Conserver la structure du site ». Quand l’archive est prête, votre navigateur la télécharge sous la forme d’un fichier .zip qui porte le nom du site.',
      },
      {
        question: 'Puis-je télécharger un site web complet, avec toutes ses pages ?',
        answer:
          'Vous pouvez enregistrer jusqu’à 20 pages d’un site dans une seule archive. Passez à « Plusieurs pages », puis collez les adresses ou cliquez sur « Trouver les pages de ce site » pour les choisir parmi les liens et le plan du site. Les fichiers communs aux pages ne sont enregistrés qu’une fois, et les liens entre les pages enregistrées fonctionnent hors ligne. Les liens vers les pages que vous n’avez pas enregistrées continuent de pointer vers le site en ligne.',
      },
      {
        question: 'Puis-je récupérer le code source d’un site web ?',
        answer:
          'Vous obtenez le code source front-end : le HTML, le CSS et le JavaScript que reçoit votre navigateur, ainsi que les images et les polices. Le code côté serveur, comme le PHP, les bases de données, les API et la logique back-end, ne quitte jamais le serveur web : aucun aspirateur de site web ne peut donc le copier.',
      },
      {
        question: 'Puis-je télécharger une landing page avec ses images et son CSS ?',
        answer:
          'Oui. Les landing pages sont justement ce que cet outil gère le mieux. Il enregistre le code de la page, chaque feuille de style et les fichiers qu’elle importe, les images d’arrière-plan, les tailles d’image responsives définies dans srcset, les images à chargement différé et les polices web, y compris Google Fonts.',
      },
      {
        question: 'Puis-je télécharger toutes les images d’un site web ?',
        answer:
          'Oui, celles des pages que vous enregistrez. L’archive contient toutes les images utilisées par ces pages : images classiques, tailles adaptatives de srcset, icônes SVG, images d’arrière-plan CSS et images en chargement différé. Activez « Choisir les fichiers d’abord » pour voir la liste avant le téléchargement et ne garder que les fichiers utiles.',
      },
      {
        question: 'Comment télécharger un site web pour le consulter hors ligne ?',
        answer:
          'Collez l’adresse de la page en haut de cette page, cliquez sur Enregistrer et décompressez l’archive. Ouvrez index.html : la page se charge depuis les fichiers enregistrés, sans connexion Internet. Pour garder plusieurs pages, passez à « Plusieurs pages » et ajoutez jusqu’à 20 adresses ; les liens entre les pages enregistrées fonctionnent alors aussi hors ligne.',
      },
      {
        question: 'Comment ouvrir un site web après l’avoir téléchargé ?',
        answer:
          'Décompressez l’archive et ouvrez index.html dans n’importe quel navigateur. Les images, les styles et les polices se chargent depuis les dossiers situés à côté. Pour modifier la page, ouvrez le dossier dans un éditeur de code comme VS Code.',
      },
      {
        question: 'Pourquoi ma page téléchargée est-elle différente du site en ligne ?',
        answer:
          'Certains sites construisent leur contenu en JavaScript après le chargement de la page, ou chargent des fichiers depuis des serveurs qui bloquent les autres sites. L’aspirateur enregistre la page telle que le serveur l’envoie au départ : le contenu qui n’apparaît qu’après l’exécution des scripts peut donc manquer. Les fichiers qui n’ont pas pu être téléchargés gardent leur adresse web d’origine et se chargent donc tant que vous êtes en ligne. Le rapport d’archive liste chacun d’eux avec la raison de l’échec.',
      },
      {
        question: 'Puis-je télécharger la version mobile d’un site web ?',
        answer:
          'Oui. Choisissez « Mobile » sous « Version » avant de cliquer sur Enregistrer. La page et ses fichiers sont alors demandés comme le ferait le navigateur d’un iPhone : les sites qui proposent une mise en page mobile différente envoient cette version. Choisissez « Les deux » pour obtenir les copies pour ordinateur et pour mobile dans une seule archive.',
      },
      {
        question: 'À quoi sert l’option « Téléchargement simplifié » ?',
        answer:
          'Elle supprime tout le JavaScript de la page enregistrée et conserve un instantané statique du HTML, du CSS, des images et des polices. Les images à chargement différé sont modifiées pour se charger normalement, afin de s’afficher même sans scripts. Utilisez-la si vous n’avez besoin que de la mise en page et du design.',
      },
      {
        question: 'Que supprime l’option « Copie propre » ?',
        answer:
          'Les balises de statistiques et de publicité comme Google Analytics, Google Tag Manager et le pixel Meta, les outils d’enregistrement de session comme Hotjar et Microsoft Clarity, les bannières de consentement aux cookies comme OneTrust et Cookiebot, ainsi que les redirections automatiques. Les scripts propres à la page sont conservés. Le rapport d’archive liste tout ce qui a été retiré.',
      },
      {
        question: 'Puis-je enregistrer une page web dans un seul fichier HTML ?',
        answer:
          'Oui. Choisissez « Fichier HTML unique » sous « Enregistrer en ». Chaque image, police, feuille de style et script est placé dans un seul fichier .html qui s’ouvre dans n’importe quel navigateur, sans rien à décompresser.',
      },
      {
        question: 'Que contient le rapport d’archive ?',
        answer:
          'Chaque archive contient archive-report.html. Ce rapport indique quelle part de la page a été enregistrée pour une consultation hors ligne, liste chaque fichier qui n’a pas pu être enregistré et pourquoi, et décrit la page : ses couleurs, ses polices et leurs licences, le poids de la page par type de fichier, les outils avec lesquels elle est conçue et ses balises de recherche et de partage. Les mêmes informations s’affichent sur cette page après chaque téléchargement.',
      },
      {
        question: 'Y a-t-il une limite de taille ?',
        answer:
          'Une seule page peut contenir jusqu’à 400 fichiers, et plusieurs pages jusqu’à 1 000 au total. Chaque fichier peut faire jusqu’à 25 Mo, avec 30 Mo maximum par archive et 20 pages à la fois. Un téléchargement s’arrête au bout d’environ 90 secondes, ou 150 secondes pour plusieurs pages ou les deux versions ; les fichiers qui n’ont pas été enregistrés à ce moment-là continuent de pointer vers le site en ligne et sont listés dans le rapport d’archive.',
      },
      {
        question: 'Quelle différence avec HTTrack et les autres aspirateurs de sites ?',
        answer:
          'HTTrack et Cyotek WebCopy sont des logiciels de bureau : vous les installez, puis ils parcourent un site depuis votre ordinateur en suivant ses liens. Cet aspirateur de site fonctionne dans votre navigateur, sans installation. Il enregistre les pages que vous choisissez, jusqu’à 20 à la fois, dans un seul ZIP accompagné d’un rapport, et peut retirer au passage les traceurs et les bandeaux de cookies. Pour copier un grand site de plusieurs milliers de pages, un logiciel de bureau reste plus adapté.',
      },
      {
        question: 'Est-il légal de télécharger un site web ?',
        answer:
          'Enregistrer une page pour un usage personnel (étude, tests ou archivage) est généralement acceptable, mais les textes, les images, le code et les polices appartiennent toujours à leurs propriétaires. Ne republiez pas un site téléchargé et n’utilisez pas son contenu à des fins commerciales sans autorisation, et vérifiez la licence des polices ou des images avant de les réutiliser.',
      },
      {
        question: 'Conservez-vous les sites que je télécharge ?',
        answer:
          'Non. Chaque archive est créée en mémoire pour votre demande et envoyée directement à votre navigateur. Nous ne gardons aucune copie des pages que vous enregistrez ni des fichiers qu’elles contiennent.',
      },
    ],
  },

  cta: {
    title: 'Votre prochaine page en un copier-coller',
    text: 'Gratuit, sans inscription, et l’archive s’ouvre dans n’importe quel navigateur.',
    button: 'Enregistrer un site',
  },

  about: {
    title: 'À propos – Aspirateur de site web gratuit',
    heading: 'À propos de {name}',
    description:
      'Découvrez {name}, aspirateur de site gratuit : pourquoi il existe, qui l’utilise et comment il télécharge un site en ZIP (HTML, CSS, images, polices).',
    lead: 'Nous proposons un outil gratuit qui enregistre n’importe quelle page web publique, avec tout ce dont elle a besoin pour s’afficher, dans un seul fichier ZIP que vous pouvez ouvrir hors ligne.',
    bodyHtml: `<h2>Ce que fait {name}</h2>
<p>{name} est un <a href="{homeUrl}">aspirateur de site web en ligne</a> gratuit. Collez l’adresse d’une page web : il récupère le HTML de la page ainsi que chaque feuille de style, script, image et police qu’elle utilise, réécrit les liens pour qu’ils pointent vers les fichiers enregistrés et vous remet une seule archive ZIP. Décompressez-la, ouvrez <code>index.html</code>, et la page se charge dans votre navigateur sans connexion Internet.</p>
<p>Il n’y a rien à installer et aucun compte à créer. Il fonctionne dans n’importe quel navigateur récent, sous Windows, macOS, Linux, Android et iOS.</p>
<h2>Pourquoi nous l’avons créé</h2>
<p>Enregistrer une page web devrait être simple, mais c’est rarement le cas. La fonction « Enregistrer sous » d’un navigateur oublie souvent les polices web, les images d’arrière-plan CSS, les tailles d’image responsives et les fichiers qu’importe une feuille de style : la copie paraît donc cassée quand vous l’ouvrez plus tard. Tout récupérer à la main depuis les outils de développement prend beaucoup de temps, et il est facile de se tromper. Nous voulions une seule étape qui fasse tout le travail : collez une URL, cliquez sur Enregistrer et obtenez une archive bien rangée, fidèle à l’original.</p>
<h2>Qui utilise {name}</h2>
<ul>
<li><strong>Les marketeurs et les affiliés</strong> gardent des copies des landing pages dont ils veulent s’inspirer, et sauvegardent leurs propres pages avant une refonte.</li>
<li><strong>Les designers</strong> enregistrent des pages pour en étudier la mise en page, les couleurs et la typographie, et consultent le rapport d’archive pour voir quelles polices et quelles couleurs une page utilise.</li>
<li><strong>Les développeurs</strong> migrent d’anciennes pages statiques vers un nouvel hébergement, préparent des démos hors ligne et testent des modifications sur une copie locale plutôt que sur le site en ligne.</li>
<li><strong>Les étudiants et les enseignants</strong> téléchargent de vraies pages pour comprendre comment le HTML, le CSS et le JavaScript fonctionnent ensemble.</li>
<li><strong>Les chercheurs et les archivistes</strong> gardent une trace d’une page avant qu’elle ne change ou ne disparaisse.</li>
</ul>
<h2>Ce que vous pouvez enregistrer</h2>
<p>Chaque téléchargement comprend la page et les fichiers nécessaires à son affichage. Des options vous permettent d’adapter l’archive à votre besoin :</p>
<ul>
<li>Enregistrer jusqu’à 20 pages d’un site dans une seule archive, avec des liens entre elles qui fonctionnent hors ligne.</li>
<li>Télécharger la version mobile d’un site web, ou les versions ordinateur et mobile côte à côte.</li>
<li>Enregistrer une page dans un seul fichier HTML autonome au lieu d’un ZIP.</li>
<li>Faire une copie propre, sans balises de statistiques, scripts publicitaires ni bannières de cookies.</li>
<li>Conserver la structure de dossiers d’origine du site, ou donner à chaque ressource un nom court et clair.</li>
</ul>
<p>Chaque archive contient aussi un rapport qui liste chaque fichier enregistré, ce qui n’a pas pu l’être et pourquoi, ainsi qu’une analyse de la page : ses couleurs, ses polices et son poids. Consultez <a href="{homeUrl}#whats-saved">ce qui est enregistré lors d’un téléchargement</a> pour la liste complète.</p>
<h2>Comment ça marche</h2>
<p>Quand vous envoyez une adresse, notre serveur demande la page, repère chaque feuille de style, script, image et police qu’elle utilise, les télécharge et réécrit la page pour qu’elle pointe vers les copies enregistrées. L’archive est créée en mémoire pour votre demande et envoyée directement à votre navigateur. Nous ne gardons aucune copie de la page ni de l’archive. Le <a href="{homeUrl}#how-it-works">guide étape par étape</a> présente le processus du début à la fin.</p>
<h2>Nos principes</h2>
<ul>
<li><strong>Gratuit.</strong> Pas de compte, pas d’inscription, aucun logiciel à installer.</li>
<li><strong>Confidentiel par défaut.</strong> Nous ne stockons ni les pages que vous enregistrez ni les fichiers qu’elles contiennent. Notre <a href="{privacyUrl}">politique de confidentialité</a> explique précisément ce que nous collectons.</li>
<li><strong>Des résultats honnêtes.</strong> Si un fichier ne peut pas être enregistré, le rapport d’archive le signale et explique pourquoi : vous ne découvrez jamais une page cassée après coup.</li>
<li><strong>Respect des créateurs.</strong> Télécharger une page ne vous donne aucun droit sur celle-ci. Nos <a href="{termsUrl}">conditions générales d’utilisation</a> vous demandent de n’enregistrer que ce que vous avez le droit d’utiliser.</li>
</ul>
<h2>Nous contacter</h2>
<p>Une page ne s’enregistre pas correctement, ou vous avez une idée de fonctionnalité ? Notre <a href="{homeUrl}#faq">FAQ</a> répond à bon nombre de questions courantes. Pour tout le reste, <a href="{contactUrl}">contactez-nous</a>. Nous lisons tous les messages.</p>`,
  },

  contact: {
    title: 'Contact et assistance – Aspirateur de site',
    heading: 'Nous contacter',
    description:
      'Contactez {name} : aide sur l’aspirateur de site, page mal enregistrée, idée de fonctionnalité, demande liée aux droits d’auteur ou à vos données.',
    lead: 'Questions, signalements de bugs, idées de fonctionnalités, notifications de droits d’auteur et demandes liées à la confidentialité arrivent tous dans la même boîte de réception, et nous lisons chaque message.',
    bodyHtml: `<h2>Comment nous pouvons vous aider</h2>
<ul>
<li><strong>Aide pour un téléchargement.</strong> Une page ne s’est pas enregistrée, s’affiche différemment hors ligne ou s’est arrêtée en cours de route.</li>
<li><strong>Signalements de bugs.</strong> Quelque chose sur le site ne fonctionne pas comme prévu.</li>
<li><strong>Idées de fonctionnalités.</strong> Une option que vous aimeriez voir dans l’aspirateur de site web.</li>
<li><strong>Droits d’auteur et signalements d’abus.</strong> Vous pensez que le service est utilisé pour copier votre contenu sans autorisation.</li>
<li><strong>Demandes liées à la confidentialité.</strong> Vous voulez savoir quelles données nous détenons sur vous, ou nous demander de les supprimer.</li>
<li><strong>Partenariats et presse.</strong> Vous aimeriez travailler avec nous ou écrire sur {name}.</li>
</ul>
<h2>Avant de nous écrire</h2>
<p>Beaucoup de questions, par exemple comment télécharger un site web complet, enregistrer la version mobile ou ouvrir un site après l’avoir téléchargé, trouvent leur réponse dans nos <a href="{homeUrl}#faq">questions fréquentes</a>. C’est souvent le moyen le plus rapide d’obtenir une réponse.</p>
<h2>Signaler une page mal enregistrée</h2>
<p>Pour nous aider à corriger le problème rapidement, indiquez :</p>
<ul>
<li>L’adresse de la page que vous avez essayé d’enregistrer.</li>
<li>Les options que vous aviez activées.</li>
<li>Le message affiché sous le bouton Enregistrer, s’il y en avait un.</li>
<li>Ce qui ne va pas quand vous ouvrez la page enregistrée.</li>
<li>Si vous l’avez, le fichier <code>archive-report.html</code> présent dans le ZIP. Il liste chaque fichier qui n’a pas pu être enregistré et pourquoi.</li>
</ul>
<h2>Droits d’auteur et signalements d’abus</h2>
<p>{name} n’héberge pas les pages que les internautes enregistrent : chaque archive est créée pour une seule demande et n’est jamais stockée sur nos serveurs. Si vous pensez que le service est utilisé pour copier votre contenu d’une manière qui porte atteinte à vos droits, envoyez-nous un e-mail avec l’adresse de votre page, une description du problème et un moyen de vous joindre. Nous examinons chaque signalement. Nos <a href="{termsUrl}">conditions générales d’utilisation</a> précisent ce que doit contenir une notification formelle.</p>
<h2>Demandes liées à la confidentialité</h2>
<p>Pour savoir quelles données personnelles nous détenons sur vous, ou pour les faire rectifier ou supprimer, écrivez-nous depuis l’adresse e-mail concernée par la demande. Notre <a href="{privacyUrl}">politique de confidentialité</a> explique ce que nous collectons et les droits dont vous disposez.</p>
<h2>Délai de réponse</h2>
<p>Nous répondons généralement sous quelques jours ouvrés.</p>`,
  },

  privacy: {
    title: 'Politique de confidentialité – Vos données',
    heading: 'Politique de confidentialité',
    description:
      'Politique de confidentialité de {name} : ce que l’aspirateur de site collecte, ce que nous ne stockons jamais, cookies, services tiers et vos droits.',
    lead: 'Cette politique explique quelles informations {name} collecte lorsque vous utilisez ce site et son aspirateur de site web, pourquoi nous les collectons et les choix dont vous disposez.',
    shortHtml: `<h2>En bref</h2>
<ul>
<li>Vous n’avez besoin ni d’un compte, ni de votre nom, ni de votre adresse e-mail pour utiliser l’aspirateur de site web.</li>
<li>Nous ne stockons ni les adresses que vous envoyez, ni les pages que nous récupérons pour vous, ni les archives que nous créons.</li>
<li>Nous ne vendons pas vos données personnelles et ne les utilisons pas à des fins publicitaires.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'Nous utilisons Google Analytics pour compter les visites et comprendre comment le site est utilisé.',
    analyticsSummaryOff: 'Nous n’utilisons aucun cookie publicitaire ni de mesure d’audience.',
    givenHtml: `<h2>Qui sommes-nous ?</h2>
<p>{name} (ci-après « nous ») exploite ce site web et l’aspirateur de site web qu’il propose, et est responsable des données personnelles décrites dans la présente politique. Vous pouvez nous joindre à l’adresse <a href="mailto:{email}">{email}</a>.</p>
<h2>Informations que vous nous fournissez</h2>
<p><strong>Adresses web et options.</strong> Quand vous cliquez sur Enregistrer, les adresses saisies et les options choisies sont envoyées à notre serveur pour qu’il puisse récupérer ces pages. Quand vous nous demandez de trouver les pages d’un site, son adresse est envoyée pour que nous puissions les lister. Les adresses servent uniquement à traiter votre demande. L’archive est créée en mémoire, envoyée à votre navigateur, puis supprimée. Nous ne gardons aucune copie des pages ni de leurs fichiers.</p>
<p><strong>Votre archive.</strong> Le panneau qui s’affiche après un téléchargement lit le rapport contenu dans le ZIP directement dans votre navigateur. Le choix des fichiers et la recompression du ZIP se font aussi sur votre appareil, et rien ne nous est renvoyé.</p>
<p><strong>E-mails.</strong> Si vous nous écrivez à <a href="mailto:{email}">{email}</a>, nous recevons votre adresse e-mail et le contenu de votre message. Nous ne les utilisons que pour vous répondre et ne les conservons que le temps nécessaire au traitement de votre message.</p>
<h2>Informations collectées automatiquement</h2>
<p>Comme la plupart des sites web, notre hébergeur enregistre des informations techniques de base pour chaque requête, comme l’adresse IP, le type de navigateur, la page demandée et l’heure. Ces journaux servent à assurer le fonctionnement du service, à analyser les erreurs et à prévenir les abus, et sont supprimés à intervalles réguliers.</p>
<p>Pendant un téléchargement, notre serveur utilise aussi votre adresse IP pour limiter le nombre de téléchargements qu’un même visiteur peut lancer simultanément. Ce compteur n’est conservé qu’en mémoire et disparaît dès la fin du téléchargement.</p>
<h2>Comment nous utilisons les informations</h2>
<ul>
<li>Pour récupérer les pages que vous demandez et créer votre archive.</li>
<li>Pour répondre à vos e-mails et à vos demandes.</li>
<li>Pour assurer la sécurité, la fiabilité et l’équité du service pour tous, et prévenir les abus.</li>
<li>Pour détecter et corriger les erreurs.</li>
<li>Pour respecter nos obligations légales.</li>
</ul>
<h2>Bases légales du traitement</h2>
<p>Si vous vous trouvez dans l’Espace économique européen, au Royaume-Uni ou en Suisse, nous traitons vos données personnelles parce que cela est nécessaire pour fournir le service que vous demandez, en raison de notre intérêt légitime à exploiter un service sûr et fiable et à prévenir les abus, ou pour respecter la loi.</p>`,
    analyticsHtml: `<h2>Mesure d’audience</h2>
<p>Nous utilisons Google Analytics, un service de Google LLC, pour comprendre comment les visiteurs utilisent le site, par exemple quelles pages sont consultées et comment les visiteurs y arrivent. Google Analytics dépose des cookies et traite des données, dont votre adresse IP, sur les serveurs de Google, qui peuvent se trouver hors de votre pays. Nous ne consultons ces rapports que sous forme agrégée et ne les utilisons pas pour vous identifier. Vous pouvez consulter la <a href="https://policies.google.com/privacy">politique de confidentialité de Google</a> et désactiver le suivi avec le <a href="https://tools.google.com/dlpage/gaoptout">module complémentaire de navigateur pour la désactivation de Google Analytics</a>.</p>`,
    cookiesTitle: 'Cookies et stockage local',
    cookiesOn:
      'Nous ne déposons aucun cookie qui nous soit propre. Google Analytics dépose des cookies pour distinguer les visites. Vous pouvez bloquer ou supprimer les cookies dans les paramètres de votre navigateur : l’aspirateur de site web continue de fonctionner sans eux.',
    cookiesOff: 'Nous ne déposons aucun cookie, et l’aspirateur de site web n’en a pas besoin pour fonctionner.',
    restHtml: `<p>Si vous choisissez un thème clair ou sombre, ce choix est enregistré dans le stockage local de votre navigateur pour que le site s’en souvienne. Il ne quitte jamais votre appareil, et l’effacement des données de votre navigateur le supprime.</p>
<h2>Services tiers</h2>
<ul>
<li><strong>Hébergement.</strong> Notre hébergeur exploite les serveurs de ce site et traite pour notre compte les journaux de requêtes décrits ci-dessus.</li>
<li><strong>Google Fonts.</strong> Le site charge ses polices depuis Google Fonts : votre navigateur se connecte donc aux serveurs de Google, qui reçoivent votre adresse IP.</li>
</ul>
<h2>Les sites web que vous enregistrez</h2>
<p>Quand vous enregistrez une page, c’est notre serveur, et non votre navigateur, qui contacte le site saisi ainsi que les serveurs qui hébergent ses fichiers. Ces sites voient une requête provenant de notre serveur, et non de votre adresse IP. La requête s’identifie comme un navigateur standard (un navigateur mobile si vous choisissez la version mobile) et ne transmet aucun de vos cookies ni aucune de vos données personnelles.</p>
<h2>Nous ne vendons pas vos informations</h2>
<p>Nous ne vendons, ne louons ni n’échangeons de données personnelles, nous ne les partageons pas à des fins de publicité ciblée et nous ne créons pas de profils de visiteurs. Nous ne partageons des informations qu’avec les prestataires de services mentionnés dans la présente politique, ou lorsque la loi l’exige.</p>
<h2>Transferts internationaux</h2>
<p>Nos prestataires de services peuvent traiter des informations dans d’autres pays que celui où vous résidez, notamment aux États-Unis. Lorsque la loi l’exige, ces transferts reposent sur des garanties appropriées, comme des décisions d’adéquation ou des clauses contractuelles types.</p>
<h2>Durée de conservation des informations</h2>
<ul>
<li><strong>Adresses envoyées et archives :</strong> non stockées. Elles n’existent que pendant la création de votre téléchargement.</li>
<li><strong>Journaux du serveur :</strong> conservés pendant une durée limitée pour des raisons de sécurité et de dépannage, puis supprimés.</li>
<li><strong>E-mails :</strong> conservés uniquement le temps nécessaire pour y répondre et assurer un éventuel suivi.</li>
</ul>
<h2>Sécurité</h2>
<p>Tout le trafic vers ce site est chiffré en HTTPS. Les archives sont créées en mémoire et ne sont jamais enregistrées sur disque, et l’aspirateur de site web refuse d’accéder aux réseaux privés et aux adresses internes. Aucune méthode de transmission ou de stockage n’est totalement sûre, mais nous nous efforçons de protéger le peu d’informations que nous traitons.</p>
<h2>Vie privée des enfants</h2>
<p>Ce service ne s’adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données personnelles les concernant. Si vous pensez qu’un enfant nous a transmis des données personnelles, <a href="{contactUrl}">contactez-nous</a> et nous les supprimerons.</p>
<h2>Vos droits</h2>
<p>Selon votre lieu de résidence, vous pouvez avoir le droit de :</p>
<ul>
<li>savoir quelles données personnelles nous détenons sur vous et en obtenir une copie ;</li>
<li>faire rectifier les informations inexactes ;</li>
<li>faire supprimer vos informations ;</li>
<li>vous opposer à leur utilisation ou la limiter ;</li>
<li>recevoir vos informations dans un format portable ;</li>
<li>introduire une réclamation auprès de l’autorité de protection des données de votre pays.</li>
</ul>
<p>Si vous résidez en Californie ou dans un autre État américain doté d’une loi sur la protection de la vie privée des consommateurs, vous avez également le droit de savoir quelles données nous collectons, de les faire rectifier et supprimer, et de ne pas faire l’objet d’un traitement différent parce que vous exercez ces droits. Nous ne vendons ni ne partageons de données personnelles au sens de ces lois.</p>
<p>Pour faire une demande, écrivez à <a href="mailto:{email}">{email}</a>. Nous pourrons avoir besoin de vérifier votre identité au préalable, et nous vous répondrons dans le délai prévu par la loi. Comme nous conservons très peu d’informations, il est fréquent que nous ne détenions aucune information vous concernant.</p>
<h2>Liens vers d’autres sites web</h2>
<p>La présente politique ne concerne que {name}. Les sites web que vous téléchargez, et les sites vers lesquels nous renvoyons, ont leurs propres politiques de confidentialité, et nous ne sommes pas responsables de la manière dont ils traitent les informations.</p>
<h2>Modifications de cette politique</h2>
<p>Si nous modifions cette politique, nous mettrons à jour la date en haut de cette page. Les changements importants seront signalés sur le site.</p>
<h2>Contact</h2>
<p>Des questions sur cette politique de confidentialité ou sur la manière dont nous traitons vos données ? Écrivez à <a href="mailto:{email}">{email}</a> ou utilisez notre <a href="{contactUrl}">page de contact</a>.</p>`,
  },

  terms: {
    title: 'Conditions générales d’utilisation (CGU)',
    heading: 'Conditions générales d’utilisation',
    description:
      'Les CGU de {name}, l’aspirateur de site web gratuit : usage autorisé, droits d’auteur, limites du service, exclusions de garantie et responsabilité.',
    lead: 'Ces conditions s’appliquent lorsque vous utilisez {name} et son aspirateur de site web. En utilisant le site, vous les acceptez : merci de les lire attentivement.',
    bodyHtml: `<h2>À propos de ces conditions</h2>
<p>Les présentes conditions générales d’utilisation (les « conditions ») constituent un accord entre vous et {name} (« nous »). Elles régissent votre utilisation de ce site web et de l’aspirateur de site web qu’il propose (ensemble, le « service »). Si vous ne les acceptez pas, veuillez ne pas utiliser le service.</p>
<h2>Qui peut utiliser le service</h2>
<p>Vous devez avoir au moins 13 ans pour utiliser le service. Si vous n’avez pas atteint l’âge de la majorité dans votre pays de résidence, vous ne pouvez l’utiliser qu’avec l’autorisation d’un parent ou d’un tuteur légal. Si vous utilisez le service pour le compte d’une entreprise ou d’une autre organisation, vous confirmez être habilité à accepter ces conditions en son nom.</p>
<h2>Le service</h2>
<p>{name} vous permet de saisir l’adresse d’une page web publique et de télécharger une archive ZIP contenant cette page et les fichiers qu’elle utilise, comme les feuilles de style, les scripts, les images et les polices. Vous pouvez aussi enregistrer plusieurs pages à la fois, la version mobile d’une page ou un seul fichier HTML autonome. Le service est gratuit, ne nécessite aucun compte et est fourni en l’état. Nous pouvons ajouter, modifier ou supprimer des fonctionnalités à tout moment.</p>
<h2>Usage autorisé</h2>
<p>Vous vous engagez à n’utiliser le service qu’à des fins légales. Vous vous engagez notamment à ne pas :</p>
<ul>
<li>télécharger, copier ou republier un contenu que vous n’avez pas le droit d’utiliser ;</li>
<li>faire passer un site téléchargé pour le vôtre, ou l’utiliser pour usurper l’identité d’une autre personne ou d’une entreprise ;</li>
<li>utiliser des pages téléchargées pour de l’hameçonnage, de la fraude ou des logiciels malveillants, ou pour collecter des informations sur d’autres personnes ;</li>
<li>tenter d’accéder à des réseaux privés, à des services internes ou à des pages qui nécessitent une connexion ;</li>
<li>envoyer des requêtes automatisées ou excessives qui imposent une charge déraisonnable à nos serveurs ou aux sites web que vous téléchargez ;</li>
<li>tenter de compromettre, de sonder ou de contourner la sécurité ou les limites du service ;</li>
<li>revendre le service, ou le proposer dans le cadre d’un autre produit, sans notre autorisation écrite.</li>
</ul>
<h2>Droits d’auteur et contenus de tiers</h2>
<p>Les sites web que vous téléchargez appartiennent à leurs propriétaires. Enregistrer une page ne transfère aucun droit sur ses textes, images, code, polices ou marques. Il vous appartient de vérifier que votre utilisation des contenus téléchargés est autorisée, par exemple pour une étude personnelle, pour sauvegarder votre propre site ou avec l’autorisation du propriétaire. Vérifiez la licence de toute police ou image avant de la réutiliser.</p>
<p>{name} est un outil, pas un hébergeur : chaque archive est créée pour une seule demande, et n’est ni stockée sur nos serveurs ni publiée par nous.</p>
<h2>Réclamations relatives aux droits d’auteur</h2>
<p>Si vous pensez que le service est utilisé pour porter atteinte à vos droits d’auteur ou à d’autres droits, écrivez à <a href="mailto:{email}">{email}</a> en indiquant :</p>
<ul>
<li>vos nom et coordonnées ;</li>
<li>une description de l’œuvre qui, selon vous, fait l’objet d’une atteinte ;</li>
<li>l’adresse de la page concernée ;</li>
<li>une déclaration selon laquelle vous estimez de bonne foi que l’utilisation n’est autorisée ni par le titulaire des droits, ni par son mandataire, ni par la loi ;</li>
<li>une déclaration attestant que les informations de votre notification sont exactes et que vous êtes le titulaire des droits ou êtes autorisé à agir en son nom ;</li>
<li>votre signature manuscrite ou électronique.</li>
</ul>
<p>Nous examinons chaque notification et pouvons prendre des mesures, comme bloquer les requêtes portant sur l’adresse concernée.</p>
<h2>Notre contenu et notre marque</h2>
<p>Le nom {name}, son logo, la conception du site web, ses textes et ses logiciels nous appartiennent ou appartiennent à nos concédants de licence. Les présentes conditions ne vous accordent aucun droit de les utiliser, si ce n’est pour faire référence au service de façon exacte.</p>
<h2>Sites web tiers</h2>
<p>Les pages que vous téléchargez, ainsi que les liens présents sur ce site, mènent à des sites web que nous ne contrôlons pas. Nous ne sommes pas responsables de leur contenu, de leur disponibilité ni de leurs pratiques, et l’enregistrement d’une page ne signifie pas que nous la cautionnons.</p>
<h2>Limites et disponibilité</h2>
<p>Pour que le service reste rapide et équitable, chaque téléchargement est limité en nombre de pages et de fichiers, en taille de fichier et en durée, et chaque visiteur ne peut lancer que quelques téléchargements à la fois. Nous pouvons modifier ces limites, bloquer les requêtes qui abusent du service, ou suspendre ou résilier l’accès à tout moment, avec ou sans préavis. Nous pouvons également interrompre le service pour maintenance ou cesser de le proposer.</p>
<h2>Absence de garantie</h2>
<p>Le service est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite, y compris les garanties de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon. Nous ne garantissons pas que chaque page sera téléchargée intégralement ou aura le même aspect que l’original, ni que le service sera ininterrompu, sécurisé ou exempt d’erreurs.</p>
<h2>Limitation de responsabilité</h2>
<p>Dans toute la mesure permise par la loi, {name} ne saurait être tenu responsable des dommages indirects, accessoires, spéciaux ou consécutifs, ni de toute perte de données, de bénéfices ou d’activité, découlant de votre utilisation du service ou de tout contenu que vous téléchargez avec celui-ci. Certaines juridictions n’autorisant pas ces limitations, il est possible que certaines d’entre elles ne s’appliquent pas à vous.</p>
<h2>Indemnisation</h2>
<p>Vous acceptez de défendre et d’indemniser {name} contre toute réclamation, perte ou dépense, y compris des frais juridiques raisonnables, découlant de votre utilisation abusive du service ou de votre manquement aux présentes conditions.</p>
<h2>Dispositions générales</h2>
<p>Si une disposition des présentes conditions est jugée inapplicable, les autres dispositions restent en vigueur. Le fait de ne pas faire appliquer immédiatement une disposition ne vaut pas renonciation à la faire appliquer ultérieurement. Les présentes conditions, ainsi que notre <a href="{privacyUrl}">politique de confidentialité</a>, constituent l’intégralité de l’accord entre vous et nous concernant le service.</p>
<h2>Modifications de ces conditions</h2>
<p>Nous pouvons mettre à jour ces conditions de temps à autre. La date en haut de cette page indique leur dernière modification. Si vous continuez à utiliser le service après une modification, vous acceptez les conditions mises à jour.</p>
<h2>Contact</h2>
<p>Des questions sur ces conditions ? Écrivez à <a href="mailto:{email}">{email}</a> ou utilisez notre <a href="{contactUrl}">page de contact</a>.</p>`,
  },

  notFound: {
    title: 'Page introuvable',
    description: 'Cette page n’existe pas.',
    heading: 'Cette page n’existe pas',
    text: 'Le lien est peut-être rompu, ou la page a été déplacée. Vérifiez l’adresse ou revenez à l’aspirateur de site web.',
    button: 'Revenir à l’aspirateur de site web',
  },

  serverError: {
    title: 'Un problème est survenu',
    description: 'Une erreur inattendue s’est produite de notre côté.',
    heading: 'Un problème est survenu de notre côté',
    textHtml:
      'Le serveur a rencontré une erreur inattendue lors du chargement de cette page. Réessayez dans un instant. Si le problème persiste, <a href="{contactUrl}">prévenez-nous</a>.',
    button: 'Revenir à l’aspirateur de site web',
  },
};

export default fr;
