# 其它技术

## GitHubPages 部署

### 前言

很多的静态网站都是部署在 GitHub Pages 上的，比如 Vue 的官方文档，阮一峰的个人网站，还有很多其它的个人网站、博客等等，那么部署在 GitHub Pages 上有什么好处呢？
稳定，可靠，不花钱，更新维护容易，操作简单，适合新手操作，那么接下来来详细说一下部署流程

### 准备一个自己的域名

这里使用阿里云举例
GitHub 默认的免费域名强制开启 https
在 https 协议中无法发出 http 请求
如果项目中使用的接口都是 http 协议的，那么就需要准备一个自己的域名，因为自定义域名可以选择使用 http 协议或者 https 协议
或者你让接口开发者为接口服务提供 https 的支持

### 在添加记录中进行设置

记录类型：CNAME - 将域名指向另一个域名
主机记录：我设置是二级域名，名称叫 `shengbang`（可以自定义）
解析线路：默认即可
记录值：因为是部署在 Github 上，所以要写 Github 的记录值，是**你的 Github 用户名 + github.io**
TTL：默认即可
注意：
记录值必须是**你的 Github 用户名 + github.io**，否则域名会设置不生效
详细设置参数请参考阿里云官方说明
<img src="https://www.hualigs.cn/image/60f68ac87cea3.jpg" alt="image" style="zoom:50%;" />

### 添加 CNAME 文件

在项目的 public 目录中添加 CNAME 文件

`shengbang.tianyuhao.icu` 文件名叫 `CNAME`没有后缀名
内容是你之前设置是主机记录值+ .你的域名

### 生成 GitHub 访问令牌

1. 点击用户设置
   <img src="https://www.hualigs.cn/image/60f68ac8ae7d8.jpg" alt="image" style="zoom:50%;" />
2. 选择 Developer settings
   <img src="https://www.hualigs.cn/image/60f68ac8ac890.jpg" alt="image" style="zoom:50%;" />
3. 选择 `Personal access tokens` → `Generate new token`
   <img src="https://www.hualigs.cn/image/60f68ac89e626.jpg" alt="image" style="zoom:50%;" />
4. 给 `Token`设置一个名字，不能是中文
   再选中 `repo`和 `workflow`之后拉到最下面进生成 Token
   <img src="https://www.hualigs.cn/image/60f68ac8a7de9.jpg" alt="image" style="zoom:50%;" />
   <img src="https://www.hualigs.cn/image/60f68ac89a2b1.jpg" alt="image" style="zoom:50%;" />
5. 生成时候会显示出 Token 但是 Token 只显示一次！需要复制保存处理！
   如果 Token 没有保存后丢失，请重新上述步骤进行重新生成！
   <img src="https://www.hualigs.cn/image/60f68ac8a8b85.jpg" alt="image" style="zoom:50%;" />
6. 创建远程仓库
   此处省略创建仓库步骤，创建完成之后暂时不要提交代码！
7. 在远程仓库中设置，将 GitHub 访问令牌添加到远程仓库的 secrets 中
   <img src="https://www.hualigs.cn/image/60f68ac8acc30.jpg" alt="image" style="zoom:50%;" />
   <img src="https://www.hualigs.cn/image/60f68ac887d34.jpg" alt="image" style="zoom:50%;" />
   Name：`ACCESS_TOKEN`（必须是这个名字）
   Value: `之前生成的 GitHub 访问令牌`
   设置完成之后进行添加，添加完成效果如下：
   <img src="https://www.hualigs.cn/image/60f68ac8a2ef7.jpg" alt="image" style="zoom:50%;" />
   这样就添加成功了！！！

### 添加配置文件

在项目`根目录`创建：
`.github/workflows/main.yml`
文件夹名称和文件名必须是上面的！！！
`main.yml`中写入下面代码段：

```yml
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

> 配置好后即可将项目推送至远程仓库

### 怎么部署？

上传远程仓库后 Github 会帮助我们自动部署
部署会有一个打包的过程，时间不会太长，等待一下即可
下面是查看部署的状态
<img src="https://www.hualigs.cn/image/60f68ac8b4794.jpg" alt="image" style="zoom:50%;" />
<img src="https://www.hualigs.cn/image/60f68ac8a3db0.jpg" alt="image" style="zoom:50%;" />
<img src="https://www.hualigs.cn/image/60f68ac8b0eb3.jpg" alt="image" style="zoom:50%;" />
当所有选项都打上勾之后就代表部署完成了
我们可以通过仓库设置下面来查看部署状态：
<img src="https://www.hualigs.cn/image/60f68ac8b354c.jpg" alt="image" style="zoom:50%;" />
<img src="https://www.hualigs.cn/image/60f68ac8b0faa.jpg" alt="image" style="zoom:50%;" />
找到 GitHub Pages 选项 出现上面对号表示项目已经部署成功，部署的网址就是后面的网址，打开即可部署完成！！！

### 怎么更新？

很简单，修改源代码，把更新提交到远程仓库即可。说白了你可以忽略网站部署这件事儿了。然后你可以通过仓库中的 Action 查看构建部署状态（非必须）。不想看的话就等一会儿就可以了。

## Git 常用命令

| 命令                      | 简要说明                       |
| ------------------------- | ------------------------------ |
| git clone xxxxx           | 克隆版本库                     |
| git add .                 | 添加至暂存区                   |
| git commit -m '说明'      | 提交并添加说明                 |
| git push -u origin master | 推送至远程仓库 master 分支     |
| git branch -a             | 列出所有分支                   |
| git branch test           | 创建 test 分支                 |
| git checkout test         | 切换到 test 分支               |
| git merge test            | 把 test 分支合并到 master 分支 |
| git branch -d test        | 删除 test 分支                 |

## Npm 一些命令

`--save` 是什么意思？

`npm i xxx --save` 是把依赖写入进 dependencies 对象里面，

dependencies 是生产环境下的依赖，项目刚需的依赖在这里，比如 UI 框架，字体文件等线上必需的东西

`-d` 什么意思？

`npm i xxx -g` 就是安装到全局下，在命令行的任何地方都可以操作，不会提示“命令不存在等错误”
