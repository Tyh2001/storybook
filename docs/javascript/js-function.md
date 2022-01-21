# 函数

## 回调函数

回调函数是：在一个函数中，又调用了一个函数，叫回调函数

例如：

```html
<button id="btn">按钮</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    console.log('这是回调函数')
  })
</script>
```

比如这个点击事件，通过函数 `addEventListener` 定义点击事件，参数是传入的另一个函数，那么这样的函数就称之为回调函数。

还有就是数组常用的 `map` 方法等等：

```js
const res2 = list.map((item) => {
  item.age += 30
  return item
})
```

当出现类似下面这样的业务时候，一个回调函数里面又套了回调函数，请求时就是等这段代码结果产生之后再执行，那么这样回调套回调就会很麻烦了，不利于阅读，开发维护都麻烦

回调地狱就是下面的情况

```js
axios({
  method: '',
  url: '',
}).then((res) => {
  axios({
    method: '',
    url: '',
  }).then((res) => {
    axios({
      method: '',
      url: '',
    }).then((res) => {})
  })
})
```

## 递归函数

直接或间接调用自己函数本身

> 注：一定要有一个终止这个函数的处理，否则将出现死循环

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  fun1(n)
}
```

## 立即执行函数

声明函数时，直接调用

```js
;(function () {
  console.log('我是立即执行函数！')
})()
```

那么立即执行函数用在哪里呢？

下面是有 5 个 li 标签，我们要实现的效果是：点击哪个就弹出哪个 li 的索引值

这是曾经使用立即执行函数的写法：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  var li = document.querySelectorAll('li')

  for (var i = 0; i < li.length; i++) {
    li[i].onclick = (function (x) {
      return function () {
        alert(x)
      }
    })(i)
  }
</script>
```

因为但是还没有作用域的问题，当有了`es6`之后，一切就变得简单多了：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  const btn = document.querySelector('button')
  for (let i = 0; i < 5; i++) {
    btn.onclick = function () {
      console.log(i)
    }
  }
</script>
```

> 直接换成 let 声明，就可以直接解决问题，也就直接可以省略了立即执行函数了

看过 jQuery 源码的人应该知道，jQuery 开篇用的就是立即执行函数。立即执行函数常用于第三方库，好处在于隔离作用域，任何一个第三方库都会存在大量的变量和函数，为了避免变量污染（命名冲突），开发者们想到的解决办法就是使用立即执行函数

1. 什么是立即执行函数

在了解立即执行函数之前先明确一下函数声明、函数表达式及匿名函数的形式，如下代码

```js
// 函数声明
function fun1 () {
  console.log('hello')
}

// 函数表达式
const fun2 = function () {
  console.log('hello')
}

// 匿名函数
function () {
  console.log('hello')
}
```

接下来看立即执行函数的两种常见形式：( function(){…} )()和( function (){…} () )，一个是一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号，另一个是一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中，这两种写法是等价的。要想立即执行函数能做到立即执行，要注意两点，一是函数体后面要有小括号()，二是函数体必须是函数表达式而不能是函数声明。如下代码：

```js
// 输出 123 使用 () 运算符
;(function (text) {
  console.log(text)
})(123)

// 输出 123 使用 () 运算符
// (function (text) {
//   console.log(text)
// }(123))

// 输出 123 使用 ! 运算符
!(function (text) {
  console.log(text)
})(123) +
  // 输出 123 使用 + 运算符
  (function (text) {
    console.log(text)
  })(123) -
  // 输出 123 使用 - 运算符
  (function (text) {
    console.log(text)
  })(123)

// 输出 123 使用 = 运算符
const fun = (function (text) {
  console.log(text)
})(123)
```

上面可见，除了使用 `()` 运算符之外，`！，+，-，=`等运算符都能起到立即执行的作用。这些运算符的作用就是将匿名函数或函数声明转换为函数表达式

2. 使用立即执行函数的好处

通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，如 jQuery 代码结构：

```js
;(function (window, undefined) {
  // code
})(window)
```

其中 window 即是全局对象。给其传入参数这样的好处是，可以缩短查询时的作用域链。作用域隔离非常重要，是一个 JS 框架必须支持的功能，jQuery 被应用在成千上万的 JavaScript 程序中，必须确保 jQuery 创建的变量不能和导入他的程序所使用的变量发生冲突。

**闭包和立即执行函数**

先看个例子

```js
const car = {
  age: 0,
  change() {
    this.age = 40
  },
  getAge() {
    return this.age
  },
}
car.change()
console.log(car.getAge()) // 40
```

这个对象有其成员变量`age`及成员函数`change`和`getAge`，但是它的成员变量没有私有化，同时它也没有办法被继承。要实现对象的继承，你可以使用构造函数和原型继承。但怎么才能将成员变量私有化来实现对象的封装呢（而且有时候我们也不想那么麻烦使用原型）？这里呢，或许我们就可以使用闭包函数

```js
function car() {
  let age = 0
  return {
    // 返回的是一个对象
    change() {
      age = 40
    },
    getAge() {
      return age
    },
  }
}

const car1 = car()
car1.change()
console.log(car1.getAge()) // 40
```

## 闭包函数

> 闭包定义

闭包就是能够读取其他函数内部变量的函数

例如：

```js
function fun1() {
  const num = 1
  function fun2() {
    return 10 + num
  }
  return fun2()
}
console.log(fun1())
```

闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作用域

> 闭包的特性

- 函数内再嵌套函数
- 内部函数可以引⽤外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

> 垃圾回收机制是什么？

由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会**分配内存来存储那个实体**

- 使用分配到的内存做点什么
- 不需要时将其释放回归

在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是**垃圾回收机制所存在的意义**

在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情

> 说说你对闭包的理解

- 使⽤闭包主要是为了设计私有的⽅法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产⽣作⽤域的概念

- 闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保持在内存中

- 闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法
- 好处：能够实现封装和缓存等
- 坏处：就是消耗内存、不正当使⽤会造成内存溢出的问题

> 使用闭包需要的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露

- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

## 异步函数

通常情况下，代码的执行顺序都是从上到下执行的，比如

```js
console.log(1)
console.log(2)
console.log(3)
```

> 输出顺序为 1 2 3

那么最常见的异步函数就是定时器，比如上面这段代码加了定时器之后：

```js
console.log(1)

