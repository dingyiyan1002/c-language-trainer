# 本地 Claude Code 集成使用说明

## 快速开始

### 1. 确保已安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：
```bash
claude --version
```

### 2. 启动后端服务

```bash
cd server
node index.js
```

### 3. 在网页中选择"本地 Claude Code"

1. 打开学习平台网页
2. 点击 AI 配置按钮（设置图标）
3. 在下拉菜单中选择 **"本地 Claude Code"**
4. 点击"测试连接"确认状态
5. 点击"启用"并设为默认

## 工作原理

```
网页前端 → 后端服务 (server/index.js) → 本地 Claude CLI → Claude 模型
```

- **无需 API Key**：使用你本地的 Claude Code 账号
- **本地优先**：所有请求都在本地处理
- **支持所有 Claude 模型**：Opus、Sonnet、Haiku 等

## 配置说明

### 后端配置 (server/index.js)

本地 Claude 配置已添加到 `aiConfig`：

```javascript
'local-claude': {
  apiKey: 'local',
  baseUrl: 'local',
  model: 'claude-code-cli',
  enabled: false  // 设置为 true 启用
}
```

### 前端配置 (src/services/aiConfigService.ts)

本地 Claude 已添加到默认提供商列表：

```typescript
{
  id: 'local-claude',
  name: '本地 Claude Code',
  apiKey: 'local',
  baseUrl: 'local',
  model: 'claude-code-cli',
  enabled: false,
  isDefault: false
}
```

## API 端点

| 端点 | 说明 |
|------|------|
| `GET /api/ai/local-check` | 检查本地 Claude 是否可用 |
| `POST /api/ai/ask` | 使用本地 Claude 解答题目 |
| `POST /api/ai/hint` | 使用本地 Claude 生成提示 |
| `POST /api/ai/explanation` | 使用本地 Claude 生成解析 |

## 测试

运行测试脚本：

```bash
test-local-claude.bat
```

或手动测试：

```bash
# 检查后端服务
curl http://localhost:3001/api/heartbeat

# 检查本地 Claude
curl http://localhost:3001/api/ai/local-check
```

## 常见问题

### Q: 点击"测试连接"显示失败
A: 请检查：
1. 后端服务是否运行 (`node server/index.js`)
2. Claude CLI 是否安装 (`claude --version`)
3. 是否已登录 Claude Code (`claude login`)

### Q: 响应速度慢
A: 本地 Claude 依赖网络请求到 Anthropic API，速度取决于：
- 你的网络连接
- Anthropic API 响应时间
- 问题复杂度

### Q: 与网页版有什么区别
A: 本地调用使用你的 Claude Code 账号配额，网页版使用配置的 API Key

## 技术细节

### callLocalClaude 函数

位置：`server/localClaude.js`

```javascript
export async function callLocalClaude(prompt, context = '')
```

- 通过 `spawn` 调用 `claude` 命令
- 使用 `--print --non-interactive` 参数
- 通过 stdin 传入提示词
- 5 分钟超时保护

### 支持的 Claude 模型

取决于你的 Claude Code 账号权限：
- Claude Opus 4.6 (最强)
- Claude Sonnet 4 (推荐)
- Claude Haiku 4.5 (最快)

## 扩展开发

如需自定义调用逻辑，修改：
- `server/localClaude.js` - CLI 调用逻辑
- `server/index.js` - AI 路由和配置
- `src/services/aiConfigService.ts` - 前端配置服务
