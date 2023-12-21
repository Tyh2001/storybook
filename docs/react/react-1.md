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

更多时候最好使用无状态的组件，因为有状态组件一旦触发它的生命周期函数，就会影响性能开销

## 事件处理

使用 `setState` 来更新 `state` 的状态

```tsx
import React from 'react'

class Button extends React.Component {
  state = {
    name: '哈哈哈',
    text: 1
  }

  setText = () => {
    this.setState({ text: this.state.text + 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.setText}>
          {this.props.text}
          {this.state.name}
        </button>
      </div>
    )
  }
}
```

## 数据绑定

以文本框输入举例 `defaultValue` 可设置默认值

单选框使用 `defayltChecked` 设置默认值

```tsx
import React from 'react'

export class App extends React.Component {
  state = {
    value: '123'
  }

  onChange = (evt) => {
    this.setState({ value: evt.target.value })
  }

  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <input
          type="text"
          defaultValue={this.state.value}
          onChange={this.onChange}
        />
      </>
    )
  }
}
```
