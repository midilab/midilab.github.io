// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Sequencer',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'sequencer/aciduino-v1/index',
          label: 'Aciduino V1',
        },
        {
          type: 'doc',
          id: 'sequencer/aciduino-v2/index',
          label: 'Aciduino V2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'libraries/uclock/index',
          label: 'µClock',
        },
        {
          type: 'doc',
          id: 'libraries/uctrl/index',
          label: 'µCtrl',
        },
        {
          type: 'doc',
          id: 'libraries/umodular/index',
          label: 'µMODULAR',
        },
      ],
    },
    {
      type: 'category',
      label: 'DSP',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'dsp/opendsp/index',
          label: 'OpenDSP',
        },
        {
          type: 'doc',
          id: 'dsp/jc303/index',
          label: 'JC-303',
        },
      ],
    },
  ],
};

export default sidebars;