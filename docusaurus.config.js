// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "midilab",
  tagline: "DIY Electronic Music Instruments",
  favicon: "img/favicon.svg",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;550&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/x-icon",
        href: "/img/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        as: "image",
        type: "image/avif",
        imagesrcset:
          "/img/header-480.avif 480w, /img/header-800.avif 800w, /img/header-1200.avif 1200w, /img/header-1600.avif 1600w",
        imagesizes: "100vw",
        fetchpriority: "high",
      },
    },
  ],

  url: "https://midilab.co/",
  baseUrl: "/",

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/midilab_logo.svg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "midilab",
        logo: {
          alt: "midilab",
          src: "img/midilab_logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "DSP",
            position: "left",
            center: true,
            items: [
              { label: "JC-303", to: "/jc303" },
              { label: "OpenDSP", to: "/opendsp" },
            ],
          },
          {
            type: "dropdown",
            label: "Sequencer",
            position: "left",
            center: true,
            items: [
              { label: "Aciduino", to: "/aciduino" },
              { label: "Pattern Remix", to: "/midibox-seqv4-pattern-remix" },
            ],
          },
          {
            type: "dropdown",
            label: "Libraries",
            position: "left",
            center: true,
            items: [
              { label: "µClock", to: "/uClock" },
              { label: "µCtrl", to: "/uCtrl" },
              { label: "µMODULAR", to: "/umodular" },
            ],
          },
          {
            to: "/docs",
            label: "Docs",
            position: "left",
            center: true,
          },
          {
            to: "/about",
            label: "About",
            position: "left",
            center: true,
          },
          {
            type: "html",
            position: "right",
            value: `
              <a
                href="https://github.com/midilab"
                target="_blank"
                rel="noreferrer"
                class="navbar__action-btn"
              >
                <svg class="navbar__action-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
                </svg>
                GitHub
              </a>
            `,
          },
          {
            type: "html",
            position: "right",
            value: `
              <a
                href="/#support"
                class="navbar__action-btn navbar__action-btn--primary"
              >
                <svg class="navbar__action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
Support
              </a>
            `,
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/midilab_logo.svg",
          alt: "midilab",
          width: 32,
          height: 32,
          href: "/",
        },
        links: [
          {
            title: "DSP",
            items: [
              { label: "JC-303", to: "/jc303" },
              { label: "OpenDSP", to: "/opendsp" },
            ],
          },
          {
            title: "Sequencer",
            items: [
              { label: "Aciduino", to: "/aciduino" },
              { label: "Pattern Remix", to: "/midibox-seqv4-pattern-remix" },
            ],
          },
          {
            title: "Libraries",
            items: [
              { label: "µClock", to: "/uClock" },
              { label: "µCtrl", to: "/uCtrl" },
              { label: "µMODULAR", to: "/umodular" },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                html: '<a href="https://github.com/midilab" target="_blank" rel="noreferrer" class="footer__link-item footer__link-item--icon"><svg class="footer__link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/></svg>GitHub</a>',
              },
              {
                html: '<a href="https://discord.gg/EzbaPqwCJG" target="_blank" rel="noreferrer" class="footer__link-item footer__link-item--icon"><svg class="footer__link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>Discord</a>',
              },
              {
                html: '<a href="/#support" class="footer__link-item footer__link-item--icon"><svg class="footer__link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>Support</a>',
              },
            ],
          },
        ],
        copyright:
          `<div class="footer-bottom-inner">` +
          `<span>© ${new Date().getFullYear()} midilab. Released under CC-BY-SA 4.0.</span>` +
          `<span class="footer-tagline">Open Hardware · Open Firmware · Open Source</span>` +
          `</div>`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-30TXP5JF0Q",
        anonymizeIP: true,
      },
    ],
  ],
};
export default config;
