# 将预设题目添加到 CodeTypingPractice.tsx

$presetsFile = 'C:\temp\typing-presets.json'
$targetFile = 'C:\Users\6\Downloads\web-development-request-received - 副本\src\components\CodeTypingPractice.tsx'

# 读取预设
$presets = Get-Content $presetsFile -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "Loaded $($presets.Count) presets"

# 读取目标文件
$content = Get-Content $targetFile -Raw -Encoding UTF8

# 找到 PRESET_CODES 数组的结束位置
$presetStart = $content.IndexOf('const PRESET_CODES: PresetCode[] = [')
if ($presetStart -eq -1) {
    Write-Host "Could not find PRESET_CODES array"
    exit 1
}

# 找到数组结束的大括号
$presetEnd = $content.IndexOf('];', $presetStart)
if ($presetEnd -eq -1) {
    Write-Host "Could not find end of PRESET_CODES array"
    exit 1
}

# 生成新的预设代码
$newPresets = @()
foreach ($preset in $presets) {
    $name = $preset.name -replace "'", "''"
    $difficulty = $preset.difficulty
    $code = $preset.code -replace '\\', '\\' -replace '"', '\"' -replace "`n", '\n' -replace "`r", ''
    
    $newPreset = @"
  {
    name: '$name',
    difficulty: '$difficulty',
    code: "$code",
  },
"@
    $newPresets += $newPreset
}

# 插入新的预设
$before = $content.Substring(0, $presetEnd + 2)
$after = $content.Substring($presetEnd + 2)

$newContent = $before + "`n`n// 从桌面 C 源码导入的预设题目`n" + ($newPresets -join "`n") + $after

# 保存
$newContent | Out-File $targetFile -Encoding UTF8

Write-Host "Added $($presets.Count) presets to CodeTypingPractice.tsx"
