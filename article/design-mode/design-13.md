# 状态模式

## 初识状态模式

比如有一个电灯，通过点击按钮可以实现开灯和关灯两种状态，代码如下：

```js
class Light {
  constructor() {
    this.state = true
    this.button = null
  }
  init() {
    const button = document.createElement('button')
    button.innerText = '开关'
    this.button = button
    document.body.appendChild(button)
    button.addEventListener('click', () => {
      this.lightChange()
    })
  }
  lightChange() {
    if (this.state) {
      console.log('开灯')
      this.state = false
      return
    }
    console.log('关灯')
    this.state = true
  }
}

const light = new Light()
light.init()
```

## 使用状态模式改进

上面的类完成当前的效果是没有任何问题的，但是如果还需要再加一种状态，那么可能就要再新增一个判断，可以想象，如果一个事物状态过多，或者需要新增、删除状态的时候，都要在函数内部来更改，这是完全不符合开放封闭原则的

下面使用状态模式改写，将每种状态都封装成单独的类

```js
class State1 {
  constructor(light) {
    this.light = light
  }
  changeState() {
    console.log('强光')
    this.light.setState(this.light.state2)
  }
}

class State2 {
  constructor(light) {
    this.light = light
  }
  changeState() {
    console.log('弱光')
    this.light.setState(this.light.state3)
  }
}

class State3 {
  constructor(light) {
    this.light = light
  }
  changeState() {
    console.log('关灯')
    this.light.setState(this.light.state1)
  }
}

class Light {
  constructor() {
    this.state1 = new State1(this)
    this.state2 = new State2(this)
    this.state3 = new State3(this)
    this.button = null
  }
  init() {
    const button = document.createElement('button')
    button.innerText = '开关'
    this.button = button
    this.currentState = this.state1
    document.body.appendChild(button)
    button.addEventListener('click', () => {
      this.currentState.changeState()
    })
  }
  setState(newState) {
    this.currentState = newState
  }
}

const light = new Light()
light.init()
```

这样后续扩展起来只需要新增即可，并不需要修改原函数
