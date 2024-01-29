# 样式

## Tailwindcss

使用 [tailwindcss](https://github.com/tailwindlabs/tailwindcss) 开发样式，避免样式污染

## 安装

使用 `tailwindcss` 需要安装三个包

- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) tailwindcss
- [postcss](https://github.com/postcss/postcss) 使用 JS 插件转换样式
- [autoprefixer](https://github.com/postcss/autoprefixer) 提供 css 厂商前缀

安装

```shell
npm install -D tailwindcss postcss autoprefixer
```

## 配置 tailwindcss

项目根目录新增 `tailwind.config.ts` 写入

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## 配置 postcss

项目根目录新增 `postcss.config.js` 写入

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## 引入样式

新建 `tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`main.ts`

```ts
import './tailwind.css'
```
