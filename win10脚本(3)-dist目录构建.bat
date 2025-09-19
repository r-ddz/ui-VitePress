@echo off
chcp 65001 > nul
echo ========================================
echo   VitePress 文档构建脚本
echo ========================================
echo.

echo 正在构建 VitePress 文档站点...
echo.
npm run docs:build

echo.
echo ========================================
echo   构建成功完成!
echo ========================================
echo.
echo 构建文件已输出到:
echo - .vitepress/dist 目录 (VitePress 默认)
echo - 或其他配置的输出目录
echo.
echo 您可以将这些文件部署到任何静态网站托管服务
echo 如 GitHub Pages, Netlify, Vercel 等
echo.
pause