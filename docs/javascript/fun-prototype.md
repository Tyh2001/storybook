# 面向对象编程

## 原型和原型链

### 了解原型

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

<!-- <img src="/javascript/prototype_1.jpg" alt="image"  /> -->

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

<!-- <img src="/javascript/prototype_2.jpg" alt="image"  /> -->

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
  }
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
  }
}

const l = new User.prototype.constructor('李四')
l.sayName() // 李四
Object.getPrototypeOf(l).sayName() // 张同学
```

所以新的原型链结构图如下：

<!-- <img src="/javascript/prototype_3.jpg" alt="image"  /> -->

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
  friend: ['a', 'b']
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
  friend: ['a', 'b']
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
  arr: [1, 3, 4]
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

但是通过上面方式继承，就会有两组 `name` 和 `color` 属性，一组是在实例上，另一组在 `User` 的原型上。这就是调用 `User` 的结果。好在有版本解决这个问题。

寄生式组合继承通过盗用构造函数继承属性，但使用混合继承的原型继承方法。基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。基本模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/**
 * @param { object } subclass 子类构造函数
 * @param { object } superclass 父类构造函数
 */
function inheritPrototype(subclass, superclass) {
  const prototype = object(superclass.prototype) // 创建对象
  prototype.constructor = subclass // 增强对象
  subclass.prototype = prototype // 赋值对象
}

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

inheritPrototype(Admin, User)

Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 18)
console.dir(admin)
```

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
  enumerable: false
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
    enumerable: false
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
