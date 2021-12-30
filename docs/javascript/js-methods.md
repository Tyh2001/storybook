# 方法

## 对象相关

### Object.defineProperty()

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

### Object.defineProperties()

`Object.defineProperties()` 方法和 `Object.defineProperty()` 方法有点类似，`Object.defineProperty()` 只是可以在对象上定义一个属性，而 `Object.defineProperties()` 则可以定义多个

```js
const obj = {}

Object.defineProperties(obj, {
  name: {
    value: '张同学',
    configurable: true,
  },
  age: {
    value: 12,
  },
})

console.log(obj) // {name: '张同学', age: 12}
```

### Object.assign()

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

### Object.is()

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

### Object.getPrototypeOf()

用于获取对象的原型，这是标准的方法，`__proto__` 本来就是浏览器实现的，所以不是规范的写法，虽然 `__proto__` 和 `Object.getPrototypeOf()` 方法都可以正常工作，不过建议使用 `Object.getPrototypeOf()`

```js
const obj = {}

console.log(obj.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Object.getPrototypeOf(obj)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

> 不过现在主流的浏览器都已经更新了，对象中不再存在 `__proto__` 属性，而是改为了 `[[Prototype]]`

### Object.entries()

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

### Object.getOwnPropertyDescriptor()

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

### Object.getOwnPropertyDescriptors()

上面 `Object.getOwnPropertyDescriptor()` 方法可以获取对象中单个键的属性特征描述，那么想要获取对象中所有属性的描述，需要使用 `Object.getOwnPropertyDescriptors()` 方法，该方法接收一个参数为对象名

```js
const obj = {
  name: '张三',
  age: 21,
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

### Object.preventExtensions()

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

### Object.seal()

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

### Object.freeze()

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

## 数组相关

### ...

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
function fun(a, b, c, d) {
  return a + b + c + d
}
console.log(fun(1, 2, 3, 4))
// 10
```

那么有了展开语法，就会显然解决了参数不固定的问题

```js
function fun(...num) {
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
  ...obj2,
}

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```

### push()

`push()` 向数组的末尾添加元素

向数组末尾添加元素是方法有很多，比如使用 arr[] 来添加

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

### join()

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

### Array.from()

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
  length: 2,
}
console.log(obj.length) // 2
console.log(Array.from(obj)) // ["小明", 12]
```

**注：对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较**

### pop()

`pop()` 删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```

### unshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 注：支持多个添加

### shift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```

### slice()

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

### splice()

`splice()` 数组 截取 || 添加数据 || 移除 || 替换

同样都是数组截取，`slice()` 和 `splice()` 还是有区别的

`splice()` 不仅仅有截取的方法，还可以添加、移除、替换 等操作，下面分别来说说：

- 截取：

`splice()` 也是通过索引进行截取，里面包含两个参数：

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

### includes()

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
const arr = [{ a: 'css' }, { b: 'js' }, { c: 'html' }]

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

## 数组进阶

### filter()

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
const res = arr1.filter((item) => {
  return true
})
console.log(res)
// (7) ["12", "13", "14", "15", "16", "17", "18"]

// 为假 返回空数组
const arr1 = ['12', '13', '14', '15', '16', '17', '18']
const res = arr1.filter((item) => {
  return false
})
console.log(res)
// []
```

- 实例，返回数组中大于 15 的元素，组成新的数组

```js
const arr = ['12', '13', '14', '15', '16', '17', '18']
const res = arr.filter((item) => {
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

### map()

`map()`方法用于映射数组

可以在不改变原数组的情况下，复制出来一个新的数组

```js
const arr = ['js', 'jquery', 'css']

const res = arr.map((item) => {
  return (item = item + '123')
})

console.log(res) // (3) (3) ["js123", "jquery123", "css123"]
console.log(arr) // (3) ['js', 'jquery', 'css']
```

> 类似克隆出来一个数组，不会影响原数组

### find()

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
function changeArr() {
  return arr.find((n) => {
    return n > 14
  })
}
console.log(changeArr())
// 15
```

- filter 和 find 结合实例

有一个数组 arr1 和 arr2 现在想要得到 arr1 - arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
  { name: '小明', id: 1 },
  { name: '小张', id: 2 },
  { name: '小例', id: 3 },
  { name: '小李', id: 4 },
  { name: '小赵', id: 5 },
  { name: '小萌', id: 6 },
]

const arr2 = [
  { name: '小例', id: 3 },
  { name: '小萌', id: 6 },
]

function changeArr() {
  return arr1.filter((item1) => {
    return !arr2.find((item2) => {
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

### every()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
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
  { name: '小明4', fen: 56 },
]

const res = user.every(function (item) {
  item.fen >= 60
})

console.log(res ? '全部及格' : '有些没有及格')
```

### some()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
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
  { name: '小明4', fen: 56 },
]

const res = user.some(function (item) {
  console.log(item)
  return true
})
// {name: "小明1", fen: 78}
```

## 数学对象

### Math.max()

`Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

### Math.min()

`Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

### Math.ceil()

`Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

### Math.floor()

`Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

### Math.random()

`Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0 ~ <1 之间是数

- 要获取一个 1 ~ x 的一个整数随机数，可以通过下面公式直接获取

```js
// 这里想获取一个 1 ~ 10 的随机数
console.log(Math.ceil(Math.random() * 10))
```

公式为：`Math.ceil(Math.random() * 最大值)`

- 要获取一个区间的随机数，可以通过下面公式直接获取

```js
// 这里想取到 2 - 5 直接是随机数
console.log(2 + Math.ceil(Math.random() * (5 - 2)))
```

公式为：`最小值 + Math.ceil(Math.random() * (最大值 - 最小值))`

那么通过上面的随机数方法，我们可以做一个简易的点名系统

```html
<p class="name"></p>
<script>
  const arr = ['小张', '小李', '小明', '小红', '小强', '小周']

  const name = document.querySelector('.name')

  const length = arr.length // 获取数组的长度
  const num = Math.floor(Math.random() * length)
  name.innerHTML = arr[num]
</script>
```

## 日期对象

### new Date()

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```

### Date.now()

`Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

### getTime()

获取指定日期的时间戳 `getTime()`

```js
const time = new Date('2000-10-1 12:23:11') // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的 4 种方法都可以使用

- 将时间戳转换为时间对象

```js
const time = new Date('2000-10-1 12:23:11')
const timeList = time.getTime()
console.log(new Date(timeList))
```

将时间戳转换为时间对象的方法也很简单，只有 `new` 一个新的日期对象，再把时间戳扔到括号里面即可

> new Date(时间戳)

- 获取当前时间的年月日时分秒

```js
const time = new Date() // 获取当前时间
const year = time.getFullYear() // 获取年份
const month = time.getMonth() + 1 // 获取月份
const day = time.getDate() // 获取日
const hour = time.getHours() // 获取小时
const minute = time.getMinutes() // 获取分钟
const res = `${year}-${month}-${day} ${hour}:${minute}`
console.log(res)
```

这么的写法比较麻烦，我们可以通过封装函数的方法，来实现上面代码段的重复利用

```js
// 获取到当前的时间
const time = new Date()

// 封装函数
// date 是当前的时间
// format 处理转换时间的格式
function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getMinutes(),
  }
  // 用 for in 遍历出对象中的每一项 并使用 replace 替换
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(dateFormat(time, 'YYYY年-MM月-DD日'))
// 2021年-4月-3日

console.log(dateFormat(time, 'YYYY^MM^DD HH^mm^ss'))
// 2021^4^3 20^41^41
```

### toLocaleDateString()

`toLocaleDateString()` 方法可将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## DOM 相关

### childNodes

`childNodes` 方法可获取元素中内部的元素
返回的并不是一个数组

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const ul = document.querySelector('ul')
console.log(ul.childNodes) // NodeList(7) [text, li, text, li, text, li, text]
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

### parentNode

`parentNode` 方法可获取父级元素

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

### nodeName

`nodeName` 方法可获取元素的标签名

```html
<ul class="list"></ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.nodeName) // UL
</script>
```

### nodeValue

`nodeValue` 方法可获取元素的节点值

```html
<button>按钮点击</button>
<script>
  console.log(document.querySelector('button').childNodes[0].nodeValue) // 按钮点击
