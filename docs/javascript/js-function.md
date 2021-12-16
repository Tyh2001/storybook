# 函数相关

## 函数声明提升

具名函数有声明提升的特点（可以先调用再声明）

```js
fun()
function fun() {
  console.log('123')
}

// 123
```

但是将匿名函数赋值给一个变量时，是没有声明提升的特点的，这种函数称为函数表达式

```js
fun()
const fun = function () {
  console.log('123')
}

// Uncaught ReferenceError: Cannot access 'fun' before initialization
// 这时就会报错：未捕获的引用错误：初始化前无法访问“fun”
```

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

### callee 属性

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

## 函数参数

下面实例中，使用数组的过滤方法，想要放回数组中小于等于 3 的元素返回：

```js
const arr = [1, 2, 3, 4, 5, 6, 7].filter(function (item) {
  return item <= 3
})
console.log(arr)

// (3) [1, 2, 3]
```

那么这样的情况下呢，可以不使用匿名函数，可以直接将函数单独抽离出来，直接将函数作为参数传递过来，在 filter 方法中直接调用函数：

```js
function fun(item) {
  return item <= 3
}
const arr = [1, 2, 3, 4, 5, 6, 7].filter(fun)
console.log(arr)

// (3) [1, 2, 3]
```

除此之外，还有定时器方法，都是可以将函数作为参数直接传递进去的：

