<template>
  <header class="header-view">
    <div class="header-title">LegoFAQ</div>
    <nav class="header-nav">
      <button v-for="btn in buttons" :key="btn.path" @click="goTo(btn.path)">
        {{ btn.label }}
      </button>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

interface Button {
  label: string;
  path: string;
}

const buttons: Button[] = [
  { label: '首页', path: '/' },
  { label: '问答', path: '/faq' },
  { label: '关于', path: '/about' },
];

function goTo(path: string) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
.header-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  .header-title {
    margin-left: 40px;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .header-nav {
    display: flex;
    gap: 20px;
    margin-right: 40px;

    button {
      background: #f5f5f5;
      border: none;
      border-radius: 6px;
      padding: 8px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
      color: #333;
      &:hover {
        background: #e0e0e0;
      }
    }
  }
}
</style>
