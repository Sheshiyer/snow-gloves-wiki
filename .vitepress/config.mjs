export default {
  title: 'Snow Gloves',
  description: 'Use the app and the ecosystem. You keep the decisions.',
  srcExclude: ['README.md'],
  ignoreDeadLinks: [/^\/user\//],
  themeConfig: {
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Install', link: '/install' },
      { text: 'Onboard', link: '/onboard' },
      { text: 'Assets', link: '/assets' },
      { text: 'Product repo', link: 'https://github.com/Sheshiyer/snow-gloves-os' },
    ],
    sidebar: [
      {
        text: 'First hour',
        items: [
          { text: 'Start here', link: '/' },
          { text: 'Install', link: '/install' },
          { text: 'Pick a runtime', link: '/runtime' },
          { text: 'Onboard a company', link: '/onboard' },
        ],
      },
      {
        text: 'The work',
        items: [
          { text: 'The team', link: '/team' },
          { text: 'Modules', link: '/modules' },
          { text: 'A quiet week', link: '/week' },
          { text: 'Slides, audio, video', link: '/assets' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sheshiyer/snow-gloves-os' },
    ],
    footer: {
      message: 'You keep the decisions. The team drafts.',
      copyright: 'Thoughtseed',
    },
  },
}
