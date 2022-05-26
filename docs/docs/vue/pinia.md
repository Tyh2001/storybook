# Pinia

## 安装

```shell
npm i pinia
```

## 快速上手

在 `src` 下新建 `store/index.ts` 文件，并在 `main.ts` 中进行引入

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {})
```

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
```

## state

`state` 中可以定义数据，在组件中引入 `useStore` 函数进行提供使用

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    name: 'admin',
    age: 12
  })
})
```

```vue
<template>
  <h1>{{ store.name }}今年{{ store.age }}岁</h1>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
</script>
```

想要更改 `state` 中的值也是非常简单

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 定义数据
  state: () => ({
    counter: 0
  })
})
```

```vue
<template>
  <p>{{ store.counter }}</p>
  <button @click="change">更改</button>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
  function change() {
    store.counter++
  }
</script>
```

## getters

`getters` 相当于组件中的 `computed` 计算属性一样，可以使用箭头函数和普通函数进行返回

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 定义数据
  state: () => ({
    counter: 0,
  }),

  // 可以定义业务逻辑 可以异步获取数据
  actions: {
    increment() {
      this.counter++
    }
  }

  // 计算属性
  getters: {
    // 箭头函数定义
    doubleCountTwo: (state) => state.counter + 2,

    // 普通函数
    doubleCount(state): number {
      return state.counter * 2
    },

    // 通过函数计算
    doublePlusOne(): number {
      return this.doubleCount + 1
    },
  },
})
```

```vue
<template>
  <h2>{{ store.doubleCountTwo }}</h2>
  <h2>{{ store.doubleCount }}</h2>
  <h2>{{ store.doublePlusOne }}</h2>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
</script>
```

## action

`action` 可以异步获取数据

```ts
// store/index.ts
```
