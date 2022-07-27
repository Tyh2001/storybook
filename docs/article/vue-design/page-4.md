# 第四章 响应系统的作用与实现

## 4.1 响应式数据与副作用函数

什么是副作用函数？

```js
function fun1() {
  document.body.innerText = 'hello'
}
```

```js
let a = 12
function change() {
  a = 6
}
```

以上两个，都属于是副作用函数，第一个设置了 body 的文本内容，但是除了 fun1 之外的任何函数都可以修改和设置 body 的文本内容，这个函数可能会影响其它函数的执行；第二个函数修改了全局变量，所以类似这两种的函数，都称之为`副作用函数`。

接下来来说一说响应式数据，见下面例子：

```js
const obj = { text: 'hello' }
function effect() {
  document.body.innerText = obj.text
}
```

上面的副作用函数将 body 的值设置为了 `obj.text`，但是我们希望在执行下面代码的时候，希望这个副作用函数重新执行

```js
obj.text = 'hello world'
```

但是显然我们在改变 `obj.text` 之后，现在并不能实现效果，接下来我们将会介绍。

## 4.2 响应式数据的基本实现

之前介绍了，响应式系统需要的是，当副作用函数被调用时候，会获取 `obj.text` 的操作，那么当下一次修改数据时候，也可以希望能调用副作用函数重新赋值。vue3 中使用 [proxy](https://tianyuhao.cn/blog/javascript/proxy.html) 来实现对数据的代理，实现每一次操作都可以被监听到。下面来实现一个简单的例子进行演示基本的响应式系统：

::: details 显示代码

```js
// 原始数据
const obj = { text: 'hello' }

const set = new Set() // 用来存储副作用函数

// 创建代理，代理 obj
const p = new Proxy(obj, {
  // 获取
  get(target, key) {
    set.add(effect) // 将副作用函数添加到容器中
    return target[key] // 返回指定的值
  },
  // 设置
  set(target, key, newVal) {
    target[key] = newVal // 赋值为新值
    set.forEach((fn) => fn()) // 调用副作用函数重新渲染页面
  }
})

// 副作用函数
function effect() {
  document.body.innerText = p.text
}
effect()

// 三秒后重新赋值，可以发现已经成为响应式了
setTimeout(() => {
  p.text = '改变啦'
}, 3000)
```

:::

这就是一个基本的响应式系统的实现，但是这个逻辑还存在着很多问题，其实还远远的不够灵活。

## 4.3 设计一个完善的响应式系统

在上个例子中，副作用函数名为 `effect`，但是如果副作用函数一旦不叫这个名字了，那么整个系统就会崩溃，接下来解决这个问题：

::: details 显示代码

```js
const data = { text: 'hello' }

// 定义全局变量来存储副作用函数
let activeEffect

const set = new Set()
const obj = new Proxy(data, {
  get(target, key) {
    // 如果有了副作用函数的话
    if (activeEffect) {
      set.add(activeEffect) // 就添加到容器中
    }
    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal
    set.forEach((fn) => fn())
  }
})

function effect(fn) {
  activeEffect = fn // 先将函数赋值给全局变量
  fn() // 再调用，触发 get
}

// 传入一个匿名函数
effect(() => (document.body.innerText = obj.text))

setTimeout(() => {
  obj.text = '响应式数据'
}, 2000)
```

:::

解决的方法是：通过一个全局的变量 `activeEffect` 来存储副作用函数，`effect` 变成了可以给 `activeEffect` 赋值的函数，并且调用传递进来的函数，并调用触发 `get`。

可以通过打印发现，其实 `effect` 被调用了两次，一次是在页面刚加载的时候，还有一次是重新设置值的时候

```js
effect(() => {
  document.body.innerText = obj.text
  console.log('调用') // 会触发两次
})
```

接下来看另一个问题：如果定时器中，是给 obj 设置了一个新的属性，而不是修改之前的属性，那么就不需要触发响应式系统了，但是现在，不管怎么操作，都会触发响应式系统，这显然是不合理的，我们实际需要的是：**只需要在副作用函数与被操作的字段直接产生联系即可**。

```js
setTimeout(() => {
  obj.say = '响应式数据' // 也会调用函数触发响应式
}, 2000)
```

所以接下来要重新设置拦截器代码。那么接下来将会使用到：[Map()](https://tianyuhao.cn/blog/javascript/data-type.html#map)、[WeakMap()](https://tianyuhao.cn/blog/javascript/data-type.html#weakmap) 和 [Set()](https://tianyuhao.cn/blog/javascript/data-type.html#set)

::: details 显示代码

```js
const bucket = new WeakMap()
let activeEffect
const data = { text: 'hello' }

const obj = new Proxy(data, {
  get(target, key) {
    // 如果没用 activeEffect 直接返回
    if (!activeEffect) return
    // 取得 WeakMap 中键值所对应的函数
    let depsMap = bucket.get(target)
    // 如果 depsMap 不存在，那么就新建一个 Map 与 target 关联
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }
    // 根据 key 从 depsMap 中取得 deps，它是一个 Set 类型
    // 里面存放的是与当前所有 key 相关的副作用函数 effects
    let deps = depsMap.get(key)
    // 如果 deps 不存在 同样新建一个 Set 并与 key 并联
    if (!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    // 将副作用函数添加到容器中
    deps.add(activeEffect)
    // 返回属性值
    return target[key]
  },
  set(target, key, newVal) {
    // 设置属性值
    target[key] = target
    // 根据 target 从容器中取得 depsMap
    const depsMap = bucket.get(target)
    // 如果不存在 直接返回
    if (!depsMap) return
    // 根据 key 取得所有副作用函数
    const effects = depsMap.get(key)
    // 执行每一个副作用函数
    effects && effects.forEach((fn) => fn())
  }
})
```

:::

最终的数据结构如下：

::: details 显示代码

```shell
WeakMap
  [[Entries]]
    0: {Object => Map(1)}
      key:
        text: "改变啦"
        text2: "新增的数据"
        [[Prototype]]: Object
      value: Map(1)
        [[Entries]]
        0: {"text" => Set(1)}
          key: "text"
          value: Set(1)
            [[Entries]]
            size: 1
            [[Prototype]]: Set
        size: 1
        [[Prototype]]: Map
  [[Prototype]]: WeakMap
```

:::

也许这样并不直观，下面的图描述了它们之间的关系

```
┌──────────┐
│  weakMap │
└────┬─────┘
     │
┌────┴─────┐
│    key   │
└────┬─────┘
     │
┌────▼─────┐     ┌──────────┐
│   value1 ├────►│   Map    │
└────┬─────┘     └────┬─────┘
     │                │
┌────▼─────┐          │
│  value2  │     ┌────┴─────┐     ┌─────────┐
└──────────┘     │    key   ├────►│  Set    │
                 └────┬─────┘     └───┬─────┘
                      │               │
                 ┌────▼─────┐     ┌───┴─────┐
                 │   value1 │     │  value1 │
                 └────┬─────┘     └───┬─────┘
                      │               │
                 ┌────▼─────┐     ┌───▼─────┐
                 │ value2   │     │  value2 │
                 └──────────┘     └─────────┘
```

## 4.4 分支切换与 cleanup

## 4.5 嵌套的 effect 与 effect 栈

## 4.6 避免无限递归循环

## 4.7 调度执行

## 4.8 计算属性 computed 与 lazy

## 4.9 watch 的实现原理

## 4.10 立即执行的 watch 与回调的时机

## 4.11 过期的副作用
