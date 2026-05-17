// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'DIY Devices',
    },
    {
      type: 'category',
      label: 'Sequencer',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'sequencer/aciduino/intro',
          label: 'Aciduino V1',
        },
        {
          type: 'doc',
          id: 'sequencer/aciduino-v2/V2-Manual',
          label: 'Aciduino V2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'libraries/uclock/intro',
          label: 'µClock',
        },
        {
          type: 'doc',
          id: 'libraries/uctrl/intro',
          label: 'µCtrl',
        },
        {
          type: 'category',
          label: 'µMODULAR',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'libraries/umodular/umodular',
              label: 'Introduction',
            },
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'libraries/umodular/pcb_kit/pot16',
                  label: 'POT16',
                },
              ],
            },
            {
              type: 'category',
              label: 'PCBs and Kits',
              items: [
                {
                  type: 'doc',
                  id: 'libraries/umodular/pcb_kit/shields/mega2560',
                  label: 'Mega Shield',
                },
                {
                  type: 'doc',
                  id: 'libraries/umodular/pcb_kit/shields/mini',
                  label: 'Mini Shield',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DSP',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'dsp/opendsp/intro',
          label: 'OpenDSP',
        },
        {
          type: 'doc',
          id: 'dsp/jc303/intro',
          label: 'JC-303',
        },
      ],
    },
    {
      type: 'link',
      href: 'https://github.com/midilab/',
      label: 'GitHub',
    },
    {
      type: 'link',
      href: 'https://discord.gg/DCb3dy5A',
      label: 'Discord',
    },
  ],
};

export default sidebars;