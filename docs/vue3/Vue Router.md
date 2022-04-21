---
sidebar_position: 3
---

## 安装

```shell
npm install vue-router@4
```

## 快速上手

基础配置

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
```

## 在组件中使用

Vue3 的 setup 语法糖内部并没有 `this.$router` 和 `this.$route` 方法，需要我们手动引入进行使用

```js
// 引入方法
import { useRouter, useRoute } from 'vue-router'

// 使用
const router = useRouter()
const route = useRoute()
```

完整实例

```vue
<template>
  <button @click="onPush">跳转</button>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
function onPush() {
  router.push('/')
}
</script>
```

## getCurrentInstance

在 vue 内置了 [getCurrentInstance](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance) 函数，也可以实现路由的跳转

完整实例

```vue
<template>
  <button @click="onPush">跳转</button>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { proxy }: any = getCurrentInstance()

function onPush() {
  proxy.$router.push('/')
}
</script>
```
