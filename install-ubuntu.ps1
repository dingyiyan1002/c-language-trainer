# WSL Ubuntu 安装脚本
# 在重启电脑后运行此脚本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL Ubuntu 安装脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 设置 WSL 默认版本为 2
Write-Host "设置 WSL 默认版本为 2..." -ForegroundColor Yellow
wsl --set-default-version 2
Write-Host "✓ 完成" -ForegroundColor Green
Write-Host ""

# 安装 Ubuntu
Write-Host "正在安装 Ubuntu..." -ForegroundColor Yellow
wsl --install -d Ubuntu
Write-Host "✓ Ubuntu 安装完成" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "安装完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "下一步：" -ForegroundColor Yellow
Write-Host "1. 运行 'wsl' 命令启动 Ubuntu" -ForegroundColor White
Write-Host "2. 设置 Ubuntu 用户名和密码" -ForegroundColor White
Write-Host ""
