@echo off
chcp 65001 > nul
echo ========================================
echo   文档开发服务器启动脚本
echo ========================================
echo.

REM 运行命令
echo 正在启动文档开发服务器...
echo 按 Ctrl+C 可停止服务
echo.
npm run docs:dev
REM 可以修改package.json文件指定端口 "docs:dev": "vitepress dev docs --port 5173",

pause