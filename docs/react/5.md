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

也可以使用 [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate) 通过 js 跳转

```tsx
import { useNavigate } from 'react-router-dom'

const navigater = useNavigate()

const goPage = () => {
  navigater('/home')
}
```

第二关参数 state 可以传递路由 query 参数，并且使用 [useLocation](https://reactrouter.com/en/main/hooks/use-location) 获取参数

```tsx
const goPage = () => {
  navigater('/contacts/1', { state: { id: 123 } })
}
```

```tsx
import { useLocation } from 'react-router-dom'

const location = useLocation()

console.log(location.state.id)
```

## 路由 Loader

在路由执行前做点什么，loader 必须要有返回值，返回值不能是 undefined，可以是 null

```tsx
export const loader = () => {
  console.log('load')
  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    children: [
      {
        path: 'contacts/:id',
        element: <Contact />,
        errorElement: <ErrorPage />
      }
    ]
  }
])
```

想要在组件中获取到路由 loader 的返回值，可以使用 [useLoaderData](https://reactrouter.com/en/main/hooks/use-loader-data) 来获取到

```tsx
import { useLoaderData } from 'react-router-dom'

export function Root() {
  const data = useLoaderData()

  console.log(data)

  return (

  );
}

export const loader = () => {
  return { name: '张三', age: 12 }
}
```
