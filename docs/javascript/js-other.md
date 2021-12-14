# 杂项

## JS 数据类型

数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol

- Symbol 是原始数据类型

> 什么是原始数据类型？什么是引用数据类型？

- 原始数据类型：Undefined，Null，Boolean，Number、String
- 引用数据类型：对象、数组、函数

## Unicode 码

可以在网页上打印 Unicode 编码的汉字数字或者字母

```js
console.log('\u0061'); // a
console.log("\u4f60\u597d\u5417"); // 你好吗
console.log("\u35\u32\u30"); // 520
```

转换网站 http://tool.sufeinet.com/Code/ChineseUnicode.aspx

## 本地存储

1. 添加本地存储

> 里面包含两个参数 1 是本地存储名称 2 是本地存储内容

```js
window.localStorage.setItem('名称', data)
```

本地存储名称是`user`存储的内容是`data`

2. 获取本地存储数据

```js
window.localStorage.getItem('名称')
```

> 这里只包含一个参数 就是本地存储的名称

3. 删除本地存储

```js
window.localStorage.removeItem('名称')
```

**注：本地存储只能存储字符串**

## 关于 JSON

### JSON.stringify()

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

### JSON.parse()

使用 `JSON.parse()` 方法可以将 JSON 对象转换为对象

```js
const json = `{"name":"张同学","age":39,"arr":[1,2,3,4]}`
console.log(JSON.parse(json))

// {name: '张同学', age: 39, arr: Array(4)}
```

## 一元运算符

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

## 关于 switch 语句

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

## 关于 json-bigint

js 能够精准的表示的整数范围在 -2^53 到 -2^53 之间（不含两个端点），超出这个范围，则无法正常显示这个值，这使得 JavaScript 不适合金融和科学方面的计算

通常我么在使用**axios**发送请求的时候，后台可能会返回比较大的一个数字，因为**axios**会把 JSON 格式字符串转换为 JS 对象，那么如果这个数字很大，那么就会出现问题，比如：

```js
const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
```

这样输出的`id`就不是原始的数据了

因为这个数字超出了 JS 的安全整数范围，所以不能正常表示了，那么**json-bigint**就可以很好的帮助解决这个问题

