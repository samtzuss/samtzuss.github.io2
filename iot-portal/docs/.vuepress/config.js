module.exports = {
  lang: 'zh-TW',
  title: 'AGAI智慧雲 - 工業物聯網',
  description: '這是AGAI iot智慧雲demo',
  themeConfig : {
    logo: 'https://picsum.photos/100/70',
    nav : [
      { text: 'Home', link: '/' }
    ],
    lastUpdated: false,
    contributors: false,
    sidebar: false
  },
  head: [
    [ 'link', { rel: 'icon', href: '/images/agai-favicon.ico' },
      'meta', { name: 'viewport', content: 'width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0' }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-TW',
    }
  },
  markdown: {
    lineNumbers: true,
    links: {
      externalIcon: false
    }
  }
}