# 纯原生开发 Web Components 超详细分享

## 👋 Hello

大家好，我是[田同学](https://github.com/Tyh2001)，大家可以加我微信 `VirgoTyh` 一起共同学习。

## 💡 什么是 Web Components？

`Web Components` 其实就是一套组件库。

我们平时在使用 vue 或者 react 的时候，对于不同的框架，就需要使用框架所支持的组件库来进行开发，很多团队都会开分别发针对 vue 或 react 的两套组件库。但是这样维护成本的很高的，更何况框架还不仅仅是这两个。

Web components 就是为了解决这一痛点，建立在 Web 标准之上的下一代的 UI 组件库。也就是说，开发了这一套组件，不管在任何的框架中都可以使用。对于前端来说，任何的框架，最终都会被打包成 html、css、js，web components 就是基于原生 js 来实现的一套可适配全框架的组件库。

更多详情可参考 MDN 的 [MDN Web_Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)。

## 🚀 第一步

开发的第一步，要先了解一下 web components 是如何实现的，它基于以下几个部分：

- **Custom elements（自定义元素）**：原生 js 提供了自定义元素的方法
- **Shadow DOM（影子 DOM）**：也就是自己封装的组件，它是一个特殊的 dom 节点，和外部 dom 的完全隔离的
- **HTML templates（HTML 模板）**：也就是组件的 dom 结构
- **adoptedStyleSheets（采用的样式表）**：针对 Shadow DOM 的 css 样式处理

下面分别来介绍一些各个部分的细节，本文将以一个按钮组件来进行演示

## ⚓ 基础实现

1. 首先新建一个 `index.html` 和 `index.js`，让在 html 中引入 js 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

2. 接下来开始 js 部分。首选需要新建一个类，类名就是你要渲染出来的标签名，它需要继承至浏览器原生的 `HTMLElement`，然后在 `constructor` 中需要创建一个 [attachShadow](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow)，并传递一个对象 `{ mode: 'open' }`，就会得到一个`影子 DOM`

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
  }
}
```

3. 有了影子元素，就需要将要实现的组件结、样式、插槽添加进去了，这里直接使用 `innerHTML` 简单粗暴的实现：

> 注意，在 dom 中要预留出提供 button 内容的插槽，原生 `slot` 元素可参考 [slot](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot)

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.innerHTML = `
      <style>
        .f-button {
          width: 100px;
          height: 35px;
          background: #2d5af1;
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
        }
      </style>
      <button class="f-button">
        <slot></slot>
      </button>
    `
  }
}
```

4. 最后使用 [CustomElementRegistry.define()](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法定义了一个自定义元素，即可实现一个简单的 web components

> `customElements.define` 方法接收两个参数：标签名（必须是以小写字母，必须写一个短横线连接）和自定义元素构造器

```js
customElements.define('f-button', FButton)
```

5. 完整代码

> js 部分：

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.innerHTML = `
      <style>
        .f-button {
          width: 100px;
          height: 35px;
          background: #2d5af1;
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
        }
      </style>
      <button class="f-button">
        <slot></slot>
      </button>
    `
  }
}

customElements.define('f-button', FButton)
```

> html 部分：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <f-button>主要按钮</f-button>

    <script src="./index.js"></script>
  </body>
</html>
```
