# Mysql

## 安装

```shell
sudo apt update

# 安装
sudo apt install mysql-server

# 启动 mysql 服务
sudo systemctl start mysql

# 设置 MySQL 服务在系统启动时自动启动
sudo systemctl enable mysql

# 检查 MySQL 服务状态
sudo systemctl status mysql

# 进入 MySQL Shell 设置 mysql 密码
mysql -u root -p

# 退出 mysql shell
quit;
```

## SQL 命令

```sql
-- 查看有那些表
SHOW TABLES;

-- 查看有那些数据库
SHOW DATABASES;

CREATE DATABASE 数据库名;

-- 切换到指定的数据库
USE 数据库名;

-- 运行指定 sql 文件
source /xxxx/xxxx/xxxx.sql

-- 查看表的数据
select * from 表名;
```
