# Nest 基础

## 🤗 介绍

[Nest.js](https://github.com/nestjs/nest) 是一个进步的 `Node.js` 框架，用于在 `TypeScript` 和 `JavaScript`。

它是一个 `MVC` 框架，全面使用 `TypeScript` 用起来个人感觉非常舒适简单，最近一直在学习。

个人感觉这个框架对于前端工程师来说简直不要太友好，学习成本分成低，使用起来非常方便，方便我们快速大家后端。

## 起步

首先全局安装 `next`:

```shell
npm i -g @nestjs/cli
```

初始化项目：

```shell
nest new project-name
```

启动项目分为不同的启动方式，详情可以见 `package.json`，下面仅介绍两个主要的启动命令：

```shell
  "scripts": {
    "start": "nest start", # 基本启动
    "start:dev": "nest start --watch" # 热更新启动
  }
```

基本上使用热更新启动就可以了，可以数据同步刷新

启动之后就可以访问默认的 `http://localhost:3000` 端口即可

## 路由

在 `controller` 控制器中，需要使用 `@Controller()` 修饰器定义一个基本的控制器。可以再里面传入一个路径作为参数

```ts
import { Controller } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/home/load')
export class AppController {
  constructor(private readonly appService: AppService) {}

  getHello = (): string => {
    return this.appService.getHello()
  }
}
```

上面写法是直接给一个类修饰了整个类，也可以使用 `Get` 修饰器来指定某个类方法的路径

```ts
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home/load')
  getHello = (): string => {
    return this.appService.getHello()
  }
}
```
