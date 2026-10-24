import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'e-cordel',
  tagline: 'Literatura de cordel para todos',
  favicon: 'img/media/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://www.ecordel.com.br',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'e-cordel',
  projectName: 'site',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/media/bannercordel-1.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Página inicial do e-cordel',
        src: 'img/ecordel-avatar.png',
      },
      items: [
        {to: '/breve-historia-do-cordel/', label: 'História', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/como-contribuir/', label: 'Contribua', position: 'left'},
        {
          href: 'https://ler.ecordel.com.br/',
          label: 'Ler cordéis',
          position: 'right',
        },
        {
          href: 'https://github.com/e-cordel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conheça',
          items: [
            {
              label: 'História do cordel',
              to: '/breve-historia-do-cordel/',
            },
            {
              label: 'Wiki do projeto',
              to: '/docs/como-publicar-cordeis/',
            },
          ],
        },
        {
          title: 'Participe',
          items: [
            {
              label: 'Como contribuir',
              to: '/como-contribuir/',
            },
            {
              label: 'Contato',
              href: 'mailto:contato@ecordel.com.br',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Política de privacidade',
              to: '/politica-de-privacidade/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/e-cordel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} e-cordel. Projeto voluntário e de código aberto.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
