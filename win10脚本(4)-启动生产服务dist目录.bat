@echo off
chcp 65001 > nul
echo ========================================
echo   文档生产服务器启动脚本
echo ========================================
echo.

REM 运行命令
echo 正在启动文档开发服务器...
echo 按 Ctrl+C 可停止服务
echo.
npm run docs:preview
REM 可以修改package.json文件指定端口 "docs:preview": "vitepress preview docs --port 4173"

pause