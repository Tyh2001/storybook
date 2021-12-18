module.exports = {
  title: 'Tyh2001',
  head: [
    ['link', { rel: 'icon', href: '/my.jpg' }]
  ],
  description: '前端开发,javascript,php,node,jquery,git,python,java,sql,mysql,linux,go语言,golang,前端,教程,软件,编程,互联网,tyh-ui,TYH-UI,tyh,TYH,ui,UI,element,框架,组件库,组件,vue,vue3,码云,NPM,npm,components,js,github,gitee,npm,vant,element3,vite,viewUI,tyh-ui,tyh ui,ui tyh,tyh-ui2,tyh-ui,tyh2001的个人网站',
  base: '/blog/',
  themeConfig: {
    lastUpdated: '最后更新', // 最后更新时间
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/Tyh2001/my-note-web' },
      {
        text: 'tyh-Ui',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'tyh-ui', link: 'https://tianyuhao.icu/tyhui' },
          { text: 'tyh-ui2', link: 'https://tianyuhao.icu/tyhui/v3' }
        ]
      },
      {
        text: '关于我',
        ariaLabel: 'Language Menu',
        items: [
          { text: '个人网站', link: 'https://tianyuhao.icu' },
          { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
          { text: '微博', link: 'https://weibo.com/tyh2001' }
        ]
      },
      {
        text: '相关链接',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Vue3', link: 'https://v3.cn.vuejs.org' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/' },
          { text: 'Pinia', link: 'https://pinia.esm.dev' },
          { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh' }
        ]
      }
    ],
    sidebarDepth: 2,
    // 侧边栏
    sidebar: [
      {
        title: 'Hello',
        path: '/hello/hello',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: '里程碑',
        path: '/milepost/milepost',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Vue3 相关',
        path: '/vue3/vue3',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Js 相关',
        path: '/javascript/js-function',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: "函数相关", path: "/javascript/js-function" },
          { title: "Js 内置", path: "/javascript/js-inside" },
          { title: "数组操作", path: "/javascript/js-array" },
          { title: "Js 工具函数", path: "/javascript/js-utils" },
          { title: "杂项", path: "/javascript/js-other" },
          { title: "算法", path: "/javascript/js-algorithm" },
        ]
      },
      {
        title: 'TypeScript 基础',
        path: '/typescript/ts',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Vue2 相关',
        path: '/vue2/vue2',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: '其它技术',
        path: '/other/other',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: '前端面试题',
        path: '/int-ques/ques-web',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: "Web 综合问题", path: "/int-ques/ques-web" },
          { title: "Css 相关问题", path: "/int-ques/ques-css" },
          { title: "Html 相关问题", path: "/int-ques/ques-html" },
          { title: "Js 相关问题", path: "/int-ques/ques-js" },
          { title: "Vue2 相关问题", path: "/int-ques/ques-vue2" },
          { title: "Vue3 相关问题", path: "/int-ques/ques-vue3" }
        ]
      }
    ]
  }
}
