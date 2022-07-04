const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
  base: "/docs/",
  title: "青鸟飞鱼",
  description: "青鸟飞鱼的博客",
  head: [
    ['meta', { name: 'author', content: '青鸟飞鱼' }],
    ['meta', { name: 'Keywords', content: '青鸟飞鱼各自生活永不相见' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format("LLLL")
      }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "刷新"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'achanghello',
      repo: 'docs',
      clientId: '5cd8e02d922c3dec24da',
      clientSecret: '876375c03a376fb3e23d1eea22c857a1ed1624c2',
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true
  },
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    sidebar: [
      '/',
      '/about',
      '/language/chinese/',
      {
        title: '分组标题css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/css-a',
          '/css/css-b'
        ]
      }
    ],
    logo: '/assets/img/hero.png',
    //navbar: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chang', link: '/chang.html' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}