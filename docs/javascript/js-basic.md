# 基础

## JSON

**JSON.stringify()**

使用 `JSON.stringify()` 方法可以将对象转换为 JSON 对象

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4],
}

console.log(JSON.stringify(obj))

// {"name":"张同学","age":39,"arr":[1,2,3,4]}
```

也可以接收第二个参数，用于过滤，可以接收一个数组或函数

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4],
}

console.log(JSON.stringify(obj, ['age']))

// {"age":39}
```

通过第二个参数过滤出 `age`

第三个参数是代表每行的缩进数量，最大为 10

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4],
}

console.log(JSON.stringify(obj, null, 2))
```

结果如下：

```json
{
  "name": "张同学",
  "age": 39,
  "arr": [1, 2, 3, 4]
}
```

**JSON.parse()**

使用 `JSON.parse()` 方法可以将 JSON 对象转换为对象

```js
const json = `{"name":"张同学","age":39,"arr":[1,2,3,4]}`
console.log(JSON.parse(json))

// {name: '张同学', age: 39, arr: Array(4)}
```

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

## Set 和 Map

### Set()

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值

创建一个 `Set` 数据结构也很简单：

```js
const setArr = new Set()
console.log(setArr)

// Set(0) {}
```

下面说一下 Sat 数据结构的一些常用方法

`add()` 添加元素

```js
const setArr = new Set()
setArr.add('1')
setArr.add(43)
setArr.add([1, 4, 56])
setArr.add({ name: '小明' })
console.log(setArr)

// Set(4) {"1", 43, Array(3), {…}}
```

> 可以添加任何数据类型

但是如果添加一样的元素，那么就只会留下一个

```js
const setArr = new Set()
setArr.add('1')
setArr.add('1')
console.log(setArr)

// Set(1) {"1"}
```

`delete()` 删除元素

```js
const setArr = new Set()
setArr.add('1')
setArr.add(678)
setArr.delete('1')
console.log(setArr)

// Set(1) {678}
```

`has()` 检测集合中有无指定元素（返回布尔值）

```js
// 检测集合中有无字符串1
const setArr = new Set()
setArr.add('1')
console.log(setArr.has('1'))

// true
```

`size` 检测集合的长度

```js
const setArr = new Set()
setArr.add(34)
setArr.add(45)
setArr.add(12)
console.log(setArr.size)

// 3
```

将 Set 转换为数组

可以使用 Es6 的扩展运算符 **...** 对 Set 展开进行转换

```js
const setArr = new Set([1, 3, 3, 3, 3, 4, 6])
const arr = [...setArr]
console.log(arr)

// (4) [1, 3, 4, 6]
```

### Map()

Map 类型实际上是键值对的有序集合，键和值是任意类型

> 键值对：一个键对应一个值

`set()` 添加元素

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)
console.log(mapList)

// Map(2) {"name" => "张三", "age" => 12}
```

> set 方法传入两参数，一个是键名，一个键值

`get()` 通过指定键名获取键值

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)

console.log(mapList.get('name'))
// 张三
```

`has()` 、 `delete()` 方法和 Set 用法一样

## indexOf()

返回指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1。

**该方法是从数组的左侧向右侧查找**

> 字符串：

```js
const arr = '12334'

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(2)) // 有 2 输出2的索引 1
```

> 数组：

```js
const arr = [1, 3, 4]

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(4)) // 有 4 输出4的索引 2
```

> indexOf () 方法 是严格类型查找，比如下面实例中：

比如数组中有一个字符串`'7'` 那么是查找不到的

```js
const arr = [1, 3, '7', 5]
console.log(arr.indexOf(7)) // -1
// 严格类型匹配查询不到字符串7，所以返回 -1

const arr = [1, 3, '7', 5]
console.log(arr.indexOf('7'))
// 这样查找字符串7才可以返回索引值：2
```

> indexOf () 方法 是可以有两个参数的

第一个参数为要查找的元素

第二个参数为查找开始的位置

```js
const arr = [1, 3, '7', 5]

