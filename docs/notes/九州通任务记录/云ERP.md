## 批量导入合同时增加姓名和手机号校验

> 提交git：2025年12月-268345-42139-客户合同-批量导入合同时增加姓名和手机号校验

| 同步环境 | 代码                                 | nacos配置 | SQL脚本 |
|------|------------------------------------|---------|-------|
| dev  | <Badge type="tip" text="master" /> | 无       | 无     |


## 审核驳回后将合同废除

> 提交git：2025年12月-268345-42407-电子合同-审核驳回后将合同废除

| 同步环境 | 代码                                 | nacos配置 | SQL脚本 |
|------|------------------------------------|---------|-------|
| dev  | <Badge type="tip" text="master" /> | 无       | 无     |


## 供应商业务函新增发送邮箱功能

> 提交git：2025年12月-134047-40734-云erp-供应商业务函新增发送邮箱功能

nacos配置中心：
```yaml
spring:
  mail:
    host: smtp.qq.com
    #    username: xxxxxxxxxx@qq.com
    #    password: xxxxxxxxxxxxxxxx
    port: 587
    default-encoding: UTF-8
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
            required: true
          connectiontimeout: 10000
          timeout: 5000
          writetimeout: 10000
```
> **特殊改动**：nacos配置修改：MyBatis默认不支持多语句执行，需要在数据库连接URL中配置 allowMultiQueries=true 才能支持

| 同步环境 | 代码                                 | nacos配置                                           | SQL脚本 |
|------|------------------------------------|---------------------------------------------------|-------|
| dev  | <Badge type="tip" text="master" /> | <Badge type="tip" text="weberp-basic-dev.yaml" /> | 无     |


## 超级管理员菜单权限自动同步机制

> 提交git：2025年11月-133303-43369-云ERP-超级管理员菜单权限自动同步机制

| 同步环境 | 代码                                 | nacos配置 | SQL脚本 |
|------|------------------------------------|---------|-------|
| dev  | <Badge type="tip" text="master" /> | 无       | 无     |
| test  | <Badge type="tip" text="test" />   | 无       | 无     |


## 待办中心-跳转ac需求

> 提交git：2025年11月14号-132846-42478-云erp-待办中心-跳转ac需求

nacos配置中心：
```yaml
wotu:
  todo_url: http://testac.mc.dev.jzterp.net
bpm:
  bill:
    config:
      ac-audit-url: "https://zeus.jztweb.com/zsCloud/views/login/index.html?mode=i9&sysId=1811&action=workflowWorkbench&title=待办事宜&custom=pc"
      ac-audit-bills: WorkFlow1,WorkFlow2,WF_FKS_JT1
```

| 同步环境 | 代码                                 | nacos配置                                                | SQL脚本 |
|------|------------------------------------|--------------------------------------------------------|-------|
| dev  | <Badge type="tip" text="master" /> | <Badge type="tip" text="weberp-auxiliary-fat.yaml" />  | 无     |
| test | <Badge type="tip" text="test" />   | <Badge type="tip" text="weberp-auxiliary-test.yaml" /> | 无     |

