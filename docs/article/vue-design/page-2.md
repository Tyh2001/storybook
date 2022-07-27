# 第二章 框架设计的核心要素

## 2.1 提升用户的开发体验

对于框架而言，在用户使用的过程中需要向用户提供友好的反馈信息至关重要。如果这一点做不好，就很可能会导致用户的抱怨。始终提供着友好的报错和警告信息可以帮助用户快速解决问题。

比如调用下面 `warn` 函数

```js
function warn(text) {
  console.warn(text)
}

warn('警告信息')
```

## 2.2 控制框架代码的体积

当然，在同样功能的情况下，肯定是代码写的越少，浏览器加载的资源也就是越少，性能也就会更好，那么，存在很多的打印警告和错误的信息，难道不会影响框架的性能吗？

在 vue3 的源码中，经常看看一个 warn 函数配合 `__DEV__` 的检查，下面代码取自[这里](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts)

```js
if (__DEV__) {
  console.warn(
    `Set operation on key "${String(key)}" failed: target is readonly.`,
    target
  )
}
```

那么在上面例子中，只有在 `__DEV__` 等于 `true` 的时候，才会执行下面代码，而达到目的的关键就在于这个 `__DEV__` 变量。

vue3 使用 [rollup.js](https://github.com/rollup/rollup)。Rollup 是一个用于 JavaScript 的模块打包器，它将小段代码编译成更大更复杂的东西，例如库或应用程序。

有了这一点，通过改变 `__DEV__` 变量的值，来进行判断，如果是在开发环境下，`__DEV__` 的值为 `true`，就可以执行下面的警告函数，也可以将其进行打包到文件中

那么如果到了生产环境中，`__DEV__`，就会变为 `false`，也就不会执行警告函数，也不会将其进打包到最终的文件中。

> 所以就做到了在开发环境中提供友好的警告信息的同时，不会增加生产环境代码中的体积。

## 2.3 框架要做到良好的 Tree-Shaking

但是除了上面的变量 `__DEV__` 可以移除或者展示报错信息外，在 vue 中，还会有很多的内置组件，比如 [transition](https://staging-cn.vuejs.org/api/built-in-components.html#transition)，那么如果用户没用在项目中使用，据不需要打包到最终的资源中，那么需要怎么做到这一点呢？这就不得不提到的是 [Tree-Shaking(vite 文档)](https://vitejs.dev/guide/ssr.html#source-structure) / [Tree-Shaking(webpack 文档)](https://webpack.js.org/guides/tree-shaking/)。

Tree-Shaking 的作用就是可以消除哪些永远不会执行的代码，从而减少包的体积。

## 2.4 良好的 TypeScript 类型支持

框架内部做了很多对于 TypeScript 的类型支持，并不是用 TypeScript 编写的框架，就一定对 TypeScript 由良好的支持，比如在 [runtime-core](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/apiDefineComponent.ts) 文件中，整个在浏览器可以运行的文件只要 3 行，但是全部的代码将近 200 行，其实这些代码都是在为类型支持所服务。由此可见，框架要做到完善的类型支持，还需要付出很大的努力。