</script>
```

### firstChild

`firstChild` 方法可获取子节点的第一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const c = document.querySelector('ul').childNodes[0]
  const f = document.querySelector('ul').firstChild
  console.log(c === f) // true
</script>
```

> firstChild 就是简化了 childNodes[0] 的写法

### lastChild

`lastChild` 方法可获取子节点的最后一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 1]
  const l = ul.lastChild
  console.log(c === l)
</script>
```

> lastChild 就是简化了 ul.childNodes[ul.childNodes.length - 1] 的写法

### previousSibling

`previousSibling` 方法可获取子节点之前的一个相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 2] // 这里 -2 之后获取的是倒数第二个节点
  const l = ul.lastChild.previousSibling // 获取最后一个的前一个节点
  console.log(c === l) // true
</script>
```

### nextSibling

`nextSibling` 方法可获取子节点下一个的相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[1] // 获取第二个节点
  const l = ul.firstChild.nextSibling // 获取第二个的下一个节点
  console.log(c === l)
</script>
```

如果获取最后一个节点的下一个节点则返回 null
获取第一个节点的上一个节点返回的也是 null

```js
const ul = document.querySelector('ul')
console.log(ul.lastChild.nextSibling)
console.log(ul.firstChild.previousSibling)
```

下面是一个综合上述方法的关系代码，想把 `class="red"` 的标签背景色改为红色

```html
<ul>
  <li>1</li>
  <li>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="red">3红色</li>
      <li>4</li>
    </ol>
  </li>
  <li>3</li>
