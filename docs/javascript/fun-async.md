# 异步函数

## 什么是异步编程

js 是单线程语言，只能同时处理一个任务，如果请求的是后端，这个响应可能是几秒之后才响应，所以要先跳过这个任务，继续向下执行。必须等主进程全部执行完成之后再执行异步函数。就算主进程再慢，也要等主进程全部加载完成之后再加载。

下面是一个图片加载的异步例子

```js
function loadImage(url, load, error) {
  const image = new Image()
  image.src = url
  image.onload = load
  image.onerror = error
}

loadImage(
  './image/1.png',
  () => {
    console.log('加载成功')
  },
  () => {
    console.log('加载失败')
  }
)

console.log('ok')

// ok
// 加载成功
```

## Promise

`Promise` 是一个构造函数，可以通过 `new` 关键字来创建

```js
const p = new Promise()
```

`Promise` 有三种状态，分别是：**pending（等待态），fulfilled（成功态），rejected（失败态）**
那么怎么在三种状态中切换呢，如下

```js
const p1 = new Promise((resolve, reject) => {})
console.log(p1) // pending

const p2 = new Promise((resolve, reject) => {
  resolve()
})
console.log(p2) // pending -> fulfilled

const p3 = new Promise((resolve, reject) => {
  reject()
})
console.log(p3) // pending -> rejected
```

通过调用不同的函数可以改变 `Promise` 的状态

> pending 状态的 Promise 不会触发 then 和 catch 方法
> 成功状态会执行 then 里的草错，失败会执行 catch 里的操作

**成功**

```js
new Promise((resolve, reject) => {
  resolve()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 成功的处理程序
```

**失败**

```js
new Promise((resolve, reject) => {
  reject()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 失败的处理程序
```

但是除了成功和失败，还有一个 `finally` 的回调，是无论成功还是失败都会执行的

```js
new Promise((resolve, reject) => {
  resolve()
})
  .then((res) => {
    console.log('成功的处理程序')
  })
  .finally(() => {
    console.log('永远会执行')
  })

// 成功的处理程序
// 永远会执行
```

> promise 会生成微任务，相反的是宏任务，当全部添加到任务队列中的时候，先执行微任务

promise 的 `.then` 的回调函数中接收两个参数，分别是成功的处理函数和失败的处理函数

```js
new Promise((resolve, reject) => {
  resolve('成功了')
}).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
)

// 成功了
```

`.catch` 可以统一处理错误信息，这样就避免每个 promise 都要写独立的错误处理程序了，直接使用 `catch` 统一处理，建议将 `catch` 放在最后。如果 promise 有独立的错误处理程序，那么将使用自己的处理程序执行。

```js
const p1 = new Promise((resolve, reject) => {
  console.log(a)
  resolve('成功了')
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      resolve('ok')
    })
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// ReferenceError: a is not defined
```

## 微任务宏任务概述

因为 js 是单线程语言，也就是说只有一个人来干活，所以不可能同时干多个事情，所以就会产生任务队列和优先级，任务队列一般分为三个，一个是**主任务**，优先级最大，其次是**微任务**，最后是**宏任务**

见下面代码

```js
setTimeout(() => {
  console.log('定时器')
}, 0)

new Promise(() => {
  console.log('promise')
})

Promise.resolve((res) => {
  console.log('resolve')
})

console.log('主线程')
```

打印结果是：

```
promise
主线程
resolve
定时器
```

因为 `setTimeout` 属于是宏任务，所以最后执行，`pending` 状态的 `Promise` 也是属于主任务，所以最先执行，`resolve` 状态的 `Promise` 属于是异步函数，它属于 `微任务`，所以要等主线执行完再执行，最后一段代码是主任务，因为它是第二个主任务，所以第二个执行。

## 定时器任务编排

使用 `setTimeout` 来举例，下面定义一个 4 毫秒后执行的定时器，但是它并不是真正的 4 毫秒之后就会执行，一定要等主线程执行完毕之后再执行

```js
setTimeout(() => console.log('哈哈'), 4)

for (let i = 0; i < 10000; i++) {
  console.log('1')
}
console.log('循环结束')
```

## DOM 渲染任务

如果我们将外部引入的 `*.js` 文件全部放在 dom 渲染之前进行加载，那么载入的时候就需要先将引入的文件全部加载完成之后再进行渲染 dom，那么就会产生加载白屏的状态，所以需要将外部加载的模块放在 dom 渲染之后加载

