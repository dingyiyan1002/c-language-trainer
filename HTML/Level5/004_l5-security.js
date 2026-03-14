window.LESSON_DATA = {
  meta: {
    id: 'l5-security',
    title: '安全编程',
    chapter: 'Level5',
    index: 4,
    filename: 'security_issues.c',
    keyPoints: ['缓冲区溢出', '整数溢出', '安全编码']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'vulnerableCopy' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'input' }, { type: 'punc', text: ')' }] },
    { num: 6, tokens: [{ type: 'punc', text: '{' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '16' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'strcpy' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'input' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Copied: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'punc', text: '}' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'safeCopy' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'input' }, { type: 'punc', text: ')' }] },
    { num: 13, tokens: [{ type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'num', text: '16' }, { type: 'punc', text: ']' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'strncpy' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'input' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: '[' }, { type: 'kw', text: 'sizeof' }, { type: 'punc', text: '(' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"\\0"' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Copied safely: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'buffer' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'punc', text: '}' }] },
    { num: 19, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 20, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'integerOverflow' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'size' }, { type: 'punc', text: ')' }] },
    { num: 21, tokens: [{ type: 'punc', text: '{' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'size' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1000' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 23, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'buf' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'malloc' }, { type: 'punc', text: '(' }, { type: 'id', text: 'size' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Allocated %u bytes\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'size' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 26, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Size too large\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 28, tokens: [{ type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 30, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'vulnerableCopy' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'safeCopy' }, { type: 'punc', text: '(' }, { type: 'str', text: '"This is a very long string that exceeds buffer"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'integerOverflow' }, { type: 'punc', text: '(' }, { type: 'num', text: '4294967200' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 35, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'buffer', name: 'buffer', type: 'char[16]', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'input', name: 'input', type: 'const char*', addr: '0x500000', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'size', name: 'size', type: 'uint32_t', addr: '0x7fff10', glowColor: 'rgba(239,68,68,0.35)', accentCls: 'text-red-400', badgeCls: 'text-red-400 border-red-500/30 bg-red-500/12', appearStep: 3 }
  ],
  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: { icon: 'rocket', text: '点击播放，学习 C 语言安全编程实践', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'vulnerableCopy — 缓冲区溢出漏洞示例',
        color: 'red',
        actor: 'Security',
        detail: '这是一个典型的不安全代码：strcpy 不检查目标缓冲区大小。如果 input 超过 16 字节，会覆盖栈上的其他数据，可能导致程序崩溃或被利用执行恶意代码。'
      },
      prediction: {
        question: 'strcpy 的主要安全问题是什么？',
        options: ['速度慢', '不检查缓冲区边界', '不支持中文'],
        answer: 1
      },
      misconception: null,
      actor: 'Security',
      target: 'func:vulnerableCopy',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { buffer: '' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'char buffer[16] — 16 字节栈缓冲区',
        color: 'yellow',
        actor: 'CPU',
        detail: ' buffer 分配在栈上，只有 16 字节空间。超过 16 字节的写入会覆盖相邻的栈帧数据，可能破坏返回地址。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:buffer',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 8,
      executedLines: [1, 2, 3, 4, 5, 6, 7],
      vars: { buffer: '', input: 'Hello' },
      highlightVar: 'input',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'strcpy(buffer, input) — 无边界检查的复制',
        color: 'red',
        actor: 'CPU',
        detail: 'strcpy 盲目复制 input 的所有字节到 buffer，直到遇到\\0。如果 input 长度>15（留 1 字节给\\0），就会发生缓冲区溢出。这是 CWE-120 漏洞。'
      },
      prediction: null,
      misconception: {
        title: '缓冲区溢出危害',
        text: '缓冲区溢出可导致：1) 程序崩溃（覆盖重要数据）2) 代码执行（攻击者覆盖返回地址）3) 信息泄漏（破坏栈帧）。这是最常见和最危险的安全漏洞之一。'
      },
      actor: 'CPU',
      target: 'var:buffer',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 12,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { buffer: '', input: 'Hello' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'safeCopy — 安全版本（边界检查）',
        color: 'green',
        actor: 'Security',
        detail: '安全版本使用 strncpy 并指定最大复制长度。即使 input 很长，也最多复制 sizeof(buffer)-1 字节，确保不溢出。'
      },
      prediction: null,
      misconception: null,
      actor: 'Security',
      target: 'func:safeCopy',
      timing: 'design-time'
    },
    {
      step: 5,
      line: 15,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { buffer: '', input: 'This is a very long string...' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: 'strncpy(buffer, input, sizeof(buffer)-1) — 限制复制长度',
        color: 'green',
        actor: 'CPU',
        detail: 'strncpy 最多复制 15 字节（留 1 字节给\\0）。即使 input 很长，也不会溢出。这是防御性编程的典范。'
      },
      prediction: {
        question: '为什么是 sizeof(buffer)-1 而不是 sizeof(buffer)？',
        options: ['性能优化', '留出空间给字符串结束符\\0', '随机选择'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:buffer',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { buffer: 'This is a ver' },
      highlightVar: 'buffer',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: 'buffer[sizeof(buffer)-1] = "\\0" — 确保字符串终止',
        color: 'green',
        actor: 'CPU',
        detail: 'strncpy 在源字符串长度>=n 时不会自动添加\\0。手动设置最后一个字节为\\0，确保字符串正确终止。这是使用 strncpy 的标准做法。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:buffer',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 20,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      vars: { buffer: 'This is a ver', input: 'This is a very long string...' },
      highlightVar: 'size',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'integerOverflow — 整数溢出漏洞示例',
        color: 'red',
        actor: 'Security',
        detail: '函数检查 size+100 < 1000，但当 size 接近 UINT32_MAX 时，size+100 会溢出回绕到一个小值，绕过检查。攻击者可分配比预期小的缓冲区，导致后续溢出。'
      },
      prediction: null,
      misconception: {
        title: '整数溢出危害',
        text: '整数溢出可导致：1) 绕过边界检查 2) 分配小缓冲区 3) 后续操作溢出。无符号整数溢出是定义良好的（回绕），但有符号整数溢出是未定义行为。'
      },
      actor: 'Security',
      target: 'func:integerOverflow',
      timing: 'design-time'
    },
    {
      step: 8,
      line: 22,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: { size: 4294967200 },
      highlightVar: 'size',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'if (size + 100 < 1000) — 整数溢出检查失效',
        color: 'red',
        actor: 'CPU',
        detail: 'size=4294967200 (UINT32_MAX-95)。size+100 = 4294967300，但 uint32_t 最大值是 4294967295，溢出后结果是 4294967300-4294967296 = 4，小于 1000，检查被绕过！'
      },
      prediction: {
        question: 'size=4294967200 时，size+100 的结果是什么？',
        options: ['4294967300', '4（溢出回绕）', '编译错误'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'check',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 31,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      vars: { buffer: 'This is a ver', input: 'This is a very long string...', size: 4294967200 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Copied: Hello' }],
      explanation: {
        icon: 'terminal',
        text: 'vulnerableCopy("Hello") — 短字符串安全',
        color: 'green',
        actor: 'CPU',
        detail: '输入"Hello"只有 5 字节，没有溢出。但函数本身是不安全的，只是碰巧输入安全。安全不能依赖运气。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 32,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      vars: { buffer: 'This is a ver', input: 'This is a very long string...', size: 4294967200 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Copied: Hello' }, { type: 'success', text: 'Copied safely: This is a ver' }],
      explanation: {
        icon: 'terminal',
        text: 'safeCopy(长字符串) — 安全截断',
        color: 'green',
        actor: 'CPU',
        detail: '长字符串被安全截断为 15 字节，加\\0 共 16 字节，正好填满 buffer。没有溢出！'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 33,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      vars: { buffer: 'This is a ver', input: 'This is a very long string...', size: 4294967200 },
      highlightVar: 'size',
      isDanger: true,
      output: [{ type: 'success', text: 'Copied: Hello' }, { type: 'success', text: 'Copied safely: This is a ver' }, { type: 'warning', text: 'Allocated 4 bytes (overflow!)' }],
      explanation: {
        icon: 'alert',
        text: 'integerOverflow(4294967200) — 整数溢出触发',
        color: 'red',
        actor: 'CPU',
        detail: 'size+100 溢出为 4，小于 1000，条件成立。malloc(4) 只分配 4 字节，但代码认为分配了足够的空间。这是典型的整数溢出导致的安全漏洞。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'heap',
      timing: 'runtime'
    },
    {
      step: 12,
      line: 35,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      vars: { buffer: 'This is a ver', input: 'This is a very long string...', size: 4294967200 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Copied: Hello' }, { type: 'success', text: 'Copied safely: This is a ver' }, { type: 'warning', text: 'Allocated 4 bytes (overflow!)' }],
      explanation: {
        icon: 'check',
        text: '安全编程要点：边界检查、使用安全函数、警惕整数溢出',
        color: 'green',
        actor: 'Security',
        detail: '安全编程要点：1) 永远用 strncpy 代替 strcpy 2) 检查所有输入边界 3) 警惕整数溢出（先检查再加）4) 使用安全函数（snprintf 代替 sprintf）。安全是设计出来的，不是测试出来的。'
      },
      prediction: null,
      misconception: null,
      actor: 'Security',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '安全编程：边界检查、用安全函数（strncpy/snprintf）、警惕整数溢出、防御性编程',
    pitfalls: [
      'strcpy/sprintf 等函数不检查边界，必须用 strncpy/snprintf 替代',
      '整数溢出可绕过边界检查：先检查 (size > MAX - 100) 再计算 (size + 100)',
      '栈缓冲区溢出可被利用执行恶意代码，是最危险的安全漏洞之一'
    ],
    transferQuestion: '如何正确检查整数溢出？（提示：用减法代替加法，如 if (size > MAX - 100) 返回错误）',
    miniExercise: {
      bugCode: 'char buf[100];\nscanf("%s", buf);  // 这样有什么危险？',
      hint: '用户输入可能超过 99 字节，应该用 scanf("%99s", buf) 限制长度'
    }
  }
};
