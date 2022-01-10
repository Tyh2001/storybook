# Vue2 相关

## 创建 Vue 项目

1. 下载 vue-cli（下载之后才可以使用 Vue 命令）

全局安装 vue/cli 安装完成之后才可以使用 vue 的命令 下载一次就可以了

```sh
npm install -g @vue/cli
```

> 如果报错不能使用 Vue 命令 那么要把 vue-cli 添加到环境变量中

2. 创建 Vue 项目

在命令行中输入以下命令创建 Vue 项目：

```shell
vue create +项目名称
```

> 选择版本

```shell
Vue CLI v4.5.11
? Please pick a preset: (Use arrow keys)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
> Manually select features
```

Default ([Vue 2] babel, eslint)：默认勾选 babel、eslint，回车之后直接进入装包

Default (Vue 3 Preview)：Vue3.0 版本还没有正式发布，不建议使用

Manually select features ：手动选择特性，支持更多自定义选项，推荐使用

> 选择需要用到的一些配置

```shell
Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to i
nvert selection)
>(*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

Babel：es6 转 es5

Router：路由

Linter / Formatter：代码格式校验，ESLint 代码格式校验

CSS Pre-processors：Css 预处理器

根据自己需要选择

我这里选择了：Router、Vuex、CSS Pre-processors

> 选择的版本虚拟用户.js 你想开始这个项目

```shell
Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-proc
essors, Linter
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 2.x
  3.x (Preview)
```

这里知己默认选择第一个即可

> 是否使用 history 路由模式

```shell
Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-proc
essors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n
)
```

这里输入 `n` 不使用

> 选择 CSS 预处理器，这里选择我们熟悉的 Less

```shell
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use a
rrow keys)
> Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```

> 选择校验工具，这里选择 ESLint + [Standard config](https://standardjs.com/)

```shell
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config
  ESLint + Prettier
```

> 选择在什么时机下触发代码格式校验：

```shell
? Pick additional lint features:
 (*) Lint on save
>(*) Lint and fix on commit
```

Lint on save：每当保存文件的时候

Lint and fix on commit：每当执行 `git commit` 提交的时候

这里建议两个都选上，更严谨。

> Babel、ESLint 等工具会有一些额外的配置文件，这里的意思是问你将这些工具相关的配置文件写到哪里：

```shell
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```

In dedicated config files：分别保存到单独的配置文件

In package.json：保存到 package.json 文件中

这里建议选择第 1 个，保存到单独的配置文件，这样方便我们做自定义配置。

> 这里里是问你是否需要将刚才选择的一系列配置保存起来，然后它可以帮你记住上面的一系列选择，以便下次直接重用。

```shell
? Save this as a preset for future projects? (y/N)
```

这里根据自己需要输入 y 或者 n，我这里输入 n 不需要。

> 向导配置结束，开始装包。
>
> 安装包的时间可能较长，请耐心等待...

## 关于 axios 配置

为了方便，我们在这里把 axios 单独封装一个模块用于项目中的请求操作。

```js
/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

// axios()
// axios.get()
// axios.post()

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: ' ', // 请求的基础路径
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request
```

## 关于样式冲突问题

> 多个组件污染（多个组件公用一套样式时影响其他组件）

在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）

```css
<style scoped>
@import "../assets/css/Login.css";
</style>
```

那么解决这个问题可以通过下面方法进行引入样式

```css
<style lang="" src="../assets/css/Login.css" scoped></style>
```

## 拦截器

1. 添加一个请求拦截器

```js
axios.interceptors.request.use(
  function (config) {
    // 任何请求都是经过这里
    // config 是当前请求相关的配置信息对象
    return config

    // 请求失败都经过这里
  },
  function (error) {
    // 这里如果不 return 请求就直接发布出去
    return Promise.reject(error)
  }
)
```

2. 添加一个响应拦截器

```js
axios.interceptors.response.use(
  function (response) {
    // 所有响应为 2XX的响应都会进入这里 请求成功
    // response 是响应处理
    // 注意 一定要把响应结果 return 否则真正发请求的位置拿不到数据
    return response
  },
  function (error) {
    // 处理响应错误
    return Promise.reject(error)
  }
)
```

3. 可以在处理请求或响应之前拦截它们可以使用`thrn`或`catch`

官方文档：https://github.com/axios/axios

## 关于 vue.config.js

```js
module.exports = {
  devServer: {
    port: 8080, // 端口号 可以自定义
    open: true, // 启动项目后自动在浏览器打开项目
    proxy: {
      // 把所有以 /api 开头的请求代理转发
      '/api': {
        target: '', // 目标基础地址 url
        changeOrigin: true, // 允许跨域
        ws: true, // 开启 webSocket 代理
        pathRewrite: {
          // 重写路径
          '^/api': '',
        },
      },
    },
  },
}
```

## 关于冗余导航报错问题

当我们在使用下面方法进行路由跳转时：

```html
<p @click="$router.push('/setting')">设置</p>
```

效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转

但是，如果当前已经在`/setting`路由下，那么再点击就会报错：

```shell
[Vue warn]: Error in v-on handler (Promise/async): "NavigationDuplicated: Avoided redundant navigation to current location: "/setting"."
```

大概的意思就是：当前你已经在这个导航下了，不要再重复冗余 rǒng yú（多余的重复或啰嗦的操作）

这个其实并不是一个错误，只是说你的操作多余了

那么解决方法就是：在 `router/index.js`中加入下面一段代码即可解决报错问题

```js
const router = new VueRouter({
  routes,
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
```

## 非父子组件通信

创建一个叫 `bus.js` 的通信组件，内容如下

```js
import Vue from 'vue'

export default new Vue()
```

假设 a 组件要给 b 组件发送请求，那么 a 组件发布通信事件

```js
import bus from '@/utils/bus.js'
bus.$emit('自定义事件名称', 需要发送的内容)
// 引入 bus，使用 bus.comit() 方法发送数据
```

b 组件要接收通信事件：

```js
import bus from '@/utils/bus.js'
bus.$on('自定义事件名称', (data) => {
  // data 即为传递来的数据
  // 处理函数
})
```

需要注意的是：

> 通信两端所使用的的事件名称必须一致 否则是无效的
>
> `$on()` 用来接收 `$emit()` 用来发布

## Vue 给 for 循环的标签添加背景图

```html
<div :style="{ 'background-image': 'url(' + item.PlaceImgUrl + ')' }"></div>
```

## watch 监听器

通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  watch: {
    text() {
      console.log('text 值发生改变了！！')
    },
  },
}
</script>
```

但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 **handler** 的函数和 **immediate** 方法来解决：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  watch: {
    // 使用对象写法，监视数据 text
    text: {
      // 使用 handler 方法，处理变化后的逻辑代码
      handler() {
        console.log('text 值发生改变了！！')
      },
      // immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码
      immediate: true,
    },
  },
}
</script>
```
