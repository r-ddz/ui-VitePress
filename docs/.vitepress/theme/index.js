import DefaultTheme from 'vitepress/theme'
import Secret from './components/Secret.vue'
import NavBox from './components/NavBox.vue'
import NavLink from './components/NavLink.vue'

export default {
    ...DefaultTheme,
    // 增强Vue应用，注册全局组件
    enhanceApp({ app }) {
        app.component('Secret', Secret)
        app.component('NavBox', NavBox)
        app.component('NavLink', NavLink)
    }
}