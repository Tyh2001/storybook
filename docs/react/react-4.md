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
