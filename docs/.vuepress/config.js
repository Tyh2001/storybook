module.exports = {
  title: 'Tyh2001',
  head: [
    ['link', { rel: 'icon', href: '/my.png' }]
  ],
  description: '前端开发,javascript,php,node,jquery,git,python,java,sql,mysql,linux,go语言,golang,前端,教程,软件,编程,互联网,tyh-ui,TYH-UI,tyh,TYH,ui,UI,element,框架,组件库,组件,vue,vue3,码云,NPM,npm,components,js,github,gitee,npm,vant,element3,vite,viewUI,tyh-ui,tyh ui,ui tyh,tyh-ui2,tyh-ui,tyh2001的个人网站',
  // base: '/blog/',
  themeConfig: {
    logo: '/my.png',
    contributors: false,
    lastUpdatedText: '最后更新', // 最后更新时间
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/Tyh2001/my-note-web' },
      {
        text: 'tyh-Ui',
        ariaLabel: 'Language Menu',
        children: [
          { text: 'tyh-ui', link: 'https://tianyuhao.icu/tyhui' },
          { text: 'tyh-ui2', link: 'https://tianyuhao.icu/tyhui/v3' }
        ]
      },
      {
        text: '关于我',
        ariaLabel: 'Language Menu',
        children: [
          { text: '个人网站', link: 'https://tianyuhao.icu' },
          { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
          { text: '微博', link: 'https://weibo.com/tyh2001' }
        ]
      },
      {
        text: '相关链接',
        ariaLabel: 'Language Menu',
        children: [
          { text: 'Vue3', link: 'https://v3.cn.vuejs.org' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/' },
          { text: 'Pinia', link: 'https://pinia.esm.dev' },
          { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh' }
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      '/hello/hello',
      '/milepost/milepost',
      '/vue3/vue3',
      '/vue2/vue2',
      '/typescript/typescript',
      {
        text: 'Js 相关',
        children: [
          '/javascript/js-basic',
          '/javascript/js-function',
          '/javascript/js-methods',
          '/javascript/js-utils',
          '/javascript/js-computed'
        ]
      },
      '/other/other',
      {
        text: '前端面试题',
        children: [
          '/int-ques/ques-web',
          '/int-ques/ques-css',
          '/int-ques/ques-html',
          '/int-ques/ques-js',
          '/int-ques/ques-vue2',
          '/int-ques/ques-vue3'
        ]
      }
    ]
  }
}