setTimeout(() => {
  console.log(2)
}, 1000)

console.log(3)
```

> 输出顺序则变成 1 3 2

这也就是所谓的异步函数，就是不等一段代码执行完，也继续往下执行，等这段代码结果产生之后再执行

无论原生的 XMLHttpRequest 、还是 jQuery 的 ajax 还是 axios 都是一个道理，都是异步的

```js
$.ajax({
  method: '',
  url: '',
  success(data) {
    // data 是响应结果
  },
})

// 我们不能项写同步代码一样来写异步代码
const data = 请求('请求路径')

// 异步函数往往都伴随着一个回调函数来接收结果
axios({
  method: '',
  url: '',
}).then((res) => {
  console.log(res)
})
```

> 回调函数的意思就是：回头再调用函数，并不是立即调用的
>
> 请求时就是等这段代码结果产生之后再执行
>
> 定时器就是等时间到了再执行

## Async 函数

> 推荐使用

async 函数可以极大的简化我们的异步代码，前提是你的异步操作支持 Promise

我们项目中大多数的异步操作都是使用 axios 发送请求，而 axios 支持 Promise。所以我们可以使用 async 函数来优化它。

> 注意：不仅仅是 axios，任何异步操作如果提供了 Promise 的支持，都可以结合 async 函数来使用。非常方便

例如：

```js
axios({
  method: 'XXX',
  url: 'XXX',
}).then((res) => {
  console.log(res)
})

// async 只能用于函数
// 那么使用了 async 函数 就可以使用下面想写法 等同于上面的
async function main() {
  const res = await axios({
    method: 'XXX',
    url: 'XXX',
  })

  console.log(res)
}
```

> async 的意思是：异步
>
> await 的意思是：等待

这样 通过`async`+`await` 我们就可以像写同步代码一样来写异步代码了，就不需要再套回调函数了

比如我们模拟一下获取数据

```html
<button onclick="getData()">获取数据</button>
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js"></script>
<script>
  async function getData() {
    const res = await axios({
      method: 'GET',
      url: 'https://ku.qingnian8.com/school/list.php',
    })
    console.log(res)
  }
</script>
```

- 只要是函数 就可以被标记为 async，不论函数是什么形式的。下面列举一些标注形式

```js
async function hello() {}

const hello = async function () {}

const hello = async () => {}

const user = {
  async hello() {},
  hello: async function () {},
  hello: async () => {},
}
```

> 只要标记了 async 就可以在里面使用 await 了
>
> 使用 **await** 的关键字必须把所属的函数标记为 **async**

- async 函数的返回值

先看普通函数

```js
function fun1() {
  return 123
}
console.log(fun1())

// 直接输出返回值 123
```

那么换成 async 函数之后：

```js
async function fun1() {
  return 123
}

console.log(fun1())
```

输出结果则是一个 Promise 对象

```shell
Promise {<fulfilled>: 123}
	__proto__: Promise
	[[PromiseState]]: "fulfilled"
	[[PromiseResult]]: 123
```

也就是说：

async 函数最终的返回值都会返回一个 Promise 对象

如果返回值不是一个 Promise 对象，则将返回值包装到 Promise 中

如果返回值就是一个 Promise 对象，则不作任何处理

加了 async 的函数，实际变成了这样：

```js
// async 函数会把不是 Promise 对象的返回值包装到 Promise 对象中返回
function fun1() {
  return new Promise((resolve) => {
    resolve(123)
  })
}

console.log(fun1())
```

如果加了 async 的函数，还想输出返回的结果，那么就要使用`.then()`方法

```js
function fun1() {
  return new Promise((resolve) => {
    resolve(123)
  })
}

fun1().then((res) => {
  console.log(res)
})
```

- async 函数处理异常状态

执行异步代码中有异常代码，则可以通过`.catch(err => {})`来处理异常状态

```js
// 例1：
async function fun1() {
  JSON.parse('dsdadsdas')
  return 123
}

fun1()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log('发生错误了', err)
  })

// 例2：
async function fun1() {
  JSON.parse('dsdadsdas')
  return 123
}

async function fun2() {
  // 这里的代码已经异常了
  const data = await fun1().catch((err) => {
    console.log('异常了', err)
  })
  // 但是这里的代码依然还是会执行
  console.log(data)
}

fun2()
```

但是使用`.catch(err => {})` 来处理异常，异常之后的代码依然会执行，所以解决这个问题，可以使用 try + catch

但是更推荐的是使用`try` `catch`来捕获异常，就可以很好的处理上面发生的问题

```js
async function fun1() {
  JSON.parse('dsdadsdas')
  return 123
}

async function fun2() {
  try {
    const data = await fun1()
    console.log(data)
  } catch (err) {
    console.log('异常了', err)
  }
}

fun2()
```

这样，一旦在`try`中尝试执行代码中出错，或者出现异常状态，立刻就会停止`try`中的执行，进入`catch`中处理异常状态

## 普通函数和箭头函数

- 外形不同

> 箭头函数使用箭头定义，普通函数中没有

```js
// 普通函数
function fun1() {
  // code
}
// 箭头函数
let fun2 = () => {
  // code
}
```

- 箭头函数都是匿名函数

> 普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数

```js
// 具名函数
function fun1() {
  // code
}

// 匿名函数
let fun2 = function () {
  // code
}

