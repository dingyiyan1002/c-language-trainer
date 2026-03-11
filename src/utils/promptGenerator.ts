// AI 提示词生成器 - 通用组件
// 支持自定义参数生成提示词

import { PromptTemplate, PROMPT_TEMPLATES } from './promptTemplates';

export interface PromptConfig {
  templateId: string;
  customPrompt?: string;
  // 自定义参数
  tone?: 'concise' | 'detailed' | 'code-first' | 'exam-focused';
  maxLength?: 'short' | 'medium' | 'long';
  focus?: 'theory' | 'practice' | 'exam';
  language?: 'zh' | 'en';
}

export interface GeneratedPrompt {
  systemPrompt: string;
  config: PromptConfig;
  metadata: {
    templateName: string;
    generatedAt: string;
  };
}

// 生成提示词
export function generatePrompt(config: PromptConfig): GeneratedPrompt {
  const template = PROMPT_TEMPLATES.find(t => t.id === config.templateId);
  
  if (!template) {
    throw new Error(`模板不存在：${config.templateId}`);
  }

  let systemPrompt = config.customPrompt || template.prompt;

  // 根据参数调整提示词
  if (config.maxLength) {
    systemPrompt = adjustLength(systemPrompt, config.maxLength);
  }

  if (config.focus) {
    systemPrompt = adjustFocus(systemPrompt, config.focus);
  }

  if (config.language === 'en') {
    systemPrompt = translatePrompt(systemPrompt);
  }

  return {
    systemPrompt,
    config,
    metadata: {
      templateName: template.name,
      generatedAt: new Date().toISOString()
    }
  };
}

// 调整长度
function adjustLength(prompt: string, maxLength: 'short' | 'medium' | 'long'): string {
  const lengthInstructions = {
    short: '\n回答要求：尽量简短，100 字以内',
    medium: '\n回答要求：适中，300 字左右',
    long: '\n回答要求：详细，500 字以上'
  };
  
  return prompt + lengthInstructions[maxLength];
}

// 调整重点
function adjustFocus(prompt: string, focus: 'theory' | 'practice' | 'exam'): string {
  const focusInstructions = {
    theory: '\n重点：多讲理论和原理',
    practice: '\n重点：多给实际例子和代码',
    exam: '\n重点：多讲考试技巧和得分点'
  };
  
  return prompt + focusInstructions[focus];
}

// 翻译提示词（简单版本，实际可以使用翻译 API）
function translatePrompt(prompt: string): string {
  // 这里只是示例，实际需要完整翻译
  return `[English] ${prompt}`;
}

// 导出为 JSON
export function exportPromptToJSON(generated: GeneratedPrompt): string {
  return JSON.stringify(generated, null, 2);
}

// 从 JSON 导入
export function importPromptFromJSON(json: string): GeneratedPrompt {
  return JSON.parse(json);
}

// 保存到 localStorage
export function savePromptConfig(config: PromptConfig, key: string = 'ai_prompt_config'): void {
  try {
    localStorage.setItem(key, JSON.stringify(config));
  } catch (error) {
    console.error('保存配置失败:', error);
  }
}

// 从 localStorage 加载
export function loadPromptConfig(key: string = 'ai_prompt_config'): PromptConfig | null {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('加载配置失败:', error);
  }
  return null;
}

// 获取默认配置
export function getDefaultConfig(): PromptConfig {
  return {
    templateId: 'concise',
    maxLength: 'medium',
    focus: 'practice',
    language: 'zh'
  };
}
