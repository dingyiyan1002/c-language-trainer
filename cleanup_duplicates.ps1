# 清理重复组件目录的 PowerShell 脚本
$basePath = Get-Location
$componentsPath = Join-Path $basePath "src\components"

Write-Host "当前目录：$basePath"
Write-Host "组件目录：$componentsPath"

# 要删除的重复目录
$dirsToRemove = @('memory', 'games', 'learning', 'layout', 'ui', 'ai')

foreach ($dir in $dirsToRemove) {
    $fullPath = Join-Path $componentsPath $dir
    if (Test-Path $fullPath) {
        Write-Host "正在删除：$fullPath"
        Remove-Item -Path $fullPath -Recurse -Force
        Write-Host "已删除：$dir"
    } else {
        Write-Host "目录不存在：$dir"
    }
}

Write-Host "`n清理完成!"
Write-Host "`n剩余组件目录内容:"
Get-ChildItem -Path $componentsPath | Select-Object Name
