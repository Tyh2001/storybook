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

## 4.3 设计一个完善的响应式系统

## 4.4 分支切换与 cleanup

## 4.5 嵌套的 effect 与 effect 栈

## 4.6 避免无限递归循环

## 4.7 调度执行

## 4.8 计算属性 computed 与 lazy

## 4.9 watch 的实现原理

## 4.10 立即执行的 watch 与回调的时机

## 4.11 过期的副作用