**json-bigint** Github 仓库地址：[json-bigint](https://github.com/sidorares/json-bigint)

安装 **json-bigint**

```shell
npm i json-bigint
```

可以通过 json-bigint 内置的方法来获取这样大的数据

1. 将 JSON 数据转换为 JavaScript 对象

```js
JSONbig.parse()
```

等同于

```js
JSON.parse()
```

通过`JSONbig.parse()`转换为的是一个 js 对象，其实它只是换了一种形式表示出了这个数字，那么想要再获得这个数据，还需要`toString()`一下就可以获取到了

```js
// 引入 json-bigint
import JSONbig from 'json-bigint'

const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
console.log(JSONbig.parse(str).id.toString())
```

2. 将 JavaScript 对象转换为 JSON 字符串

```js
JSONbig.stringify()
```

等同于

```js
JSON.stringify()
```

虽然这个两个方法的等同于的，但是通过`JSONbig.parse()`转换为的 JavaScript 对象使用`JSON.stringify()`转换为 JSON 字符串会有一定的问题

> 所以。用什么转来的，就用什么转回去就不会有问题了

## 关于 console

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

## 普通事件和事件绑定

两种事件分别来说说：

- 普通事件（onclick）

普通事件就是直接触发事件，同一时间只能指向唯一对象，所以会被覆盖掉。代码如下：

```js
const btn2 = document.querySelector('.btn2')

btn2.onclick = function () {
  console.log('哈哈哈哈哈哈')
}

btn2.onclick = function () {
  console.log('呵呵呵呵呵呵')
}
```

这样只会输出`呵呵呵呵呵呵`，以为后面的代码会覆盖掉前面的，个 click 处理器在同一时间只能指向唯一的对象。所以就算一个对象绑定了多次，其结果只会出现最后的一次绑定的对象

- 事件绑定（addEventListener）

事件绑定就是对于一个可以绑定的事件对象，进行多次绑定事件都能运行。代码如下：

```js
const btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', function () {
  console.log('11111')
})

btn1.addEventListener('click', function () {
  console.log('222222')
})
```

这样会依次输出 `11111`和`222222`

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

## Set 和 Map 数据结构

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

## indexOf () 方法

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

**lastIndexOf()**

同样是用于查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

不过`lastIndexOf()`是从右往左查找的

比如：数组中有两个`7` 这时返回的就是从右侧查找到的第一个 `7`

```js
const arr = [1, 3, 7, 5, 6, 7, 9]

console.log(arr.lastIndexOf(7)) // 5
```

## 关于基本类型和引用类型内存覆盖问题

- 基本类型

例：当定义了一个值 `a` 之后，但是又将 `b = a` 再给 `b` 赋新的值

```js
let a = 1
let b = a
b = 99
console.log(a) // 1
console.log(b) // 99
```

这时候的 a 仍然是 1，b 的值的 99

> 目前内存当中是有一个数据 a 那么让 b = a 之后，内存中又产生了一个新的值为 b，所以分别打印出来就是内存中两个不同的值 a 和 b

同样的处理那么在引用类型中：

- 引用类型

这里使用数组举例

```js
let arr1 = [1, 3, 5, 6]
let arr2 = arr1
arr1[1] = 'hello'
console.log(arr1) // [1, "hello", 5, 6]
console.log(arr2) // [1, "hello", 5, 6]
```

那么这时候 arr1 和 arr2 同事输出 [1, "hello", 5, 6]

> 目前内存当中是有一个数组 arr1 那么让 arr2 = arr1 之后，并不是又复制了一个数组，而是两个变量使用的同一个数组，所以打印出来的就是内存中被改变出来的数组

```
所以，基本类型重新赋值会在内存中重新生成，引用类型新的变量会公用之前的内容
```

## Referer 说明

解决关于图片请求失败 403 报错问题解决

```shell
GET https://img2018.cnblogs.com/blog/1480369/201809/1480369-20180929001746684-197810269.jpg 403 (Forbidden)
```

> 为什么项目中有时候图片加载失败后报错会返回 403？

```
因为有些项目中的数据是通过爬虫抓取第三方的数据来进行展示的，而第三方对图片做了放到链保护处理，也就是说不能让你直接通过图片地址访问图片资源。
```

> 第三方平台是怎么处理图片资源保护的呢？

```
服务器一般使用 Referer 请求头识别图片来源，然后处理资源访问。
我们在浏览器中发的任何请求，都会携带一个叫 Referer 的字段，会包含请求资源来源页面的地址，也就是你从哪里来的，如果你从网站 A 来的，那么 Referer 就是网站 A 的地址。
服务器一般使用 Referer 请求头识别来源，可能会进行统计分析、日志记录以及缓存优化等
那么服务器一看不是自己的网站，那么就会禁止访问，返回 403，不允许请求。
```

需要注意的是：`referer` 实际是 **referrer** 错误拼写。

打开浏览器的控制台 Network 中，我们发送的任何请求都会携带 Referer

```shell
Referer: http://localhost:8080/
```

> 怎么解决？

```
那么就不要发送 Referer，这样对方服务器就不知道你是从哪里来的了，姑且认为你是自己人吧。
```

> 如何设置？

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

## 浅克隆

当有一个对象时候，我们并不希望直接修改该对象，那么可以将这个对象克隆出来一个进行修改

`浅克隆`只能克隆出对象中基本数据类型的键，比如这里有一个对象：

```js
const obj = {
  name: '小明',
  age: 12,
}
```

可以使用 `for in` 来进行克隆，完整写法如下：

```js
const obj = {
  name: '小明',
  age: 12,
}

function clone(obj) {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}
console.log(clone(obj))
// {name: "小明", age: 12}
```

## 深克隆

但是当对象中又包含一个对象或者数组，那么引用类型是不能直接被克隆出来的，所以要使用深度克隆了：

最简单的方式是：使用`JSON.stringify()` 和 ` JSON.parse()` 来进行克隆操作，具体如下：

```js
const obj = {
  name: '小明',
  age: 12,
  arr: [{ name: '小张1' }, { name: '小张2' }, { name: '小张3' }],
}

const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
```

> 上面方法只能对于纯数据类型可以深度克隆，比如对象数组都可以。但是 函数、undefined 就不能进行拷贝了，那么这时候深克隆就出现了问题，所以请参考下面，使用递归函数深度克隆

```js
function clone(obj) {
  const newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    // 不可以直接赋值的 对象、数组 使用递归函数
    if (obj[key] instanceof Object) {
      newObj[key] = clone(obj[key])
    } else {
      // String、Number、Boolean、undefined、function 可以直接赋值的
      newObj[key] = obj[key]
    }
  }
  return newObj
}

console.log(clone(obj))
```

## URL.createObjectURL()

该方法多数用于图片预览

具体参加文档：[URL.createObjectURL() ](https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29)

实例，通过 input 上传图片预览出上传的图片：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Document</title>
  </head>

  <body>
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
  </body>
</html>
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

## 原生 JS 的一些方法

### getAttribute() 获取一个元素的属性值

```html
<img src="./src/壁纸.jpg" alt="" />

<script>
  const img = document.querySelector('img')
  const res = img.getAttribute('src')
  console.log(res)
  // ./src/壁纸.jpg
</script>
```

> 该方法仅可有一个参数

### setAttribute() 更改一个元素的属性值

```html
<img src="./src/壁纸1.jpg" alt="" />

<script>
  const img = document.querySelector('img')
  img.setAttribute('src', './src/壁纸2.jpg')
</script>
```

> 该方法仅可有两个参数，第一个是要改变的属性，第二个是改变后的值

### toLocaleDateString() 将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## window 对象属性

```js
// navigator 导航器对象
console.log(window.navigator.appCodeName) // 返回浏览器的代码名
console.log(window.navigator.appName) // 返回浏览器的名称
console.log(window.navigator.appVersion) // 返回浏览器的平台版本信息
console.log(window.navigator.cookieEnabled) // 返回浏览器中是否使用 cookie 的布尔值
console.log(window.navigator.platform) // 返回浏览器的操作系统平台
console.log(window.navigator.userAgent) // 返回由客户机发送服务器的 user-agent 头部

// screen 显示器对象
console.log(window.screen.availHeight) // 返回显示器可用的高度
console.log(window.screen.availWidth) // 返回显示器可用的宽度
console.log(window.screen.height) // 返回屏幕像素高度
console.log(window.screen.width) // 返回屏幕像素宽度
console.log(window.screen.colorDepth) // 返回屏幕颜色的位数

// history 历史对象
window.history.back() // 返回上一个 url
window.history.forward() // 返回下一个 url
window.history.go() // 返回某个具体页面
```

## typeof 和 instanceof

`typeof`可以判断一个变量是原始类型中的那种类型，但是在下面情况中，就会显得不那么的友好：

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

## DOM

### childNodes 获取元素中内部的元素

```heml
<body>

  <button>123</button>

  <ul>
    <li>哈哈哈</li>
  </ul>
  <script>
    console.log(document.body.childNodes)
    // NodeList(6) [text, button, text, ul, text, script]
  </script>
</body>
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

### parentNode 获取父级元素

> 仅会获得一个最近的亲父级标签元素

```html
<ul>
  <li>哈哈哈</li>
</ul>

<script>
  const li = document.querySelector('li')
  console.log(li.parentNode)
  // <ul>...</ul>
</script>
```

### children 获取子级元素

该方法可以获取到一个标签下的所有子集元素节点

```html
<ul>
  <li class="li1">
    <p>哈哈哈</p>
    <p>哈哈哈</p>
    <p>哈哈哈</p>
  </li>
  <li class="li2">222</li>
  <li class="li3">333</li>
</ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.children)
  // 0: li.li1
  // 1: li.li2
  // 2: li.li3
