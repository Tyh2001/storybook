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
    age: 12,
  }),
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
