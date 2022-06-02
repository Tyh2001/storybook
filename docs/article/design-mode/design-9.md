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
