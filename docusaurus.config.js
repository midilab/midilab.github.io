// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'midilab',
  tagline: 'DIY Electronic Music Instruments',
  favicon: 'img/favicon.ico',

  future: {
    v4: false,
  },

  url: 'https://midilab.co/',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/midilab/midilab.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/midilab/midilab.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/midilab_logo.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'midilab',
        logo: {
          alt: 'midilab logo',
          src: 'img/midilab_logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'DSP',
            position: 'right',
            items: [
              {
                label: 'JC-303',
                to: '/jc303',
              },
              {
                label: 'OpenDSP',
                to: '/opendsp',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Sequencer',
            position: 'right',
            items: [
              {
                label: 'Aciduino',
                to: '/aciduino',
              },
              {
                label: 'Pattern Remix',
                to: '/midibox-pattern-remix',
              },
            ],
          },
          {
type: 'dropdown',
            label: 'Libraries',
            position: 'right',
            items: [
              {
                label: 'µClock',
                to: '/uClock',
              },
              {
                label: 'µCtrl',
                to: '/uCtrl',
              },
              {
                label: 'µMODULAR',
                to: '/umodular',
              },
            ],
          },
          {
            href: 'https://github.com/',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/about',
            label: 'About',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'DSP',
            items: [
              {
                label: 'OpenDSP',
                to: '/opendsp',
              },
              {
                label: 'JC-303',
                to: '/jc303',
              },
            ],
          },
          {
            title: 'Sequencer',
            items: [
              {
                label: 'Aciduino',
                to: '/aciduino',
              },
              {
                label: 'Pattern Remix',
                to: '/midibox-pattern-remix',
              },
            ],
          },
          {
            title: 'Libraries',
            items: [
              {
                label: 'µClock',
                to: '/uClock',
              },
              {
                label: 'µCtrl',
                to: '/uCtrl',
              },
              {
                label: 'µMODULAR',
                to: '/umodular',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/midilab',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/DCb3dy5A',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} midilab.co`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-30TXP5JF0Q',
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;