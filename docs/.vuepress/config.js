const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf")
const sidebarConf = require("./config/sidebarConf")
const navConf = require("./config/navConf")


module.exports = {
  base: "/docs/",
  title: "青鸟飞鱼",
  description: "青鸟飞鱼的博客",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    sidebar: sidebarConf,
    logo: '/assets/img/hero.png',
    //navbar: false,
    nav: navConf
  }
}