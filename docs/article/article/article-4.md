# GitHubPages 部署项目

## 前言

很多的静态网站都是部署在 `GitHub Pages` 上的，比如很多其它的个人网站、博客等等，那么部署在 `GitHub Pages` 上有什么好处呢？

稳定、可靠、不花钱、更新维护容易、操作简单、适合新手操作，那么接下来详细说一下部署流程，下面使用 `vue3` 项目进行演示。

## 域名解析

如果没有域名，可以跳过此步骤

这里演示直接使用一个二级域名进行演示

1. 在阿里云的域名解析中添加记录
2. 记录类型选择 CNAME
3. 主机记录填写二级域名的前缀。比如你希望以后的地址是 `demo.xxx.com` 那么就填写 `demo`，也就是二级域名的前缀
4. 解析线路默认
5. 记录值为 `你的 Github 用户名 + github.io`，比如我就填写 `tyh2001.github.io`
6. TTL 默认

![](https://www.hualigs.cn/image/621262dd9c842.jpg)

内容是你之前设置是`主机记录值.你的域名`

## 生成 GitHub 访问令牌

依次进入进入 Github 的 `setting / Developer settings / Personal access tokens / Generate new token` 中，进行添加访问令牌。

直接点击[这里](https://github.com/settings/tokens/new)可直接跳转添加页面。

随便设置一个 `token` 的名称，然后勾选 `repo` 和 `workflow` 两个选项

![](https://www.hualigs.cn/image/621262df9b33d.jpg)

最后滚动到最下面，点击 `Generate token` 进行创建 `token`

创建完成之后，点击复制先保存 `token`，因为**token 只会显示一次，如果关闭页面或者刷新了页面之后，token 就再也找不到了**。如果意外丢失，只能重新创建一个新的。

![](https://www.hualigs.cn/image/621262df39863.jpg)

## 配置远程仓库

进入需要部署的远程仓库，在远程仓库的 `Settings / Secrets / Actions` 的设置界面中，点击 `New repository secret`，进行添加 `新存储库机密`。

![](https://www.hualigs.cn/image/621262dfe94ef.jpg)

- Name: `ACCESS_TOKEN`（必须是这个名字）
- Value: 之前生成的 GitHub 访问令牌

然后点击下面 `Add secret` 按钮，进行添加。

## 添加 CNAME 文件

在项目的 `public` 目录下，新建 `CNAME` 文件，没有后缀名，里面填写将来要部署的地址位置，我在之前二级域名添加了 `demo` 的二级域名，那么我的 `CNAME` 文件就填写 `demo.tianyuhao.cn`。

## 添加配置文件

在项目 `根目录` 创建：`.github/workflows/main.yml`
`main.yml`中写入下面代码段：

```
name: build and deploy

# 当 master 分支 push 代码的时候触发 workflow
on:
  push:
    branches:
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      # 下载仓库代码
      - uses: actions/checkout@v2

      # 缓存依赖
      - name: Get yarn cache
        id: yarn-cache
        run: echo "::set-output name=dir::$(yarn cache dir)"
      - uses: actions/cache@v1
        with:
          path: ${{ steps.yarn-cache.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 安装依赖
      - run: yarn

      # 打包构建
      - run: yarn build

      # 发布到 GitHub Pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v2
        env:
          PERSONAL_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 访问秘钥
          PUBLISH_BRANCH: gh-pages # 推送分支
          PUBLISH_DIR: ./dist # 部署目录
```

配置好之后，将项目推送至远程仓库，即可自动部署了。

## 一些问题

- 怎么查看部署？

在远程仓库的 `Actions` 中可以查看是否部署完成。

- 怎么更新？

不需要手动更新，更改代码之后，直接提交，就会自动打包部署了。

- 怎么查看部署地址？

在远程仓库的 `Setting / page`，中查看部署的地址和分支。
