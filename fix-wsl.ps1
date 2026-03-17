# WSL 修复脚本 - 以管理员身份运行
# 使用方法：右键点击此文件 -> "使用 PowerShell 运行" 或在管理员 PowerShell 中运行 .\fix-wsl.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL 修复脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查管理员权限
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "错误：需要管理员权限！" -ForegroundColor Red
    Write-Host "请右键点击此文件，选择'使用 PowerShell 运行'" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "按回车键退出"
    exit 1
}

Write-Host "正在启用 WSL 功能..." -ForegroundColor Yellow

# 1. 启用 WSL 功能
try {
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    Write-Host "✓ WSL 功能已启用" -ForegroundColor Green
} catch {
    Write-Host "错误：无法启用 WSL 功能 - $_" -ForegroundColor Red
}

# 2. 启用虚拟机平台功能
try {
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    Write-Host "✓ 虚拟机平台功能已启用" -ForegroundColor Green
} catch {
    Write-Host "错误：无法启用虚拟机平台功能 - $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "功能已启用！需要重启电脑。" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$restart = Read-Host "是否现在重启电脑？(y/n)"
if ($restart -eq 'y' -or $restart -eq 'Y') {
    Write-Host "正在重启..." -ForegroundColor Yellow
    Restart-Computer
} else {
    Write-Host "请手动重启电脑，然后再次运行此脚本以安装 Ubuntu" -ForegroundColor Yellow
}
