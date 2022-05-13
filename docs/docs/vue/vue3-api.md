# API

## h

`h` 函数是一个渲染函数，通常缩写为叫 `VNode`，也许可以更准确地将其命名为 `createVNode()`，可以渲染一个标签，接收三个参数：

- HTML 标签名、组件、异步组件或函数式组件。使用返回 null 的函数将渲染一个注释。此参数是必需的。
- 一个对象，与我们将在模板中使用的 attribute、prop 和事件相对应。可选
- 子节点，或者是标签的内容，也可以是默认插槽的内容

下面例子中，使用 `.jsx` 文件来编写的一个根据传递数字几就渲染 h 几标签的代码来演示 h 函数

```js
import { h } from 'vue'

export default {
  props: {
    num: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => h('h' + props.num, {}, slots.default())
  },
}
```
