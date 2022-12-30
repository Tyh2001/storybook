# 数组方法

## push()

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

## pop()

`pop()` 删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```

`pop()` 方法也可以删除最后一项的元素并返回

```js
const arr = ['red', 'abc', '12']
const res = arr.pop()
console.log(res) // 12
console.log(arr) // ['red', 'abc']
```

## unshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 支持多个添加

## shift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```

`shift()` 也可以删除数组的第一个元素并返回

```js
const arr = ['java', 'python', 'c']
const res = arr.shift()
console.log(res) // java
```

## join()

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

## ...

`...` 展开运算符

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

那么通过 `ES6` 的数组展开语法，上述操作就变的非常简单了：

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
  ...obj2
}

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```

## Array.from()

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
  age: 12
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

> 对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较\*\*

`Array.from()` 还可以接收到第二个参数，可以直接增强数组中的每个值

```js
const arr = [1, 3, 4, 5]
const res = Array.from(arr, (x) => x * 2)
console.log(res) // [2, 6, 8, 10]
```

`Array.from()` 还可以接收到第三个参数，可以指定 this

```js
const arr = [1, 2, 3, 4, 5]

const res = Array.from(
  arr,
  function (x) {
    return x * this.num
  },
  { num: 3 }
)
console.log(res) // [3, 6, 9, 12, 15]
```

## Array.of()

`Array.of()` 方法可以将一组参数转换为数组

```js
const res = Array.of(1, 2, 3, 4, 5)
console.log(res) // [1, 2, 3, 4, 5]
```

## Array.isArray()

`Array.isArray()` 方法用于检测一个值是否是一个数组

```js
const arr = [1, 2, 3]
console.log(Array.isArray(arr)) // true
```

## slice()

`slice()` 数组截取，它不会改变原数组，而是会创建一个新的数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2, 4)
console.log(arr2)
// (2) ["js", "java"]
```

`slice()` 可以传入两个参数，根据索引进行截取，分别是：

- 从第几个开始截取（包括开始元素索引元素）
- 第二个参数是：截取到第几个元素（不包括结束元素索引元素）

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

`slice()` 方法可以存在负值，如果是负值，那么就是分别对应数组的长度加上这个负值得到的结果数

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(-2, -1)
// 详单于 arr.slice(3, 4)
console.log(arr2) // ['java']
```

## splice()

`splice()` 方法可能是数组**最强大**的方法了，它可以：`删除、插入、替换`

<!-- `splice()` 数组 截取 || 添加数据 || 移除 || 替换 -->

**删除**

删除可以从数组中删除一个或多个元素，需要接收两个参数：

- 要删除的第一个元素的位置
- 要删除元素的数量

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(0, 2) // 从 0 的索引开始，删除两位
console.log(arr) // ['js', 'java', 'html5']
```

如果只传入一个参数，那么就从指定索引删除到结尾

> 删除会删除开始索引位置的值

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2)
console.log(arr) // ['css', 'html']
```

**插入**

可以在数组中指定位置进行插入，插入需要传入三个参数：

- 开始位置
- 0 / 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 0 个元素，并插入后面的元素
arr.splice(2, 0, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'js', 'java', 'html5']
```

上面例子中，第二关参数为 `0`，代表并没有删除元素，其实也可以删除部分元素，并添加

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 2 个元素，并插入后面的元素
arr.splice(2, 2, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'html5']
```

通过上面例子，再次引入下面替换的方法

**替换**

`splice()` 在删除和元素的同时可以指定位置插入新的元素，同样需要三个参数：

- 开始位置
- 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 1 的位置，删除 2 个元素，并插入后面的元素，相当于替换的元素
arr.splice(1, 2, 'python', 'c++')
console.log(arr) // ['css', 'python', 'c++', 'java', 'html5']
```

## includes()

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

## keys()

`keys()` 方法可以返回数组索引的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.keys())) // [0, 1, 2]
```

## values()

`values()` 方法可以返回数组元素的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.values())) // ['西瓜', '苹果', '芒果']
```

## entries()

`entries()` 方法可以返回数组`索引/元素`的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.entries()))
```

```
[Array(2), Array(2), Array(2)]
  0: (2) [0, '西瓜']
  1: (2) [1, '苹果']
  2: (2) [2, '芒果']
  length: 3
[[Prototype]]: Array(0)
```

## fill()

`fill()` 方法可以可以向数组中插入全部或部分相同的值

它可以接收三个参数：

- 要插入的内容
- 开始的索引位置
- 结束的索引位置

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 0, 3)
console.log(arr) // ['改变', '改变', '改变', 4, 5]
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变')
console.log(arr) // ['改变', '改变', '改变', '改变', '改变']
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 4)
console.log(arr) // [1, 2, 3, 4, '改变']
```

## copyWithin()

`copyWithin()` 方法会按照指定范围进行潜复制，然后插入到指定索引的位置

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.copyWithin(5)
console.log(arr) // [1, 2, 3, 4, 5, 1, 2, 3, 4]
```

## reverse()

`reverse()` 方法可以让数组反向排序

```js
const arr = [1, 2, 3, 4]
console.log(arr.reverse()) // [4, 3, 2, 1]
```

## sort()

`sort()` 方法可以让数组升序排列

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort()) // [1, 2, 3, 4, 5, 9]
```

也可以通过一个比较函数来确定排序方法

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => y - x)) // [9, 5, 4, 3, 2, 1]
```

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => x - y)) // [1, 2, 3, 4, 5, 9]
```

## concat()

`concat()` 方法可以创建一个原有数组的副本，但是并不全等之前的数组

```js
const arr = [1, 2, 3]
const res1 = arr.concat()
console.log(res1) // [1, 2, 3]
console.log(res1 === arr) // false
```

`concat()` 主要的作用是可以将数组进行合并，可以接受多个参数，添加到数组的末尾

```js
const arr = [1, 2, 3]

const res1 = arr.concat(4, 5)
console.log(res1) // [1, 2, 3, 4, 5]

const res2 = arr.concat(4, 5, [6, 7], [8, 9])
console.log(res2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## indexOf()

`indexOf()` 该方法从数组的左侧向右侧查找回指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

可以分别用在数组和字符串中，它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

字符串：

```js
const arr = '12334'

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(2)) // 有 2 输出2的索引 1
```

数组：

```js
const arr = [1, 3, 4]

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(4)) // 有 4 输出4的索引 2
```

```js
const arr = [1, 3, '7', 5]

console.log(arr.indexOf(1, 2))
// 虽然数组中存在 1，但是从第二位开始查找，后面找不到，所以返回 -1
```

`indexOf()` 方法 是严格类型查找，比如下面实例中：

比如数组中有一个字符串`'7'` 那么是查找不到的

```js
const arr = [1, 3, '7', 5]
console.log(arr.indexOf(7)) // -1
// 严格类型匹配查询不到字符串7，所以返回 -1
```

## lastIndexOf()

`lastIndexOf()` 方法可以查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

不过 `lastIndexOf()` 是从右往左查找的

比如：数组中有两个`7` 这时返回的就是从右侧查找到的第一个 `7`

它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

```js
const arr = [1, 3, 7, 5, 6, 7, 9]
console.log(arr.lastIndexOf(7)) // 5
```

## includes()

`includes()` 方法和 `indexOf()` 类似，都是从左往右查找，但是 `includes()` 返回的是一个布尔类型来表示是否查到

它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

```js
const arr = [1, 3, 7, 5, 6, 7, 9]
console.log(arr.includes(3)) // true
console.log(arr.includes(0)) // false
```
