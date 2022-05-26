# Vuex

## 安装

在 vue3 的项目中使用 vuex 首先需要下载：

```shell
npm install vuex@next
```

## 快速上手

Vuex 就相当于我们项目中的大管家，集中式存储管理应用的所有组件的状态。

在 `src/store` 中先新建 `index.js`，在下面的代码中，我们使用 `createStore` 来创建一个数据存储，我们称之为 `store`

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: '这是 vuex 中的数据'
  },
  mutations: {
    /**
     * 改变 state.text 的值
     * @param { object } state state 对象
     * @param { text } data 修改的值
     */
    changeText(state, data) {
      state.text = data
    }
  }
})

export default store
```

接下来在 `main.js` 中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

在组件中，可以引入`import { useStore } from 'vuex'` 来获取数据源，并可以提供给模板使用

```vue
<template>
  <h1>{{ store.state.text }}</h1>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  console.log(store.state.text)
</script>
```

如果想要改变 `text` 的值，那么就需要使用 `store.commit()` 方法进行修改

```vue
<template>
  <h1>{{ store.state.text }}</h1>
  <button @click="change">改变值</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  function change() {
    store.commit('changeText', '改变了！！')
  }
</script>
```

下面分别来说明一下 vuex 中的核心方法

## state

数据都定义在这里

## mutations

修改 state 中的数据必须要使用 mutations 进行修改，mutation 的设计就是用来实现同步地修改数据，不能修改异步的数据

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: 1
  },
  mutations: {
    changeText(state, data) {
      state.text++
    }
  }
})

export default store
```

## getters

相当于计算属性，操作 state 中的计算逻辑可以直接写在 getters 中，函数可以直接返回给全局使用

**vuex**

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: 1
  },
  mutations: {
    changeText(state, data) {
      state.text++
    }
  },
  getters: {
    double(state) {
      return state.text * 2
    }
  }
})

export default store
```

**app.vue**

```vue
<template>
  <h1>{{ double }}</h1>
  <button @click="change">改变值</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  const store = useStore()
  function change() {
    store.commit('changeText')
  }
  const double = computed(() => {
    return store.getters.double
  })
</script>
```

## action

用于修改异步的数据，**action 并不是直接修改数据，而是通过 mutations 去修改，在 actions 中要解构出 commit 函数 用于提交 mutations**，之后再通过 mutations 修改 state 中的值

**vuex**

```js
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    list: []
  },
  mutations: {
    changeList(state, data) {
      state.list = data
    }
  },
  actions: {
    // 解构出 commit 函数 用于提交 mutations
    loadList({ commit }) {
      axios({
        method: 'GET',
        url: 'https://infinitymcn.com/citi/citi-form-backend/public/index.php/index/Vote/getVoteRes'
      }).then((res) => {
        commit('changeList', res.data)
      })
    }
  }
})

export default store
```

**app.vue**

有一点需要注意的是，在组件中调用 `actions` 中的函数，需要使用 **store.dispatch** 方法

```vue
<template>
  <button @click="load">获取数据</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  function load() {
    store.dispatch('loadList')
  }
</script>
```
