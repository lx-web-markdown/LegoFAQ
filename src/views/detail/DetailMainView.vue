
<script setup lang="ts">

import MarkdownComp from '@/components/MarkdownComp/MarkdownComp.vue';

const markdownFilePath = '/docs/0-工单维度-项目工单记录/博兴/博兴.md'

</script>

<template>
  <!-- 你的页面内容 -->
   <div class="main-container">
    <MarkdownComp :markdownFilePath="markdownFilePath" />
   </div>
</template>
