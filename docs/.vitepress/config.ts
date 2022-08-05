import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Tyh',
  head: [['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/my.png' }]],
  description,
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/my.png',
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/Tyh2001/tyh-blog/blob/master/docs/:path'
    }
  }
})

export default config
