// .vitepress/config.js
import {defineConfig} from 'vitepress';

// 利用环境变量判断，是否是GitHub Pages
const isGitHubPages = process.env.TARGET_DEPLOY === 'github';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
    ignoreDeadLinks: true, // 忽略死链检查，官方不建议，这会导致不分内部外部的链接都不检查，可能会有错误页面，但我需要
    base: isGitHubPages ? '/ui-VitePress/' : '/', // GitHub Pages 的主页地址与 本地以及Cloudflare Pages不同，因此利用环境变量判断
    lang: 'zh-CN',
    title: '个人笔记',
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
            {text: '示例', link: '/example'},
            {text: 'JAVA面经', link: '/notes/java面经/java/HTTP常用状态码'},
            {
                text: '开发笔记',
                items: [
                    {
                        text: 'JAVA',
                        items: [
                            {text: 'JAVA8新特性', link: '/notes/java/java8新特性/Lambda表达式'},
                            {text: '随手记', link: '/notes/java/随手记/随手笔记'}
                        ]
                    },
                    {text: '工具包hutool', link: '/notes/hutool/CollUtil'},
                    {text: 'MYSQL', link: '/notes/mysql/常用函数'},
                    {
                        text: 'MAVEN',
                        items: [
                            {text: 'maven的特性', link: '/notes/maven/maven的特性/maven概念'},
                            {text: 'pom的配置', link: '/notes/maven/pom的配置/pom基本配置'},
                            {text: 'maven的使用', link: '/notes/maven/maven的使用/安装'}
                        ]
                    },
                ]
            },
            {
                text: 'dev笔记',
                items: [
                    {text: '实战', link: '/notes/dev笔记/实战经验'},
                    {text: '微服务', link: '/notes/dev笔记/微服务/微服务概念'},
                    {text: '锁的概念', link: '/notes/dev笔记/锁的概念'}
                ]
            },
            {
                text: '部署与运维',
                items: [
                    {text: 'Docker', link: '/notes/部署与运维/docker/Docker简介'},
                    {text: 'Jenkins', link: '/notes/部署与运维/jenkins/Jenkins简介'},
                    {
                        text: '实战',
                        items: [
                            {text: '自动化', link: '/notes/部署与运维/实战/我的自动化进化史'}
                        ]
                    }
                ]
            },
            {
                text: '其他',
                items: [
                    {text: '随手记', link: '/notes/随手记/笔记'},
                    {text: '平台', link: '/notes/平台/淘宝开放平台/API'}
                ]
            }
        ],

        sidebar: {
            // 当用户位于 `/notes/java/` 目录时，会显示此侧边栏
            '/notes/java/': [
                {
                    text: 'JAVA',
                    items: [
                        {
                            text: 'JAVA8新特性',
                            items: [
                                {text: 'Lambda表达式', link: '/notes/java/java8新特性/Lambda表达式'},
                                {text: 'Stream流', link: '/notes/java/java8新特性/Stream流'},
                                {text: '接口默认方法', link: '/notes/java/java8新特性/接口默认方法'},
                                {text: '方法引用', link: '/notes/java/java8新特性/方法引用'}
                            ]
                        },
                        {text: '随手记', link: '/notes/java/随手记/随手笔记'}
                    ]
                }
            ],
            '/notes/hutool/': [
                {
                    text: 'hutool',
                    items: [
                        {text: '集合工具类CollUtil', link: '/notes/hutool/CollUtil'},
                        {text: 'Map工具类MapUtil', link: '/notes/hutool/MapUtil'}
                    ]
                }
            ],
            '/notes/mysql/': [
                {text: 'MYSQL', link: '/notes/mysql/常用函数'}
            ],
            '/notes/maven/': [
                {
                    text: 'MAVEN',
                    items: [
                        {
                            text: 'maven的特性',
                            items: [
                                {text: 'maven概念', link: '/notes/maven/maven的特性/maven概念'}
                            ]
                        },
                        {
                            text: 'pom的配置',
                            items: [
                                {text: 'pom基本配置', link: '/notes/maven/pom的配置/pom基本配置'},
                                {text: '依赖-dependencies', link: '/notes/maven/pom的配置/依赖-dependencies'}
                            ]
                        },
                        {
                            text: 'maven的使用',
                            items: [
                                {text: '安装', link: '/notes/maven/maven的使用/安装'},
                                {text: 'settings的配置', link: '/notes/maven/maven的使用/settings的配置'},
                                {text: 'maven常用命令', link: '/notes/maven/maven的使用/maven常用命令'},
                                {text: 'idea与maven', link: '/notes/maven/maven的使用/idea与maven'}
                            ]
                        }
                    ]
                }
            ],
            '/notes/java面经/': [
                {
                    text: 'java面经',
                    items: [
                        {
                            text: 'java',
                            collapsed: false,
                            items: [
                                {text: 'HTTP常用状态码', link: '/notes/java面经/java/HTTP常用状态码'},
                                {text: 'JVM调优', link: '/notes/java面经/java/JVM调优'},
                                {text: '设计模式-创建型', link: '/notes/java面经/java/设计模式-创建型'},
                                {text: '设计模式-结构型', link: '/notes/java面经/java/设计模式-结构型'},
                                {text: '设计模式-行为型', link: '/notes/java面经/java/设计模式-行为型'},
                                {text: 'java-未分类', link: '/notes/java面经/java/java-未分类'}
                            ]
                        },
                        {
                            text: 'MQ',
                            collapsed: false,
                            items: [
                                {text: 'RabbitMQ', link: '/notes/java面经/MQ/RabbitMQ'},
                                {text: 'MQ-未分类', link: '/notes/java面经/MQ/MQ-未分类'}
                            ]
                        },
                        {
                            text: 'Redis',
                            collapsed: false,
                            items: [
                                {text: 'Redis基础', link: '/notes/java面经/Redis/Redis基础'},
                                {text: 'Redis高可用', link: '/notes/java面经/Redis/Redis高可用'},
                                {text: '实战分析', link: '/notes/java面经/Redis/实战分析'}
                            ]
                        },
                        {
                            text: '数据库',
                            link: '/notes/java面经/数据库/数据库-未分类'
                        },
                        {
                            text: '数据结构',
                            link: '/notes/java面经/数据结构/数据结构基础'
                        },
                        {
                            text: '框架',
                            link: '/notes/java面经/框架/框架-未分类'
                        },
                        {
                            text: '问题列表',
                            collapsed: false,
                            items: [
                                {text: '问题列表', link: '/notes/java面经/问题列表/问题列表'},
                                {text: '部分示例题', link: '/notes/java面经/问题列表/部分示例题'}
                            ]
                        },
                    ]
                }
            ],
            '/notes/平台/': [
                {
                    text: '平台',
                    items: [
                        {
                            text: '淘宝开放平台',
                            items: [
                                {text: 'API', link: '/notes/平台/淘宝开放平台/API'},
                                {text: '快递公司编码', link: '/notes/平台/淘宝开放平台/快递公司编码'}
                            ]
                        },
                        {
                            text: '抖音开放平台',
                            items: [
                                {text: 'API', link: '/notes/平台/抖音开放平台/API'},
                                {text: '快递公司编码', link: '/notes/平台/抖音开放平台/快递公司编码'}
                            ]
                        }
                    ]
                }
            ],
            '/notes/dev笔记/微服务/': [
                {
                    text: '微服务',
                    items: [

                        {text: '微服务概念', link: '/notes/dev笔记/微服务/微服务概念'},
                        {text: '1.1 注册中心Nacos', link: '/notes/dev笔记/微服务/1.1 注册中心Nacos'},
                        {text: '2.1 负载均衡Ribbon', link: '/notes/dev笔记/微服务/2.1 负载均衡Ribbon'},
                        {text: '3.1 服务调用OpenFeign', link: '/notes/dev笔记/微服务/3.1 服务调用OpenFeign'},
                        {text: '4.1 服务保护Sentinel', link: '/notes/dev笔记/微服务/4.1 服务保护Sentinel'},
                        {text: '5.1 API网关Gateway', link: '/notes/dev笔记/微服务/5.1 API网关Gateway'}
                    ]
                }
            ],
            '/notes/部署与运维/docker/': [
                {text: 'Docker简介', link: '/notes/部署与运维/docker/Docker简介'},
                {text: 'Docker常用命令', link: '/notes/部署与运维/docker/Docker常用命令'},
                {text: 'Docker迁移与备份', link: '/notes/部署与运维/docker/Docker迁移与备份'},
                {text: 'Dockerfile-构建镜像工具', link: '/notes/部署与运维/docker/Dockerfile-构建镜像工具'},
                {text: 'DockerCompose-镜像容器编排工具', link: '/notes/部署与运维/docker/DockerCompose-镜像容器编排工具'},
                {text: 'registry-镜像仓库', link: '/notes/部署与运维/docker/registry-镜像仓库'},
                {
                    text: 'Docker实战',
                    collapsed: false,
                    items: [
                        {text: 'Docker部署MySQL', link: '/notes/部署与运维/docker/Docker部署MySQL'},
                        {text: 'Docker部署redis', link: '/notes/部署与运维/docker/Docker部署redis'},
                        {text: 'Docker部署tomcat', link: '/notes/部署与运维/docker/Docker部署tomcat'}
                    ]
                }
            ],
            '/notes/部署与运维/jenkins/': [
                {text: 'Jenkins简介', link: '/notes/部署与运维/jenkins/Jenkins简介'}
            ],
            '/notes/部署与运维/实战/': [
                {text: '我的自动化进化史', link: '/notes/部署与运维/实战/我的自动化进化史'}
            ],
            '/notes/随手记/': [
                {
                    text: '随手记',
                    link: '/notes/随手记/笔记'
                }
            ]
        },

        // 本地搜索
        search: {
            provider: 'local'
        },

        // 编辑链接,以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面
        editLink: {
            pattern: 'https://github.com/r-ddz/ui-VitePress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',

        // 显示页面最后更新时间，你必须提交 markdown 文件才能看到最后更新时间。
        // lastUpdated: true,
        lastUpdated: {
            text: '最后更新于'
        },

        // 页脚
        footer: {
            message: '页脚：版权前显示的信息',
            copyright: '页脚：实际的版权文本'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        }
    }
});
