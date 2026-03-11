// 本地 Claude Code CLI 桥接服务
// 通过 MCP 协议调用本地 claude 命令

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 配置常量
const CONFIG = {
  TIMEOUT: 5 * 60 * 1000, // 5 分钟超时
  MAX_BUFFER_SIZE: 10 * 1024 * 1024, // 10MB 最大缓冲区
  RETRY_ATTEMPTS: 2, // 重试次数
  RETRY_DELAY: 1000 // 重试延迟 (ms)
};

// 系统提示词
const DEFAULT_SYSTEM_PROMPT = `你是一个专业的 C 语言编程辅导老师。请用大白话、简洁直接的方式回答。

回答要求：
1. 直接说答案和核心考点
2. 用最少的字解释关键步骤
3. 别说废话，只说重点
4. 短句优先，说人话`;

// 日志工具
function log(level, message, ...args) {
  const timestamp = new Date().toISOString();
  const prefix = `[LocalClaude][${timestamp}][${level}]`;
  if (level === 'error') {
    console.error(prefix, message, ...args);
  } else if (level === 'warn') {
    console.warn(prefix, message, ...args);
  } else {
    console.log(prefix, message, ...args);
  }
}

/**
 * 延迟函数
 * @param {number} ms - 毫秒数
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 调用本地 Claude Code CLI（带重试机制）
 * @param {string} prompt - 用户问题
 * @param {string} context - 上下文信息（代码、题目等）
 * @returns {Promise<{success: boolean, content?: string, error?: string}>}
 */
export async function callLocalClaude(prompt, context = '') {
  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      const result = await executeClaude(prompt, context, attempt);
      if (result.success) {
        return result;
      }
      if (attempt === CONFIG.RETRY_ATTEMPTS) {
        return result;
      }
      log('warn', `第 ${attempt} 次尝试失败，${CONFIG.RETRY_DELAY}ms 后重试...`);
      await delay(CONFIG.RETRY_DELAY);
    } catch (error) {
      log('error', `尝试 ${attempt} 发生未预期错误:`, error);
      if (attempt === CONFIG.RETRY_ATTEMPTS) {
        return {
          success: false,
          error: `Claude CLI 调用失败：${error.message}`,
          provider: 'local-claude'
        };
      }
      await delay(CONFIG.RETRY_DELAY);
    }
  }

  return {
    success: false,
    error: 'Claude CLI 调用失败：已达到最大重试次数',
    provider: 'local-claude'
  };
}

/**
 * 执行 Claude CLI（内部函数）
 */
async function executeClaude(prompt, context, attempt) {
  return new Promise((resolve) => {
    const fullPrompt = context ? `${context}\n\n${prompt}` : prompt;
    log('info', `尝试 ${attempt}: 调用 Claude CLI，提示词长度 ${fullPrompt.length}`);

    // 使用 claude 命令，通过 stdin 传入问题
    const claude = spawn('claude', ['--print', '--non-interactive'], {
      shell: true,
      windowsHide: true,
      maxBuffer: CONFIG.MAX_BUFFER_SIZE
    });

    let output = '';
    let errorOutput = '';
    let hasData = false;

    // 超时定时器
    let timeoutTimer = null;

    const cleanup = () => {
      if (timeoutTimer) {
        clearTimeout(timeoutTimer);
        timeoutTimer = null;
      }
    };

    claude.stdout.on('data', (data) => {
      hasData = true;
      output += data.toString();
      log('info', `收到数据，当前输出长度：${output.length}`);
    });

    claude.stderr.on('data', (data) => {
      errorOutput += data.toString();
      log('warn', `stderr: ${data.toString().slice(0, 200)}`);
    });

    claude.on('close', (code) => {
      cleanup();
      if (code === 0 && output.trim()) {
        log('info', `Claude CLI 成功，输出长度：${output.length}`);
        resolve({
          success: true,
          content: output.trim(),
          provider: 'local-claude'
        });
      } else {
        log('error', `Claude CLI 失败，退出码：${code}, stderr: ${errorOutput.slice(0, 500)}`);
        resolve({
          success: false,
          error: errorOutput || `Claude CLI 返回错误码：${code}`,
          provider: 'local-claude'
        });
      }
    });

    claude.on('error', (error) => {
      cleanup();
      log('error', `Claude CLI 进程错误：${error.message}`);
      resolve({
        success: false,
        error: `无法启动 Claude CLI: ${error.message}。请确保已安装 claude-code 包。`,
        provider: 'local-claude'
      });
    });

    // 写入提示到 stdin
    try {
      claude.stdin.write(fullPrompt + '\n');
      claude.stdin.end();
    } catch (writeError) {
      cleanup();
      log('error', `写入 stdin 失败：${writeError.message}`);
      resolve({
        success: false,
        error: `写入提示词失败：${writeError.message}`,
        provider: 'local-claude'
      });
      return;
    }

    // 5 分钟超时
    timeoutTimer = setTimeout(() => {
      log('warn', 'Claude CLI 响应超时，尝试终止进程...');
      try {
        claude.kill('SIGTERM');
        // 如果 SIGTERM 不起作用，5 秒后强制杀死
        setTimeout(() => {
          try {
            claude.kill('SIGKILL');
          } catch (killError) {
            log('error', `SIGKILL 失败：${killError.message}`);
          }
        }, 5000);
      } catch (killError) {
        log('error', `SIGTERM 失败：${killError.message}`);
      }

      resolve({
        success: false,
        error: 'Claude CLI 响应超时（超过 5 分钟）',
        provider: 'local-claude'
      });
    }, CONFIG.TIMEOUT);
  });
}

