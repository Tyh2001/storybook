# 享元模式

## 初始享元模式

假设有一个内衣厂，目前产品有 20 种男士内衣和 50 种女士内衣，工程决定找模特穿上拍照，也许需要找 50 个男人和 50 个女人来进行拍照，代码如下：

```js
class Model {
  constructor(sex, underwear) {
    this.sex = sex // 性别
    this.underwear = underwear // 内衣
  }
  takePhoto() {
    console.log(`性别：${this.sex}，内衣：${this.underwear}`)
  }
}

for (let i = 0; i < 50; i++) {
  const model = new Model('男', i)
  model.takePhoto()
}

for (let i = 0; i < 50; i++) {
  const model = new Model('女', i)
  model.takePhoto()
}

// 打印日志省略
```

我们可见，上面直接创建出了 100 个对象，但是如果数量量更大，那么创建出了更多的对象，对于性能，是有巨大损伤的

但是换一种思路，其实我们只需要男人和女人各一个就完全可以实现，只要让他们穿上不同的内衣即可。那么代码如下：

```js
class Model {
  constructor(sex, underwear) {
    this.sex = sex // 性别
  }
  takePhoto() {
    console.log(`性别：${this.sex}，内衣：${this.underwear}`)
  }
}

const modelMan = new Model('男')
const modelFemale = new Model('女')

for (let i = 0; i < 50; i++) {
  modelMan.underwear = i
  modelMan.takePhoto()
}

for (let i = 0; i < 50; i++) {
  modelFemale.underwear = i
  modelFemale.takePhoto()
}
```

改进后的例子中，就只是创建了两个对象就解决了问题

## 内部状态和外部状态
