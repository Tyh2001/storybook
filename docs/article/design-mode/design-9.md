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
