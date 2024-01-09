# Nginx

## 介绍

## 安装

```shell
# 安装 nginx
sudo apt update
sudo apt install nginx

# 查看 nginx 安装路径
which nginx

# 检查是否配置正确
sudo nginx -t

# 删除
sudo apt-get --purge remove nginx
sudo apt-get autoremove
# 查看Nginx系统模块，已安装的全部卸载
dpkg --get-selections|grep nginx
sudo apt-get --purge remove nginx-common
sudo apt-get --purge remove nginx-core
dpkg --get-selections|grep nginx
sudo apt-get install nginx

# 自动移除全部不使用的软件包
sudo apt-get autoremove

# 重启 nginx
sudo systemctl restart nginx
sudo /etc/init.d/apache2 stop # 如果重启失败了先执行这个先关闭 apache2
sudo systemctl start apache2 # 重新启动 apache2
```
