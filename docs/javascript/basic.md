# 基础

## 运算符

### 一元运算符

关于 a++ 和 ++a 的问题

正常在不参与运算的情况下是没什么区别的

```js
let a = 2

console.log(a++)
console.log(++a)
// 结果都是3
```

那么再参与运算时

- 先++

```js
let a = 2
let b = 4
console.log(a + ++b)
// 结果为7 ++放到前面 b先自增 b+1 + a
```

- 后++

```js
let a = 2
let b = 4
console.log(a + b++)
// 结果为6 ++放到后面 b后自增 b + a
// b++ 是在 算完 b + a 只后再自增的 所以再打印 b 就是5了
console.log(b)
```

### 逻辑与 &&

用于检查所有值（通常值为条件）是否为真。

它将返回第一个值 false，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse && isTrue) // false
console.log(isTrue && isFalse) // false

const toto = 5 && 3 && 1
console.log(toto) // 1

const tutu = 5 && 0 && 2
console.log(tutu) // 0
```

### 逻辑或 ||

用于检查一组值中的一个值（通常值是条件）是否为真。

它将返回第一个值 true，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse || isTrue) // true
console.log(isTrue || isFalse) // true

const toto = 5 || 3 || 1
console.log(toto) // 5

const tutu = 0 || 5 || 2
console.log(tutu) // 5
```

### 逻辑空 ??

当其左侧操作数为 null 或 undefined （空值）时，返回其右侧操作数。

```js
console.log(null ?? 12) // 12
console.log(undefined ?? 12) // 12
console.log(55 ?? 12) // 55
console.log(55 ?? null) // 55
console.log(55 ?? undefined) // 55
```

> 注意：??运算符与||不同，因此当你需要根据其他值来赋值时，应该选择正确的运算符！

```js
const toto = 0 || 55 // 0 为false 所以是55
const titi = 0 ?? 55 // 0不是null或者undefined，所以是0

const tutu = undefined || 55 // undefined 为false，所以是55
const tata = undefined ?? 55 // 第一个是undefined，所以是55
```

## switch 语句

例如：

```js
let name = '小明'

switch (name) {
  case '小明':
    console.log('这是小明')
    break
  case '小张':
    console.log('这是小张')
    break
  default:
    console.log('我谁也不是')
}
```

例子中 我们要判断`name`来输出不同的内容，它会用`name`来和`case`的每一个字段进行相比，如果成立，就执行下面的内容，如果碰到`break`就退出`switch`。

如果一直都没有找到成立项，那么就执行`default`的内容

那么如果想要有两个字段有统一的处理方式的话，也可以这么写：

```js
let item = 'hello'

switch (item) {
  case 'hello':
  case 'Hi':
    console.log('你好啊')
    break
  case 'yes':
    console.log('是的')
    break
}
```

这里要判断的值是`item`上面代码意思是：`item`的值是`hello`或者`Hi`的其中一个，都是可以执行`break`前的内容的，两个内容使用统一的处理方式

## console

`console.log()` 在控制台上输出信息

```js
console.log('这的一段信息')

// 这的一段信息
```

`console.table()` 用于打印数组结构

比如，我们在定义一个数组的时候，要是在控制台打印是这样的：

```js
const arr = [1, 3, 5, 6]
console.log(arr)
// (4) [1, 3, 5, 6]
```

类似数组，可以通过 console.table() 来更直观的打印出：

```js
const arr = [1, 3, 5, 6]
console.table(arr)
```

打印结果为：

| (index) | value |
| ------- | :---- |
| 0       | 1     |
| 1       | 3     |
| 2       | 5     |
| 3       | 6     |

```js
Array(4)
```

会打印出 索引对应的值

`console.error()` 用于错误信息提示

```js
console.error('这是一段错误信息')
// 这是一段错误信息
```

`console.warn()` 用于打印警告信息

```js
console.warn('这是一段警告信息')
```

## 事件绑定

### addEventListener()

`addEventListener()` 方法接收三个参数：事件名、事件处理函数和一个布尔值，`true` 表示在捕获阶段处理程序；false(默认值)在冒泡阶段处理程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了')
    },
    false
  )

  // 点击了1
