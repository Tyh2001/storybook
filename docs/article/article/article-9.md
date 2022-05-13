# Vue3 的源码怎么看

## 前言

本篇文章会介绍一些学习 `vue3` 的一些学习的方式，我将会介绍 `vue3` 从社区开始入手，到阅读源码，可能篇幅较长，日常更新中。

下面解答一些问题

- 为什么要学习源码？

相信很多人，并不知道为什么需要阅读源码，可能大多数只是感觉可以用在可以装 B 上，但其实不然，其实阅读源码可以提升我们的编程水平的，也就是内力。

相信通过阅读源码，日积月累，并把这些代码或思想应用的自己项目中去，相信能够很好的提升自己的编码能力。

- 读完 vue 的代码之后，框架过时了怎么办？

很多人可能会想：前端技术更新换代的那么迅速，当我刚刚花了很久的时间，阅读了一个框架或库的源码，但是又有了新的框架出现，我是不是白读了呢？我来解答一下：

所有的框架都会过时，我们需要的就是能够沉淀下来不变的东西，什么东西不变？算法，数据结构，编译原理，网络协议，操作系统，开发范式，软件工程，计算机组成原理。

我们通过阅读源码，可以将这些不变的东西进行沉淀，只要我们将里面的思想学会了，那么对于以后的任何框架，都可以根据我们的 `内力` 进行学习和阅读。

- 源码那么多代码和文件夹，该怎么入手呢？

虽然[源码](https://github.com/vuejs/core)代码很多，但是将其进行类别话的拆分，就可以很清晰明了了。

但是在阅读之前，需要将其中的项目说明文件进行阅读一遍，这也就是一个项目的说明书，不看说明书，可能你会摸不着头脑。

所以要先将 `说明书`（贡献指南）先看一遍。

- 怎么把项目跑起来？

在 [贡献指南](https://github.com/vuejs/core/blob/main/.github/contributing.md) 中，有详细的贡献细节描述、目录结构描述、安装方式，可以根据文档进行操作。

## 将代码克隆到本地

vue3 的仓库 [core](https://github.com/vuejs/core) 在这里，可以先 `fork` 下来之后下载到本地。

## 看 vue3 源码前的准备

### 技术点

- [TypeScript](https://www.tslang.cn/index.html) 在 vue3 的源码中，大概涵盖了 `97%`
- [the-super-tiny-compiler](https://github.com/Tyh2001/the-super-tiny-compilerr) 一个编译器，用于学习 `compiler` 层面，可能是有史以来最小的编译器
- [the-der-tiny-compiler](https://github.com/Tyh2001/the-der-tiny-compiler) 一个非常 der 的 vue compiler 实现

### 算法

- [最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)，在源码中，最长递增子序列的算法在 [runtime-core](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts) 的 `2393` 行，最后一个函数。

### 其它

- 位运算
- 设计模式
- 动态规划

## Vue3 核心代码

vue3 的核心源码在 [packages](https://github.com/vuejs/core/tree/main/packages) 中，简单分为三大模块，分别是由 `reactivity`、`compiler`、`runtime` 构成最核心的源码，下面分别来介绍一下

### reactivity

`reactivity` 也就是响应式，它的源码建议第一个看，因为它只有 `1000` 行左右。读完之后你大概就可以知道响应式是怎么执行的，`proxy` 和 `get`、`set` 是怎么劫持的。

vue3 的 `reactivity` 是使用的 ES6 的 [Proxy](https://tianyuhao.cn/blog/docs/javascript/Proxy%20%E4%BB%A3%E7%90%86) 进行实现的，简单的实现方式可以参考 [第四章 响应系统的作用与实现](https://tianyuhao.cn/blog/docs/vue-design/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%E5%93%8D%E5%BA%94%E7%B3%BB%E7%BB%9F%E7%9A%84%E4%BD%9C%E7%94%A8%E4%B8%8E%E5%AE%9E%E7%8E%B0)

### compiler

`compiler` 是编译器。第二个要看的就是 `compiler`。`compiler` 就需要硬啃了，如果对 `compiler` 不太熟悉，那么读 `runtime` 就非常痛苦。

如果你在读 `compiler` 的时候是非常痛苦的，那么你就需要了解基本是编译原理。这里推荐一个库，可能是有史以来最小的编译器：[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)，大概是一个 `200行` 左右的编译器实现。

### runtime

`runtime` 是运行时。`runtime` 接收的是 `compiler` 执行之后的结果，所以建议最后来看。

### 简单介绍一下目录结构

- [reactivity](https://github.com/vuejs/core/tree/main/packages/reactivity): vue 独立的响应式模块
- [compiler-core](https://github.com/vuejs/core/tree/main/packages/compiler-core): 与平台无关的编译模块，例如基础的 baseCompile 编译模版文件, baseParse 生成 AST
- [compiler-dom](https://github.com/vuejs/core/tree/main/packages/compiler-dom): 基于 compiler-core，专为浏览器的编译模块，可以看到它基于 baseCompile，baseParse，重写了 compiler、parse
- [compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc): 用来编译 vue 单文件组件
- [compiler-ssr](https://github.com/vuejs/core/tree/main/packages/compiler-ssr): 服务端渲染相关的
- [runtime-core](https://github.com/vuejs/core/tree/main/packages/runtime-core): 也是与平台无关的基础模块，有 vue 的各类 API，虚拟 dom 的渲染器
- [runtime-dom](https://github.com/vuejs/core/tree/main/packages/runtime-dom): 基于 runtime-core，针对浏览器的运行时
- [vue](https://github.com/vuejs/core/tree/main/packages/vue): 引入导出 runtime-core，还有编译方法

## 先从社区入手

### 浏览最新 issues

根据众多的 [issues](https://github.com/vuejs/core/issues) 中可以进行根据他人提出的一些问题或者 `Bug`，可以根据描述进行修复，修复完成之后可以进行提交 `pr`。

### 根据 close 的 issues 进行推断

在已经关闭的 [issues](https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aclosed) 中，可以看到以往的 `issues` 中，一些问题大家是如何讨论的，最后是如何解决的，可以根据下面的评论回复可以获取一些修复的方式等。

### 根据 commit 推断

在 [commit](https://github.com/vuejs/core/commits/main) 中可以看到每一次的提交记录，在修订 `Bug` 可以根据后面的 `issues` 编号进行查看。

### Pull requests

在这里可以看到最新的 [PR](https://github.com/vuejs/core/pulls)，可以根据别人提交 `PR` 的方式试着进去模仿提交新的 `PR`。

## 资源

在 [awesome-vue3](https://github.com/Tyh2001/awesome-vue3) 里面，我整理了众多的 `vue3` 的一些周边资源，提供使用，欢迎大家 `star`。

vue3 目前有两个官方文档，这里介绍一下：

- [vue3 最新中文文档](https://staging-cn.vuejs.org/)
- [新版 Github](https://github.com/vuejs-translations/docs-zh-cn)
- [vue3 老版中文文档](https://v3.cn.vuejs.org/)
- [老版 Github](https://github.com/vuejs/docs-next-zh-cn)
