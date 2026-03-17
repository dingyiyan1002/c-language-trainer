# WSL 安装验证脚本 - 重启后运行
# 在系统重启后运行此脚本验证 WSL 是否正常工作

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "WSL 安装验证 (重启后)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$allGood = $true

# 1. 检查 WSL 功能是否已启用
Write-Host "[1/6] 检查 WSL Windows 功能..." -ForegroundColor Yellow
$wslFeature = $null
try {
    $wslFeature = Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux -ErrorAction SilentlyContinue
} catch {
    Write-Host "无法检查 Windows 功能 (需要管理员权限)" -ForegroundColor Gray
}

if ($wslFeature -and $wslFeature.State -eq "Enabled") {
    Write-Host "WSL 功能已启用" -ForegroundColor Green
} elseif ($wslFeature) {
    Write-Host "WSL 功能状态：$($wslFeature.State)" -ForegroundColor Yellow
    Write-Host "需要启用 WSL 功能！" -ForegroundColor Red
    $allGood = $false
} else {
    Write-Host "无法确定 WSL 功能状态" -ForegroundColor Gray
}
Write-Host ""

# 2. 检查 wsl.exe 命令
Write-Host "[2/6] 检查 wsl.exe 命令..." -ForegroundColor Yellow
$wslCmd = Get-Command wsl -ErrorAction SilentlyContinue
if ($wslCmd) {
    Write-Host "wsl.exe 已安装：$($wslCmd.Source)" -ForegroundColor Green
} else {
    Write-Host "wsl.exe 未找到!" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# 3. 检查已安装的 Linux 发行版
Write-Host "[3/6] 检查 Ubuntu 安装..." -ForegroundColor Yellow
$ubuntu = Get-AppxPackage -Name '*Ubuntu*' -ErrorAction SilentlyContinue
if ($ubuntu) {
    Write-Host "Ubuntu 已安装" -ForegroundColor Green
    Write-Host "  名称：$($ubuntu.Name)" -ForegroundColor Gray
    Write-Host "  版本：$($ubuntu.Version)" -ForegroundColor Gray
} else {
    Write-Host "Ubuntu 未安装!" -ForegroundColor Red
    Write-Host "运行命令：wsl --install -d Ubuntu" -ForegroundColor Cyan
    $allGood = $false
}
Write-Host ""

# 4. 检查已注册的 WSL 发行版
Write-Host "[4/6] 检查已注册的 WSL 发行版..." -ForegroundColor Yellow
try {
    $distributions = wsl --list --verbose 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "WSL 命令正常工作!" -ForegroundColor Green
        Write-Host $distributions -ForegroundColor Gray
    } else {
        Write-Host "WSL 命令返回错误:" -ForegroundColor Red
        Write-Host $distributions -ForegroundColor Gray
        $allGood = $false
    }
} catch {
    Write-Host "WSL 命令执行失败：$_" -ForegroundColor Red
    $allGood = $false
}
Write-Host ""

# 5. 测试 Ubuntu 运行
Write-Host "[5/6] 测试 Ubuntu 运行..." -ForegroundColor Yellow
try {
    $testResult = ubuntu run "echo 'WSL is working!'" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Ubuntu 可以正常运行!" -ForegroundColor Green
        Write-Host "输出：$testResult" -ForegroundColor Gray
    } else {
        Write-Host "Ubuntu 运行失败 (错误代码：$LASTEXITCODE)" -ForegroundColor Red
        Write-Host "首次运行需要初始化，请运行：ubuntu" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Ubuntu 命令执行失败：$_" -ForegroundColor Red
}
Write-Host ""

# 6. 检查 WSL 版本
Write-Host "[6/6] 检查 WSL 版本..." -ForegroundColor Yellow
try {
    $wslVersion = wsl --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "WSL 版本信息:" -ForegroundColor Green
        Write-Host $wslVersion -ForegroundColor Gray
    } else {
        Write-Host "无法获取 WSL 版本" -ForegroundColor Yellow
    }
} catch {
    Write-Host "WSL 版本检查失败" -ForegroundColor Yellow
}
Write-Host ""

# 总结
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "验证结果" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($allGood) {
    Write-Host "恭喜！WSL 安装成功!" -ForegroundColor Green
    Write-Host ""
    Write-Host "下一步:" -ForegroundColor Cyan
    Write-Host "  1. 运行 'wsl' 进入 Linux 环境" -ForegroundColor White
    Write-Host "  2. 设置用户名和密码" -ForegroundColor White
    Write-Host "  3. 开始使用 WSL 开发" -ForegroundColor White
} else {
    Write-Host "WSL 尚未完全安装或配置" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "建议操作:" -ForegroundColor Cyan
    Write-Host "  1. 如果刚重启：运行 enable-wsl-final.ps1 启用 WSL 功能" -ForegroundColor White
    Write-Host "  2. 如果 WSL 功能已启用：运行 'wsl --install -d Ubuntu'" -ForegroundColor White
    Write-Host "  3. 如果 Ubuntu 已安装：直接运行 'ubuntu' 初始化" -ForegroundColor White
}

Write-Host ""
Write-Host "MinGW 备选方案 (如果 WSL 仍有问题):" -ForegroundColor Cyan
Write-Host "  Git Bash + MinGW-w64 (GCC 14.2.0) 可用" -ForegroundColor White
Write-Host "  编译命令：/d/mingw64/bin/gcc.exe -o program.exe program.c" -ForegroundColor Gray

Write-Host ""
Read-Host "按 Enter 键退出"
