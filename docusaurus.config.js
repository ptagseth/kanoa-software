// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kanoa Docs',
  tagline: 'Documentation to help you get started with the Kanoa MES framework',
  favicon: 'img/kanoa.ico',

  // Set the production url of your site here
  url: 'https://kanoa-software.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'/*, 'es'*/],
    localeConfigs: {
        en: {
            label: 'English',
        },/*
        es: {
            label: 'Español'
        }*/
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    algolia: {
        // The application ID provided by Algolia
        appId: 'Z9I4A7AO2A',

        // Public API key: it is safe to commit it
        apiKey: '0b6575cc05de135d70cd658082f4c784',

        indexName: 'kanoa-software',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Kanoa Docs',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/',
          target: '_self',
        },
        /*items: [
            {
                type: 'localeDropdown',
                position: 'right',
            },
        ],*/
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'Our Company',
                href: 'https://www.kanoa.ai',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/kanoacon/',
              },
            ],
          },
          {
            title: 'More',
            items: [
                {
                  label: 'Contact Us',
                  href: 'https://kanoa.ai/contact',
                },
                {
                  label: 'Terms & Conditions',
                  href: '/terms-and-conditions',
                },
                {
                  label: 'Privacy Statement',
                  href: '/website-privacy-statement',
                },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

