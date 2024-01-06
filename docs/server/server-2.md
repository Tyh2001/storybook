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

# 查看MySQL服务的状态
sudo service mysql status

# 启动 mysql
sudo service mysql start

# 停止 mysql
sudo service mysql stop

# 查看MySQL错误日志
sudo less /var/log/mysql/error.log
```

## SQL 命令

```sql
-- 查看有那些表
SHOW TABLES;

-- 查看有那些数据库
SHOW DATABASES;

-- 创建数据库
CREATE DATABASE 数据库名;

-- 切换到指定的数据库
USE 数据库名;

-- 运行指定 sql 文件
source /xxxx/xxxx/xxxx.sql

-- 查看表的数据
select * from 表名;

-- 查看所有用户
SELECT User FROM mysql.user;

-- 将 abd 数据库名称修改为 def
RENAME DATABASE abc TO def;

-- 删除数据库
DROP DATABASE xxx;
```

## 登录

```shell
mysql -u root -p
```
