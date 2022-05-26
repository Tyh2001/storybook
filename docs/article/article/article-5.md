# highlightjs 使用方法

## 前言

[highlightjs](https://github.com/highlightjs/highlight.js)是具有语言自动检测和零依赖性的 JavaScript 语法高亮器。

## 安装

```shell
npm i highlight.js
```

## 使用

下面使用 `vue3` 项目进行演示

在 `main.js` 中配置以下代码

```js
import { createApp } from 'vue'
import App from './App.vue'

// import highlight.js
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const app = createApp(App)
app.use((app) => {
  app.directive('highlight', {
    mounted(el) {
      let blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightElement(blocks[i])
      }
    }
  })
})
app.mount('#app')
```

在组件中使用

```html
<template>
  <pre v-highlight>
    <code class="html">{{ code }}</code>
  </pre>
</template>

<script setup>
  const code = `
  <div id="app">
    <h1>Hello</h1>
  </div>
`
</script>
```

这样即可使代码段进行高亮显示
