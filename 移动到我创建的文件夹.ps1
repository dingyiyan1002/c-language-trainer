# 移动用户创建的文件和文件夹到 新建文件夹

$targetDir = "C:\Users\6\Downloads\新建文件夹"

# 确保目标目录存在
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
    Write-Host "Created: $targetDir" -ForegroundColor Green
}

Write-Host "`n=== 开始移动文件和文件夹 ===" -ForegroundColor Cyan

# 1. 移动编号文件夹 00-06
$folders = @("00-归档文件", "01-模型配置", "02-启动脚本", "03-文档资料", "04-测试文件", "05-项目源码", "06-配置备份")
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Move-Item $folder $targetDir -Force
        Write-Host "Moved folder: $folder" -ForegroundColor Green
    }
}

# 2. 移动 PowerShell 脚本（整理用的脚本）
$scripts = @("整理文件.ps1", "移动文件.ps1", "重命名文件夹.ps1", "移动到我创建的文件夹.ps1")
foreach ($script in $scripts) {
    if (Test-Path $script) {
        Move-Item $script $targetDir -Force
        Write-Host "Moved script: $script" -ForegroundColor Gray
    }
}

Write-Host "`n=== 移动完成 ===" -ForegroundColor Green
Write-Host "所有文件已移动到: $targetDir" -ForegroundColor Cyan

# 显示结果
Write-Host "`n目标文件夹内容:" -ForegroundColor Yellow
Get-ChildItem $targetDir | ForEach-Object {
    Write-Host "  $($_.Name)" -ForegroundColor White
}

pause
