import type { UserConfigExport, Plugin } from 'vite'

// https://github.com/vuejs/vitepress/discussions/1015#discussioncomment-3177860
const NavLinkPatch = (): Plugin => ({
  name: 'override-target-blank',
  enforce: 'pre',
  transform: (code, id) => {
    if (id.endsWith('VPLink.vue')) {
      return code.replace('_blank', '_self')
    }
  }
})

export default (): UserConfigExport => {
  return {
    plugins: [NavLinkPatch()],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      port: 3001
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
}
