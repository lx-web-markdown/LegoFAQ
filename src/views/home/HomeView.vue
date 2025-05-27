<script setup lang="ts">
import type { BugItem } from '@/assets/data-sources/item-interface'
import { MicroAppBugList } from '@/assets/data-sources/bug-list'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetail = (bug: BugItem) => {
  router.push(`/detail/${bug.id}`)
}
</script>

<template>
  <div class="home-view">
    <div class="bug-list">
      <div class="bug-item" v-for="bug in MicroAppBugList" :key="bug.id" @click="goToDetail(bug)">
        <img class="bug-thumb" :src="bug.thumbnail" alt="thumb" />
        <div class="bug-content">
          <div class="bug-title">{{ bug.title }}</div>
          <div class="bug-desc">{{ bug.desc }}</div>
          <div class="bug-tags">
            <span class="bug-tag" v-for="tag in bug.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="bug-meta">
            <span>处理人：{{ bug.handler }}</span>
            <span>提交人：{{ bug.bugWho }}</span>
            <span>日期：{{ bug.bugDate }}</span>
            <a class="bug-link" :href="bug.bugLink" target="_blank">工单链接</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  padding: 20px 50px;
  .bug-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .bug-item {
      display: flex;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.1);
      border: 1.5px solid #e5e6eb;
      padding: 15px 50px;
      align-items: center;
      cursor: pointer;
      transition:
        box-shadow 0.2s,
        transform 0.2s,
        border-color 0.2s;
      &:hover {
        box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.16);
        transform: translateY(-4px) scale(1.015);
        border-color: #b2bcd4;
      }
      &:active {
        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.16);
      }
      .bug-thumb {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 20px;
      }
      .bug-content {
        flex: 1;
        .bug-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .bug-desc {
          color: #666;
          margin-bottom: 8px;
        }
        .bug-tags {
          margin-bottom: 8px;
          .bug-tag {
            display: inline-block;
            background: #f0f0f0;
            color: #333;
            border-radius: 4px;
            padding: 2px 8px;
            font-size: 12px;
            margin-right: 6px;
          }
        }
        .bug-meta {
          font-size: 12px;
          color: #999;
          display: flex;
          gap: 16px;
          align-items: center;
          .bug-link {
            color: #409eff;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