```js
function fun() {
  console.log(1)
}
setInterval(fun, 1000)

// 每一秒输出一次 1
```

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
  change: function () {
    console.log(obj.name) // 小明
  },
}
obj.change()
```

上面例子，在对象中打印出 name 的值，可以通过 `obj.name` 来打印，但是有时候对象的名称可能是会变的，那么就可以通过 `this.name` 来获得 name 值，也可以实现同样的效果

```js
const obj = {
  name: '小明',
  change: function () {
    console.log(this.name) // 小明
  },
}
obj.change()
```

其实我们可以直接在对象中打印出 this ，就可以很直观的看到了，this 就是这个对象：

```js
const obj = {
  name: '小明',
  change: function () {
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
  change: function () {
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
  change: function () {
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
  change: function () {
    const this_ = this
    return this.lists.map(function (item) {
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
  change: function () {
    return this.lists.map(function (item) {
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
  change: function () {
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
    change: function () {
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
    change: function () {
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
    change: function () {
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
    change: function () {
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

## caller

函数中有一个 `caller` 属性，**这个属性引用的是调用当前函数的函数，如果函数是在全局作用域下调用的，则返回 null**

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

## 构造函数

简单的说构造函数也是函数, 可是却只有与 new 关键字配合才能形成构造函数。

构造函数是用来创建对象使用的：

构造函数的函数名建议首字母大写

```js
function Dog() {}

const dog = new Dog()
console.log(dog)

// Dog {}
```

这就是一个构造函数的基础写法。

```js
function User(name) {
  this.name = name
  this.sayName = function () {
    console.log(this.name)
  }
}

const Z = new User('张同学')

console.log(Z) // User {name: '张同学', sayName: ƒ}
Z.sayName() // 张同学
```

构造函数中的 `this` 指的是当前调用方法的对象

数据类型也都是可以通过构造函数创建的：

```js
const num = new Number(123)
const str = new String('哈哈哈')
const obj = new Object()
```

那么为什么有很多字符串或者其他的方法呢？原因就是因为在构造函数中那个定义了很多的方法才可以提供使用

使用构造函数创建出来的其实是一个对象，但是想获取值的话，可以使用 `valueOf` 方法进行获取

```js
const num = new Number(123)
const str = new String('哈哈哈')
console.log(num.valueOf()) // 123
console.log(str.valueOf()) // 哈哈哈
```

### 原型模式

每个函数都会创建一个 `prototype` 属性，这是一个对象，这个对象就是通过构造函数创建出来的对象的原型，使用原型定义的好处是，在它上面定义的属性和方法可以被对象实例共享：

```js
function User(name, age) {}

User.prototype.name = '张同学'
User.prototype.age = 38
User.prototype.sayName = function () {
  console.log(this.name)
}

const user = new User()

console.log(user.name) // 张同学
```

### 构造函数闭包

上面例子中，新建了一个构造函数 `User` 之后，可以通过构造函数内部的方法来输出 `name` ,但是这个 name 在构造函数外部是可以进行修改的，这样得到的值就不准确了，所以这样要使用闭包的特性进行处理：

```js
function User(name) {
  const data = { name } // 在内部定义数据
  let sayName = function () {
    console.log(data.name)
  }
  // 在对象上的方法调用内部的函数
  this.sayName = function () {
    sayName()
  }
}

const Z = new User('张同学')
Z.name = '小明' // 虽然修改 name 但是不生效
Z.sayName()
```

## 面向对象

面向对象呢，是和构造函数相关的，所以在了解构造函数之后呢，接下来来说一下面向对象

如果一个构造函数的结果只仅仅会输出一个对象，那么这样创建出来的对象是没有意义的，里面也没有内容，所以就可以通过 `this` 来拿到指向的这个对象，来添加一些属性：

```js
// 通过接收两个参数 来给对象添加一个 name 和一个 age 的属性
function Dog(n, a) {
  // 构造函数这里的 this 指向的就是这个对象
  this.name = n
  this.age = a
}

const dog = new Dog('旺财', 2)
console.log(dog)
// Dog {name: "旺财", age: 2}
```

那么这种方式呢，也是一个面向对象的写法了，那么 Dog 就代表了一类的狗，`new` 的时候就是创建出了一个对象，那么就是狗类的实例

##对象
通过原型对象，为构造函数生成新的对象（prototype）：

`prototype` 是构造函数的一个属性，我们可以在这个属性上添加一些函数或者方法，那么这些方法就可以在所有类的实例上进行调用，或者说可以被构造函数所有的实例来使用，例如：

```js
function Dog(n, a) {
  this.name = n
  this.age = a
}

Dog.prototype.sayName = function () {
  console.log(`我的名字是${this.name}`)
}

const dog = new Dog('旺财', 2)
dog.sayName()
// 我的名字是旺财
```

这样就可以通过 `dog.sayName()` 来调用这个方法。

其实不仅仅是函数，其实我们可以给任何的类或者对象，去扩展它的方法。比如：

```js
const arr = new Array(1, 2, 34, 5, 6, 7, 2)

Array.prototype.changeLength = function () {
  console.log(`数组的长度是${this.length}`)
}

arr.changeLength()
// 数组的长度是7
```

这样就可以给所有的数组都添加了一个 `changeLength` 的方法。

## 原型链继承

通过原型链，我们可以实现一个继承，继承就是有父类，有子类，那么子类可以访问父类的属性和方法，例如：

```js
function Dog(name) {
  this.name = name
}

Dog.prototype.changeName = function () {
  console.log(`我的名字是${this.name}`)
}

// Cat 可以调用父级 Dog 的方法
function Cat(name) {
  this.name = name
}

// 直接将 Cat 这个原型对象赋值为 Dog 这个实例
Cat.prototype = new Dog()

const cat = new Cat('小明')

cat.changeName()
// 我的名字是小明
```

上面是使用原型链实现的基础，这是 ES5 的一个写法，暂时了解即可，因为 ES6 有了更好的解决方案

## ES6 类

从 es6 开始，就支持了`类`的概念了，可以通过 **class** 来定义一个类：

```js
class Dog {}

const dog = new Dog()
console.log(dog)
// Dog {}
```

那么在 ES6 中实现和上面相同的效果，写法略有不同：

```js
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const dog = new Dog('旺财', 2)
console.log(dog)
// Dog {name: "旺财", age: 2}
```

那么如果想添加方法就可以直接写在类里面：

```js
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(`我的名字是${this.name}`)
  }
}

const dog = new Dog('旺财', 2)
dog.sayName()
// 我的名字是旺财
```

## ES6 继承

可以通过创建的类，利用 `extends` 关键字实现继承

```js
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(`我的名字是${this.name}`)
  }
}

class Cat extends Dog {}

const cat = new Cat('喵喵', 2)
cat.sayName()
```

那么继承父类之后，要是还需要传递其他参数，可以先使用 `super` 先获取父类的参数

```js
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(`我的名字是${this.name}`)
  }
}

class Cat extends Dog {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const cat = new Cat('喵喵', 2)

console.log(cat.age)
```

## call、apply、bind

三个方法我都没用过，所以就学一个就行了，我就先学一个 call 剩下两个基本上差不多。

**call**

call 是一个函数的方法

1、call 可以调用函数

```js
function fun() {
  console.log('123')
}
fun.call() // 123
```

2、call 可以改变函数中 this 的指向

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

3、call 的传参方法

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

call 传递的参数的依次往后传递的

而 apple 参数的需要传递一个数组

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

call 和 apply 会直接调用函数

bind 的传值方式和 call 是一样的，但是 bind 会将一个函数作为返回值返回出来

bind 的特点呢也就是可以多次调用了，剩下的和 call 用法完全一样

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

## call、apply、bind 的实际应用

继承：子类可以使用父类的方法

```js
function Animal() {
  // this 指向的是 小cat 那么也就成为了 cat 的方法了
  this.eat = function () {
    console.log('吃东西')
  }
}

function Cat() {
  // this 指向的是 小cat
  Animal.call(this)
}

const cat = new Cat()
cat.eat()
```

## 关于异步函数

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
  success: function (data) {
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
- **好处：**能够实现封装和缓存等
- **坏处：**就是消耗内存、不正当使⽤会造成内存溢出的问题

> 使用闭包需要的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露

- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

## 回调函数

回调函数是：在一个函数中，又调用了一个函数，叫回调函数

例如：

```html
<button id="btn">按钮</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener('click', function () {
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

## prototype

prototype 保存引用类型所有的实例和方法

```js
function fun1() {
  return 1
}

console.log(fun1.prototype) // {constructor: ƒ}
```
