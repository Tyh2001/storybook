# 关于图片加载，你需要学习一下

## Hello

大家好，我是[田同学](https://github.com/Tyh2001)，大家可以加我微信 `VirgoTyh` 一起共同学习。

## 从何而来

这篇文章，出自我自己的开源组件库 [fighting-design](https://github.com/FightingDesign/fighting-design) 中的 [Avatar 头像](https://fighting.tianyuhao.cn/components/avatar.html) 组件。

相比于其它的静态组件，像图片加载这种的组件，内部我做了很多的优化，对于图片的加载和错误的处理，我都尽可能的将每种可能出现的结果都考虑到，针对每种不确定的结果做出相应的提示，以便于提升用户体验。

## 设计思想

我的设计想法是：通过一个加载类，传入 `dom` 元素，和 `src`，先创建出一个虚拟的 `img` 元素进行尝试加载，加载成功获失败都会进入下一步的函数，以便知道是否加载成功。

## 初步加载

那么初步的类设计为：

```ts
class Load {
  constructor(node, props, emit) {
    this.node = node
    this.props = props
    this.emit = emit
  }
  // 加载 src
  loadCreateImg = () => {
    const newImg = new Image() // 新建一个虚拟的 img

    newImg.src = this.props.src // 将传入的 src 赋值给虚拟节点

    // src 加载失败
    newImg.addEventListener('error', (evt) => {
      // 加载失败的处理
    })

    // src 加载成功
    newImg.addEventListener('load', (evt) => {
      // 加载成功的处理
    })
  }
}
```

首先我创建了一个 `Load` 的加载类，需要传入 `node` 参数作为最终需要渲染的 `dom` 节点，`props` 是传入的组件内部的 `props` 参数，内部包含图片需要加载的 `src` 路径，`emit` 包括一些回调参数。

类的内部有个 `loadCreateImg` 的方法，调用可创建一个虚拟的 `Image` 元素，直接将传入的 `src` 赋值并加载。监听上面的 `error` 和 `load` 事件，即可监听到图片是否加载成功，以便做出不同的状态。

## 成功和失败

对于成功或失败的处理，我新增了 `onerror` 和 `onload` 方法，来处理加载成功和失败之后的不同处理状态

```ts
class Load {
  constructor(node, props, emit) {
    this.node = node
    this.props = props
    this.emit = emit
  }
  loadCreateImg = () => {
    const newImg = new Image()

    newImg.src = this.props.src

    newImg.addEventListener('error', (evt) => {
      this.onerror(evt) // 新增
    })

    newImg.addEventListener('load', (evt) => {
      this.onload(evt) // 新增
    })
  }
  // 加载成功
  onload = (evt) => {
    this.node.src = this.props.src
  }
  // 加载失败
  onerror = (evt) => {
    // ……
  }
}
```

对于加载成功，处理方式是，将传入的真是的 `dom` 节点直接赋值给传入的 `props.src` 即可完成加载。

## 加载失败

对于加载失败的处理，`Fighting Design` 内部做了很多处理，比如可以传入 `err-src` 的备用路径加载，在 `src` 加载失败之后，如果 `err-src` 存在的话，那么就需要加载 `err-src` 那么继续完善类方法：

首先要在 `onerror` 方法中判断是否存在 `err-src`，然后再新增一个 `loadNextImg` 方法，用来加载 `err-src`，代码为：

```ts
class Load {
  constructor(node, props, emit) {
    this.node = node
    this.props = props
    this.emit = emit
  }
  loadCreateImg = () => {
    const newImg = new Image()

    newImg.src = this.props.src

    newImg.addEventListener('error', (evt) => {
      this.onerror(evt)
    })

    newImg.addEventListener('load', (evt) => {
      this.onload(evt)
    })
  }
  onload = (evt) => {
    this.node.src = this.props.src
  }
  // 加载失败
  onerror = (evt) => {
    // 如果存在 errSrc 则继续尝试加载
    if (this.props.errSrc) {
      return this.loadNextImg()
    }

    // 否则返回失败回调
    this.emit('error', evt)
  }
  loadNextImg = () => {}
}
```
