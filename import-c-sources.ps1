# 从已导出的 JSON 生成跟打练习预设

$sourceFile = 'C:\temp\homework\sources.json'
$outputFile = 'C:\temp\typing-presets.json'

# 读取 JSON
$sources = Get-Content $sourceFile -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "Loaded $($sources.Count) sources"

$presets = @()
$count = 0

foreach ($source in $sources) {
    if ($count -ge 100) { break }
    
    $content = $source.content
    $path = $source.path
    
    # 从路径提取文件名
    $fileName = Split-Path $path -Leaf
    $name = $fileName -replace '\.c$', ''
    
    # 计算字符数
    $charCount = $content.Length
    
    # 判断难度
    if ($charCount -lt 200) {
        $difficulty = '入门'
    } elseif ($charCount -lt 400) {
        $difficulty = '基础'
    } elseif ($charCount -lt 600) {
        $difficulty = '中级'
    } else {
        $difficulty = '高级'
    }
    
    $preset = [PSCustomObject]@{
        name = $name
        difficulty = $difficulty
        code = $content
        chars = $charCount
    }
    
    $presets += $preset
    $count++
    Write-Host "[$count] $name ($difficulty, $charCount chars)"
}

# 导出
$presets | ConvertTo-Json -Depth 3 | Out-File $outputFile -Encoding UTF8
Write-Host "`nExported $($presets.Count) presets to $outputFile"
