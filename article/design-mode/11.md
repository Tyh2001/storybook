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

- 内部状态存储于对象内部
- 内部状态可以被一些对象共享
- 内部状态独立于具体从场景，通常不会改变
- 外部状态取决于具体场景，根据场景而变化，外部状态不能被共享

## 对象爆炸

下面例子中，是一个上传文件的例子，每上传一个文件都新建一个对象，如果对象过多，对于性能的损耗是极大的

```js
class UpLoad {
  constructor(uploadType, fileName, fileSize) {
    this.uploadType = uploadType
    this.fileName = fileName
    this.fileSize = fileSize
  }
  // 初始化
  init() {
    this.dom = document.createElement('div')
    this.dom.innerHTML = `
          <span>文件名称：${this.fileName} 文件大小：${this.fileName}</span>
          <button class="delete">删除</button>
        `
    this.dom.querySelector('.delete').addEventListener(
      'click',
      () => {
        this.delFile()
      },
      false
    )
    document.body.appendChild(this.dom)
  }
  // 删除
  delFile() {
    if (this.fileSize < 3000) {
      return this.dom.parentNode.removeChild(this.dom)
    }
    if (window.confirm(`确定删除吗？${this.fileName}`)) {
      return this.dom.parentNode.removeChild(this.dom)
    }
  }
}

function startUpload(uploadType, files) {
  files.map((file, index) => {
    const upload = new UpLoad(uploadType, file.fileName, file.fileSize)
    upload.init()
  })
}

startUpload('plugin', [
  { fileName: '1.txt', fileSize: 1000 },
  { fileName: '2.txt', fileSize: 3000 },
  { fileName: '3.txt', fileSize: 5000 }
])

startUpload('plugin', [
  { fileName: '4.txt', fileSize: 1000 },
  { fileName: '5.txt', fileSize: 3000 },
  { fileName: '6.txt', fileSize: 5000 }
])
```

## 享元模式重构文件上传

上面例子中，要先明确的是 `uploadType` 其实是一个内部状态，再将外部状态抽离即可，代码如下：
