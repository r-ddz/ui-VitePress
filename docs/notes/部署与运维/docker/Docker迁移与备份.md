## 容器保存为镜像

我们可以通过以下命令将容器保存为镜像

```
docker commit 要保存的容器名称 保存的镜像名称
```

例如：

```
docker commit mynginx mynginx_1
```

## 镜像备份

我们可以通过以下命令将镜像保存为tar 文件

```
docker  save -o 要保存的文件名.tar 镜像名称
```

例如：

```
docker  save -o mynginx.tar mynginx_1
```

## 镜像恢复与迁移

首先我们先删除掉mynginx_img镜像  然后执行此命令进行恢复

```
docker load -i 备份的文件名.tar
```

例如：

```
docker load -i mynginx.tar
```

执行后再次查看镜像，可以看到镜像已经恢复