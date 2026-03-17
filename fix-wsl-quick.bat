@echo off
chcp 65001 >nul
color 0A
echo ================================================
echo WSL 修复脚本 - 一键修复版
echo ================================================
echo.

echo [1/6] 正在关闭 WSL 进程...
taskkill /F /IM wsl.exe 2>nul
taskkill /F /IM ubuntu.exe 2>nul
taskkill /F /IM vmmem* 2>nul
timeout /t 2 /nobreak >nul
echo 完成
echo.

echo [2/6] 正在注销 Ubuntu 发行版...
wsl --unregister Ubuntu 2>nul
wsl --unregister Ubuntu-24.04 2>nul
echo 完成
echo.

echo [3/6] 正在重置 WSL 功能...
echo 禁用中...
dism.exe /online /disable-feature /featurename:Microsoft-Windows-Subsystem-Linux /norestart
timeout /t 3 /nobreak >nul
echo 启用中...
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
timeout /t 2 /nobreak >nul
echo 完成
echo.

echo [4/6] 正在重置虚拟机平台...
echo 禁用中...
dism.exe /online /disable-feature /featurename:VirtualMachinePlatform /norestart
timeout /t 3 /nobreak >nul
echo 启用中...
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
timeout /t 2 /nobreak >nul
echo 完成
echo.

echo [5/6] 设置默认 WSL 版本为 2...
wsl --set-default-version 2
echo 完成
echo.

echo [6/6] 清理临时文件...
del /q "%TEMP%\wsl-*.log" 2>nul
echo 完成
echo.

echo ================================================
echo 修复完成！
echo ================================================
echo.
echo 重要提示：
echo 1. 必须重启电脑才能使更改生效
echo 2. 重启后运行：ubuntu 或 wsl --install -d Ubuntu
echo.
pause
