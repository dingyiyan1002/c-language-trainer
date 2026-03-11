---
name: "ollama-gpu-optimizer"
description: "Ollama模型GPU优化配置指南，包含GTX 1650 Ti 4GB显卡的最佳参数设置、模型版本对比和故障排除。Invoke when user needs to optimize Ollama models for low-VRAM GPUs or configure model parameters."
---

# Ollama GPU 优化器 - 完整配置指南

> **硬件环境**: NVIDIA GTX 1650 Ti 4GB  
> **优化目标**: 在有限显存下获得最佳推理速度和稳定性

---

## 📋 目录

1. [测试结论总结](#测试结论总结)
2. [推荐模型配置](#推荐模型配置)
3. [所有可用模型](#所有可用模型)
4. [关键参数详解](#关键参数详解)
5. [常见问题解决](#常见问题解决)
6. [使用脚本](#使用脚本)

---

## 测试结论总结

### 🔬 关键发现

| 测试项目 | 结果 | 说明 |
|---------|------|------|
| **2B 模型最大上下文** | 226K | 超过会报错 |
| **4B 模型最大 GPU 层数** | 32 层 | 33+ 层会报内存布局错误 |
| **q8_0 KV 缓存量化** | ❌ 无效 | GTX 1650 Ti 不支持，会导致 100% CPU 占用 |
| **Flash Attention** | ✅ 有效 | 必须开启，显著提升速度 |
| **num_batch 上限** | 4B: 256, 2B: 512, 0.8B: 1024 | 超过会显存不足 |

### ⚡ 速度对比

| 模型 | 速度 | 质量 | 显存占用 | 推荐场景 |
|------|------|------|---------|---------|
| 0.8B-direct | 🚀 最快 | ⭐⭐ | 1.0GB | 简单问答、翻译 |
| 2B-direct | ⚡ 很快 | ⭐⭐⭐ | 2.7GB | 日常对话 |
| 4B-maxspeed | 🏃 快 | ⭐⭐⭐⭐ | 3.4GB | 追求速度 |
| 4B-direct | 🚶 中等 | ⭐⭐⭐⭐⭐ | 3.4GB | 高质量回答 |

---

## 推荐模型配置

### 🌟 首选配置（日常使用）

#### 1. qwen3.5:2b-direct - 平衡之选
```dockerfile
FROM qwen3.5:2b

SYSTEM """你是一个直接回答问题的助手。必须遵守以下规则：
1. 直接给出答案，禁止输出思考过程
2. 禁止输出"Thinking..."、"思考："、"Thought:"等任何思考前缀
3. 禁止解释你是如何得出答案的
4. 回答要简洁、准确、有条理
5. 如果信息不足，直接说明，不要猜测"""

PARAMETER num_gpu 36        # 2B模型共36层，全部放GPU
PARAMETER num_thread 6      # CPU线程数
PARAMETER num_ctx 8192      # 8K上下文，约6000汉字
PARAMETER num_batch 512     # 批处理大小
PARAMETER temperature 0.3   # 低随机性，回答更确定
PARAMETER num_predict 2048  # 最大输出长度
```

**特点**: 速度快、上下文够用、质量良好  
**适用**: 日常对话、代码辅助、一般问答

---

#### 2. qwen3.5:4b-direct - 质量优先
```dockerfile
FROM qwen3.5:4b

SYSTEM """你是一个直接回答问题的助手。必须遵守以下规则：
1. 直接给出答案，禁止输出思考过程
2. 禁止输出"Thinking..."、"思考："、"Thought:"等任何思考前缀
3. 禁止解释你是如何得出答案的
4. 回答要简洁、准确、有条理
5. 如果信息不足，直接说明，不要猜测"""

PARAMETER num_gpu 32        # 4B模型共32层，GTX 1650 Ti极限
PARAMETER num_thread 6
PARAMETER num_ctx 4096      # 4K上下文，节省显存
PARAMETER num_batch 256     # 4B模型安全值
PARAMETER temperature 0.3
PARAMETER num_predict 2048
```

**特点**: 智能程度最高、回答质量最好  
**适用**: 复杂推理、创意写作、专业问答

---

#### 3. qwen3.5:4b-maxspeed - 速度优先
```dockerfile
FROM qwen3.5:4b

PARAMETER num_gpu 32
PARAMETER num_thread 6
PARAMETER num_ctx 4096      # 最小实用上下文
PARAMETER num_batch 256     # 安全批处理大小
PARAMETER num_predict -1    # 不限制输出长度
```

**特点**: 极致速度、最小延迟  
**适用**: 代码补全、快速响应场景

---

## 所有可用模型

### 📊 模型对比表

| 模型名称 | 基础模型 | 显存 | 上下文 | 特点 | 状态 |
|---------|---------|------|--------|------|------|
| **qwen3.5:4b-direct** | 4B | 3.4GB | 4K | 直接回答，禁止思考 | ✅ 推荐 |
| **qwen3.5:2b-direct** | 2B | 2.7GB | 8K | 直接回答，速度优先 | ✅ 推荐 |
| **qwen3.5:0.8b-direct** | 0.8B | 1.0GB | 4K | 直接回答，极速 | ✅ 推荐 |
| **qwen3.5:4b-maxspeed** | 4B | 3.4GB | 4K | 最快速度配置 | ✅ 推荐 |
| **qwen3.5:2b-fast-120k** | 2B | 2.7GB | 120K | 超长上下文 | ✅ 长文档 |
| qwen3.5:4b-complete | 4B | 3.4GB | 8K | 完整版 | ⚠️ 测试 |
| qwen3.5:4b-lightning | 4B | 3.4GB | 4K | 闪电版 | ⚠️ 测试 |
| qwen3.5:4b-final-fixed-v2 | 4B | 3.4GB | - | 修复版 | ⚠️ 测试 |
| qwen3.5:4b-fast-40k-fixed | 4B | 3.4GB | 40K | 40K上下文 | ⚠️ 测试 |
| qwen3.5:0.8b-fast-4k | 0.8B | 1.0GB | 4K | 0.8B快速版 | ✅ 可用 |
| qwen3.5:0.8b-final | 0.8B | 1.0GB | - | 最终版 | ⚠️ 测试 |
| qwen3.5:2b-final | 2B | 2.7GB | - | 最终版 | ⚠️ 测试 |

### 📦 官方原版（无优化）

- `qwen3.5:4b` - 官方原版 4B
- `qwen3.5:2b` - 官方原版 2B
- `qwen3.5:0.8b` - 官方原版 0.8B
- `qwen3.5:0.8b-222k` - 官方超长上下文 0.8B
- `qwen3.5:2b-222k` - 官方超长上下文 2B

---

## 关键参数详解

### 🔧 核心参数说明

| 参数 | 作用 | 推荐值 | 说明 |
|------|------|--------|------|
| **num_gpu** | GPU层数分配 | 4B:32, 2B:36, 0.8B:36 | 决定多少层在GPU上运行 |
| **num_thread** | CPU线程数 | 6 | CPU计算时的线程数 |
| **num_ctx** | 上下文窗口 | 4K-8K | 模型能记住的对话长度 |
| **num_batch** | 批处理大小 | 4B:256, 2B:512, 0.8B:1024 | 每次处理的token数 |
| **temperature** | 温度/随机性 | 0.3 | 越低回答越确定 |
| **num_predict** | 最大输出长度 | 2048 | 限制输出token数 |
| **top_p** | 核采样 | 0.9 | 控制输出多样性 |
| **repeat_penalty** | 重复惩罚 | 1.12 | 减少重复输出 |

### ⚠️ 重要限制

```
GTX 1650 Ti 4GB 显存限制:
├── 4B 模型: 最多 32 层 (num_gpu ≤ 32)
├── 2B 模型: 最多 36 层 (num_gpu ≤ 36)
├── 0.8B 模型: 最多 36 层 (num_gpu ≤ 36)
├── 4B 模型 batch 上限: 256
├── 2B 模型 batch 上限: 512
└── 0.8B 模型 batch 上限: 1024
```

---

## 常见问题解决

### ❌ 问题 1: "memory layout cannot be allocated"

**原因**: num_gpu 设置过大，超出显存容量  
**解决**: 降低 num_gpu 值
- 4B 模型: 设置为 32
- 2B/0.8B 模型: 设置为 36

---

### ❌ 问题 2: 模型输出被截断（如 `<div class="chart`）

**原因**: 
1. 输出长度超过 num_ctx 限制
2. UI/前端截断长输出
3. num_predict 设置过小

**解决**:
```powershell
# 方案1: 增加上下文窗口
PARAMETER num_ctx 8192

# 方案2: 使用 API 直接写入文件（绕过UI截断）
$body = @{
    model = "qwen3.5:4b-direct"
    prompt = "你的问题"
    stream = $false    # 非流式，一次性返回
    think = $false     # 禁用思考
    options = @{
        num_predict = 4096    # 增加输出限制
    }
} | ConvertTo-Json
```

---

### ❌ 问题 3: 模型输出 "Thinking..." 思考过程

**原因**: Qwen3.5 内置思考模式  
**解决**:
```powershell
# 方法1: 使用 --hidethinking 参数
ollama run qwen3.5:4b-direct --hidethinking "你的问题"

# 方法2: API 调用时设置 think: false
$body = @{
    model = "qwen3.5:4b-direct"
    prompt = "你的问题"
    think = $false    # 禁用思考
} | ConvertTo-Json
```

---

### ❌ 问题 4: q8_0 量化导致 100% CPU 占用

**原因**: GTX 1650 Ti 不支持 q8_0 KV 缓存量化  
**解决**: 移除环境变量，不要使用
```powershell
# 不要设置这个！
# $env:OLLAMA_KV_CACHE_TYPE = "q8_0"  # ❌ 错误
```

---

### ❌ 问题 5: 11434 端口被占用

**解决**:
```powershell
# 杀掉所有 Ollama 进程
taskkill /f /im ollama.exe
taskkill /f /im "ollama app.exe"
taskkill /f /im ollama_runners.exe

# 或者使用启动脚本中的端口检测
$listen = netstat -ano | findstr ":11434" | findstr "LISTENING"
if ($listen) {
    $pid = ($listen -split "\s+")[-1]
    taskkill /f /pid $pid
}
```

---

## 使用脚本

### 1. 启动脚本 - start-ollama-final.ps1

```powershell
# Ollama 最终优化启动脚本
# GTX 1650 Ti 4GB 最佳配置

# 1. 杀掉所有 Ollama 进程（避免端口冲突）
taskkill /f /im ollama.exe 2>$null
taskkill /f /im "ollama app.exe" 2>$null
taskkill /f /im ollama_runners.exe 2>$null
Start-Sleep -Seconds 3

# 2. 检测并释放 11434 端口
$listen = netstat -ano | findstr ":11434" | findstr "LISTENING"
if ($listen) {
    $pid = ($listen -split "\s+")[-1]
    taskkill /f /pid $pid 2>$null
    Start-Sleep -Seconds 2
}

# 3. 设置环境变量
$env:OLLAMA_FLASH_ATTENTION = "1"        # 开启 Flash Attention
$env:OLLAMA_MAX_LOADED_MODELS = "1"      # 最多加载1个模型
$env:OLLAMA_NUM_PARALLEL = "1"           # 不并发

# 4. 启动服务
Write-Host "启动 Ollama..." -ForegroundColor Green
Write-Host "配置: Flash Attention + 防卡机保护" -ForegroundColor Yellow
ollama serve
```

---

### 2. 一键生成网页 - make-page.ps1

```powershell
# 一键生成网页文件（无复制粘贴、一步到位）

param(
  [string]$Model = "qwen3.5:4b-direct",
  [string]$OutFile = "$PWD\page.html"
)

# 检查 Ollama 服务
$body = @{
  model  = $Model
  prompt = "生成一个完整网页（HTML+CSS+JS），从<!DOCTYPE html>到</html>，不要解释"
  stream = $false
  think  = $false
  options = @{
    num_predict = 4096
    temperature = 0.3
  }
} | ConvertTo-Json -Depth 6

$response = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/generate" `
  -Method Post -ContentType "application/json" -Body $body

$response.response | Out-File -Encoding utf8 $OutFile
Start-Process $OutFile
Write-Host "DONE -> $OutFile" -ForegroundColor Green
```

---

### 3. 直接回答模式 - ollama-direct.ps1

```powershell
# Ollama 直接回答模式 - 自动过滤思考过程

param(
    [string]$Model = "qwen3.5:4b-direct",
    [string]$Prompt = "",
    [int]$MaxTokens = 2048
)

$constrainedPrompt = "【直接回答，禁止思考过程】$Prompt"

$body = @{
    model   = $Model
    prompt  = $constrainedPrompt
    think   = $false
    stream  = $false
    options = @{
        temperature = 0.3
        num_predict = $MaxTokens
    }
} | ConvertTo-Json -Depth 6

$response = Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/generate" `
    -Method Post -ContentType "application/json" -Body $body -TimeoutSec 120

Write-Host $response.response
```

---

## 快速参考

### 常用命令

```powershell
# 查看所有模型
ollama list

# 运行模型（命令行）
ollama run qwen3.5:2b-direct

# 运行模型（隐藏思考）
ollama run qwen3.5:4b-direct --hidethinking

# 创建自定义模型
ollama create qwen3.5:4b-direct -f qwen3.5-4b-direct.Modelfile

# 删除模型
ollama rm qwen3.5:4b-complete

# 查看模型信息
ollama show qwen3.5:4b-direct
```

### 模型选择决策树

```
需要高质量回答？
├── 是 → 使用 4B-direct
│       └── 需要更快？
│           ├── 是 → 使用 4B-maxspeed
│           └── 否 → 保持 4B-direct
└── 否 → 需要长上下文？
        ├── 是 → 使用 2B-fast-120k
        └── 否 → 使用 2B-direct（推荐）
                └── 需要极速？
                        ├── 是 → 使用 0.8B-direct
                        └── 否 → 保持 2B-direct
```

---

## 更新日志

- **2026-03-06**: 初始版本，包含 GTX 1650 Ti 4GB 完整测试数据
- 测试了 qwen3.5 0.8B/2B/4B 三个模型的多种配置
- 确定了各模型的最佳参数组合
- 创建了直接回答版本（禁止思考过程输出）

---

> **注意**: 本配置针对 GTX 1650 Ti 4GB 显卡优化。如果使用其他显卡，需要根据显存大小调整 num_gpu 和 num_batch 参数。
