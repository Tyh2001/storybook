# 对象方法

## Object.defineProperty()

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象
它接收了三个参数：

- 要给其添加属性的对象
- 属性的名称
- 描述对象

```js
const user = {
  name: '张同学',
  age: 38
}

Object.defineProperty(user, 'friend', {
  configurable: true, // 是否可以通过 delete 删除
  enumerable: true, // 是否可以循环
  writable: true, // 是否可以修改
  value: [1, 2, 3, 4] // 添加的值
})

console.log(user) // {name: '张同学', age: 38, friend: Array(4)}
```

## Object.defineProperties()

`Object.defineProperties()` 方法和 `Object.defineProperty()` 方法有点类似，`Object.defineProperty()` 只是可以在对象上定义一个属性，而 `Object.defineProperties()` 则可以定义多个

```js
const obj = {}

Object.defineProperties(obj, {
  name: {
    value: '张同学',
    configurable: true
  },
  age: {
    value: 12
  }
})

console.log(obj) // {name: '张同学', age: 12}
```

## Object.assign()

`Object.assign()` 可以将对象进行合并，它接收一个目标对象和一个或多个源对象作为参数进行合并

```js
const obj1 = { a: 1 }
const obj2 = { b: 2 }

Object.assign(obj1, obj2, { c: 12121 })

console.log(obj1) // {a: 1, b: 2, c: 12121}
```

如果源对象上有很多相同的属性，那么后面的属性会覆盖前面的属性

```js
const obj1 = { a: 1 }
Object.assign(obj1, { a: 12, b: 99 }, { b: 21 })

console.log(obj1) // {a: 12, b: 21}
```

## Object.is()

`Object.is()` 和 `===` 有点相似

```js
console.log(true === 1) // false
console.log({} === {}) // false
```

但是有些情况下就会出乎我们的意料

```js
console.log(+0 === -0) // true
console.log(+0 === 0) // true
console.log(-0 === 0) // true
```

为了改善这种情况，ES6 新增了 `Object.is()`，可以接收两个参数

```js
console.log(Object.is({}, {})) // false
console.log(Object.is(+0, -0)) // false
console.log(Object.is([], [])) // false
console.log(Object.is('1', 1)) // false
```

## Object.getPrototypeOf()

用于获取对象的原型，这是标准的方法，`__proto__` 本来就是浏览器实现的，所以不是规范的写法，虽然 `__proto__` 和 `Object.getPrototypeOf()` 方法都可以正常工作，不过建议使用 `Object.getPrototypeOf()`

```js
const obj = {}

console.log(obj.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Object.getPrototypeOf(obj)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

> 不过现在主流的浏览器都已经更新了，对象中不再存在 `__proto__` 属性，而是改为了 `[[Prototype]]`

## Object.setPrototypeOf()

`Object.setPrototypeOf()` 方法用于重新设置对象的原型

```js
function User() {}

const user = new User()

const newProto = {
  satName() {
    console.log('你好')
  }
}

Object.setPrototypeOf(user, newProto)
console.dir(Object.getPrototypeOf(user))
```

> Object.setPrototypeOf() 可能会影响代码的性能

## Object.create()

`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，接收一个参数是需要继承的原型，如果不想要原型，那么可以传入 `null` 就是一个纯数据对象

```js
// 纯数据对象
console.log(Object.create(null))
```

```js
const obj = {
  name: '张三',
  arr: [1, 2, 3, 4]
}

const newObj = Object.create(obj)

console.log(newObj.__proto__ === obj) // true
```

因为上述使用 `Object.setPrototypeOf()` 方法改变对象的原型，可能会导致性能下降，所以可以通过 `Object.create()` 来创建一个新对象，同时指定原型

它接收一个参数：新创建对象的原型对象

```js
const newProto = {
  sayName() {
    console.log('你好')
  }
}

const user = Object.create(newProto)
user.name = '张同学'
console.dir(user)
console.log(Object.getPrototypeOf(user) === newProto) // true
```

打印结果

