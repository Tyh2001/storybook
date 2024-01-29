# 项目搭建

## 命令

```shell
npx create-react-app 项目名称
```

## 父子组件传值

```tsx
import { Component } from 'react'

const Header = (prop) => {
  return (
    <>
      <h1>{prop}</h1>
    </>
  )
}

export class App extends Component {
  state = {
    value: 'shuru',
    text: '哈哈哈哈'
  }

  render() {
    return (
      <>
        <Header a="哈哈哈哈" b={this.state.value} />
      </>
    )
  }
}
```

传递全部的值

```tsx
import { Component } from 'react'

const Header = (prop) => {
  console.log(prop)
  return (
    <>
      <h1>{prop.value}</h1>
      <h1>{prop.text}</h1>
    </>
  )
}

export class App extends Component {
  state = {
    value: 'shuru',
    text: '这是'
  }

  render() {
    return (
      <>
        <Header {...this.state} />
      </>
    )
  }
}
```

## 子组件给父组件传值

父组件给子组件传递一个方法，子组件调用父组件方法，将需要修改的值以参数的形式传递给父组件

```tsx
import { Component } from 'react'

const Header = (prop) => {
  const onChange = (e) => {
    prop.change(e.target.value)
  }

  return (
    <>
      <h1>{prop.value}</h1>
      <h1>{prop.text}</h1>
      <input type="text" onChange={onChange} />
    </>
  )
}

export class App extends Component {
  state = {
    value: ''
  }

  changeText = (value) => {
    this.setState({ value })
  }

  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <Header change={this.changeText} />
      </>
    )
  }
}
```

## 参数校验

安装 [prop-types](https://www.npmjs.com/package/prop-types)

```shell
pnpm i prop-types
```

```tsx
import { Component } from 'react'
import PropType from 'prop-types'

class MyCom extends Component {
  render = () => {
    return <div>MyCom组件{this.props.text}</div>
  }
}

// 参数校验
MyCom.propTypes = {
  text: PropType.string
  // num: PropType.number.isRequired
}

// 设置组件参数默认值
MyCom.defaultProps = {
  num: 22222
}

export class App extends Component {
  state = {
    value: ''
  }

  render() {
    return (
      <>
        <MyCom text={123} />
      </>
    )
  }
}
```

## 跨组件通信

- 可以使用组件的 props 层层传递的方式

- 使用 [createContext](https://react.docschina.org/reference/react/createContext)

```tsx
// App.tsx
import { Parent } from './Parent'
import MainContext from './context'
import React from 'react'

export class App extends React.Component {
  params = {
    name: '张三',
    age: 12
  }

  render() {
    return (
      <div>
        <MainContext.Provider value={this.params}>
          main
          <Parent />
        </MainContext.Provider>
      </div>
    )
  }
}
```

```tsx
// Parent.tsx
import { Child } from './Child'
import React from 'react'
import MainContext from './context'

export class Parent extends React.Component {
  static contextType = MainContext

  render() {
    console.log(this.context)

    return (
      <div>
        父亲节点{this.context.name}
        <Child />
      </div>
    )
  }
}
```

```tsx
// Child.tsx
import React from 'react'
import MainContext from './context'

export class Child extends React.Component {
  // static contextType = MainContext

  render() {
    return (
      <div>
        <MainContext.Consumer>
          {(context) => {
            return <div> 孩子节点{context.age}</div>
          }}
        </MainContext.Consumer>
      </div>
    )
  }
}
```

```ts
// context.ts
import React from 'react'

const MainContext = React.createContext({ name: '', age: 0 })

export default MainContext
```

## 生命周期

只有 `extends React.Component` 的组件才会有生命周期。

- 组件初始化阶段 `constructor`
- 组件加载阶段 `componentWillMount`
- 组件更新阶段 `render`
- 组建加载完成阶段 `componentDidMount`

```tsx
import React from 'react'

class Button extends React.Component {
  constructor(props: { text: string }) {
    super(props)
    this.state = {
      ...props
    }

    console.log('1. 组件初始化')
  }

  componentWillMount() {
    console.log('2. 组件加载之前')
  }

  render() {
    console.log('3. 组件加载或者更新')
    return <button>{this.state.text}</button>
  }

  componentDidMount() {
    console.log('4. 组件加载之后，可以获取到 DOM 节点')
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Button text="按钮" />
      </div>
    )
  }
}
```

## 高阶组件 HOC

和高阶函数的感念一样，传入一个函数组件，返回一个新的组件

```tsx
import { Component, ReactNode } from 'react'

const PropsButton = (WrapCompoent) => {
  return class extends Component {
    state = {
      text: ''
    }

    componentDidMount(): void {
      this.setState({ text: '按钮' })
    }

    render(): ReactNode {
      return <WrapCompoent buttonText={this.state.text}></WrapCompoent>
    }
  }
}

class _Button extends Component {
  render() {
    return <button>{this.props.buttonText}</button>
  }
}

const Button = PropsButton(_Button)

export class App extends Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    )
  }
}
```

## 增强 Props

```tsx
import { Component } from 'react'

const setProps = (ComponentNode) => {
  return (props) => {
    return <ComponentNode {...props} name="张三" />
  }
}

class People extends Component {
  render() {
    return (
      <div>
        <div>姓名：{this.props.name}</div>
        <div>年龄：{this.props.age}</div>
        <div>爱好：{this.props.play}</div>
      </div>
    )
  }
}

const Button = setProps(People)

export class App extends Component {
  render() {
    return (
      <div>
        <Button age="12" play="足球" />
      </div>
    )
  }
}
```
