# React 基础

## 定义 class

所有的 `class` 类名都使用 `className` 来定义

## 无状态组件传值

```tsx
const Button = (props) => {
  return <button>{props.text}</button>
}

export const App = () => {
  return (
    <>
      <Button text="按钮" />
    </>
  )
}
```

## 有状态组件

使用 `class` 类定义的组件，继承至 `React.Component` 的组件称之为有状态组件。

有状态组件有 `state` 进行状态管理，同时还要 `props` 生命周期函数

`render` 方法用于渲染。

## 有状态组件传值

```tsx
import React from 'react'

class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>
  }
}

export const App = () => {
  return (
    <>
      <Button text="按钮" />
    </>
  )
}
```

## 组件状态

```tsx
import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '哈哈哈'
    }

    console.log(this.props)
  }
  render() {
    return <button>{this.props.text}</button>
  }
}

export const App = () => {
  return (
    <>
      <Button text="按钮" />
    </>
  )
}
```

## state 简化

开发中尽量不是使用简化版本

```tsx
import React from 'react'

class Button extends React.Component {
  state = {
    name: '哈哈哈'
  }

  render() {
    return (
      <button>
        {this.props.text}
        {this.state.name}
      </button>
    )
  }
}

export const App = () => {
  return (
    <>
      <Button text="按钮" />
    </>
  )
}
```
