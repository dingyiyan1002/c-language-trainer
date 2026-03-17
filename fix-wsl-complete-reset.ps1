# WSL 完全重置脚本 - 不重启版本
# 针对 lxss.sys 丢失的情况
# 使用方法：在管理员 PowerShell 中运行 .\fix-wsl-complete-reset.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL 完全重置脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Continue"

# 检查管理员权限
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "错误：需要管理员权限！" -ForegroundColor Red
    Write-Host "请以管理员身份运行 PowerShell" -ForegroundColor Yellow
    Read-Host "按回车键退出"
    exit 1
}

Write-Host "已确认管理员权限" -ForegroundColor Green
Write-Host ""

# 步骤 1: 强制关闭所有 WSL 相关进程
Write-Host "[1/8] 强制关闭所有 WSL 进程..." -ForegroundColor Yellow
taskkill /F /IM wsl.exe 2>$null
taskkill /F /IM ubuntu.exe 2>$null
taskkill /F /IM Ubuntu2404.exe 2>$null
taskkill /F /IM vmmem.exe 2>$null
taskkill /F /IM vmmemwsl.exe 2>$null
Start-Sleep -Seconds 3
Write-Host "完成" -ForegroundColor Green

# 步骤 2: 停止 WSL 服务
Write-Host "[2/8] 停止 WSL 服务..." -ForegroundColor Yellow
try {
    Stop-Service -Name "LxssManager" -Force -ErrorAction SilentlyContinue
    Write-Host "LxssManager 服务已停止" -ForegroundColor Gray
} catch {
    Write-Host "LxssManager 服务无法停止或不存在" -ForegroundColor Yellow
}

# 步骤 3: 注销所有 WSL 发行版
Write-Host "[3/8] 注销所有 WSL 发行版..." -ForegroundColor Yellow
wsl --unregister Ubuntu 2>&1 | Out-Null
wsl --unregister Ubuntu-24.04 2>&1 | Out-Null
wsl --unregister Debian 2>&1 | Out-Null
Write-Host "完成" -ForegroundColor Green

# 步骤 4: 清理注册表 Lxss
Write-Host "[4/8] 清理注册表..." -ForegroundColor Yellow
$lxssPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss"
if (Test-Path $lxssPath) {
    Remove-Item -Path $lxssPath -Recurse -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
    New-Item -Path $lxssPath -Force | Out-Null
    New-Item -Path "$lxssPath\Plugins" -Force | Out-Null
    Write-Host "注册表已清理并重建" -ForegroundColor Green
} else {
    Write-Host "注册表路径不存在，创建新路径" -ForegroundColor Yellow
    New-Item -Path $lxssPath -Force | Out-Null
    New-Item -Path "$lxssPath\Plugins" -Force | Out-Null
}

# 步骤 5: 禁用并重新启用 WSL 功能
Write-Host "[5/8] 重置 WSL Windows 功能..." -ForegroundColor Yellow
Write-Host "禁用 WSL 功能..." -ForegroundColor Gray
Start-Process -FilePath "dism.exe" -ArgumentList "/online","/disable-feature","/featurename:Microsoft-Windows-Subsystem-Linux","/norestart" -NoNewWindow -Wait
Start-Sleep -Seconds 5

Write-Host "启用 WSL 功能..." -ForegroundColor Gray
Start-Process -FilePath "dism.exe" -ArgumentList "/online","/enable-feature","/featurename:Microsoft-Windows-Subsystem-Linux","/all","/norestart" -NoNewWindow -Wait
Start-Sleep -Seconds 5
Write-Host "WSL 功能已重置" -ForegroundColor Green

# 步骤 6: 安装 WSL 内核
Write-Host "[6/8] 安装 WSL 内核..." -ForegroundColor Yellow
$msiPath = "C:\Users\6\Downloads\wsl_update_x64.msi"
if (Test-Path $msiPath) {
    Write-Host "找到 WSL 安装包：$msiPath" -ForegroundColor Gray
    $process = Start-Process -FilePath "msiexec.exe" -ArgumentList "/i",$msiPath,"/quiet","/norestart" -PassThru -Wait
    if ($process.ExitCode -eq 0) {
        Write-Host "WSL 内核安装成功" -ForegroundColor Green
    } else {
        Write-Host "WSL 内核安装失败 (退出码：$($process.ExitCode))" -ForegroundColor Red
    }
} else {
    Write-Host "未找到 WSL 安装包，尝试 winget 更新..." -ForegroundColor Yellow
    winget install --id Microsoft.WSL.2 --force --silent 2>&1 | Out-Null
}
Start-Sleep -Seconds 3

# 步骤 7: 设置 WSL 1 为默认版本（不需要 lxss.sys）
Write-Host "[7/8] 设置 WSL 1 为默认版本..." -ForegroundColor Yellow
wsl --set-default-version 1 2>&1 | Out-Null
Write-Host "完成" -ForegroundColor Green

# 步骤 8: 重新安装 Ubuntu
Write-Host "[8/8] 重新安装 Ubuntu..." -ForegroundColor Yellow

# 先卸载现有 Ubuntu 应用
Write-Host "卸载现有 Ubuntu 应用..." -ForegroundColor Gray
Get-AppxPackage -Name "*Ubuntu*" | ForEach-Object {
    Write-Host "找到：$($_.Name)" -ForegroundColor Gray
    # 不直接删除，因为可能是系统应用
}

# 尝试安装 Ubuntu
Write-Host "安装 Ubuntu (WSL 1 模式)..." -ForegroundColor Gray
$ubuntuProcess = Start-Process -FilePath "wsl.exe" -ArgumentList "--install","-d","Ubuntu","--no-launch" -PassThru -Wait -NoNewWindow
if ($ubuntuProcess.ExitCode -eq 0) {
    Write-Host "Ubuntu 安装成功" -ForegroundColor Green
} else {
    Write-Host "Ubuntu 安装失败 (退出码：$($ubuntuProcess.ExitCode))" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "重置完成" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 最终验证
Write-Host "尝试验证 WSL 状态..." -ForegroundColor Yellow
Write-Host "已安装的发行版:" -ForegroundColor Gray
wsl -l -v 2>&1 | Write-Host

Write-Host ""
Write-Host "下一步:" -ForegroundColor Cyan
Write-Host "1. 尝试运行：ubuntu run echo 'test'" -ForegroundColor White
Write-Host "2. 如果仍然失败，系统可能需要重启（但您的系统会回滚更改）" -ForegroundColor White
Write-Host ""
Write-Host "重要提示：" -ForegroundColor Yellow
Write-Host "如果 WSL 2 仍然无法工作（lxss.sys 不存在），请考虑：" -ForegroundColor White
Write-Host "- 使用 WSL 1 模式（不需要 lxss.sys）" -ForegroundColor White
Write-Host "- 或者使用虚拟机方案（VirtualBox/VMware）" -ForegroundColor White
Write-Host "- 或者使用 Docker Desktop with WSL 1 backend" -ForegroundColor White
Write-Host ""
Write-Host "按回车键退出..." -ForegroundColor Gray
Read-Host
