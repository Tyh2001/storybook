# 模板方法模式

## Coffee or Tea

下面用一个冲咖啡和泡茶的例子开始：

冲咖啡：

```js
class Coffee {
  boilWater() {
    console.log('把水烧沸')
  }
  makeCoffee() {
    console.log('用热水冲咖啡')
  }
  pourInCup() {
    console.log('把咖啡倒进杯子')
  }
  addMilk() {
    console.log('加牛奶')
  }
  init() {
    this.boilWater()
    this.makeCoffee()
    this.pourInCup()
    this.addMilk()
  }
}

const coffee = new Coffee()
coffee.init()

// 把水烧沸
// 用热水冲咖啡
// 把咖啡倒进杯子
// 加牛奶
```

泡茶：

```js
class Tea {
  boilWater() {
    console.log('把水烧沸')
  }
  makeCoffee() {
    console.log('用热水浸泡茶叶')
  }
  pourInCup() {
    console.log('把茶水倒进被子')
  }
  addLemon() {
    console.log('加柠檬')
  }
  init() {
    this.boilWater()
    this.makeCoffee()
    this.pourInCup()
    this.addLemon()
  }
}

const tea = new Tea()
tea.init()

// 把水烧沸
// 用热水浸泡茶叶
// 把茶水倒进被子
// 加柠檬
```

## 分离出共同点

我们发现，不管的冲咖啡还是泡茶，都是会有些公共点的，接下来我们创建一个公共的类，并带有这些方法，让那些不同的方法让子类进行重写

```js
class Beverage {
  boilWater() {
    console.log('把水烧沸')
  }
  makeCoffee() {}
  pourInCup() {}
  addCondiments() {}
  init() {
    this.boilWater()
    this.makeCoffee()
    this.pourInCup()
    this.addCondiments()
  }
}

class Coffee extends Beverage {
  makeCoffee() {
    console.log('用热水冲咖啡')
  }
  pourInCup() {
    console.log('把咖啡倒进杯子')
  }
  addCondiments() {
    console.log('加牛奶')
  }
}

class Tea extends Beverage {
  makeCoffee() {
    console.log('用热水浸泡茶叶')
  }
  pourInCup() {
    console.log('把茶水倒进被子')
  }
  addCondiments() {
    console.log('加柠檬')
  }
}

const coffee = new Coffee()
const tea = new Tea()

coffee.init()
tea.init()

// 把水烧沸
// 用热水冲咖啡
// 把咖啡倒进杯子
// 加牛奶
// 把水烧沸
// 用热水浸泡茶叶
// 把茶水倒进被子
// 加柠檬
```

## 更新缺陷

虽然上面方法可以实现想要的效果，但是如果子类并没有重写父类，那么就会导致执行的是父类的一个空函数，所以可以加入报错信息提示

```js
class Beverage {
  boilWater() {
    console.log('把水烧沸')
  }
  makeCoffee() {
    throw new Error('子类必须重写父类方法')
  }
  pourInCup() {
    throw new Error('子类必须重写父类方法')
  }
  addCondiments() {
    throw new Error('子类必须重写父类方法')
  }
  init() {
    this.boilWater()
    this.makeCoffee()
    this.pourInCup()
    this.addCondiments()
  }
}

class Coffee extends Beverage {
  makeCoffee() {
    console.log('用热水冲咖啡')
  }
  pourInCup() {
    console.log('把咖啡倒进杯子')
  }
  addCondiments() {
    console.log('加牛奶')
  }
}

class Tea extends Beverage {
  makeCoffee() {
    console.log('用热水浸泡茶叶')
  }
  pourInCup() {
    console.log('把茶水倒进被子')
  }
  addCondiments() {
    console.log('加柠檬')
  }
}

const coffee = new Coffee()
const tea = new Tea()

coffee.init()
tea.init()

// 把水烧沸
// 用热水冲咖啡
// 把咖啡倒进杯子
// 加牛奶
// 把水烧沸
// 用热水浸泡茶叶
// 把茶水倒进被子
// 加柠檬
```

## 钩子方法

在上面类中的 `addCondiments` 方法，是不同的饮料会加入不同的调味料，但是有些人可能并不需要调味料，所以就需要加入钩子方法进行判断

```js
class Beverage {
  boilWater() {
    console.log('把水烧沸')
  }
  makeCoffee() {
    throw new Error('子类必须重写父类方法')
  }
  pourInCup() {
    throw new Error('子类必须重写父类方法')
  }
  addCondiments() {
    throw new Error('子类必须重写父类方法')
  }
  // 钩子方法
  customerWantsCondiments() {
    return true
  }
  init() {
    this.boilWater()
    this.makeCoffee()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }
}

class Coffee extends Beverage {
  makeCoffee() {
    console.log('用热水冲咖啡')
  }
  pourInCup() {
    console.log('把咖啡倒进杯子')
  }
  addCondiments() {
    console.log('加牛奶')
  }
}

class Tea extends Beverage {
  makeCoffee() {
    console.log('用热水浸泡茶叶')
  }
  pourInCup() {
    console.log('把茶水倒进被子')
  }
  addCondiments() {
    console.log('加柠檬')
  }
  customerWantsCondiments() {
    return false
  }
}

const coffee = new Coffee()
const tea = new Tea()

coffee.init()
tea.init()

// 把水烧沸
// 用热水冲咖啡
// 把咖啡倒进杯子
// 加牛奶
// 把水烧沸
// 用热水浸泡茶叶
// 把茶水倒进被子
```

减少了加柠檬

## 其它写法

```js
function Beverage(params) {
  const boilWater = function () {
    console.log('把水烧沸')
  }
  const makeCoffee =
    params.makeCoffee ||
    function () {
      throw new Error('子类必须重写父类方法')
    }
  const pourInCup =
    params.pourInCup ||
    function () {
      throw new Error('子类必须重写父类方法')
    }
  const addCondiments =
    params.addCondiments ||
    function () {
      throw new Error('子类必须重写父类方法')
    }

  class F {
    init() {
      boilWater()
      makeCoffee()
      pourInCup()
      addCondiments()
    }
  }
  return F
}

const Coffee = Beverage({
  makeCoffee() {
    console.log('用热水冲咖啡')
  },
  pourInCup() {
    console.log('把咖啡倒进杯子')
  },
  addCondiments() {
    console.log('加牛奶')
  }
})

const Tea = new Beverage({
  makeCoffee() {
    console.log('用热水浸泡茶叶')
  },
  pourInCup() {
    console.log('把茶水倒进被子')
  },
  addCondiments() {
    console.log('加柠檬')
  }
})

const tea = new Tea()
const coffee = new Coffee()
tea.init()
coffee.init()

// 把水烧沸
// 用热水冲咖啡
// 把咖啡倒进杯子
// 加牛奶
// 把水烧沸
// 用热水浸泡茶叶
// 把茶水倒进被子
// 加柠檬
```
