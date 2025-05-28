<script setup lang="ts">
import { ref, computed } from 'vue'
import type { BugItem } from '@/assets/data-sources/item-interface'
import { MicroAppBugList } from '@/assets/data-sources/bug-list'
import { useRouter } from 'vue-router'

// Element Plus 相关
import { ElButton, ElSelect, ElOption, ElTag } from 'element-plus'
import 'element-plus/dist/index.css'

const router = useRouter()

const bugTypeTextMap: Record<string, string> = {
  lego: '乐高问题',
  microApp: '微应用问题',
  MicroFunc: '微函数问题',
  MicroComponent: '微组件问题',
  Requirement: '需求反馈'
}

const getBugTypeText = (type: string) => bugTypeTextMap[type] || type

const goToDetail = (bug: BugItem) => {
  router.push(`/detail/${bug.id}`)
}

// 筛选相关
const showFilter = ref(false)
const sortOrder = ref<'desc' | 'asc'>('desc')
const selectedTags = ref<string[]>([])
const selectedProject = ref<string>('')

// 整理所有tag
const allTags = computed(() => {
  const tagSet = new Set<string>()
  MicroAppBugList.forEach((bug) => {
    bug.tags?.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet)
})

// 整理所有项目名
const allProjects = computed(() => {
  const projectSet = new Set<string>()
  MicroAppBugList.forEach((bug) => {
    if (bug.project) projectSet.add(bug.project)
  })
  return Array.from(projectSet)
})

// 过滤和排序后的列表
const filteredList = computed(() => {
  let list = MicroAppBugList.slice()
  // 项目筛选
  if (selectedProject.value) {
    list = list.filter((bug) => bug.project === selectedProject.value)
  }
  // tag筛选
  if (selectedTags.value.length > 0) {
    list = list.filter((bug) => selectedTags.value.every((tag) => bug.tags?.includes(tag)))
  }
  // 时间排序（按bugDate）
  list.sort((a, b) => {
    if (sortOrder.value === 'desc') {
      return b.bugDate.localeCompare(a.bugDate)
    } else {
      return a.bugDate.localeCompare(b.bugDate)
    }
  })
  return list
})
</script>

<template>
  <div class="home-view">
    <div class="filter-bar">
      <el-button type="primary" @click="showFilter = !showFilter">
        {{ showFilter ? '收起筛选' : '筛选/搜索' }}
      </el-button>
      <transition name="slide-down-up">
        <div v-if="showFilter" class="filter-panel">
          <el-select
            v-model="sortOrder"
            placeholder="时间排序"
            style="width: 120px; margin-right: 16px"
          >
            <el-option label="时间倒序" value="desc" />
            <el-option label="时间顺序" value="asc" />
          </el-select>
          <el-select
            v-model="selectedTags"
            multiple
            clearable
            filterable
            placeholder="选择标签"
            style="width: 220px; margin-right: 16px"
          >
            <el-option v-for="tag in allTags" :key="tag" :label="tag" :value="tag" />
          </el-select>
          <el-select
            v-model="selectedProject"
            clearable
            filterable
            placeholder="选择项目"
            style="width: 180px"
          >
            <el-option v-for="proj in allProjects" :key="proj" :label="proj" :value="proj" />
          </el-select>
        </div>
      </transition>
    </div>
    <div class="bug-list">
      <div class="bug-item" v-for="bug in filteredList" :key="bug.id" @click="goToDetail(bug)">
        <img class="bug-thumb" :src="bug.thumbnail" alt="thumb" />
        <div class="bug-content">
          <div class="bug-header">
            <span class="bug-id">工单号：GD{{ bug.id }}</span>
            <span class="divider">|</span>
            <span class="bug-project">{{ bug.project }}</span>
            <span class="divider">|</span>
            <span class="bug-type">{{ getBugTypeText(bug.bugType) }}</span>
            <span class="divider">|</span>
            <span class="bug-version">{{ bug.version }}版本</span>
          </div>
          <div class="bug-title">{{ bug.title }}</div>
          <div class="bug-desc" v-if="bug.desc">{{ bug.desc }}</div>
          <div class="bug-tags">
            <el-tag v-for="tag in bug.tags" :key="tag" size="small" style="margin-right: 6px">{{
              tag
            }}</el-tag>
          </div>
          <div class="bug-meta">
            <span>提交人：{{ bug.bugWho }}</span>
            <span class="divider">|</span>
            <span>处理人：{{ bug.handler }}</span>
            <span class="divider">|</span>
            <span>日期：{{ bug.bugDate }}</span>
            <span class="divider">|</span>
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
  .filter-bar {
    margin-bottom: 18px;
    display: block;
    .el-button {
      margin-right: 0;
    }
    .filter-panel {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #f7f8fa;
      border-radius: 8px;
      padding: 16px 0px 10px 0px;
      box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.04);
    }
  }
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
        .bug-footer {
          font-size: 12px;
          color: #999;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-top: 4px;
          .divider {
            color: #e0e0e0;
            margin: 0 4px;
          }
        }
        .bug-header {
          font-size: 14px;
          color: #555;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 6px;
          .bug-id {
            font-weight: bold;
            color: #2d8cf0;
            font-size: 15px;
            margin-right: 8px;
            letter-spacing: 1px;
          }
          .divider {
            color: #e0e0e0;
            margin: 0 4px;
          }
        }
      }
    }
  }
}
</style>

<style scoped>
.slide-down-up-enter-active,
.slide-down-up-leave-active {
  transition:
    opacity 0.25s cubic-bezier(0.55, 0, 0.1, 1),
    transform 0.25s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-down-up-enter-from {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.98);
}
.slide-down-up-enter-to {
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
.slide-down-up-leave-from {
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
.slide-down-up-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.98);
}
</style>
