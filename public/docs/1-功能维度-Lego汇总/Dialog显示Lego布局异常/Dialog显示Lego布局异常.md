

# 工单：GD2025042300005



## 信息

标题：安全模块-监测预警-点开离线放大后页面展示不对，右侧留有大片空白。

* 环境地址
    * http://119.187.174.82:28000/aysmartpark/portal/login

* 测试账号&密码
    * 账号admin_grzz 
    * 密码：P@ssw0rd



## 问题介绍

![](images/001.png)



## 解决方案

![](images/002.png)

```js
setTimeout(() => {
  window.dispatchEvent(new Event('resize'));
}, 0);
```

* 模拟发送resize，这样可以重新计算















