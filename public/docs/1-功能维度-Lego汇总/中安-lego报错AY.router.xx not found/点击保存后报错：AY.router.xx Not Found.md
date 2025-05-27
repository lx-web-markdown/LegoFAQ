

# 工单 - GD2025052200099

* 标题：定制页面 点击确认按钮报错

* 环境地址
    * 平台登录地址：http://10.0.0.112:28000/
    * 测试账号&密码：账号zawx 密码：zawx@2024



## 工程如何运行

* csafety-edufront
    * `pnpm install`
    * `pnpm serve`
    * `localhost:3000`
    * 拼接上指定路由： `localhost:3000/training`

![](/docs/1-功能维度-Lego汇总/中安-lego报错AY.router.xx not found/images/006.png)



## 问题截图

![](/docs/1-功能维度-Lego汇总/中安-lego报错AY.router.xx not found/images/003.png)

![](/docs/1-功能维度-Lego汇总/中安-lego报错AY.router.xx not found/images/001.png)



## 代码

```vue
<script>
import { FormPage } from '@qycloud/lego';
export default {
  name: "TrainingForm",
  components: {
    TeamCard,
    DepartmentCard,
    CompanyCard,
    FormPage,
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    params() {
      return {
        spaceId: window.globalConfig.user.entId,
        app: 'peixunshishi',
        module: 'information',
        form: this.$route.params.id || '',
        node: '',
        edit: '1'
      }
    }
  },
  methods: {
    onAfterFormFinished(data, params) {
      console.log(data, params);
    }
  },
  mounted() {
    console.log('window.globalConfig.user.entId =====>', window.globalConfig.user.entId);
    console.log('this.$route.params.id =====>', this.$route.params.id);
  }

}
</script>

<template>
  <form-page v-if="active === 1" v-bind="params" />
</template>
```



## 原因

>  **定制的Lego Form页点击保存后，应该要自动跳转回去，但是由于是定制，无法判断返回的上一级页面是哪个，所以需要拦截保存操作，自定义返回。**

* Lego项目源码

![](/docs/1-功能维度-Lego汇总/中安-lego报错AY.router.xx not found/images/004.png)



## 解决

* 拦截方法，自定义保存后的跳转路由。

![](/docs/1-功能维度-Lego汇总/中安-lego报错AY.router.xx not found/images/005.png)













