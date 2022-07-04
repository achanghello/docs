module.exports = {
  title: "青鸟飞鱼",
  description: "青鸟飞鱼的博客",
  head: [
    ['meta', { name: 'author', content: '青鸟飞鱼' }],
    ['meta', { name: 'Keywords', content: '青鸟飞鱼各自生活永不相见' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
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