// English source strings. Every other locale file mirrors this shape exactly (enforced by the Dict type).
//
// Conventions for translators:
// - {placeholders} are filled in at runtime: keep them exactly as written.
// - Fields ending in "Html" contain HTML. Keep every tag and attribute; translate only the text.
//   Hrefs use placeholders ({contactUrl}, {termsUrl}, {privacyUrl}, {email}) so each language links to its own pages.
// - Don't translate the brand name, file names, code, or anything inside <code>.
// - Plural objects use Intl.PluralRules categories; "other" is required, "one" is optional.

const en = {
  meta: {
    homeTitle: 'Free Online Website Downloader – Save Any Website as ZIP',
    homeDescription:
      'Free online website downloader. Enter a URL to download a website as a ZIP with its HTML, CSS, JavaScript, images and fonts, ready for offline browsing.',
    ogImageAlt: 'Online website downloader: save a website as a ZIP with its HTML, CSS, JavaScript, images and fonts',
    appFeatures: [
      'Download a website as a ZIP archive for offline browsing',
      'Saves HTML, CSS, JavaScript, images and fonts',
      'Rename all assets',
      'Copy the mobile version of a website',
      'Simplified download without JavaScript',
      'Keep the original website folder structure',
      'Clean copy without trackers, ads or cookie banners',
      'Save a page as one self-contained HTML file',
      'Download several pages, or the desktop and mobile versions, in one archive',
      'Archive report with page insights: colours, fonts, page weight and tech',
    ],
  },

  common: {
    skipToContent: 'Skip to content',
    languageMenuLabel: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    lastUpdated: 'Last updated {date}',
  },

  nav: {
    howItWorks: 'How it works',
    whatsSaved: 'What’s saved',
    faq: 'FAQ',
    cta: 'Save a website',
    mainLabel: 'Main',
    footerLabel: 'Footer',
  },

  footer: {
    tagline: 'Free website downloader. Only save pages you have the right to copy.',
    about: 'About us',
    contact: 'Contact us',
    privacy: 'Privacy policy',
    terms: 'Terms and conditions',
    languages: 'Languages',
  },

  hero: {
    title: 'Save a website to ZIP.',
    // Second line of the headline, set in the logo's blue.
    titleAccent: 'Keep every detail.',
    lead: 'A free online website downloader. Paste a URL and get the page’s HTML, CSS, JavaScript, images and fonts in one ZIP, ready to browse offline.',
    fieldLabel: 'Web page address',
    placeholder: 'e.g. example.com/landing-page…',
    save: 'Save',
    saving: 'Saving…',
    modeLegend: 'What to save',
    modes: { single: 'One page', multi: 'Several pages' },
    multiFieldLabel: 'Page addresses',
    multiPlaceholder: 'One address per line, up to {max}',
    findPages: 'Find pages on this site',
    findingPages: 'Looking for pages…',
    pagesFound: { one: '{count} page found', other: '{count} pages found' },
    noPagesFound: 'No other pages were found on {host}. Add addresses yourself, one per line.',
    addPages: 'Add selected pages',
    selectAll: 'Select all',
    clearSelection: 'Clear',
    deviceLegend: 'Version',
    devices: { desktop: 'Desktop', mobile: 'Mobile', both: 'Both' },
    outputLegend: 'Save as',
    outputs: { zip: 'ZIP archive', single: 'Single HTML file' },
    optionsLegend: 'Download options',
    moreOptions: 'Customize your download',
    tryExample: 'Try an example',
    options: {
      cleanCopy: { title: 'Clean copy', hint: 'Remove trackers, ads and cookie banners' },
      simplified: { title: 'Simplified download', hint: 'Leave out JavaScript' },
      renameAssets: { title: 'Rename all assets', hint: 'Short, tidy names like image-1.jpg' },
      keepStructure: { title: 'Save website structure', hint: 'Keep the original folder paths' },
      prettify: { title: 'Prettify code', hint: 'Indent minified HTML, CSS and JavaScript' },
      pickFiles: { title: 'Choose files first', hint: 'Review the archive before it downloads' },
    },
    // The illustration next to the form: a made-up website, and a status badge that follows the download.
    scene: {
      nav: ['Home', 'About', 'Work', 'Contact'],
      pageTitle: 'A cleaner, brighter web',
      idleTitle: 'Ready to save',
      idleNote: 'All assets included',
      workingTitle: 'Packing files',
      workingNote: 'Collecting every asset',
      doneTitle: 'Saved',
      doneNote: 'Archive ready',
    },
  },

  // Messages shown under the Save button while and after downloading.
  status: {
    downloading: 'Downloading {host}. Large pages can take up to a minute.',
    saved: 'Saved {filename} with {files}.',
    files: { one: '{count} file', other: '{count} files' },
    missed: {
      one: '{count} file couldn’t be downloaded and still links to the live site.',
      other: '{count} files couldn’t be downloaded and still link to the live site.',
    },
    ready: 'Ready: {files}. Choose what to keep, then download.',
    serverUnreachable: 'The server couldn’t be reached. Check your connection and try again.',
    failed: 'The archive couldn’t be created. Try again.',
  },

  // Errors explained to the visitor. Sent by the server in the visitor's language.
  errors: {
    emptyUrl: 'Enter the address of the page you want to save.',
    invalidUrl: '“{input}” isn’t a valid web address. Try something like example.com.',
    protocol: 'Only http:// and https:// addresses can be saved.',
    credentials: 'Remove the username and password from the address and try again.',
    localAddress: 'Local and internal addresses can’t be saved.',
    privateAddress: 'Private network addresses can’t be saved.',
    notPublicDomain: '“{host}” isn’t a public domain. Include the full domain, like example.com.',
    privateNetwork: 'That address points to a private network and can’t be saved.',
    notFound: 'We couldn’t find {host}. Check the spelling of the address.',
    timeout: '{host} took too long to respond. Try again in a moment.',
    unreachable: '{host} couldn’t be reached. Check the address and try again.',
    httpError: '{host} answered with error {status}, so there’s nothing to save.',
    notHtml: 'That address returns a file, not a web page. Enter the address of a page instead.',
    badRequest: 'The request was malformed. Reload the page and try again.',
    internal: 'Something went wrong while building the archive. Try again, or try a different page.',
    tooManyPages: 'Add up to {max} pages at a time.',
    busy: 'You already have downloads running. Wait for them to finish, then try again.',
  },

  // The panel that opens under the hero once an archive is ready.
  result: {
    title: 'Your archive',
    downloadAgain: 'Download again',
    downloadSelected: 'Download selected',
    selection: '{files} selected, {size}',
    score: 'saved for offline use',
    scoreHint: 'Share of the page’s files saved inside the archive. Anything else still loads from the live site.',
    saved: { one: '{count} file saved', other: '{count} files saved' },
    failed: { one: '{count} file couldn’t be saved', other: '{count} files couldn’t be saved' },
    pages: { one: '{count} page', other: '{count} pages' },
    removed: { one: '{count} item removed', other: '{count} items removed' },
    liveLinks: {
      one: '{count} link to another page still opens the live site.',
      other: '{count} links to other pages still open the live site.',
    },
    tabs: { files: 'Files', problems: 'Problems', insights: 'Insights' },
    filesHint: 'Untick files you don’t need. Anything that used them will load them from the live site instead.',
    singleHint: 'A single HTML file keeps everything inside it, so there are no separate files to choose.',
    noProblems: 'Every file was saved.',
    moreProblems: { one: 'And {count} more.', other: 'And {count} more.' },
    removedTitle: 'Removed by Clean copy',
    removedKinds: { tracker: 'Trackers and tags', consent: 'Cookie banners', redirect: 'Automatic redirects' },
    kinds: { html: 'Page', css: 'CSS', js: 'JavaScript', image: 'Image', font: 'Font', media: 'Media', other: 'File' },
    reasons: {
      http: 'The server answered with error {status}',
      timeout: 'Took too long to download',
      tooLarge: 'Bigger than the {size} limit per file',
      notAsset: 'Returned a web page instead of a file',
      blocked: 'Points to a private or blocked address',
      network: 'Couldn’t be reached',
      deadline: 'Skipped: the time limit for one download was reached',
      archiveFull: 'Skipped: the archive reached its size limit',
      limit: 'Skipped: the page uses more than {max} files',
    },
    insights: {
      colors: 'Colours',
      neutrals: 'Neutrals',
      cssVariables: { one: '{count} CSS variable', other: '{count} CSS variables' },
      copyColor: 'Copy {hex}',
      copied: 'Copied {hex}',
      fonts: 'Fonts',
      licenses: {
        google: 'Google Fonts: free to use (Open Font License)',
        adobe: 'Adobe Fonts: licensed, not free to reuse',
        unknown: 'Check the licence before you reuse it',
        system: 'System font: comes with the device, not with the page',
      },
      weight: 'Page weight',
      tech: 'Built with',
      techCategories: {
        cms: 'Site builders and CMS',
        framework: 'Frameworks',
        library: 'Libraries and services',
        analytics: 'Analytics and ads',
        consent: 'Cookie consent',
      },
      seo: 'Search and sharing',
      seoItems: {
        title: 'Title',
        description: 'Description',
        canonical: 'Canonical address',
        lang: 'Language',
        h1: 'Main heading',
        ogImage: 'Sharing image',
        twitterCard: 'X (Twitter) card',
        robots: 'Robots',
        structuredData: 'Structured data',
        alt: 'Images without alt text',
      },
      length: { one: '{count} character', other: '{count} characters' },
      missing: 'Missing',
      none: 'None found',
      altSummary: '{missing} of {total}',
    },
  },

  // archive-report.html inside every archive, and the version chooser when it holds desktop and mobile.
  report: {
    title: 'Archive report: {host}',
    savedFrom: 'Saved from {url} on {date}.',
    options: 'Options',
    optionsNone: 'None',
    files: 'Files in this archive',
    columns: { file: 'File', from: 'Original address', size: 'Size' },
    problems: 'Not in this archive',
    chooserTitle: 'Choose a version of {host}',
    chooserText: 'This archive holds two copies of the page: the one desktop browsers get and the one phones get.',
  },

  // "Save from any tab" bookmarklet on the home page.
  bookmarklet: {
    title: 'Save any page from your browser',
    text: 'Drag the button to your bookmarks bar. On any web page, click the bookmark to open {name} with that page’s address filled in.',
    button: 'Save with {name}',
    dragHint: 'Drag this button to your bookmarks bar.',
  },

  steps: {
    title: 'How it works',
    lead: 'Three steps, no account. Most pages are ready in a few seconds.',
    items: [
      {
        title: 'Paste the page address',
        text: 'Copy the URL from your browser’s address bar. You can leave out the https://.',
      },
      {
        title: 'Choose your options',
        text: 'Remove trackers, save the mobile version, leave out JavaScript or keep everything in one HTML file.',
      },
      {
        title: 'Unzip and open index.html',
        text: 'The ZIP downloads straight away. Open the page in any browser, or edit it in your code editor.',
      },
    ],
  },

  features: {
    title: 'Download HTML, CSS, JavaScript, images and fonts',
    lead: 'Every file a page needs to display, in one ZIP. Save a single landing page or up to 20 pages of a site: paste the URL in the box above and select Save.',
    html: { title: 'HTML', text: 'The page markup, with every reference rewritten to point at the saved files.' },
    code: { title: 'CSS & JavaScript', text: 'Stylesheets and scripts, plus everything they import.' },
    images: { title: 'Images', text: 'Photos, icons, SVGs, responsive srcset variants and CSS backgrounds.' },
    fonts: { title: 'Fonts', text: 'Web fonts loaded through @font-face, including Google Fonts.' },
  },

  // "More than a ZIP file": the features that set the tool apart, each with a small preview.
  highlights: {
    title: 'More than a ZIP file',
    lead: 'Every download comes with a report, and options most website downloaders don’t have.',
    items: [
      {
        title: 'Clean copy',
        text: 'Trackers, ad pixels, cookie banners and redirects come out. The page’s own scripts stay.',
      },
      {
        title: 'A report with every archive',
        text: 'See what was saved, what wasn’t and why, plus the page’s colours, fonts, weight and tech.',
      },
      {
        title: 'Several pages at once',
        text: 'Pick up to 20 pages from the site’s links and sitemap. Links between them work offline.',
      },
      {
        title: 'One file, or both versions',
        text: 'Save a page as one self-contained HTML file, or get its desktop and mobile copies side by side.',
      },
    ],
  },

  // The long-form article on the home page (written for search engines and for readers).
  guide: {
    title: 'A free online website downloader that saves any page as a ZIP',
    tocTitle: 'On this page',
    tocLabel: 'Article contents',
    introHtml: `<p>This website downloader copies a web page and everything it needs to display, then hands it to you as one ZIP file. You get the HTML, the CSS, the JavaScript, every image and every web font, arranged in folders and linked together so the page opens on your own computer. There is nothing to install and no account to create: paste a URL, select Save, and the archive downloads in your browser.</p>
<p>It is built for the pages people most often want to keep: landing pages, product pages, portfolios, email sign-up pages and one-page sites. Instead of saving each file by hand from your browser’s developer tools, you get the complete page in a few seconds.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'How to download a website as a ZIP',
        html: `<ol>
<li>Open the page you want to save and copy its address from the browser’s address bar.</li>
<li>Paste the address into the box at the top of this page. You can leave out the <code>https://</code>.</li>
<li>Pick any options you need, such as renaming the files or keeping the site’s original folder structure. The preview next to the box shows how the archive will be organised.</li>
<li>Select Save. When the archive is ready, your browser downloads a file named after the website, for example <code>example.com.zip</code>. Unzip it and open <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'What you get inside the archive',
        html: `<p>The downloader reads the page’s HTML and finds every file it references: stylesheets, scripts, icons, images, responsive image sizes listed in <code>srcset</code>, video posters, inline styles and images that only load as you scroll. It then opens each stylesheet and follows its <code>@import</code> rules and <code>url()</code> references, which is how background images and web fonts, including Google Fonts, end up in the archive too.</p>
<p>Every reference is rewritten to point at the saved copy, so the page loads its own local files rather than reaching back to the original server. If a file can’t be downloaded, for example because its server refuses requests from other sites, the link keeps its original web address. The page still loads that file while you are online, and nothing breaks silently.</p>
<p>Every archive also holds <code>archive-report.html</code>, a readable report of what was saved, which files couldn’t be and why, and how much of the page now works offline. It also lists the page’s colours, fonts and their licences, its page weight by file type, the tools it is built with and its search and sharing tags.</p>`,
      },
      {
        id: 'save-page-as',
        heading: 'Why not just use “Save page as”?',
        html: `<p>Browsers can save a page, but the result is often incomplete. A “complete” save usually puts every file into one folder with long generated names, and it often misses the fonts and background images that stylesheets load, as well as images that only appear as you scroll. Saving as a single MHTML file is tidier, but other browsers and code editors can’t always open it. A website downloader follows every stylesheet to its fonts and backgrounds, and gives you a standard ZIP file that opens anywhere, with the folder layout you choose.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Download a landing page to study, test or rebuild it',
        html: `<p>Marketers and affiliates save landing pages to keep a swipe file of offers, headlines and layouts that convert. Designers download a page to inspect its spacing, colours and typography at their own pace. Developers use a website copier to move an old static page to new hosting, to make a quick local mock-up for a client, or to test changes on a copy without touching the live site. Agencies archive a client’s page before a redesign so there is a record of what was there before.</p>
<p>Because the archive holds plain files, you can open it in any code editor, change the text or styles, and preview the result in your browser straight away.</p>`,
      },
      {
        id: 'options',
        heading: 'Choose the right options',
        html: `<p><strong>Clean copy</strong> removes analytics and advertising tags, session recorders and cookie-consent banners, along with automatic redirects. The page’s own scripts stay, so sliders and menus keep working, but the saved copy no longer reports visits to anyone or covers the design with a banner.</p>
<p><strong>Simplified download</strong> removes all JavaScript and keeps a static snapshot of the HTML, CSS, images and fonts. Images that normally wait for a script before loading are switched to load straight away, so they still appear. It is the best choice when you only care about the design.</p>
<p><strong>Rename all assets</strong> replaces long, hashed file names with short ones such as <code>style-1.css</code> and <code>image-4.webp</code>. Turn it on when you plan to edit the page and want a tidy project.</p>
<p><strong>Save website structure</strong> keeps the folder paths the site itself uses, such as <code>assets/css/main.css</code>, instead of grouping files by type. Files hosted on other domains go into an <code>external</code> folder named after their host.</p>
<p><strong>Version</strong> chooses which copy of the page you get. Mobile requests the page the way an iPhone does; some sites send phones a different layout, smaller images or other content. Both saves the desktop and mobile copies side by side in one archive.</p>
<p><strong>Save as</strong> a single HTML file puts every image, font, stylesheet and script inside one <code>.html</code> file. It is larger than a ZIP, but there is nothing to unzip, and it is easy to keep, attach to an email or open on another computer.</p>
<p>Under <strong>Customize your download</strong>, <strong>Prettify code</strong> indents minified HTML, CSS and JavaScript so the code is easy to read, and <strong>Choose files first</strong> shows the archive’s files before anything downloads, so you can leave out large videos or images you don’t need.</p>`,
      },
      {
        id: 'offline',
        heading: 'Download a website for offline use',
        html: `<p>A downloaded page opens without an internet connection, as long as its files were saved. An offline copy is useful for presentations, for reviewing a page on a flight, and for keeping a page that may change or disappear.</p>
<ol>
<li>Paste the page’s address at the top of this page and select <strong>Save</strong>.</li>
<li>Unzip the archive into a folder on your computer.</li>
<li>Open <code>index.html</code> in any browser. Images, styles and fonts load from the folders next to it, so the page works offline.</li>
</ol>
<p>To browse more than one page offline, switch to <strong>Several pages</strong> and list up to 20 addresses, or select <strong>Find pages on this site</strong> to choose them from the site’s own links and sitemap. They go into one archive, files they share are saved once, and links between the saved pages open the local copies. Links to pages you didn’t save still point to the live website, and the archive report shows how much of each page works offline.</p>`,
      },
      {
        id: 'limits',
        heading: 'What a website downloader can’t copy',
        html: `<p>Any website ripper can only save what the server sends to a browser. Server-side code, such as PHP, databases, APIs and payment systems, never leaves the web server, so it is not included. Pages behind a login can’t be reached. Sites that build their content with JavaScript after the page loads, common with single-page apps, may save as an empty shell. Forms in a saved page still submit to the original website.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Use downloaded websites responsibly',
        html: `<p>Downloading a page doesn’t transfer any rights to it. The words, images, code and fonts still belong to their owners. Save pages to learn from them, to back up your own work, or with the owner’s permission, and check the license of any font or image before you reuse it. Don’t republish a copied site as your own.</p>`,
      },
    ],
  },

  faq: {
    title: 'Frequently asked questions',
    leadHtml: 'Something else on your mind? <a href="{contactUrl}">Contact us</a> and we’ll answer it.',
    items: [
      {
        question: 'What is a website downloader?',
        answer:
          'A website downloader is a tool that copies a web page and every file it needs to display: the HTML, stylesheets, scripts, images and fonts. This one packs them into a single ZIP archive you can open on your computer, with every link rewritten so the page works from the local files.',
      },
      {
        question: 'Is this website downloader free?',
        answer:
          'Yes. It is free to use, with no account, no sign-up and no software to install. Paste a URL, select Save and the ZIP file downloads in your browser.',
      },
      {
        question: 'How do I download a website as a ZIP file?',
        answer:
          'Copy the address of the page you want, paste it into the box at the top of this page and select Save. Choose any options first, such as renaming assets or keeping the original folder structure. When the archive is ready, your browser downloads it as a .zip file named after the website.',
      },
      {
        question: 'Can I download an entire website with every page?',
        answer:
          'You can save up to 20 pages of a site in one archive. Switch to Several pages, then paste the addresses or select Find pages on this site to pick them from the site’s links and sitemap. Files the pages share are saved once, and links between the saved pages work offline. Links to pages you didn’t save keep pointing to the live website.',
      },
      {
        question: 'Can I download the source code of a website?',
        answer:
          'You get the front-end source code: the HTML, CSS and JavaScript your browser receives, plus images and fonts. Server-side code such as PHP, databases, APIs and back-end logic never leaves the web server, so no website downloader can copy it.',
      },
      {
        question: 'Can I download a landing page with its images and CSS?',
        answer:
          'Yes. Landing pages are what this tool handles best. It saves the page markup, every stylesheet and the files those stylesheets import, background images, responsive image sizes from srcset, lazy-loaded images and web fonts, including Google Fonts.',
      },
      {
        question: 'Can I download all images from a website?',
        answer:
          'Yes, from the pages you save. The archive includes every image those pages use: regular images, responsive sizes from srcset, SVG icons, CSS background images and lazy-loaded images. Turn on Choose files first to see the list before anything downloads and keep only the files you want.',
      },
      {
        question: 'How do I download a website for offline use?',
        answer:
          'Paste the page’s address at the top of this page, select Save and unzip the archive. Open index.html and the page loads from the saved files, with no internet connection needed. To keep several pages, switch to Several pages and add up to 20 addresses; links between the saved pages then work offline too.',
      },
      {
        question: 'How do I open a website after downloading it?',
        answer:
          'Unzip the archive and open index.html in any browser. Images, styles and fonts load from the folders next to it. To edit the page, open the folder in a code editor such as VS Code.',
      },
      {
        question: 'Why does my downloaded page look different from the live site?',
        answer:
          'Some sites build their content with JavaScript after the page loads, or load files from servers that block other websites. The downloader saves the page as the server first sends it, so content that only appears after scripts run may be missing. Files that could not be downloaded keep their original web address, so they still load while you are online, and the archive report lists each one with the reason.',
      },
      {
        question: 'Can I download the mobile version of a website?',
        answer:
          'Yes. Choose Mobile under Version before you select Save. The page and its files are then requested as an iPhone browser, so sites that serve a different mobile layout send that version. Choose Both to get the desktop and mobile copies in one archive.',
      },
      {
        question: 'What does “Simplified download” do?',
        answer:
          'It removes all JavaScript from the saved page, leaving a static snapshot of the HTML, CSS, images and fonts. Lazy-loaded images are switched to load normally so they still appear without scripts. Use it when you only need the layout and design.',
      },
      {
        question: 'What does “Clean copy” remove?',
        answer:
          'Analytics and advertising tags such as Google Analytics, Google Tag Manager and the Meta Pixel, session recorders such as Hotjar and Microsoft Clarity, cookie-consent banners such as OneTrust and Cookiebot, and automatic redirects. The page’s own scripts are kept. The archive report lists everything that was removed.',
      },
      {
        question: 'Can I save a web page as a single HTML file?',
        answer:
          'Yes. Choose Single HTML file under Save as. Every image, font, stylesheet and script is placed inside one .html file that opens in any browser, with nothing to unzip.',
      },
      {
        question: 'What is in the archive report?',
        answer:
          'Every archive includes archive-report.html. It shows how much of the page was saved for offline use, lists each file that couldn’t be saved and why, and describes the page: its colours, fonts and their licences, page weight by file type, the tools it is built with and its search and sharing tags. The same details appear on this page after each download.',
      },
      {
        question: 'Is there a size limit?',
        answer:
          'A single page can include up to 400 files, and several pages up to 1,000 between them. Each file can be up to 25 MB, with up to 150 MB per archive and 20 pages at a time. A download stops after about 90 seconds, or 150 seconds for several pages or both versions; any files not saved by then keep linking to the live site and are listed in the archive report.',
      },
      {
        question: 'How is this different from HTTrack or other website copiers?',
        answer:
          'HTTrack and Cyotek WebCopy are desktop programs: you install them, and they crawl a site from your computer by following its links. This website downloader runs in your browser with nothing to install. It saves the pages you choose, up to 20 at a time, as one ZIP with a report, and can remove trackers and cookie banners on the way. To mirror a large site with thousands of pages, a desktop crawler is the better fit.',
      },
      {
        question: 'Is it legal to download a website?',
        answer:
          'Saving a page for personal study, testing or archiving is generally fine, but the text, images, code and fonts still belong to their owners. Do not republish a downloaded site or use its content commercially without permission, and check the license of any fonts or images before you reuse them.',
      },
      {
        question: 'Do you store the websites I download?',
        answer:
          'No. Each archive is built in memory for your request and sent straight to your browser. We do not keep a copy of the pages you save or the files inside them.',
      },
    ],
  },

  cta: {
    title: 'Your next page is one paste away',
    text: 'Free, no sign-up, and the archive opens in any browser.',
    button: 'Save a website',
  },

  about: {
    // title goes in the <title> tag (before " | {name}"), heading is the visible page heading.
    title: 'About Us – Free Online Website Downloader',
    heading: 'About {name}',
    description:
      'Meet {name}, the free online website downloader: why we built it, who uses it and how it saves a website as a ZIP with its HTML, CSS, images and fonts.',
    lead: 'We make a free tool that saves any public web page, with everything it needs to display, as one ZIP file you can open offline.',
    bodyHtml: `<h2>What {name} does</h2>
<p>{name} is a free <a href="{homeUrl}">online website downloader</a>. Paste the address of a web page and it collects the page’s HTML along with every stylesheet, script, image and font it uses, rewrites the links so they point to the saved files, and hands you a single ZIP archive. Unzip it, open <code>index.html</code>, and the page loads in your browser without an internet connection.</p>
<p>There is nothing to install and no account to create. It works in any modern browser, on Windows, macOS, Linux, Android and iOS.</p>
<h2>Why we built it</h2>
<p>Saving a web page should be simple, but it rarely is. A browser’s “Save page as” often misses web fonts, CSS background images, responsive image sizes and the files a stylesheet imports, so the copy looks broken when you open it later. Collecting everything by hand from developer tools takes a long time and is easy to get wrong. We wanted one step that does the whole job: paste a URL, select Save, and get a tidy archive that looks like the original.</p>
<h2>Who uses {name}</h2>
<ul>
<li><strong>Marketers and affiliates</strong> keep copies of landing pages they want to learn from, and back up their own pages before a redesign.</li>
<li><strong>Designers</strong> save pages to study layout, colour and typography, and use the archive report to see which fonts and colours a page uses.</li>
<li><strong>Developers</strong> move old static pages to new hosting, build offline demos and test changes on a local copy instead of the live site.</li>
<li><strong>Students and teachers</strong> download real pages to learn how HTML, CSS and JavaScript fit together.</li>
<li><strong>Researchers and archivists</strong> keep a record of a page before it changes or disappears.</li>
</ul>
<h2>What you can save</h2>
<p>Every download includes the page and the files it needs to display. Options let you shape the archive to the job:</p>
<ul>
<li>Save up to 20 pages of a site in one archive, with the links between them working offline.</li>
<li>Download the mobile version of a website, or the desktop and mobile versions side by side.</li>
<li>Save a page as one self-contained HTML file instead of a ZIP.</li>
<li>Make a clean copy without analytics tags, ad scripts or cookie banners.</li>
<li>Keep the site’s original folder structure, or give every asset a short, tidy name.</li>
</ul>
<p>Each archive also contains a report that lists every saved file, anything that couldn’t be saved and why, and insights about the page such as its colours, fonts and page weight. See <a href="{homeUrl}#whats-saved">what’s saved in a download</a> for the full list.</p>
<h2>How it works</h2>
<p>When you submit an address, our server requests the page, finds every stylesheet, script, image and font it uses, downloads them, and rewrites the page so it points at the saved copies. The archive is built in memory for your request and sent straight to your browser. We don’t keep a copy of the page or the archive. The <a href="{homeUrl}#how-it-works">step-by-step guide</a> shows the process from start to finish.</p>
<h2>What we stand for</h2>
<ul>
<li><strong>Free to use.</strong> No account, no sign-up and no software to install.</li>
<li><strong>Private by default.</strong> We don’t store the pages you save or the files inside them. Our <a href="{privacyUrl}">privacy policy</a> explains exactly what we collect.</li>
<li><strong>Honest results.</strong> If a file can’t be saved, the archive report says so and explains why, so you never discover a broken page later.</li>
<li><strong>Respect for creators.</strong> Downloading a page doesn’t give you rights to it. Our <a href="{termsUrl}">terms and conditions</a> ask you to save only what you’re allowed to use.</li>
</ul>
<h2>Get in touch</h2>
<p>Found a page that doesn’t save correctly, or have an idea for a feature? Many common questions are answered in our <a href="{homeUrl}#faq">FAQ</a>. For anything else, <a href="{contactUrl}">contact us</a>. We read every message.</p>`,
  },
  contact: {
    title: 'Contact Us – Website Downloader Support',
    heading: 'Contact us',
    description:
      'Contact {name}: get help with the website downloader, report a page that didn’t save, suggest a feature, or send a copyright or privacy request.',
    lead: 'Questions, bug reports, feature ideas, copyright notices and privacy requests all go to the same inbox, and we read every message.',
    bodyHtml: `<h2>What we can help with</h2>
<ul>
<li><strong>Help with a download.</strong> A page didn’t save, looks different offline or stopped partway.</li>
<li><strong>Bug reports.</strong> Something on the site doesn’t work the way it should.</li>
<li><strong>Feature ideas.</strong> An option you’d like the website downloader to have.</li>
<li><strong>Copyright and abuse reports.</strong> You believe the service is being used to copy your content without permission.</li>
<li><strong>Privacy requests.</strong> You want to know what we hold about you, or ask us to delete it.</li>
<li><strong>Partnerships and press.</strong> You’d like to work with us or write about {name}.</li>
</ul>
<h2>Before you write</h2>
<p>Many questions, such as how to download a whole website, save the mobile version or open a site after downloading it, are answered in our <a href="{homeUrl}#faq">frequently asked questions</a>. It is often the fastest way to an answer.</p>
<h2>Reporting a page that didn’t save correctly</h2>
<p>To help us fix it quickly, include:</p>
<ul>
<li>The address of the page you tried to save.</li>
<li>The options you had turned on.</li>
<li>The message shown under the Save button, if there was one.</li>
<li>What looks wrong when you open the saved page.</li>
<li>If you have it, the <code>archive-report.html</code> file from inside the ZIP. It lists every file that couldn’t be saved and why.</li>
</ul>
<h2>Copyright and abuse reports</h2>
<p>{name} doesn’t host the pages people save: each archive is built for a single request and is never stored on our servers. If you believe the service is being used to copy your content in a way that infringes your rights, email us with the address of your page, a description of the problem and how we can reach you. We review every report. Our <a href="{termsUrl}">terms and conditions</a> list what to include in a formal notice.</p>
<h2>Privacy requests</h2>
<p>To ask what personal information we hold about you, or to have it corrected or deleted, email us from the address the request concerns. Our <a href="{privacyUrl}">privacy policy</a> explains what we collect and the rights you have.</p>
<h2>Response time</h2>
<p>We usually reply within a few working days.</p>`,
  },
  privacy: {
    title: 'Privacy Policy – How We Handle Your Data',
    heading: 'Privacy policy',
    description:
      'Read the {name} privacy policy: what the website downloader collects, what we never store, cookies, third-party services and your privacy rights.',
    lead: 'This policy explains what information {name} collects when you use this website and its website downloader, why we collect it, and the choices you have.',
    // The policy is assembled from these parts; the analytics variants depend on whether Google Analytics is on.
    shortHtml: `<h2>The short version</h2>
<ul>
<li>You don’t need an account, your name or your email address to use the website downloader.</li>
<li>We don’t store the addresses you submit, the pages we fetch for you or the archives we build.</li>
<li>We don’t sell your personal information or use it for advertising.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'We use Google Analytics to count visits and understand how the site is used.',
    analyticsSummaryOff: 'We don’t use advertising or analytics cookies.',
    givenHtml: `<h2>Who we are</h2>
<p>{name} (“we”, “us”) runs this website and the website downloader on it, and is responsible for the personal information described in this policy. You can reach us at <a href="mailto:{email}">{email}</a>.</p>
<h2>Information you give us</h2>
<p><strong>Web addresses and options.</strong> When you select Save, the addresses you entered and the options you chose are sent to our server so it can fetch those pages. When you ask us to find pages on a site, its address is sent so we can list them. Addresses are used only to complete your request. The archive is built in memory, sent to your browser and then discarded. We don’t keep a copy of the pages or their files.</p>
<p><strong>Your archive.</strong> The panel that appears after a download reads the report inside the ZIP in your browser. Choosing files and repacking the ZIP also happen on your device, and nothing is sent back to us.</p>
<p><strong>Emails.</strong> If you contact us at <a href="mailto:{email}">{email}</a>, we receive your email address and whatever you write. We use it only to reply, and keep it only as long as needed to handle your message.</p>
<h2>Information collected automatically</h2>
<p>Like most websites, our hosting provider records basic technical details for each request, such as IP address, browser type, the page requested and the time. These logs are used to keep the service running, to investigate errors and to prevent abuse, and are deleted on a regular schedule.</p>
<p>While a download is running, our server also uses your IP address to limit how many downloads one visitor can run at the same time. This count is held in memory only and disappears as soon as the download ends.</p>
<h2>How we use information</h2>
<ul>
<li>To fetch the pages you ask for and build your archive.</li>
<li>To answer your emails and requests.</li>
<li>To keep the service secure, reliable and fair for everyone, and to prevent abuse.</li>
<li>To find and fix errors.</li>
<li>To meet our legal obligations.</li>
</ul>
<h2>Legal bases for processing</h2>
<p>If you are in the European Economic Area, the United Kingdom or Switzerland, we process personal information because it is needed to provide the service you ask for, because of our legitimate interest in running a secure and reliable service and preventing abuse, or to comply with the law.</p>`,
    analyticsHtml: `<h2>Analytics</h2>
<p>We use Google Analytics, a service from Google LLC, to understand how visitors use the site, such as which pages are viewed and how people arrive. Google Analytics sets cookies and processes data, including your IP address, on Google’s servers, which may be outside your country. We look at the reports only in aggregate and don’t use them to identify you. You can read <a href="https://policies.google.com/privacy">Google’s privacy policy</a> and opt out with the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</a>.</p>`,
    cookiesTitle: 'Cookies and local storage',
    cookiesOn:
      'We don’t set any cookies of our own. Google Analytics sets cookies to tell visits apart. You can block or delete cookies in your browser settings, and the website downloader keeps working without them.',
    cookiesOff: 'We don’t set any cookies, and the website downloader doesn’t need them to work.',
    restHtml: `<p>If you pick a light or dark theme, that choice is saved in your browser’s local storage so the site remembers it. It never leaves your device, and clearing your browser data removes it.</p>
<h2>Third-party services</h2>
<ul>
<li><strong>Hosting.</strong> Our hosting provider runs the servers behind this site and processes the request logs described above on our behalf.</li>
<li><strong>Google Fonts.</strong> The site loads its typefaces from Google Fonts, so your browser connects to Google’s servers, which receive your IP address.</li>
</ul>
<h2>The websites you save</h2>
<p>When you save a page, our server, not your browser, contacts the website you entered and any servers that host its files. Those websites see a request from our server, not from your IP address. The request identifies itself as a standard browser (a mobile one if you choose the mobile version) and carries none of your cookies or personal information.</p>
<h2>We don’t sell your information</h2>
<p>We don’t sell, rent or trade personal information, we don’t share it for targeted advertising, and we don’t build profiles of visitors. We share information only with the service providers named in this policy, or when the law requires it.</p>
<h2>International transfers</h2>
<p>Our service providers may process information in countries other than the one you live in, including the United States. Where the law requires it, these transfers rely on appropriate safeguards, such as adequacy decisions or standard contractual clauses.</p>
<h2>How long we keep information</h2>
<ul>
<li><strong>Submitted addresses and archives:</strong> not stored. They exist only while your download is being built.</li>
<li><strong>Server logs:</strong> kept for a limited period for security and troubleshooting, then deleted.</li>
<li><strong>Emails:</strong> kept only as long as needed to answer them and handle any follow-up.</li>
</ul>
<h2>Security</h2>
<p>All traffic to this site is encrypted with HTTPS. Archives are built in memory and never saved to disk, and the website downloader refuses to reach private networks and internal addresses. No method of transmission or storage is completely secure, but we work to protect the little information we handle.</p>
<h2>Children’s privacy</h2>
<p>This service is not aimed at children under 13, and we don’t knowingly collect personal information from them. If you believe a child has sent us personal information, <a href="{contactUrl}">contact us</a> and we will delete it.</p>
<h2>Your privacy rights</h2>
<p>Depending on where you live, you may have the right to:</p>
<ul>
<li>Ask what personal information we hold about you and get a copy of it.</li>
<li>Have inaccurate information corrected.</li>
<li>Have your information deleted.</li>
<li>Object to or restrict how we use it.</li>
<li>Receive your information in a portable format.</li>
<li>Complain to your local data protection authority.</li>
</ul>
<p>If you live in California or another US state with a consumer privacy law, you also have the right to know what we collect, to correct and delete it, and not to be treated differently for using these rights. We don’t sell or share personal information as those laws define it.</p>
<p>To make a request, email <a href="mailto:{email}">{email}</a>. We may need to confirm your identity first, and we will reply within the time the law allows. Because we keep so little, we often hold no information about you at all.</p>
<h2>Links to other websites</h2>
<p>This policy covers {name} only. The websites you download, and sites we link to, have their own privacy policies, and we are not responsible for how they handle information.</p>
<h2>Changes to this policy</h2>
<p>If we change this policy, we’ll update the date at the top of this page. Significant changes will be highlighted on the site.</p>
<h2>Contact</h2>
<p>Questions about this privacy policy or how we handle your data? Email <a href="mailto:{email}">{email}</a> or use our <a href="{contactUrl}">contact page</a>.</p>`,
  },
  terms: {
    title: 'Terms and Conditions of Use',
    heading: 'Terms and conditions',
    description:
      'Terms and conditions for using {name}, the free website downloader: acceptable use, copyright notices, service limits, disclaimers and liability.',
    lead: 'These terms apply when you use {name} and its website downloader. By using the site, you agree to them, so please read them carefully.',
    bodyHtml: `<h2>About these terms</h2>
<p>These terms and conditions (“terms”) are an agreement between you and {name} (“we”, “us”). They cover your use of this website and the website downloader on it (together, “the service”). If you don’t agree with them, please don’t use the service.</p>
<h2>Who can use the service</h2>
<p>You must be at least 13 years old to use the service. If you are under the age of majority where you live, you may use it only with the permission of a parent or guardian. If you use the service for a company or other organisation, you confirm that you have the authority to accept these terms on its behalf.</p>
<h2>The service</h2>
<p>{name} lets you enter the address of a public web page and download a ZIP archive containing that page and the files it uses, such as stylesheets, scripts, images and fonts. You can also save several pages at once, the mobile version of a page, or a single self-contained HTML file. The service is free, needs no account and is provided as it is. We may add, change or remove features at any time.</p>
<h2>Acceptable use</h2>
<p>You agree to use the service only for lawful purposes. In particular, you agree not to:</p>
<ul>
<li>Download, copy or republish content you don’t have the right to use.</li>
<li>Pass off a downloaded website as your own, or use it to impersonate another person or business.</li>
<li>Use downloaded pages for phishing, fraud, malware or to collect other people’s information.</li>
<li>Try to reach private networks, internal services or pages that require a login.</li>
<li>Send automated or excessive requests that put an unreasonable load on our servers or on the websites you download.</li>
<li>Try to break, probe or bypass the security or limits of the service.</li>
<li>Resell the service, or offer it as part of another product, without our written permission.</li>
</ul>
<h2>Copyright and other people’s content</h2>
<p>Websites you download belong to their owners. Saving a page doesn’t transfer any rights to its text, images, code, fonts or trademarks. You are responsible for making sure your use of downloaded material is allowed, for example for personal study, for backing up your own site, or with the owner’s permission. Check the licence of any font or image before you reuse it.</p>
<p>{name} is a tool, not a host: each archive is built for a single request and is not stored on our servers or published by us.</p>
<h2>Copyright complaints</h2>
<p>If you believe the service is being used to infringe your copyright or other rights, email <a href="mailto:{email}">{email}</a> with:</p>
<ul>
<li>Your name and contact details.</li>
<li>A description of the work you believe is being infringed.</li>
<li>The address of the page concerned.</li>
<li>A statement that you believe in good faith the use is not authorised by the owner, its agent or the law.</li>
<li>A statement that the information in your notice is accurate, and that you are the owner or are authorised to act for the owner.</li>
<li>Your physical or electronic signature.</li>
</ul>
<p>We review every notice and may take steps such as blocking requests for the address concerned.</p>
<h2>Our content and brand</h2>
<p>The {name} name, logo, website design, text and software belong to us or our licensors. These terms don’t give you any right to use them, except to refer to the service accurately.</p>
<h2>Third-party websites</h2>
<p>The pages you download, and any links on this site, lead to websites we don’t control. We are not responsible for their content, availability or practices, and saving a page doesn’t mean we endorse it.</p>
<h2>Limits and availability</h2>
<p>To keep the service fast and fair, each download is limited in the number of pages and files, file size and the time it can take, and each visitor can run only a few downloads at once. We may change these limits, block requests that abuse the service, or suspend or end access at any time, with or without notice. We may also pause the service for maintenance or stop offering it.</p>
<h2>No warranty</h2>
<p>The service is provided “as is” and “as available”, without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. We don’t guarantee that every page will download completely or look the same as the original, or that the service will be uninterrupted, secure or error-free.</p>
<h2>Limitation of liability</h2>
<p>To the fullest extent allowed by law, {name} is not liable for any indirect, incidental, special or consequential damages, or for any loss of data, profits or business, arising from your use of the service or of any content you download with it. Some places don’t allow these limits, so some of them may not apply to you.</p>
<h2>Indemnity</h2>
<p>You agree to defend and compensate {name} for any claims, losses or costs, including reasonable legal fees, that arise from your misuse of the service or your breach of these terms.</p>
<h2>General</h2>
<p>If any part of these terms is found unenforceable, the rest stays in effect. If we don’t enforce a term straight away, we haven’t given up the right to enforce it later. These terms, together with our <a href="{privacyUrl}">privacy policy</a>, are the whole agreement between you and us about the service.</p>
<h2>Changes to these terms</h2>
<p>We may update these terms from time to time. The date at the top of this page shows when they last changed. Continuing to use the service after a change means you accept the updated terms.</p>
<h2>Contact</h2>
<p>Questions about these terms? Email <a href="mailto:{email}">{email}</a> or use our <a href="{contactUrl}">contact page</a>.</p>`,
  },

  notFound: {
    title: 'Page not found',
    description: 'This page doesn’t exist.',
    heading: 'This page doesn’t exist',
    text: 'The link may be broken, or the page may have moved. Check the address, or go back to the downloader.',
    button: 'Go to the website downloader',
  },

  serverError: {
    title: 'Something went wrong',
    description: 'An unexpected error happened on our side.',
    heading: 'Something went wrong on our side',
    textHtml:
      'The server hit an unexpected error while loading this page. Try again in a moment. If it keeps happening, <a href="{contactUrl}">let us know</a>.',
    button: 'Go to the website downloader',
  },
};

export type Dict = typeof en;
export default en;
