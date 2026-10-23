import type { Dict } from './en';

const pt: Dict = {
  meta: {
    homeTitle: 'Baixar site completo em ZIP grátis – Downloader de sites',
    homeDescription:
      'Baixar site grátis e online: salve qualquer página ou landing page em ZIP com HTML, CSS, JavaScript, imagens e fontes. Sem cadastro e sem instalar nada.',
    ogImageAlt: 'Salve um site em ZIP: HTML, CSS, JavaScript, imagens e fontes em um único arquivo',
    appFeatures: [
      'Baixar qualquer página da web em um arquivo ZIP',
      'Salvar HTML, CSS, JavaScript, imagens e fontes',
      'Renomear todos os arquivos',
      'Copiar a versão mobile de um site',
      'Download simplificado sem JavaScript',
      'Manter a estrutura de pastas original do site',
      'Cópia limpa, sem rastreadores, anúncios ou banners de cookies',
      'Salvar uma página como um único arquivo HTML independente',
      'Baixar várias páginas, ou as versões desktop e mobile, em um único arquivo ZIP',
      'Relatório do ZIP com análise da página: cores, fontes, peso da página e tecnologias',
    ],
  },

  common: {
    skipToContent: 'Pular para o conteúdo',
    languageMenuLabel: 'Idioma',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    lastUpdated: 'Última atualização em {date}',
  },

  nav: {
    howItWorks: 'Como funciona',
    whatsSaved: 'O que é salvo',
    faq: 'FAQ',
    cta: 'Baixar site',
    mainLabel: 'Principal',
    footerLabel: 'Rodapé',
  },

  footer: {
    tagline: 'Downloader de sites gratuito. Salve apenas páginas que você tem o direito de copiar.',
    about: 'Sobre nós',
    contact: 'Fale conosco',
    privacy: 'Política de privacidade',
    terms: 'Termos e condições',
    languages: 'Idiomas',
  },

  hero: {
    title: 'Baixar site em ZIP.',
    titleAccent: 'Sem perder nenhum detalhe.',
    lead: 'Um downloader de sites gratuito. Cole a URL de qualquer página e receba o HTML, CSS, JavaScript, imagens e fontes em um único arquivo.',
    fieldLabel: 'Endereço da página',
    placeholder: 'ex.: example.com/landing-page…',
    save: 'Salvar',
    saving: 'Salvando…',
    modeLegend: 'O que salvar',
    modes: { single: 'Uma página', multi: 'Várias páginas' },
    multiFieldLabel: 'Endereços das páginas',
    multiPlaceholder: 'Um endereço por linha, até {max}',
    findPages: 'Encontrar páginas neste site',
    findingPages: 'Procurando páginas…',
    pagesFound: { one: '{count} página encontrada', other: '{count} páginas encontradas' },
    noPagesFound: 'Não encontramos outras páginas em {host}. Adicione os endereços você mesmo, um por linha.',
    addPages: 'Adicionar páginas selecionadas',
    selectAll: 'Selecionar tudo',
    clearSelection: 'Limpar seleção',
    deviceLegend: 'Versão',
    devices: { desktop: 'Desktop', mobile: 'Mobile', both: 'Ambas' },
    outputLegend: 'Salvar como',
    outputs: { zip: 'Arquivo ZIP', single: 'Arquivo HTML único' },
    optionsLegend: 'Opções de download',
    moreOptions: 'Personalize seu download',
    tryExample: 'Experimente um exemplo',
    options: {
      cleanCopy: { title: 'Cópia limpa', hint: 'Remove rastreadores, anúncios e banners de cookies' },
      simplified: { title: 'Download simplificado', hint: 'Deixa o JavaScript de fora' },
      renameAssets: { title: 'Renomear todos os arquivos', hint: 'Nomes curtos e organizados, como image-1.jpg' },
      keepStructure: { title: 'Salvar estrutura do site', hint: 'Mantém os caminhos de pastas originais' },
      prettify: { title: 'Formatar código', hint: 'Indenta HTML, CSS e JavaScript minificados' },
      pickFiles: { title: 'Escolher arquivos antes', hint: 'Revisa o ZIP antes do download' },
    },
    scene: {
      nav: ['Início', 'Sobre', 'Projetos', 'Contato'],
      pageTitle: 'Uma web mais limpa e luminosa',
      idleTitle: 'Pronto para salvar',
      idleNote: 'Todos os arquivos incluídos',
      workingTitle: 'Compactando arquivos',
      workingNote: 'Reunindo cada arquivo',
      doneTitle: 'Salvo',
      doneNote: 'Arquivo pronto',
    },
  },

  status: {
    downloading: 'Baixando {host}. Páginas grandes podem levar até um minuto.',
    saved: 'Salvamos {filename} com {files}.',
    files: { one: '{count} arquivo', other: '{count} arquivos' },
    missed: {
      one: '{count} arquivo não pôde ser baixado e ainda aponta para o site original.',
      other: '{count} arquivos não puderam ser baixados e ainda apontam para o site original.',
    },
    ready: 'Pronto: {files}. Escolha o que manter e depois baixe.',
    serverUnreachable: 'Não foi possível conectar ao servidor. Verifique sua conexão e tente de novo.',
    failed: 'Não foi possível criar o arquivo ZIP. Tente de novo.',
  },

  errors: {
    emptyUrl: 'Digite o endereço da página que você quer salvar.',
    invalidUrl: '“{input}” não é um endereço válido. Tente algo como example.com.',
    protocol: 'Só é possível salvar endereços http:// e https://.',
    credentials: 'Remova o usuário e a senha do endereço e tente de novo.',
    localAddress: 'Não é possível salvar endereços locais e internos. Digite o endereço de um site público.',
    privateAddress: 'Não é possível salvar endereços de rede privada. Digite o endereço de um site público.',
    notPublicDomain: '“{host}” não é um domínio público. Digite o domínio completo, como example.com.',
    privateNetwork: 'Esse endereço aponta para uma rede privada e não pode ser salvo. Tente um site público.',
    notFound: 'Não encontramos {host}. Confira se o endereço está escrito corretamente.',
    timeout: '{host} demorou demais para responder. Tente de novo daqui a pouco.',
    unreachable: 'Não foi possível acessar {host}. Confira o endereço e tente de novo.',
    httpError: '{host} respondeu com o erro {status}, então não há nada para salvar. Confira o endereço e tente de novo.',
    notHtml: 'Esse endereço leva a um arquivo, não a uma página da web. Digite o endereço de uma página.',
    badRequest: 'A solicitação veio com erro. Recarregue a página e tente de novo.',
    internal: 'Algo deu errado ao criar o arquivo ZIP. Tente de novo ou teste outra página.',
    tooManyPages: 'Adicione até {max} páginas por vez.',
    busy: 'Você já tem downloads em andamento. Espere até que terminem e tente de novo.',
  },

  result: {
    title: 'Seu arquivo ZIP',
    downloadAgain: 'Baixar de novo',
    downloadSelected: 'Baixar selecionados',
    selection: 'Seleção: {files}, {size}',
    score: 'disponível offline',
    scoreHint: 'Parcela dos arquivos da página que foram salvos dentro do ZIP. O resto continua carregando do site original.',
    saved: { one: '{count} arquivo salvo', other: '{count} arquivos salvos' },
    failed: { one: '{count} arquivo não pôde ser salvo', other: '{count} arquivos não puderam ser salvos' },
    pages: { one: '{count} página', other: '{count} páginas' },
    removed: { one: '{count} item removido', other: '{count} itens removidos' },
    liveLinks: {
      one: '{count} link para outra página ainda abre o site original.',
      other: '{count} links para outras páginas ainda abrem o site original.',
    },
    tabs: { files: 'Arquivos', problems: 'Problemas', insights: 'Análise' },
    filesHint: 'Desmarque os arquivos de que você não precisa. O que usava esses arquivos passa a carregá-los do site original.',
    singleHint: 'Um arquivo HTML único guarda tudo dentro dele, então não há arquivos separados para escolher.',
    noProblems: 'Todos os arquivos foram salvos.',
    moreProblems: { one: 'E mais {count}.', other: 'E mais {count}.' },
    removedTitle: 'Removido pela “Cópia limpa”',
    removedKinds: {
      tracker: 'Rastreadores e tags',
      consent: 'Banners de cookies',
      redirect: 'Redirecionamentos automáticos',
    },
    kinds: {
      html: 'Página',
      css: 'CSS',
      js: 'JavaScript',
      image: 'Imagem',
      font: 'Fonte',
      media: 'Mídia',
      other: 'Arquivo',
    },
    reasons: {
      http: 'O servidor respondeu com o erro {status}',
      timeout: 'Demorou demais para baixar',
      tooLarge: 'Maior que o limite de {size} por arquivo',
      notAsset: 'Retornou uma página da web em vez de um arquivo',
      blocked: 'Aponta para um endereço privado ou bloqueado',
      network: 'Não foi possível acessar',
      deadline: 'Ignorado: o tempo limite de um download foi atingido',
      archiveFull: 'Ignorado: o ZIP atingiu o tamanho máximo',
      limit: 'Ignorado: a página usa mais de {max} arquivos',
    },
    insights: {
      colors: 'Cores',
      neutrals: 'Neutras',
      cssVariables: { one: '{count} variável CSS', other: '{count} variáveis CSS' },
      copyColor: 'Copiar {hex}',
      copied: '{hex} copiado',
      fonts: 'Fontes',
      licenses: {
        google: 'Google Fonts: uso gratuito (Open Font License)',
        adobe: 'Adobe Fonts: licenciadas, não são livres para reutilizar',
        unknown: 'Confira a licença antes de reutilizar',
        system: 'Fonte do sistema: vem com o dispositivo, não com a página',
      },
      weight: 'Peso da página',
      tech: 'Feito com',
      techCategories: {
        cms: 'Criadores de sites e CMS',
        framework: 'Frameworks',
        library: 'Bibliotecas e serviços',
        analytics: 'Analytics e anúncios',
        consent: 'Consentimento de cookies',
      },
      seo: 'Busca e compartilhamento',
      seoItems: {
        title: 'Título',
        description: 'Descrição',
        canonical: 'Endereço canônico',
        lang: 'Idioma',
        h1: 'Título principal',
        ogImage: 'Imagem de compartilhamento',
        twitterCard: 'Card do X (Twitter)',
        robots: 'Robots',
        structuredData: 'Dados estruturados',
        alt: 'Imagens sem texto alt',
      },
      length: { one: '{count} caractere', other: '{count} caracteres' },
      missing: 'Ausente',
      none: 'Nada encontrado',
      altSummary: '{missing} de {total}',
    },
  },

  report: {
    title: 'Relatório do ZIP: {host}',
    savedFrom: 'Salvo de {url} em {date}.',
    options: 'Opções',
    optionsNone: 'Nenhuma',
    files: 'Arquivos neste ZIP',
    columns: { file: 'Arquivo', from: 'Endereço original', size: 'Tamanho' },
    problems: 'Não incluídos neste ZIP',
    chooserTitle: 'Escolha uma versão de {host}',
    chooserText: 'Este ZIP traz duas cópias da página: a que os navegadores de desktop recebem e a que os celulares recebem.',
  },

  bookmarklet: {
    title: 'Salve qualquer página direto do navegador',
    text: 'Arraste o botão para a barra de favoritos. Em qualquer página da web, clique no favorito para abrir o {name} com o endereço da página já preenchido.',
    button: 'Salvar com o {name}',
    dragHint: 'Arraste este botão para a barra de favoritos.',
  },

  steps: {
    title: 'Como funciona',
    lead: 'Três passos, sem cadastro. A maioria das páginas fica pronta em poucos segundos.',
    items: [
      {
        title: 'Cole o endereço da página',
        text: 'Copie a URL da barra de endereço do navegador. Não precisa incluir o https://.',
      },
      {
        title: 'Escolha as opções',
        text: 'Remova rastreadores, salve a versão mobile, deixe o JavaScript de fora ou junte tudo em um único arquivo HTML.',
      },
      {
        title: 'Descompacte e abra o index.html',
        text: 'O ZIP é baixado na hora. Abra a página em qualquer navegador ou edite no seu editor de código.',
      },
    ],
  },

  features: {
    title: 'Baixar site completo: todos os arquivos em um ZIP',
    lead: 'Baixe uma landing page, um site completo ou qualquer página, totalmente grátis. Cole a URL do site no campo acima e clique em Salvar para receber um ZIP com todos os arquivos dele.',
    html: { title: 'HTML', text: 'O código da página, com todas as referências reescritas para apontar para os arquivos salvos.' },
    code: { title: 'CSS e JavaScript', text: 'Folhas de estilo e scripts, com tudo o que eles importam.' },
    images: { title: 'Imagens', text: 'Fotos, ícones, SVGs, variantes responsivas do srcset e fundos definidos no CSS.' },
    fonts: { title: 'Fontes', text: 'Fontes web carregadas via @font-face, incluindo Google Fonts.' },
  },

  highlights: {
    title: 'Mais que um arquivo ZIP',
    lead: 'Todo download vem com um relatório e com opções que a maioria dos downloaders de sites não tem.',
    items: [
      {
        title: 'Cópia limpa',
        text: 'Rastreadores, pixels de anúncios, banners de cookies e redirecionamentos saem. Os scripts da própria página ficam.',
      },
      {
        title: 'Um relatório em cada ZIP',
        text: 'Veja o que foi salvo, o que não foi e por quê, além das cores, fontes, peso e tecnologias da página.',
      },
      {
        title: 'Várias páginas de uma vez',
        text: 'Escolha até 20 páginas entre os links e o sitemap do site. Os links entre elas funcionam offline.',
      },
      {
        title: 'Um arquivo só ou as duas versões',
        text: 'Salve uma página como um único arquivo HTML independente ou receba as cópias desktop e mobile lado a lado.',
      },
    ],
  },

  guide: {
    title: 'Baixar site grátis: salve qualquer página da web em ZIP',
    tocTitle: 'Nesta página',
    tocLabel: 'Conteúdo do artigo',
    introHtml: `<p>Este downloader de sites copia uma página da web e tudo o que ela precisa para ser exibida, e entrega o resultado em um único arquivo ZIP. Você recebe o HTML, o CSS, o JavaScript, todas as imagens e todas as fontes web, organizados em pastas e ligados entre si para que a página abra no seu próprio computador. Não há nada para instalar nem conta para criar: cole uma URL, clique em Salvar e o arquivo é baixado no seu navegador.</p>
<p>Ele foi feito para as páginas que as pessoas mais querem guardar: landing pages, páginas de produto, portfólios, páginas de cadastro de e-mail e sites de uma página só. Em vez de salvar cada arquivo à mão pelas ferramentas de desenvolvedor do navegador, você recebe a página completa em poucos segundos.</p>`,
    sections: [
      {
        id: 'how-to',
        heading: 'Como baixar um site em ZIP',
        html: `<ol>
<li>Abra a página que você quer salvar e copie o endereço na barra de endereço do navegador.</li>
<li>Cole o endereço no campo no topo desta página. Não precisa incluir o <code>https://</code>.</li>
<li>Escolha as opções de que precisar, como renomear os arquivos ou manter a estrutura de pastas original do site. A prévia ao lado do campo mostra como o arquivo ZIP será organizado.</li>
<li>Clique em Salvar. Quando o arquivo estiver pronto, o navegador baixa um arquivo com o nome do site, por exemplo <code>example.com.zip</code>. Descompacte e abra o <code>index.html</code>.</li>
</ol>`,
      },
      {
        id: 'inside-the-archive',
        heading: 'O que vem dentro do arquivo ZIP',
        html: `<p>O downloader lê o HTML da página e encontra todos os arquivos que ele referencia: folhas de estilo, scripts, ícones, imagens, os tamanhos de imagem responsiva listados no <code>srcset</code>, capas de vídeo, estilos inline e imagens que só carregam conforme você rola a página. Depois, abre cada folha de estilo e segue as regras <code>@import</code> e as referências <code>url()</code>. É assim que as imagens de fundo e as fontes web, incluindo Google Fonts, também entram no arquivo.</p>
<p>Todas as referências são reescritas para apontar para a cópia salva, então a página carrega os próprios arquivos locais em vez de buscá-los no servidor original. Se um arquivo não puder ser baixado, por exemplo porque o servidor dele recusa pedidos de outros sites, o link mantém o endereço original. A página continua carregando esse arquivo enquanto você estiver online, e nada quebra sem aviso.</p>
<p>Todo arquivo ZIP também traz o <code>archive-report.html</code>, um relatório fácil de ler que mostra o que foi salvo, quais arquivos não puderam ser salvos e por quê, e quanto da página agora funciona offline. Ele também lista as cores da página, as fontes e as licenças delas, o peso da página por tipo de arquivo, as ferramentas usadas para criá-la e as tags de busca e compartilhamento.</p>`,
      },
      {
        id: 'save-page-as',
        heading: 'Por que não usar o “Salvar página como”?',
        html: `<p>Os navegadores conseguem salvar uma página, mas o resultado muitas vezes fica incompleto. Um salvamento “completo” costuma jogar todos os arquivos em uma única pasta, com nomes longos gerados automaticamente, e muitas vezes deixa de fora as fontes e imagens de fundo carregadas pelas folhas de estilo, além das imagens que só aparecem quando você rola a página. Salvar como um único arquivo MHTML é mais organizado, mas outros navegadores e editores de código nem sempre conseguem abri-lo. Um downloader de sites segue cada folha de estilo até as fontes e os fundos e entrega um arquivo ZIP padrão, que abre em qualquer lugar, com a estrutura de pastas que você escolher.</p>`,
      },
      {
        id: 'landing-pages',
        heading: 'Baixe uma landing page para estudar, testar ou recriar',
        html: `<p>Profissionais de marketing e afiliados salvam landing pages para montar um swipe file de ofertas, títulos e layouts que convertem. Designers baixam uma página para analisar espaçamento, cores e tipografia com calma. Desenvolvedores usam a ferramenta para copiar o site e levar uma página estática antiga para uma nova hospedagem, criar um protótipo local rápido para um cliente ou testar mudanças em uma cópia sem mexer no site no ar. Agências arquivam a página de um cliente antes de um redesign, para ter um registro de como ela era.</p>
<p>Como o ZIP contém arquivos comuns, você pode abri-lo em qualquer editor de código, mudar os textos ou estilos e ver o resultado no navegador na hora.</p>`,
      },
      {
        id: 'options',
        heading: 'Escolha as opções certas',
        html: `<p><strong>Cópia limpa</strong> remove tags de analytics e de publicidade, gravadores de sessão e banners de consentimento de cookies, além de redirecionamentos automáticos. Os scripts da própria página continuam lá, então sliders e menus seguem funcionando, mas a cópia salva não informa mais as visitas a ninguém nem cobre o design com um banner.</p>
<p><strong>Download simplificado</strong> remove todo o JavaScript e mantém uma cópia estática do HTML, CSS, imagens e fontes. Imagens que normalmente esperam um script para carregar passam a carregar na hora, então continuam aparecendo. É a melhor escolha quando só o design importa.</p>
<p><strong>Renomear todos os arquivos</strong> troca nomes de arquivo longos e cheios de códigos por nomes curtos, como <code>style-1.css</code> e <code>image-4.webp</code>. Ative essa opção quando for editar a página e quiser um projeto organizado.</p>
<p><strong>Salvar estrutura do site</strong> mantém os caminhos de pastas que o próprio site usa, como <code>assets/css/main.css</code>, em vez de agrupar os arquivos por tipo. Arquivos hospedados em outros domínios vão para uma pasta <code>external</code>, separados pelo nome do host.</p>
<p><strong>Versão</strong> define qual cópia da página você recebe. “Mobile” solicita a página do jeito que um iPhone faz; alguns sites enviam um layout diferente, imagens menores ou outro conteúdo para celulares. “Ambas” salva as cópias desktop e mobile lado a lado em um único arquivo ZIP.</p>
<p><strong>Salvar como</strong> “Arquivo HTML único” coloca todas as imagens, fontes, folhas de estilo e scripts dentro de um só arquivo <code>.html</code>. Ele fica maior que um ZIP, mas não há nada para descompactar, e é fácil de guardar, anexar a um e-mail ou abrir em outro computador.</p>
<p>Em <strong>Personalize seu download</strong>, <strong>Formatar código</strong> indenta HTML, CSS e JavaScript minificados para deixar o código fácil de ler, e <strong>Escolher arquivos antes</strong> mostra os arquivos do ZIP antes de qualquer download, para você deixar de fora vídeos grandes ou imagens de que não precisa.</p>`,
      },
      {
        id: 'offline',
        heading: 'Baixe um site para usar offline',
        html: `<p>Uma página baixada abre sem conexão com a internet, desde que os arquivos dela tenham sido salvos. Uma cópia offline é útil para apresentações, para revisar uma página durante um voo e para guardar uma página que pode mudar ou sair do ar.</p>
<ol>
<li>Cole o endereço da página no topo desta página e clique em <strong>Salvar</strong>.</li>
<li>Descompacte o arquivo em uma pasta do seu computador.</li>
<li>Abra o <code>index.html</code> em qualquer navegador. Imagens, estilos e fontes carregam das pastas ao lado, então a página funciona offline.</li>
</ol>
<p>Para navegar por mais de uma página offline, mude para <strong>Várias páginas</strong> e informe até 20 endereços, ou selecione <strong>Encontrar páginas neste site</strong> para escolhê-las entre os links e o sitemap do próprio site. Elas vão para um único arquivo, os arquivos em comum são salvos uma vez só, e os links entre as páginas salvas abrem as cópias locais. Os links para páginas que você não salvou continuam apontando para o site real, e o relatório do arquivo mostra quanto de cada página funciona offline.</p>`,
      },
      {
        id: 'limits',
        heading: 'O que um downloader de sites não consegue copiar',
        html: `<p>Qualquer ferramenta para copiar sites só consegue salvar o que o servidor envia ao navegador. O código do lado do servidor, como PHP, bancos de dados, APIs e sistemas de pagamento, nunca sai do servidor web, então não é incluído. Páginas que exigem login não podem ser acessadas. Sites que montam o conteúdo com JavaScript depois que a página carrega, algo comum em single-page apps, podem ser salvos como uma estrutura vazia. Formulários em uma página salva continuam sendo enviados para o site original.</p>`,
      },
      {
        id: 'responsibly',
        heading: 'Use os sites baixados com responsabilidade',
        html: `<p>Baixar uma página não transfere nenhum direito sobre ela. Os textos, imagens, código e fontes continuam pertencendo aos donos. Salve páginas para aprender com elas, para fazer backup do seu próprio trabalho ou com a permissão do dono, e confira a licença de qualquer fonte ou imagem antes de reutilizá-la. Não republique um site copiado como se fosse seu.</p>`,
      },
    ],
  },

  faq: {
    title: 'Perguntas frequentes',
    leadHtml: 'Ficou com outra dúvida? <a href="{contactUrl}">Fale conosco</a> e nós respondemos.',
    items: [
      {
        question: 'O que é um downloader de sites?',
        answer:
          'Um downloader de sites é uma ferramenta que copia uma página da web e todos os arquivos de que ela precisa para ser exibida: o HTML, as folhas de estilo, os scripts, as imagens e as fontes. Este aqui reúne tudo em um único arquivo ZIP que você abre no seu computador, com todos os links reescritos para que a página funcione a partir dos arquivos locais.',
      },
      {
        question: 'Baixar site com esta ferramenta é grátis?',
        answer:
          'Sim. O uso é gratuito, sem conta, sem cadastro e sem programa para instalar. Cole uma URL, clique em Salvar e o arquivo ZIP é baixado no seu navegador.',
      },
      {
        question: 'Como baixar um site em arquivo ZIP?',
        answer:
          'Copie o endereço da página que você quer, cole no campo no topo desta página e clique em Salvar. Antes, escolha as opções que quiser, como “Renomear todos os arquivos” ou “Salvar estrutura do site”. Quando o arquivo estiver pronto, o navegador baixa um .zip com o nome do site.',
      },
      {
        question: 'Posso baixar um site completo, com todas as páginas?',
        answer:
          'Você pode salvar até 20 páginas de um site em um único arquivo ZIP. Mude para “Várias páginas” e cole os endereços ou clique em “Encontrar páginas neste site” para escolhê-las entre os links e o sitemap do site. Os arquivos que as páginas compartilham são salvos uma vez só, e os links entre as páginas salvas funcionam offline. Os links para páginas que você não salvou continuam apontando para o site no ar.',
      },
      {
        question: 'Posso baixar o código fonte de um site?',
        answer:
          'Você recebe o código fonte do front-end: o HTML, o CSS e o JavaScript que o navegador recebe, além das imagens e fontes. O código do lado do servidor, como PHP, bancos de dados, APIs e a lógica do back-end, nunca sai do servidor web, então nenhum downloader de sites consegue copiá-lo.',
      },
      {
        question: 'Posso baixar uma landing page com as imagens e o CSS?',
        answer:
          'Sim. Landing pages são o ponto forte desta ferramenta. Ela salva o código da página, todas as folhas de estilo e os arquivos que elas importam, imagens de fundo, tamanhos de imagem responsiva do srcset, imagens com carregamento lento (lazy loading) e fontes web, incluindo Google Fonts.',
      },
      {
        question: 'Posso baixar todas as imagens de um site?',
        answer:
          'Sim, as das páginas que você salvar. O arquivo inclui todas as imagens usadas nessas páginas: imagens comuns, tamanhos responsivos do srcset, ícones SVG, imagens de fundo do CSS e imagens com carregamento lento. Ative “Escolher arquivos antes” para ver a lista antes do download e manter só os arquivos que você quer.',
      },
      {
        question: 'Como baixo um site para usar offline?',
        answer:
          'Cole o endereço da página no topo desta página, clique em Salvar e descompacte o arquivo. Abra o index.html e a página carrega a partir dos arquivos salvos, sem precisar de internet. Para salvar várias páginas, mude para “Várias páginas” e adicione até 20 endereços; os links entre as páginas salvas também funcionam offline.',
      },
      {
        question: 'Como abrir um site depois de baixá-lo?',
        answer:
          'Descompacte o arquivo e abra o index.html em qualquer navegador. Imagens, estilos e fontes carregam das pastas ao lado dele. Para editar a página, abra a pasta em um editor de código como o VS Code.',
      },
      {
        question: 'Por que a página baixada está diferente do site original?',
        answer:
          'Alguns sites montam o conteúdo com JavaScript depois que a página carrega, ou carregam arquivos de servidores que bloqueiam outros sites. O downloader salva a página do jeito que o servidor a envia primeiro, então o conteúdo que só aparece depois que os scripts rodam pode ficar faltando. Arquivos que não puderam ser baixados mantêm o endereço original, então continuam carregando enquanto você estiver online, e o relatório do ZIP lista cada um com o motivo.',
      },
      {
        question: 'Posso baixar a versão mobile de um site?',
        answer:
          'Sim. Escolha “Mobile” em “Versão” antes de clicar em Salvar. A página e os arquivos dela passam a ser solicitados como se fosse o navegador de um iPhone, então sites que têm um layout mobile diferente enviam essa versão. Escolha “Ambas” para receber as cópias desktop e mobile em um único arquivo ZIP.',
      },
      {
        question: 'O que faz o “Download simplificado”?',
        answer:
          'Remove todo o JavaScript da página salva e deixa uma cópia estática do HTML, CSS, imagens e fontes. Imagens com carregamento lento passam a carregar normalmente, então continuam aparecendo sem scripts. Use quando você só precisa do layout e do design.',
      },
      {
        question: 'O que a “Cópia limpa” remove?',
        answer:
          'Tags de analytics e de publicidade, como Google Analytics, Google Tag Manager e o Pixel da Meta, gravadores de sessão, como Hotjar e Microsoft Clarity, banners de consentimento de cookies, como OneTrust e Cookiebot, e redirecionamentos automáticos. Os scripts da própria página são mantidos. O relatório do ZIP lista tudo o que foi removido.',
      },
      {
        question: 'Posso salvar uma página da web em um único arquivo HTML?',
        answer:
          'Sim. Escolha “Arquivo HTML único” em “Salvar como”. Todas as imagens, fontes, folhas de estilo e scripts ficam dentro de um só arquivo .html, que abre em qualquer navegador, sem nada para descompactar.',
      },
      {
        question: 'O que tem no relatório do ZIP?',
        answer:
          'Todo arquivo ZIP inclui o archive-report.html. Ele mostra quanto da página foi salvo para uso offline, lista cada arquivo que não pôde ser salvo e o motivo, e descreve a página: as cores, as fontes e as licenças delas, o peso da página por tipo de arquivo, as ferramentas usadas para criá-la e as tags de busca e compartilhamento. Os mesmos detalhes aparecem nesta página depois de cada download.',
      },
      {
        question: 'Existe limite de tamanho?',
        answer:
          'Uma única página pode incluir até 400 arquivos, e várias páginas até 1.000 no total. Cada arquivo pode ter até 25 MB, com até 150 MB por arquivo ZIP e 20 páginas por vez. Um download para depois de cerca de 90 segundos, ou 150 segundos para várias páginas ou as duas versões; os arquivos que não foram salvos até lá continuam apontando para o site original e aparecem no relatório do ZIP.',
      },
      {
        question: 'Qual a diferença para o HTTrack e outros copiadores de sites?',
        answer:
          'HTTrack e Cyotek WebCopy são programas de desktop: você os instala e eles percorrem um site a partir do seu computador, seguindo os links. Este downloader de sites funciona no navegador, sem instalar nada. Ele salva as páginas que você escolher, até 20 de cada vez, em um único ZIP com relatório, e pode remover rastreadores e banners de cookies no caminho. Para espelhar um site grande com milhares de páginas, um programa de desktop é a melhor opção.',
      },
      {
        question: 'É permitido baixar um site?',
        answer:
          'Salvar uma página para estudo pessoal, testes ou arquivamento geralmente não é problema, mas os textos, imagens, código e fontes continuam pertencendo aos donos. Não republique um site baixado nem use o conteúdo dele para fins comerciais sem permissão, e confira a licença de fontes e imagens antes de reutilizá-las.',
      },
      {
        question: 'Vocês guardam os sites que eu baixo?',
        answer:
          'Não. Cada arquivo ZIP é criado na memória para o seu pedido e enviado direto para o seu navegador. Não guardamos cópia das páginas que você salva nem dos arquivos dentro delas.',
      },
    ],
  },

  cta: {
    title: 'Cole o link e salve sua próxima página',
    text: 'Grátis, sem cadastro, e o arquivo abre em qualquer navegador.',
    button: 'Baixar site',
  },

  about: {
    title: 'Sobre nós – Downloader de sites grátis',
    heading: 'Sobre o {name}',
    description:
      'Conheça o {name}, o downloader de sites grátis e online: por que o criamos, quem usa e como ele salva um site em ZIP com HTML, CSS, imagens e fontes.',
    lead: 'Criamos uma ferramenta gratuita que salva qualquer página pública da web, com tudo o que ela precisa para ser exibida, em um único arquivo ZIP que você pode abrir offline.',
    bodyHtml: `<h2>O que o {name} faz</h2>
<p>O {name} é um <a href="{homeUrl}">downloader de sites online</a> e gratuito. Cole o endereço de uma página da web e ele reúne o HTML da página junto com todas as folhas de estilo, scripts, imagens e fontes que ela usa, reescreve os links para que apontem para os arquivos salvos e entrega um único arquivo ZIP. Descompacte, abra o <code>index.html</code> e a página carrega no seu navegador sem conexão com a internet.</p>
<p>Não há nada para instalar nem conta para criar. Funciona em qualquer navegador moderno, no Windows, macOS, Linux, Android e iOS.</p>
<h2>Por que criamos esta ferramenta</h2>
<p>Salvar uma página da web deveria ser simples, mas raramente é. O “Salvar página como” do navegador muitas vezes deixa de fora as fontes web, as imagens de fundo do CSS, os tamanhos de imagem responsiva e os arquivos que uma folha de estilo importa, então a cópia aparece quebrada quando você a abre depois. Reunir tudo à mão pelas ferramentas de desenvolvedor leva muito tempo e é fácil errar. Queríamos um único passo que fizesse todo o trabalho: cole uma URL, clique em Salvar e receba um arquivo organizado, igual ao original.</p>
<h2>Quem usa o {name}</h2>
<ul>
<li><strong>Profissionais de marketing e afiliados</strong> guardam cópias de landing pages com as quais querem aprender e fazem backup das próprias páginas antes de um redesign.</li>
<li><strong>Designers</strong> salvam páginas para estudar layout, cores e tipografia, e usam o relatório do ZIP para ver quais fontes e cores uma página usa.</li>
<li><strong>Desenvolvedores</strong> levam páginas estáticas antigas para uma nova hospedagem, criam demos offline e testam mudanças em uma cópia local em vez de mexer no site no ar.</li>
<li><strong>Estudantes e professores</strong> baixam páginas reais para aprender como HTML, CSS e JavaScript funcionam juntos.</li>
<li><strong>Pesquisadores e arquivistas</strong> guardam um registro de uma página antes que ela mude ou saia do ar.</li>
</ul>
<h2>O que você pode salvar</h2>
<p>Todo download inclui a página e os arquivos de que ela precisa para ser exibida. As opções permitem adaptar o arquivo ZIP ao que você precisa:</p>
<ul>
<li>Salve até 20 páginas de um site em um único arquivo ZIP, com os links entre elas funcionando offline.</li>
<li>Baixe a versão mobile de um site, ou as versões desktop e mobile lado a lado.</li>
<li>Salve uma página como um único arquivo HTML independente em vez de um ZIP.</li>
<li>Faça uma cópia limpa, sem tags de analytics, scripts de anúncios nem banners de cookies.</li>
<li>Mantenha a estrutura de pastas original do site ou dê a cada arquivo um nome curto e organizado.</li>
</ul>
<p>Cada arquivo ZIP também traz um relatório que lista todos os arquivos salvos, o que não pôde ser salvo e por quê, além de uma análise da página, com as cores, as fontes e o peso da página. Veja <a href="{homeUrl}#whats-saved">o que é salvo em um download</a> para a lista completa.</p>
<h2>Como funciona</h2>
<p>Quando você envia um endereço, nosso servidor solicita a página, encontra todas as folhas de estilo, scripts, imagens e fontes que ela usa, baixa tudo e reescreve a página para que aponte para as cópias salvas. O arquivo ZIP é criado na memória para o seu pedido e enviado direto para o seu navegador. Não guardamos cópia da página nem do arquivo ZIP. O <a href="{homeUrl}#how-it-works">guia passo a passo</a> mostra o processo do início ao fim.</p>
<h2>No que acreditamos</h2>
<ul>
<li><strong>Uso gratuito.</strong> Sem conta, sem cadastro e sem programa para instalar.</li>
<li><strong>Privacidade por padrão.</strong> Não guardamos as páginas que você salva nem os arquivos dentro delas. Nossa <a href="{privacyUrl}">política de privacidade</a> explica exatamente o que coletamos.</li>
<li><strong>Resultados honestos.</strong> Se um arquivo não puder ser salvo, o relatório do ZIP avisa e explica o motivo, para você nunca descobrir uma página quebrada depois.</li>
<li><strong>Respeito aos criadores.</strong> Baixar uma página não dá a você direitos sobre ela. Nossos <a href="{termsUrl}">termos e condições</a> pedem que você salve apenas o que tem permissão para usar.</li>
</ul>
<h2>Fale com a gente</h2>
<p>Encontrou uma página que não é salva corretamente ou tem uma ideia de recurso? Muitas dúvidas comuns são respondidas nas nossas <a href="{homeUrl}#faq">perguntas frequentes</a>. Para todo o resto, <a href="{contactUrl}">fale conosco</a>. Lemos todas as mensagens.</p>`,
  },

  contact: {
    title: 'Contato – Suporte do downloader de sites',
    heading: 'Fale conosco',
    description:
      'Fale com o {name}: ajuda com o downloader de sites, páginas que não foram salvas, ideias de recursos e pedidos de direitos autorais ou privacidade.',
    lead: 'Dúvidas, relatos de bugs, ideias de recursos, avisos de direitos autorais e pedidos de privacidade vão todos para a mesma caixa de entrada, e lemos todas as mensagens.',
    bodyHtml: `<h2>Como podemos ajudar</h2>
<ul>
<li><strong>Ajuda com um download.</strong> Uma página não foi salva, ficou diferente offline ou parou no meio.</li>
<li><strong>Relatos de bugs.</strong> Algo no site não funciona como deveria.</li>
<li><strong>Ideias de recursos.</strong> Uma opção que você gostaria que o downloader de sites tivesse.</li>
<li><strong>Direitos autorais e denúncias de abuso.</strong> Você acredita que o serviço está sendo usado para copiar seu conteúdo sem permissão.</li>
<li><strong>Pedidos de privacidade.</strong> Você quer saber quais informações temos sobre você ou pedir que sejam excluídas.</li>
<li><strong>Parcerias e imprensa.</strong> Você gostaria de trabalhar com a gente ou escrever sobre o {name}.</li>
</ul>
<h2>Antes de escrever</h2>
<p>Muitas dúvidas, como baixar um site completo, salvar a versão mobile ou abrir um site depois de baixá-lo, são respondidas nas nossas <a href="{homeUrl}#faq">perguntas frequentes</a>. Muitas vezes esse é o caminho mais rápido para uma resposta.</p>
<h2>Como relatar uma página que não foi salva corretamente</h2>
<p>Para nos ajudar a corrigir o problema rapidamente, inclua:</p>
<ul>
<li>O endereço da página que você tentou salvar.</li>
<li>As opções que estavam ativadas.</li>
<li>A mensagem exibida abaixo do botão Salvar, se houver.</li>
<li>O que parece errado quando você abre a página salva.</li>
<li>Se tiver, o arquivo <code>archive-report.html</code> que vem dentro do ZIP. Ele lista cada arquivo que não pôde ser salvo e o motivo.</li>
</ul>
<h2>Direitos autorais e denúncias de abuso</h2>
<p>O {name} não hospeda as páginas que as pessoas salvam: cada arquivo ZIP é criado para um único pedido e nunca fica armazenado nos nossos servidores. Se você acredita que o serviço está sendo usado para copiar seu conteúdo de forma que viole seus direitos, envie um e-mail com o endereço da sua página, uma descrição do problema e como podemos entrar em contato com você. Analisamos todas as denúncias. Nossos <a href="{termsUrl}">termos e condições</a> listam o que incluir em uma notificação formal.</p>
<h2>Pedidos de privacidade</h2>
<p>Para saber quais informações pessoais temos sobre você, ou para pedir que sejam corrigidas ou excluídas, envie um e-mail a partir do endereço a que o pedido se refere. Nossa <a href="{privacyUrl}">política de privacidade</a> explica o que coletamos e quais são os seus direitos.</p>
<h2>Prazo de resposta</h2>
<p>Costumamos responder em poucos dias úteis.</p>`,
  },

  privacy: {
    title: 'Política de privacidade e uso de dados',
    heading: 'Política de privacidade',
    description:
      'Leia a política de privacidade do {name}: o que o downloader de sites coleta, o que nunca guardamos, cookies, serviços de terceiros e seus direitos.',
    lead: 'Esta política explica quais informações o {name} coleta quando você usa este site e o downloader de sites dele, por que as coletamos e quais são as suas opções.',
    shortHtml: `<h2>Resumo</h2>
<ul>
<li>Você não precisa de conta, nome nem endereço de e-mail para usar o downloader de sites.</li>
<li>Não guardamos os endereços que você envia, as páginas que buscamos para você nem os arquivos ZIP que criamos.</li>
<li>Não vendemos suas informações pessoais nem as usamos para publicidade.</li>
<li>{analyticsSummary}</li>
</ul>`,
    analyticsSummaryOn: 'Usamos o Google Analytics para contar visitas e entender como o site é usado.',
    analyticsSummaryOff: 'Não usamos cookies de publicidade nem de análise.',
    givenHtml: `<h2>Quem somos</h2>
<p>O {name} (“nós”) mantém este site e o downloader de sites que ele oferece, e é o responsável pelas informações pessoais descritas nesta política. Você pode falar com a gente pelo <a href="mailto:{email}">{email}</a>.</p>
<h2>Informações que você nos fornece</h2>
<p><strong>Endereços da web e opções.</strong> Quando você clica em Salvar, os endereços digitados e as opções escolhidas são enviados ao nosso servidor para que ele busque essas páginas. Quando você pede para encontrar páginas em um site, o endereço dele é enviado para que possamos listá-las. Os endereços são usados apenas para concluir o seu pedido. O arquivo ZIP é criado na memória, enviado ao seu navegador e depois descartado. Não guardamos cópia das páginas nem dos arquivos delas.</p>
<p><strong>Seu arquivo ZIP.</strong> O painel que aparece depois de um download lê o relatório dentro do ZIP no seu navegador. A escolha de arquivos e a recompactação do ZIP também acontecem no seu dispositivo, e nada é enviado de volta para nós.</p>
<p><strong>E-mails.</strong> Se você entrar em contato pelo <a href="mailto:{email}">{email}</a>, recebemos seu endereço de e-mail e o que você escrever. Usamos essas informações apenas para responder e as guardamos só pelo tempo necessário para tratar sua mensagem.</p>
<h2>Informações coletadas automaticamente</h2>
<p>Como na maioria dos sites, nosso provedor de hospedagem registra detalhes técnicos básicos de cada solicitação, como endereço IP, tipo de navegador, página solicitada e horário. Esses registros são usados para manter o serviço funcionando, investigar erros e evitar abusos, e são excluídos em intervalos regulares.</p>
<p>Enquanto um download está em andamento, nosso servidor também usa seu endereço IP para limitar quantos downloads um mesmo visitante pode fazer ao mesmo tempo. Essa contagem fica apenas na memória e desaparece assim que o download termina.</p>
<h2>Como usamos as informações</h2>
<ul>
<li>Para buscar as páginas que você pede e criar seu arquivo ZIP.</li>
<li>Para responder seus e-mails e solicitações.</li>
<li>Para manter o serviço seguro, confiável e justo para todos, e para evitar abusos.</li>
<li>Para encontrar e corrigir erros.</li>
<li>Para cumprir nossas obrigações legais.</li>
</ul>
<h2>Bases legais para o tratamento</h2>
<p>Se você está no Espaço Econômico Europeu, no Reino Unido ou na Suíça, tratamos informações pessoais porque elas são necessárias para prestar o serviço que você pede, em razão do nosso legítimo interesse em manter um serviço seguro e confiável e evitar abusos, ou para cumprir a lei.</p>`,
    analyticsHtml: `<h2>Análise de uso</h2>
<p>Usamos o Google Analytics, um serviço da Google LLC, para entender como os visitantes usam o site, por exemplo quais páginas são vistas e como as pessoas chegam até ele. O Google Analytics define cookies e processa dados, incluindo seu endereço IP, nos servidores do Google, que podem ficar fora do seu país. Consultamos os relatórios apenas de forma agregada e não os usamos para identificar você. Você pode ler a <a href="https://policies.google.com/privacy">Política de Privacidade do Google</a> e desativar o rastreamento com o <a href="https://tools.google.com/dlpage/gaoptout">complemento do navegador para desativação do Google Analytics</a>.</p>`,
    cookiesTitle: 'Cookies e armazenamento local',
    cookiesOn:
      'Não definimos nenhum cookie próprio. O Google Analytics define cookies para diferenciar as visitas. Você pode bloquear ou excluir cookies nas configurações do navegador, e o downloader de sites continua funcionando sem eles.',
    cookiesOff: 'Não definimos nenhum cookie, e o downloader de sites não precisa deles para funcionar.',
    restHtml: `<p>Se você escolher o tema claro ou escuro, essa escolha fica salva no armazenamento local do navegador para que o site se lembre dela. Ela nunca sai do seu dispositivo, e limpar os dados do navegador a remove.</p>
<h2>Serviços de terceiros</h2>
<ul>
<li><strong>Hospedagem.</strong> Nosso provedor de hospedagem opera os servidores por trás deste site e processa, em nosso nome, os registros de solicitações descritos acima.</li>
<li><strong>Google Fonts.</strong> O site carrega as fontes do Google Fonts, então seu navegador se conecta aos servidores do Google, que recebem seu endereço IP.</li>
</ul>
<h2>Os sites que você salva</h2>
<p>Quando você salva uma página, é o nosso servidor, e não o seu navegador, que acessa o site informado e os servidores que hospedam os arquivos dele. Esses sites veem uma solicitação vinda do nosso servidor, não do seu endereço IP. A solicitação se identifica como um navegador comum (um navegador de celular, se você escolher a versão mobile) e não leva nenhum dos seus cookies nem informações pessoais.</p>
<h2>Não vendemos suas informações</h2>
<p>Não vendemos, alugamos nem trocamos informações pessoais, não as compartilhamos para publicidade direcionada e não criamos perfis de visitantes. Só compartilhamos informações com os prestadores de serviço citados nesta política ou quando a lei exige.</p>
<h2>Transferências internacionais</h2>
<p>Nossos prestadores de serviço podem tratar informações em países diferentes daquele em que você mora, incluindo os Estados Unidos. Quando a lei exige, essas transferências se apoiam em salvaguardas adequadas, como decisões de adequação ou cláusulas contratuais padrão.</p>
<h2>Por quanto tempo guardamos informações</h2>
<ul>
<li><strong>Endereços enviados e arquivos ZIP:</strong> não são armazenados. Existem apenas enquanto o seu download está sendo criado.</li>
<li><strong>Registros do servidor:</strong> mantidos por um período limitado por motivos de segurança e solução de problemas, e depois excluídos.</li>
<li><strong>E-mails:</strong> guardados apenas pelo tempo necessário para respondê-los e tratar qualquer acompanhamento.</li>
</ul>
<h2>Segurança</h2>
<p>Todo o tráfego deste site é criptografado com HTTPS. Os arquivos ZIP são criados na memória e nunca gravados em disco, e o downloader de sites se recusa a acessar redes privadas e endereços internos. Nenhum método de transmissão ou armazenamento é totalmente seguro, mas trabalhamos para proteger as poucas informações que tratamos.</p>
<h2>Privacidade de crianças</h2>
<p>Este serviço não é destinado a menores de 13 anos, e não coletamos intencionalmente informações pessoais deles. Se você acredita que uma criança nos enviou informações pessoais, <a href="{contactUrl}">fale conosco</a> e nós as excluiremos.</p>
<h2>Seus direitos de privacidade</h2>
<p>Dependendo de onde você mora, a legislação local, como a LGPD no Brasil, pode garantir a você o direito de:</p>
<ul>
<li>Saber quais informações pessoais temos sobre você e receber uma cópia delas.</li>
<li>Pedir a correção de informações incorretas.</li>
<li>Pedir a exclusão das suas informações.</li>
<li>Opor-se à forma como as usamos ou pedir que esse uso seja restringido.</li>
<li>Receber suas informações em um formato portável.</li>
<li>Apresentar uma reclamação à autoridade de proteção de dados do seu país.</li>
</ul>
<p>Se você mora na Califórnia ou em outro estado dos EUA com uma lei de privacidade do consumidor, também tem o direito de saber o que coletamos, de corrigir e excluir essas informações e de não ser tratado de forma diferente por exercer esses direitos. Não vendemos nem compartilhamos informações pessoais no sentido que essas leis dão a esses termos.</p>
<p>Para fazer uma solicitação, envie um e-mail para <a href="mailto:{email}">{email}</a>. Talvez precisemos confirmar sua identidade antes, e responderemos dentro do prazo previsto em lei. Como guardamos tão pouco, muitas vezes não temos nenhuma informação sobre você.</p>
<h2>Links para outros sites</h2>
<p>Esta política se aplica somente ao {name}. Os sites que você baixa e os sites para os quais temos links têm as próprias políticas de privacidade, e não somos responsáveis pela forma como eles tratam as informações.</p>
<h2>Alterações nesta política</h2>
<p>Se alterarmos esta política, atualizaremos a data no topo desta página. Mudanças importantes serão destacadas no site.</p>
<h2>Contato</h2>
<p>Dúvidas sobre esta política de privacidade ou sobre como tratamos seus dados? Envie um e-mail para <a href="mailto:{email}">{email}</a> ou use nossa <a href="{contactUrl}">página de contato</a>.</p>`,
  },

  terms: {
    title: 'Termos e condições de uso',
    heading: 'Termos e condições',
    description:
      'Termos e condições do {name}, o downloader de sites grátis: uso aceitável, notificações de direitos autorais, limites, isenções e responsabilidade.',
    lead: 'Estes termos se aplicam quando você usa o {name} e o downloader de sites dele. Ao usar o site, você concorda com eles, então leia com atenção.',
    bodyHtml: `<h2>Sobre estes termos</h2>
<p>Estes termos e condições (“termos”) são um acordo entre você e o {name} (“nós”). Eles regem o uso deste site e do downloader de sites que ele oferece (em conjunto, “o serviço”). Se você não concordar com eles, não use o serviço.</p>
<h2>Quem pode usar o serviço</h2>
<p>Você precisa ter pelo menos 13 anos para usar o serviço. Se você ainda não atingiu a maioridade no lugar onde mora, só pode usá-lo com a permissão de um dos pais ou responsável legal. Se você usa o serviço em nome de uma empresa ou outra organização, confirma que tem autoridade para aceitar estes termos em nome dela.</p>
<h2>O serviço</h2>
<p>O {name} permite que você informe o endereço de uma página da web pública e baixe um arquivo ZIP com essa página e os arquivos que ela usa, como folhas de estilo, scripts, imagens e fontes. Você também pode salvar várias páginas de uma vez, a versão mobile de uma página ou um único arquivo HTML independente. O serviço é gratuito, não exige conta e é fornecido no estado em que se encontra. Podemos adicionar, alterar ou remover recursos a qualquer momento.</p>
<h2>Uso aceitável</h2>
<p>Você concorda em usar o serviço apenas para fins legais. Em especial, você concorda em não:</p>
<ul>
<li>Baixar, copiar ou republicar conteúdo que você não tem o direito de usar.</li>
<li>Apresentar um site baixado como se fosse seu, nem usá-lo para se passar por outra pessoa ou empresa.</li>
<li>Usar páginas baixadas para phishing, fraude, malware ou para coletar informações de outras pessoas.</li>
<li>Tentar acessar redes privadas, serviços internos ou páginas que exigem login.</li>
<li>Enviar solicitações automatizadas ou em excesso que sobrecarreguem de forma indevida nossos servidores ou os sites que você baixa.</li>
<li>Tentar quebrar, sondar ou contornar a segurança ou os limites do serviço.</li>
<li>Revender o serviço, ou oferecê-lo como parte de outro produto, sem nossa permissão por escrito.</li>
</ul>
<h2>Direitos autorais e conteúdo de terceiros</h2>
<p>Os sites que você baixa pertencem aos seus donos. Salvar uma página não transfere nenhum direito sobre os textos, imagens, código, fontes ou marcas dela. Você é responsável por garantir que o uso do material baixado seja permitido, por exemplo para estudo pessoal, para fazer backup do seu próprio site ou com a permissão do dono. Confira a licença de qualquer fonte ou imagem antes de reutilizá-la.</p>
<p>O {name} é uma ferramenta, não um serviço de hospedagem: cada arquivo ZIP é criado para um único pedido e não fica armazenado nos nossos servidores nem é publicado por nós.</p>
<h2>Reclamações de direitos autorais</h2>
<p>Se você acredita que o serviço está sendo usado para violar seus direitos autorais ou outros direitos, envie um e-mail para <a href="mailto:{email}">{email}</a> com:</p>
<ul>
<li>Seu nome e seus dados de contato.</li>
<li>Uma descrição da obra que você acredita estar sendo violada.</li>
<li>O endereço da página em questão.</li>
<li>Uma declaração de que você acredita, de boa-fé, que o uso não foi autorizado pelo titular, por seu representante ou pela lei.</li>
<li>Uma declaração de que as informações da sua notificação são precisas e de que você é o titular ou está autorizado a agir em nome dele.</li>
<li>Sua assinatura física ou eletrônica.</li>
</ul>
<p>Analisamos todas as notificações e podemos tomar medidas como bloquear solicitações para o endereço em questão.</p>
<h2>Nosso conteúdo e nossa marca</h2>
<p>O nome {name}, o logotipo, o design do site, os textos e o software pertencem a nós ou aos nossos licenciadores. Estes termos não dão a você nenhum direito de usá-los, exceto para se referir ao serviço com precisão.</p>
<h2>Sites de terceiros</h2>
<p>As páginas que você baixa e os links deste site levam a sites que não controlamos. Não somos responsáveis pelo conteúdo, pela disponibilidade nem pelas práticas deles, e salvar uma página não significa que nós a endossamos.</p>
<h2>Limites e disponibilidade</h2>
<p>Para manter o serviço rápido e justo, cada download tem limites de número de páginas e arquivos, tamanho de arquivo e tempo de processamento, e cada visitante só pode fazer alguns downloads ao mesmo tempo. Podemos alterar esses limites, bloquear solicitações que abusem do serviço ou suspender ou encerrar o acesso a qualquer momento, com ou sem aviso. Também podemos pausar o serviço para manutenção ou deixar de oferecê-lo.</p>
<h2>Sem garantias</h2>
<p>O serviço é fornecido “no estado em que se encontra” e “conforme disponível”, sem garantias de nenhum tipo, expressas ou implícitas, incluindo garantias de comerciabilidade, adequação a uma finalidade específica e não violação. Não garantimos que todas as páginas serão baixadas por completo ou ficarão iguais ao original, nem que o serviço funcionará sem interrupções, com segurança ou sem erros.</p>
<h2>Limitação de responsabilidade</h2>
<p>Na máxima extensão permitida por lei, o {name} não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais, nem por qualquer perda de dados, lucros ou negócios, decorrentes do seu uso do serviço ou de qualquer conteúdo que você baixe com ele. Alguns lugares não permitem essas limitações, então algumas delas podem não se aplicar a você.</p>
<h2>Indenização</h2>
<p>Você concorda em defender e indenizar o {name} por quaisquer reclamações, perdas ou custos, incluindo honorários advocatícios razoáveis, decorrentes do uso indevido do serviço ou da violação destes termos por você.</p>
<h2>Disposições gerais</h2>
<p>Se alguma parte destes termos for considerada inexequível, o restante continua em vigor. Se não exigirmos o cumprimento de um termo imediatamente, não abrimos mão do direito de exigi-lo depois. Estes termos, junto com nossa <a href="{privacyUrl}">política de privacidade</a>, constituem o acordo integral entre você e nós sobre o serviço.</p>
<h2>Alterações nestes termos</h2>
<p>Podemos atualizar estes termos de tempos em tempos. A data no topo desta página mostra quando eles foram alterados pela última vez. Continuar usando o serviço após uma alteração significa que você aceita os termos atualizados.</p>
<h2>Contato</h2>
<p>Dúvidas sobre estes termos? Envie um e-mail para <a href="mailto:{email}">{email}</a> ou use nossa <a href="{contactUrl}">página de contato</a>.</p>`,
  },

  notFound: {
    title: 'Página não encontrada',
    description: 'Esta página não existe.',
    heading: 'Esta página não existe',
    text: 'O link pode estar quebrado ou a página pode ter mudado de endereço. Confira o endereço ou volte para o downloader.',
    button: 'Ir para o downloader de sites',
  },

  serverError: {
    title: 'Algo deu errado',
    description: 'Ocorreu um erro inesperado do nosso lado.',
    heading: 'Algo deu errado do nosso lado',
    textHtml:
      'O servidor encontrou um erro inesperado ao carregar esta página. Tente de novo daqui a pouco. Se continuar acontecendo, <a href="{contactUrl}">avise a gente</a>.',
    button: 'Ir para o downloader de sites',
  },
};

export default pt;
