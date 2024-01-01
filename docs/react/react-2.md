# Router

## 说明

React 的声明式路由[react-router](https://github.com/remix-run/react-router)

官方文档 [教程](https://reactrouter.com/en/main/start/tutorial#tutorial)

## 安装

```shell
pnpm i react-router-dom
```

## Browser Router 配置

使用 [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router) 创建路由，使用 [RouterProvider](https://reactrouter.com/en/main/router-components/browser-router) 传入路由配置的返回值

```tsx
import React from 'react'
import ReadDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{ path: '/', element: <h1>首页</h1> }])

ReadDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
```

## 嵌套路由

使用 `children` 可以配置字路由，在需要路由经过的路口使用 [<Outlet />](https://reactrouter.com/en/main/components/outlet) 组件实现嵌套

```ts
import { Outlet } from 'react-router-dom'
```

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts/:id',
        element: <Contact />,
        errorElement: <ErrorPage />
      }
    ]
  }
])
```

## 路由跳转

使用 [Link](https://reactrouter.com/en/main/components/link) 组件可以实现跳转

```tsx
import { Link } from 'react-router-dom'
```

```tsx
<Link to="/contacts/1">Your Name</Link>
```
