@echo off
chcp 65001 > nul
echo ========================================
echo   VitePress 本地开发依赖包下载脚本
echo ========================================
echo.

REM 检查是否已安装 Node.js
node -v >nul 2>&1
if errorlevel 1 (
    echo 错误: 未检测到 Node.js，请先安装 Node.js
    echo 请访问 https://nodejs.org/ 下载并安装 Node.js
    pause
    exit /b 1
)

REM 检查是否存在 package.json
if not exist package.json (
    echo 警告: 当前目录未找到 package.json 文件
    echo 正在初始化 npm 项目...
    npm init -y
    if errorlevel 1 (
        echo 错误: npm 初始化失败
        pause
        exit /b 1
    )
    echo npm 项目初始化成功!
    echo.
)

REM 显示当前 Node.js 和 npm 版本
echo 检测到环境:
node -v
npm -v
echo.

REM 安装 VitePress
echo 正在安装 VitePress (开发依赖)...
echo 这可能需要一些时间，请耐心等待...
echo.
npm add -D vitepress

if errorlevel 1 (
    echo.
    echo 错误: VitePress 安装失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo   VitePress 安装成功!
echo ========================================
echo.
echo 接下来你可以:
echo 1. 创建文档目录和文件
echo 2. 运行 npm run docs:dev 启动开发服务器
echo.
pause