// 箭头函数全都是匿名函数
let fun3 = () => {
  // code
}
```

- 箭头函数中的 this 指向不同

> 箭头函数的 this 永远指向其上下文的 this
>
> 普通函数的 this 指向调用它的那个对象

## arguments 参数

比如在做求和运算时，往往参数的数量是不确定的。那么 arguments 就可以解决这个问题

```js
function add() {
  console.log(arguments)
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// Arguments(9) [1, 54, 1, 5, 2, 654, 3, 42, 24, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

那么求和运算为：

```js
function add() {
  let res = 0
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i]
  }
  return res
}
console.log(add(1, 54, 1, 5, 2, 654, 3, 42, 24))

// 786
```

> 需要注意的是：arguments 并不是一个数组，如需要使用数组方法进行操作时，需要使用 ES6 展开运算符进行操作：

```js
function add() {
  console.log([...arguments])
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// (9) [1, 54, 1, 5, 2, 654, 3, 42, 24]
```

> 在箭头函数中，不能使用 arguments 关键字访问参数，只能通过命名的参数访问

**callee 属性**

arguments 内部还有一个 callee 属性，是一个指向 arguments 对象所在函数的指针，可以用在递归函数中：

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  arguments.callee(n)
}
```

> 这样就意味着，函数不管叫什么名称，都可以通过 `arguments.callee()` 来调用当前函数

这个属性引用的是调用当前函数的函数，如果函数是在全局作用域下调用的，则返回 `null`

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(fun2.caller)
}
fun1() // ƒ fun1() { fun2() }

function fun3() {
  console.log(fun3.caller)
}

fun3() // null
```

也可以通过 `arguments.callee.caller` 获取相同的结果

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(arguments.callee.caller)
}
fun1() // ƒ fun1() { fun2() }
```

注：该方法在严格模式下不会工作！

## 数据收集

同样是在函数传递的参数不确定的情况下，上面介绍过了 函数的 `arguments ` 方法，下面再介绍一种收集数据的方法，使用的是 ES6 的扩展运算符写法：

```js
function fun(...item) {
  console.log(item)
}
fun(1, 2, 3, 4, 5, 6, 7)

// (7) [1, 2, 3, 4, 5, 6, 7]
```

> 参数使用 `...item` 来接收，会收集到所有的参数，表现形式为数组

## this 指向

全局输出和在函数中输出 this

```js
// 1、直接输出 this 指向的是全局对象
console.log(this) // window

// 2、在函数中输入 this
// 因为全局函数其实是 window (全局对象)的方法
function fun() {
  console.log(this) // window
}
// fun() 调用就等于 window.fun()
fun()

// 3、在方法中 this 指向的是这个方法的对象
const obj = {
  name: '小明',
  sayName() {
    console.log(this.name)
  },
}
obj.sayName() // 小明
```

事件输出 this

```html
<button>按钮</button>
<script>
  const btn = document.querySelector('button')
  btn.onclick = function () {
    console.log(this) // <button>按钮</button>
  }

  btn.onclick = () => {
    console.log(this) // window
  }

  btn.addEventListener('click', function () {
    console.log(this) // <button>按钮</button>
  })
</script>
```

构造函数中的 this

```js
// new 关键字做了什么？
// new 会创建出对象，将构造函数中的 this 指向创建出来的对象
function Fun() {
  this.name = '小明'
}

const res = new Fun()
console.log(res) // Fun {name: "小明"}
```

箭头函数和计时器中的 this

```js
const obj = {
  name: '小明',
  sayName() {
    console.log(this)
  },
}
obj.sayName() // {name: "小明", sayName: ƒ}
// 上面通过在对象中调用一个方法，输入 this 那么这个 this 打印的就是该对象

const obj2 = {
  name: '小明',
  sayName() {
    setTimeout(function () {
      console.log(this)
    })
  },
}
obj2.sayName() // window
// 如果是通过计时器输出的就是 window，计时器指向 window
// 因为计时器是一个全局的函数 然后里面的函数就是 window 调用的，所以输出 window

// 那么使用箭头函数就可以直接打印出这个对象本身了
const obj3 = {
  name: '小明',
  sayName() {
    setTimeout(() => {
      console.log(this)
    })
  },
}
obj3.sayName() // {name: "小明", sayName: ƒ}
```

1、普通函数，谁调用就指向谁，箭头函数在哪里定义就指向谁。

2、箭头函数外指向谁就指向谁。

3、箭头函数没有 this

this 指向分为很多种不同的情况，下面分别来说一下：

> 对象中的函数

在对象中的函数，this 指向的是当前的这个对象

```js
const obj = {
  name: '小明',
  change() {
    console.log(obj.name) // 小明
  },
}
obj.change()
```

上面例子，在对象中打印出 name 的值，可以通过 `obj.name` 来打印，但是有时候对象的名称可能是会变的，那么就可以通过 `this.name` 来获得 name 值，也可以实现同样的效果

```js
const obj = {
  name: '小明',
  change() {
    console.log(this.name) // 小明
  },
}
obj.change()
```

其实我们可以直接在对象中打印出 this ，就可以很直观的看到了，this 就是这个对象：

```js
const obj = {
  name: '小明',
  change() {
    console.log(this)
    // {name: "小明", change: ƒ}
  },
}
obj.change()
```

**还有一点要注意：**

因为当前的函数是对象中的一个属性，要是如果在对象的方法中（这里称之为对象中的函数为方法）再定义一个函数的话，我们会看到一个奇怪的现象：

```js
const obj = {
  name: '小明',
  change() {
    function fun1() {
      console.log(this) // window
    }
    fun1()
  },
}
obj.change()
```

如果在对象的方法中，再定义一个普通的函数，那么这个函数中的 this 指向的是 window

那么怎么可以在对象方法中的函数也指向的当前对象呢？

```js
const obj = {
  name: '小明',
  change() {
    // 在当前方法中 this 指向的是当前对象
    // 所以这里可以将 this 赋值为一个常量 给下面函数提供使用
    const this_ = this
    function fun1() {
      // 这里打印上方存储的 this 即可打印出当前对象
      console.log(this_)
    }
    fun1()
  },
}
obj.change()
```

那么有关上述方法，请见实例，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    const this_ = this
    return this.lists.map((item) => {
      return `${this_.title}-${item}`
    })
  },
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

除了上面方法，也可以将 this 作为参数传入函数中，同样可以正常运行：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      return `${this.title}-${item}`
    }, this)
  },
}
console.log(obj.change())
```