</script>
```

> 该属性只返回元素节点

### nextElementSibling 获取一个元素的下一个元素

```html
<p class="title">哈哈哈</p>
<ul>
  <li>
    <p>1</p>
  </li>
</ul>

<script>
  const title = document.querySelector('.title')
  console.log(title.nextElementSibling)
  // <ul>...</ul>
</script>
```

> 或获得下一个元素及其下一个元素内包含的所有元素

## MutationObserver 接口

`MutationObserver`用于观察 dom 发生改变，基本语法

```js
const obs = new MutationObserver(() => console.log('dom 发生了改变'))
```

### observe 方法

```js
const obs = new MutationObserver(() => console.log('dom 发生了改变'))
obs.observe(document.body, { attributes: true })
document.body.setAttribute('class', 'body')

// dom 发生了改变
```

### 接收参数

回调可以接收一个参数，参数内部包含发生了什么变化

```js
const obs = new MutationObserver((e) => console.log(e))
obs.observe(document.body, { attributes: true })
document.body.setAttribute('class', 'body')
```

**输出结果**

```
[MutationRecord]
0: MutationRecord
addedNodes: NodeList []
attributeName: "class"
attributeNamespace: null
nextSibling: null
oldValue: null
previousSibling: null
removedNodes: NodeList []
target: body.body
type: "attributes"
[[Prototype]]: MutationRecord
length: 1
[[Prototype]]: Array(0)
```

第二个参数是观察变化的实例

```js
const obs = new MutationObserver((e, v) => console.log(e, v))
obs.observe(document.body, { attributes: true })
document.body.setAttribute('class', 'body')

