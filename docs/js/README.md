# JS相关

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



## 循环进阶

for in 循环

**for in**遍历数组

```js
const arr = ['111', '222', '333']
for (let key in arr) {
    console.log(key)
}

// 0
// 1
// 2
```

>  遍历数组`key`实际上输出的就是数组中每一项的索引值



**for  in** 遍历对象

```js
const arr2 = {
    name: 'xiaoming',
    age: '12',
    from: 'chinese'
}

// 打印 key 是对象中的每一项的键名
for (let key in arr2) {
    console.log(key)
}
// name
// age
// from

// 打印 arr2[key] 是对象中的每一项的值
for (let key in arr2) {
    console.log(arr2[key])
}
// xiaoming
// 12
// chinese
```

>  遍历对象`key`实际上输出的就是对象中每一项的键名

> `key`的值的可以自定义的，可以自己定义名字，叫a、b、c 也可以，但是要有语义



for of 循环

**for  of**遍历数组

```js
const arr = ['111', '222', '333']
for (let val of arr) {
    console.log(val)
}
// 111
// 222
// 333
```

>  遍历数组`val`实际上输出的就是数组中每一项的值



下面会直接拿到数组中每项的`title`内容

```js
const arr3 = [
    { title: "踩踩踩", age: '12' },
    { title: "大大大", age: '35' },
    { title: "啊啊啊", age: '22' }
]

for (const val of arr3) {
    console.log(val.title)
}

// 踩踩踩
// 大大大
// 啊啊啊
```



也可以直接将字符串打印出来

```js
for (let item of '1234') {
    console.log(item)
}
// 1
// 2
// 3
// 4
```

> 注意：for  of  不能遍历对象！！



forEach 循环

```js
const arr = [
    { title: "踩踩踩", age: '12' },
    { title: "大大大", age: '35' },
    { title: "啊啊啊", age: '22' }
]

arr.forEach((item, val) => {
    console.log(item)
    console.log(val)
})

// {title: "踩踩踩", age: "12"}
// 0
// {title: "大大大", age: "35"}
// 1
// {title: "啊啊啊", age: "22"}
// 2
```

> forEach 使用回调函数遍历每个成员，可接收两个参数
>
> item 是数组中的每一项
>
> val 是数组中每一项的索引值



## 关于 json-bigint

js 能够精准的表示的整数范围在 -2^53 到 -2^53 之间（不含两个端点），超出这个范围，则无法正常显示这个值，这使得 JavaScript 不适合金融和科学方面的计算

通常我么在使用**axios**发送请求的时候，后台可能会返回比较大的一个数字，因为**axios**会把JSON格式字符串转换为JS对象，那么如果这个数字很大，那么就会出现问题，比如：

```js
const str = '{ "id": 158464848747369549 }'
console.log(JSON.parse(str).id)
```

这样输出的`id`就不是原始的数据了

因为这个数字超出了JS的安全整数范围，所以不能正常表示了，那么**json-bigint**就可以很好的帮助解决这个问题

 **json-bigint** Github 仓库地址：https://github.com/sidorares/json-bigint

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
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
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





##  数组方法

###.. 展开运算符

`...` 展开数组（ES6）

比如，在之前，我们想要合并两个数组，可以通过 `for of` 遍历进行操作：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
for (const value of arr2) {
    arr1.push(value)
}
console.log(arr1)
// (5) ["js", "css", "java", "python", "c"]
```

那么通过 **ES6** 的数组展开语法，上述操作就变的非常简单了：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
const newArr = [...arr1, ...arr2]
console.log(newArr)
// (5) ["js", "css", "java", "python", "c"]
```



展开语法在函数中的使用，比如下方计算加和：

当一个函数需要接收到多个，并且不固定数量的参数时，之前接收的方法可能是这样的：

```js
function fun (a, b, c, d) {
    return a + b + c + d
}
console.log(fun(1, 2, 3, 4))
// 10
```

那么有了展开语法，就会显然解决了参数不固定的问题

```js
function fun (...num) {
    let a = 0
    for (let i = 0; i < num.length; i++) {
        a += num[i]
    }
    return a
}
console.log(fun(1, 2, 3, 4))
// 10
```

展开运算符不仅仅适用于数组，对象有可以使用：

```js
const obj1 = { left: 100, top: 200 }
const obj2 = { width: 200, height: 200 }

const obj3 = {
    ...obj1,
    ...obj2
};

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```



###ush()

`push()` 向数组的末尾添加元素

