import Vue from 'vue'
Vue.component("CountUp", () => import("D:\\a学习文件\\vuepress\\docs\\docs\\.vuepress\\components\\CountUp"))
Vue.component("test", () => import("D:\\a学习文件\\vuepress\\docs\\docs\\.vuepress\\components\\test"))

Vue.component("Badge", () => import("D:\\a学习文件\\vuepress\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))
Vue.component("CodeBlock", () => import("D:\\a学习文件\\vuepress\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("CodeGroup", () => import("D:\\a学习文件\\vuepress\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))


export default {}