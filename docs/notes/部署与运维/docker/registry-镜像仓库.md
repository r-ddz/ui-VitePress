## 私有仓库搭建与配置

（1）拉取私有仓库镜像

```
docker pull registry
```

（2）启动私有仓库容器

```
docker run -di --name=registry -p 5000:5000 registry
```

（3）打开浏览器 输入地址http://192.168.184.141:5000/v2/_catalog看到`{"repositories":[]}` 表示私有仓库搭建成功并且内容为空

（4）修改daemon.json

```
vi /etc/docker/daemon.json
```

添加以下内容，保存退出。

```json
{"insecure-registries":["192.168.184.141:5000"]} 
```

此步用于让 docker信任私有仓库地址，允许Docker客户端访问指定的私有镜像仓库（192.168.184.141:5000），绕过HTTPS安全验证，通常用于本地开发环境中的私有仓库访问。

（5）重启docker 服务

```
systemctl restart docker
```

## 镜像上传至私有仓库

（1）标记此镜像（jdk1.8）为私有仓库的镜像

```
docker tag jdk1.8 192.168.184.141:5000/jdk1.8
```

（2）再次启动私服容器

```
docker start registry
```

（3）上传标记的镜像

```
docker push 192.168.184.141:5000/jdk1.8
```

