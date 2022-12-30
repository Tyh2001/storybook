# 单例模式

## 单例定义

单例模式的定义就是：`保证一个类只有一个实例，并提供一个访问他的全局站点`

## 实现单例模式

我们只要用一个标识标记是否已经创建过对象，如果是，则在下一次获取时直接返回之前创建的实例

```js
class User {
  constructor(name) {
    this.name = name
    this.instance = null
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new User(name)
    }
    return this.instance
  }
}

const user1 = User.getInstance('张三')
const user2 = User.getInstance('李四')

console.log(user2 === user1) // true
```

上面已经实现了一个简单的单例模式，但是这样意义并不是很大，下面一步步编写出更好的单例模式

## 透明单例

接下来来实现一个透明的单例模式，用户从这个类中创建对象的时候，可以像使用其他普通类一样进行使用

下面来实现创建一个唯一的 `div` 节点

```js
class Render {
  constructor(html) {
    if (!Render.instance) {
      Render.instance = this
      this.html = html
      this.init()
    }
    return Render.instance
  }
  init() {
    const div = document.createElement('div')
    div.innerText = this.html
    document.body.appendChild(div)
  }
}

const node1 = new Render('hello')
const node2 = new Render('hello2')

console.log(node1 === node2) // true
```

这个，不管我们 `new` 多少次这个类，始终都是创建一个实例

## 使用代理实现单例

接下来使用代理方式，来再写一遍上面例子

```js
// 渲染类
class CreateDiv {
  constructor(html) {
    this.html = html
    this.init()
  }
  init() {
    const div = document.createElement('div')
    div.innerText = this.html
    document.body.appendChild(div)
  }
}

// 代理类
class Render {
  constructor(html) {
    if (!Render.instance) {
      Render.instance = new CreateDiv(html)
    }
    return Render.instance
  }
}

const node1 = new Render('hello')
const node2 = new Render('hello-121')

console.log(node1 === node2) // true
```

## 惰性单例

惰性单例是在需要的时候再创建出对象实例。

惰性单例模式用在弹出框上面，下面就用一个提示框来展示一下惰性单例

```html
<button id="btn">展示浮窗</button>
<script>
  const render = (function () {
    let div
    return function () {
      if (!div) {
        div = document.createElement('div')
        div.style.display = 'none'
        div.innerText = '这是一个提示框'
        document.body.appendChild(div)
      }
      return div
    }
  })()

  document.getElementById('btn').addEventListener('click', () => {
    const node = render()
    node.style.display = 'block'
  })
</script>
```

## 通用惰性单例

在上面例子中，我们在页面中创建了一个唯一的 `div` 元素，但是这个函数并不灵活，如果想要吧 `div` 改为 `p` 那么就要重写一遍这个函数，所以接下来要封装一个通用想惰性单例模式

```js
function render(fn) {
  let instance
  return function () {
    return instance || (instance = fn())
  }
}
```

这样就抽离出了一个通用型的函数，接下来就可以这样使用：

```html
<button id="btn">点击</button>
<script>
  function render(fn) {
    let instance
    return function () {
      return instance || (instance = fn())
    }
  }

  function createDiv() {
    const div = document.createElement('div')
    div.innerText = '这是一个 div'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
  }

  function createInput() {
    const input = document.createElement('input')
    input.style.display = 'none'
    document.body.appendChild(input)
    return input
  }

  const createRenderDiv = render(createDiv)
  const createRenderInput = render(createInput)

  document.getElementById('btn').addEventListener('click', () => {
    const div = createRenderDiv()
    const input = createRenderInput()
    div.style.display = 'block'
    input.style.display = 'block'
  })
</script>
```