</ul>

<script>
  document.querySelector(
    'ul'
  ).lastChild.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.lastChild.previousSibling.previousSibling.previousSibling.style.backgroundColor =
    'red'
</script>
```

### hasChildNodes()

`hasChildNodes()` 方法可检测一个节点是否存在子节点，返回 `true` 说明存在一个或多个子结点，`false` 则没有子节点

```html
<ul>
  <li></li>
  <li>哈哈</li>
</ul>
<script>
  console.log(document.querySelector('ul').hasChildNodes()) // true
  console.log(document.querySelector('.a').hasChildNodes()) // false
  console.log(document.querySelector('.b').hasChildNodes()) // true
</script>
```

> 有一个空格也会返回 true

### appendChild()

`appendChild()` 可以在 `childNodes` 列表结尾插入节点

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  document.querySelector('ul').appendChild(LI)
</script>
```

### insertBefore()

`insertBefore()` 可以在 `childNodes` 列表指定位置插入节点

它可接收两个参数，第一个是插入的节点，第二个是插入的位置，如果第二个参数不传，则和 `appendChild()` 效果一致

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.insertBefore(LI, ul.childNodes[2]) // 插入第二个位置
</script>
```

### replaceChild()

因为 `appendChild()` 和 `insertBefore()` 都是插入节点不会替换节点
所以 `replaceChild()` 方法可以替换指定位置的节点
接收两个参数，第一个是插入的节点，第二个是替换的位置

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.replaceChild(LI, ul.childNodes[1]) // 替换第一个节点
</script>
```

### removeChild()

`removeChild()` 方法移除一个节点元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.removeChild(ul.lastChild.previousSibling)
</script>
```

### cloneNode()

`removeChild()` 方法克隆一个节点元素，接收一个布尔值，表示是否深度克隆子元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.appendChild(ul.cloneNode(true)) // 深度克隆

  console.log(ul.cloneNode(true).childNodes.length) // 8
  console.log(ul.cloneNode(false).childNodes.length) // 0
</script>
```

### normalize()

后续更新。。。。

## document 类型

### document.documentElement

获取 `html`

```js
console.log(document.documentElement)
```

### document.body

获取 `body`

```js
console.log(document.body) // body
```

### document.doctype

获取 `<!DOCTYPE html>` 的引用

```js
console.log(document.doctype) // <!DOCTYPE html>
```

### document.title

获取文档标题

```js
console.log(document.title) // Document
```

### document.URL

获取页面完整的 `URL`

```js
console.log(document.URL)
```

### document.domain

获取域名

```js
console.log(document.domain)
```

### document.referrer

获取来源

```js
console.log(document.referrer)
```

### document.getElementById()

获取 `id` 元素

```html
<div id="app"></div>
<script>
  console.log(document.getElementById('app')) // <div id="app"></div>
</script>
```

### document.getElementsByTagName()

获取元素集合，下面获取所有的 `div`

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
  console.log(document.getElementsByTagName('div')) // HTMLCollection(5) [div, div, div, div, div]
</script>
```

> 也可以像数组一样操作它，但它并不是数组

### namedItem()

`namedItem()` 方法返回具有指定 `id` 或 `name` 的元素，只返回一个元素，`id` 优先级大于 `name`

```html
<div name="title"></div>
<div id="title"></div>

<script>
  console.log(document.getElementsByTagName('div').namedItem('title')) // <div id="title"></div>
</script>
```

> namedItem() 方法仅会返回一项

### document.getElementsByName()

获取指定 `name` 的集合

```html
<div name="title"></div>
<div name="title"></div>
<div name="title"></div>
<script>
  console.log(document.getElementsByName('title')) // NodeList(3) [div, div, div]
</script>
```

### document.createElement()

`document.createElement()` 方法可以创建一个元素，接受一个参数为标签名

```js
document.createElement('div') // 创建一个 div
```

### document.createTextNode()

`document.createTextNode()` 方法可以创建一个文本节点

```html
<div id="app"></div>
<script>
  const text = document.createTextNode('这是一段文字')
  document.getElementById('app').appendChild(text)
