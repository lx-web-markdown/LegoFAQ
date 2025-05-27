# 文档

* 脚手架迁移方案：https://blogqpaas.yuque.com/kidsv4/vn8ois/wlfnsett9layv7zx?singleDoc#aJxLp
* 启业云开发者中心：https://docs.qpaas.com/docs/lego/FormPage





# 工程

* csafety-edufront-成功
    * 运行 **微应用**：`pnpm run serve`
    * 运行 **微组件**：`pnpm run dev`
    * 创建全新项目工程：![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/001.png)



## 运行

* 本地代理：https://cidemo.qpaas.com/

* 修改代理Cookie

    ![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/008.png)

* 执行命令：`pnpm run serve`

* 路由地址：http://localhost:3000/course





# 工单 - GD2025032700073

调用lego页面

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/006.png)

运行报错：

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/005.png)



## 排查

对比之前的Lego页面，发现多了这几个文件。

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/007.png)



## 解决方案 - ❎ 虽然能解决，但仍有其他问题

与微组件冲突的几个js，直接置空。

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/004.png)



# 工单 - GD2025032700073 - 再次

## 1. 排查

先移除掉按钮拦截

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/010.png)



![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/011.png)



![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/012.png)



![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/013.png)



### a. $wrap没有appendChild方法



### b. 搜索 `$wrap` ，发现 `$wrap` 是 `#J_body`

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/014.png)







## 2. 解决

### a. 同时删除之前修改的代码

```js
  beforeMount() {
    console.log('beforeMount ===> ');
    // window.cubeMain = 'cubeMain';
    // window.legoQpaasAppFramework = 'legoQpaasAppFramework';
    // window.btnTable = 'btnTable';
  },
```



### b. 添加 `J_body` 

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/009.png)



### c. 成功 - 有了 `J_body`

![](/docs/1-功能维度-Lego汇总/新脚手架工程引入Lego cdn/images/015.png)











