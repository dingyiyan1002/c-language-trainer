// AI 配置服务 - 支持 DeepSeek、阿里云百炼 Qwen 等多个模型

export interface AIProviderConfig {
  id: string;
  name: string;
  apiKey: string;
  baseUrl: string;
  model: string;
  enabled: boolean;
  isDefault: boolean;
}

export interface AIProviderTestResult {
  success: boolean;
  message: string;
  responseTime?: number;
}

export interface AIModel {
  id: string;
  name: string;
  description?: string;
}

// 默认配置
const DEFAULT_PROVIDERS: AIProviderConfig[] = [
  {
    id: 'deepseek',
    name: 'DeepSeek',
    apiKey: '',
    baseUrl: 'https://api.deepseek.com/v1',
    model: 'deepseek-chat',
    enabled: false,
    isDefault: false
  },
  {
    id: 'qwen',
    name: '阿里云百炼 Qwen',
    apiKey: '',  // 从环境变量加载：import.meta.env.VITE_QWEN_API_KEY
    baseUrl: 'https://coding.dashscope.aliyuncs.com/v1',
    model: 'qwen3.5-plus',
    enabled: true,
    isDefault: true
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    apiKey: '',
    baseUrl: 'https://api.anthropic.com',
    model: 'claude-sonnet-4-20250514',
    enabled: false,
    isDefault: false
  },
  {
    id: 'local-claude',
    name: '本地 Claude Code',
    apiKey: 'local',
    baseUrl: 'local',
    model: 'claude-code-cli',
    enabled: false,
    isDefault: false
  }
];

// 本地存储键
const STORAGE_KEY = 'ai_tutor_config';

export function loadAIConfig(): AIProviderConfig[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const configs = JSON.parse(stored);
      // 合并默认配置（防止新版本增加配置）
      // 对于 qwen 提供商，强制更新为正确的配置
      return DEFAULT_PROVIDERS.map(def => {
        const user = configs.find((c: AIProviderConfig) => c.id === def.id);
        if (user) {
          const merged = { ...def, ...user };
          // 如果是 qwen，强制使用正确的配置（即使用户之前保存过）
          if (user.id === 'qwen') {
            merged.apiKey = 'sk-sp-06daa8bda2ae465abfc0dc6dc6893f87';
            merged.baseUrl = 'https://coding.dashscope.aliyuncs.com/v1';
            merged.model = 'qwen3.5-plus';
            merged.enabled = true;
            merged.isDefault = true;
          }
          return merged;
        }
        return def;
      });
    }
  } catch (e) {
    console.error('Failed to load AI config:', e);
  }
  return DEFAULT_PROVIDERS;
}

export function saveAIConfig(configs: AIProviderConfig[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch (e) {
    console.error('Failed to save AI config:', e);
  }
}

export function getDefaultProvider(): AIProviderConfig | undefined {
  const configs = loadAIConfig();
  // 优先返回用户启用的默认提供商，如果是 anthropic 则直接返回（不强制覆盖）
  const defaultProvider = configs.find(c => c.enabled && c.isDefault);
  if (defaultProvider) return defaultProvider;
  // 其次返回第一个启用的提供商
  return configs.find(c => c.enabled);
}

export function getProviderById(id: string): AIProviderConfig | undefined {
  const configs = loadAIConfig();
  return configs.find(c => c.id === id);
}

export async function testAIProvider(provider: AIProviderConfig): Promise<AIProviderTestResult> {
  const startTime = Date.now();

  // 本地 Claude 检查
  if (provider.id === 'local-claude') {
    try {
      const response = await fetch('http://localhost:3001/api/ai/local-check');
      const data = await response.json();
      const responseTime = Date.now() - startTime;

      if (data.available) {
        return {
          success: true,
          message: `本地 Claude 可用！${data.version ? '版本：' + data.version : ''} 响应时间：${responseTime}ms`,
          responseTime
        };
      } else {
        return {
          success: false,
          message: '本地 Claude 不可用，请确保已安装 claude-code 包（npm install -g @anthropic-ai/claude-code）',
          responseTime
        };
      }
    } catch (error: any) {
      return {
        success: false,
        message: `无法连接到本地服务：${error.message || '请确保后端服务正在运行'}`,
        responseTime: Date.now() - startTime
      };
    }
  }

  try {
    let response;

    // Anthropic 使用不同的 API 格式
    if (provider.id === 'anthropic') {
      response = await fetch(`${provider.baseUrl}/v1/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': provider.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: provider.model,
          max_tokens: 10,
          messages: [
            {
              role: 'user',
              content: 'Hello, this is a test message. Please respond with "OK".'
            }
          ]
        })
      });
    } else {
      // OpenAI 兼容格式（DeepSeek, Qwen 等）
      response = await fetch(`${provider.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${provider.apiKey}`
        },
        body: JSON.stringify({
          model: provider.model,
          messages: [
            {
              role: 'user',
              content: 'Hello, this is a test message. Please respond with "OK".'
            }
          ],
          max_tokens: 10
        })
      });
    }

    const responseTime = Date.now() - startTime;

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        message: `HTTP ${response.status}: ${error.error?.message || error.message || 'Unknown error'}`,
        responseTime
      };
    }

    return {
      success: true,
      message: `连接成功！响应时间：${responseTime}ms`,
      responseTime
    };
  } catch (error: any) {
    return {
      success: false,
      message: `网络错误：${error.message || '无法连接到 API'}`,
      responseTime: Date.now() - startTime
    };
  }
}

export function validateProviderConfig(config: AIProviderConfig): string[] {
  const errors: string[] = [];
  
  if (!config.name.trim()) {
    errors.push('名称不能为空');
  }
  
  if (!config.apiKey.trim()) {
    errors.push('API Key 不能为空');
  }
  
  if (!config.baseUrl.trim()) {
    errors.push('Base URL 不能为空');
  } else if (!config.baseUrl.startsWith('http')) {
    errors.push('Base URL 必须是有效的 HTTP(S) 地址');
  }
  
  if (!config.model.trim()) {
    errors.push('模型名称不能为空');
  }
  
  return errors;
}

// 获取支持的模型列表
export async function getSupportedModels(provider: AIProviderConfig): Promise<{ success: boolean; models?: AIModel[]; error?: string }> {
  try {
    const params = new URLSearchParams({
      provider: provider.id,
      apiKey: provider.apiKey,
      baseUrl: provider.baseUrl
    });
    
    const response = await fetch(`http://localhost:3001/api/ai/models?${params}`);
    const data = await response.json();
    
    if (data.success) {
      return {
        success: true,
        models: data.models
      };
    } else {
      return {
        success: false,
        error: data.message || '获取模型列表失败'
      };
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || '无法连接到服务器'
    };
  }
}
