import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
