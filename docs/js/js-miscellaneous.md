# 杂项

## JS 数据类型

数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol

- Symbol 是原始数据类型

> 什么是原始数据类型？什么是引用数据类型？

- 原始数据类型：Undefined，Null，Boolean，Number、String
- 引用数据类型：对象、数组、函数



## Unicode码

可以在网页上打印 Unicode 编码的汉字数字或者字母

````js
console.log('\u0061'); // a
console.log("\u4f60\u597d\u5417"); // 你好吗
console.log("\u35\u32\u30"); // 520
````

转换网站 http://tool.sufeinet.com/Code/ChineseUnicode.aspx



## 本地存储

1. 添加本地存储

> 里面包含两个参数 1是本地存储名称   2是本地存储内容

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



## 关于JSON

很多时候我们在设置本地存储的时候都需要将一个对象存入本地存储中，但是本地存储只能存储字符串，那么可以使用

```js
JSON.stringify()
```

来将对象转换为JSON格式字符串进行存储

那么想要获取对象还需要再转换回 JSON字符串，方法为：

```js
JSON.parse()
```


## 变量冻结

这里比如我们使用`const`声明一个常量的对象

```js
const obj = {
  name: '小明',
  age: 12
}
obj.name = '小张'
console.log(obj.name)

// 输出结果是被更改后的 小张
```

虽然是使用`const`声明，但是对象的属性值依然是可以改变的，那么如果想要声明之后以后不能被改变里面的值，可以使用，进行变量冻结，这就可以直接把变量的车门焊死，一旦声明，不能改变

```js
Object.freeze(+对象名)
```

效果如下

```js
const obj = {
  name: '小明',
  age: 12
}
Object.freeze(obj)
obj.name = '小张'
console.log(obj.name)

// 输出结果是依然是 小明
```

那么现在还有问题就是：既然变量已经冻结不能修改了，那么又加入：

```js
obj.name = '小张'
```

显然这段代码是一个错误的、没有意义的代码，所以我们要让大家知道，这段代码是错误的

所以可以通过加入严格模式，一旦已经冻结的变量，再修改里面的值，那么直接报错！

完整代码如下：

```js
'use strict'
const obj = {
  name: '小明',
  age: 12
}
Object.freeze(obj)
obj.name = '小张'
console.log(obj.name)
```

加入严格模式之后，浏览器将会直接报错：

```shell
Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

所以将重新赋值删掉即可解决问题。



## 一元运算符

关于 a++  和  ++a  的问题

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



## 关于switch语句

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

通常我么在使用**axios**发送请求的时候，后台可能会返回比较大的一个数字，因为**axios**会把JSON格式字符串转换为JS对象，那么如果这个数字很大，那么就会出现问题，比如：

```js
const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
```

这样输出的`id`就不是原始的数据了

因为这个数字超出了JS的安全整数范围，所以不能正常表示了，那么**json-bigint**就可以很好的帮助解决这个问题

 **json-bigint** Github 仓库地址：[json-bigint](https://github.com/sidorares/json-bigint)

安装 **json-bigint**

```shell
npm i json-bigint
```



可以通过json-bigint内置的方法来获取这样大的数据

1. 将JSON数据转换为 JavaScript 对象

```js
JSONbig.parse()
```

等同于

```js
JSON.parse()
```

通过`JSONbig.parse()`转换为的是一个js对象，其实它只是换了一种形式表示出了这个数字，那么想要再获得这个数据，还需要`toString()`一下就可以获取到了

```js
// 引入 json-bigint
import JSONbig from 'json-bigint'

const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
console.log(JSONbig.parse(str).id.toString())
```



2. 将 JavaScript 对象转换为JSON字符串

```js
JSONbig.stringify()
```

等同于

```js
JSON.stringify()
```

虽然这个两个方法的等同于的，但是通过`JSONbig.parse()`转换为的JavaScript 对象使用`JSON.stringify()`转换为JSON字符串会有一定的问题

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
const btn2 = document.querySelector(".btn2")

btn2.onclick = function () {
  console.log("哈哈哈哈哈哈")
}

btn2.onclick = function () {
  console.log("呵呵呵呵呵呵")
}
```

这样只会输出`呵呵呵呵呵呵`，以为后面的代码会覆盖掉前面的，个click处理器在同一时间只能指向唯一的对象。所以就算一个对象绑定了多次，其结果只会出现最后的一次绑定的对象



- 事件绑定（addEventListener）

事件绑定就是对于一个可以绑定的事件对象，进行多次绑定事件都能运行。代码如下：

```js
const btn1 = document.querySelector(".btn1")

btn1.addEventListener("click", function () {
  console.log("11111")
})

btn1.addEventListener("click", function () {
  console.log("222222")
})
```

这样会依次输出 `11111`和`222222`


