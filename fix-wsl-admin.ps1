# WSL 完整修复脚本 - 管理员版本
# 使用方法：在管理员 PowerShell 中运行 .\fix-wsl-admin.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL 完整修复脚本 (管理员版)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查管理员权限
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "错误：需要管理员权限！" -ForegroundColor Red
    Write-Host "请按 Ctrl+Shift+Enter 以管理员身份运行 PowerShell" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "按回车键退出"
    exit 1
}

Write-Host "已确认管理员权限" -ForegroundColor Green
Write-Host ""

# 步骤 1: 关闭所有 WSL 实例
Write-Host "[步骤 1/8] 关闭所有 WSL 实例..." -ForegroundColor Yellow
Stop-Process -Name "wsl" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "ubuntu*" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "vmmem*" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2
Write-Host "完成" -ForegroundColor Green

# 步骤 2: 注销所有现有 WSL 发行版
Write-Host "[步骤 2/8] 注销所有现有 WSL 发行版..." -ForegroundColor Yellow
wsl --unregister Ubuntu 2>&1 | Out-Null
wsl --unregister Ubuntu-24.04 2>&1 | Out-Null
wsl --unregister Debian 2>&1 | Out-Null
Start-Sleep -Seconds 1
Write-Host "完成" -ForegroundColor Green

# 步骤 3: 清理 WSL 注册表
Write-Host "[步骤 3/8] 清理 WSL 注册表..." -ForegroundColor Yellow
$lxssPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss"
if (Test-Path $lxssPath) {
    # 保留 Plugins 子项，删除其他发行版项
    Get-ChildItem $lxssPath | Where-Object { $_.PSIsContainer -and $_.Name -ne "Plugins" } | Remove-Item -Recurse -Force
    Write-Host "注册表已清理" -ForegroundColor Green
} else {
    Write-Host "Lxss 注册表路径不存在" -ForegroundColor Yellow
}

# 步骤 4: 重置 WSL 功能
Write-Host "[步骤 4/8] 重置 WSL 功能..." -ForegroundColor Yellow
Write-Host "禁用 WSL 功能..." -ForegroundColor Gray
dism.exe /online /disable-feature /featurename:Microsoft-Windows-Subsystem-Linux /norestart
Start-Sleep -Seconds 3
Write-Host "启用 WSL 功能..." -ForegroundColor Gray
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
Start-Sleep -Seconds 2
Write-Host "WSL 功能已重置" -ForegroundColor Green

# 步骤 5: 重置虚拟机平台功能
Write-Host "[步骤 5/8] 重置虚拟机平台功能..." -ForegroundColor Yellow
dism.exe /online /disable-feature /featurename:VirtualMachinePlatform /norestart
Start-Sleep -Seconds 3
Write-Host "启用虚拟机平台..." -ForegroundColor Gray
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
Start-Sleep -Seconds 2
Write-Host "虚拟机平台已重置" -ForegroundColor Green

# 步骤 6: 重置 Ubuntu 应用
Write-Host "[步骤 6/8] 重置 Ubuntu 应用..." -ForegroundColor Yellow
try {
    # 尝试通过 Appx 重置
    $ubuntuApp = Get-AppxPackage -Name "*Ubuntu*"
    if ($ubuntuApp) {
        Write-Host "找到 Ubuntu: $($ubuntuApp.Name)" -ForegroundColor Gray
        # 添加 Appx 包重置
        Reset-AppxPackage -Package $ubuntuApp.PackageFullName -ErrorAction SilentlyContinue
        Write-Host "Ubuntu 已重置" -ForegroundColor Green
    } else {
        Write-Host "未找到 Ubuntu 包，将重新安装" -ForegroundColor Yellow
    }
} catch {
    Write-Host "重置 Ubuntu 失败：$_" -ForegroundColor Red
}

# 步骤 7: 更新 WSL 内核
Write-Host "[步骤 7/8] 更新 WSL 内核..." -ForegroundColor Yellow
try {
    # 尝试使用 wsl --update
    wsl --update 2>&1 | Out-Null
    Write-Host "WSL 内核已更新" -ForegroundColor Green
} catch {
    Write-Host "WSL 更新失败，继续..." -ForegroundColor Yellow
}

# 步骤 8: 设置默认版本
Write-Host "[步骤 8/8] 设置 WSL 默认版本..." -ForegroundColor Yellow
wsl --set-default-version 2 2>&1 | Out-Null
Write-Host "WSL 默认版本已设置为 2" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "修复完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Ubuntu 是否可以启动
Write-Host "测试 Ubuntu 启动..." -ForegroundColor Yellow
try {
    # 尝试启动 Ubuntu（不登录，只是测试）
    $process = Start-Process "wsl" -ArgumentList "--distribution Ubuntu", "--user root", "--exec", "echo 'WSL is working'" -PassThru -Wait
    if ($process.ExitCode -eq 0) {
        Write-Host "Ubuntu 可以正常启动！" -ForegroundColor Green
    } else {
        Write-Host "Ubuntu 启动失败 (退出码：$($process.ExitCode))" -ForegroundColor Red
        Write-Host "请重新安装 Ubuntu: wsl --install -d Ubuntu" -ForegroundColor Yellow
    }
} catch {
    Write-Host "无法启动 Ubuntu: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "建议操作：" -ForegroundColor Cyan
Write-Host "1. 重启电脑以确保所有更改生效" -ForegroundColor White
Write-Host "2. 重启后运行：wsl --install -d Ubuntu" -ForegroundColor White
Write-Host "3. 或者从 Microsoft Store 重新安装 Ubuntu" -ForegroundColor White
Write-Host ""
Read-Host "按回车键退出"
