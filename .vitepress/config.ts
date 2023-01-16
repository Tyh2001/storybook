import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { tablePlugin } from './config/table'

const config = defineConfig({
  title: 'Tyh',
  head: [
    ['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/auto/my.png' }]
  ],
  cacheDir: '../../node_modules',
  description,
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/auto/my.png',
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
    config: (md) => tablePlugin(md)
  }
})

export default config
