# 发布订阅模式

## 现实中的例子

发布订阅模式，将从一个例子开始

比如小明，小刚等人要去售楼处买房，在他们离开的时候，会将电话号码留在售楼处。那么当有新的房子退出的时候，售楼处就会按照手册上的电话号码依次的发送短信通知他们。

上面例子中，售楼处也就是发布者，小明，小刚等人就是订阅者，这个例子中也可以看出发布订阅模式的优点：

- 购房者不需要每天给售楼处打电话询问
- 购房者和售楼处不再强耦合在一起
- 售楼处不需要关心购房者是谁
- 售楼处的变动不会影响到购房者，比如售楼处从一楼搬到了三楼

## 简单的发布订阅

那么综合上面的例子，下面实现一个简单的发布订阅模式：

```js
// 定义售楼处
class SalesOffice {
  constructor() {
    this.list = [] // 电话册
  }
  // 记录订阅者
  listen(fn) {
    this.list.push(fn)
  }
  // 发布消息
  trigger() {
    this.list.map((item) => {
      item.apply(this, arguments)
    })
  }
}

const salesOffice = new SalesOffice()

salesOffice.listen((price, size) => {
  console.log(`小明订阅消息：${price}万，${size}平米`)
})

salesOffice.listen((price, size) => {
  console.log(`小刚订阅消息：${price}万，${size}平米`)
})

salesOffice.trigger(2000000, 110)
salesOffice.trigger(1000000, 88)
// 小明订阅消息：2000000万，110平米
// 小刚订阅消息：2000000万，110平米
// 小明订阅消息：1000000万，88平米
// 小刚订阅消息：1000000万，88平米
```

但是上面例子，也有一些问题，比如小明只需要 110 平米的，而上面例子中，不管是 110 平米还是 80 平米，消息全部都发送给了小明，但是这对于小明来说也是不必要的困扰。那么我们还需要传入一个 `key` 来做标识

```js
// 定义售楼处
class SalesOffice {
  constructor() {
    this.list = {} // 电话册
  }
  // 记录订阅者
  listen(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }
  // 发布消息
  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.list[key]

    if (!fns) {
      return
    }

    fns.map((item) => {
      item.apply(this, arguments)
    })
  }
}

const salesOffice = new SalesOffice()

salesOffice.listen('size88', (price, size) => {
  console.log(`小明订阅消息：${price}万`)
})

salesOffice.listen('size110', (price, size) => {
  console.log(`小刚订阅消息：${price}万`)
})

salesOffice.trigger('size88', 2000000)
salesOffice.trigger('size110', 1000000)
// 小明订阅消息：2000000万
// 小刚订阅消息：1000000万
```

## 取消定义模式

有时候我们也需要取消订阅，比如有一天小明不想买房子了，那么就需要取消订阅了，那么在之前的基础上，新增取消定义方法

```js
// 定义售楼处
class SalesOffice {
  constructor() {
    this.list = {} // 电话册
  }
  // 记录订阅者
  listen(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }
  // 发布消息
  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.list[key]

    if (!fns) {
      return
    }

    fns.map((item) => {
      item.apply(this, arguments)
    })
  }
  // 取消订阅方法
  remove(key, fn) {
    const fns = this.list[key]

    if (!fns) {
      return
    }

    fns.forEach((item, index) => {
      if (item === fn) {
        fns.shift(index, 1)
      }
    })
  }
}

const salesOffice = new SalesOffice()

const ming = (price, size) => {
  console.log(`小明订阅消息：${price}万`)
}
const gang = (price, size) => {
  console.log(`小刚订阅消息：${price}万`)
}

salesOffice.listen('size88', ming)
salesOffice.listen('size88', gang)
salesOffice.remove('size88', ming) // 取消小明订阅

salesOffice.trigger('size88', 2000000) // 小刚订阅消息：2000000万
```

## 通用类

综合上面例子，最终我们得到了一个通用类：

```js
class Event {
  constructor() {
    this.list = {}
  }
  listen(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }
  // 发布消息
  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.list[key]

    if (!fns) return
    fns.map((item) => {
      item.apply(this, arguments)
    })
  }
  // 取消订阅方法
  remove(key, fn) {
    const fns = this.list[key]
    if (!fns) {
      return
    }
    fns.forEach((item, index) => {
      if (item === fn) {
        fns.shift(index, 1)
      }
    })
  }
}
```