/**
 * 使用 npx 调用 claude
 * 备用方案，当 claude 命令不可用时
 */
export async function callLocalClaudeNpx(prompt, context = '') {
  return new Promise((resolve) => {
    const fullPrompt = context ? `${context}\n\n${prompt}` : prompt;

    const npx = spawn('npx', ['-y', 'claude-code', '--print', '--non-interactive'], {
      shell: true,
      windowsHide: true
    });

    let output = '';
    let errorOutput = '';

    npx.stdout.on('data', (data) => {
      output += data.toString();
    });

    npx.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    npx.on('close', (code) => {
      if (code === 0 && output.trim()) {
        resolve({
          success: true,
          content: output.trim(),
          provider: 'local-claude-npx'
        });
      } else {
        resolve({
          success: false,
          error: errorOutput || `npx claude-code 返回错误码：${code}`,
          provider: 'local-claude-npx'
        });
      }
    });

    npx.on('error', (error) => {
      resolve({
        success: false,
        error: `无法启动 npx claude-code: ${error.message}`,
        provider: 'local-claude-npx'
      });
    });

    npx.stdin.write(fullPrompt + '\n');
    npx.stdin.end();

    // 5 分钟超时
    setTimeout(() => {
      npx.kill('SIGTERM');
      resolve({
        success: false,
        error: 'npx claude-code 响应超时（超过 5 分钟）',
        provider: 'local-claude-npx'
      });
    }, 300000);
  });
}

/**
 * 检查本地 Claude CLI 是否可用
 */
export async function checkLocalClaudeAvailable() {
  return new Promise((resolve) => {
    const check = spawn('claude', ['--version'], {
      shell: true,
      windowsHide: true
    });

    let output = '';

    check.stdout.on('data', (data) => {
      output += data.toString();
    });

    check.on('close', (code) => {
      resolve({
        available: code === 0,
        version: output.trim() || undefined
      });
    });

    check.on('error', () => {
      resolve({ available: false });
    });

    // 5 秒超时
    setTimeout(() => {
      try { check.kill(); } catch {}
      resolve({ available: false });
    }, 5000);
  });
}

/**
 * 构建题目上下文
 */
export function buildClaudePrompt(question) {
  return `请解释这道 C 语言题目：

题目：${question.title}
题型：${question.type}
章节：${question.chapter || '未分类'}

${question.code ? `相关代码：
\`\`\`c
${question.code}
\`\`\`
` : ''}

${question.userAnswer ? `用户答案：${question.userAnswer}
` : ''}
${question.isCorrect !== undefined ? `答案正确性：${question.isCorrect ? '正确' : '错误'}
` : ''}

请提供：
1. 详细解析（考点、逐行思路）
2. 3 个提示（由浅入深，每条不超过 30 字）
3. 关键知识点（2-3 个）

请用中文回答，格式清晰。`;
}