// [MutationRecord] MutationObserver {}
```

### disconnect 方法

默认情况下，只要被观察的元素不被垃圾回收，MutationObserver 的回调就会响应 dom 变化事件，而被执行，要想提前终止执行回调，可以使用 `disconnect` 方法

```js
const obs = new MutationObserver(() => console.log('body 发生改变'))
obs.observe(document.body, { attributes: true })
document.body.className = 'body'
obs.disconnect()
document.body.className = 'body2'

// 没有日志输出
```

调用`disconnect ` 函数之后，不仅会停止事件后的回调，也会抛弃之前的回调

## Object.entries()

`Object.entries` 方法可以将对象中的每个键和值转换为数组形式，**返回一个给定对象自身可枚举属性的键值对数组**

```js
const obj = {
  name: '张同学',
  age: 39,
}

for (const item of Object.entries(obj)) {
  console.log(item)
}
// ['name', '张同学']
// ['age', 39]
```

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()` 方法可以得到对象属性特征的描述，接收两个参数，第一个是对象名，第二个是对象的属性名

```js
const obj = {
  name: '张三',
  age: 21,
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: '张三', writable: true, enumerable: true, configurable: true}

// value - 属性值
// writable - 是否可以修改
// enumerable - 是否可以遍历
// configurable - 是否可以被删除或重新配置
```

## Object.getOwnPropertyDescriptors()

上面 `Object.getOwnPropertyDescriptor()` 方法可以获取对象中单个键的属性特征描述，那么想要获取对象中所有属性的描述，需要使用 `Object.getOwnPropertyDescriptors()` 方法，该方法接收一个参数为对象名

```js
const obj = {
  name: '张三',
  age: 21,
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法可以禁止向对象内添加内容

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.preventExtensions(obj)
obj.a = '1'
console.log(obj) // {name: '张三', age: 21}
```

## Object.seal()

封闭对象，**configurable = false**不可以被删除或重新配置

可以使用 `Object.isSealed()` 方法判断当前对象是否处于封闭状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.seal(obj)
// 封闭对象，configurable = false

console.log(Object.isSealed(obj)) // true
```

## Object.freeze()

冻结对象，不能删除或重新配置，也不可以修改

可以使用 `Object.isFrozen()` 方法判断当前对象是否处于冻结状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.freeze(obj)
// 冻结对象，configurable = false，writable = false

console.log(Object.isFrozen(obj)) // true
```

## 访问器保护数据

在正常对象中，对象中的属性我们是可以随意设置和更改的，但是有些时候并不希望某些值被设置了不可控的值，比如：

```js
const user = {
  name: '张同学',
  age: 12,
}

user.age = 19999
console.log(user) // {name: '张同学', age: 19999}
```

所以就需要加以限制，需要在对象中新建两个获取函数，分别使用 `set` 和 `get` 声明，那么每次获取和修改都会经过这里，来进行判断

```js
const user = {
  data: {
    name: '张同学',
    age: 12,
  },
  set age(val) {
    if (typeof val !== 'number' || val < 1 || val > 100) {
      throw new Error('年龄格式错误')
    }
    this.data.age = val
  },
  get age() {
    return this.data.age
  },
}
```

**批量设置属性**

```js
const user = {
  name: '张同学',
  age: 12,
  set info(val) {
    ;[this.name, this.age] = val.split(',')
  },
}

user.info = '小明,14'
console.log(user)
```

**利用访问器设置 token**

```js
const request = {
  set setToken(val) {
    localStorage.setItem('token', val)
  },
  get getToken() {
    return localStorage.getItem('token')
  },
}

request.setToken = '12121dadasdada'
console.log(request.getToken)
```

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

#### next() 方法

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

## Object.defineProperty()

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象
它接收了三个参数：

- 要给其添加属性的对象
- 属性的名称
- 描述对象

```js
const user = {
  name: '张同学',
  age: 38,
}

Object.defineProperty(user, 'friend', {
  configurable: true, // 是否可以通过 delete 删除
  enumerable: true, // 是否可以循环
  writable: true, // 是否可以修改
  value: [1, 2, 3, 4], // 添加的值
})

console.log(user) // {name: '张同学', age: 38, friend: Array(4)}
```

更多详细信息参考 MDN 文档：[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