</script>
```

`addEventListener()` 的优势是可以处理多个事件程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了1')
    },
    false
  )

  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了2')
    },
    false
  )

  // 点击了1
  // 点击了2
</script>
```

也可以定义函数通过函数名传参

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  document.getElementById('btn').addEventListener('click', _alert, false)
</script>
```

### removeEventListener()

`removeEventListener()` 可以移除事件处理程序，需要接收两个参数：事件名和事件函数

那也就是说通过 `addEventListener()` 添加的事件处理程序添加匿名函数是无法移除的，如下

**反面案例**

```html
<button id="btn">点击</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener(
    'click',
    function () {
      console.log('点击')
    },
    false
  )

  btn.removeEventListener('click', function () {
    console.log('点击')
  })
</script>
```

**正确的**

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  const btn = document.getElementById('btn')
  btn.addEventListener('click', _alert, false)
  btn.removeEventListener('click', _alert) // 有效果
</script>
```

## 计算程序执行的时间

上面，通过随机数的方法可以获取程序所执行的时间，它是原理是

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

其实，如果想要计算程序执行的时间，可以尝试下面的方法

我们只知道 `console.log()` 可以在浏览器控制台内打印出数据

其实 `console.` 后面还可以有很多别的参数，比如下面方法就可以计算程序执行的时间：

```js
console.time('for')
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
console.timeEnd('for')
```

> `console.time()` 和 `console.timeEnd()` 是相互对应的两个标签，计算的就是中间包裹住程序所执行的时间，里面名称可以自定义，但是开始和结束的名称必须对应！
>
> **参数填写错误浏览器会有警告！（不是报错）**

## Referer 说明

解决关于图片请求失败 403 报错问题解决

> GET https://img2018.cnblogs.com/blog/1480369/201809/1480369-20180929001746684-197810269.jpg 403 (Forbidden)

为什么项目中有时候图片加载失败后报错会返回 403？

因为有些项目中的数据是通过爬虫抓取第三方的数据来进行展示的，而第三方对图片做了放到链保护处理，也就是说不能让你直接通过图片地址访问图片资源。

> 第三方平台是怎么处理图片资源保护的呢？

> 服务器一般使用 Referer 请求头识别图片来源，然后处理资源访问。
> 我们在浏览器中发的任何请求，都会携带一个叫 Referer 的字段，会包含请求资源来源页面的地址，也就是你从哪里来的，如果你从网站 A 来的，那么 Referer 就是网站 A 的地址。
> 服务器一般使用 Referer 请求头识别来源，可能会进行统计分析、日志记录以及缓存优化等
> 那么服务器一看不是自己的网站，那么就会禁止访问，返回 403，不允许请求。

需要注意的是：`referer` 实际是 **referrer** 错误拼写。

打开浏览器的控制台 Network 中，我们发送的任何请求都会携带 Referer

```shell
Referer: http://localhost:8080/
```

**怎么解决？**

> 那么就不要发送 Referer，这样对方服务器就不知道你是从哪里来的了，姑且认为你是自己人吧。

**如何设置？**

能发 Referer 的资源有很多，比如;

`<a>`、`<img>`、`<script>`、`<area>` 或者 `<link>`

可以单独设置禁止发送 Referer

```html
<img src="http://....." alt="" referrerpolicy="no-referrer" />
```

也可以在 HTML 页面头部通过 meta 标签属性全局配置

```html
<meta name="referrer" content="no-referrer" />
```

## typeof 和 instanceof

`typeof` 可以判断一个变量是原始类型中的那种类型，但是在下面情况中，就会显得不那么的友好：

```js
const arr = [1, 2, 3, 4]
const obj = {}
const n = null
console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof n) // object
```

可见，使用 `typeof` 方法之后，在判断数组，对象和 null 的时候，返回的结果都是 `object`，但是我们要判断引用类型具体是什么类型，就需要使用 `instanceof`了：

```js
const arr = [1, 2, 3, 4]
const obj = {}
console.log(arr instanceof Array)
console.log(obj instanceof Object)
```

这样就可以很好的分清楚是对象还是数组了

> 注意：instanceof 只能进行检查引用类型，检查原始类型全部返回 false！
