# 组合模式

## 什么是组合模式

在程序中，可能有些事物是由一些子事物所构成的。组合模式就是用小对象来构建出更大的对象，而这些小对象本身也是由更多的小对象构成的，这就说组合模式

## 回顾宏命令

在上一节的`命令模式中`，可以回顾一下宏命令：

```js
const closeDoor = {
  execute() {
    console.log('关门')
  }
}

const openPc = {
  execute() {
    console.log('开电脑')
  }
}

const loginQQ = {
  execute() {
    console.log('登陆QQ')
  }
}

function MacroCommand() {
  return {
    commandList: [],
    add(command) {
      this.commandList.push(command)
    },
    execute() {
      this.commandList.map((item) => {
        item.execute()
      })
    }
  }
}

const macroCommand = MacroCommand()
macroCommand.add(closeDoor)
macroCommand.add(openPc)
macroCommand.add(loginQQ)

macroCommand.execute()

// 关门
// 开电脑
// 登陆QQ
```

以宏命令为例，请求从树的顶端往下传递，如果当前处于的是叶对象（普通子命令），那么就会执行相应的操作。但是请求处理的是组合对象（宏命令），那么就会继续遍历它是子节点。

## 更强大的宏命令

上面例子中，只是完成了关门、开电脑、打开 QQ 这几个简单命令，接下来来实现一个超级宏命令，来实现下面功能：

- 打开空调
- 打开电视和音响
- 关门、开电脑、打开 QQ

下面以 `button` 来当作这个超级命令的遥控器，代码如下：

```html
<button id="btn">超级遥控器</button>
<script>
  const btn = document.getElementById('btn')

  // 定义宏命令
  function MacroCommand() {
    return {
      commandsList: [],
      add(command) {
        this.commandsList.push(command)
      },
      execute() {
        this.commandsList.map((item) => {
          item.execute()
        })
      }
    }
  }

  // 打开空调
  const openAc = {
    execute() {
      console.log('打开空调')
    }
  }

  // 打开电视和打开音响的命令
  const openTv = {
    execute() {
      console.log('打开电视')
    }
  }

  const openSound = {
    execute() {
      console.log('打开音响')
    }
  }

  const macroCommand1 = MacroCommand()
  macroCommand1.add(openTv)
  macroCommand1.add(openSound)

  // 关门、打开电脑、登陆 QQ 的命令
  const closeDoor = {
    execute() {
      console.log('关门')
    }
  }

  const openPc = {
    execute() {
      console.log('打开电脑')
    }
  }

  const loginQQ = {
    execute() {
      console.log('登陆QQ')
    }
  }

  const macroCommand2 = MacroCommand()
  macroCommand2.add(closeDoor)
  macroCommand2.add(openPc)
  macroCommand2.add(loginQQ)

  // 组合成为超级命令
  const macroCommand = MacroCommand()
  macroCommand.add(openAc)
  macroCommand.add(macroCommand1)
  macroCommand.add(macroCommand2)

  document.getElementById('btn').addEventListener('click', () => {
    macroCommand.execute()
  })

  // 打开空调
  // 打开电视
  // 打开音响
  // 关门
  // 打开电脑
  // 登陆QQ
</script>
```

## 安全问题

在上面例子中，其实是存在一些安全问题的，因为很多时候并不清楚谁是组合对象谁是叶对象，但是它们在本质上是有区别的。比如试图在叶对象上再继续添加叶对象。解决方案是在叶对象上叶增加 `add` 方法，来抛出一个异常提示叶对象不能再继续添加，代码如下：

```js
function MacroCommand() {
  return {
    commandsList: [],
    add(command) {
      this.commandsList.push(command)
    },
    execute() {
      this.commandsList.map((item) => {
        item.execute()
      })
    }
  }
}

const openAc = {
  execute() {
    console.log('打开空调')
  },
  add() {
    throw new Error('叶对象上不能再继续添加叶对象')
  }
}

const openTv = {
  execute() {
    console.log('打开电视')
  },
  add() {
    throw new Error('叶对象上不能再继续添加叶对象')
  }
}

const macroCommand = MacroCommand()

macroCommand.add(openAc)
openAc.add(openTv)
```

## 扫描文件夹

文件夹是非常符合组合模式来进行描述，下面是一个文件夹相关的例子：

```js
// 文件夹类
class Folder {
  constructor(name) {
    this.name = name
    this.files = []
  }
  add(file) {
    this.files.push(file)
  }
  scan() {
    console.log(`开始扫描文件夹：${this.name}`)
    this.files.map((item) => {
      item.scan()
    })
  }
}

// 文件类
class File {
  constructor(name) {
    this.name = name
  }
  add() {
    throw new Error(' 文件下面不能添加文件')
  }
  scan() {
    console.log(`开始扫描文件夹：${this.name}`)
  }
}

// 创建文件夹和文件对象，让它们进行组合
const folder = new Folder('学习资料')
const folder1 = new Folder('js 学习资料')
const folder2 = new Folder('css 学习资料')

const file1 = new File('vue.js 设计与实现')
const file2 = new File('学习 JavaScript 数据结构与算法')
const file3 = new File('css 选择器世界')

folder1.add(file1)
folder1.add(file2)
folder2.add(file3)

folder.add(folder1)
folder.add(folder2)

folder.scan()

// 开始扫描文件夹：学习资料
// 开始扫描文件夹：js 学习资料
// 开始扫描文件夹：vue.js 设计与实现
// 开始扫描文件夹：学习 JavaScript 数据结构与算法
// 开始扫描文件夹：css 学习资料
// 开始扫描文件夹：css 选择器世界
```

## 引用父对象

上面演示的文件夹例子中，有可以是要有删除文件的操作，有时候需要让请求从子节点往父节点上冒泡传递的。当我们需要删除某个文件的时候，实际上是从这个文件所在的上层文件夹中删除该文件的。

下面来改写一下上面文件的例子，使扫描之前，我们可以移除一个具体的文件。

```js
// 文件夹类
class Folder {
  constructor(name) {
    this.name = name
    this.files = []
    this.parent = null // 增加 parent 属性
  }
  add(file) {
    file.parent = this
    this.files.push(file)
  }
  scan() {
    console.log(`开始扫描文件夹：${this.name}`)
    this.files.map((item) => {
      item.scan()
    })
  }
  // 新增移除方法
  remove() {
    if (!this.parent) {
      return
    }
    this.parent.files.map((item, index) => {
      if (item === this) {
        this.parent.files.splice(index, 1)
      }
    })
  }
}

// 文件类
class File {
  constructor(name) {
    this.name = name
    this.parent = null
  }
  add() {
    throw new Error(' 文件下面不能添加文件')
  }
  scan() {
    console.log(`开始扫描文件夹：${this.name}`)
  }
  // 新增删除方法
  remove() {
    if (!this.parent) {
      return
    }
    this.parent.files.map((item, index) => {
      if (item === this) {
        this.parent.files.splice(index, 1)
      }
    })
  }
}

const folder = new Folder('学习资料')
const folder1 = new Folder('js 学习资料')
const folder2 = new Folder('css 学习资料')

const file1 = new File('vue.js 设计与实现')
const file2 = new File('学习 JavaScript 数据结构与算法')
const file3 = new File('css 选择器世界')

folder1.add(file1)
folder1.add(file2)
folder2.add(file3)

folder.add(folder1)
folder.add(folder2)

folder2.remove()
folder.scan()

// 开始扫描文件夹：学习资料
// 开始扫描文件夹：js 学习资料
// 开始扫描文件夹：vue.js 设计与实现
// 开始扫描文件夹：学习 JavaScript 数据结构与算法
```
