# 第一章 权衡的艺术

> 框架的设计里到处都体现了权衡的艺术

## 1.1 命令式和声明式

命令式主要的关注过程，比如下面命令

- 获取一个 id 为 app 的元素
- 给它设置文本内容为 hello world
- 给它添加一个点击事件
- 点击之后弹出框提示：ok

那么命令式的方式就是这样的：

```js
const app = document.querySelector('#app')
app.innerHTML = 'hello world'
app.addEventListener('click', () => {
  alert('ok')
})
```

> 可以看到，声明式的每一步的代码执行，都和命令是一一对应的，代码本身描述的是：做事的过程

那么声明式呢？与命令式完全不同，声明式更加关注结果

```html
<div @click="() => alert('ok')">hello word</div>
```

上面代码和命令式是一致的，只不过在 vue 内部已经为我们封装好了，你只要给 vue 下达一条，vue 就可以帮助我们完成效果。所以说 vue 的内部实现一定的**命令式**的。

## 1.2 性能和可维护的权衡

命令式和声明式的都有各自的优点，但是有一个结论是：**声明式代码的性能不优于命令式代码的性能**。

比如上述的例子中，我想将 div 中的文本内容修改为 `hello vue3`，那么就可以使用 [textContent](https://tianyuhao.cn/blog/javascript/dom.html#textContent) 方法直接进行修改

```js
app.textContent = 'hello vue3'
```

上面修改的方式就说性能最好的修改方式了，但是在命令式中，也行并不一定会做到这一点

```html
<!-- 之前 -->
<div @click="() => alert('ok')">hello word</div>

<!-- 之后 -->
<div @click="() => alert('ok')">hello vue3</div>
```

对于框架来说，它需要先找出前后差异需要修改的地方，然后再进行修改，其实内部实现的代码依然是：

```js
app.textContent = 'hello vue3'
```

假设我们将查找需要找出前后差异需要修改的地方需要消耗性能 A，修改内容需要消耗性能 B，那么结论就是：

- 声明式需要消耗性能为：A + B
- 命令式需要消耗性能为：B

可以发现，声明式多处了查找差异部分的性能消耗，但是如果将这部分的性能消耗降低到 0，那么声明式和命令式的性能消耗就是一样的了，但这显然是不可能的。所以得出前文的结论：**声明式代码的性能不优于命令式代码的性能**。

## 1.3 虚拟 DOM 的性能到底如何

目前我们先不用关注虚拟 DOM 具体是什么，前文说到：`声明式的性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗`，那么只要降低`找出差异的性能消耗`，才可以达到命令式一样的性能，虚拟 DOM，就是为了降低找出差异性能消耗这一步的。

对于原生操作，更多的建议是使用 [document.createElement()](https://tianyuhao.cn/blog/javascript/dom.html#document-createelement)，而不是 [innerHTML](https://tianyuhao.cn/blog/javascript/dom.html#outerhtml-%E5%92%8C-innerhtml)，因为 innerHTML 有着很多的劣势，比如：

- 更新 DOM 需要整夜的更新，不能更新指定需要修改的内容
- 性能差
- 哪怕只是修改一个地方，也需要将旧的 DOM 全部销毁，再重新渲染一遍

所以按照性能来说，`原生方法 document.createElement() > 虚拟 DOM > innerHTML`

## 1.4 运行时和编译时

在设计框架的时候，有三种选择：`纯运行时、纯编译时、运行时+编译时`，接下来分别来解释一些这三种方式都是怎样的

**纯运行时**

假设我们有一个 render 函数，它接收一个树形结构的数据对像，可以将其递归渲染成 DOM 元素，对象如下

```js
const obj = {
  tag: 'div',
  children: [{ tag: 'span', children: 'hello world' }]
}
```

上面对象中有两个属性，`tag` 代表是标签名，`children` 代表子节点，可以是一个数组或是一个字符串，如果是字符串那么就说节点的文本内容，如果是数组，就说节点在子元素。

接下来我们来实现 render 函数：

```js
/**
 * 渲染函数
 * @param { object } obj 数据对象
 * @param { object } node 放入的节点
 */
function render(obj, node) {
  const el = document.createElement(obj.tag)

  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    obj.children.forEach((item) => render(item, el))
  }
}
```

这样就可以进行调用渲染函数来使用：

```js
render(obj, document.body)
```

但是这种方式的内部不涉及任何的其它处理，而且手写对象渲染太麻烦了，而且不支持 html 编写。所以，刚刚写的就说一个纯运行时的逻辑。

所以接下来我们可能就会想想：能不能把 HTML 标签编译成树形结构再继续使用 render 函数呢？

**运行时+编译时**

所以就编写了一个叫 `compiler` 的程序，它的作用是将 HTML 编译成树形结构的对象，这也就可以将 `compiler` 和 `render` 的函数结合起来了，`compiler` 内部具体的实现在这里暂时先不过多说明，目前已经超出了本章节方位，下面先暂且模拟效果进行演示

```js
const html = `
  <div>
    <span>hello world</span>
  </div>
`

const obj = compiler(html)
render(obj, document.body)
```

首先将 HTML 编译成对象再通过 `render` 函数进行渲染，这就是一个`运行时 + 编译时`的逻辑

**编译时**

不过，这时可能又会有一个问题：可以将 HTML 字符串编译成对象，那么是不是可以将 HTML 字符串编译成命令式呢？这时就需要一个 `compiler` 函数了，连 `render` 函数都不需要了。

```js
const div = document.createElement('div')
const span = document.createElement('span')
const text = document.createTextNode('hello world')
span.appendChild(text)
div.appendChild(span)
document.body.appendChild(div)
```

上面演示得出结论：

- 纯运行时的框架，由于它没用编译的过程，因此没用办法提供更多操作
- 纯运行时，是性能最好的，但是它缺少的灵活性
- 运行时 + 编译时，可以将两者部分的优点吸引进来，可以将分析哪些会改变，哪些不会改变，这样就可以使用 render 函数进行进一步优化，实现只更新需要修改的地方
