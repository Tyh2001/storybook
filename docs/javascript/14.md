# JavaScript API

## File

当选择一个文件时，可以获得这个文件的描述对象

```html
<input type="file" id="file" />

<script>
  const file = document.getElementById('file')
  file.addEventListener('change', (e) => {
    console.dir(e.target.files[0])
  })
</script>
```

```shell
File
  lastModified: 1646398643613
  lastModifiedDate: Fri Mar 04 2022 20:57:23 GMT+0800 (中国标准时间) {}
  name: "world6.jpg"
  size: 1179107
  type: "image/jpeg"
  webkitRelativePath: ""
  [[Prototype]]: File
```

## URL.createObjectURL()

该方法多数用于图片预览

参考文档：[URL.createObjectURL() ](https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29)

实例，通过 input 上传图片预览出上传的图片：

```html
<input type="file" accept="image/*" />
<img src="" alt="" />

<script>
  const inp = document.querySelector('input')
  const img = document.querySelector('img')
  inp.onchange = function () {
    const blob = URL.createObjectURL(inp.files[0])
    img.setAttribute('src', blob)
  }
</script>
```

## MutationObserver 接口

### 描述

`MutationObserver 接口` 可以在 DOM 被修改时移步执行回调，使用 `MutationObserver` 可以观察整个文档、DOM 树的一部分或者元素。此外还可以观察元素的属性、子节点、文本，或者前三者的组合变化。

### 基本使用

`MutationObserver` 的实例要通过 `MutationObserver` 的构造函数，接收一个回调参数来创建

```js
const mut = new MutationObserver(() => console.log('123'))
console.log(mut)
```

### observe()

新创建的 `MutationObserver` 并不会关联 DOM 的任何部分，想要把 `MutationObserver` 和 DOM 关联起来，需要使用 `observe()` 方法。

这个方法必须接收两个参数，第一个是要观察其变化的 DOM 节点，以及一个 `MutationObserverInit` 对象。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('div 改变了'))

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box') // 改变之后执行 mut 的回调
</script>
```

### 回调函数中的参数

`MutationObserver` 回调可以接收的一个参数，是一个数组，记录了当前那些部分发生了变化

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((MutationRecord) =>
    console.log(MutationRecord)
  )

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box')
  app.setAttribute('data-app', 'add')
</script>
```

**打印结果**

```shell
(2) [MutationRecord, MutationRecord]
  0: MutationRecord
    addedNodes: NodeList []
    attributeName: "class"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  1: MutationRecord
    addedNodes: NodeList []
    attributeName: "data-app"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  length: 2
  [[Prototype]]: Array(0)
```

`MutationObserver` 接收的第二个参数是观察变化的 `MutationObserver` 的实例

```js
const mut = new MutationObserver((MutationRecord, mutationObserver) => {
  console.log(mut === mutationObserver) // true
})
```

### disconnect()

默认情况下，只有元素不被垃圾回收，`MutationObserver` 的回调函数就会响应 DOM 变化事件，从而执行。使用 `disconnect()` 可以提前终止回调函数，也会抛弃已经加入任务队列的项目

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box')
  mut.disconnect()
  app.setAttribute('data-app', 'add')
  // 没有日志输出
</script>
```

如果想让已经加入任务队列的项目执行完再调用可以使用 `setTimeout()` 来解决

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box') // 改变了
  setTimeout(() => {
    mut.disconnect()
    app.setAttribute('data-app', 'add') // 没有日志输出
  }, 0)
</script>
```

### 重用 MutationObserver

调用 `disconnect()` 的时候并不会结束 `MutationObserver` 的生命。还是可以重用这个观察者的，只需要将他在关联到目标节点即可。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributes: true })

  setTimeout(() => {
    mut.disconnect() // 断开连接
    app.setAttribute('class', 'box') // 没有日志输出
  }, 0)

  setTimeout(() => {
    mut.observe(app, { attributes: true }) // 重新连接
    app.setAttribute('class', 'box') // [div#app.box]
  }, 0)
