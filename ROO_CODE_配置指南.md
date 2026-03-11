# Roo Code 配置阿里云百炼 Coding Plan 指南

## 快速配置

### 方式一：使用 OpenAI 兼容接口（推荐）

在 Roo Code 设置中配置以下参数：

| 配置项 | 值 |
|--------|-----|
| **API Provider** | OpenAI Compatible |
| **API Key** | `sk-sp-06daa8bda2ae465ab***********3f87` |
| **Base URL** | `https://coding.dashscope.aliyuncs.com/v1` |
| **Model** | `qwen3.5-plus`（或其他支持的模型） |

### 方式二：使用 Anthropic 兼容接口

| 配置项 | 值 |
|--------|-----|
| **API Provider** | Anthropic Compatible |
| **API Key** | `sk-sp-06daa8bda2ae465ab***********3f87` |
| **Base URL** | `https://coding.dashscope.aliyuncs.com/apps/anthropic` |
| **Model** | `claude-sonnet-4-20250514` |

---

## 支持的模型列表

### 千问系列
| 模型 ID | 名称 | 能力 | 推荐用途 |
|---------|------|------|----------|
| `qwen3.5-plus` | Qwen3.5-Plus | 文本生成、深度思考、视觉理解 | ⭐ 编程辅导（推荐） |
| `qwen3-max-2026-01-23` | Qwen3-Max | 文本生成、深度思考 | 复杂代码分析 |
| `qwen3-coder-next` | Qwen3-Coder-Next | 文本生成 | 代码生成 |
| `qwen3-coder-plus` | Qwen3-Coder-Plus | 文本生成 | 代码生成 |

### 第三方模型
| 模型 ID | 名称 | 能力 |
|---------|------|------|
| `glm-5` | 智谱 GLM-5 | 文本生成、深度思考 |
| `glm-4.7` | 智谱 GLM-4.7 | 文本生成、深度思考 |
| `kimi-k2.5` | Kimi K2.5 | 文本生成、深度思考、视觉理解 |
| `MiniMax-M2.5` | MiniMax-M2.5 | 文本生成、深度思考 |

---

## 详细配置步骤

### 步骤 1：打开 Roo Code 设置

1. 在 VS Code 中，点击左侧活动栏的 Roo Code 图标
2. 点击设置齿轮图标 ⚙️
3. 选择 "Configure Provider" 或 "配置提供商"

### 步骤 2：选择提供商类型

选择 **"OpenAI Compatible"**（推荐）或 **"Anthropic Compatible"**

### 步骤 3：填写配置信息

#### OpenAI 兼容配置示例：
```
API Provider: OpenAI Compatible
API Key: sk-sp-06daa8bda2ae465ab***********3f87
Base URL: https://coding.dashscope.aliyuncs.com/v1
Model: qwen3.5-plus
```

#### Anthropic 兼容配置示例：
```
API Provider: Anthropic Compatible
API Key: sk-sp-06daa8bda2ae465ab***********3f87
Base URL: https://coding.dashscope.aliyuncs.com/apps/anthropic
Model: claude-sonnet-4-20250514
```

### 步骤 4：测试连接

点击 "Test Connection" 或 "测试连接" 按钮，确认配置正确。

---

## 环境变量配置（可选）

如果需要在全局范围配置，可以创建 `.env` 文件：

```bash
# 阿里云百炼 API Key
ALIYUN_API_KEY=sk-sp-06daa8bda2ae465ab***********3f87

# OpenAI 兼容 Base URL
ALIYUN_OPENAI_BASE_URL=https://coding.dashscope.aliyuncs.com/v1

# Anthropic 兼容 Base URL
ALIYUN_ANTHROPIC_BASE_URL=https://coding.dashscope.aliyuncs.com/apps/anthropic

# 默认模型
DEFAULT_MODEL=qwen3.5-plus
```

---

## 安全提示

⚠️ **重要安全警告**：

1. **不要将 API Key 提交到 Git 仓库**
   - 确保 `.gitignore` 包含 `.env` 文件
   
2. **不要在前端代码中硬编码 API Key**
   - API Key 应该只在服务器端使用
   
3. **定期轮换密钥**
   - 如果怀疑密钥泄露，请在阿里云控制台重置
   
4. **限制 API Key 权限**
   - 在阿里云百炼控制台设置合理的配额和权限

---

## 常见问题

### Q: 提示 "Invalid API Key" 怎么办？
A: 检查以下几点：
- 确认 API Key 复制完整，没有多余空格
- 确认账户套餐有效且未过期
- 尝试在阿里云百炼控制台重置 API Key

### Q: 请求超时怎么办？
A: 阿里云百炼默认超时时间较长，如果仍超时：
- 检查网络连接
- 尝试切换模型（如从 qwen3-max 切换到 qwen3.5-plus）
- 检查是否达到套餐配额限制

### Q: 如何切换模型？
A: 在 Roo Code 设置的 Model 字段中直接修改模型 ID 即可，无需重启。

---

## 推荐配置

对于编程辅导和代码解释场景，推荐使用以下配置：

```
API Provider: OpenAI Compatible
API Key: sk-sp-06daa8bda2ae465ab***********3f87
Base URL: https://coding.dashscope.aliyuncs.com/v1
Model: qwen3.5-plus
```

**理由**：
- `qwen3.5-plus` 在编程任务上表现优秀
- 响应速度快
- 支持深度思考和代码理解
- 性价比高

---

## 参考链接

- [阿里云百炼官方文档](https://help.aliyun.com/zh/model-studio/)
- [Roo Code 官方文档](https://roocode.com/docs/)
- [通义千问模型文档](https://help.aliyun.com/zh/model-studio/developer-reference/qwen3-5)

---

*最后更新：2026 年 3 月 11 日*
