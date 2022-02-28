# Vue3 的源码怎么看？

## 将代码克隆到本地

vue3 的仓库[core](https://github.com/vuejs/core)在这里，可以先 `fork` 下来之后下载到本地。

## Vue3 代码主要分成三大块

vue3 由 `compiler`、`runtime`、`reactivity` 构成 `vue3` 最核心的源码，下面分别来介绍一下

### reactivity

`reactivity`：响应式

`reactivity` 的源码建议第一个看，因为它只有 `1000` 行左右。

`reactivity` 也就是常说的 `响应式`，读完之后你大概就可以知道响应式是怎么执行的，`proxy` 和 `get`、`set` 是怎么劫持的。

### compiler

`compiler`：编译器

第二个要看的就是 `compiler`。`compiler` 就需要硬啃了，因为`compiler` 是 `runtime` 执行之后的结果，如果对 `compiler` 不太熟悉，那么读 `runtime` 就非常痛苦。

如果你在读 `compiler` 的时候是非常痛苦的，那么你就需要了解基本是编译原理。这里推荐一个库，可能是有史以来最小的编译器：[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)，大概是一个 `200行` 左右的编译器实现。

然后再去看 `compiler` 的 `unittest` 测试

### runtime

`runtime`：运行时