console.log(arr.indexOf(1, 2))
// 虽然数组中存在 1，但是从第二位开始查找，后面找不大，所以返回 -1
```

同样，类似的方法还有：

## lastIndexOf()

同样是用于查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

不过`lastIndexOf()`是从右往左查找的

比如：数组中有两个`7` 这时返回的就是从右侧查找到的第一个 `7`

```js
const arr = [1, 3, 7, 5, 6, 7, 9]

console.log(arr.lastIndexOf(7)) // 5
```

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

## Symbol 数据类型

Symbol 数据库类型是特点是：**值是唯一的**

可以通过`Symbol()` 创建一个 Symbol()

```js
let a = Symbol()
let b = Symbol()

console.log(typeof a) // Symbol
console.log(a === b) // false
```

Symbol 并不是一个对象，可以把它理解为一个字符串，一个永远都不会重复的字符串，所以它是原始类型。

> 可以给 Symbol 添加一个描述：

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')
```

用 js 内置的方法 `description` 提取出描述信息，并以字符串形式打印

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')

console.log(a.description) // 这是一段文字
console.log(b.description) // 你好吗
```

> 除此之外，还可以使用 `Symbol.for()` 来定义

这样定义的也可以在内部添加描述，但是这样的好处是：如果两次定义完全一样，那么两个变量会公用一个内容地址：

```js
const a = Symbol.for('这是一段文字')
const b = Symbol.for('这是一段文字')
console.log(a === b) // true
```

那么这样再判断的话，两个变量就相等了

这样声明的话，可以使用 `Symbol.keyFor()` 来获得描述的文字

```js
const a = Symbol.for('这是一段文字')
console.log(Symbol.keyFor(a)) // 这是一段文字
```

实际应用，当有两个人的名字的一样的时候，可以使用 `Symbol` 来定义每个键值作为区分：

```js
const user1 = {
  name: '李四',
  key: Symbol(),
}

const user2 = {
  name: '李四',
  key: Symbol(),
}

const obj = {
  [user1.key]: {
    js: 100,
    css: 20,
  },
  [user2.key]: {
    js: 30,
    css: 21,
  },
}

console.log(obj) // {Symbol(): {…}, Symbol(): {…}}
console.log(obj[user1.key]) // {js: 100, css: 20}
console.log(obj[user2.key]) // {js: 30, css: 21}
```

在对象中，如果存在 Symbol 类型时，通过普通的`for in` 或者 `for of` 循环是遍历不到的：

```js
const age = Symbol('age')
const obj = {
  name: '张三',
  [age]: 12,
}
// 普通的方式遍历只能得到普通的值
for (const key of Object.keys(obj)) {
  console.log(key) // name
}

// 使用 Object.getOwnPropertySymbols() 方法之可以遍历出 Symbol 类型
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key) // Symbol(age)
}

// 如果想要遍历出所有的类型，需要使用 Reflect.ownKeys() 静态方法才可以实现
for (const key of Reflect.ownKeys(obj)) {
  console.log(key)
  // name
  // Symbol(age)
}
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

## XMLHttpRequest

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

## FormDate 类型

创建一个 formdata

```js
const fd = new FormData()
fd.append('name', 'data')
```

`append` 方法接收两个参数 键和值

使用 FormDate 就不需要给 xhr 对象设置响应头了，因为 xhr 对象可以识别作为 FormDate 实例传入的数据类型并自动配置响应头

## 迭代器

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

## Promise

`Promise` 是一个构造函数，可以通过 `new` 关键字来创建

```js
const p = new Promise()
```

`Promise` 有三种状态，分别是：**pending（等待态），fulfilled（成功态），rejected（失败态）**
那么怎么在三种状态中切换呢，如下

```js
const p1 = new Promise((resolve, reject) => {})
console.log(p1) // pending

const p2 = new Promise((resolve, reject) => {
  resolve()
})
console.log(p2) // pending -> fulfilled

const p3 = new Promise((resolve, reject) => {
  reject()
})
console.log(p3) // pending -> rejected
```

通过调用不同的函数可以改变 `Promise` 的状态

> pending 状态的 Promise 不会触发 then 和 catch 方法
> 成功状态会执行 then 里的草错，失败会执行 catch 里的操作

## 异步编程
