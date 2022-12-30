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
  url: ''
}).then((res) => {
  axios({
    method: '',
    url: ''
  }).then((res) => {
    axios({
      method: '',
      url: ''
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

因为但是还没有作用域的问题，当有了 `es6` 之后，一切就变得简单多了：

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
  }
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
    }
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
  }
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
  }
}
obj.sayName() // {name: "小明", sayName: ƒ}
// 上面通过在对象中调用一个方法，输入 this 那么这个 this 打印的就是该对象

const obj2 = {
  name: '小明',
  sayName() {
    setTimeout(function () {
      console.log(this)
    })
  }
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
  }
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
  }
}
obj.change()
```

上面例子，在对象中打印出 name 的值，可以通过 `obj.name` 来打印，但是有时候对象的名称可能是会变的，那么就可以通过 `this.name` 来获得 name 值，也可以实现同样的效果

```js
const obj = {
  name: '小明',
  change() {
    console.log(this.name) // 小明
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
    }
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
    }
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
    }
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
    }
  }
  obj.change()
</script>
```

总结一句话就是：

> 箭头函数中的 this 是指向的父级的 this 如果父级的 this 指向的是某个对象，那么箭头函数中的 this 就指向该对象，如果父级的 this 指向的 window 那么箭头函数指定的是也是 window

判断 this

1. 函数是否在 `new` 中调用的？如果是的话，那么 `this` 指向的就是新创建的对象。
2. 函数是否使用 `call`、`apply`、`bind` 进行显示绑定的？如果是的话，那么 `this` 指向的就是新创建的对象。
3. 函数是否在整个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的就是那个上下文对象。
4. 如果都不是的话，就是使用默认绑定。在严格模式下，`this` 为 `undefined`，否则指向全局对象 `window`

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
  name: '小明'
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
  }
}

const cat = {
  name: '喵喵'
}

dog.sayName.call(cat)
```

`call` 的传参方法

```js
const dog = {
  name: '旺财',
  eat(food1, food2) {
    console.log(`我喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
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
  }
}

const cat = {
  name: '喵喵'
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
  }
}

const cat = {
  name: '喵喵'
}

const res = dog.eat.bind(cat, '鱼', '骨头')
res()
```

可以直接手写一个 `bind` 函数，来帮我们了解其中的原理

```js
function bind(fn, obj) {
  return function () {
    fn.apply(obj, arguments)
  }
}

function foo() {
  console.log(this.name)
}

const obj = { name: '张三' }

bind(foo, obj)()
```
