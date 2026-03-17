@echo off
echo ================================================
echo WSL 安装 - 立即重启
echo ================================================
echo.
echo WSL Windows 功能已通过 DISM 启用
echo 必须重启系统才能使 WSL 正常工作
echo.
echo 即将在 10 秒后重启...
echo.
echo 如需取消重启，请按 Ctrl+C
echo.
timeout /t 10 /nobreak
shutdown /r /t 0
