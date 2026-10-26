import type { Dict } from './en';

const es: Dict = {
  meta: {
    homeTitle: 'Descargar página web – Guarda cualquier web en ZIP gratis',
    homeDescription:
      'Descargar página web gratis y online: guarda cualquier web o landing page en ZIP con su HTML, CSS, JavaScript, imágenes y fuentes. Sin registro.',
    ogImageAlt: 'Guardar una página web en ZIP: HTML, CSS, JavaScript, imágenes y fuentes en un solo archivo',
    appFeatures: [
      'Descargar cualquier página web como archivo ZIP',
      'Guardar HTML, CSS, JavaScript, imágenes y fuentes',
      'Renombrar todos los archivos',
      'Copiar la versión móvil de una web',
      'Descarga simplificada sin JavaScript',
      'Mantener la estructura de carpetas original del sitio',
      'Copia limpia sin rastreadores, anuncios ni banners de cookies',
      'Guardar una página como un único archivo HTML autónomo',
      'Descargar varias páginas, o las versiones de escritorio y móvil, en un solo ZIP',
      'Informe del ZIP con datos de la página: colores, fuentes, peso de la página y tecnologías',
    ],
  },

  common: {
    skipToContent: 'Saltar al contenido',
    languageMenuLabel: 'Idioma',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    lastUpdated: 'Última actualización: {date}',
  },

  nav: {
    howItWorks: 'Cómo funciona',
    whatsSaved: 'Qué se guarda',
    faq: 'Preguntas frecuentes',
    cta: 'Guardar una web',
    mainLabel: 'Principal',
    footerLabel: 'Pie de página',
  },

  footer: {
    tagline: 'Descargador de páginas web gratis. Guarda solo páginas que tengas derecho a copiar.',
    about: 'Sobre nosotros',
    contact: 'Contacto',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    languages: 'Idiomas',
  },

  hero: {
    title: 'Descargar página web en ZIP.',
    titleAccent: 'Sin perder ningún detalle.',
    lead: 'Un descargador de páginas web gratis. Pega la URL de cualquier página y obtén su HTML, CSS, JavaScript, imágenes y fuentes en un solo ZIP.',
    fieldLabel: 'Dirección de la página web',
    placeholder: 'p. ej., example.com/landing-page…',
    save: 'Guardar',
    saving: 'Guardando…',
    modeLegend: 'Qué guardar',
    modes: { single: 'Una página', multi: 'Varias páginas' },
    multiFieldLabel: 'Direcciones de las páginas',
    multiPlaceholder: 'Una dirección por línea, hasta {max}',
    findPages: 'Buscar páginas en este sitio',
    findingPages: 'Buscando páginas…',
    pagesFound: { one: '{count} página encontrada', other: '{count} páginas encontradas' },
    noPagesFound: 'No se encontraron más páginas en {host}. Añade tú las direcciones, una por línea.',
    addPages: 'Añadir páginas seleccionadas',
    selectAll: 'Seleccionar todo',
    clearSelection: 'Quitar selección',
    deviceLegend: 'Versión',
    devices: { desktop: 'Escritorio', mobile: 'Móvil', both: 'Ambas' },
    outputLegend: 'Guardar como',
    outputs: { zip: 'Archivo ZIP', single: 'Un solo archivo HTML' },
    optionsLegend: 'Opciones de descarga',
    moreOptions: 'Personaliza tu descarga',
    tryExample: 'Prueba con un ejemplo',
    options: {
      cleanCopy: { title: 'Copia limpia', hint: 'Quita rastreadores, anuncios y banners de cookies' },
      simplified: { title: 'Descarga simplificada', hint: 'Sin JavaScript' },
      renameAssets: { title: 'Renombrar todos los archivos', hint: 'Nombres cortos y ordenados, como image-1.jpg' },
      keepStructure: { title: 'Guardar estructura del sitio', hint: 'Mantiene las rutas de carpetas originales' },
      prettify: { title: 'Formatear código', hint: 'Indenta el HTML, el CSS y el JavaScript minificados' },
      pickFiles: { title: 'Elegir archivos antes', hint: 'Revisa el ZIP antes de que se descargue' },
    },
    scene: {
      nav: ['Inicio', 'Nosotros', 'Trabajos', 'Contacto'],
      pageTitle: 'Una web más limpia y luminosa',
      idleTitle: 'Listo para guardar',
      idleNote: 'Todos los recursos incluidos',
      workingTitle: 'Empaquetando archivos',
      workingNote: 'Reuniendo cada recurso',
      doneTitle: 'Guardado',
      doneNote: 'Archivo listo',
    },
  },

  // Messages shown under the Save button while and after downloading.
  status: {
    downloading: 'Descargando {host}. Las páginas grandes pueden tardar hasta un minuto.',
    saved: 'Se guardó {filename} con {files}.',
    files: { one: '{count} archivo', other: '{count} archivos' },
    missed: {
      one: 'No se pudo descargar {count} archivo; sigue enlazado a la web original.',
      other: 'No se pudieron descargar {count} archivos; siguen enlazados a la web original.',
    },
    ready: 'Listo: {files}. Elige qué conservar y luego descarga el ZIP.',
    serverUnreachable: 'No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.',
    failed: 'No se pudo crear el ZIP. Inténtalo de nuevo.',
  },

  // Errors explained to the visitor. Sent by the server in the visitor's language.
  errors: {
    emptyUrl: 'Escribe la dirección de la página que quieres guardar.',
    invalidUrl: '«{input}» no es una dirección web válida. Prueba con algo como example.com.',
    protocol: 'Solo se pueden guardar direcciones que empiecen por http:// o https://.',
    credentials: 'Quita el usuario y la contraseña de la dirección e inténtalo de nuevo.',
    localAddress: 'No se pueden guardar direcciones locales ni internas. Prueba con una página pública.',
    privateAddress: 'No se pueden guardar direcciones de redes privadas. Prueba con una página pública.',
    notPublicDomain: '«{host}» no es un dominio público. Escribe el dominio completo, como example.com.',
    privateNetwork: 'Esa dirección apunta a una red privada y no se puede guardar. Prueba con una página pública.',
    notFound: 'No encontramos {host}. Revisa cómo está escrita la dirección.',
    timeout: '{host} tardó demasiado en responder. Vuelve a intentarlo en un momento.',
    unreachable: 'No se pudo conectar con {host}. Revisa la dirección e inténtalo de nuevo.',
    httpError: '{host} respondió con el error {status}, así que no hay nada que guardar. Revisa la dirección.',
    notHtml: 'Esa dirección devuelve un archivo, no una página web. Escribe la dirección de una página.',
    badRequest: 'La solicitud no es válida. Recarga la página e inténtalo de nuevo.',
    internal: 'Algo salió mal al crear el ZIP. Inténtalo de nuevo o prueba con otra página.',
    tooManyPages: 'Añade hasta {max} páginas a la vez.',
    busy: 'Ya tienes descargas en curso. Espera a que terminen y vuelve a intentarlo.',
  },

  // The panel that opens under the hero once an archive is ready.
  result: {
    title: 'Tu archivo ZIP',
    downloadAgain: 'Descargar de nuevo',
    downloadSelected: 'Descargar selección',
    selection: 'Selección: {files}, {size}',
    score: 'disponible sin conexión',
    scoreHint: 'Proporción de los archivos de la página que se guardaron en el ZIP. El resto se sigue cargando desde la web original.',
    saved: { one: '{count} archivo guardado', other: '{count} archivos guardados' },
    failed: { one: 'No se pudo guardar {count} archivo', other: 'No se pudieron guardar {count} archivos' },
    pages: { one: '{count} página', other: '{count} páginas' },
    removed: { one: '{count} elemento eliminado', other: '{count} elementos eliminados' },
    liveLinks: {
      one: '{count} enlace a otra página sigue abriendo la web original.',
      other: '{count} enlaces a otras páginas siguen abriendo la web original.',
    },
    tabs: { files: 'Archivos', problems: 'Problemas', insights: 'Análisis' },
    filesHint: 'Desmarca los archivos que no necesites. Lo que los usaba los cargará desde la web original.',
    singleHint: 'Un solo archivo HTML lo incluye todo, así que no hay archivos separados que elegir.',
    noProblems: 'Se guardaron todos los archivos.',
    moreProblems: { one: 'Y {count} más.', other: 'Y {count} más.' },
    removedTitle: 'Eliminado por «Copia limpia»',
    removedKinds: {
      tracker: 'Rastreadores y etiquetas',
      consent: 'Banners de cookies',
      redirect: 'Redirecciones automáticas',
    },
    kinds: {
      html: 'Página',
      css: 'CSS',
      js: 'JavaScript',
      image: 'Imagen',
      font: 'Fuente',
      media: 'Multimedia',
      other: 'Archivo',
    },
    reasons: {
      http: 'El servidor respondió con el error {status}',
      timeout: 'Tardó demasiado en descargarse',
      tooLarge: 'Supera el límite de {size} por archivo',
      notAsset: 'Devolvió una página web en lugar de un archivo',
      blocked: 'Apunta a una dirección privada o bloqueada',
      network: 'No se pudo conectar',
      deadline: 'Omitido: se alcanzó el tiempo máximo de una descarga',
      archiveFull: 'Omitido: el ZIP alcanzó su tamaño máximo',
      limit: 'Omitido: la página usa más de {max} archivos',
    },
    insights: {
      colors: 'Colores',
      neutrals: 'Neutros',
      cssVariables: { one: '{count} variable CSS', other: '{count} variables CSS' },
      copyColor: 'Copiar {hex}',
      copied: '{hex} copiado',
      fonts: 'Fuentes',
      licenses: {
        google: 'Google Fonts: de uso gratuito (Open Font License)',
        adobe: 'Adobe Fonts: con licencia, no se pueden reutilizar libremente',
        unknown: 'Revisa la licencia antes de reutilizarla',
        system: 'Fuente del sistema: viene con el dispositivo, no con la página',
      },
      weight: 'Peso de la página',
      tech: 'Hecho con',
      techCategories: {
        cms: 'Creadores de sitios y CMS',
        framework: 'Frameworks',
        library: 'Bibliotecas y servicios',
        analytics: 'Analítica y publicidad',
        consent: 'Consentimiento de cookies',
      },
      seo: 'Buscadores y redes sociales',
      seoItems: {
        title: 'Título',
        description: 'Descripción',
        canonical: 'Dirección canónica',
        lang: 'Idioma',
        h1: 'Encabezado principal',
        ogImage: 'Imagen para compartir',
        twitterCard: 'Tarjeta de X (Twitter)',
        robots: 'Robots',
        structuredData: 'Datos estructurados',
        alt: 'Imágenes sin texto alt',
      },
      length: { one: '{count} carácter', other: '{count} caracteres' },
      missing: 'Falta',
      none: 'No se encontró nada',
      altSummary: '{missing} de {total}',
    },
  },

  // archive-report.html inside every archive.
  report: {
    title: 'Informe del ZIP: {host}',
    savedFrom: 'Guardado desde {url} el {date}.',
    options: 'Opciones',
    optionsNone: 'Ninguna',
    files: 'Archivos de este ZIP',
    columns: { file: 'Archivo', from: 'Dirección original', size: 'Tamaño' },
    problems: 'No incluidos en este ZIP',
  },

  // "Save from any tab" bookmarklet on the home page.
  bookmarklet: {
    title: 'Guarda cualquier página desde tu navegador',
    text: 'Arrastra el botón a tu barra de marcadores. En cualquier página web, haz clic en el marcador para abrir {name} con la dirección de esa página ya escrita.',
    button: 'Guardar con {name}',
    dragHint: 'Arrastra este botón a tu barra de marcadores.',
  },

  steps: {
    title: 'Cómo funciona',
    lead: 'Tres pasos y sin cuenta. La mayoría de las páginas están listas en pocos segundos.',
    items: [
      {
        title: 'Pega la dirección de la página',
        text: 'Copia la URL de la barra de direcciones de tu navegador. Puedes omitir el https://.',
      },
      {
        title: 'Elige tus opciones',
        text: 'Elimina los rastreadores, guarda la versión móvil, quita el JavaScript o reúnelo todo en un solo archivo HTML.',
      },
      {
        title: 'Descomprime y abre index.html',
        text: 'El ZIP se descarga al momento. Abre la página en cualquier navegador o edítala en tu editor de código.',
      },
    ],
  },

  features: {
    title: 'Descarga todos los archivos de una web en un ZIP',
    lead: 'Descarga una landing page, una web completa o cualquier página totalmente gratis. Pega la URL en el campo de arriba y pulsa Guardar para obtener un ZIP con todos sus archivos.',
    html: { title: 'HTML', text: 'El código de la página, con cada referencia reescrita para apuntar a los archivos guardados.' },
    code: { title: 'CSS y JavaScript', text: 'Hojas de estilo y scripts, además de todo lo que importan.' },
    images: { title: 'Imágenes', text: 'Fotos, iconos, SVG, variantes responsive de srcset y fondos CSS.' },
    fonts: { title: 'Fuentes', text: 'Fuentes web cargadas con @font-face, incluidas las de Google Fonts.' },
  },

  // "More than a ZIP file": the features that set the tool apart, each with a small preview.
  highlights: {
    title: 'Más que un archivo ZIP',
    lead: 'Cada descarga incluye un informe y opciones que la mayoría de los descargadores de páginas web no tienen.',
    items: [
      {
        title: 'Copia limpia',
        text: 'Se eliminan los rastreadores, los píxeles publicitarios, los banners de cookies y las redirecciones. Los scripts propios de la página se mantienen.',
      },
      {
        title: 'Un informe en cada ZIP',
        text: 'Mira qué se guardó, qué no y por qué, además de los colores, las fuentes, el peso y las tecnologías de la página.',
      },
      {
        title: 'Varias páginas a la vez',
        text: 'Elige hasta 20 páginas entre los enlaces y el sitemap del sitio. Los enlaces entre ellas funcionan sin conexión.',
      },
      {
        title: 'Un archivo o las dos versiones',
        text: 'Guarda una página como un único archivo HTML autónomo, o consigue sus copias de escritorio y móvil una junto a otra.',
      },
    ],
  },

  // The long-form article on the home page (written for search engines and for readers).
  guide: {
    title: 'Descargar página web gratis: guarda cualquier página en un ZIP',
    tocTitle: 'En esta página',
    tocLabel: 'Contenido del artículo',
    introHtml: `<p>Este descargador de páginas web copia una página y todo lo que necesita para mostrarse, y te lo entrega en un solo archivo ZIP. Obtienes el HTML, el CSS, el JavaScript, todas las imágenes y todas las fuentes web, organizados en carpetas y enlazados entre sí para que la página se abra en tu propio equipo. No hay nada que instalar ni cuenta que crear: pega una URL, pulsa Guardar y el ZIP se descarga en tu navegador.</p>
<p>Está pensado para las páginas que más se suelen guardar: landing pages, páginas de producto, portafolios, páginas de suscripción por email y webs de una sola página. En lugar de guardar cada archivo a mano desde las herramientas para desarrolladores del navegador, obtienes la página completa en pocos segundos.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'Cómo descargar un sitio web en ZIP',
        html: `<ol>
<li>Abre la página que quieres guardar y copia su dirección de la barra de direcciones del navegador.</li>
<li>Pega la dirección en el campo de la parte superior de esta página. Puedes omitir el <code>https://</code>.</li>
<li>Elige las opciones que necesites, como renombrar los archivos o mantener la estructura de carpetas original del sitio. La vista previa junto al campo muestra cómo se organizará el ZIP.</li>
<li>Pulsa Guardar. Cuando el ZIP esté listo, tu navegador descargará un archivo con el nombre de la web, por ejemplo <code>example.com.zip</code>. Descomprímelo y abre <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'Qué incluye el archivo ZIP',
        html: `<p>El descargador lee el HTML de la página y localiza todos los archivos a los que hace referencia: hojas de estilo, scripts, iconos, imágenes, los tamaños de imagen responsive indicados en <code>srcset</code>, las portadas de los videos, los estilos en línea y las imágenes que solo se cargan al desplazarte por la página. Después abre cada hoja de estilo y sigue sus reglas <code>@import</code> y sus referencias <code>url()</code>; así es como las imágenes de fondo y las fuentes web, incluidas las de Google Fonts, también acaban en el ZIP.</p>
<p>Cada referencia se reescribe para apuntar a la copia guardada, de modo que la página carga sus propios archivos locales en lugar de conectarse al servidor original. Si un archivo no se puede descargar, por ejemplo porque su servidor rechaza las peticiones de otros sitios, el enlace conserva su dirección web original. La página sigue cargando ese archivo mientras tienes conexión, y nada se rompe sin que te des cuenta.</p>
<p>Cada ZIP incluye además <code>archive-report.html</code>, un informe fácil de leer con lo que se guardó, qué archivos no se pudieron guardar y por qué, y qué parte de la página funciona ahora sin conexión. También enumera los colores de la página, sus fuentes y sus licencias, el peso de la página por tipo de archivo, las herramientas con las que está hecha y sus etiquetas para buscadores y redes sociales.</p>`,
      },
      {
        id: 'save-page-as',
        heading: '¿Por qué no usar «Guardar página como»?',
        html: `<p>Los navegadores pueden guardar una página, pero el resultado suele quedar incompleto. Al guardarla como página «completa», normalmente se meten todos los archivos en una sola carpeta con nombres largos generados automáticamente, y a menudo se pierden las fuentes y las imágenes de fondo que cargan las hojas de estilo, además de las imágenes que solo aparecen al desplazarte. Guardarla como un único archivo MHTML es más ordenado, pero otros navegadores y editores de código no siempre pueden abrirlo. Un descargador de páginas web sigue cada hoja de estilo hasta sus fuentes y fondos, y te da un archivo ZIP estándar que se abre en cualquier sitio, con la organización de carpetas que elijas.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Descargar una landing page para estudiarla, probarla o rehacerla',
        html: `<p>Los marketers y afiliados guardan landing pages para reunir un swipe file de ofertas, titulares y diseños que convierten. Los diseñadores descargan una página para analizar con calma su espaciado, sus colores y su tipografía. Los desarrolladores usan esta herramienta para copiar sitios web: migran una página estática antigua a otro hosting, preparan una maqueta local rápida para un cliente o prueban cambios en una copia sin tocar la web publicada. Las agencias archivan la página de un cliente antes de un rediseño para tener constancia de cómo era.</p>
<p>Como el ZIP contiene archivos normales, puedes abrirlo en cualquier editor de código, cambiar los textos o los estilos y ver el resultado en tu navegador al momento.</p>`,
      },
      {
        id: 'options',
        heading: 'Elige las opciones adecuadas',
        html: `<p><strong>Copia limpia</strong> elimina las etiquetas de analítica y publicidad, los grabadores de sesiones y los banners de consentimiento de cookies, además de las redirecciones automáticas. Los scripts propios de la página se mantienen, así que los sliders y los menús siguen funcionando, pero la copia guardada ya no informa de las visitas a nadie ni tapa el diseño con un banner.</p>
<p><strong>Descarga simplificada</strong> elimina todo el JavaScript y conserva una instantánea estática del HTML, el CSS, las imágenes y las fuentes. Las imágenes que normalmente esperan a un script para cargarse pasan a cargarse de inmediato, así que siguen apareciendo. Es la mejor opción si solo te interesa el diseño.</p>
<p><strong>Renombrar todos los archivos</strong> sustituye los nombres de archivo largos y con hash por otros cortos, como <code>style-1.css</code> o <code>image-4.webp</code>. Actívala si vas a editar la página y quieres un proyecto ordenado.</p>
<p><strong>Guardar estructura del sitio</strong> mantiene las rutas de carpetas que usa el propio sitio, como <code>assets/css/main.css</code>, en lugar de agrupar los archivos por tipo. Los archivos alojados en otros dominios van a una carpeta <code>external</code> con el nombre de su servidor.</p>
<p><strong>Versión</strong> elige qué copia de la página obtienes. «Móvil» solicita la página como lo hace un iPhone; algunos sitios envían a los móviles un diseño distinto, imágenes más pequeñas u otro contenido. «Ambas» guarda las copias de escritorio y móvil una junto a otra en un solo ZIP.</p>
<p><strong>Guardar como</strong> «Un solo archivo HTML» mete todas las imágenes, fuentes, hojas de estilo y scripts en un único archivo <code>.html</code>. Ocupa más que un ZIP, pero no hay nada que descomprimir y es fácil de guardar, adjuntar a un correo o abrir en otro equipo.</p>
<p>En <strong>Personaliza tu descarga</strong>, <strong>Formatear código</strong> indenta el HTML, el CSS y el JavaScript minificados para que el código se lea con facilidad, y <strong>Elegir archivos antes</strong> muestra los archivos del ZIP antes de que se descargue nada, para que puedas dejar fuera videos o imágenes grandes que no necesites.</p>`,
      },
      {
        id: 'offline',
        heading: 'Descargar un sitio web para usarlo sin conexión',
        html: `<p>Una página descargada se abre sin conexión a internet siempre que se hayan guardado sus archivos. Una copia sin conexión es útil para presentaciones, para revisar una página durante un vuelo y para conservar una página que puede cambiar o desaparecer.</p>
<ol>
<li>Pega la dirección de la página en la parte superior y pulsa <strong>Guardar</strong>.</li>
<li>Descomprime el archivo en una carpeta de tu ordenador.</li>
<li>Abre <code>index.html</code> en cualquier navegador. Las imágenes, los estilos y las fuentes se cargan desde las carpetas que hay a su lado, así que la página funciona sin conexión.</li>
</ol>
<p>Para navegar por más de una página sin conexión, cambia a <strong>Varias páginas</strong> y añade hasta 20 direcciones, o pulsa <strong>Buscar páginas en este sitio</strong> para elegirlas entre los enlaces y el sitemap del propio sitio. Van a un solo archivo, los archivos que comparten se guardan una vez y los enlaces entre las páginas guardadas abren las copias locales. Los enlaces a páginas que no guardaste siguen apuntando al sitio web real, y el informe del archivo muestra qué parte de cada página funciona sin conexión.</p>`,
      },
      {
        id: 'limits',
        heading: 'Qué no puede copiar un descargador de páginas web',
        html: `<p>Cualquier herramienta para copiar webs solo puede guardar lo que el servidor envía al navegador. El código del lado del servidor, como PHP, las bases de datos, las API y los sistemas de pago, nunca sale del servidor web, así que no se incluye. Las páginas que requieren iniciar sesión no son accesibles. Los sitios que generan su contenido con JavaScript después de cargar la página, algo habitual en las aplicaciones de una sola página, pueden guardarse como una estructura vacía. Los formularios de una página guardada se siguen enviando a la web original.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Usa las webs descargadas con responsabilidad',
        html: `<p>Descargar una página no te da ningún derecho sobre ella. Los textos, las imágenes, el código y las fuentes siguen perteneciendo a sus propietarios. Guarda páginas para aprender de ellas, para hacer copias de seguridad de tu propio trabajo o con permiso del propietario, y revisa la licencia de cualquier fuente o imagen antes de reutilizarla. No vuelvas a publicar un sitio copiado como si fuera tuyo.</p>`,
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    leadHtml: '¿Tienes otra duda? <a href="{contactUrl}">Escríbenos</a> y te responderemos.',
    items: [
      {
        question: '¿Qué es un descargador de páginas web?',
        answer:
          'Un descargador de páginas web es una herramienta que copia una página y todos los archivos que necesita para mostrarse: el HTML, las hojas de estilo, los scripts, las imágenes y las fuentes. Este los empaqueta en un único archivo ZIP que puedes abrir en tu equipo, con todos los enlaces reescritos para que la página funcione con los archivos locales.',
      },
      {
        question: '¿Este descargador de páginas web es gratis?',
        answer:
          'Sí. Es gratis, sin cuenta, sin registro y sin programas que instalar. Pega una URL, pulsa Guardar y el archivo ZIP se descarga en tu navegador.',
      },
      {
        question: '¿Cómo descargar una página web en un archivo ZIP?',
        answer:
          'Copia la dirección de la página que quieres, pégala en el campo de la parte superior de esta página y pulsa Guardar. Antes, elige las opciones que necesites, como «Renombrar todos los archivos» o «Guardar estructura del sitio». Cuando el ZIP esté listo, tu navegador lo descargará como un archivo .zip con el nombre de la web.',
      },
      {
        question: '¿Puedo descargar una web completa con todas sus páginas?',
        answer:
          'Puedes guardar hasta 20 páginas de un sitio en un solo ZIP. Cambia a «Varias páginas» y pega las direcciones o pulsa «Buscar páginas en este sitio» para elegirlas entre los enlaces y el sitemap del sitio. Los archivos que comparten las páginas se guardan una sola vez, y los enlaces entre las páginas guardadas funcionan sin conexión. Los enlaces a páginas que no guardaste siguen apuntando a la web original.',
      },
      {
        question: '¿Puedo descargar el código fuente de una web?',
        answer:
          'Obtienes el código fuente del front-end: el HTML, el CSS y el JavaScript que recibe tu navegador, además de las imágenes y las fuentes. El código del lado del servidor, como PHP, las bases de datos, las API y la lógica del back-end, nunca sale del servidor web, así que ningún descargador de páginas web puede copiarlo.',
      },
      {
        question: '¿Puedo descargar una landing page con sus imágenes y su CSS?',
        answer:
          'Sí. Las landing pages son lo que mejor se le da a esta herramienta. Guarda el código de la página, todas las hojas de estilo y los archivos que estas importan, las imágenes de fondo, los tamaños de imagen responsive de srcset, las imágenes con carga diferida y las fuentes web, incluidas las de Google Fonts.',
      },
      {
        question: '¿Puedo descargar todas las imágenes de un sitio web?',
        answer:
          'Sí, las de las páginas que guardes. El archivo incluye todas las imágenes que usan esas páginas: imágenes normales, tamaños adaptables de srcset, iconos SVG, imágenes de fondo de CSS e imágenes con carga diferida. Activa «Elegir archivos antes» para ver la lista antes de la descarga y quedarte solo con los archivos que quieras.',
      },
      {
        question: '¿Cómo descargo un sitio web para usarlo sin conexión?',
        answer:
          'Pega la dirección de la página en la parte superior, pulsa Guardar y descomprime el archivo. Abre index.html y la página se carga desde los archivos guardados, sin necesidad de conexión a internet. Para guardar varias páginas, cambia a «Varias páginas» y añade hasta 20 direcciones; los enlaces entre las páginas guardadas también funcionarán sin conexión.',
      },
      {
        question: '¿Cómo abro una web después de descargarla?',
        answer:
          'Descomprime el ZIP y abre index.html en cualquier navegador. Las imágenes, los estilos y las fuentes se cargan desde las carpetas que hay junto a él. Para editar la página, abre la carpeta en un editor de código como VS Code.',
      },
      {
        question: '¿Por qué la página descargada se ve distinta de la original?',
        answer:
          'Algunos sitios generan su contenido con JavaScript después de cargar la página, o cargan archivos desde servidores que bloquean a otras webs. El descargador guarda la página tal como la envía el servidor en un primer momento, así que puede faltar el contenido que solo aparece cuando se ejecutan los scripts. Los archivos que no se pudieron descargar conservan su dirección web original, así que siguen cargándose mientras tengas conexión, y el informe del ZIP indica cada uno con el motivo.',
      },
      {
        question: '¿Puedo descargar la versión móvil de una web?',
        answer:
          'Sí. Elige «Móvil» en «Versión» antes de pulsar Guardar. La página y sus archivos se solicitan entonces como lo haría el navegador de un iPhone, así que los sitios que ofrecen un diseño móvil distinto envían esa versión. Elige «Ambas» para obtener las copias de escritorio y móvil en un solo ZIP.',
      },
      {
        question: '¿Qué hace «Descarga simplificada»?',
        answer:
          'Elimina todo el JavaScript de la página guardada y deja una instantánea estática del HTML, el CSS, las imágenes y las fuentes. Las imágenes con carga diferida pasan a cargarse de forma normal para que sigan apareciendo sin scripts. Úsala cuando solo necesites la maquetación y el diseño.',
      },
      {
        question: '¿Qué elimina «Copia limpia»?',
        answer:
          'Etiquetas de analítica y publicidad como Google Analytics, Google Tag Manager y el píxel de Meta, grabadores de sesiones como Hotjar y Microsoft Clarity, banners de consentimiento de cookies como OneTrust y Cookiebot, y redirecciones automáticas. Los scripts propios de la página se mantienen. El informe del ZIP enumera todo lo que se eliminó.',
      },
      {
        question: '¿Puedo guardar una página web en un solo archivo HTML?',
        answer:
          'Sí. Elige «Un solo archivo HTML» en «Guardar como». Todas las imágenes, fuentes, hojas de estilo y scripts se guardan dentro de un único archivo .html que se abre en cualquier navegador, sin nada que descomprimir.',
      },
      {
        question: '¿Qué incluye el informe del ZIP?',
        answer:
          'Cada ZIP incluye archive-report.html. Muestra qué parte de la página se guardó para usarla sin conexión, enumera cada archivo que no se pudo guardar y el motivo, y describe la página: sus colores, sus fuentes y sus licencias, el peso de la página por tipo de archivo, las herramientas con las que está hecha y sus etiquetas para buscadores y redes sociales. Los mismos datos aparecen en esta página después de cada descarga.',
      },
      {
        question: '¿Hay un límite de tamaño?',
        answer:
          'Una sola página puede incluir hasta 400 archivos, y varias páginas hasta 1000 entre todas. Cada archivo puede ocupar hasta 25 MB, con un máximo de 30 MB por ZIP y 20 páginas a la vez. Una descarga se detiene tras unos 90 segundos, o 150 segundos si son varias páginas o ambas versiones; los archivos que no se hayan guardado para entonces siguen enlazando a la web original y aparecen en el informe del ZIP.',
      },
      {
        question: '¿En qué se diferencia de HTTrack y otros copiadores de sitios web?',
        answer:
          'HTTrack y Cyotek WebCopy son programas de escritorio: los instalas y recorren un sitio desde tu ordenador siguiendo sus enlaces. Este descargador de páginas web funciona en el navegador, sin instalar nada. Guarda las páginas que elijas, hasta 20 a la vez, en un solo ZIP con un informe, y puede quitar rastreadores y avisos de cookies por el camino. Para replicar un sitio grande con miles de páginas, un rastreador de escritorio es mejor opción.',
      },
      {
        question: '¿Es legal descargar una página web?',
        answer:
          'Guardar una página para estudio personal, pruebas o archivo suele estar bien, pero los textos, las imágenes, el código y las fuentes siguen perteneciendo a sus propietarios. No vuelvas a publicar una web descargada ni uses su contenido con fines comerciales sin permiso, y revisa la licencia de las fuentes o imágenes antes de reutilizarlas.',
      },
      {
        question: '¿Se guardan las webs que descargo?',
        answer:
          'No. Cada ZIP se crea en memoria para tu solicitud y se envía directamente a tu navegador. No guardamos ninguna copia de las páginas que descargas ni de los archivos que contienen.',
      },
    ],
  },

  cta: {
    title: 'Tu próxima página, a un copiar y pegar',
    text: 'Gratis, sin registro y el ZIP se abre en cualquier navegador.',
    button: 'Guardar una web',
  },

  about: {
    title: 'Sobre nosotros – Descargador web gratis',
    heading: 'Sobre {name}',
    description:
      'Conoce {name}, el descargador web gratis y online: por qué lo creamos, quién lo usa y cómo guarda una web en ZIP con su HTML, CSS, imágenes y fuentes.',
    lead: 'Creamos una herramienta gratuita que guarda cualquier página web pública, con todo lo que necesita para mostrarse, en un único archivo ZIP que puedes abrir sin conexión.',
    bodyHtml: `<h2>Qué hace {name}</h2>
<p>{name} es un <a href="{homeUrl}">descargador de páginas web online</a> y gratuito. Pega la dirección de una página web y la herramienta reúne el HTML de la página junto con todas las hojas de estilo, scripts, imágenes y fuentes que usa, reescribe los enlaces para que apunten a los archivos guardados y te entrega un único archivo ZIP. Descomprímelo, abre <code>index.html</code> y la página se carga en tu navegador sin conexión a internet.</p>
<p>No hay nada que instalar ni cuenta que crear. Funciona en cualquier navegador moderno, en Windows, macOS, Linux, Android e iOS.</p>
<h2>Por qué lo creamos</h2>
<p>Guardar una página web debería ser sencillo, pero rara vez lo es. La opción «Guardar página como» del navegador a menudo pierde las fuentes web, las imágenes de fondo de CSS, los tamaños de imagen responsive y los archivos que importa una hoja de estilo, así que la copia se ve rota cuando la abres más tarde. Reunirlo todo a mano desde las herramientas para desarrolladores lleva mucho tiempo y es fácil equivocarse. Queríamos un solo paso que hiciera todo el trabajo: pegar una URL, pulsar Guardar y obtener un ZIP ordenado que se vea como el original.</p>
<h2>Quién usa {name}</h2>
<ul>
<li><strong>Los marketers y afiliados</strong> guardan copias de las landing pages de las que quieren aprender, y hacen copias de seguridad de sus propias páginas antes de un rediseño.</li>
<li><strong>Los diseñadores</strong> guardan páginas para estudiar su maquetación, sus colores y su tipografía, y usan el informe del ZIP para ver qué fuentes y colores usa una página.</li>
<li><strong>Los desarrolladores</strong> migran páginas estáticas antiguas a otro hosting, preparan demos sin conexión y prueban cambios en una copia local en lugar de en la web publicada.</li>
<li><strong>Los estudiantes y profesores</strong> descargan páginas reales para aprender cómo encajan el HTML, el CSS y el JavaScript.</li>
<li><strong>Los investigadores y archivistas</strong> conservan un registro de una página antes de que cambie o desaparezca.</li>
</ul>
<h2>Qué puedes guardar</h2>
<p>Cada descarga incluye la página y los archivos que necesita para mostrarse. Las opciones te permiten adaptar el ZIP a lo que necesites:</p>
<ul>
<li>Guarda hasta 20 páginas de un sitio en un solo ZIP, con los enlaces entre ellas funcionando sin conexión.</li>
<li>Descarga la versión móvil de un sitio web, o las versiones de escritorio y móvil una junto a otra.</li>
<li>Guarda una página como un único archivo HTML autónomo en lugar de un ZIP.</li>
<li>Haz una copia limpia sin etiquetas de analítica, scripts publicitarios ni banners de cookies.</li>
<li>Mantén la estructura de carpetas original del sitio, o da a cada archivo un nombre corto y ordenado.</li>
</ul>
<p>Cada ZIP incluye además un informe que enumera todos los archivos guardados, lo que no se pudo guardar y por qué, y un análisis de la página con sus colores, sus fuentes y su peso. Consulta <a href="{homeUrl}#whats-saved">qué se guarda en una descarga</a> para ver la lista completa.</p>
<h2>Cómo funciona</h2>
<p>Cuando envías una dirección, nuestro servidor solicita la página, localiza todas las hojas de estilo, scripts, imágenes y fuentes que usa, los descarga y reescribe la página para que apunte a las copias guardadas. El ZIP se crea en memoria para tu solicitud y se envía directamente a tu navegador. No guardamos ninguna copia de la página ni del ZIP. La <a href="{homeUrl}#how-it-works">guía paso a paso</a> muestra el proceso de principio a fin.</p>
<h2>Nuestros principios</h2>
<ul>
<li><strong>De uso gratuito.</strong> Sin cuenta, sin registro y sin programas que instalar.</li>
<li><strong>Privado por defecto.</strong> No guardamos las páginas que descargas ni los archivos que contienen. Nuestra <a href="{privacyUrl}">política de privacidad</a> explica exactamente qué recopilamos.</li>
<li><strong>Resultados honestos.</strong> Si un archivo no se puede guardar, el informe del ZIP lo indica y explica por qué, para que nunca descubras más tarde una página rota.</li>
<li><strong>Respeto por los creadores.</strong> Descargar una página no te da derechos sobre ella. Nuestros <a href="{termsUrl}">términos y condiciones</a> te piden que guardes solo lo que tienes permiso para usar.</li>
</ul>
<h2>Ponte en contacto</h2>
<p>¿Alguna página no se guarda bien o tienes una idea para una nueva función? Muchas preguntas habituales tienen respuesta en nuestras <a href="{homeUrl}#faq">preguntas frecuentes</a>. Para cualquier otra cosa, <a href="{contactUrl}">contacta con nosotros</a>. Leemos todos los mensajes.</p>`,
  },

  contact: {
    title: 'Contacto – Soporte del descargador web',
    heading: 'Contacta con nosotros',
    description:
      'Contacta con {name}: ayuda con el descargador web, páginas que no se guardaron, ideas de funciones y solicitudes de derechos de autor o privacidad.',
    lead: 'Las preguntas, los informes de errores, las ideas de funciones, los avisos de derechos de autor y las solicitudes de privacidad llegan a la misma bandeja de entrada, y leemos todos los mensajes.',
    bodyHtml: `<h2>En qué podemos ayudarte</h2>
<ul>
<li><strong>Ayuda con una descarga.</strong> Una página no se guardó, se ve distinta sin conexión o se detuvo a medias.</li>
<li><strong>Informes de errores.</strong> Algo del sitio no funciona como debería.</li>
<li><strong>Ideas de funciones.</strong> Una opción que te gustaría que tuviera el descargador de páginas web.</li>
<li><strong>Avisos de derechos de autor y abusos.</strong> Crees que el servicio se está usando para copiar tu contenido sin permiso.</li>
<li><strong>Solicitudes de privacidad.</strong> Quieres saber qué datos tenemos sobre ti o pedirnos que los eliminemos.</li>
<li><strong>Colaboraciones y prensa.</strong> Te gustaría trabajar con nosotros o escribir sobre {name}.</li>
</ul>
<h2>Antes de escribirnos</h2>
<p>Muchas dudas, por ejemplo cómo descargar un sitio web completo, cómo guardar la versión móvil o cómo abrir una web después de descargarla, tienen respuesta en nuestras <a href="{homeUrl}#faq">preguntas frecuentes</a>. Suele ser la forma más rápida de encontrar una respuesta.</p>
<h2>Informar de una página que no se guardó bien</h2>
<p>Para ayudarnos a solucionarlo rápido, incluye:</p>
<ul>
<li>La dirección de la página que intentaste guardar.</li>
<li>Las opciones que tenías activadas.</li>
<li>El mensaje que apareció bajo el botón Guardar, si hubo alguno.</li>
<li>Qué se ve mal al abrir la página guardada.</li>
<li>Si lo tienes, el archivo <code>archive-report.html</code> que hay dentro del ZIP. Enumera cada archivo que no se pudo guardar y el motivo.</li>
</ul>
<h2>Avisos de derechos de autor y abusos</h2>
<p>{name} no aloja las páginas que guarda la gente: cada ZIP se crea para una sola solicitud y nunca se almacena en nuestros servidores. Si crees que el servicio se está usando para copiar tu contenido de una forma que infringe tus derechos, envíanos un correo electrónico con la dirección de tu página, una descripción del problema y cómo podemos contactarte. Revisamos todos los avisos. Nuestros <a href="{termsUrl}">términos y condiciones</a> indican qué debe incluir un aviso formal.</p>
<h2>Solicitudes de privacidad</h2>
<p>Para preguntar qué información personal tenemos sobre ti, o para que la corrijamos o la eliminemos, escríbenos desde la dirección de correo electrónico a la que se refiere la solicitud. Nuestra <a href="{privacyUrl}">política de privacidad</a> explica qué recopilamos y qué derechos tienes.</p>
<h2>Tiempo de respuesta</h2>
<p>Solemos responder en unos pocos días hábiles.</p>`,
  },

  privacy: {
    title: 'Política de privacidad – Uso de tus datos',
    heading: 'Política de privacidad',
    description:
      'Lee la política de privacidad de {name}: qué recopila el descargador web, qué no guardamos nunca, cookies, servicios de terceros y tus derechos.',
    lead: 'Esta política explica qué información recopila {name} cuando usas este sitio web y su descargador de páginas web, por qué la recopilamos y qué opciones tienes.',
    // The policy is assembled from these parts; the analytics variants depend on whether Google Analytics is on.
    shortHtml: `<h2>En resumen</h2>
<ul>
<li>No necesitas una cuenta, tu nombre ni tu dirección de correo electrónico para usar el descargador de páginas web.</li>
<li>No guardamos las direcciones que envías, las páginas que obtenemos para ti ni los archivos ZIP que creamos.</li>
<li>No vendemos tu información personal ni la usamos con fines publicitarios.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'Usamos Google Analytics para contar las visitas y entender cómo se usa el sitio.',
    analyticsSummaryOff: 'No usamos cookies publicitarias ni de analítica.',
    givenHtml: `<h2>Quiénes somos</h2>
<p>{name} («nosotros») gestiona este sitio web y el descargador de páginas web que contiene, y es responsable de la información personal descrita en esta política. Puedes contactarnos en <a href="mailto:{email}">{email}</a>.</p>
<h2>Información que nos das</h2>
<p><strong>Direcciones web y opciones.</strong> Cuando pulsas Guardar, las direcciones que escribiste y las opciones que elegiste se envían a nuestro servidor para que pueda obtener esas páginas. Cuando nos pides que busquemos páginas en un sitio, se envía su dirección para que podamos enumerarlas. Las direcciones solo se usan para completar tu solicitud. El archivo ZIP se crea en memoria, se envía a tu navegador y después se descarta. No guardamos ninguna copia de las páginas ni de sus archivos.</p>
<p><strong>Tu archivo ZIP.</strong> El panel que aparece después de una descarga lee en tu navegador el informe que hay dentro del ZIP. La selección de archivos y el reempaquetado del ZIP también se hacen en tu dispositivo, y no se nos envía nada.</p>
<p><strong>Correos electrónicos.</strong> Si nos escribes a <a href="mailto:{email}">{email}</a>, recibimos tu dirección de correo electrónico y lo que nos escribas. Solo la usamos para responderte y la conservamos únicamente el tiempo necesario para gestionar tu mensaje.</p>
<h2>Información que se recopila automáticamente</h2>
<p>Como la mayoría de los sitios web, nuestro proveedor de hosting registra datos técnicos básicos de cada solicitud, como la dirección IP, el tipo de navegador, la página solicitada y la hora. Estos registros se usan para mantener el servicio en funcionamiento, investigar errores y prevenir abusos, y se eliminan de forma periódica.</p>
<p>Mientras una descarga está en curso, nuestro servidor también usa tu dirección IP para limitar cuántas descargas puede hacer un mismo visitante a la vez. Este recuento se guarda solo en memoria y desaparece en cuanto termina la descarga.</p>
<h2>Cómo usamos la información</h2>
<ul>
<li>Para obtener las páginas que nos pides y crear tu archivo ZIP.</li>
<li>Para responder a tus correos electrónicos y solicitudes.</li>
<li>Para mantener el servicio seguro, fiable y justo para todos, y para prevenir abusos.</li>
<li>Para detectar y corregir errores.</li>
<li>Para cumplir nuestras obligaciones legales.</li>
</ul>
<h2>Bases jurídicas del tratamiento</h2>
<p>Si te encuentras en el Espacio Económico Europeo, el Reino Unido o Suiza, tratamos la información personal porque es necesaria para prestar el servicio que solicitas, por nuestro interés legítimo en ofrecer un servicio seguro y fiable y en prevenir abusos, o para cumplir con la ley.</p>`,
    analyticsHtml: `<h2>Analítica</h2>
<p>Usamos Google Analytics, un servicio de Google LLC, para entender cómo usan el sitio los visitantes, por ejemplo qué páginas ven y cómo llegan a él. Google Analytics instala cookies y trata datos, incluida tu dirección IP, en los servidores de Google, que pueden estar fuera de tu país. Solo consultamos los informes de forma agregada y no los usamos para identificarte. Puedes leer la <a href="https://policies.google.com/privacy">política de privacidad de Google</a> y desactivar el seguimiento con el <a href="https://tools.google.com/dlpage/gaoptout">complemento de inhabilitación para navegadores de Google Analytics</a>.</p>`,
    cookiesTitle: 'Cookies y almacenamiento local',
    cookiesOn:
      'No instalamos cookies propias. Google Analytics instala cookies para distinguir unas visitas de otras. Puedes bloquear o eliminar las cookies en la configuración de tu navegador, y el descargador de páginas web sigue funcionando sin ellas.',
    cookiesOff: 'No instalamos ninguna cookie, y el descargador de páginas web no las necesita para funcionar.',
    restHtml: `<p>Si eliges el tema claro u oscuro, esa preferencia se guarda en el almacenamiento local de tu navegador para que el sitio la recuerde. Nunca sale de tu dispositivo, y se elimina al borrar los datos del navegador.</p>
<h2>Servicios de terceros</h2>
<ul>
<li><strong>Hosting.</strong> Nuestro proveedor de hosting gestiona los servidores en los que funciona este sitio y trata en nuestro nombre los registros de solicitudes descritos anteriormente.</li>
<li><strong>Google Fonts.</strong> El sitio carga sus tipografías desde Google Fonts, así que tu navegador se conecta a los servidores de Google, que reciben tu dirección IP.</li>
</ul>
<h2>Las webs que guardas</h2>
<p>Cuando guardas una página, es nuestro servidor, y no tu navegador, el que se conecta a la web que indicaste y a los servidores que alojan sus archivos. Esas webs ven una solicitud de nuestro servidor, no de tu dirección IP. La solicitud se identifica como un navegador estándar (uno móvil si eliges la versión móvil) y no incluye ninguna de tus cookies ni tu información personal.</p>
<h2>No vendemos tu información</h2>
<p>No vendemos, alquilamos ni intercambiamos información personal, no la compartimos con fines de publicidad dirigida y no creamos perfiles de los visitantes. Solo compartimos información con los proveedores de servicios mencionados en esta política o cuando la ley lo exige.</p>
<h2>Transferencias internacionales</h2>
<p>Nuestros proveedores de servicios pueden tratar información en países distintos de aquel en el que vives, incluidos los Estados Unidos. Cuando la ley lo exige, estas transferencias se basan en garantías adecuadas, como decisiones de adecuación o cláusulas contractuales tipo.</p>
<h2>Cuánto tiempo conservamos la información</h2>
<ul>
<li><strong>Direcciones enviadas y archivos ZIP:</strong> no se guardan. Solo existen mientras se crea tu descarga.</li>
<li><strong>Registros del servidor:</strong> se conservan durante un periodo limitado por motivos de seguridad y para resolver problemas, y después se eliminan.</li>
<li><strong>Correos electrónicos:</strong> se conservan solo el tiempo necesario para responderlos y gestionar cualquier seguimiento.</li>
</ul>
<h2>Seguridad</h2>
<p>Todo el tráfico de este sitio se cifra con HTTPS. Los archivos ZIP se crean en memoria y nunca se guardan en disco, y el descargador de páginas web se niega a acceder a redes privadas y direcciones internas. Ningún método de transmisión o almacenamiento es completamente seguro, pero trabajamos para proteger la poca información que tratamos.</p>
<h2>Privacidad de los menores</h2>
<p>Este servicio no está dirigido a menores de 13 años, y no recopilamos información personal de ellos a sabiendas. Si crees que un menor nos ha enviado información personal, <a href="{contactUrl}">contacta con nosotros</a> y la eliminaremos.</p>
<h2>Tus derechos de privacidad</h2>
<p>Según dónde vivas, puedes tener derecho a:</p>
<ul>
<li>Saber qué información personal tenemos sobre ti y obtener una copia.</li>
<li>Que corrijamos la información inexacta.</li>
<li>Que eliminemos tu información.</li>
<li>Oponerte al uso que hacemos de ella o pedir que lo limitemos.</li>
<li>Recibir tu información en un formato portable.</li>
<li>Presentar una reclamación ante tu autoridad local de protección de datos.</li>
</ul>
<p>Si vives en California o en otro estado de EE. UU. con una ley de privacidad del consumidor, también tienes derecho a saber qué recopilamos, a corregirlo y eliminarlo, y a no recibir un trato diferente por ejercer estos derechos. No vendemos ni compartimos información personal tal como lo definen esas leyes.</p>
<p>Para hacer una solicitud, escribe a <a href="mailto:{email}">{email}</a>. Es posible que primero necesitemos confirmar tu identidad, y responderemos dentro del plazo que permita la ley. Como conservamos tan poca información, a menudo no tenemos ningún dato sobre ti.</p>
<h2>Enlaces a otros sitios web</h2>
<p>Esta política solo se aplica a {name}. Las webs que descargas, y los sitios a los que enlazamos, tienen sus propias políticas de privacidad, y no somos responsables de cómo tratan la información.</p>
<h2>Cambios en esta política</h2>
<p>Si cambiamos esta política, actualizaremos la fecha que aparece al principio de esta página. Los cambios importantes se destacarán en el sitio.</p>
<h2>Contacto</h2>
<p>¿Tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos? Escribe a <a href="mailto:{email}">{email}</a> o usa nuestra <a href="{contactUrl}">página de contacto</a>.</p>`,
  },

  terms: {
    title: 'Términos y condiciones de uso',
    heading: 'Términos y condiciones',
    description:
      'Términos y condiciones de {name}, el descargador web gratis: uso aceptable, derechos de autor, límites, exención de garantías y responsabilidad.',
    lead: 'Estos términos se aplican cuando usas {name} y su descargador de páginas web. Al usar el sitio, los aceptas, así que léelos con atención.',
    bodyHtml: `<h2>Sobre estos términos</h2>
<p>Estos términos y condiciones (los «términos») constituyen un acuerdo entre tú y {name} («nosotros»). Regulan el uso que haces de este sitio web y del descargador de páginas web que contiene (en conjunto, el «servicio»). Si no estás de acuerdo con ellos, no uses el servicio.</p>
<h2>Quién puede usar el servicio</h2>
<p>Debes tener al menos 13 años para usar el servicio. Si no has alcanzado la mayoría de edad en el lugar donde vives, solo puedes usarlo con el permiso de tu padre, tu madre o tu tutor legal. Si usas el servicio en nombre de una empresa u otra organización, confirmas que tienes autoridad para aceptar estos términos en su nombre.</p>
<h2>El servicio</h2>
<p>{name} te permite introducir la dirección de una página web pública y descargar un archivo ZIP que contiene esa página y los archivos que usa, como hojas de estilo, scripts, imágenes y fuentes. También puedes guardar varias páginas a la vez, la versión móvil de una página o un único archivo HTML autónomo. El servicio es gratuito, no requiere cuenta y se ofrece tal cual. Podemos añadir, cambiar o retirar funciones en cualquier momento.</p>
<h2>Uso aceptable</h2>
<p>Te comprometes a usar el servicio solo con fines lícitos. En concreto, te comprometes a no:</p>
<ul>
<li>Descargar, copiar ni volver a publicar contenido que no tengas derecho a usar.</li>
<li>Hacer pasar una web descargada por tuya, ni usarla para suplantar a otra persona o empresa.</li>
<li>Usar páginas descargadas para phishing, fraude, malware o para recopilar información de otras personas.</li>
<li>Intentar acceder a redes privadas, servicios internos o páginas que requieran iniciar sesión.</li>
<li>Enviar solicitudes automatizadas o excesivas que supongan una carga desproporcionada para nuestros servidores o para las webs que descargas.</li>
<li>Intentar vulnerar, sondear o eludir la seguridad o los límites del servicio.</li>
<li>Revender el servicio, u ofrecerlo como parte de otro producto, sin nuestro permiso por escrito.</li>
</ul>
<h2>Derechos de autor y contenido de terceros</h2>
<p>Las webs que descargas pertenecen a sus propietarios. Guardar una página no transfiere ningún derecho sobre sus textos, imágenes, código, fuentes o marcas. Eres responsable de asegurarte de que el uso que haces del material descargado está permitido, por ejemplo para estudio personal, para hacer una copia de seguridad de tu propio sitio o con permiso del propietario. Revisa la licencia de cualquier fuente o imagen antes de reutilizarla.</p>
<p>{name} es una herramienta, no un servicio de alojamiento: cada ZIP se crea para una sola solicitud y no se almacena en nuestros servidores ni lo publicamos nosotros.</p>
<h2>Reclamaciones por derechos de autor</h2>
<p>Si crees que el servicio se está usando para infringir tus derechos de autor u otros derechos, escribe a <a href="mailto:{email}">{email}</a> indicando:</p>
<ul>
<li>Tu nombre y tus datos de contacto.</li>
<li>Una descripción de la obra que crees que se está infringiendo.</li>
<li>La dirección de la página en cuestión.</li>
<li>Una declaración de que crees de buena fe que el uso no está autorizado por el titular, su representante o la ley.</li>
<li>Una declaración de que la información de tu aviso es exacta y de que eres el titular o estás autorizado para actuar en su nombre.</li>
<li>Tu firma física o electrónica.</li>
</ul>
<p>Revisamos todos los avisos y podemos tomar medidas como bloquear las solicitudes a la dirección en cuestión.</p>
<h2>Nuestro contenido y nuestra marca</h2>
<p>El nombre, el logotipo, el diseño del sitio web, los textos y el software de {name} nos pertenecen a nosotros o a nuestros licenciantes. Estos términos no te otorgan ningún derecho a usarlos, salvo para referirte al servicio con exactitud.</p>
<h2>Sitios web de terceros</h2>
<p>Las páginas que descargas, y los enlaces de este sitio, llevan a sitios web que no controlamos. No somos responsables de su contenido, disponibilidad o prácticas, y guardar una página no significa que la respaldemos.</p>
<h2>Límites y disponibilidad</h2>
<p>Para que el servicio siga siendo rápido y justo, cada descarga tiene un límite de páginas y archivos, de tamaño de archivo y de tiempo, y cada visitante solo puede hacer unas pocas descargas a la vez. Podemos cambiar estos límites, bloquear las solicitudes que abusen del servicio, o suspender o cancelar el acceso en cualquier momento, con o sin previo aviso. También podemos interrumpir temporalmente el servicio por mantenimiento o dejar de ofrecerlo.</p>
<h2>Sin garantía</h2>
<p>El servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluidas las garantías de comerciabilidad, idoneidad para un fin determinado y no infracción. No garantizamos que todas las páginas se descarguen por completo ni que se vean igual que el original, ni que el servicio funcione sin interrupciones, de forma segura o sin errores.</p>
<h2>Limitación de responsabilidad</h2>
<p>En la máxima medida permitida por la ley, {name} no será responsable de ningún daño indirecto, incidental, especial o consecuente, ni de ninguna pérdida de datos, beneficios o negocio, derivados del uso que hagas del servicio o de cualquier contenido que descargues con él. Algunas jurisdicciones no permiten estas limitaciones, por lo que es posible que algunas no se apliquen en tu caso.</p>
<h2>Indemnización</h2>
<p>Te comprometes a defender e indemnizar a {name} frente a cualquier reclamación, pérdida o gasto, incluidos los honorarios legales razonables, que se deriven del uso indebido que hagas del servicio o del incumplimiento de estos términos.</p>
<h2>Disposiciones generales</h2>
<p>Si alguna parte de estos términos se considera inaplicable, el resto seguirá en vigor. Si no exigimos el cumplimiento de un término de inmediato, no renunciamos al derecho a exigirlo más adelante. Estos términos, junto con nuestra <a href="{privacyUrl}">política de privacidad</a>, constituyen el acuerdo completo entre tú y nosotros en relación con el servicio.</p>
<h2>Cambios en estos términos</h2>
<p>Podemos actualizar estos términos de vez en cuando. La fecha que aparece al principio de esta página indica cuándo se modificaron por última vez. Si sigues usando el servicio después de un cambio, aceptas los términos actualizados.</p>
<h2>Contacto</h2>
<p>¿Tienes preguntas sobre estos términos? Escribe a <a href="mailto:{email}">{email}</a> o usa nuestra <a href="{contactUrl}">página de contacto</a>.</p>`,
  },

  notFound: {
    title: 'Página no encontrada',
    description: 'Esta página no existe.',
    heading: 'Esta página no existe',
    text: 'Puede que el enlace esté roto o que la página se haya movido. Revisa la dirección o vuelve al descargador.',
    button: 'Ir al descargador de páginas web',
  },

  serverError: {
    title: 'Algo salió mal',
    description: 'Se produjo un error inesperado por nuestra parte.',
    heading: 'Algo salió mal por nuestra parte',
    textHtml:
      'El servidor encontró un error inesperado al cargar esta página. Vuelve a intentarlo en un momento. Si sigue ocurriendo, <a href="{contactUrl}">avísanos</a>.',
    button: 'Ir al descargador de páginas web',
  },
};

export default es;