**反例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="./js/1.js"></script>
  </head>

  <body>
    <h1>hello</h1>
  </body>
</html>
```

**推荐的**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <h1>hello</h1>
    <script src="./js/1.js"></script>
  </body>
</html>
```

## 进度条例子

```html
<style>
  #sel {
    height: 20px;
    background-color: green;
  }
</style>

<div id="sel"></div>
<script>
  function handle() {
    let i = 0
    ;(function run() {
      sel.innerHTML = i
      sel.style.width = i + '%'
      if (++i <= 100) {
        setTimeout(run, 20)
      }
    })()
  }

  handle()
</script>
```

## Promise 微任务处理复杂业务

```js
async function load(num) {
  const res = await Promise.resolve().then((_) => {
    let count = 0
    for (let i = 0; i < num; i++) {
      count += num--
    }
    return count
  })
  console.log(res)
}
load(987654321)
console.log('主任务不要被影响')
```

## 微任务和宏任务的执行顺序

```js
setTimeout(() => {
  console.log('你好')
}, 0)

console.log('ok')

// ok
// 你好
```

上面代码中，js 只要碰到了 `setTimeout` 就要先将其添加到任务队列中去（这是一个宏任务），需要等同步代码执行完成之后再进行执行。

再比如下面代码

```js
// setTimeout 为宏任务，直接添加到任务队列中
setTimeout(() => {
  console.log('4')
}, 0)

new Promise((resolve) => {
  console.log('1') // 第一个主线任务，第一个执行
  resolve() // 返回成功通知，执行 then 的回调函数
}).then((res) => {
  console.log('2') // promise 是微任务，也添加到任务队列中
})

console.log('3') // 第二个主线任务，第二个执行

// 1
// 3
// 2
// 4
```

所以程序的执行顺序是：**主线任务 > 微任务 > 宏任务**

## 使用 Promise

**动态加载图片**

```js
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    document.body.appendChild(image)
  })
}

loadImage('./image/1.png').then((img) => {
  img.style.border = `2px solid black`
})
```

**定时器**

```js
function timeout(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

timeout(2000)
  .then(() => {
    console.log('你好')
    return timeout(2000)
  })
  .then(() => {
    console.log('哈哈哈')
  })
```

## Promise.resolve()

`Promise.resolve()` 默认是成功状态，直接返回成功状态

```js
Promise.resolve('成功状态').then((res) => {
  console.log(res)
})
```

它的实际应用在哪里呢？比如我我们想要反复请求一个数据，但是我们希望的是不要每次都发送请求，我们可以走本地的缓存进行处理，减少请求次数

```js
function query() {
  if (query.user) {
    console.log('走了缓存数据')
    return Promise.resolve(query.user) // 直接返回成功状态的 promise
  }
  return axios(
    'https://infinitymcn.com/citi/citi-form-backend/public/index.php/index/Votetfourth/getVoteRes'
  ).then((res) => {
    query.user = res
    console.log('没走缓存数据')
    return res
  })
}

query().then((res) => {
  console.log(res)
})

setTimeout(() => {
  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })
}, 1000)
```

这样就只有第一次请求是通过访问后端接口，剩下的都是通过返回的本地缓存进行的，可以增加响应速度。

## Promise.reject()

`Promise.reject()` 默认是失败状态，直接返回失败状态

该方法可以在执行成功之后，遇到错误进行给 `catch` 中进行反馈，例如下面

```js
new Promise((resolve, reject) => {
  resolve(200) // 执行成功操作 传递参数为 成功了
})
  .then((res) => {
    // 成功操作会进入这里
    // 那么在成功之后可以再进行判断，如果不是我们想要的值
    // 就可以返回 Promise.reject 来让 catch 进行处理
    if (res !== 201) {
      return Promise.reject('参数不是201')
    }
  })
  .catch((error) => {
    console.log(error) // 参数不是201
  })
```

## Promise.all()

`Promise.all()` 可以处理多个 `Promise`，如果有一个返回的是失败状态，那么 `Promise.all()` 返回的就是失败状态，当所有的返回都是成功状态，那么 `Promise.all()` 返回的则是成功状态

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步函数')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2]).then((res) => {
  console.log(res) // (2) ['第一个异步函数', '第二个异步函数']
})
```

`Promise.all()` 也可以统一处理错误信息

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('第一个异步函数失败了')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err) // 第一个异步函数失败了
  })
```

## Promise.allSettled()

`Promise.allSettled()` 可以处理多个 `Promise`，但是无论 `Promise` 的状态是成功还是失败，它都是已经解决的状态

