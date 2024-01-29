# 高阶函数

## 前言

高阶函数至少要满足下面条件之一的

- 函数可以作为参数被传递
- 函数可以作为返回值输出

## 回调函数

下面例子中使用回调函数给新建的每个 `div` 设置样式，如果全部都在一个函数里，显然是不合理的，这样可以将创建 `div` 和设置样式的两个逻辑进行分离

其实设置样式可能是用户发起的，所以这样就完美了进行了分离

```js
function renderDiv(callback) {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.innerText = i
    document.body.appendChild(div)
    if (typeof callback === 'function') {
      callback(div)
    }
  }
}

renderDiv((node) => {
  node.style.color = 'red'
})
```

## 函数作为返回值输出

比如我们可以使用 `Object.prototype.toString` 可以进行类型是判断

见下面例子

```js
function getType(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === `[object ${type}]`
  }
}

const t1 = getType('String')

console.log(t1('123')) // true
console.log(t1(222)) // false
```

## 简单的单例模式

下面是一个简单的单例模式例子，单例模式将会在下一章进行详细介绍

```js
function fun(callback) {
  let res
  return function () {
    return res || (res = callback())
  }
}

const getFun = fun(() => {
  return { name: '张三' }
})

const res1 = getFun()
const res2 = getFun()

console.log(res1 === res2) // true
```

上面是一个高阶函数的例子，既把函数作为参数传递，又在函数执行后返回了一个函数

## 高阶函数应用

比如我们想要计算我们一个月每天总共的开销，代码如下

```js
let moneyAll = 0
function add(money) {
  moneyAll += money
}

add(19)
add(20)
add(12)

console.log(moneyAll) // 51
```

但是呢，我们其实并不关心每天花多少钱，所以只需要到月底直接计算一次就可以了，所以改写函数为

```js
function addMoney() {
  const moneyArr = []

  return function () {
    // 代表需要求值了
    if (arguments.length === 0) {
      let money = 0
      for (let i = 0; i < moneyArr.length; i++) {
        money += moneyArr[i][0]
      }
      return money
    } else {
      // 存储值
      moneyArr.push(arguments)
    }
  }
}

const add = addMoney()

add(10)
add(20)
add(90)
add(80)

console.log(add()) // 200
```

但是项目的函数相对较大，所有的逻辑都放在一个函数里面了，下面进行拆分

```js
function addMoney(callback) {
  const moneyArr = []
  return function () {
    if (arguments.length === 0) {
      return callback.apply(this, moneyArr)
    } else {
      moneyArr.push(arguments[0])
    }
  }
}

function cont(...moneyArr) {
  let money = 0
  return function () {
    for (let i = 0; i < moneyArr.length; i++) {
      money += moneyArr[i]
    }
    return money
  }
}

const add = addMoney(cont)

add(10)
add(20)
add(30)

const res = add()
console.log(res())
```
