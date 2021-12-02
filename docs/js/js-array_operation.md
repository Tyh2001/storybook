# 数组操作

## 数组方法

### ... 展开运算符

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

## 数组去重

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
