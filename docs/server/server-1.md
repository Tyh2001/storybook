# 服务器配置

## 安装 Apache

Apache（全名为 Apache HTTP Server）是一个开源的、跨平台的 Web 服务器软件，它是由 Apache 软件基金会（Apache Software Foundation）开发和维护的。Apache 是目前全球使用最广泛的 Web 服务器之一，许多网站和应用程序都在其上运行。

```shell
sudo apt update
sudo apt install apache2
```

Apache 的网站根目录是 `/var/www/html/`

这样就可以通过公网访问到了

## 安装 Node

建立软连接

```shell
cd /usr/bin
ln -s /node安装目录/bin/node
ln -s /node安装目录/bin/npm
```

## 安装 Git

```shell
apt-get install git
```
