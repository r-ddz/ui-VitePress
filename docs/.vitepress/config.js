// .vitepress/config.js
import {defineConfig} from 'vitepress';

const isGitHubPages = process.env.TARGET_DEPLOY === 'github';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
    // base: '/ui-VitePress/', // github项目名，用于GitHub Pages自动构建
    base: isGitHubPages ? '/ui-VitePress/' : '/',
    lang: 'zh-CN',
    title: '测试title',
    description: 'Vite & Vue powered static site generator.',

    head: [
        /* head内容，渲染成:
            <link rel="icon" href="/favicon.png">
        */
        ['link', {rel: 'icon', href: '/favicon.png'}]
    ],

    themeConfig: {
        logo: '/favicon.png',
        nav: [
            {text: 'Example测试', link: '/example'},

            {
                text: 'Dropdown Menu',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'},
                    {
                        text: 'Item dddd',
                        items: [
                            {text: 'Item 11', link: '/item-111'},
                            {text: 'Item 22', link: '/item-222'},
                            {text: 'Item 33', link: '/item-333'},
                        ]
                    },
                ]
            }

            // ...
        ],

        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Example', link: '/example'},
                    {text: 'Example1', link: 'https://www.baidu.com'},
                    {text: 'Example2', link: '/example'},
                    {text: 'Example3', link: '/example'},
                    // ...
                ],
            },
        ],

        // 本地搜索
        search: {
            provider: 'local'
        },

        // 编辑链接,以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        // 显示页面最后更新时间，你必须提交 markdown 文件才能看到最后更新时间。
        lastUpdated: true,

        // 页脚
        footer: {
            message: '页脚：版权前显示的信息',
            copyright: '页脚：实际的版权文本'
        }
    }
});
