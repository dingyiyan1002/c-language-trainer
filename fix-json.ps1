# 重新生成正确的 JSON

$sourceDir = 'C:\temp\homework'
$files = Get-ChildItem -Path $sourceDir -Recurse -Filter '*.c' -File | Sort-Object FullName | Select-Object -First 100

$presets = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $charCount = $content.Length
    
    if ($charCount -eq 0) { continue }
    
    $fileName = $file.BaseName
    
    if ($charCount -lt 200) {
        $difficulty = '入门'
    } elseif ($charCount -lt 400) {
        $difficulty = '基础'
    } elseif ($charCount -lt 600) {
        $difficulty = '中级'
    } else {
        $difficulty = '高级'
    }
    
    $presets += [PSCustomObject]@{
        name = $fileName
        difficulty = $difficulty
        code = $content
        chars = $charCount
    }
}

# 导出为正确的 JSON 数组格式
$presets | ConvertTo-Json -Depth 10 | Out-File 'C:\temp\typing-presets-fixed.json' -Encoding UTF8

Write-Host "Exported $($presets.Count) presets"