**注：将 this 作为参数传入方法，有些函数支持，有些不支持！**

> window 对象

当我们在直接打印 this 的时候，打印出来的其实是一个 js 中最大的对象 `window对象`

```js
console.log(this) // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// 其实直接打印 this 和直接打印 window 是一样的，可以通过比较来得出结论：
console.log(this === window) // true
```

所以得出结论，在定义的对象中，this 指向的是当前对象，要是在全局打印 this 就指向 window 对象。

我们定义的所有的全局变量，都会存储在 window 对象中，比如我们用 var 来定义一个变量：

```js
var aName = '张三'
console.log(window.aName)
// 张三
```

可以正常输出

其实我们可以打印出 window 来看一下，里面就有刚刚定义的 `aName`:

```shell
Window {window: Window, self: Window, document: document, name: "张三", location: Location, …}
aName: "张三"
```

> 箭头函数中的 this

那么还是上面的实例，那么如果使用箭头函数的话，this 指向的就是父级作用域下的 this，就和父级中的 this 是统一回事儿了：

所以上面的例子中，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性，使用箭头函数的写法就变成了：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      console.log(this)
      // {title: "学习", lists: Array(3), change: ƒ}
      return `${this.title}-${item}`
    })
  },
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

**总结就是：在箭头函数中的 this 指向的就是上下文，可以理解为就是父级作用域下的 this ，而普通函数指向的就是 window**

那么箭头函数在有些地方，也会发生一些细微的变化，比如在事件中：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', function () {
        console.log(this)
        // 这里的 this 指的是 <button id="btn">按钮</button> 这个标签
      })
    },
  }
  obj.change()
</script>
```

上面通过点击事件输出的 this 指向的是获取到的 buttom 标签，那么使用箭头函数：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', () => {
        console.log(this)
        // {title: "这是标题", change: ƒ}
      })
    },
  }
  obj.change()
</script>
```

使用箭头函数打印的就是当前的对象

- 那么现在有这样的一个问题

上述的方法，我想通过点击事件，既想要获得对象的 `title` 值，又想要获得按钮的文本值。那么这样有很矛盾了，因为使用普通函数的 this 指向的是按钮，使用箭头函数指向的是当前对象，一个 this 不能分为两个角色，那么这个问题怎么解决呢？请参考下面代码：

```html
<!-- 
  先说一下思路：
  使用普通函数中可以传递一个叫 event 的参
  那么 event.target 可以获取到按钮标签
  箭头函数的 this 指向的是当前的对象
  那么就可以使用这两个机制来完成我们的效果
 -->
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', (event) => {
        console.log(this) // {title: "这是标题", change: ƒ}
        console.log(event.target) // <button id="btn">按钮</button>
        console.log(this.title + event.target.innerHTML)
      })
    },
  }
  obj.change()
</script>
```

也可以使用先获取到 this 的方法：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      const this_ = this
      btn.addEventListener('click', function () {
        console.log(this_.title + this.innerHTML)
      })
    },
  }
  obj.change()
</script>
```

总结一句话就是：**箭头函数中的 this 是指向的父级的 this 如果父级的 this 指向的是某个对象，那么箭头函数中的 this 就指向该对象，如果父级的 this 指向的 window 那么箭头函数指定的是也是 window**

## new.target

ES6 新增了检测函数是否使用 new 调用的 `new.target` 属性，如果函数是正常调用的，new.target 返回 undefined，如果使用 new 来调用的，则 new.target 将引用被调用的构造函数

```js
function fun1() {
  if (!new.target) {
    console.log('没有使用 new 调用')
    return
  }
  console.log('使用 new 调用')
}

fun1() // 没有使用 new 调用
new fun1() // 使用 new 调用
```

## 柯里化函数

柯里化（currying）

把多个参数的函数转换为接收单一参数的函数，并且返回值接收剩余参数并且返回结果的函数

例如：

```js
function fun2(x) {
  return function (y) {
    return x + y
  }
}
// 调用的方法和其他函数有所不同
console.log(fun2(10)(5))
```

> 柯里化函数好处：减少重复传递不变的部分参数

## call、apply、bind

**call**

`call` 是一个函数的方法，它可以调用函数

```js
function fun() {
  console.log('123')
}
fun.call() // 123
```

call 可以改变函数中 `this` 的指向

```js
// 这个是一个独立的函数 输出 this，很明显这个 this 指向的是 window
function fun() {
  console.log(this.name)
}

// 这里是一个独立的对象
const obj = {
  name: '小明',
}

// 那么就可以通过调用函数 再使用 call 把 obj 这个对象传递过去
// 就可以改变函数中 this 的指向
// 那么就打印出了小明
fun.call(obj) // 小明
```

```js
// 这里通过调用 dog 的方法，来输出 cat 的名字
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
}

const cat = {
  name: '喵喵',
}

dog.sayName.call(cat)
```

`call` 的传参方法

```js
const dog = {
  name: '旺财',
  eat(food1, food2) {
    console.log(`我喜欢吃${food1}和${food2}`)
  },
}

const cat = {
  name: '喵喵',
}

// call 的第一个参数是传递指向的对象 后面的参数传递的是函数接收的参数
dog.eat.call(cat, '鱼', '骨头') // 我是喵喵喜欢吃鱼和骨头
```

**apply**

直接哪来上面的例子

`call` 传递的参数的依次往后传递的，而 `apple` 参数的需要传递一个数组

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  },
}

const cat = {
  name: '喵喵',
}

dog.eat.apply(cat, ['鱼', '骨头']) // 我是喵喵喜欢吃鱼和骨头
```

**bind**

`call` 和 `apply` 会直接调用函数

`bind` 的传值方式和 `call` 是一样的，但是 `bind` 会将一个函数作为返回值返回出来

`bind` 的特点呢也就是可以多次调用了，剩下的和 `call` 用法完全一样

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  },
}

const cat = {
  name: '喵喵',
}

