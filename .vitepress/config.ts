import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { description } from './config/description'
import { PluginTable } from './plugin'

export default {
  title: 'Tyh',
  head: [
    ['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/auto/my2.png' }]
  ],
  cacheDir: '../../node_modules',
  description,
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/auto/my2.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/tyh-blog'
      }
    ],
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/Tyh2001/tyh-blog/blob/master/docs/:path'
    }
  },
  markdown: {
    // 自定义 markdown 语法
    config: (md) => PluginTable(md)
  }
}
