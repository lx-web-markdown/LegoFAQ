

# 一、VPN

## 方式一：直接使用贾导旁边的电脑

已经配置好了。

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/001.png)



## 方式二：自己从头搭 - 未尝试

https://www.lightwan.com.cn/resources.php#download （中文网站）
https://www.lightwan.com/resources.php#download （英文网站）

PDF：当前路径下文件，『隆基绿能全球VPN客户端安装及使用指南.pdf』





# 二、工单号 - GD2024091000088

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/002.png)



## 1. 基本信息

环境地址：https://longi-ehs-test.longi.com

测试账号&密码：admin_longi / aykj@83752661



## 2. 问题简述

> 创建了有一个微函数，在原生应用在上调用正常的，在定制页面上，触发错误！！

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/004.png)



### a. 原生应用下

> 同步按钮正常，调用微函数，刷新从表！！

原生应用地址：https://longi-ehs-test.longi.com/app/!/information/xiaofangshuixitong

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/005.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/006.png)



### b. 定制页面下

> 定制页面下，点击同步按钮，跳转到了一个网页！！

应用外部网页路径：https://longi-ehs-test.longi.com/open/bee?appId=408

内部详情页路径（链接型应用）：https://longi-ehs-test.longi.com/safetyapp/proj/longi/gisLego?module=information&appId=xiaofangshuixitong&plotType=POINT

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/010.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/007.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/008.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/009.png)





## 3. 查看应用配置

查看应用Log：https://longi-ehs-test.longi.com/space-jiluneng/napi/publishLog



问题应用路径 - 应用外部网页路径：https://longi-ehs-test.longi.com/open/bee?appId=408

内部详情页路径（链接型应用）：https://longi-ehs-test.longi.com/safetyapp/proj/longi/gisLego?module=information&appId=xiaofangshuixitong&plotType=POINT

原生应用地址：https://longi-ehs-test.longi.com/app/!/information/xiaofangshuixitong

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/003.png)



### a. 查看按钮配置

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/011.png)



### b. 查看微函数配置

这里使用的是微函数的拦截，不是普通的微函数调用。

**入口在上方『全局样式』**

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/012.png)



## 4. 最后发现配置没问题

**根据 原生页面正常、定制页面有问题。** 对两个页面的『同步』按钮进行断点，对比两个页面一步步的差异在哪里。


