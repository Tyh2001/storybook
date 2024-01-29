# Git 基础知识

## 常用命令

| 命令                      | 简要说明                      |
| ------------------------- | ----------------------------- |
| git clone 仓库地址        | 克隆版本库                    |
| git status                | 查看状态                      |
| git add .                 | 添加至暂存区                  |
| git commit -m '说明'      | 提交并添加说明                |
| git push -u origin master | 推送至远程仓库 master 分支    |
| git branch -a             | 列出所有分支                  |
| git branch dev            | 创建 dev 分支                 |
| git checkout dev          | 切换到 dev 分支               |
| git merge dev             | 把 dev 分支合并到 master 分支 |
| git branch -d dev         | 删除 dev 分支                 |
| git pull origin master    | 同步分支到本地                |
| git reset --hard 版本号   | 获取历史版本                  |
| git remote add origin xxx | 关联远程仓库                  |
| git fetch --prune         | 同步远程分支                  |

## 分支管理

创建和切换

```shell
# 创建 dev 分支
git branch dev

# 切换到 dev 分支
git checkout dev
```

合并分支

```shell
# 先切换为 master 分支
git checkout master

# 合并分支 把 dev 分支合并到 master 分支
git merge dev

# 将合并的分支提交到仓库
git push
```

删除本地分支

```shell
git branch -d xxx
```

## 回溯版本

查看 `commit hash` 值

```shell
git reflog
```

回溯版本

```shell
git reset --hard xxxx
```

回溯命令

```shell
git push -f
```

## 配置 Git SSH Key

命令行输入：

```shell
ssh-keygen -t rsa -b 4096 -C "邮箱"
```

连续敲击 3 次回车，即可 `/c/Users/` 当前用户` /.ssh/` 目录中生成 `id_rsa` 和 `id_rsa.pub` 两个文件

## 关联存储库

```shell
git init

git remote add origin xxxxx
```

## 修改用户名和邮箱

输入命令：

```shell
git config --global user.name 'xxxxx'
git config --global user.email 'xxxxx@qq.com'
```

## 更改分支名

修改本地分支名称：

```shell
git branch -m oldBranchName newBranchName
```

将改名后的本地分支推送到远程，并将本地分支与之关联

```shell
git push --set-upstream origin newBranchName
```