</script>
```

### getAttribute()

`getAttribute()` 方法可获取一个元素的属性值

```html
<div id="app"></div>
<script>
  console.log(document.getElementById('app').getAttribute('id')) // app
</script>
```

> 该方法仅可有一个参数

### document.createComment()

`document.createComment()` 方法可以创建一个注释
但是在开发中基本不会使用

```js
document.body.appendChild(document.createComment('这是一段注释'))
```

### setAttribute()

`setAttribute()` 方法可设置一个元素的属性值，接收两个参数，第一个是要设置的属性，第二个是设置的属性值

```html
<div id="app"></div>
<script>
  document.getElementById('app').setAttribute('class', 'box')
</script>
```

通过简写的方式也可以进行修改

```html
<div id="app"></div>
<script>
  document.getElementById('app').id = 'box'
</script>
```

> 注意：简写方式仅仅可以修改属性，并不能添加不存在的属性

### removeAttribut e()

`setAttribute()` 方法可删除一个元素的属性值，不是仅仅清楚属性值，而是将属性和属性值全部清除

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').removeAttribute('class')
</script>
```

### attributes

`attributes` 包含一个 `NamedNodeMap` 对象，包含元素的每一个属性

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes)
</script>
```

**返回结果**

```js
NamedNodeMap {
  0: id
  1: class
  class: class
  id: id
  length: 2
  [[Prototype]]: NamedNodeMap
}
```

通过 `attributes` 就可以像下面方式修改属性了

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes.id.nodeValue) // 获取 id

  document.getElementById('app').attributes.class.nodeValue = 'newClass' // 修改 class
</script>
```

> 每个节点中的 nodeValue 记录着对应的属性值

### attributes.removeNamedItem()

`attributes.removeNamedItem()` 方法和 `removeAttribute()` 类似，都是可以删除一个属性值，只不过 `attributes.removeNamedItem()` 是删除属性的 `NamedNodeMap` 对象中的属性

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').attributes.removeNamedItem('class')
</script>
```

> `attributes.removeNamedItem()` 方法和 `removeAttribute()` 实际的效果是一样的，就是换了不同的方式表现而已，大多数都会使用 `removeAttribute()`、`setAttribute()` 和 `getAttribute()`

### childElementCount

`childElementCount` 方法可获取子节点的数量

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').childElementCount) // 2
</script>
```

### firstElementChild

`firstElementChild` 方法可获取一个元素第一个子元素，类似 [firstChild](https://tianyuhao.cn/blog/javascript/js-methods.html#firstchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').firstElementChild) // <p>1</p>
</script>
```

### lastElementChild

`lastElementChild` 方法可获取一个元素第一个子元素，类似 [lastChild](https://tianyuhao.cn/blog/javascript/js-methods.html#lastchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').lastElementChild) // <p>2</p>
</script>
```

### previousElementSibling

`previousElementSibling` 方法指向前一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p2').previousElementSibling)
  // <p class="p1">1</p>
</script>
```

### nextElementSibling

`nextElementSibling` 方法指向后一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p1').nextElementSibling)
  // <p class="p2">2</p>
</script>
```

## MutationObserver 接口

`MutationObserver 接口` 可以在 DOM 被修改时移步执行回调，使用 `MutationObserver` 可以观察整个文档、DOM 树的一部分或者元素。此外还可以观察元素的属性、子节点、文本，或者前三者的组合变化。

### 基本使用

`MutationObserver` 的实例要通过 `MutationObserver` 的构造函数，接收一个回调参数来创建

```js
const mut = new MutationObserver(() => console.log('123'))
console.log(mut)
```

### observe()

新创建的 `MutationObserver` 并不会关联 DOM 的任何部分，想要把 `MutationObserver` 和 DOM 关联起来，需要使用 `observe()` 方法。

这个方法必须接收两个参数，第一个是要观察其变化的 DOM 节点，以及一个 `MutationObserverInit` 对象。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('div 改变了'))

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box') // 改变之后执行 mut 的回调
</script>
```

### 回调函数中的参数

`MutationObserver` 回调可以接收的一个参数，是一个数组，记录了当前那些部分发生了变化

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((MutationRecord) =>
    console.log(MutationRecord)
  )

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box')
  app.setAttribute('data-app', 'add')
</script>
```

**打印结果**

```shell
(2) [MutationRecord, MutationRecord]
  0: MutationRecord
    addedNodes: NodeList []
    attributeName: "class"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  1: MutationRecord
    addedNodes: NodeList []
    attributeName: "data-app"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  length: 2
  [[Prototype]]: Array(0)
```

