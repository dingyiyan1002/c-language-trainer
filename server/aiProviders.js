// 通用 AI 提供商接口 - 支持 DeepSeek、阿里云百炼 Qwen 等

// 配置常量
const CONFIG = {
  TIMEOUT: 60 * 1000, // 60 秒超时
  RETRY_ATTEMPTS: 2, // 重试次数
  RETRY_DELAY: 1000, // 重试延迟 (ms)
  MAX_TOKENS: 4000 // 最大输出 token 数
};

// 日志工具
function log(level, message, ...args) {
  const timestamp = new Date().toISOString();
  const prefix = `[AIProviders][${timestamp}][${level}]`;
  if (level === 'error') {
    console.error(prefix, message, ...args);
  } else if (level === 'warn') {
    console.warn(prefix, message, ...args);
  } else {
    console.log(prefix, message, ...args);
  }
}

// 默认系统提示词（简洁直接版）
const DEFAULT_SYSTEM_PROMPT = `你是一个专业的 C 语言编程辅导老师。请用大白话、简洁直接的方式回答。

回答要求：
1. 直接说答案和核心考点
2. 用最少的字解释关键步骤
3. 别说废话，只说重点
4. 短句优先，说人话`;

// 延迟函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 从配置加载系统提示词
export function getSystemPrompt(customPrompt) {
  return customPrompt || DEFAULT_SYSTEM_PROMPT;
}

/**
 * 带超时的 fetch 请求
 */
async function fetchWithTimeout(url, options, timeout = CONFIG.TIMEOUT) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function callDeepSeek(messages, apiKey) {
  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      log('info', `DeepSeek 尝试 ${attempt}/${CONFIG.RETRY_ATTEMPTS}`);

      const response = await fetchWithTimeout('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: DEFAULT_SYSTEM_PROMPT },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: MAX_TOKENS
        })
      }, CONFIG.TIMEOUT);

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
        const errorMessage = error.error?.message || `HTTP ${response.status}`;
        log('error', `DeepSeek API 错误：${errorMessage}`);

        // 如果是认证错误，不重试
        if (response.status === 401 || response.status === 403) {
          return {
            success: false,
            error: `DeepSeek API 认证失败：${errorMessage}`,
            provider: 'deepseek'
          };
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      const result = {
        success: true,
        content: data.choices[0]?.message?.content || '无法获取回答',
        provider: 'deepseek',
        usage: data.usage
      };
      log('info', `DeepSeek 成功，token 使用：${JSON.stringify(data.usage)}`);
      return result;

    } catch (error) {
      log('error', `DeepSeek 尝试 ${attempt} 失败:`, error.message);

      if (attempt === CONFIG.RETRY_ATTEMPTS) {
        return {
          success: false,
          error: `DeepSeek API 调用失败：${error.message}`,
          provider: 'deepseek'
        };
      }

      await delay(CONFIG.RETRY_DELAY);
    }
  }

  return {
    success: false,
    error: 'DeepSeek API 调用失败：已达到最大重试次数',
    provider: 'deepseek'
  };
}

export async function callQwen(messages, apiKey, baseUrl, model, systemPrompt) {
  const apiEndpoint = baseUrl ? `${baseUrl}/chat/completions` : 'https://coding.dashscope.aliyuncs.com/v1/chat/completions';
  const aiModel = model || 'qwen3.5-plus';
  const prompt = systemPrompt ? getSystemPrompt(systemPrompt) : DEFAULT_SYSTEM_PROMPT;

  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      log('info', `Qwen (${aiModel}) 尝试 ${attempt}/${CONFIG.RETRY_ATTEMPTS}`);

      const response = await fetchWithTimeout(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: aiModel,
          messages: [
            { role: 'system', content: prompt },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: MAX_TOKENS
        })
      }, CONFIG.TIMEOUT);

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }

        const errorMessage = errorData.message ||
          errorData.error?.message ||
          `HTTP ${response.status}: ${errorText}`;

        log('error', `Qwen API 错误：${errorMessage}`);

        // 认证错误不重试
        if (response.status === 401 || response.status === 403) {
          return {
            success: false,
            error: `Qwen API 认证失败：${errorMessage}`,
            provider: 'qwen'
          };
        }

        // 速率限制，等待后重试
        if (response.status === 429 && attempt < CONFIG.RETRY_ATTEMPTS) {
          const retryAfter = parseInt(response.headers.get('Retry-After') || '5');
          log('warn', `Qwen 速率限制，等待 ${retryAfter}秒后重试`);
          await delay(retryAfter * 1000);
          continue;
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content || '无法获取回答';

      log('info', `Qwen 成功，token 使用：${JSON.stringify(data.usage)}`);
      return {
        success: true,
        content: content,
        provider: 'qwen',
        usage: data.usage
      };

    } catch (error) {
      log('error', `Qwen 尝试 ${attempt} 失败:`, error.message);

      if (attempt === CONFIG.RETRY_ATTEMPTS) {
        return {
          success: false,
          error: `Qwen API 调用失败：${error.message}`,
          provider: 'qwen'
        };
      }

      await delay(CONFIG.RETRY_DELAY);
    }
  }

  return {
    success: false,
    error: 'Qwen API 调用失败：已达到最大重试次数',
    provider: 'qwen'
  };
}

