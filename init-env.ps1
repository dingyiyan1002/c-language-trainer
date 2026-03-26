# ============================================================
# 环境初始化脚本（直接执行，不可修改）
# ============================================================

# 1. 创建输出根目录
$root = "C:\Users\6\Downloads\web-development-request-received - 11\donghua"
if (!(Test-Path $root)) { New-Item -ItemType Directory -Path $root -Force }

# 2. 创建题型×章节的完整目录树
$types    = @("output","fill","choice","debug","order","multi-choice","multi-fill")
$chapters = @("基础入门","变量与运算符","指针与内存","控制结构","函数","数组","字符串","结构体与联合体","文件操作","嵌入式专项","面试题","Linux 基础","Cpp 基础","预处理器","位运算","动态内存","综合")
foreach ($t in $types) {
    foreach ($c in $chapters) {
        $p = Join-Path $root "$t\$c"
        if (!(Test-Path $p)) { New-Item -ItemType Directory -Path $p -Force | Out-Null }
    }
}

# 3. 初始化日志文件
$logPath = Join-Path $root "生成日志.md"
if (!(Test-Path $logPath)) {
    @"
# 可视化动画生成日志
> 自动生成，请勿手动编辑

| 时间 | 题型 | ID | 章节 | 文件路径 | 质检 | 备注 |
|------|------|----|------|----------|------|------|
"@ | Out-File $logPath -Encoding utf8
}

# 4. 初始化断点文件
$cpPath = Join-Path $root ".checkpoint.json"
if (!(Test-Path $cpPath)) {
    '{"lastId":"","generated":0,"failed":0,"skipped":0}' | Out-File $cpPath -Encoding utf8
}

# 5. 初始化总览目录
$indexPath = Join-Path $root "题型总览目录.md"
if (!(Test-Path $indexPath)) {
    "# 嵌入式题型可视化动画总览目录`n" | Out-File $indexPath -Encoding utf8
}

# 6. 校验数据源
$src = "C:\Users\6\Downloads\web-development-request-received - 副本\src\data"
$srcFiles = @("lessons.ts","embeddedQuestions.ts")
foreach ($f in $srcFiles) {
    $fp = Join-Path $src $f
    if (Test-Path $fp) { Write-Host "✅ 数据源可访问：$f" }
    else { Write-Host "⚠️ 数据源缺失：$f（将跳过此文件）" }
}

# 同时扫描 chapters 子目录
$chapDir = Join-Path $src "chapters"
if (Test-Path $chapDir) {
    $tsFiles = Get-ChildItem $chapDir -Filter "*.ts" -Recurse
    Write-Host "✅ chapters 目录：发现 $($tsFiles.Count) 个文件"
}

Write-Host "`n🚀 环境初始化完成，准备开始生成"
