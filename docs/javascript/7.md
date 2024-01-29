# 数组迭代

## forEach()

我们不应该过度滥用`forEach`。当然，在某些情况下`forEach`是一个非常好的方法。

如果你需要迭代数组以执行特定操作（例如控制台记录每个项目）。

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4, 5]

items.forEach((item) => console.log(item))
```

forEach 不返回任何值！！

```js
const toto = items.forEach((item) => console.log(item))
toto // undefined
```

## filter()

`filter` 方法，允许根据条件过滤数组中的某些值，查找满足条件的所有元素，返回数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

例如，如果你想删除奇数

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const evenValue = []
items.forEach((item) => {
  if (item % 2 == 0) {
    evenValue.push(item)
  }
})
```

使用 filter (正确)

```js
const items = [1, 2, 3, 4]

const evenValue = items.filter((item) => {
  return item % 2 == 0
})
```

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

> 当你使用 filter 时，你应该在每次迭代中返回一个布尔值（filter 的条件）。（否则 JS 引擎会把返回值强制转换为布尔值！）

## map()

`map()` 方法用于映射数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

当你需要将项目从一个数组转换为另一个数组时

例如，如果你想将数组中的所有值都乘以 2

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const result = []
items.forEach((item) => {
  result.push(item * 2)
})
```

使用 map (正确)

```js
const items = [1, 2, 3, 4]
const result = items.map((item) => {
  return item * 2
})
```

> 当你使用 map 时，你需要在每次迭代中返回一个项目（转换后的项目）。

## find()

`find` 方法，当你需要找到符合条件的项目并打算之后使用该项目的情况下，可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [1, 2, 3, 4]

arr.find((element, index, array) => {
  console.log(element, index, array)
})

// 1 0 (4) [1, 2, 3, 4]
// 2 1 (4) [1, 2, 3, 4]
// 3 2 (4) [1, 2, 3, 4]
// 4 3 (4) [1, 2, 3, 4]
```

找到指定 `name` 的元素，并返回该元素

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.find((element, index, array) => {
  return element.name === '小明'
})
console.log(res) //{name: '小明', age: 34}
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

**filter 和 find 结合实例**

有一个数组 arr1 和 arr2 现在想要得到 arr1 - arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
  { name: '小明', id: 1 },
  { name: '小张', id: 2 },
  { name: '小例', id: 3 },
  { name: '小李', id: 4 },
  { name: '小赵', id: 5 },
  { name: '小萌', id: 6 }
]

const arr2 = [
  { name: '小例', id: 3 },
  { name: '小萌', id: 6 }
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

## findIndex()

`findIndex()` 方法和 `find` 方法类似，但是 `findIndex()` 并不是返回的匹配的指定的元素，而是返回匹配元素的索引值

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.findIndex((element, index, array) => {
  return element.name === '小明'
})
console.log(res) // 2
```

## some()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4]
const hasNumber2 = items.some((item, index) => {
  return item === 2
})
console.log(hasNumber2) // true
```

> 如果第一项判断为真了，就不继续向下判断了，直接返回第一项。如果判断到第某一项时返回 true，那么在这个元素之前的全部都会遍历

## every()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 }
]

const res = user.every((item) => {
  return item.fen > 30
})

console.log(res) // true
```

## reduce()

`reduce()` 函数返回的任何值，都会作为下一次调用同一函数的第一个参数

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduce((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 1 3 1 [1, 3, 7, 5]
// undefined 7 2 [1, 3, 7, 5]
// undefined 5 3 [1, 3, 7, 5]
```

当你需要从数组中获取单个值时。此处的 `单个值` 可以是一个数组。

例如，如果你想对数组中的所有数字求和。

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
let accumulator = 0

items.forEach((item) => {
  accumulator += item
})
```

使用 reduce (正确)

```js
const items = [1, 2, 3, 4]

const sum = items.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue)
}, 0)
```

> 当你使用 reduce 时，你需要在每次迭代中返回 accumulator（reduce 方法返回的值），并且你还应该初始化这个 accumulator（在上面的例子中我们将累加器初始化为 0）！

## reduceRight()

`reduceRight()` 方法和 `reduce()` 方法基本类似，但是 `reduceRight()` 是从右往左遍历

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduceRight((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 5 7 2 [1, 3, 7, 5]
// undefined 3 1 [1, 3, 7, 5]
// undefined 1 0 [1, 3, 7, 5]
```
