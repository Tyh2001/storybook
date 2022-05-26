# 类

## 创建类

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

## 静态属性

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

## 静态方法

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

## 访问器

在正常对象中，对象中的属性我们是可以随意设置和更改的，但是有些时候并不希望某些值被设置了不可控的值，比如：

```js
const user = {
  name: '张同学',
  age: 12
}

user.age = 19999
console.log(user) // {name: '张同学', age: 19999}
```

所以就需要加以限制，需要在对象中新建两个获取函数，分别使用 `set` 和 `get` 声明，那么每次获取和修改都会经过这里，来进行判断

```js
const user = {
  data: {
    name: '张同学',
    age: 12
  },
  set age(val) {
    if (typeof val !== 'number' || val < 1 || val > 100) {
      throw new Error('年龄格式错误')
    }
    this.data.age = val
  },
  get age() {
    return this.data.age
  }
}
```

**批量设置属性**

```js
const user = {
  name: '张同学',
  age: 12,
  set info(val) {
    ;[this.name, this.age] = val.split(',')
  }
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
  }
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
      age
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

## 属性的保护

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

## 私有属性

通过在属性名前面加入 `#` 来设定私有属性

```js
class User {
  // 定义私有属性
  #url = 'www.baidu.com'
}

const user = new User()
console.log(user)
```

## 私有方法

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

## 类继承

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

## super()

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
  }
}

const obj2 = {
  __proto__: obj1, // 让 obj2 的原型是 obj1 实现继承
  name: '李四',
  sayName() {
    console.log('我是李四')
  }
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
  }
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    // 这里调用 say 方法，我希望使用原型上 obj1 的方法
    this.__proto__.sayName()
  }
}

obj2.say()
```

但是上面的问题就是：在 say 中调用原型方法，但是返回的却是原型对象上的属性，这显然是不对的，所以还需要进一步使用 `call` 关键字来进行更改 `this` 指向，并将当前对象传递过去

```js
const obj1 = {
  name: '张三',
  sayName() {}
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    this.__proto__.sayName.call(this)
  }
}

obj2.say()
```

所以这也就大概实现了 `super()` 的原理实现

视频教程地址：[super 原理分析](https://www.bilibili.com/video/BV1NJ411W7wh?p=246)

> 在父类的构造函数中必须调用 super()，并且 this 必须在 super 之后使用