const res = dog.eat.bind(cat, '鱼', '骨头')
res()
```

## 原型和原型链

对象和函数都是有原型的

**对象**

```js
const user = {}
console.dir(user)
```

打印结果，其中 `[[Prototype]]` 就是对象的原型

```shell
Object
  [[Prototype]]: Object
```

想要获取到对象的原型可以使用 `__porto__` 来获取到

```js
const user = {}
console.dir(user.__proto__)
```

打印结果：

```shell
Object
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  __proto__: null
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
```

**函数**

```js
function User() {} // 创建构造函数
console.dir(User)
```

打印结果，

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

函数是有两个原型的，一个 `prototype` 一个 `[[Prototype]]`，函数自带的方法，如 apply、bind 等方法都存在于 `[[Prototype]]` 上面

想要获取到函数的原型可以使用 `__porto__` 和 `prototype` 来获取到

```js
function User() {}
console.dir(User.__proto__)
console.dir(User.prototype)
```

`__proto__` 打印结果 ：

```shell
ƒ anonymous()
  apply: ƒ apply()
  arguments: (...)
  bind: ƒ bind()
  call: ƒ call()
  caller: (...)
  constructor: ƒ Function()
  length: 0
  name: ""
  toString: ƒ toString()
  Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
  get arguments: ƒ ()
  set arguments: ƒ ()
  get caller: ƒ ()
  set caller: ƒ ()
  [[FunctionLocation]]: ​
  [[Prototype]]: Object
  [[Scopes]]: Scopes[0]
```

`prototype` 打印结果：

```shell
Object
  constructor: ƒ User()
  [[Prototype]]: Object
```

> 注意：由于浏览器更新原因，在浏览器中打印的是 `Prototype` 和 `[[Prototype]]`。想要获取 `Prototype` 可以直接使用 `xxx.prototype` 获取，但是获取 `[[Prototype]]` 并不能使用 `xxx.[[Prototype]]` 获取，而是使用 `xxx.__proto__` 获取，在新版的 Chrome、Firefox、Edge 等浏览器中均可适用。
> 虽然 `__proto__` 可以正常获取到原型，但是规范建议使用 `Object.getPrototypeOf()` 方法获取为优

### 原型共享

比如下面例子中，首先创建一个构造函数 `User`，让在 `User` 的原型(prototype)上添加一个 `say` 方法，那么在构造函数创建的对象上同样可以使用

```js
function User() {}

User.prototype.say = function () {
  console.log('这是 say 方法')
}

const obj = new User()

obj.say() // 这是 say 方法
```

那么这是为什么呢？

下面分别来打印出 `User` 的 `prototype` 和 `obj` 的 `[[prototype]]`

```js
console.dir(User.prototype)
console.dir(obj.__proto__)
```

**User**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

**obj**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

看上去是一样的，可以测试一下是否真的一样：

```js
console.log(User.prototype === obj.__proto__) // true
console.log(User.prototype === Object.getPrototypeOf(obj)) // true
```

使用两种方式来判断，结果都为 `true`

由此得出结论：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**

详情见下图

<img src="/javascript/prototype_1.jpg" alt="image"  />

### 顶级原型

上面知道了：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**，那么构造函数上面的原型是什么呢？

下面例子中，先早 `Object` 上定义了一个 `say` 方法，之后又创建了一个构造函数 `User`，接下来打印 `User`

接下来依次打开 `User/prototype/[[Prototype]]`

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
    constructor: ƒ User()
    [[Prototype]]: Object
      say: ƒ ()
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: (...)
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__()
  [[FunctionLocation]]: 1.html:21
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

打开后发现，构造函数 `prototype` 的原型中的原型 `[[prototype]]` 中存在由 `Object` 上定义的 `say` 方法

那么就进行检测一下：

```js
console.log(User.prototype.__proto__ === Object.prototype) // true
console.log(Object.getPrototypeOf(User.prototype) === Object.prototype) // true
```

结果是：**构造函数上的 prototype 中 `[[prototype]]` 的原型和对象的 prototype 原型是共享的一个原型**

所以 `Object` 就是原型链的顶级原型了

详情见下图

<img src="/javascript/prototype_2.jpg" alt="image"  />

所以：

```js
const arr = []
console.log(Object.getPrototypeOf(arr) === Array.prototype) // true

const str = ''
console.log(Object.getPrototypeOf(str) === String.prototype) // true

const bool = true
console.log(Object.getPrototypeOf(bool) === Boolean.prototype) // true

const num = 123
console.log(Object.getPrototypeOf(num) === Number.prototype) // true

const reg = /123/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype) // true
```

### 设置原型

比如下面有两个对象：我想把 `obj1` 原型的父级改为 `obj2`，那么就可以使用 `Object.setPrototypeOf()` 方法进行改变，接收两个参数，一个是需要改变的对象，和指定父级的对象

```js
const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }
Object.setPrototypeOf(obj1, obj2)
```

打印结果：

```shell
Object
  name: "obj1"
  [[Prototype]]: Object
    name: "obj2"
    [[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: Object
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
```

那么这时候 `obj1` 的父级就是 `obj2` 了

### constructor 属性

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    constructor: ƒ User()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

我们可以发现，构造函数的 `prototype` 原型中，不但有一个 `[[Prototype]]`，而且还有一个 `constructor` 属性，那么 `constructor` 其实指向的就是当前的构造函数，**因为原型就是一个对象，只要是对象就会有原型**，也就是说：不仅可以通过的 `prototype` 找到构造函数的原型，我也可以通过这个原型找到构造函数

那么也就是说：**构造函数原型的 constructor 属性指向的是当前构造函数**

```js
function User() {}

console.log(User.prototype.constructor === User) // true
```

那么就同样可以使用 `constructor` 再来创建一个构造函数

```js
function User(name) {
  this.name = name
}

const z = new User('张三')
const l = new User.prototype.constructor('李四')

console.log(z) // User {name: '张三'}
console.log(l) // User {name: '李四'}
```

### 原型添加多个方法

如果想在原型上添加多个属性和方法，可以使用下面方式：

```js
function User() {}

User.prototype.name = '张同学'
User.prototype.age = 38
User.prototype.sayName = function () {
  console.log(this.name)
}
```

但是这样的代码不免有些冗余，所以可以使用对象的方式进行添加

```js
function User() {}

User.prototype = {
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  },
}

console.dir(User)
```

> 但是这样加完之后打开原型会发现一个问题，就是 `constructor` 不见了，所以如果在使用 `new User.prototype.constructor()` 就会报错了

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    age: 38
    name: "张同学"
    sayName: ƒ sayName()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:25
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

所以我们希望的是，就是改变的原型，也可以通过原型上的 `constructor` 找到当前的构造函数，所以在使用对象往原型上添加属性的时候，一定要记得将 `constructor: User` 添加上去，接下来的 `new User.prototype.constructor()` 才可以正常工作

```js
function User(name) {
  this.name = name
}

User.prototype = {
  constructor: User,
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  },
}

