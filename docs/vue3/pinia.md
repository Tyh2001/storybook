# Pinia

## 安装

```shell
npm i pinia
```

## 快速上手

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

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
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