向数组末尾添加元素是方法有很多，比如使用  arr[] 来添加

```js
const arr = ['css', 'html', 'js']
arr[3] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

或者比上述方法更好的还有使用 `.length` 方法进行添加：

```js
const arr = ['css', 'html', 'js']
arr[arr.length] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

但是使用数组的 `push()` 会更简单清晰：

```js
const arr = ['css', 'html', 'js']
arr.push('vue')
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

`push()` 也可以同时添加多个值

```js
const arr = ['css', 'html', 'js']
arr.push('vue', 'java')
console.log(arr)
// (5) ["css", "html", "js", "vue", "java"]
```



###oin()

`join` 把数组转换为字符串数组 || 配置数组中每一项直接的连接符

```js
// 把数组转换为字符串数组
let arr = [1, 2, 3, 4, 5]
console.log(arr.join())
// 1,2,3,4,5

// 配置数组中每一项直接的连接符
let arr = [1, 2, 3, 4, 5]
console.log(arr.join('--'))
// 1--2--3--4--5
```



###rray.from()

`Array.from()` 将字符串转换为数组

```js
const str = '这是一段文字'
console.log(Array.from(str))
// (6) ["这", "是", "一", "段", "文", "字"]
```

> 注意：使用 `Array.from()` 转换前，必须要确保这个值是有长度的，例如：

```js
const str = '这是一段文字'
console.log(str.length) // 6
```

字符串是可以使用 `.length` 方法得到长度度的，但是如果要是使用 `Array.from()` 转换对象的话是转换不出来的

```js
// 因为对象不能使用 .leghtn 方法得到长度
const obj = {
    name: '小明',
    age: 12,
}
console.log(obj.length) // undefined
console.log(Array.from(obj)) // []
```

但是如果给对象加入了 `length` ，名字再变成数值之后就可以实现了：

```js
const obj = {
    0: '小明',
    1: 12,
    length: 2
}
console.log(obj.length) // 2
console.log(Array.from(obj)) // ["小明", 12]
```

**注：对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较**




###op()

`pop()`  删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```



###nshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 注：支持多个添加



###hift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```



###lice()

`slice()` 数组截取

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2, 4)
console.log(arr2)
// (2) ["js", "java"]
```

`slice()` 可以传入两个参数，根据索引进行截取，分别是：

> 第一个参数是：从第几个开始截取（包括开始元素索引元素）
>
> 第二个参数是：截取到第几个元素（不包括结束元素索引元素）

如果传递了一个参数：那就代表从指定位数截取到结尾（不包括开始元素）

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2)
console.log(arr2)
// (3) ["js", "java", "html5"]
```

如果不传参数，就截取整个数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice()
console.log(arr2)
// (5) ["css", "html", "js", "java", "html5"]
```

> 注：`slice()` 方法不会改变原数组，而是会创建一个新的数组



###plice()

`splice()` 数组 截取 || 添加数据 || 移除 || 替换

同样都是数组截取，`slice()`  和  `splice()`  还是有区别的

`splice()` 不仅仅有截取的方法，还可以添加、移除、替换 等操作，下面分别来说说：

- 截取：

`splice()`  也是通过索引进行截取，里面包含两个参数：

> 第一个参数是：从第几个开始截取（包括当前索引元素）
>
> 第二个参数是：截取几个元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.splice(0, 3)
console.log(arr2)
// (3) ["css", "html", "js"]

// 截取完之后会改变原数组，原数组剩下未截取的部分
console.log(arr)
// (2) ["java", "html5"]
```

- 添加：

上述例子中，通过传递两个参数，截取了制定的元素，可以继续通过添加参数的方法来往**原数组中**添加元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.splice(0, 3, 'javascript', 'node')

// 截取出来的数组
console.log(arr2) // (3) ["css", "html", "js"]

// 原数组 - 截取的元素 + 添加的新元素
console.log(arr) // (4) ["javascript", "node", "java", "html5"]
```

- 移除

比如这里想把 `js` 移除，那么通过传递两个参数

> 第一个参数：移除元素的索引：2
>
> 第二个参数：移除的数量：1

所以就是：

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2, 1)
console.log(arr)
// (4) ["css", "html", "java", "html5"]
```

- 替换

和移除类似，比如：

把 `js` 移除了之后，想要替换成 `javascript` 那么仅需要在后面加上一个参数即可：

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2, 1, 'javascript')
console.log(arr)
// (5) ["css", "html", "javascript", "java", "html5"]
```



###ncludes()

`includes()` 方法，查找数组中是否包含某元素

> 该方法返回布尔类型

```js
const arr = [1, 3, '7', 5]