const l = new User.prototype.constructor('李四')
l.sayName() // 李四
Object.getPrototypeOf(l).sayName() // 张同学
```

所以新的原型链结构图如下：

<img src="/javascript/prototype_3.jpg" alt="image"  />

## 继承

### 了解继承

继承是原型的继承，而不是改变构造函数

例如下面代码是错误的

```js
function User() {}

User.prototype.name = function () {
  console.log('name')
}

function Admin() {}

Admin.prototype = User.prototype
// 这样直接赋值原型之后
// 相当于 Admin 和 User 共用的是一个原型

const admin = new Admin()
admin.name()
```

举个例子：上面的反例中，直接将 `User` 的原型赋值给 `Admin` 之后，虽然是实现了伪继承，但是这样继承了之后自己本来的原型就不存在了，两个构造函数用的就是同一个原型了，这样就会造成函数覆盖等情况，我们期望的是自己的原型还是保留的，再继承。好比现实中继承财产，继承是将继承的财产和自己本来的财产加在一起，而不是只是得到了继承的财产，而自己的财产就消失了。

### 盗用构造函数继承

在子类构造函数中调用父类构造函数。因为毕竟函数就是在指定上下文中执行的代码最简单的对象，所以可以使用 `call` 或者 `apply` 方法以新创建的对象为上下文执行构造函数

```js
function User() {
  this.arr = [1, 2, 3, 4]
}

function Admin() {
  User.call(this) // 继承 User
}

const admin = new Admin()
admin.arr.push(5)

const admin2 = new Admin()

console.log(admin.arr) // (5) [1, 2, 3, 4, 5]
console.log(admin2.arr) // (4) [1, 2, 3, 4]
```

**传递参数**

相比使用原型链，盗用构造函数的优点就是：可以在子类构造函数中向父类构造函数传递参数

```js
function User(name) {
  this.name = name
}

function Admin(age) {
  User.call(this, '张三')
  this.age = age
}

const admin = new Admin(18)
console.dir(admin)
```

打印结果

```shell
Admin
  age: 18
  name: "张三"
  [[Prototype]]: Object
```

```
盗用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用，此外，子类也不能访问父类原型上定义的方法，因此所有类型都只能通过使用构造函数模式。由于存在这些问题，盗用构造函数也不会单独使用。
```

### 组合继承

组合继承也叫伪经典继承，综合了原型链和[盗用构造](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%9B%97%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%A7%E6%89%BF)函数，将两者有点结合了起来。基本的思路就是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样可以把方法定义在原型上以实现重用，又可以让实例有自己的属性。

```js
function User(name) {
  this.name = name
  this.arr = [1, 2, 3]
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 继承实例属性
  User.call(this, name)
  this.age = age
}

Admin.prototype = new User() // 继承原型属性
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin1 = new Admin('张三', 12)
admin1.arr.push('张三')
console.log(admin1.arr) // (4) [1, 2, 3, '张三']
admin1.sayName() // 张三
admin1.sayAge() // 12

const admin2 = new Admin('李四', 22)
admin2.arr.push('李四')
console.log(admin2.arr) // (4) [1, 2, 3, '李四']
admin2.sayName() // 李四
admin2.sayAge() // 22
```

### 原型式继承

先给出一个函数

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

这个 `object` 函数会创建出一个临时的构造函数，将传入的对象赋值给构造函数的原型，然后返回这个临时的一个实例。本质上，`object` 是对传入的对象进行了一次浅复制，见下面例子

```js
const z = {
  name: '张三',
  friend: ['a', 'b'],
}

