# Node

## 全局变量

使用 `global` 定义 node 全局变量，在浏览器环境是不能使用的

在 ECMAscript 2020 的时候提供了 `globalThis` API，在浏览器环境和 node 环境的通用的

js 由于三部分组件 ECMAscript、DOM、BOM

## 查看可运行的命令

```shll
npm ls -g
```

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

可以实现视频格式转换、添加水印、去除水印

## events

针对事件操作，发布订阅模式

## util

内置工具模块

## pngquant

处理 png 图像，可压缩，类似 ffmpeg

## fs

读取文件

## crypto

加密模块

对称加密

```js
const crypto = require('node:crypto')

// console.log(crypto)

const key = crypto.randomBytes(32)
const iv = Buffer.from(crypto.randomBytes(16))

// 算法
// key
// iv
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

cipher.update('你好啊', 'utf-8')

const result = cipher.final('hex')

console.log(result)

// 解密

const de = crypto.createDecipheriv('aes-256-cbc', key, iv)

de.update(result, 'hex', 'utf-8')

const result2 = de.final('utf-8')

console.log(result2)
```

非对称加密

```js
const crypto = require('node:crypto')

// 公钥和私钥
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048
})

// 公钥加密
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('加密的内容'))

console.log(encrypted.toString('hex'))

// 私钥解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted)

console.log(decrypted.toString())
```

哈希函数 - 不能解密

```js
const crypto = require('node:crypto')

const hash = crypto.createHash('sha256') // 或者使用 md5

hash.update('加密的内容')

console.log(hash.digest('hex'))
```

## zlib

压缩文件模块

## http

启动服务

```js
const http = require('node:http')
const url = require('node:url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (req.method === 'GET') {
    if (pathname === '/login') {
      res.end('登录')
      return
    }

    res.end('GET')
  } else if (req.method === 'POST') {
    res.end('POST')
  }
})

server.listen(98, () => {
  console.log('运行中...')
})
```

## 反向代理

使用 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 实现反向代理

## 邮件服务

js-yaml 配置账号密码
nodemailer 发送邮件
