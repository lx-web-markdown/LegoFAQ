

# 运行 Lego源码

* qpaas-app-view：http://git.qpaas.com/micro-apps/qpaas-app-view



## 修改源码配置

运行 `package.json` 命令：

```json
"dev-lego": "PACKTYPE=lego node ./bundler/dev-lego.js",
```

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/002.png)

搜索 `bundler/dev-lego.js` ，进入文件修改

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/003.png)

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/004.png)



在 `dev-lego.js` 中找到 `packages/lego/webpack.config` 文件

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/005.png)

进入  `packages/lego/webpack.config` 文件，修改css名称，方便外部项目导入。

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/006.png)



## 配置完成，运行

```sh
$ pnpm dev-lego
```

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/001.png)







# 运行项目工程，引入本地运行的Lego+CSS



## html 中引入本地Lego

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/007.png)

![](/docs/1-功能维度-Lego汇总/Lego源码运行+工程引入本地运行的Lego，打断点/images/008.png)



## 运行项目

```sh
$ pnpm serve
```