export async function callAIProvider(provider, messages, apiKey, baseUrl, model, systemPrompt) {
  switch (provider) {
    case 'deepseek':
      return callDeepSeek(messages, apiKey);
    case 'qwen':
      return callQwen(messages, apiKey, baseUrl, model, systemPrompt);
    case 'anthropic':
      return callAnthropic(messages, apiKey, baseUrl, model, systemPrompt);
    default:
      return {
        success: false,
        error: `不支持的 AI 提供商：${provider}`,
        provider: 'unknown'
      };
  }
}

// Anthropic Claude API 调用
export async function callAnthropic(messages, apiKey, baseUrl, model, systemPrompt) {
  const apiEndpoint = baseUrl ? `${baseUrl}/v1/messages` : 'https://api.anthropic.com/v1/messages';
  const aiModel = model || 'claude-sonnet-4-20250514';
  const prompt = systemPrompt ? getSystemPrompt(systemPrompt) : DEFAULT_SYSTEM_PROMPT;

  // Claude API 使用不同的消息格式
  const claudeMessages = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: msg.content
  }));

  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      log('info', `Anthropic (${aiModel}) 尝试 ${attempt}/${CONFIG.RETRY_ATTEMPTS}`);

      const response = await fetchWithTimeout(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: aiModel,
          max_tokens: MAX_TOKENS,
          system: prompt,
          messages: claudeMessages
        })
      }, CONFIG.TIMEOUT);

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }

        const errorMessage = errorData.error?.message || errorData.message || `HTTP ${response.status}: ${errorText}`;
        log('error', `Anthropic API 错误：${errorMessage}`);

        // 认证错误不重试
        if (response.status === 401 || response.status === 403) {
          return {
            success: false,
            error: `Anthropic API 认证失败：${errorMessage}`,
            provider: 'anthropic'
          };
        }

        // 速率限制
        if (response.status === 429 && attempt < CONFIG.RETRY_ATTEMPTS) {
          const retryAfter = parseInt(response.headers.get('Retry-After') || '5');
          log('warn', `Anthropic 速率限制，等待 ${retryAfter}秒后重试`);
          await delay(retryAfter * 1000);
          continue;
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      const content = data.content?.[0]?.text || '无法获取回答';

      log('info', `Anthropic 成功，token 使用：${JSON.stringify(data.usage)}`);
      return {
        success: true,
        content: content,
        provider: 'anthropic',
        usage: data.usage
      };

    } catch (error) {
      log('error', `Anthropic 尝试 ${attempt} 失败:`, error.message);

      if (attempt === CONFIG.RETRY_ATTEMPTS) {
        return {
          success: false,
          error: `Anthropic API 调用失败：${error.message}`,
          provider: 'anthropic'
        };
      }

      await delay(CONFIG.RETRY_DELAY);
    }
  }

  return {
    success: false,
    error: 'Anthropic API 调用失败：已达到最大重试次数',
    provider: 'anthropic'
  };
}

export function buildQuestionPrompt(question) {
  return `请解释这道题：

题目：${question.title}
题型：${question.type}
章节：${question.chapter}

${question.code ? `相关代码：
\`\`\`c
${question.code}
\`\`\`
` : ''}

