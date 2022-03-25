module.exports = {
  title: 'Tyh2001',
  head: [
    ['link', { rel: 'icon', href: './my.png' }]
  ],
  description: '前端开发,javascript,php,node,jquery,git,python,java,sql,mysql,linux,go语言,golang,前端,教程,软件,编程,互联网,tyh-ui,TYH-UI,tyh,TYH,ui,UI,element,框架,组件库,组件,vue,vue3,码云,NPM,npm,components,js,github,gitee,npm,vant,element3,vite,viewUI,tyh-ui,tyh ui,ui tyh,tyh-ui2,tyh-ui,tyh2001的个人网站',
  base: '/blog/',
  themeConfig: {
    logo: '/my.png',
    contributors: false,
    lastUpdatedText: '最后更新', // 最后更新时间
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/Tyh2001/tyh-blog' },
      { text: 'tyh-Ui', link: 'https://tianyuhao.cn/v3' },
      {
        text: '关于我',
        ariaLabel: 'Language Menu',
        children: [
          { text: '个人网站', link: 'https://tianyuhao.cn' },
          { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
          { text: '微博', link: 'https://weibo.com/tyh2001' },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/246484504?spm_id_from=333.1007.0.0' },
        ]
      },
      {
        text: '相关链接',
        ariaLabel: 'Language Menu',
        children: [
          { text: 'Vue3', link: 'https://v3.cn.vuejs.org' },
          { text: 'Vue3-new', link: 'https://staging-cn.vuejs.org' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/' },
          { text: 'Pinia', link: 'https://pinia.esm.dev' },
          { text: 'VuePress', link: 'https://v2.vuepress.vuejs.org/zh/' },
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      '/hello',
      {
        text: '里程碑',
        children: [
          '/milepost/2021',
          '/milepost/2022',
        ]
      },
      {
        text: 'vue3',
        children: [
          '/vue3/basics',
          '/vue3/api',
        ]
      },
      {
        text: 'Vue.js 设计与实现',
        children: [
          '/vue-design/chapter-1',
          '/vue-design/chapter-2',
          '/vue-design/chapter-3',
        ]
      },
      '/vue2',
      {
        text: 'TypeScript',
        children: [
          '/typescript/type', // 数据类型
          '/typescript/function', // 函数
        ]
      },
      {
        text: 'JavaScript',
        children: [
          '/javascript/basic', // 基础
          '/javascript/dom', // DOM 相关
          '/javascript/function', // 函数
          '/javascript/data-type', // 数据类型
          '/javascript/methods-string', // 字符串方法
          '/javascript/methods-array', // 数组方法
          '/javascript/array-iteration', // 数组迭代
          '/javascript/methods-object', // 对象方法
          '/javascript/date-object', // 日期对象
          '/javascript/math-object', // 数学对象
          '/javascript/fun-async', // 异步函数
          '/javascript/task-type', // 微任务与宏任务
          '/javascript/fun-prototype', // 面向对象编程
          '/javascript/fun-class', // 类
          '/javascript/fun-utils', // Js 工具函数
          '/javascript/javascript-api', // JavaScript API
          '/javascript/leetcode', // leetcode 算法
          '/javascript/generator', // 生成器
          '/javascript/proxy', // proxy 代理
        ]
      },
      {
        text: '我的文章',
        children: [
          '/article/github-page', // GitHubPages 部署项目
          '/article/highlightjs', // highlightjs 使用方法
          '/article/vue3-code', // Vue3 的源码怎么看？
          '/article/two-sum', // 别再写循环套循环了
          '/article/about-tyh-ui', // 关于组件库
          '/article/monorepo', // monorepo
          '/article/article',
        ]
      },
      {
        text: '前端面试题',
        children: [
          '/int-ques/ques-new',
          '/int-ques/ques-web',
          '/int-ques/ques-css',
          '/int-ques/ques-html',
          '/int-ques/ques-js',
          '/int-ques/ques-vue2',
        ]
      }
    ]
  }
}