`MutationObserver` 接收的第二个参数是观察变化的 `MutationObserver` 的实例

```js
const mut = new MutationObserver((MutationRecord, mutationObserver) => {
  console.log(mut === mutationObserver) // true
})
```

### disconnect()

默认情况下，只有元素不被垃圾回收，`MutationObserver` 的回调函数就会响应 DOM 变化事件，从而执行。使用 `disconnect()` 可以提前终止回调函数，也会抛弃已经加入任务队列的项目

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box')
  mut.disconnect()
  app.setAttribute('data-app', 'add')
  // 没有日志输出
</script>
```

如果想让已经加入任务队列的项目执行完再调用可以使用 `setTimeout()` 来解决

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box') // 改变了
  setTimeout(() => {
    mut.disconnect()
    app.setAttribute('data-app', 'add') // 没有日志输出
  }, 0)
</script>
```

### 重用 MutationObserver

调用 `disconnect()` 的时候并不会结束 `MutationObserver` 的生命。还是可以重用这个观察者的，只需要将他在关联到目标节点即可。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributes: true })

  setTimeout(() => {
    mut.disconnect() // 断开连接
    app.setAttribute('class', 'box') // 没有日志输出
  }, 0)

  setTimeout(() => {
    mut.observe(app, { attributes: true }) // 重新连接
    app.setAttribute('class', 'box') // [div#app.box]
  }, 0)
</script>
```

### 观察属性

`MutationObserver.observe` 可以接收两个参数，第二个参数为以及一个 `MutationObserverInit` 对象。可以观察节点属性的添加、删除、修改。需要属性变化注册回调，需要字啊 `MutationObserverInit` 对象中将 `attributes` 设置为 `true`。

但是将 `attributes` 设置为 `true` 默认是观察所有的属性，如果想要观察几个或者多个属性，可以使用 `attributeFilter` 属性设置白名单，即一个属性名的数组集合

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributeFilter: ['food'] }) // 设置 food 为白名单

  app.setAttribute('class', 'box') // [div#app.box]
  app.setAttribute('food', 'admin') // 没有日志输出
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `attributeOldValue` 设置为 `true`

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  mut.observe(app, { attributeOldValue: true })

  app.setAttribute('class', 'box')
  app.setAttribute('food', 'admin')
  app.setAttribute('id', 'ccc')

  // [null, null, 'app']
</script>
```

### 观察字符数据

将 `characterData` 设置为 `true` 可以为观察字符，当字符修改、删除、添加时，都可以触发回调

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterData: true })
  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 三次修改都被记录下来了
  // (3) [MutationRecord, MutationRecord, MutationRecord]
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `characterDataOldValue` 设置为 `true`

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 修改过的值都被记录下来了
  // (3) ['张三', 'abc', 'admin']
</script>
```

### 观察子节点

将 `childList` 设置为 `true` 可以观察子节点，当子节点修改、删除、添加时，都可以触发回调

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { childList: true })

  app.appendChild(document.createElement('p'))

  // [MutationRecord]
</script>
```

### 观察子树

上述 将 `childList` 设置为 `true` 可以观察子节点，但是子节点的内部就观察不到了，所以还需要将 `subtree` 设置为 `true`，即可扩展到这个元素的子树，所有后代节点。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { attributes: true, subtree: true })

  app.appendChild(document.createElement('p'))
  app.querySelector('p').setAttribute('class', 'text')

  // [MutationRecord]
</script>
```

但是有意思的是：观察子树的节点被移出子树之后，仍然可以触发变化事件

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))

  const div1 = document.createElement('div')
  mut.observe(app, { attributes: true, subtree: true }) // 观察子树
  app.appendChild(div1) // 将新建的 div 放进 app 容器
  document.body.insertBefore(div1, app) // 修改新建 div 的位置
  div1.setAttribute('class', 'box1') // 改变属性

  // 观察子树的节点被移出子树之后，仍然可以触发变化事件
  // [MutationRecord]
</script>
```

### takeRecords()

`takeRecords()` 方法可以清空 `MutationObserver` 的记录队列，取出并返回所有 `MutationObserver` 实例

```html
<div id="app">哈哈</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))
  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  console.log(mut.takeRecords()) // (3) [MutationRecord, MutationRecord, MutationRecord]
  console.log(mut.takeRecords()) // []
</script>
```

这在希望断开与观目标的联系，但又希望处理由于调用 `disconnect()` 而被抛弃的记录队列中的 `MutationObserver` 实例还是比较有用的。