${question.userAnswer ? `用户答案：${question.userAnswer}` : ''}
${question.isCorrect !== undefined ? `答案正确性：${question.isCorrect ? '正确' : '错误'}` : ''}

请提供：
1. 详细解析
2. 3 个提示（由浅入深）
3. 关键知识点`;
}

// 获取支持的模型列表
export async function getSupportedModels(provider, apiKey, baseUrl) {
  switch (provider) {
    case 'deepseek':
      return getDeepSeekModels(apiKey);
    case 'qwen':
      return getQwenModels(apiKey, baseUrl);
    case 'anthropic':
      return getAnthropicModels(apiKey, baseUrl);
    default:
      return {
        success: false,
        error: `不支持的 AI 提供商：${provider}`
      };
  }
}

// 获取 DeepSeek 支持的模型
async function getDeepSeekModels(apiKey) {
  try {
    const response = await fetch('https://api.deepseek.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: 无法获取模型列表`);
    }

    const data = await response.json();
    const models = data.data.map(m => ({
      id: m.id,
      name: m.id,
      description: m.owned_by || 'DeepSeek'
    }));

    return {
      success: true,
      models: models,
      provider: 'deepseek'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      provider: 'deepseek'
    };
  }
}

// 获取 Qwen 支持的模型（Coding Plan）
async function getQwenModels(apiKey, baseUrl) {
  try {
    // Coding Plan 支持的模型列表（根据官方文档）
    const codingPlanModels = [
      {
        id: 'qwen3.5-plus',
        name: 'Qwen3.5-Plus',
        description: '通义千问 3.5 Plus - 推荐用于编程辅导'
      },
      {
        id: 'qwen3-coder-next',
        name: 'Qwen3-Coder-Next',
        description: '通义千问 Coder Next - 专注于代码生成'
      },
      {
        id: 'glm-4.7',
        name: 'GLM-4.7',
        description: '智谱 GLM-4.7 - 通用大模型'
      },
      {
        id: 'kimi-k2.5',
        name: 'Kimi K2.5',
        description: '月之暗面 Kimi K2.5 - 长文本处理'
      }
    ];

    // 验证 API Key 是否有效（使用第一个模型测试）
    const testResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'qwen3.5-plus',
        messages: [
          { role: 'user', content: 'OK' }
        ],
        max_tokens: 5
      })
    });

    if (!testResponse.ok) {
      const errorData = await testResponse.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${testResponse.status}: API Key 无效`);
    }

    return {
      success: true,
      models: codingPlanModels,
      provider: 'qwen',
      baseUrl: baseUrl
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      provider: 'qwen'
    };
  }
}

// 获取 Anthropic Claude 支持的模型
async function getAnthropicModels(apiKey, baseUrl) {
  try {
    // Claude 主流模型列表
    const claudeModels = [
      {
        id: 'claude-sonnet-4-20250514',
        name: 'Claude Sonnet 4',
        description: 'Claude Sonnet 4 - 推荐用于编程辅导（默认）'
      },
      {
        id: 'claude-opus-4-6',
        name: 'Claude Opus 4.6',
        description: 'Claude Opus 4.6 - 最强模型，适合复杂任务'
      },
      {
        id: 'claude-sonnet-4-20250514',
        name: 'Claude Sonnet 4',
        description: 'Claude Sonnet 4 - 平衡性能和速度'
      },
      {
        id: 'claude-haiku-4-5-20251001',
        name: 'Claude Haiku 4.5',
        description: 'Claude Haiku 4.5 - 快速响应'
      }
    ];

    // 验证 API Key 是否有效
    const testResponse = await fetch(`${baseUrl}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 5,
        messages: [
          { role: 'user', content: 'OK' }
        ]
      })
    });

    if (!testResponse.ok) {
      const errorData = await testResponse.json().catch(() => ({}));
      throw new Error(errorData.error?.message || errorData.message || `HTTP ${testResponse.status}: API Key 无效`);
    }

    return {
      success: true,
      models: claudeModels,
      provider: 'anthropic',
      baseUrl: baseUrl
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      provider: 'anthropic'
    };
  }
}
