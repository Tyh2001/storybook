# 生成器

## 打破完整运行

我们知道，函数在正常情况下，只有调用了，就要将函数内部所有的代码全部执行，但是想要打破这种原则，就需要的是：`生成器`

下面例子：

```js
let x = 1

// 创建生成器函数
// 带有 * 的函数
function* foo() {
  x++
  yield // 暂停关键字
  console.log('x:', x)
}
function bar() {
  x++
}
const it = foo() // 创建一个迭代器
it.next() // 执行迭代器（执行到底一个暂停之前）
console.log(x) // 2
bar() // 正常调用了 bar 函数
console.log(x) // 3
it.next() // 再次启动迭代器 x: 3
```

> 生成器是一种特殊的函数（带有 \* 号），可以一次或者多次暂停或启动。

## 输入和输出

生成器也是一种函数，所以正常的输入和输出都是可以的，只是语法方面会稍有变化

```js
function* fun(a, b) {
  return a + b
}

const it = fun(3, 4)
const res = it.next()
console.log(res.value) // 12
```

你可能想不到也可以这样

```js
function* fun(x) {
  let a = x * (yield)
  return a
}

const it = fun(10)
it.next() // 启动迭代器
const res = it.next(2) // 遇到了 yield，再次传入参数启动迭代器
console.log(res.value)
```
