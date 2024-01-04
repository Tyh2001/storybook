# Redux

## 简介

[redux](https://www.github.com/reduxjs/redux) 用于 react 中的全局状态管理

注意：倾阅读 [Why Redux Toolkit is How To Use Redux Today](https://redux.js.org/introduction/why-rtk-is-redux-today)

## 安装

```shell
pnpm i react-redux @reduxjs/toolkit
```

## 配置

可以查看入门示例[Redux Toolkit Quick Start](https://redux.js.org/tutorials/quick-start)

store/index.ts

```ts
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
```

main.ts

```tsx
import React from 'react'
import ReadDom from 'react-dom/client'
import { App } from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'

ReadDom.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
```
