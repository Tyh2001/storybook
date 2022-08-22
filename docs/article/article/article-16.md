# 关于图片加载，你需要学习一下

## Hello

大家好，我是[田同学](https://github.com/Tyh2001)，大家可以加我微信 `VirgoTyh` 一起共同学习。

## 从何而来

这篇文章，出自我自己的开源组件库 [fighting-design](https://github.com/FightingDesign/fighting-design) 中的 [Avatar 头像](https://fighting.tianyuhao.cn/components/avatar.html) 组件。

相比于其它的静态组件，像图片加载这种的组件，内部我做了很多的优化，对于图片的加载和错误的处理，我都尽可能的将每种可能出现的结果都考虑到，针对每种不确定的结果做出相应的提示，以便于提升用户体验。

## 设计思路

我的设计想法是：通过一个加载类，传入 `dom` 元素、 `props` 和 `emit`。先创建出一个虚拟的 `image` 元素进行尝试加载，加载成功获失败都会进入下一步的函数，做出对应从处理逻辑。

## 初步设计

首先类中先有一个加载的方法 `loadCreateImg`，代码如下：

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

类的内部有个 `loadCreateImg` 的方法，调用可创建一个虚拟的 `Image` 元素，直接将传入的 `props.src` 赋值并加载。监听上面的 `error` 和 `load` 事件，即可监听到图片是否加载成功，以便做出不同的状态。

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

首先要在 `onerror` 方法中判断是否存在 `err-src`，如果有 `err-src` 那么就需要重新调用 `loadCreateImg` 重新加载，但是现在的代码显然不能满足需要，所以 `loadCreateImg` 需要接收一个可选的参数为 `errSrc`，因为只有在加载失败之后才会再次调用该方法传入 `err-src` 所以内部就可以根据 `err-src` 是否存在，来做出正确从处理

```ts
class Load {
  constructor(node, props, emit) {
    this.node = node
    this.props = props
    this.emit = emit
  }
  loadCreateImg = (errSrc?: string) => {
    const newImg = new Image()

    // 如果 errSrc 存在 就尝试加载 errSrc
    if (errSrc) {
      newImg.src = errSrc
    } else {
      newImg.src = this.props.src
    }

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
      // 将 errSrc 传给 loadCreateImg 方法
      return this.loadCreateImg(this.props.errSrc)
    }

    // 否则返回失败回调
    this.emit('error', evt)
  }
}
```

但是上面代码依然有问题，我们发现，在 `onload` 加载成功的方法中，将真实 `dom` 始终赋值的是 `src`：

```ts
onload = (evt) => {
  // 始终赋值为 props.src
  this.node.src = this.props.src
}
```

但是 `src` 并不是始终可以加载成功的，所以还是需要动态的去将真正加载成功的 `src` 传给 `onload` 方法，那么真正加载成功的 `src` 也就是在 `load` 方法中，并且还要加入成功的 `emit`。所以完善代码为：

```ts
class Load {
  constructor(node, props, emit) {
    this.node = node
    this.props = props
    this.emit = emit
  }
  loadCreateImg = (errSrc?: string) => {
    const newImg = new Image()

    // 如果 errSrc 存在 就尝试加载 errSrc
    if (errSrc) {
      newImg.src = errSrc
    } else {
      newImg.src = this.props.src
    }

    newImg.addEventListener('error', (evt) => {
      this.onerror(evt)
    })

    newImg.addEventListener('load', (evt) => {
      this.onload(evt, newImg.src) // 将加载成功的 src 传给 onload 函数
    })
  }
  // 新增 src 属性
  onload = (evt, src: string) => {
    this.node.src = src // 将真实 dom 的 src 赋值给传入的 src
    this.emit('load', evt) // 新增
  }
  onerror = (evt) => {
    if (this.props.errSrc) {
      return this.loadCreateImg(this.props.errSrc)
    }

    this.emit('error', evt)
  }
}
```

## 回调函数

有些时候，我们还需要通过一个布尔值来判断图片是否加载成功，或者进行其它判断。

`Fighting Design` 内部对图片加载失败做了特殊的样式处理来提示用户，所以需要一个布尔值和 `v-if` 来展示不同的状态，这里就涉及到了类的第四个参数，也就是一个可选的回调函数

这样就可以在加载成功和加载失败的时候通过回调函数来返回一个布尔值判断是否加载成功，代码如下：

```ts
class Load {
  constructor(node, props, emit, callback) {
    this.node = node
    this.props = props
    this.emit = emit
    this.callback = callback // 新增 callback 参数
  }
  loadCreateImg = (errSrc?: string) => {
    const newImg = new Image()

    if (errSrc) {
      newImg.src = errSrc
    } else {
      newImg.src = this.props.src
    }

    newImg.addEventListener('error', (evt) => {
      this.onerror(evt)
    })

    newImg.addEventListener('load', (evt) => {
      this.onload(evt, newImg.src)
    })
  }
  onload = (evt, src: string) => {
    this.node.src = src
    this.emit('load', evt)

    // 如果 callback 存在，在加载成功的时候返回 true
    if (this.callback) {
      this.callback(true)
    }
  }
  onerror = (evt) => {
    if (this.props.errSrc) {
      return this.loadCreateImg(this.props.errSrc)
    }

    this.emit('error', evt)
    // 如果 callback 存在，在加载失败的时候返回 false
    if (this.callback) {
      this.callback(false)
    }
  }
}
```

上面代码即可实现判断是否加载成功的需求。

当然，回调函数你可以尽情的发挥想象做出更多的事情，这里仅提供部分用法。

## 懒加载

图片的懒加载，也是一个图片加载必备的功能了，这里我使用的是内置的 [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) 接口，对于这个方法，这里不过多描述，各位可以通过 [MDN](https://developer.mozilla.org/zh-CN/) 进行学习。

对于懒加载，因为这是一个可选的属性，并不是每次都需要，所以我将懒加载单独抽离出来的一个 `Lazy` 类进行实现，再将 `Lazy` 类继承到 `Load` 类，代码如下：

```ts
class Lazy extends Load {
  constructor(img, props, emit, callback) {
    // super 关键字调用
    super(img, props, emit, callback)
  }
  observer = () => {
    const observer = new IntersectionObserver(
      (arr): void => {
        // 如果进入可视区域
        if (arr[0].isIntersecting) {
          // 开始加载图片 调用父类
          this.loadCreateImg()
          observer.unobserve(this.node)
        }
      },
      /**
       * rootMargin 为触发懒加载的距离 通过 props 传入
       * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
       */
      { rootMargin: this.props.rootMargin }
    )
    return observer
  }
  // 执行 懒加载
  lazyCreateImg = (): void => {
    // IntersectionObserver 内部方法，需要将 dom 节点传入
    this.observer().observe(this.node)
  }
}
```

`IntersectionObserver` 接口可以判断 `dom` 元素是否进入可视区域，通过内置方法判断进入可视区域之后，执行父类的 `loadCreateImg` 方法进行加载，从而实现懒加载。

## 对外接口

对于 `Load` 类和 `Lazy` 类，`Fighting Design` 并没有直接暴露出去提供使用，而是暴露出了一个全新的 `loadImage` 函数，让它去根据是否为懒加载而实例化不同的类，再调用加载方法：

```ts
// 导出对外接口
export const loadImage = (node, prop, emit, callback) => {
  /**
   * 如果传入了 lazy 则执行懒加载类
   * 否则执行正常加载类
   */
  if (prop.lazy) {
    const lazy = new Lazy(node, prop, emit, callback)
    return lazy.lazyCreateImg()
  }
  const load = new Load(node, prop, emit, callback)
  load.loadCreateImg()
}
```
