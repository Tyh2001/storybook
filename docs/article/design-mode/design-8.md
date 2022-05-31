# 命令模式

## 使用场景

比如有时候需要像某些对象发送请求，但是并不知道请求的接受者是谁，也不知道被请求的操作是什么。此时需要一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够清楚彼此之间的耦合关系

## 菜单程序

下面以一个菜单的程序，来描述一个命令模式

```html
<button id="btn1">刷新</button>
<button id="btn2">增加</button>
<button id="btn3">删除</button>

<script>
  const btn1 = document.getElementById('btn1')
  const btn2 = document.getElementById('btn2')
  const btn3 = document.getElementById('btn3')

  // 安装命令函数
  function setCommand(btn, command) {
    btn.addEventListener('click', () => {
      command.execute()
    })
  }

  // 定义功能
  const menuBar = {
    refresh() {
      console.log('刷新菜单')
    }
  }

  const subMenu = {
    add() {
      console.log('增加菜单')
    },
    del() {
      console.log('删除菜单')
    }
  }

  // 封装命令
  class RefreshMenuBarCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    execute() {
      this.receiver.refresh()
    }
  }

  class AddSubMenuCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    execute() {
      this.receiver.add()
    }
  }

  class DelSubMenuCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    execute() {
      this.receiver.del()
    }
  }

  // 安装命令
  const refreshMenuBarCommand = new RefreshMenuBarCommand(menuBar)
  const addSubCommand = new AddSubMenuCommand(subMenu)
  const delSubMenuCommand = new DelSubMenuCommand(subMenu)

  setCommand(btn1, refreshMenuBarCommand)
  setCommand(btn2, addSubCommand)
  setCommand(btn3, delSubMenuCommand)
</script>
```

## JavaScript 中的命令模式

上面的命令模式中，也许我们会感觉到奇怪，所谓的命令模式，看起来就说给给对象取了一个 `execute` 名字，把简单的事件复杂化了，即使不用什么设计模式，也可以寥寥几行代码实现

也可以使用闭包来实现效果：

```html
<button id="btn1">刷新</button>
<script>
  const btn1 = document.getElementById('btn1')

  function setCommand(btn, fn) {
    btn.addEventListener('click', () => {
      fn()
    })
  }

  const menuBar = {
    refresh() {
      console.log('刷新菜单')
    }
  }

  function RefreshMenuBarCommand(receiver) {
    return function () {
      receiver.refresh()
    }
  }

  const refreshMenuBarCommand = RefreshMenuBarCommand(menuBar)
  setCommand(btn1, refreshMenuBarCommand)
</script>
```

但是为了更好的使用命令模式，除了执行命令的方法外，后续可能还有撤销命令的操作