## 计算程序执行的时间

上面，通过随机数的方法可以获取程序所执行的时间，它是原理是

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) { } // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

其实，如果想要计算程序执行的时间，可以尝试下面的方法

我们只知道 `console.log()` 可以在浏览器控制台内打印出数据

其实 `console.` 后面还可以有很多别的参数，比如下面方法就可以计算程序执行的时间：

```js
console.time('for')
for (i = 0; i < 22222220; i++) { }
for (i = 0; i < 22222220; i++) { }
for (i = 0; i < 22222220; i++) { }
console.timeEnd('for')
```

> `console.time()` 和 `console.timeEnd()` 是相互对应的两个标签，计算的就是中间包裹住程序所执行的时间，里面名称可以自定义，但是开始和结束的名称必须对应！
>
> **参数填写错误浏览器会有警告！（不是报错）**



##  Set 和 Map 数据结构

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
setArr.add([1,4,56])
setArr.add({name: '小明'})
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


##  关于基本类型和引用类型内存覆盖问题

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


##  Referer 说明

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

需要注意的是：`referer` 实际是  **referrer** 错误拼写。

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
<img src="http://....." alt="" referrerPolicy="no-referrer">
```

也可以在 HTML 页面头部通过 meta 标签属性全局配置

```html
<meta name="referrer" content="no-referrer">
```



##  浅克隆

当有一个对象时候，我们并不希望直接修改该对象，那么可以将这个对象克隆出来一个进行修改

`浅克隆`只能克隆出对象中基本数据类型的键，比如这里有一个对象：

```js
const obj = {
  name: '小明',
  age: 12
}
```

可以使用 `for in` 来进行克隆，完整写法如下：

```js
const obj = {
  name: '小明',
  age: 12
}

function clone (obj) {
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}
console.log(clone(obj))
// {name: "小明", age: 12}
```



##  深克隆

但是当对象中又包含一个对象或者数组，那么引用类型是不能直接被克隆出来的，所以要使用深度克隆了：

最简单的方式是：使用`JSON.stringify()` 和 ` JSON.parse()` 来进行克隆操作，具体如下：

```js
const obj = {
  name: '小明',
  age: 12,
  arr: [
    { name: '小张1' },
    { name: '小张2' },
    { name: '小张3' }
  ]
}

const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
```

> 上面方法只能对于纯数据类型可以深度克隆，比如对象数组都可以。但是 函数、undefined 就不能进行拷贝了，那么这时候深克隆就出现了问题，所以请参考下面，使用递归函数深度克隆

```js
function clone (obj) {
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

实例，通过input 上传图片预览出上传的图片：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Document</title>
</head>

<body>
  <input type="file" accept="image/*">
  <img src="" alt="">

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
  key: Symbol()
}

const user2 = {
  name: '李四',
  key: Symbol()
}

const obj = {
  [user1.key]: {
    js: 100,
    css: 20
  },
  [user2.key]: {
    js: 30,
    css: 21
  }
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
  [age]: 12
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



##  原生 JS 的一些方法

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



### getAttribute() 获取一个元素的属性值

```html
<img src="./src/壁纸.jpg" alt="">

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
<img src="./src/壁纸1.jpg" alt="">

<script>
  const img = document.querySelector('img')
  img.setAttribute('src', './src/壁纸2.jpg')
</script>
```

> 该方法仅可有两个参数，第一个是要改变的属性，第二个是改变后的值



### toLocaleDateString() 将 Date对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```



##  window 对象属性

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



##  Object.defineProperty() 方法

>Object.defineProperty 是什么？

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象：

```js
const XiaoMing = {}
Object.defineProperty(XiaoMing, 'name', {
  value: '小明'
})
console.log(XiaoMing)

// {name: "小明"}
```

这个函数中需要传递三个参数：

1. 需要添加属性的对象名称
2. 需要给对象添加的属性名称
3. 第三个参数为一个对象，里面包含 `value` 是要添加的属性值

但是这样添加的属性值默认是不能被**修改、删除、遍历**的，那么在严格模式下，修改属性值就会报错（非严格模式不会报错）：

```js
'use strict'
const XiaoMing = {}
Object.defineProperty(XiaoMing, 'name', {
  value: '小明'
})
XiaoMing.name = 'Ming'
console.log(XiaoMing)
```

报错内容为：

```shell
demo6.html:41 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// 无法分配给对象“#<object>”的只读属性“name”
```

我们可以在第三个参数的对象中配置属性来改变状态，下面仅列举出一些常用属性：

```js
const XiaoMing = {}
Object.defineProperty(XiaoMing, 'name', {
  configurable: true, // 是否可以删除属性
  writable: true, // 是否可以修改
  enumerable: true,
  value: '小明'
})
```

更多详细信息参考MDN文档：[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## typeof和instanceof

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
