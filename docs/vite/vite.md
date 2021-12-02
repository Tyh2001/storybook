# Vite 基础

## Vite 创建项目

```
使用 Vite 创建项目需要 node 的版本 >= 12.0.0
```

npm 创建命令：

```shell
npm init vite vue-demo
```

接下来会让你选择一个需要创建的框架，这里我们选择 vue

```shell
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue
    react
    preact
    lit
    svelte
```

接下来是需要选择是否使用 ts，这里我不是使用就选择 vue，使用 ts 就选择 vue-ts

```shell
√ Select a framework: » vue
? Select a variant: » - Use arrow-keys. Return to submit.
>   vue
    vue-ts
```

回车选择完成之后就是要 Vite 创建了一个 Vue3 的项目

接下来进入项目目录，安装依赖后，使用 `npm run dev` 来启动项目

## vite.config.js 基础配置

```js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const { resolve } = require('path')

export default defineConfig({
  base: './', // 公共路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 使用 @ 访问 src 目录
    },
  },
  server: {
    host: '127.0.0.1',
    port: '2001', // 端口号
    open: true, // 自动打开
  },
})
```
