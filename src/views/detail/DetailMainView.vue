<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownComp from '@/components/MarkdownComp/MarkdownComp.vue';
import { MicroAppBugList } from '@/assets/data-sources/bug-list';

// 获取路由参数
const route = useRoute();
const bugId = computed(() => Number(route.params.id));

// 查找对应的bug数据
const bugData = computed(() => {
  return MicroAppBugList.find(item => item.id === bugId.value);
});

// 动态获取markdown路径
const markdownFilePath = computed(() => bugData.value?.filePath || '');
</script>

<template>
  <!-- 你的页面内容 -->
   <div class="main-container">
    <MarkdownComp :markdownFilePath="markdownFilePath" />
   </div>
</template>

<style lang="scss" scoped>
.main-container {
  padding: 20px;
  background-color: #fff;
}
</style>