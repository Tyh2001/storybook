# 代理模式

## 什么是代理模式

比如每个明星都会有一个经纪人，如果想请这个明星参与演出，那么都会先联系到经纪人，经纪人将各个方面都谈好之后，再吧合同交给明星来签

## 简单的代理

下面举个例子来实现一个简单的代理

比如下面一个场景：小明想给小红送上一束花，那么不使用代理模式的情况下，代码是这样的：

```js
// 花
class Flower {}

// 小明
const xMing = {
  // 送花
  sendFlower(target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

// 小红
const xHong = {
  // 收到花
  receiveFlower(flower) {
    console.log('收到花', flower)
  }
}

xMing.sendFlower(xHong) // 收到花 Flower {}
```

那么使用代理的方式呢，比如小明不想直接给小红送花，所以找到了小刚，让小刚代替自己去送花，那么代码如下：

```js
// 花
class Flower {}

// 小明
const xMing = {
  // 送花
  sendFlower(target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

// 小刚
const xGang = {
  // 收到花
  receiveFlower(flower) {
    // 再送给小红
    xHong.receiveFlower(flower)
  }
}

// 小红
const xHong = {
  // 收到花
  receiveFlower(flower) {
    console.log('收到花', flower)
  }
}

xMing.sendFlower(xGang) // 收到花 Flower {}
```

这样，上面就完成了一个简单的代理模式

上面代码中，看似小明直接给小红送花，和通过代理对象小刚再送花，二者看起来没用任何区别，引入一个代理对象，只不过是把事情搞复杂了而已。

的确，对于这样的代理，是毫无意义的

但是现在要切换一下背景的设定：如果在小红心情好的时候，才会收取送来的花，而在心情不好的时候，是不会收花的，而小明不能知道小红什么时候心情好，只要小刚知道，只要小刚知道小红心情好的时候，才会把花送给小红，那么代码如下：

```js
// 花
class Flower {}

// 小明
const xMing = {
  // 送花
  sendFlower(target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

// 小刚
const xGang = {
  // 收到花
  receiveFlower(flower) {
    // 监听小红心情
    xHong.listenGoodMood(() => {
      xHong.receiveFlower(flower)
    })
  }
}

// 小红
const xHong = {
  listenGoodMood(callback) {
    // 2 秒后会心情好
    setTimeout(() => {
      callback()
    }, 2000)
  },
  // 收到花
  receiveFlower(flower) {
    console.log('收到花', flower)
  }
}

xMing.sendFlower(xGang) // 收到花 Flower {}
```

## 保护代理和虚拟代理
