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
