# Node.js 版本切换

## 前言

很多时候我们在老项目和新项目一起维护的时候，很多时候涉及到 node.js 版本的切换，那么下面推荐一个可以快速切换 node.js 版本的工具，叫[nvm](https://github.com/nvm-sh/nvm)

## 安装

在 [nvm 仓库](https://github.com/coreybutler/nvm-windows/releases) 可以进行下载，下载选择 `nvm-setup.zip`

## 基本命令

- 安装指定 node.js 的版本

```shell
nvm install 版本号
```

- 查看本地已经安装的版本

```shell
nvm list
```

- 查看当前使用的版本

```shell
nvm current
```

- 切换版本号

```shell
nvm use 版本号
```

如果切换版本号之后出现下面报错

```shell
C:\Users\CC-1>nvm list

    16.14.2
    15.14.0
  * 14.18.1 (Currently using 64-bit executable)

C:\Users\CC-1>nvm use 15.14.0
exit status 1: ��û���㹻��Ȩ��ִ�д˲�����

C:\Users\CC-1>
```

那么使用`管理员身份`打开命令行之后重新执行即可

## 写到最后

欢迎大家点赞+关注
