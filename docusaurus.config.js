const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
  title: 'Tyh2001',
  tagline: '最怕你一生碌碌无为，还安慰自己平凡可贵。',
  url: 'https://tianyuhao.cn',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Tyh2001',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Blog'
          },
          {
            href: 'https://github.com/Tyh2001/tyh-blog',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '关于我',
            items: [
              { label: 'Tyh2001', to: 'https://tianyuhao.cn' },
              { label: 'Github', to: 'https://github.com/Tyh2001' },
              { label: 'tyh-ui', to: 'https://github.com/Tyh2001/tyh-ui' },
              { label: 'Gitee', to: 'https://gitee.com/tyh666999' },
              { label: '微博', to: 'https://weibo.com/tyh2001' },
              { label: 'bilibili', to: 'https://space.bilibili.com/246484504?spm_id_from=333.1007.0.0' },
              { label: '掘金', to: 'https://juejin.cn/user/2243446742456888' },
            ]
          }
        ],
        copyright: 'Tyh2001 | 浙ICP备2021024540号-2',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
