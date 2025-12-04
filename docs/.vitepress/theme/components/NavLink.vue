<template>
  <!-- 组件根元素，直接使用 <a> 标签 -->
  <a
      :href="url"
      class="nav-link"
      :title="desc || name"
      :target="target"
      :rel="computedRel"
  >
    <!-- 左侧图标区域 -->
    <span v-if="icon || emoji" class="nav-link-icon">
      <img v-if="icon" :src="icon" :alt="name" />
      <span v-else-if="emoji">{{ emoji }}</span>
    </span>
    <!-- 右侧文字区域 -->
    <span class="nav-link-text">
      <strong class="nav-link-name">{{ name }}</strong>
      <span v-if="desc" class="nav-link-desc">{{ desc }}</span>
    </span>
    <!-- 可选的右上角角标 -->
    <span v-if="badge" class="nav-link-badge">{{ badge }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

// 定义组件属性，比NavBox的项更灵活
const props = defineProps({
  name: { // 链接名称，必需
    type: String,
    required: true
  },
  url: { // 链接地址，必需
    type: String,
    required: true
  },
  desc: String, // 链接描述
  icon: String,  // 图标图片地址
  emoji: String, // 或使用Emoji
  badge: String, // 右上角角标文字，如“推荐”、“新”
  target: { // 打开方式，默认_blank
    type: String,
    default: '_blank'
  },
  rel: String // rel属性，用于安全
})

// 计算属性：自动补全rel属性
const computedRel = computed(() => {
  if (props.rel) return props.rel
  return props.target === '_blank' ? 'noopener noreferrer' : ''
})
</script>

<style scoped>
.nav-link {
  /* 基础布局 */
  display: inline-flex; /* 关键：使其可像文字一样嵌入行内 */
  align-items: center;
  width: 100%;
  max-width: 320px; /* 控制最大宽度，使其保持卡片感 */
  padding: 12px 16px;
  /* 样式 */
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  /* 交互 */
  transition: all 0.2s ease;
  position: relative; /* 为角标定位 */
}
.nav-link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 图标样式 */
.nav-link-icon {
  flex-shrink: 0;
  margin-right: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
.nav-link-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

/* 文字区域 */
.nav-link-text {
  flex-grow: 1;
  min-width: 0;
  text-align: left;
}

.nav-link-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-link-desc {
  display: block;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 角标样式 */
.nav-link-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: var(--vp-c-red);
  color: red;
  font-size: 0.65rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  line-height: 1;
}

/* 响应式：小屏幕上减小宽度 */
@media (max-width: 640px) {
  .nav-link {
    max-width: 280px;
    padding: 10px 12px;
  }
}
</style>