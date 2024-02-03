import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { description } from './config/description'
import { PluginTable } from './plugin'

export default {
  title: 'Tyh2001',
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Tyh2001/tyh-blog/master/.vitepress/theme/assets/tyh2001.png' }]
  ],
  lastUpdated: true, // 最后更新时间
  cacheDir: '../../node_modules',
  description,
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/Tyh2001/tyh-blog/master/.vitepress/theme/assets/tyh2001.png',
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
    lineNumbers: true,
    // 自定义 markdown 语法
    config: (md) => PluginTable(md)
  }
}