```shell
Object
  name: "张同学"
  [[Prototype]]: Object
    satName: ƒ satName()
    [[Prototype]]: Object
```

`Object.create` 的第二个参数和 [Object.defineProperties](https://tianyuhao.cn/blog/javascript/js-methods.html#object-defineproperties)一样，每个属性都有各自的描述符来描述据。以这种方式添加的属性会遮蔽原型对象上本书的属性

```js
const z = {
  name: '张三'
}

const res = Object.create(z, {
  name: {
    value: '张同学'
  }
})

console.log(z.name) // 张同学
```

```
原型式继承非常适合不需要单独创建构造函数，但是仍然需要在对象之间共享信息的场合。但是属性中包含的引用值始终会在香港对象间共享，跟使用原型模式是一样的。
```

也可以配置对象的内部属性

```js
const obj = { a: '1' }

const o = Object.create(obj, {
  b: {
    value: '2',
    enumerable: true,
    writable: false,
    configurable: false
  },
  c: {
    value: '3',
    enumerable: true,
    writable: false,
    configurable: false
  }
})
console.log(o) // {b: '2', c: '3'}
```

## Object.keys()

`Object.keys()` 可以获取对象上所有可以枚举的属性，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.keys(user)) // ['name', 'name2']
console.log(Object.keys(User.prototype)) // ['age']
```

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames()` 可以获取对象上所有属性，无论是否可以枚举，都可以获取到，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor', 'age']
```

```
在适当的时候，Object.keys() 和 Object.getOwnPropertyNames() 方法可以适当代替 for in 循环操作
```

## Object.getOwnPropertySymbols()

因为 `ES6` 新增了 `Symbol` 数据类型，那么针对于 `Symbol`，普通的循环是遍历不出来的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key in obj) {
  console.log(obj[key])
}
// 没有日志输出
```

所以 `Object.getOwnPropertySymbols()` 方法是针对于处理 `Symbol` 数据类型的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(obj[key])
}

// 张三
// 20
```

## Object.values()

`Object.values()` 方法可以将对象中的键以数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.values(obj))
//  ['张同学', 39]
```

## Object.entries()

`Object.entries` 方法可以将对象中的每个键和值转换为数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.entries(arr))
```

打印结果

```shell
(2) [Array(2), Array(2)]
  0: (2) ['name', '张同学']
  1: (2) ['age', 39]
  length: 2
  [[Prototype]]: Array(0)
```

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()` 方法可以得到对象属性特征的描述，接收两个参数，第一个是对象名，第二个是对象的属性名

```js
const obj = {
  name: '张三',
  age: 21
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
  age: 21
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法可以禁止向对象内添加内容

```js
const obj = {
  name: '张三',
  age: 21
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
  age: 21
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
  age: 21
}

Object.freeze(obj)
// 冻结对象，configurable = false，writable = false

console.log(Object.isFrozen(obj)) // true
```

## Object.hasOwnProperty()

`Object.hasOwnProperty()` 方法用于检测一个属性是否在来自对象的实例，来自实例返回 `true`，来着原型返回 `false`

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(Object.hasOwnProperty.call(user, 'age')) // true
```

简写方式

```js
function User() {
  this.name = '张三'
}

User.prototype.age = 12
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false
```

## Object.isExtensible()

`Object.isExtensible()` 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

```js
const foo = { id: 123 }
console.log(Object.isExtensible(foo)) // true
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性

```js
const foo = { id: 123 }
console.log(Object.preventExtensions(foo)) // { id: 123 }

foo.age = 12
console.log(foo) // { id: 123 }
```

## isPrototypeOf()

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上

```js
function User() {
  this.name = '张三'
}

const user = new User()
console.log(User.prototype.isPrototypeOf(user)) // true
```

## in

`in` 操作符可以用在两个场景，一个是 `for in` 循环中，还有一个是单独使用，可以检测对象上是否存在某个属性，无论在实例上还是原型上

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false

console.log('name' in user) // true
console.log('age' in user) // true
```
