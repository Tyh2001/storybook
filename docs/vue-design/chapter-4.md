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
function inner() {
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

```js
// 原始数据
const obj = { text: 'hello' }

const set = new Set() // 用来存储副作用函数

// 创建代理，代理 obj
const p = new Proxy(obj, {
  // 获取
  get(target, key) {
    set.add(inner) // 将副作用函数添加到容器中
    return target[key] // 返回指定的值
  },
  // 设置
  set(target, key, newVal) {
    target[key] = newVal // 赋值为新值
    set.forEach((fn) => fn()) // 调用副作用函数重新渲染页面
  },
})

// 副作用函数
function inner() {
  document.body.innerText = p.text
}
inner()

// 三秒后重新赋值，可以发现已经成为响应式了
setTimeout(() => {
  p.text = '改变啦'
}, 3000)
```

这就是一个基本的响应式系统的实现，但是这个逻辑还存在着很多问题，其实还远远的不够灵活。

## 4.3 设计一个完善的响应式系统

## 4.4 分支切换与 cleanup

## 4.5 嵌套的 effect 与 effect 栈

## 4.6 避免无限递归循环

## 4.7 调度执行

## 4.8 计算属性 computed 与 lazy

## 4.9 watch 的实现原理

## 4.10 立即执行的 watch 与回调的时机

## 4.11 过期的副作用
