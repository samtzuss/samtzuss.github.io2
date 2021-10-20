module.exports = {
  lang: 'zh-TW',
  title: 'AGAI智慧雲 | 工業IOT',
  description: '這是AGAI iot智慧雲demo',
  navbar: true,

  themeConfig: {
    logo: 'https://picsum.photos/100/70',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      '/'
    ]
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
  /*
  Markdown: {
    links: {
      externalIcon: false
    }
  }

  */
}