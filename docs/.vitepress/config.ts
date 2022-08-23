import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Tyh',
  head: [
    ['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/auto/my.png' }]
  ],
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
  }
})

export default config