</script>
```

### 观察属性

`MutationObserver.observe` 可以接收两个参数，第二个参数为以及一个 `MutationObserverInit` 对象。可以观察节点属性的添加、删除、修改。需要属性变化注册回调，需要字啊 `MutationObserverInit` 对象中将 `attributes` 设置为 `true`。

但是将 `attributes` 设置为 `true` 默认是观察所有的属性，如果想要观察几个或者多个属性，可以使用 `attributeFilter` 属性设置白名单，即一个属性名的数组集合

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributeFilter: ['food'] }) // 设置 food 为白名单

  app.setAttribute('class', 'box') // [div#app.box]
  app.setAttribute('food', 'admin') // 没有日志输出
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `attributeOldValue` 设置为 `true`

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  mut.observe(app, { attributeOldValue: true })

  app.setAttribute('class', 'box')
  app.setAttribute('food', 'admin')
  app.setAttribute('id', 'ccc')

  // [null, null, 'app']
</script>
```

### 观察字符数据

将 `characterData` 设置为 `true` 可以为观察字符，当字符修改、删除、添加时，都可以触发回调

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterData: true })
  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 三次修改都被记录下来了
  // (3) [MutationRecord, MutationRecord, MutationRecord]
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `characterDataOldValue` 设置为 `true`

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 修改过的值都被记录下来了
  // (3) ['张三', 'abc', 'admin']
</script>
```

### 观察子节点

将 `childList` 设置为 `true` 可以观察子节点，当子节点修改、删除、添加时，都可以触发回调

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { childList: true })

  app.appendChild(document.createElement('p'))

  // [MutationRecord]
</script>
```

### 观察子树

上述 将 `childList` 设置为 `true` 可以观察子节点，但是子节点的内部就观察不到了，所以还需要将 `subtree` 设置为 `true`，即可扩展到这个元素的子树，所有后代节点。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { attributes: true, subtree: true })

  app.appendChild(document.createElement('p'))
  app.querySelector('p').setAttribute('class', 'text')

  // [MutationRecord]
</script>
```

但是有意思的是：观察子树的节点被移出子树之后，仍然可以触发变化事件

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))

  const div1 = document.createElement('div')
  mut.observe(app, { attributes: true, subtree: true }) // 观察子树
  app.appendChild(div1) // 将新建的 div 放进 app 容器
  document.body.insertBefore(div1, app) // 修改新建 div 的位置
  div1.setAttribute('class', 'box1') // 改变属性

  // 观察子树的节点被移出子树之后，仍然可以触发变化事件
  // [MutationRecord]
</script>
```

### takeRecords()

`takeRecords()` 方法可以清空 `MutationObserver` 的记录队列，取出并返回所有 `MutationObserver` 实例

```html
<div id="app">哈哈</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))
  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  console.log(mut.takeRecords()) // (3) [MutationRecord, MutationRecord, MutationRecord]
  console.log(mut.takeRecords()) // []
</script>
```

这在希望断开与观目标的联系，但又希望处理由于调用 `disconnect()` 而被抛弃的记录队列中的 `MutationObserver` 实例还是比较有用的。

## XMLHttpRequest

### 创建

创建方式

```js
const xhr = new XMLHttpRequest()
```

### open()

XHR 对象首先调用 `open` 方法，接受三个参数，请求类型，请求 URL，是否为异步

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
```

### send()

要发送定义好的请求需要使用 `send` 方法

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
```

`send` 可以作为请求体发送数据，**如果不需要传入请求体，则必须传入 null**

### status

响应的 HTTP 状态

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
```

### statusText

响应的 HTTP 状态描述

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
console.log(xhr.statusText)
```

## SpeechSynthesisUtterance

可使用语音读出传入的文字内容

```html
<button>say</button>

<script>
  document.querySelector('button').addEventListener('click', () => {
    const text = '你好，请问你是谁？'
    const msg = new SpeechSynthesisUtterance(text)

    window.speechSynthesis.speak(msg)
  })
</script>
```

## Document.createDocumentFragment()

可创建文档片段