console.log(arr.includes(1))
// 数组中包含 1 所以返回 true

console.log(arr.includes(99))
// 数组中不包含 99 所以返回 false
```

那么 `includes()` 方法的实现原理是什么呢？详见下面实例

```js
const arr = [1, 3, 6, 5]

// array 是要查找的数组
// value 是要查找的元素
function includes(array, value) {
    // 通过 for of 遍历数组中的每一项
    // 如果有和 value 值一样的，就返回 true 否则返回 false
    for (const val of array) {
        if (val === value) {
            return true
        }
    }
    return false
}

console.log(includes(arr, 6))
```

还有些要注意：

`includes()` 方法只能查找基本类型的元素，对于引用类型是查找不到的，例如：

```js
const arr = [
    { a: 'css' },
    { b: 'js' },
    { c: 'html' }
]

console.log(arr.includes({ b: 'js' }))
// 虽然查找的是 { b: 'js' } 看似的一样，但是内存地址的不一样的，所以返回 fasle
```

上述方法和下面实例是一样的：

```js
const a = []
const b = []
console.log(a === b)

const c = {}
const d = {}
console.log(c === d)
// 引用类型看似是一样，但是内存地址不一样，所以全部返回 fasle

const e = []
const f = e
console.log(f === e)
// 这样把e 赋值给了 f 那么就全等了，返回 true
```





##  数组进阶

###ilter()

`filter` 方法，用于对数组进行**过滤**，查找满足条件的所有元素 **返回数组**

该方法中可以有三个参数，分别是：**每一项元素、索引、原数组**

```js
const arr = ['12', '13', '14', '15']
arr.filter((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
})
// 12
// 0
// (4)["12", "13", "14", "15"] 
// 13
// 1
// (4)["12", "13", "14", "15"]
// 14
// 2
// (4)["12", "13", "14", "15"]
// 15
// 3
// (4)["12", "13", "14", "15"]
```

它可以遍历出数组中的每一项，返回**布尔值**

如果返回真，那么数组中是元素就全部返回，否则就返回空数组

```js
// 为真 全部返回
const arr1 = ['12', '13', '14', '15', '16', '17', '18']
const res = arr1.filter(item => {
    return true
})
console.log(res)
// (7) ["12", "13", "14", "15", "16", "17", "18"]

// 为假 返回空数组
const arr1 = ['12', '13', '14', '15', '16', '17', '18']
const res = arr1.filter(item => {
    return false
})
console.log(res)
// []
```

- 实例，返回数组中大于15的元素，组成新的数组

```js
const arr = ['12', '13', '14', '15', '16', '17', '18']
const res = arr.filter(item => {
    return item > 15
})
console.log(res)
// (3) ["16", "17", "18"]
```

> 所以这个函数对于取到一部分的值，进行过滤处理，是非常友好的。

那么过滤函数是怎么实现的呢？下面是自己封装的一个过滤函数，用于深入了解过滤函数实现原理：

```js
const hd = [1, 2, 3, 4]
// array 原数组
// except 过滤掉的元素
function filter(array, except) {
    const newArray = []
    for (const value of array) {
        // 判断如果传递来的数组中没有循环数组中的元素，那么就将其放在新数组中
        if (except.includes(value) === false) {
            newArray.push(value)
        }
    }
    return newArray
}

// 这里想把 2,3 过滤掉掉
console.log(filter(hd, [2, 3]))
// (2) [1, 4]
```



###ap()

`map()`方法用于映射数组

可以在不改变原数组的情况下，复制出来一个新的数组

```js
const arr = ['js', 'jquery', 'css']

const res = arr.map((item) => {
    return item = item + '123'
})

console.log(res) // (3) (3) ["js123", "jquery123", "css123"]
console.log(arr) // (3) ['js', 'jquery', 'css']
```

> 类似克隆出来一个数组，不会影响原数组



###reduce()

`reduce` 方法，后续更新。。。。





###ind()

`find`方法，可以查找出数组中的每一项

```js
const arr = [1, 3, 6, 5]

