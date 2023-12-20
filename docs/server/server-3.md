# Redis

## 安装

```shell
sudo apt update

# 安装
sudo apt install redis-server

# 检查是否安装成功
sudo systemctl status redis-server
```

打印下面内容说明安装成功

```shell
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2023-12-19 21:17:03 CST; 1min 49s ago
       Docs: http://redis.io/documentation,
             man:redis-server(1)
   Main PID: 175808 (redis-server)
     Status: "Ready to accept connections"
      Tasks: 5 (limit: 1988)
     Memory: 2.7M
        CPU: 196ms
     CGroup: /system.slice/redis-server.service
             └─175808 "/usr/bin/redis-server 127.0.0.1:6379" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" >
```

## 配置 Redis

编辑 `/etc/redis/redis.conf` 文件，将 `bind 127.0.0.1` 这一行，将其改为：

```shell
bind 0.0.0.0
```

修改完成之后重启生效

```shell
sudo systemctl restart redis-server
```

## 测试连接

```shell
# 启动 redis
redis-cli

# 测试
ping
```

执行 `ping` 之后返回 `PONG` 则代表成功

## 端口

redis 默认端口号是 6379
