
## 加密组件 Secret 

<Secret password="123">
这里是需要密码保护的隐藏内容。
只有输入正确的密码 **“123”** 后，这段文字才会显示出来。
</Secret>


## 大导航组件 NavBox

<NavBox :links="[
{ name: 'VitePress 官网', url: 'https://vitepress.dev/', desc: 'VitePress 官方文档' },
{ name: 'Vue.js', url: 'https://vuejs.org/', desc: '渐进式 JavaScript 框架' },
{ name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', desc: 'Web 技术权威文档' },
{ name: 'GitHub', url: 'https://github.com/', desc: '全球最大的代码托管平台' }
]" />


<NavBox
title="开发资源"
:links="[
{ name: 'npm', url: 'https://www.npmjs.com/', icon: '/icons/npm.svg', desc: 'Node.js 包管理器' },
{ name: 'Vite', url: 'https://vitejs.dev/', emoji: '⚡', desc: '下一代前端构建工具' },
{ name: 'Stack Overflow', url: 'https://stackoverflow.com/', emoji: '💬', desc: '程序员问答社区' }
]"
/>

## 行内导航组件 NavBox


这里介绍一个前端工具：<NavLink name="npm" url="https://www.npmjs.com/" desc="Node.js 包管理器" icon="/icons/npm.svg" />

**推荐资源：**
- <NavLink name="Vite 官方文档" url="https://vitejs.dev/" desc="下一代前端构建工具" emoji="⚡" badge="推荐" />
- <NavLink name="项目内页" url="/about/" desc="关于本项目的介绍" target="_self" /> <!-- 在当前页打开 -->


在开发中，我经常访问 <NavLink name="MDN" url="https://developer.mozilla.org/" emoji="📚" desc="Web开发文档" /> 查阅资料，
有时也会去 <NavLink name="Stack Overflow" url="https://stackoverflow.com/" emoji="💬" desc="程序员问答社1111区" /> 解决问题。




