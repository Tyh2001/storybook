---
sidebar_position: 3
---

# Vue Router

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
