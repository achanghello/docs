const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
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
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
      'ga': 'UA-233495930-1'
    }
  }