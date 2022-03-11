# 迭代器

## 说明

可以迭代对象可以使用 `Symbol.iterator` 作为键来查看是否可以进行迭代，这个在实际开发中并不常用。

```js
const num = 1
const arr = [1, 2, 34, 5, 5]

console.log(num[Symbol.iterator]) // undefined
console.log(arr[Symbol.iterator]) // ƒ values() { [native code] }

// 所以 num 是不可迭代的，arr 是可迭代的
```

**next()**

迭代器 API 使用 `next()` 方法可以在迭代器中遍历数据，每次成功调用 `next()` 都会返回一个 `IteratorResult` 对象，对象中有两个键值，其中 `value` 是当前迭代的值，`done` 是否完成迭代(布尔值)，`done` 为 `true` 时，表示当前迭代已经被耗尽，`value` 返回 `undefined`

```js
const arr = [1, 2, 34, 5, 5]

const arr_ = arr[Symbol.iterator]()

console.log(arr_.next()) // {value: 1, done: false}
console.log(arr_.next()) // {value: 2, done: false}
console.log(arr_.next()) // {value: 34, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: undefined, done: true}
```

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