arr.find(function (item) {
    console.log(item)
})
// 1 3 6 5
```

查找满足条件的第一个单个元素 **返回布尔值**，找到符合条件的元素，然后返回该元素，没有符合条件的，则返回 undefined

```js
const arr = [12, 13, 14, 15, 16, 17, 128]
function changeArr () {
    return arr.find(n => {
        return n > 14
    })
}
console.log(changeArr())
// 15
```



- filter 和 find 结合实例

有一个数组 arr1 和 arr2 现在想要得到arr1 -  arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
    {name: '小明', id: 1},
    {name: '小张', id: 2},
    {name: '小例', id: 3},
    {name: '小李', id: 4},
    {name: '小赵', id: 5},
    {name: '小萌', id: 6}
]

const arr2 = [
    {name: '小例', id: 3},
    {name: '小萌', id: 6}
]

function changeArr () {
    return arr1.filter(item1 => {
        return !arr2.find(item2 => {
            return item1.id === item2.id
        })
    })
}
console.log(changeArr())

// 结果为：
// [
//   {name: "小明", id: 1},
//   {name: "小张", id: 2},
//   {name: "小李", id: 4},
//   {name: "小赵", id: 5}
// ]
```



###very()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

```js
const user = [
    { name: '小明1', fen: 78 },
    { name: '小明2', fen: 92 },
    { name: '小明3', fen: 37 },
    { name: '小明4', fen: 56 }
]

const res = user.every(function (item) {
    return false // 根据条件返回 true 或 false
})
console.log(res) // false
```

可以使用这个方法，来调查分数及格的情况：

```js
const user = [
    { name: '小明1', fen: 78 },
    { name: '小明2', fen: 92 },
    { name: '小明3', fen: 37 },
    { name: '小明4', fen: 56 }
]

const res = user.every(function (item) {
    item.fen >= 60
})

console.log(res ? '全部及格' : '有些没有及格')
```



###ome()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

```js
const user = [
    { name: '小明1', fen: 78 },
    { name: '小明2', fen: 92 },
    { name: '小明3', fen: 37 },
    { name: '小明4', fen: 56 }
]

const res = user.some(function (item) {
    console.log(item)
    return false
})
// {name: "小明1", fen: 78}
// {name: "小明2", fen: 92}
// {name: "小明3", fen: 37}
// {name: "小明4", fen: 56}
```

如果第一项判断为真了，就不继续向下判断了，直接返回第一项：

```js
const user = [
    { name: '小明1', fen: 78 },
    { name: '小明2', fen: 92 },
    { name: '小明3', fen: 37 },
    { name: '小明4', fen: 56 }
]

const res = user.some(function (item) {
    console.log(item)
    return true
})
// {name: "小明1", fen: 78}
```



##  Sat 和 Map 数据结构

###at()

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值

创建一个 `Sat` 数据结构也很简单：

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



###ap()

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



##  indexOf () 方法

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





##  数组去重

方法很多，下面分别来说说：

1. 使用 `new Set()` 方法（最简单）

```js
const arr = [1, 3, 5, 6, 2, 5, 2, 1, 3, 4]
console.log([...new Set(arr)])
// (6) [1, 3, 5, 6, 2, 4]
```

使用 `new Set()` 把数组传进去之后去重，再从 `[]` 中展开



2. 使用 `indexOf()` 判断

```js
const arr = [1, 3, 5, 6, 2, 5, 2, 1, 3, 4]
const res = []

for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
        res.push(arr[i])
    }
}
console.log(res)
// (6) [1, 3, 5, 6, 2, 4]
```

这个方法是通过 `indexOf()` 方法，来判断如果新数组中没有重复的项，就返回固定值 `-1` 来进行数组去重





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

具体参加文档：https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29

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



##  Symbol 数据类型

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



##  原生 JS 的一些方法

###hildren 获取子级元素

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



###arentNode 获取父级元素

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



###extElementSibling 获取一个元素的下一个元素

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



###etAttribute() 获取一个元素的属性值

```js
<img src="./src/兔玩壁纸 (1).jpg" alt="">

<script>
    const img = document.querySelector('img')
    const res = img.getAttribute('src')
    console.log(res)
	// ./src/兔玩壁纸 (1).jpg
</script>
```

> 该方法仅可有一个参数



###etAttribute() 更改一个元素的属性值

```js
<img src="./src/兔玩壁纸 (1).jpg" alt="">

<script>
    const img = document.querySelector('img')
    img.setAttribute('src', './src/兔玩壁纸 (2).jpg')
</script>
```

> 该方法仅可有两个参数，第一个是要改变的属性，第二个是改变后的值



###oLocaleDateString() 将 Date对象的时间转换为字符串

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

更多详细信息参考MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty



##  JavaScript 原型链

