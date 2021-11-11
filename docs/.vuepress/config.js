module.exports = {
  title: 'Tyh',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '个人网站', link: 'https://tianyuhao.icu' },
      { text: 'Tyh-ui2', link: 'https://tianyuhao.icu/tyhui/v3' },
      { text: 'Github', link: 'https://github.com/Tyh2001' },
      { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
      { text: '微博', link: 'https://weibo.com/u/7112859998' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: true,
        sidebarDepth: 1
      },
      {
        title: 'Vue3 相关',
        path: '/vue3/',
        collapsable: true,
        sidebarDepth: 1
      },
      {
        title: 'Vue2 相关',
        path: '/vue2/',
        collapsable: true,
        sidebarDepth: 1
      },
      {
        title: 'Js 相关',
        path: '/js/',
        collapsable: true,
        sidebarDepth: 2
      },
      {
        title: 'Js 工具函数',
        path: '/utils-fun/',
        collapsable: true,
        sidebarDepth: 2
      }
    ]
  }
}