# API

## useState

用于再函数式组件中定义 state 变量

用法

```tsx
import { useState } from 'react'

export const App = () => {
  const [state, setState] = useState(1)

  return (
    <>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>增加</button>
    </>
  )
}
```

## useStateFn

函数式状态

```tsx
import { useState } from 'react'

export const App = () => {
  const [state, setState] = useState(() => 1)

  const add = () => {
    setState((num) => {
      console.log(num)
      return (num += 1)
    })
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={add}>增加</button>
    </>
  )
}
```

## useEffect

函数式组件没有生命周期，可以使用 [useEffect](https://react.docschina.org/reference/react/useEffect)，可以把它看作：组件加载、组件更新、组件卸载的三个生命周期的结合。所有的操作都可以在这里面做。

它在每次渲染完成之后，和更新之前都会执行一次

```tsx
import { useState, useEffect } from 'react'

export const App = () => {
  const [state, setState] = useState(() => 1)

  useEffect(() => {
    document.title = `点击了${state}次`
  })

  const add = () => {
    setState((num) => {
      return (num += 1)
    })
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={add}>增加</button>
    </>
  )
}
```

第二个参数可以传递一个数组，传递依赖项，如果传递空数组，就只会在组件加载的时候执行，也可以传递依赖项的配置，在依赖项改变之后执行

```tsx
import { useState, useEffect } from 'react'

export const App = () => {
  const [state, setState] = useState(() => 1)

  useEffect(() => {
    document.title = `点击了${state}次`
  }, [state])

  const add = () => {
    setState((num) => {
      return (num += 1)
    })
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={add}>增加</button>
    </>
  )
}
```

清楚计时器

```tsx
import { useState, useEffect } from 'react'

export const App = () => {
  const [state, setState] = useState(1)

  const timmer = useEffect(() => {
    setInterval(() => {
      setState((num) => num + 1)
    }, 1000)

    return () => clearInterval(timmer)
  }, [])

  return (
    <>
      <div>{state}</div>
    </>
  )
}
```

## createRef

可以获取到 DOM 元素，每一项冲洗渲染都会创建一个新的 ref 对象

```tsx
import { useEffect, createRef } from 'react'

export const App = () => {
  const inputRef = createRef()

  useEffect(() => {
    console.log(inputRef.current)
  })

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}
```

## useRef

可以获取到 DOM 元素，第一次渲染完成创建一个对象之后，之后重新渲染的时候，如果发现在这个对象创建过，就不会创建新的对象了，所以性能会好一些

```tsx
import { useEffect, useRef } from 'react'

export const App = () => {
  const inputRef = useRef()

  useEffect(() => {
    console.log(inputRef.current)
  })

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}
```

## useReducer

`useReducer` 第一关参数是一个函数，第二个参数是初始值

```tsx
import { useReducer } from 'react'

export const App = () => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action === 'add') {
      return state + 1
    } else if (action === 'prev') {
      return state - 1
    }

    return state
  }, 0)

  return (
    <>
      <div>{state}</div>
      <button onClick={() => dispatch('add')}>增加</button>
      <button onClick={() => dispatch('prev')}>减少</button>
    </>
  )
}
```
