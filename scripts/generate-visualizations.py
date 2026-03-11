#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成可视化 HTML 文件
根据题目类型自动生成对应的动画演示文件
"""

import os
import json
import re
from pathlib import Path

# 输出目录
OUTPUT_DIR = Path('public/visualizations')
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# 基础 HTML 模板 (使用 $ 占位符避免与 JSX 大括号冲突)
BASE_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>题目 $question_id - $title - 可视化演示</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --anim-speed: 3000ms;
      --bounce-range: -12px;
      --bounce-scale: 1.12;
      --orb-color: rgba(250, 204, 21, 0.8);
      --card-glow: rgba(16, 185, 129, 0.3);
    }
    * { scrollbar-width: thin; scrollbar-color: #3a3a4a #0d1117; }
    *::-webkit-scrollbar { width: 6px; height: 6px; }
    *::-webkit-scrollbar-track { background: transparent; }
    *::-webkit-scrollbar-thumb { background: #3a3a4a; border-radius: 3px; }
    body {
      background: linear-gradient(180deg, #0a0e17, #0d1219);
      color: #c9d1c9;
      font-family: 'SF Mono', 'Cascadia Code', 'JetBrains Mono', Consolas, monospace;
      overflow: hidden;
      margin: 0;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .anim-fade-in { animation: fadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
    @keyframes bubbleUp {
      0% { opacity: 0; transform: translateY(30px) scale(0.85); filter: blur(4px); }
      40% { opacity: 1; filter: blur(0px); }
      70% { transform: translateY(-4px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
    }
    .anim-bubble-up { animation: bubbleUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
    @keyframes bigBounce {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(var(--bounce-range)) scale(var(--bounce-scale)); }
    }
    .anim-bounce { animation: bigBounce var(--anim-speed) cubic-bezier(0.4, 0, 0.2, 1) infinite; }
    @keyframes valuePop {
      0% { transform: scale(0.3) translateY(8px); opacity: 0; }
      50% { transform: scale(1.15) translateY(-3px); }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }
    .anim-value-pop { animation: valuePop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
    @keyframes scanLight {
      0% { left: -60%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: 160%; opacity: 0; }
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .cursor-blink { animation: cursorBlink 1s step-end infinite; }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
    }
    @keyframes boxPop {
      0% { transform: scale(0) rotate(-12deg); opacity: 0; }
      50% { transform: scale(1.12) rotate(3deg); }
      70% { transform: scale(0.96) rotate(-1deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    .code-line {
      padding: 4px 12px;
      font-size: 14px;
      line-height: 1.6;
      border-radius: 6px;
      margin: 1px 6px;
      border: 1px solid transparent;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .code-line.is-current {
      background: rgba(250, 204, 21, 0.1);
      border-color: rgba(250, 204, 21, 0.3);
      transform: scale(1.02) translateX(8px);
    }
    .code-line.is-current::after {
      content: '';
      position: absolute;
      top: 0; left: -60%;
      width: 40%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(250,204,21,0.08), transparent);
      animation: scanLight 3s ease-in-out infinite;
    }
    .code-line.is-executed { opacity: 0.4; }
    .code-line .line-number {
      color: #484f59;
      width: 40px;
      display: inline-block;
      text-align: right;
      margin-right: 12px;
      user-select: none;
    }
    .code-line .line-content { color: #c9d1d9; }
    .var-card {
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));
      border: 1px solid rgba(251, 191, 36, 0.3);
      border-radius: 12px;
      padding: 16px;
      position: relative;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation: boxPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    .var-card.type-int {
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05));
      border-color: rgba(251, 191, 36, 0.4);
    }
    .var-card.type-string {
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05));
      border-color: rgba(34, 197, 94, 0.4);
    }
    .var-card.type-pointer {
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05));
      border-color: rgba(168, 85, 247, 0.4);
    }
    .var-card.type-array {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05));
      border-color: rgba(59, 130, 246, 0.4);
    }
    .var-label {
      font-size: 11px;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .var-name {
      font-size: 13px;
      color: #79c0ff;
      margin-bottom: 8px;
    }
    .var-value {
      font-size: 24px;
      font-weight: bold;
      color: #e6edf3;
      font-family: 'SF Mono', monospace;
    }
    .var-address {
      font-size: 10px;
      color: #484f59;
      margin-top: 8px;
    }
    .terminal {
      background: rgba(13, 17, 23, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 12px;
      font-family: 'SF Mono', monospace;
      font-size: 13px;
    }
    .terminal-line {
      display: flex;
      gap: 8px;
      margin-bottom: 4px;
    }
    .terminal-prompt { color: #3fb950; font-weight: bold; }
    .terminal-output { color: #e6edf3; }
    .ctrl-btn {
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: #8b949e;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .ctrl-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.1);
      color: #e6edf3;
    }
    .ctrl-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .ctrl-btn.primary {
      background: linear-gradient(135deg, #238636, #2ea043);
      border-color: rgba(46, 160, 67, 0.4);
      color: #fff;
    }
    .panel {
      background: rgba(22, 27, 34, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 16px;
    }
    .panel-title {
      font-size: 12px;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .progress-bar {
      height: 4px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #238636, #2ea043);
      transition: width 0.3s ease;
    }
    .message {
      background: rgba(255, 255, 255, 0.03);
      border-left: 3px solid #2ea043;
      padding: 10px 12px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 8px;
      font-size: 13px;
      animation: bubbleUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .message.highlight {
      border-color: #f0b724;
      background: rgba(240, 183, 36, 0.1);
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useCallback, useRef } = React;

    // 题目数据
    const questionData = {
      id: $question_id,
      title: '$title',
      code: `$code`,
      knowledgePoint: '$knowledge_point'
    };

    // 代码行数据
    const codeLines = $code_lines_json;

    // 步骤定义
    const steps = $steps_json;

    function App() {
      const [step, setStep] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [speed, setSpeed] = useState(1500);
      const msgScrollRef = useRef(null);

      const currentStep = steps[step] || steps[0];

      useEffect(() => {
        if (isPlaying && step < steps.length - 1) {
          const timer = setTimeout(() => {
            setStep(prev => prev + 1);
          }, speed);
          return () => clearTimeout(timer);
        } else if (step >= steps.length - 1) {
          setIsPlaying(false);
        }
      }, [isPlaying, step, speed]);

      useEffect(() => {
        if (msgScrollRef.current) {
          msgScrollRef.current.scrollTop = 0;
        }
      }, [step]);

      const nextStep = useCallback(() => {
        setStep(prev => Math.min(steps.length - 1, prev + 1));
      }, []);

      const prevStep = useCallback(() => {
        setStep(prev => Math.max(0, prev - 1));
      }, []);

      const reset = useCallback(() => {
        setStep(0);
        setIsPlaying(false);
      }, []);

      const togglePlay = useCallback(() => {
        setIsPlaying(prev => !prev);
      }, []);

      useEffect(() => {
        const handleKey = (e) => {
          switch(e.key) {
            case 'ArrowRight':
            case ' ':
              e.preventDefault();
              nextStep();
              break;
            case 'ArrowLeft':
              e.preventDefault();
              prevStep();
              break;
            case 'Enter':
              e.preventDefault();
              togglePlay();
              break;
            case 'r':
            case 'R':
              e.preventDefault();
              reset();
              break;
          }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
      }, [nextStep, prevStep, reset, togglePlay]);

      const renderCodeLine = (line, index) => {
        const isCurrent = currentStep.currentLine === index;
        const isExecuted = currentStep.executedLines.includes(index);

        return (
          <div
            key={index}
            className={`code-line ${isCurrent ? 'is-current' : ''} ${isExecuted && !isCurrent ? 'is-executed' : ''}`}
          >
            <span className="line-number">{line.num}</span>
            <span className="line-content">
              <span style={{ color: line.type === 'preprocessor' ? '#79c0ff' : line.type === 'function' ? '#d2a8ff' : '#c9d1d9' }}>
                {line.content}
              </span>
            </span>
          </div>
        );
      };

      const renderVarCards = () => {
        const vars = currentStep.variables;
        if (!vars || Object.keys(vars).length === 0) {
          return (
            <div className="text-center py-8 text-gray-500">暂无变量</div>
          );
        }

        return (
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(vars).map(([name, data]) => (
              <div key={name} className={`var-card type-${data.type}`}>
                <div className="var-label">{data.type}</div>
                <div className="var-name">{name}</div>
                <div className="var-value" key={data.value}>{data.value}</div>
                <div className="var-address">{data.address}</div>
              </div>
            ))}
          </div>
        );
      };

      return (
        <div className="h-screen flex flex-col overflow-hidden">
          <div className="flex-shrink-0 px-4 py-3 flex items-center justify-between border-b border-white/10"
               style={{ background: 'linear-gradient(90deg, rgba(15,20,30,0.98), rgba(20,25,35,0.98))' }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-400">main.c</span>
              <span className="text-xs text-gray-500">题目 #{questionData.id}</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="ctrl-btn" onClick={prevStep} disabled={step === 0}>◀</button>
              <button className="ctrl-btn primary" onClick={togglePlay}>
                {isPlaying ? '⏸ 暂停' : '▶ 播放'}
              </button>
              <button className="ctrl-btn" onClick={nextStep} disabled={step >= steps.length - 1}>▶▶</button>
              <button className="ctrl-btn" onClick={reset}>↻ 重置</button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">速度</span>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-xs text-gray-400 w-12">{speed}ms</span>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="flex-[3] flex flex-col border-r border-white/10 overflow-hidden">
              <div className="flex-1 overflow-auto py-3">
                {codeLines.map(renderCodeLine)}
              </div>

              <div className="h-28 flex-shrink-0 border-t border-white/10 p-3">
                <div className="terminal h-full overflow-auto">
                  <div className="text-xs text-gray-500 mb-2">$ 程序输出</div>
                  {currentStep.output.map((line, i) => (
                    <div key={i} className="terminal-line anim-fade-in">
                      <span className="terminal-prompt">$</span>
                      <span className="terminal-output">{line}</span>
                    </div>
                  ))}
                  {currentStep.output.length === 0 && (
                    <div className="text-gray-600 text-sm">等待输出...</div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-[2] flex flex-col overflow-hidden p-4 gap-4">
              <div className="panel">
                <div className="panel-title"><span>📦</span> 内存变量</div>
                {renderVarCards()}
              </div>

              <div className="panel flex-1 overflow-auto" ref={msgScrollRef}>
                <div className="panel-title"><span>💡</span> 执行解说</div>
                <div className="message highlight anim-bubble-up">{currentStep.message}</div>
              </div>
            </div>
          </div>

          <div className="h-1 flex-shrink-0 bg-white/5">
            <div className="progress-fill" style={{ width: `${(step / (steps.length - 1)) * 100}%` }}></div>
          </div>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
'''


def generate_code_lines(code: str) -> list:
    """生成代码行数据"""
    lines = code.strip().split('\n')
    code_lines = []
    for i, line in enumerate(lines, 1):
        code_type = 'normal'
        if line.strip().startswith('#'):
            code_type = 'preprocessor'
        elif 'int main' in line or 'void main' in line:
            code_type = 'function'
        elif 'return' in line:
            code_type = 'return'
        elif 'printf' in line or 'scanf' in line:
            code_type = 'function-call'
        elif 'int ' in line or 'char ' in line or 'float ' in line or 'double ' in line:
            code_type = 'declaration'

        code_lines.append({
            'num': i,
            'content': line,
            'type': code_type
        })
    return code_lines


def generate_steps(code_lines: list, knowledge_point: str) -> list:
    """生成步骤数据"""
    steps = []

    # 步骤 0: 初始状态
    steps.append({
        'step': 0,
        'currentLine': -1,
        'executedLines': [],
        'variables': {},
        'output': [],
        'message': '程序开始执行，准备加载代码...'
    })

    # 步骤 1: 预处理
    if code_lines and code_lines[0]['type'] == 'preprocessor':
        steps.append({
            'step': 1,
            'currentLine': 0,
            'executedLines': [0],
            'variables': {},
            'output': [],
            'message': f'第 1 行：预处理指令，{knowledge_point}'
        })

    # 步骤 2-N: 逐行执行
    variables = {}
    output = []
    for i, line in enumerate(code_lines):
        executed = list(range(i + 1))

        if line['type'] == 'declaration':
            # 提取变量声明
            match = re.search(r'(\w+)\s+(\w+)\s*=\s*(.+?);', line['content'])
            if match:
                var_type = match.group(1)
                var_name = match.group(2)
                var_value = match.group(3).strip()

                # 尝试解析值
                try:
                    if var_type == 'char':
                        var_value = var_value.strip("'\"")
                    else:
                        var_value = int(var_value)
                except:
                    pass

                variables[var_name] = {
                    'value': var_value,
                    'type': var_type,
                    'address': f'0x7fff5fbff{len(variables) * 2:04x}'
                }

        elif line['type'] == 'function-call' and 'printf' in line['content']:
            # 提取输出
            match = re.search(r'printf\("([^"]+)"', line['content'])
            if match:
                format_str = match.group(1)
                # 简单替换占位符
                output_line = format_str
                for var_name, var_data in variables.items():
                    output_line = output_line.replace('%d', str(var_data['value']), 1)
                    output_line = output_line.replace('%s', str(var_data['value']), 1)
                    output_line = output_line.replace('%c', str(var_data['value']), 1)
                output_line = output_line.replace('\\n', '')
                output.append(output_line)

        steps.append({
            'step': len(steps),
            'currentLine': i,
            'executedLines': executed,
            'variables': dict(variables),
            'output': list(output),
            'message': f"第{line['num']}行：{line['content'].strip()[:50]}..."
        })

    # 最后一步：程序结束
    steps.append({
        'step': len(steps),
        'currentLine': -1,
        'executedLines': list(range(len(code_lines))),
        'variables': {},
        'output': output,
        'message': '程序执行完毕，main 函数返回，栈帧销毁，变量释放'
    })

    return steps


def generate_viz_html(question_id: int, title: str, code: str, knowledge_point: str) -> str:
    """生成单个可视化 HTML 文件"""
    code_lines = generate_code_lines(code)
    steps = generate_steps(code_lines, knowledge_point)

    html = BASE_TEMPLATE
    html = html.replace('$question_id', str(question_id))
    html = html.replace('$title', title)
    html = html.replace('$code', code.replace('`', '\\`'))
    html = html.replace('$knowledge_point', knowledge_point)
    html = html.replace('$code_lines_json', json.dumps(code_lines, ensure_ascii=False))
    html = html.replace('$steps_json', json.dumps(steps, ensure_ascii=False))

    return html


def main():
    """主函数"""
    print('Starting to generate visualization HTML files...')
    print('开始生成可视化 HTML 文件...')

    # 示例题目数据
    sample_questions = [
        {
            'id': 10001,
            'title': 'uint8_t 溢出',
            'code': '''#include <stdio.h>
#include <stdint.h>

int main() {
    uint8_t x = 250;
    x = x + 10;
    printf("x = %d\\n", x);
    return 0;
}''',
            'knowledge_point': 'uint8_t 溢出'
        },
        {
            'id': 10002,
            'title': 'int8_t 溢出',
            'code': '''#include <stdio.h>
#include <stdint.h>

int main() {
    int8_t y = 120;
    y = y + 10;
    printf("y = %d\\n", y);
    return 0;
}''',
            'knowledge_point': 'int8_t 溢出'
        },
        {
            'id': 10003,
            'title': '有符号无符号比较',
            'code': '''#include <stdio.h>
#include <stdint.h>

int main() {
    int8_t signed_val = -5;
    uint8_t unsigned_val = 10;
    if (signed_val < unsigned_val) {
        printf("signed < unsigned\\n");
    } else {
        printf("signed >= unsigned\\n");
    }
    return 0;
}''',
            'knowledge_point': '有符号无符号比较'
        },
        {
            'id': 10004,
            'title': '位或运算设置位',
            'code': '''#include <stdio.h>
#include <stdint.h>

int main() {
    uint8_t flags = 0b00001010;
    flags = flags | 0b00000001;
    printf("flags = %08b\\n", flags);
    return 0;
}''',
            'knowledge_point': '位或运算设置位'
        },
        {
            'id': 10005,
            'title': '位与取反清除位',
            'code': '''#include <stdio.h>
#include <stdint.h>

int main() {
    uint8_t flags = 0b00001011;
    flags = flags & ~0b00000001;
    printf("flags = %08b\\n", flags);
    return 0;
}''',
            'knowledge_point': '位与取反清除位'
        }
    ]

    generated = 0
    for q in sample_questions:
        html_content = generate_viz_html(
            question_id=q['id'],
            title=q['title'],
            code=q['code'],
            knowledge_point=q['knowledge_point']
        )

        # 生成安全的文件名
        safe_title = q['title'].replace(' ', '_').replace('/', '_').replace('.', '_')
        output_file = OUTPUT_DIR / f"q{q['id']:05d}_{safe_title}.html"

        output_file.write_text(html_content, encoding='utf-8')
        print(f'Generated: {output_file.name}')
        generated += 1

    print(f'\\nDone! Generated {generated} visualization files')
    print(f'完成！共生成 {generated} 个可视化文件')
    print(f'Output directory: {OUTPUT_DIR.absolute()}')
    print(f'输出目录：{OUTPUT_DIR.absolute()}')


if __name__ == '__main__':
    main()
