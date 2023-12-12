# Node

## 全局变量

使用 `global` 定义 node 全局变量，在浏览器环境是不能使用的

在 ECMAscript 2020 的时候提供了 `globalThis` API，在浏览器环境和 node 环境的通用的

js 由于三部分组件 ECMAscript、DOM、BOM

## 内置 API

- \_\_dirname

获取当前执行文件的绝对路径

- \_\_filename

获取当前执行的文件据对路径

- Buffer

处理二进制数据

- process

获取到执行命令后面所跟的参数，返回一个数组

## JSDO

使用 js 模拟 dom

```shell
npm i jsdom
```

## CSR

客户端渲染

## SSR

服务端渲染

## SEO

讲究 TDK

分别是：title、description、Keywords

## path 模块

主要负责处理路径相关操作

## os 模块

主要和操作系统交互的操作

`os.platform()` 获取操作平台
`os.release()` 获取系统版本
`os.version()` 获取系统版本号
`os.homedir()` 获取用户所在目录

`{open:true}` 的启动命令就是根据不同的操作系统调用不同的 shell 文件

```js
const os = require('os')
const { exec } = require('child_process')

const platform = os.platform()

const open = (url) => {
  if (platform === 'win32') {
    exec(`start ${url}`)
  } else if (platform === 'darwin') {
    exec(`open ${url}`)
  } else if (platform === 'linux') {
    exec(`sdg-open ${url}`)
  }
}

open('http://baidu.com')
```

## process

`process.exit` 结束进程
`process.env` 环境变量

安装 cross-evt 配置环境变量

## ffmpeg