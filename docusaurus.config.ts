import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Web Music Score',
  tagline: 'A music score component for the web.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://web-music-score.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'web-music-score',      // Usually your GitHub org/user name.
  projectName: 'web-music-score.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  trailingSlash: false, // optional but recommended

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'showcase',
        path: 'showcase',              // folder containing MDX pages for showcase
        routeBasePath: 'showcase',     // URL prefix: /showcase/
        sidebarPath: require.resolve('./sidebarsShowcase.ts'),
      },
    ],
  ],

  clientModules: [
    require.resolve('./src/client-modules/init-web-music-score.ts'),
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    image: 'img/wms-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Web Music Score',
      logo: {
        alt: 'Web Music Score Logo',
        src: 'img/logo.png',
      },
      items: [
        { label: 'Showcase', type: 'docSidebar', sidebarId: 'showcaseSidebar', docsPluginId: 'showcase', position: 'left' },
        { label: 'Documentation', type: 'docSidebar', sidebarId: 'docSidebar', position: 'left' },
        { label: 'Support', to: '/support', position: 'left' },
        { label: 'Blog', to: '/blog', position: 'left' },
        { label: 'GitHub', href: 'https://github.com/web-music-score', position: 'right', },
        { label: 'NPM Package', href: 'https://npmjs.org/package/web-music-score', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Documentation', to: '/docs', },
          ],
        },
        {
          title: 'Follow',
          items: [
            { label: 'Facebook', href: 'https://facebook.com/wmscore', },
            { label: 'Email', href: 'mailto:web-music-score@outlook.com', },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'GitHub', href: 'https://github.com/web-music-score/wms', },
            { label: 'NPM Package', href: 'https://npmjs.org/package/web-music-score', },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'License', to: '/license', },
          ],
        },
        {
          title: 'Other',
          items: [
            { label: 'PahkaSoft.com', href: 'https://pahkasoft.com', },
          ],
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} Stefan B.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
