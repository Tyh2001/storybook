# 数据类型

## Map()

`Map()` 类型实际上是键值对的有序集合，键和值是任意类型，可以使用构造函数来创建，一个键对应一个值

```js
const m = new Map()

const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2)
// Map(2) {'name' => '张三', 'age' => '12'}
```

`size` 方法可以获取键值的数量，相当于数组的 `length` 方法

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.size) // 2
```

`set()` 方法添加元素，接收两个参数：`键/值`

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)
console.log(mapList)

// Map(2) {"name" => "张三", "age" => 12}
```

`get()` 方法通过指定键名获取键值

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)

console.log(mapList.get('name'))
// 张三
```

`has()` 方法检测集合中有无指定元素，返回布尔值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.has('name')) // true
console.log(m2.has('name2')) // false
```

`delete()` 方法可删除元素

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.delete('name')
console.log(m2) // Map(1) {'age' => '12'}
```

`clear()` 方法可以清楚所有的键值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.clear()
console.log(m2) // Map(0) {size: 0}
```

`keys()` 方法可以获取到所有的键

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.keys()) // MapIterator {'name', 'age'}
```

`values()` 可以获取每一项的值

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.values()) // MapIterator {'张三', '12'}
```

`Map` 与 `Objet` 类型不同的是，它可以用任意的键作为键名

```js
function fun() {}
const sy = Symbol()
const obj = {}

const m = new Map([
  [fun, '这是函数'],
  [sy, '这是 Symbol'],
  [obj, '这是 obj']
])

console.log(m.get(fun)) // 这是函数
console.log(m.get(sy)) // 这是 Symbol
console.log(m.get(obj)) // 这是 obj

console.dir(m)
```

打印结果

```shell
Map(3)
  [[Entries]]
    0: {function fun () { } => "这是函数"}
    1: "这是 Symbol"
    2: {Object => "这是 obj"}
  size: 3
  [[Prototype]]: Map
```

可以使用 [entries](https://tianyuhao.cn/blog/javascript/array-methods.html#entries) 方法进行迭代

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m.entries()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

也可以使用 `[Symbol.iterator]()` 方法进行迭代

`[Symbol.iterator]()` 和 `entries()` 是全等的

```js
console.log(m.entries === m[Symbol.iterator]) // true
```

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m[Symbol.iterator]()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

或者使用数组方法进行遍历

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

m.forEach((item, value) => {
  console.log(item, value)
  // 张三 name
  // 12 age
})
```

把数组复制到映射

```js
const arr = ['css', 'html', 'js']
const m = new Map(
  arr.map((item, index) => {
    return [index + 1, item]
  })
)

console.log(m)
```

打印结果

```shell
Map(3) {1 => 'css', 2 => 'html', 3 => 'js'}
```

## WeakMap()

`WeakMap()` 是 `Map()` 的一个兄弟，但是也是有些区别的

`WeakMap()` 的键只能是 `Object` 类型

- 错误的

```js
const wm = new WeakMap([['age', '12']])

console.dir(wm) // TypeError:用作弱映射键的值无效
```

- 正确的

```js
const obj = {}
const wm = new WeakMap([[obj, '12']])
```

如果想使用字符串进行作为键，可以先包装成对象再作为键

```js
const obj = {}
const str = new String('name')
const wm = new WeakMap([
  [obj, '12'],
  [str, '张三']
])
```

还有不同的是：

- `WeakMap()` 不可被迭代
- `clear()` 方法不能使用

## Set()

ES6 提供了新的数据结构 `Set()`。它类似于数组，但是成员的值都是唯一的，没有重复的值，很多时候它都要强于 `Map()`

创建一个 `Set` 数据结构

```js
const s = new Set()
```

`Set()` 和 `Map()` 类似，有着很多共同效果的方法：

- `size` 方法获取元素的数量
- `add()` 方法添加元素
- `delete()` 方法删除元素
- `has()` 方法检测集合中有无指定元素，返回布尔值
- `clear()` 方法可清空所有元素

`values()` 和 `keys()` 方法可以获取其中的每一项进行遍历

`values()` 和 `keys()` 是全等的，所以用哪个都可以

```js
const s = new Set([1, 2, 3, 4])
console.log(s.values === s.keys) // true
console.log(s.keys()) // SetIterator {1, 2, 3, 4}

for (const item of s.keys()) {
  console.log(item)
}
// 1
// 2
// 3
// 4
```

**将 Set 转换为数组**

可以使用 Es6 的扩展运算符 `...` 对 `Set` 展开进行转换

```js
const setArr = new Set([1, 3, 3, 3, 3, 4, 6])
const arr = [...setArr]
console.log(arr)

// (4) [1, 3, 4, 6]
```

## WeakSet()

`WeakSet()` 是 `Set()` 的一个兄弟，但是也是有些区别的

`WeakSet()` 的键只能是 `Object` 类型

- `WeakSet()` 不可被迭代
- `clear()` 方法不能使用

## Symbol()

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

## JSON

**JSON.stringify()**

使用 `JSON.stringify()` 方法可以将对象转换为 JSON 对象

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj))

// {"name":"张同学","age":39,"arr":[1,2,3,4]}
```

也可以接收第二个参数，用于过滤，可以接收一个数组或函数

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
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
  arr: [1, 2, 3, 4]
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

**JSON.parse()**

使用 `JSON.parse()` 方法可以将 JSON 对象转换为对象

```js
const json = `{"name":"张同学","age":39,"arr":[1,2,3,4]}`
console.log(JSON.parse(json))

// {name: '张同学', age: 39, arr: Array(4)}
```

## FormData()

创建一个 formdata

```js
const fd = new FormData()
fd.append('name', 'data')
```

`append` 方法接收两个参数 键和值

使用 FormDate 就不需要给 xhr 对象设置响应头了，因为 xhr 对象可以识别作为 FormDate 实例传入的数据类型并自动配置响应头
