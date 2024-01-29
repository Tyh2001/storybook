# Vue Router

## 安装

```shell
npm install vue-router
```

## 快速上手

基础配置

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

## 使用

再组件中使用 `router` 和 `route` 需要在 `vue-router` 中引入进行使用

```ts
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
```

## 没有安装路由

如果你连 `vue-router` 都没用安装，还需要进行导航栏地址的改变，也可以使用 `vue` 内部的 `getCurrentInstance` 方法获取当前组件实例，从而获取 `route` 和 `router`

```ts
import { getCurrentInstance } from 'vue'

import type { ComponentInternalInstance } from 'vue'

const instance: ComponentInternalInstance =
  getCurrentInstance() as ComponentInternalInstance

console.log(instance.appContext.config.globalProperties.$route)
console.log(instance.appContext.config.globalProperties.$router)
```
