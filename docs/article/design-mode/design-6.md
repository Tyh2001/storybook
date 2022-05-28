# 迭代器模式

## 什么是迭代器

迭代器说白了，也就是循环，比如 `for`、`forEach` 等

## 实现简单的迭代器

下面实现一个简单的迭代器，使用一个 `each` 函数，`each` 函数接收两个参数，一个是被循环的数组，第二个是每个循环中触发的回调

代码如下：

```js
const arr = ['css', 'html', 'js', 'vue']

function each(target, callback) {
  for (let i = 0; i < target.length; i++) {
    callback.call(target[i], i, target[i])
  }
}

each(arr, (index, item) => {
  console.log(index, item)
})

// 0 'css'
// 1 'html'
// 2 'js'
// 3 'vue'
```

## 内部迭代器

刚才编写的 `each` 函数就属于是内部迭代器，它的内部已经定义好的迭代规则，外部只需要一次性的调用即可

下面例子中，需要判断两个数组是否相等，代码如下：

```js
const arr1 = ['css', 'html', 'js', 'vue']
const arr2 = ['css', 'react', 'ts', 'vue']

function each(target, callback) {
  for (let i = 0; i < target.length; i++) {
    callback.call(target[i], i, target[i])
  }
}

function computed(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('arr1 和 arr2 不相等')
  }

  each(arr1, (index, item) => {
    if (item !== arr2[index]) {
      throw new Error('arr1 和 arr2 不相等')
    }
  })
  console.log('arr1 和 arr2 相等')
}

computed(arr1, arr2)
```

虽然自己定义的迭代器可以完美的实现了效果，但是 `computed` 这个函数一点也算不上美观，接下来看一下外部迭代器的效果

## 外部迭代器

外部迭代器必须显示的请求迭代下一个元素

在实现上述例子之前，先简单的看一个例子：

```js
function iterator(obj) {
  let current = 0

  const next = () => {
    current += 1
  }

  const isDone = () => {
    return current >= obj.length
  }

  const getItem = () => {
    return obj[current]
  }

  return { next, isDone, getItem }
}
```

接下来看看如何改写 `computed` 函数

```js
const arr1 = ['css', 'html', 'js', 'vue']
const arr2 = ['css', 'react', 'ts', 'vue']

function iterator(obj) {
  let current = 0

  const next = () => {
    current += 1
  }

  const isDone = () => {
    return current >= obj.length
  }

  const getItem = () => {
    return obj[current]
  }

  return { next, isDone, getItem }
}

function computed(arr1, arr2) {
  while (!arr1.isDone() && !arr2.isDone()) {
    if (arr1.getItem() !== arr2.getItem()) {
      throw new Error('arr1 和 arr2 不相等')
    }
    arr1.next()
    arr2.next()
  }
  console.log('arr1 和 arr2 相等')
}

const iterator1 = iterator(arr1)
const iterator2 = iterator(arr2)

computed(iterator1, iterator2)
```
