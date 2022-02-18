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
  ...obj2,
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

> 对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较\*\*

`Array.from()` 还可以接收到第二个参数，可以直接增强数组中的每个值

```js
const arr = [1, 3, 4, 5]
const res = Array.from(arr, (x) => x * 2)
console.log(res) // [2, 6, 8, 10]
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

## splice()

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