```js
const p1 = new Promise((resolve, reject) => {
  reject('no')
})

const p2 = new Promise((resolve, reject) => {
  resolve('ok')
})

Promise.allSettled([p1, p2]).then((res) => {
  console.log(res)
})
```

## Promise.race()

`Promise.race()` 方法可以获取多个 `Promise` 但是它最终只会获取到一个，取得获取最快的一个

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个')
  }, 1000)
})

Promise.race([p1, p2]).then((res) => {
  console.log(res) // 第二个
})
```

> Promise.race() 方法可以用在后端请求超时处理

## Promise.finally()

`Promise.finally()` 方法可以返回一个新的 `Promise` 实例

```js
const p1 = new Promise(() => {})
const p2 = p1.finally()
console.log(p2) // Promise {<pending>}
console.log(p1 === p2) // false
```

## Promise.withResolves()

以往的痛点：如果 promose 的 `resolve` 或者 `reject` 是在其它函数中调用的，则需要先用变量接收一下，非常不方便

这个新的方法就是解决在构造函数外面去调用的问题

```js
let res
let rej

const promise = new Promise((resolve, reject) => {
  res = resolve
  rej = reject
})

const text = () => {
  res('成功了')
}

text()

promise.then((res) => {
  console.log(res)
})
```

新方法：

```js
const { promise, resolve, reject } = Promise.withResolvers()

const text = () => {
  resolve('成功了')
}

text()

promise.then((res) => {
  console.log(res)
})
```

## Promise 异步捕获错误

通常情况下，同步代码使用 `try catch` 来进行捕获错误

```js
try {
  throw new Error('foo')
} catch (error) {
  console.log(error) // Error: foo
}
```

上面代码可以精准的捕获错误

但是在 `Promise` 中，情况就会不一样了

```js
try {
  Promise.reject(new Error('bar'))
} catch (error) {
  console.log(error)
}

// Uncaught (in promise) Error: bar
```

但是在 `Promise` 中，错误就不能正确的捕获了，而是浏览器通知了错误信息。为什么会这样呢？因为同步代码可以使用 `try catch` 来进行捕获，而 `Promise` 必须通过异步模式来进行捕获错误，所以可以更改为

```js
try {
  Promise.reject(new Error('bar')).catch((err) => console.log(err)) //Error: bar
} catch (error) {
  console.log(error)
}
```

这样既可正确的捕获错误

## async 函数

`async` 函数是 `Promise` 的语法糖，返回值是 `Promise`，同样可以使用 `.then` 来接收

```js
async function load() {
  return '你好啊'
}

console.log(load()) // Promise {<fulfilled>: '你好啊'}

load().then((res) => console.log(res)) // 你好啊
```

或者直接返回 `Promise` 也可以

```js
async function load2() {
  return new Promise((resolve) => {
    resolve('哈哈哈')
  })
}

load2().then((res) => console.log(res)) // 哈哈哈
```

例子

```js
async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function show() {
  for (const user of ['张三', '李四']) {
    await sleep(1000)
    console.log(user)
  }
}

show()
```

## async 捕获错误

使用 `async` 函数之后，也是可以捕获错误的，因为 `async` 返回的也是 `promise`

```js
async function fun() {
  console.log(a)
}

fun().catch((err) => {
  console.log(err) // ReferenceError: a is not defined
})
```

## await 捕获错误流程

可以使用 `try catch` 来捕获 `await` 中的错误

```js
async function fun(name) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学') // ReferenceError: age is not defined
```

正确的语法如下

```js
async function fun(name, age) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学', 18).then((res) => {
  console.log(res)
})
```

## await 并行执行

`Promise` 不是并行执行的，`Promise` 必须等上一个 `Promise` 执行完成之后再执行，见下面例子

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = await p1()
  console.log(res1) // 两秒后执行 第一个函数
  const res2 = await p2()
  console.log(res2) // 再等两秒后（4秒后）执行 第二个函数
}
load()
```

但是现在我希望上面两个可以同时执行，那么写法为

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = p1()
  const res2 = p2()
  const res1Val = await res1
  const res2Val = await res2
  console.log(res1Val)
  console.log(res2Val)
}
load()
```

或者也可以使用 `Promise.all()` 方法

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res = await Promise.all([p1(), p2()])
  console.log(res)
}
load()
```

> 第一种方式写的是原理，第二种方式才是务实的方法

## 手写 Promise

