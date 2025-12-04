<template>
  <div class="nav-box">
    <!-- 组件标题，通过prop传入 -->
    <h3 v-if="title" class="nav-box-title">{{ title }}</h3>
    <!-- 链接展示区域，使用无序列表 -->
    <ul class="nav-box-list">
      <!-- 遍历传入的links数组，生成链接项 -->
      <li v-for="link in links" :key="link.url" class="nav-box-item">
        <a
            :href="link.url"
            :title="link.desc || link.name"
            class="nav-box-link"
            :target="link.target || '_blank'"
            :rel="link.rel || 'noopener noreferrer'"
        >
          <!-- 链接图标，支持图片或emoji -->
          <span v-if="link.icon || link.emoji" class="nav-box-icon">
            <img v-if="link.icon" :src="link.icon" :alt="link.name" />
            <span v-else-if="link.emoji">{{ link.emoji }}</span>
          </span>
          <!-- 链接名称和描述 -->
          <span class="nav-box-text">
            <strong class="nav-box-name">{{ link.name }}</strong>
            <span v-if="link.desc" class="nav-box-desc">{{ link.desc }}</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 定义组件接收的属性
defineProps({
  title: String, // 导航块的标题
  links: { // 链接数组，为必需项
    type: Array,
    required: true,
    // 每个链接对象的基本结构验证
    validator(value) {
      return value.every(item => item && item.name && item.url);
    }
  }
});
</script>

<style scoped>
.nav-box {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.nav-box:hover {
  border-color: var(--vp-c-brand);
}

.nav-box-title {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.nav-box-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  /* 创建自适应网格布局，最小列宽200px */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.nav-box-item {
  margin: 0;
}

.nav-box-link {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  transition: all 0.2s ease;
  height: 100%;
}
.nav-box-link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.nav-box-icon {
  flex-shrink: 0;
  margin-right: 0.75rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
}
.nav-box-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.nav-box-text {
  flex-grow: 1;
  min-width: 0; /* 防止内容溢出 */
}

.nav-box-name {
  display: block;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-box-desc {
  display: block;
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制描述最多显示两行 */
  -webkit-box-orient: vertical;
}

/* 响应式调整：小屏幕上减少内边距和列数 */
@media (max-width: 640px) {
  .nav-box {
    padding: 1rem;
  }
  .nav-box-list {
    grid-template-columns: 1fr; /* 单列布局 */
    gap: 0.5rem;
  }
}
</style>