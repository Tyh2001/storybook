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
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Vue3 相关',
        path: '/vue3/',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Vue2 相关',
        path: '/vue2/',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: 'Js 相关',
        path: '/js/function',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: "函数相关", path: "/js/function" },
          { title: "内置函数", path: "/js/built-in-obj" }
        ]
      },
      {
        title: 'Js 工具函数',
        path: '/utils-fun/',
        collapsable: false,
        sidebarDepth: 2
      },
      {
        title: '前端面试题',
        path: '/int-ques/',
        collapsable: false,
        sidebarDepth: 2
      }
    ]
  }
}
