import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design/lib/index.cjs'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
