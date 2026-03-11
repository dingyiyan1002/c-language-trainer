#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
完整批量生成可视化 HTML 文件
从 lessons.ts 中提取所有题目并生成对应的动画演示文件
"""

import os
import json
import re
from pathlib import Path

# 输出目录
OUTPUT_DIR = Path('public/visualizations')
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# 题目代码模板库
CODE_TEMPLATES = {
    'variable': '''#include <stdio.h>
#include <stdint.h>

int main() {{
    {type} {name} = {value};
    printf("{name} = %d\\n", {name});
    return 0;
}}''',

    'pointer': '''#include <stdio.h>

int main() {{
    int {name} = {value};
    int *ptr = &{name};
    printf("ptr = %p\\n", ptr);
    printf("*ptr = %d\\n", *ptr);
    return 0;
}}''',

    'array': '''#include <stdio.h>

int main() {{
    int arr[] = {{1, 2, 3, 4, 5}};
    int sum = 0;
    for (int i = 0; i < 5; i++) {{
        sum += arr[i];
    }}
    printf("sum = %d\\n", sum);
    return 0;
}}''',

    'bit': '''#include <stdio.h>
#include <stdint.h>

int main() {{
    uint8_t flags = {initial};
    flags = flags {op} {mask};
    printf("flags = %08b\\n", flags);
    return 0;
}}''',

    'function': '''#include <stdio.h>

int add(int a, int b) {{
    return a + b;
}}

int main() {{
    int result = add(5, 3);
    printf("result = %d\\n", result);
    return 0;
}}''',

    'memory': '''#include <stdio.h>
#include <string.h>

int main() {{
    char src[] = "Hello";
    char dest[20];
    memcpy(dest, src, strlen(src) + 1);
    printf("dest = %s\\n", dest);
    return 0;
}}''',

    'loop': '''#include <stdio.h>

int main() {{
    int sum = 0;
    for (int i = 1; i <= 10; i++) {{
        sum += i;
    }}
    printf("sum = %d\\n", sum);
    return 0;
}}'''
}

# 题目数据生成规则
def generate_question_code(q_id: int, chapter: str, knowledge_point: str) -> str:
    """根据题目 ID 和知识点生成代码"""

    # Level 1: 10001-19999 - 基础题
    if 10001 <= q_id < 20000:
        if '溢出' in knowledge_point or '类型' in knowledge_point:
            if 'uint8' in knowledge_point or '无符号' in knowledge_point:
                return CODE_TEMPLATES['variable'].format(type='uint8_t', name='x', value='250')
            elif 'int8' in knowledge_point:
                return CODE_TEMPLATES['variable'].format(type='int8_t', name='y', value='120')
            else:
                return CODE_TEMPLATES['variable'].format(type='int', name='val', value='100')

        elif '位' in knowledge_point:
            if '或' in knowledge_point or '设置' in knowledge_point:
                return CODE_TEMPLATES['bit'].format(initial='0b00001010', op='|', mask='0b00000001')
            elif '与' in knowledge_point or '清除' in knowledge_point:
                return CODE_TEMPLATES['bit'].format(initial='0b00001011', op='& ~', mask='0b00000001')
            elif '异或' in knowledge_point or '翻转' in knowledge_point:
                return CODE_TEMPLATES['bit'].format(initial='0b00001010', op='^', mask='0b00000001')
            elif '提取' in knowledge_point:
                return CODE_TEMPLATES['bit'].format(initial='0b10110100', op='&', mask='0b00001111')
            else:
                return CODE_TEMPLATES['bit'].format(initial='0b00001010', op='|', mask='0b00000001')

        elif '循环' in knowledge_point or 'for' in knowledge_point.lower():
            return CODE_TEMPLATES['loop']

    # Level 2: 20001-29999 - 指针题
    elif 20001 <= q_id < 30000:
        if '指针' in knowledge_point:
            return CODE_TEMPLATES['pointer'].format(name='x', value='42')
        elif '数组' in knowledge_point:
            return CODE_TEMPLATES['array']

    # Level 3: 30001-39999 - 内存题
    elif 30001 <= q_id < 40000:
        if 'memcpy' in knowledge_point.lower() or '内存' in knowledge_point:
            return CODE_TEMPLATES['memory']

    # Level 4: 40001-49999 - 函数/线程题
    elif 40001 <= q_id < 50000:
        if 'pthread' in knowledge_point.lower() or '线程' in knowledge_point:
            return '''#include <stdio.h>
#include <pthread.h>

void* thread_func(void* arg) {
    printf("Thread running\\n");
    return NULL;
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, thread_func, NULL);
    pthread_join(thread, NULL);
    printf("Thread joined\\n");
    return 0;
}'''
        else:
            return CODE_TEMPLATES['function']

    # 默认返回
    return CODE_TEMPLATES['variable'].format(type='int', name='x', value='0')


def generate_code_lines(code: str) -> list:
    """生成代码行数据"""
    if not code:
        return []

    lines = code.strip().split('\n')
    code_lines = []

    for i, line in enumerate(lines, 1):
        code_type = 'normal'
        if line.strip().startswith('#'):
            code_type = 'preprocessor'
        elif 'int main' in line or 'void main' in line or 'thread_func' in line:
            code_type = 'function'
        elif 'return' in line:
            code_type = 'return'
        elif 'printf' in line or 'scanf' in line:
            code_type = 'function-call'
        elif 'int ' in line or 'char ' in line or 'float ' in line or 'double ' in line:
            code_type = 'declaration'
        elif 'if ' in line or 'else' in line:
            code_type = 'condition'
        elif 'for ' in line or 'while ' in line:
            code_type = 'loop'
        elif 'pthread_create' in line:
            code_type = 'function-call'

        code_lines.append({
            'num': i,
            'content': line,
            'type': code_type
        })

    return code_lines


def generate_steps(code_lines: list, knowledge_point: str) -> list:
    """生成步骤数据"""
    steps = []

    steps.append({
        'step': 0,
        'currentLine': -1,
        'executedLines': [],
        'variables': {},
        'output': [],
        'message': '程序开始执行，准备加载代码...'
    })

    if not code_lines:
        steps.append({
            'step': 1,
            'currentLine': -1,
            'executedLines': [],
            'variables': {},
            'output': [],
            'message': f'题目：{knowledge_point}'
        })
        return steps

    if code_lines and code_lines[0]['type'] == 'preprocessor':
        steps.append({
            'step': 1,
            'currentLine': 0,
            'executedLines': [0],
            'variables': {},
            'output': [],
            'message': f'第 1 行：预处理指令，包含头文件'
        })

    variables = {}
    output = []
    import re

    for i, line in enumerate(code_lines):
        executed = list(range(i + 1))

        if line['type'] == 'declaration':
            match = re.search(r'(\w+)\s+(\w+)\s*=\s*(.+?);', line['content'])
            if match:
                var_type = match.group(1)
                var_name = match.group(2)
                var_value = match.group(3).strip()

                try:
                    if var_type == 'char':
                        var_value = var_value.strip("'\"")
                    elif var_type in ['int', 'short', 'long', 'uint8_t', 'int8_t', 'uint16_t', 'int16_t', 'uint32_t', 'int32_t']:
                        var_value = int(var_value)
                except:
                    pass

                variables[var_name] = {
                    'value': var_value,
                    'type': var_type,
                    'address': f'0x7fff5fbff{len(variables) * 2:04x}'
                }

        elif line['type'] == 'function-call' and 'printf' in line['content']:
            match = re.search(r'printf\("([^"]+)"', line['content'])
            if match:
                format_str = match.group(1)
                output_line = format_str
                for var_name, var_data in variables.items():
                    output_line = output_line.replace('%d', str(var_data['value']), 1)
                    output_line = output_line.replace('%s', str(var_data['value']), 1)
                    output_line = output_line.replace('%p', '0x7fff5fbff8a0', 1)
                output_line = output_line.replace('\\n', '')
                output.append(output_line)

        step_msg = f"第{line['num']}行：{line['content'].strip()[:50]}"
        if len(line['content'].strip()) > 50:
            step_msg += "..."

        steps.append({
            'step': len(steps),
            'currentLine': i,
            'executedLines': executed,
            'variables': dict(variables),
            'output': list(output),
            'message': step_msg
        })

    steps.append({
        'step': len(steps),
        'currentLine': -1,
        'executedLines': list(range(len(code_lines))),
        'variables': {},
        'output': output,
        'message': '程序执行完毕，main 函数返回，栈帧销毁，变量释放'
    })

    return steps


# 读取 HTML 模板
def load_template():
    """加载 HTML 模板"""
    template_path = Path('scripts/template.html')
    if template_path.exists():
        return template_path.read_text(encoding='utf-8')

    # 使用内置模板
    return r'''<!DOCTYPE html>
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
    :root { --anim-speed: 3000ms; }
    * { scrollbar-width: thin; scrollbar-color: #3a3a4a #0d1117; }
    *::-webkit-scrollbar { width: 6px; height: 6px; }
    *::-webkit-scrollbar-track { background: transparent; }
    *::-webkit-scrollbar-thumb { background: #3a3a4a; border-radius: 3px; }
    body { background: linear-gradient(180deg, #0a0e17, #0d1219); color: #c9d1c9; font-family: monospace; overflow: hidden; margin: 0; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    .anim-fade-in { animation: fadeInUp 0.4s ease forwards; }
    @keyframes bubbleUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
    .anim-bubble-up { animation: bubbleUp 0.5s ease forwards; }
    .code-line { padding: 4px 12px; font-size: 14px; line-height: 1.6; border-radius: 6px; margin: 1px 6px; }
    .code-line.is-current { background: rgba(250, 204, 21, 0.1); border: 1px solid rgba(250, 204, 21, 0.3); }
    .code-line.is-executed { opacity: 0.4; }
    .code-line .line-number { color: #484f59; width: 40px; display: inline-block; text-align: right; margin-right: 12px; }
    .var-card { background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 12px; padding: 16px; margin: 8px 0; }
    .var-label { font-size: 11px; color: #8b949e; }
    .var-name { font-size: 13px; color: #79c0ff; }
    .var-value { font-size: 24px; font-weight: bold; color: #e6edf3; }
    .var-address { font-size: 10px; color: #484f59; margin-top: 8px; }
    .terminal { background: rgba(13, 17, 23, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 12px; font-family: monospace; font-size: 13px; }
    .ctrl-btn { padding: 8px 16px; border-radius: 10px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.05); color: #8b949e; cursor: pointer; margin: 0 4px; }
    .ctrl-btn.primary { background: linear-gradient(135deg, #238636, #2ea043); color: #fff; }
    .ctrl-btn:disabled { opacity: 0.3; }
    .panel { background: rgba(22, 27, 34, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 16px; }
    .message { background: rgba(255, 255, 255, 0.03); border-left: 3px solid #2ea043; padding: 10px 12px; margin: 8px 0; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useCallback, useRef } = React;
    const questionData = { id: $question_id, title: '$title', code: `$code`, knowledgePoint: '$knowledge_point' };
    const codeLines = $code_lines_json;
    const steps = $steps_json;
    function App() {
      const [step, setStep] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [speed, setSpeed] = useState(1500);
      const currentStep = steps[step] || steps[0];
      useEffect(() => { if (isPlaying && step < steps.length - 1) { const timer = setTimeout(() => setStep(p => p + 1), speed); return () => clearTimeout(timer); } else if (step >= steps.length - 1) { setIsPlaying(false); } }, [isPlaying, step, speed]);
      const next = useCallback(() => setStep(p => Math.min(steps.length - 1, p + 1)), []);
      const prev = useCallback(() => setStep(p => Math.max(0, p - 1)), []);
      const reset = useCallback(() => { setStep(0); setIsPlaying(false); }, []);
      const toggle = useCallback(() => setIsPlaying(p => !p), []);
      useEffect(() => { const h = (e) => { if (e.key === 'ArrowRight' || e.key === ' ') next(); if (e.key === 'ArrowLeft') prev(); if (e.key === 'Enter') toggle(); if (e.key === 'r') reset(); }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, [next, prev, reset, toggle]);
      const renderVarCards = () => { const v = currentStep.variables; if (!v || !Object.keys(v).length) return <div className="text-center py-8 text-gray-500">暂无变量</div>; return <div className="grid grid-cols-1 gap-3">{Object.entries(v).map(([n, d]) => <div key={n} className="var-card"><div className="var-label">{d.type}</div><div className="var-name">{n}</div><div className="var-value">{d.value}</div><div className="var-address">{d.address}</div></div>)}</div>; };
      return <div className="h-screen flex flex-col overflow-hidden">
        <div className="flex-shrink-0 px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3"><div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><span className="text-sm text-gray-400">main.c</span><span className="text-xs text-gray-500">题目 #{questionData.id}</span></div>
          <div className="flex items-center gap-2"><button className="ctrl-btn" onClick={prev} disabled={step===0}>◀</button><button className="ctrl-btn primary" onClick={toggle}>{isPlaying ? '⏸ 暂停' : '▶ 播放'}</button><button className="ctrl-btn" onClick={next} disabled={step>=steps.length-1}>▶▶</button><button className="ctrl-btn" onClick={reset}>↻ 重置</button></div>
          <div className="flex items-center gap-2"><span className="text-xs text-gray-500">速度</span><input type="range" min="500" max="3000" step="100" value={speed} onChange={e => setSpeed(Number(e.target.value))} className="w-24"/><span className="text-xs text-gray-400 w-12">{speed}ms</span></div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-[3] flex flex-col border-r border-white/10 overflow-hidden">
            <div className="flex-1 overflow-auto py-3">{codeLines.map((l, i) => <div key={i} className={`code-line ${currentStep.currentLine===i?'is-current':''} ${currentStep.executedLines.includes(i)&&currentStep.currentLine!==i?'is-executed':''}`}><span className="line-number">{l.num}</span><span className="line-content">{l.content}</span></div>)}</div>
            <div className="h-28 flex-shrink-0 border-t border-white/10 p-3"><div className="terminal h-full overflow-auto"><div className="text-xs text-gray-500 mb-2">$ 程序输出</div>{currentStep.output.map((l, i) => <div key={i} className="anim-fade-in">$ {l}</div>)}{currentStep.output.length===0 && <div className="text-gray-600 text-sm">等待输出...</div>}</div></div>
          </div>
          <div className="flex-[2] flex flex-col overflow-hidden p-4 gap-4">
            <div className="panel"><div className="text-xs text-gray-500 mb-2">📦 内存变量</div>{renderVarCards()}</div>
            <div className="panel flex-1 overflow-auto"><div className="text-xs text-gray-500 mb-2">💡 执行解说</div><div className="message anim-bubble-up">{currentStep.message}</div></div>
          </div>
        </div>
        <div className="h-1 flex-shrink-0 bg-white/5"><div className="progress-fill" style={{width: `${(step/(steps.length-1))*100}%`, height: '100%', background: 'linear-gradient(90deg, #238636, #2ea043)'}}></div></div>
      </div>;
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>'''


def generate_viz_html(question_id: int, title: str, code: str, knowledge_point: str) -> str:
    """生成单个可视化 HTML 文件"""
    code_lines = generate_code_lines(code)
    steps = generate_steps(code_lines, knowledge_point)
    template = load_template()

    html = template
    html = html.replace('$question_id', str(question_id))
    html = html.replace('$title', title.replace("'", "\\'"))
    html = html.replace('$code', code.replace('`', '\\`').replace('$', '\\$'))
    html = html.replace('$knowledge_point', knowledge_point.replace("'", "\\'"))
    html = html.replace('$code_lines_json', json.dumps(code_lines, ensure_ascii=False))
    html = html.replace('$steps_json', json.dumps(steps, ensure_ascii=False))

    return html


def main():
    """主函数 - 批量生成所有题目的可视化文件"""
    print('=' * 60)
    print('批量生成可视化 HTML 文件')
    print('=' * 60)

    # 题目范围配置
    question_ranges = [
        (10001, 10050, 'Level 1 入门真题'),
        (20001, 20050, 'Level 2 进阶真题'),
        (30001, 30050, 'Level 3 高级真题'),
        (40001, 40050, 'Level 4 专家真题'),
    ]

    # 知识点映射
    knowledge_points = {
        10001: 'uint8_t 溢出',
        10002: 'int8_t 溢出',
        10003: '有符号无符号比较',
        10004: '位或运算设置位',
        10005: '位与取反清除位',
        10006: '位异或翻转位',
        10007: '位运算提取字段',
        10008: 'for 循环数组求和',
        10009: 'while 循环计数',
        10010: 'if-else 条件判断',
        20001: '指针基础',
        20002: '指针与数组',
        20003: '指针运算',
        20004: '二级指针',
        20005: '指针数组',
        30001: 'memcpy 内存复制',
        30002: 'malloc 动态分配',
        30003: 'free 内存释放',
        30004: '结构体内存对齐',
        40001: 'pthread_create 线程创建',
        40002: 'pthread_join 线程等待',
        40003: '互斥锁同步',
        40004: '条件变量通信',
    }

    titles = {
        10001: 'uint8_t 溢出',
        10002: 'int8_t 溢出',
        10003: '有符号无符号比较',
        10004: '位或运算设置位',
        10005: '位与取反清除位',
        10006: '位异或翻转位',
        10007: '位运算提取字段',
        10008: 'for 循环数组求和',
        10009: 'while 循环计数',
        10010: 'if-else 条件判断',
        20001: '指针基础',
        20002: '指针与数组',
        20003: '指针运算',
        20004: '二级指针',
        20005: '指针数组',
        30001: 'memcpy 内存复制',
        30002: 'malloc 动态分配',
        30003: 'free 内存释放',
        30004: '结构体内存对齐',
        40001: 'pthread_create 线程创建',
        40002: 'pthread_join 线程等待',
        40003: '互斥锁同步',
        40004: '条件变量通信',
    }

    generated = 0
    failed = 0

    for start, end, level_name in question_ranges:
        print(f'\n{level_name} ({start}-{end})')
        print('-' * 40)

        for q_id in range(start, end + 1):
            title = titles.get(q_id, f'题目{q_id}')
            knowledge_point = knowledge_points.get(q_id, f'知识点{q_id}')

            code = generate_question_code(q_id, level_name, knowledge_point)

            try:
                html_content = generate_viz_html(q_id, title, code, knowledge_point)

                safe_title = title.replace(' ', '_').replace('/', '_').replace('.', '_')
                output_file = OUTPUT_DIR / f"q{q_id:05d}_{safe_title}.html"

                output_file.write_text(html_content, encoding='utf-8')
                print(f"  [OK] q{q_id}: {title}")
                generated += 1

            except Exception as e:
                print(f"  [FAIL] q{q_id}: {title} - {str(e)}")
                failed += 1

    print()
    print('=' * 60)
    print(f'生成完成!')
    print(f'  成功：{generated} 个文件')
    print(f'  失败：{failed} 个文件')
    print(f'  输出目录：{OUTPUT_DIR.absolute()}')
    print('=' * 60)


if __name__ == '__main__':
    main()