```js
class myPromise {
  // 定义 promise 的三种状态
  // 因为值是固定的 所以定义为静态属性
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  /**
   * @param { object } executor 回调函数
   * 因为 promise 就只会接收到一个参数，就是一个函数
   * 那么 executor 就是传入 promise 的那个函数
   * 然后 executor 函数还会接受到两个参数 一个 resolve，一个 reject
   */
  constructor(executor) {
    this.status = myPromise.PENDING // 默认为准备状态
    this.value = null // 获取到的值
    this.callbacks = [] // 存放将来要执行的函数

    /**
     * 为什么使用 try catch？
     * 因为在执行 promise 的内部，可能会产生错误
     * 所以一旦尝试错误就直接调用拒绝函数 reject
     */
    try {
      /**
       * 这里需要将 this 指向改变
       * 这里将 executor 的两个参数传递过去
       * 因为参数还是两个函数 所以这里是一类方法进行传递
       */
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  /**
   * 成功状态
   * @param {*} value 得到的值
   * 当写了：new myPromise((resolve, reject) => resolve('成功了吗'))
   * 的时候，就调用了 resolve 函数，传递的参数是 '成功了吗'
   * 所以这里的 value 就会接收到这个参数
   */
  resolve(value) {
    // promise 状态一旦生成就不能改变
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.FULFILLED // 改变状态
      this.value = value // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onResolve(value)
        })
      })
    }
  }

  /**
   * 拒绝状态
   * @param {*} reason 拒绝的因素
   */
  reject(reason) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.REJECTED // 改变状态
      this.value = reason // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onReject(reason)
        })
      })
    }
  }

  /**
   * .then 方法
   * @param { function } onResolve 捕获成功
   * @param { function } obReject 捕获拒绝
   */
  then(onResolve, onReject) {
    if (typeof onResolve !== 'function') {
      // 直接返回 value，解决穿透效果
      onResolve = () => this.value
    }

    if (typeof onReject !== 'function') {
      onReject = () => this.value
    }

    /**
     * 为了 promise 可以使用链式操作
     * 这里直接返回一个新的 promise ，类似递归
     */
    const promise = new myPromise((resolve, reject) => {
      // 成功状态
      if (this.status === myPromise.FULFILLED) {
        /**
         * 为什么使用 try catch？
         * 因为有可能函数传递的是未定义的参数
         * 为什么使用 setTimeout？
         * 因为 promise 中 .then() 并不是同步执行
         * 需要等主进程执行完成之后再执行
         */
        setTimeout(() => {
          this.parse(promise, onResolve(this.value), resolve, reject)
        })
      }

      // 拒绝状态
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onReject(this.value), resolve, reject)
        })
      }

      // 等待状态
      if (this.status === myPromise.PENDING) {
        // 如果在 promise 中出现定时器，就先将函数放到数组中
        this.callbacks.push({
          onResolve: (value) => {
            this.parse(promise, onResolve(value), resolve, reject)
          },
          onReject: (value) => {
            this.parse(promise, onReject(value), resolve, reject)
          }
        })
      }
    })

    return promise
  }

  /**
   * 代码封装
   * @param { function } promise 返回的 promise
   * @param { function } result 结果
   * @param { function } resolve 成功状态函数
   * @param { function } reject 拒绝状态函数
   */
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      /**
       * 如果返回的是普通类型的值，下一个 .then 可以直接接到
       * 那么如果返回的是一个 promise 的话，就需要做区分
       */
      if (result instanceof myPromise) {
        // promise
        result.then(resolve, reject)
      } else {
        // 普通对象
        resolve(result) // 成功状态返回的 promise 是成功状态
      }
    } catch (error) {
      reject(error)
    }
  }

  /**
   * promise.resolve 方法
   * @param {*} value 值
   */
  static resolve(value) {
    return new myPromise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  /**
   * promise.reject 方法
   * @param {*} value 值
   */
  static reject(value) {
    return new myPromise((resolve, reject) => {
      reject(value)
    })
  }

  /**
   * promise.all 方法
   * @param { array } promises promise 的集合
   */
  static all(promises) {
    const values = []
    return new myPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (value) => {
            values.push(value)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (reason) => reject(reason)
        )
      })
    })
  }

  /**
   * promise.race 方法
   * 谁快就打印谁
   * @param { array } promises promise 的集合
   */
  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.map((promise) => {
        promise.then(
          (value) => resolve(value),
          (reason) => reject(reason)
        )
      })
    })
  }
}
```
