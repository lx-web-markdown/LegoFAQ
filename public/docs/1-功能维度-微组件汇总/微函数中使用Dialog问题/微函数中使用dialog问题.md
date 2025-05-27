# 工单 - GD2025032800051

* 吴兆龙
* 代码仓库：http://git.qpaas.com/safety-fe/safety-micro-component/-/tree/version/2.0.0/src/modules/addMaterial
* 问题：多层dialog，最外层的dialog蒙层不消失。单层dialog正常

* 应用 - 危险物质信息：https://www.51safety.com.cn/space-gongyehulianwanganq/weixianwuzhixinxi/detail/15?module=dataflow&label=&title=%E5%8D%B1%E9%99%A9%E7%89%A9%E8%B4%A8%E4%BF%A1%E6%81%AF

* 启业云文档 - 弹框：https://docs.qpaas.com/docs/guide/wyk65mdp9eux8e58

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/008.png)





## 1. 正常情况 - Dialog正常消失

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/001.png)

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/002.png)



## 2. 在另一个应用中 - 再打开

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/003.png)

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/004.png)

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/005.png)

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/006.png)



##3. 微函数 - 打开弹框

* 启业云文档 - 弹框：https://docs.qpaas.com/docs/guide/wyk65mdp9eux8e58
* 代码仓库：http://git.qpaas.com/safety-fe/safety-micro-component/-/tree/version/2.0.0/src/modules/addMaterial

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/007.png)



## 4. 解决：dialog移除后，蒙层又被添加上去了

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/009.png)

![](/docs/1-功能维度-微组件汇总/微函数中使用Dialog问题/images/010.png)



手动移除蒙层。html找到蒙层，并延时删除。

```js
   this.$dialog.createButtons([
       {
           label: '取消111',
           type: 'cancel',
           callback: () => {
            console.log('点击了 ===========》 取消', this.$dialog);
            const mark = this.$dialog.$el.previousElementSibling;
             this.$dialog.close();
             if (mark.style.position === 'fixed') {
              setTimeout(() => {
                mark.remove();
              }, 500)
             }
           },
       },
       {
           className: 'confirm',
           label: '确认222',
           type: 'confirm',
           callback: () => {
             this.$dialog.params.onSave();
           },
       },
   ]);
```





























