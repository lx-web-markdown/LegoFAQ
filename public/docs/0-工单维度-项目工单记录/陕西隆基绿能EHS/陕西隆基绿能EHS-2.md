

# 一、VPN

## 方式一：直接使用贾导旁边的电脑

已经配置好了。

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/001.png)



## 方式二：自己从头搭 - 未尝试

https://www.lightwan.com.cn/resources.php#download （中文网站）
https://www.lightwan.com/resources.php#download （英文网站）

PDF：当前路径下文件，『隆基绿能全球VPN客户端安装及使用指南.pdf』





# 三、工单 - GD2025021900037

## 1. 工单详情

* 问题描述：微组件调试时编辑属性面板添加属性里表单选择器和主表字段选择，这两个组件选择内容后没有反应
* 访问地址：http://njswjteqxm-wuyouxiangmu2212fuwu-gqhdlz.k8s-assembly-machine.qpaas.com/login
* 管理员账号：admin_ljln / aykj8888

* 问题截图：
    * ![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/107.png)
    * ![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/108.png)
    * ![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/109.png)





## 2. 解决步骤

### a. 微组件 - 编辑

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/101.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/102.png)

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/103.png)



### b. 修改组件代码，输出 `$ctx`

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/104.png)



### c. 本地调试微组件

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/105.png)



### d. 查看调试页面

http://localhost:3001/#/desinger

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/106.png)



## 3. 最终知道原因：

未设置：**属性路径**。

![](/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/images/103.png)



