# Windows 命令

## 目录操作

```shell
# 进入目录
cd /xxx

# 返回上一层
cd ..

# 进入指定盘
D:
C:
```

## 文件操作

```shell
# 创建文件夹
mkdir xxxx

# 指定目录创建
mdkri D:\app\document\xxxx

# 相对目录创建文件夹
mkdir ..\xxxx

# 删除文件
del xxx.txt

# 当前目录下创建新文件
cd . > xxx.txt

# 当前目录下创建新文件
type nul > xxx.txt

# 查看当前目录下所有的文件（其他操作系统不支持）
dir

# 和 dir 一致（CMD 支持）
ls

# 复制文件
copy 1.txt D:\app\document\

# 移动文件
move 1.txt D:\app\document\
```

## 编辑文件
