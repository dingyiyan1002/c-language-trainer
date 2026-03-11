@echo off
echo ======================================
echo 本地 Claude Code 桥接测试
echo ======================================
echo.

echo [1/3] 检查 Claude CLI 是否安装...
claude --version
if %errorlevel% neq 0 (
    echo ERROR: Claude CLI 未安装
    echo 请运行：npm install -g @anthropic-ai/claude-code
    pause
    exit /b 1
)
echo  Claude CLI 已安装！
echo.

echo [2/3] 检查后端服务是否运行...
curl -s http://localhost:3001/api/heartbeat >nul 2>&1
if %errorlevel% neq 0 (
    echo 后端服务未运行，请先启动后端服务
    echo 运行：cd server && node index.js
    pause
    exit /b 1
)
echo  后端服务正在运行！
echo.

echo [3/3] 测试本地 Claude 桥接...
curl -s http://localhost:3001/api/ai/local-check
echo.
echo.

echo ======================================
echo 测试完成！
echo ======================================
pause
