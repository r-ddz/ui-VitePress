<template>
  <div class="secret-container">
    <div v-if="!unlocked" class="secret-locked">
      <p>🔒 此内容已加密</p>
      <input
          v-model="inputPassword"
          type="password"
          placeholder="请输入密码"
          class="secret-input"
          @keyup.enter="checkPassword"
      />
      <button @click="checkPassword" class="secret-button">解锁查看</button>
      <p v-if="error" class="secret-error">密码错误，请重试。</p>
    </div>
    <div v-else class="secret-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 定义组件属性，用于在md文件中设置密码，例如：<Secret password="myPassword123">
const props = defineProps({
  password: {
    type: String,
    required: true
  }
})
const unlocked = ref(false)
const inputPassword = ref('')
const error = ref(false)

const checkPassword = () => {
  if (inputPassword.value === props.password) {
    unlocked.value = true
    error.value = false
  } else {
    error.value = true
    // 清空输入框
    inputPassword.value = ''
  }
}
</script>

<style scoped>
.secret-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}
.secret-locked {
  text-align: center;
}
.secret-input {
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  padding: 8px 12px;
  margin: 10px;
  width: 200px;
}
.secret-button {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
}
.secret-button:hover {
  background-color: var(--vp-button-brand-hover-bg);
}
.secret-error {
  color: var(--vp-c-red);
  font-size: 0.9em;
  margin-top: 8px;
}
.secret-content {
  padding-top: 10px;
}
</style>