const user1 = object(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = object(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

这种原型式继承适用于以下情况：你有一个对象，想在它的基础上再创建一个对象，你需要先将这个对象传递给 `object` 函数，然后再对返回的对象进行修改。上面例子中也就意味这，`z.friend` 不仅仅是 `z` 的属性，也会和 `user1` 和 `user2` 共享。这里实际上是克隆的两个 `z`。

但是后来出现了 [Object.create()](https://tianyuhao.cn/blog/javascript/js-methods.html#object-create) 方法，将 `原型式继承` 的概念规范化了。

```js
const z = {
  name: '张三',
  friend: ['a', 'b'],
}

const user1 = Object.create(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = Object.create(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

### 寄生式继承

与原型式继承比较相似的一种继承叫 `寄生式继承`，`寄生式继承` 背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象，基本寄生模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(param) {
  const clone = object(param)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

const z = {
  name: '张三',
  arr: [1, 3, 4],
}

const res = createAnother(z)
res.sayHi() // hi
```

### 寄生式组合继承

[组合继承](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF) 其实也存在效率问题，最主要的问题就是父类构造函数被调用了两次，一次是在创建子原型时调用，另一次是在子类构造函数中调用，例如下面：

```js
function User(name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 调用 User，将 User 内部属性移到 Admin 内部
  User.call(this, name) // 第二次调用 User
  this.age = age
}

Admin.prototype = new User() // 第一次调用 User

// 继承之后会丢失 constructor 属性，所以将 constructor 设置会 Admin
Admin.prototype.constructor = Admin
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 20)

console.dir(Object.getPrototypeOf(admin).constructor === Admin) // true

console.dir(admin)
```

打印结果

```shell
Admin
  age: 20
  color: (3) ['red', 'blue', 'black']
  name: "张三"
  [[Prototype]]: User
    color: (3) ['red', 'blue', 'black']
    constructor: ƒ Admin(name, age)
    name: undefined
    sayAge: ƒ ()
    [[Prototype]]: Object
```

上面代码在执行 `User.call(this, name)` 的时候，会在 `Admin.prototype` 上新增两个属性 `name` 和 `color`。它们都是 `User` 实例，现在成为了 `Admin` 的原型属性。当调用 `Admin` 构造函数的时候，也会调用 `User` 构造函数，这一次在新对象上创建实例属性 `name` 和 `color`，但是这两属性会遮蔽原型的属性。

### 使用父类构造函数初始属性

这种方式可以在父类构造函数的原型中添加公共的属性，以免单独在每个构造函数中重复声明

```js
function User(name, age) {
  this.name = name
  this.age = age
}

function Admin(...params) {
  User.apply(this, params)
}

Admin.prototype = User.prototype.__proto__
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false,
})

const admin = new Admin('张三', 18)
console.log(admin)

const admin2 = new admin.__proto__.constructor('李四', 2)
console.log(admin2)
```

**封装继承函数继承**

```js
// 继承函数
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype)
  Object.defineProperty(sub.prototype, 'constructor', {
    value: sub,
    enumerable: false,
  })
}

function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(...params) {
  User.apply(this, params)
}

function Teacher(...params) {
  User.apply(this, params)
}

extend(Admin, User) // 调用函数继承
const admin = new Admin('张三', 18)
admin.sayName()

extend(Teacher, User) // 调用函数继承
const teacher = new Teacher('老师', 28)
teacher.sayName()
```

### 对象工厂继承

使用对象工厂也就是使用 `Object.create()` 来继承，这里推荐两种方式

**方式一**

```js
function User() {}
User.prototype.userName = function () {
  console.log('userName')
}

function Admin() {}
Admin.prototype.adminName = function () {
  console.log('adminName')
}

Admin.prototype.__proto__ = Object.create(User.prototype)
Admin.prototype.constructor = Admin

const admin = new Admin()

admin.userName() // userName
admin.adminName() // adminName
```

**方式二**

```js
function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name, this.age)
}

// 创建继承函数
function inherit(name, age) {
  const instance = Object.create(User.prototype) // 新建一个对象继承 User 的原型
  User.call(instance, name, age) // 将 instance 内部调用 User
  return instance // 返回继承好的对象
}

const admin = inherit('admin', 28)
const admin2 = inherit('admin2', 281)

console.log(admin2.__proto__ === admin.__proto__) // true
```

## 类

### 创建类

通过 `constructor` 属性接受传递的参数进行赋值

```js
class User {
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {name: '张同学'}
```

也可以直接在类中赋值，也可以添加对象的属性

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {age: 38, name: '张同学'}
```

可以通过在类中定义方法来改变某些数据，或者通过函数获取数据

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
  changeName(newName) {
    this.name = newName
  }
  sayName() {
    return this.name
  }
}

const user = new User('张同学')
user.changeName('田同学')
console.log(user.sayName())
```

### 静态属性

先来看一下构造函数的静态属性

```js
function User(url) {
  this.url = url
}

const user = new User('https://123.com')
// 给构造函数创建静态属性，会保留在原型中
User.newUrl = 'https://baidu.com'

console.dir(user)
```

打印结果

```shell
User
  url: "https://123.com"
  [[Prototype]]: Object
    constructor: ƒ User(url)
      newUrl: "https://baidu.com"
      arguments: null
      caller: null
      length: 1
      name: "User"
      prototype: {constructor: ƒ}
      [[FunctionLocation]]: 2.html:14
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
    [[Prototype]]: Object
```

那么在类中定义静态属性仅需要关键字 `static` 就可以实现了

```js
class User {
  static url = 'https://www.baidu.com'
  api() {
    return `${User.url}/sayName`
  }
}

const user = new User()
console.log(user.api()) // https://www.baidu.com/sayName
```

如果一个属性是为所有对象共用的，不是为某一个对象来使用的，这时候就可以将其定义为静态属性，这样也会节省内存的占用，仅仅只会保存一份，定义到类里面

### 静态方法

引入函数也是对象，所以构造函数可以通过下面放方式定义静态方法

```js
function User() {}

User.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
```

上面定义静态方法之后，就必须使用函数调用 `sayName` 方法，就不能使用 `new` 出来的对象进行调用了。

当然也可以定义到原型上

```js
function User() {}

User.__proto__.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
console.dir(User)
```

那么里面的 `this` 指向的也是当前的对象

```js
function User() {}

User.__proto__.sayName = function () {
  console.log(this === User) // true
  console.log(this === User.prototype.constructor) // true
}

User.sayName('张三')
```

接下来是在类中定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

console.dir(User)
```

上面代码中，看似在类中定义了两个函数名一样的函数，可是这两个函数却是没有任何关系的，因为第一个在类中定义的函数，只要在 `new` 出来的对象中才可以使用，而后者是类的静态方法。

上述打印结果：

```shell
class User
  length: 0
  name: "User"
  prototype:
    constructor: class User
    sayName: ƒ sayName()
    [[Prototype]]: Object
  arguments: (...)
  caller: (...)
  [[FunctionLocation]]: 1.html:13
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

打印的 `sayName` 实际上是函数的静态方法，下面分别打印一下

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

User.sayName() // 我在原型上

const user = new User()
user.sayName() // 你好
```

了解上述关系之后，那么就可以直接使用类的语法糖的形式进行定义了，需要通过关键字 `static` 来定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
  static sayName() {
    console.log('hello')
  }
}

User.sayName() // hello
new User().sayName() // 你好
```

下面是通过调用静态方法创建出构造函数的例子

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static create(...args) {
    // 这里是 this 指向的就是当前对象
    // 所以可以 new this 创建构造函数
    return new this(...args)
  }
}

// 通过调用静态方法创建出构造函数
const user = User.create('张三', 19)
console.log(user)
```

### 访问器

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

访问器的作用是限制用户对对象中的值进行随意的更改，简单的方式是通过函数来修改属性值

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
```

但是通过函数的方法修改也会有一个问题，就是像下面修改的方式进行修改属性，还是可以进行随意修改的

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
user.name = 123
console.log(user)
// User {name: 123}
```

所以为了代码的健壮而又优雅一下，可以使用访问器来对其有效限制

访问器通过关键字 `set` 和 `get` 来针对修改和获取来进行限制处理，例如下面

```js
class User {
  constructor() {
    this._name = '李四'
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this._name = name
  }
}

const user = new User()
user.name = '张三'
```

或者定义定义一个对象来存储数据

```js
class User {
  constructor(age) {
    this.data = {
      age,
    }
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.data.name = name
  }
  // 访问器返回用户所有的信息
  get name() {
    return `${this.data.name}今年${this.data.age}岁`
  }
}

const user = new User(18)
user.name = '张三'
console.log(user.name)
```

### 属性的保护

正常的构造函数创建出来的对象都不是进行属性保护的，在外部都可以随意的进行修改，这些属性被称之为 `非保护属性`，例如下面

```js
class User {
  constructor(age) {
    this.age = age
  }
}

const user = new User(18)
user.age = 12313
console.log(user)
// User {age: 12313}
```

**通过命名保护**

```js
class User {
  _url = 'www.baidu.com'
  constructor(name) {
    this.name = name
  }
  set url(url) {
    if (typeof url !== 'string') {
      throw new Error('参数错误')
    }
    this._url = url
  }
}

const user = new User('张三')
user.url = 123
```

但是上述方式在外部依然可以通过使用 `user._url` 进行修改，所以我们接下来将进行更严格的保护，在外部是修改不了的

### 私有属性

通过在属性名前面加入 `#` 来设定私有属性

```js
class User {
  // 定义私有属性
  #url = 'www.baidu.com'
}

const user = new User()
console.log(user)
```

### 私有方法

同样，使用 `#` 可以定义私有方法

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
}

const user = new User()
user.#sayName()
```

这样调用私有属性的话会爆出错误

```shell
Uncaught SyntaxError: Private field '#sayName' must be declared in an enclosing class

必须在封闭类中声明私有字段 #sayName
```

私有属性必须是在类的内部调用才可以，例如下面，通过定义一个非私有的函数，让它去调用私有函数是可以正常工作的

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
  changeSayName() {
    this.#sayName()
  }
}

const user = new User()
user.changeSayName() // 你好
```

### 类继承

现回顾一下之前的构造函数的继承

```js
function User(name) {
  this.name = name
}
function Admin(name) {
  User.call(this, name)
}

Admin.prototype = Object.create(User.prototype)
const admin = new Admin('张三')
console.dir(admin)
```

打印结果为

```shell
Admin {name: '张三'}
  name: "张三"
    [[Prototype]]: User
      [[Prototype]]: Object
      constructor: ƒ User(name)
      [[Prototype]]: Object
```

类的继承使用 `extend` 关键字进行继承

```js
class User {}
class Admin extends User {}
console.dir(new Admin())
```

打印结果

```shell
Admin
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

那么在类中调用父类的构造函数传递参数的写法就需要使用 `super` 关键字进行调用父类的构造函数，完整写法为

```js
class User {
  constructor(name) {
    this.name = name
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
  }
}

console.dir(new Admin('张三'))
```

打印结果

```shell
Admin
  name: "张三"
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

> 注意，在类中继承必须在父类中使用 `super()` 调用子类，否则会提示警告报错

```js
class User {
  say() {
    console.log('hello')
  }
}

class Admin extends User {
  constructor(name) {
    super() // 这里必须要调用！！！
    this.name = name
  }
}

const admin = new Admin('张三')
admin.say() // hello
```

> 类和原型继承的原理是完全一样的，所以 class 类的性质，只不过是将之前的构造函数形式转换成了一个简写的形式。

### super()

super 可以访问父级类

```js
class User {
  show() {
    console.log('user.show')
  }
}

class Admin extends User {
  show() {
    super.show()
    console.log('Admin.show')
  }
}

// super 可以访问父级类
const admin = new Admin()
admin.show()

// user.show
// Admin.show
```

下面简单的来写一个 `super()` 的实现原理

首先，使用两个对象来模拟继承的实现

```js
const obj1 = {
  name: '张三',
  sayName() {
    console.log('我是张三')
  },
}

const obj2 = {
  __proto__: obj1, // 让 obj2 的原型是 obj1 实现继承
  name: '李四',
  sayName() {
    console.log('我是李四')
  },
}

console.dir(obj2)
```

如果父级想使用原型上继承的方法，那么就可以使用 `this.__proto__.xxxx` 来调用，如下

```js
const obj1 = {
  name: '张三',
  sayName() {
    // 当父级调用 sayName 的时候，这里的 this 指向的是当前对象 所以 name 就是 张三
    console.log(this.name)
  },
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    // 这里调用 say 方法，我希望使用原型上 obj1 的方法
    this.__proto__.sayName()
  },
}

obj2.say()
```

但是上面的问题就是：在 say 中调用原型方法，但是返回的却是原型对象上的属性，这显然是不对的，所以还需要进一步使用 `call` 关键字来进行更改 `this` 指向，并将当前对象传递过去

```js
const obj1 = {
  name: '张三',
  sayName() {},
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    this.__proto__.sayName.call(this)
  },
}

obj2.say()
```

所以这也就大概实现了 `super()` 的原理实现

视频教程地址：[super 原理分析](https://www.bilibili.com/video/BV1NJ411W7wh?p=246)

> 在父类的构造函数中必须调用 super()，并且 this 必须在 super 之后使用
