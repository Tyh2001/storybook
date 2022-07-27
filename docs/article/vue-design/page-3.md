# 第三章 Vue.js 3 的设计思路

## 3.1 声明式的描述 UI

vue 是一个声明式的 UI 框架，也就是说用户在使用的时候需要声明式的使用。

比如下面的声明式命令：

- 使用和 HTML 一致的方式创建一个 DOM 元素，例如一个 `div` 可以写为：`<div></div>`
- 使用和 HTML 一致的方式进行添加描述属性，例如：`<div id="app"></div>`
- 使用 `:` 或者 [v-bind](https://staging-cn.vuejs.org/api/built-in-directives.html#v-bind) 来绑定一个动态的信息，例如：`<div :id="myId"></div>`
- 使用 `@` 或者 [v-on](https://staging-cn.vuejs.org/api/built-in-directives.html#v-on) 来绑定事件，例如：`<div @click="change"></div>`
- 使用和 HTML 一致的层级结构，例如：`<div><span></span></div>`

也可以使用 JavaScript 的方式进行表述，例如下面代码

```js
const node = {
  tag: 'h1',
  props: {
    onClick: change
  },
  children: [{ tag: 'span' }]
}
```

那么编译成 vue 的模板可能就是：

```html
<h1 @click="change">
  <span></span>
</h1>
```

但是，使用模板和使用 JavaScript 有什么不同呢？答案就是：JavaScript 更加灵活。比如在一个场景下：

传递一个数字 1~6 来渲染不同的 h1 ~ h6 标签，那么对于模板来说，最优的解决方案写法大概是这样的：

```html
<template>
  <h1 v-if="num === 1">hello</h1>
  <h2 v-if="num === 2">hello</h2>
  <h3 v-if="num === 3">hello</h3>
  <h4 v-if="num === 4">hello</h4>
  <h5 v-if="num === 5">hello</h5>
  <h6 v-if="num === 6">hello</h6>
</template>

<script setup>
  defineProps({
    num: Number
  })
</script>
```

其实在 vue 内部，就提供了一个 [h](https://staging-cn.vuejs.org/api/render-function.html#h) 函数可以进行渲染，就是使用虚拟 DOM 来进行描述的，如下代码所示上面例子：

```js
import { h } from 'vue'

export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => h('h' + props.num, {}, slots.default())
  }
}
```

## 3.2 初识渲染器

渲染器的作用就是将虚拟 DOM 转换为真实 DOM。

下面进行演示一个渲染器的例子：

```js
const node = {
  tag: 'div',
  props: {
    onClick: () => alert('hello')
  }
}
```

上面是一个虚拟 DOM，下面需要使用渲染器函数将其转换为真实 DOM

::: details 显示代码

```js
function render(node, root) {
  const el = document.createElement(node.tag)

  for (const key in node.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), () => {
        node.props[key]()
      })
    }
  }

  if (typeof node.children === 'string') {
    const text = document.createTextNode(node.children)
    console.log(text)
    el.appendChild(text)
  } else if (Array.isArray(node.children) && node.children.length) {
    node.children.forEach((item) => {
      render(item, el)
    })
  }

  root.appendChild(el)
}
```

:::

那么 render 函数处理的逻辑分为三步：

- 创建元素
- 为元素添加事件
- 处理 children

上面代码可以看出，其实渲染器并没有那么什么，它也只是使用了一些我们常用的 API 进行处理的。

## 3.3 组件的本质

其实组件的本质，就说一组虚拟 DOM 的封装，我们知道，在 JavaScript 中，我们正常都是使用函数进行封装代码的，那么组件其实也可以理解为是一个函数返回的一个虚拟 DOM，就是需要渲染的内容，比如：

```js
const component = function () {
  return {
    tag: 'div',
    props: {
      onClick: () => alert('hello')
    },
    children: 'click me'
  }
}
```

那么这时候的虚拟 dom 就是这样的了：

```js
const node = {
  tag: component
}
```

那么这时在对于处理函数和字符串的时候，render 函数就需要做一些修改了：

::: details 显示代码

```js
// 模拟虚拟 dom
const node = {
  // tag 接收的是一个函数
  tag: component
}

// 模拟组件函数
function component() {
  return {
    tag: 'div',
    props: {
      onClick: () => alert('hello')
    },
    children: 'click me'
  }
}

// 字符串 渲染函数
function mountElement(node, root) {
  const el = document.createElement(node.tag)

  for (const key in node.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), () => {
        node.props[key]()
      })
    }
  }

  if (typeof node.children === 'string') {
    const text = document.createTextNode(node.children)
    console.log(text)
    el.appendChild(text)
  } else if (Array.isArray(node.children) && node.children.length) {
    node.children.forEach((item) => {
      render(item, el)
    })
  }

  root.appendChild(el)
}

// 函数渲染函数
function mountComponent(node, root) {
  const subtree = node.tag()
  render(subtree, root)
}

// 主 render 函数
function render(node, root) {
  // 如果是函数
  if (typeof node.tag === 'function') {
    mountComponent(node, root)
    // 如果是字符串
  } else if (typeof node.tag === 'string') {
    mountElement(node, root)
  }
}

// 调用 render 函数
render(node, document.body)
```

:::

## 3.4 模板的工作原理

无论是手写虚拟 DOM，还是使用模板，都是属于声明式 UI，前文讲过，需要将虚拟 DOM 转换为真实 DOM，这一过程需要的就是**编译器**。

编译器和渲染器一样，就是一个程序，编译器的作用就是将模板编译成渲染函数，如下模板：

```html
<template>
  <button @click="change">按钮</button>
</template>

<script setup>
  function change() {
    alert('hello')
  }
</script>
```

会编译成：

```js
export default {
  render() {
    return h('button', { onclick: change }, '按钮')
  }
}
```

对于一个 `*.vue` 组件来说，它需要渲染的内容最终都是通过渲染函数产生的，然后渲染器把渲染函数返回的虚拟 DOM，渲染为真实 DOM，这也是模板的工作原理，也是 vue 渲染页面的流程。

## 3.5 Vue.js 是各个模块组成的有机整体

编译器的作用就是将模板编译成虚拟 DOM，然后使用渲染器进行渲染，是这样的一个工作流程。

但是有些内容是使用 `v-bind` 动态绑定的，在 vue 中使用一些特别的标记来处理，这样可以省去渲染器的工作量，从而提升性能。
