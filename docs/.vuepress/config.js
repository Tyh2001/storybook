module.exports = {
  title: 'Tyh',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Hello', link: '/' },
      { text: '个人网站', link: 'https://tianyuhao.icu' },
      { text: 'Github', link: 'https://github.com/Tyh2001' },
      { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
      { text: '微博', link: 'https://weibo.com/u/7112859998' },
      {
        text: 'tyh-Ui',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'tyh-ui', link: 'https://tianyuhao.icu/tyhui' },
          { text: 'tyh-ui2', link: 'https://tianyuhao.icu/tyhui/v3' }
        ]
      },
      {
        text: '模拟微博',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'pc', link: 'https://tianyuhao.icu/release/pc' },
          { text: 'phone', link: 'https://tianyuhao.icu/release/phone' }
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
    sidebar: [
      {
        title: '首页',
        path: '/',
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
        title: 'Vite 基础',
        path: '/vite/vite',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Js 相关',
        path: '/js/js-function',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: "函数相关", path: "/js/js-function" },
          { title: "内置函数", path: "/js/js-built-in-obj" },
          { title: "数组操作", path: "/js/js-array_operation" },
          { title: "杂项", path: "/js/js-miscellaneous" }
        ]
      },
      {
        title: 'Vue2 相关',
        path: '/vue2/vue2',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Js 工具函数',
        path: '/utils-fun/utils-fun',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: '其它技术',
        path: '/other-technology/other-technology',
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
