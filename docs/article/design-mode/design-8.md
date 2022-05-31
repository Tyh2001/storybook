# 命令模式

## 使用场景

比如有时候需要像某些对象发送请求，但是并不知道请求的接受者是谁，也不知道被请求的操作是什么。此时需要一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够清楚彼此之间的耦合关系

## 菜单程序

```html
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>
<button id="btn3">按钮3</button>
<script>
  const btn1 = document.getElementById('btn1')
  const btn2 = document.getElementById('btn2')
  const btn3 = document.getElementById('btn3')

  function setCommand(btn, command) {
    btn.addEventListener('click', () => {
      command.execute()
    })
  }

  const MenuBar = {
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

  class RefreshMenuBarCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    execute() {
      this.receiver.refresh()
    }
  }

  class AddSubCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    add() {
      this.receiver.add()
    }
  }

  class DelSubCommand {
    constructor(receiver) {
      this.receiver = receiver
    }
    execute() {
      console.log('删除子菜单')
    }
  }
</script>
```
