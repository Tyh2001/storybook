import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Tyh',
  head: [['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/my.png' }]],
  description,
  base: '/blog/',
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/my.png',
    nav,
    sidebar
  }
})

export default config
