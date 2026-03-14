window.LESSON_DATA = {
  meta: {
    id: 'interview-1',
    title: '手写代码题',
    chapter: 'Interview',
    index: 1,
    filename: 'string_and_memory.c',
    keyPoints: ['字符串反转', '内存拷贝', '链表操作']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<string.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'reverseString' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }] },
    { num: 5, tokens: [{ type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'str' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'left' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'right' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'strlen' }, { type: 'punc', text: '(' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'left' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'right' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'tmp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'left' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'op', text: '*' }, { type: 'id', text: 'left' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'right' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '        ' }, { type: 'op', text: '*' }, { type: 'id', text: 'right' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'tmp' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'left' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'right' }, { type: 'op', text: '--' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }] },
    { num: 18, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 19, tokens: [{ type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'memMove' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'dest' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'src' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'size_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }] },
    { num: 20, tokens: [{ type: 'punc', text: '{' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'dest' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 's' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'const' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'char' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'src' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '>=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 's' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'n' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'op', text: '--' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: '--' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: '--' }, { type: 'id', text: 's' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'else' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 28, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'n' }, { type: 'op', text: '--' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'd' }, { type: 'op', text: '++' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 's' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'dest' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'punc', text: '}' }] },
    { num: 32, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 33, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }] },
    { num: 34, tokens: [{ type: 'punc', text: '{' }] },
    { num: 35, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'punc', text: '[' }, { type: 'punc', text: ']' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"hello"' }, { type: 'punc', text: ';' }] },
    { num: 36, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'reverseString' }, { type: 'punc', text: '(' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 37, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Reversed: %s\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'str' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 38, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 39, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'str', name: 'str', type: 'char[]', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'left', name: 'left', type: 'char*', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'right', name: 'right', type: 'char*', addr: '0x7fff18', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习面试手写代码题', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 4,
      executedLines: [1, 2, 3],
      vars: {},
      highlightVar: 'str',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'code',
        text: 'reverseString — 字符串反转（双指针法）',
        color: 'yellow',
        actor: 'Interviewer',
        detail: '面试高频题：使用双指针，left 从左向右，right 从右向左，交换字符直到相遇。时间复杂度 O(n)，空间复杂度 O(1)。'
      },
      prediction: {
        question: '字符串反转的时间复杂度是多少？',
        options: ['O(n)', 'O(n²)', 'O(log n)'],
        answer: 0
      },
      misconception: null,
      actor: 'Interviewer',
      target: 'func:reverseString',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: { str: 'hello' },
      highlightVar: 'str',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: 'NULL 检查 — 防御性编程',
        color: 'green',
        actor: 'Developer',
        detail: '首先检查 str 是否为 NULL，这是防御性编程的好习惯。面试时要主动说明边界条件处理。'
      },
      prediction: null,
      misconception: {
        title: '边界条件检查',
        text: '面试手写代码时必须考虑：1) 空指针 2) 空字符串 3) 单字符 4) 内存重叠。主动说明边界条件会加分。'
      },
      actor: 'Developer',
      target: 'check',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { str: 'hello' },
      highlightVar: 'left',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'char* left = str — 左指针指向首字符',
        color: 'purple',
        actor: 'CPU',
        detail: 'left 指针初始化为指向字符串第一个字符 \'h\'。双指针法的核心：两个指针从两端向中间移动。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:left',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 8,
      executedLines: [1, 2, 3, 4, 5, 6, 7],
      vars: { str: 'hello', left: 'h' },
      highlightVar: 'right',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'pointer',
        text: 'char* right = str + strlen(str) - 1 — 右指针指向末字符',
        color: 'blue',
        actor: 'CPU',
        detail: 'right 指针指向字符串最后一个字符 \'o\'（索引 4）。strlen("hello")=5，5-1=4，指向 str[4]。'
      },
      prediction: {
        question: '为什么是 strlen(str)-1 而不是 strlen(str)？',
        options: ['字符串索引从 0 开始', '\\0 结束符不需要交换', '两者都可以'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'var:right',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8],
      vars: { str: 'hello', left: 'h', right: 'o' },
      highlightVar: 'left',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'while(left < right) — 双指针向中间移动',
        color: 'yellow',
        actor: 'CPU',
        detail: '当 left < right 时继续循环。每次迭代交换*left 和*right，然后 left++，right--。当 left >= right 时停止。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: { str: 'hello', left: 'h', right: 'o' },
      highlightVar: 'str',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'swap',
        text: '交换*left 和*right — 第一轮：\'h\' <-> \'o\'',
        color: 'green',
        actor: 'CPU',
        detail: '使用临时变量 tmp 保存*left，然后*left=*right，*right=tmp。第一轮后字符串变为"oellh"。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:str',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { str: 'olleh', left: 'l', right: 'l' },
      highlightVar: 'str',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: '字符串反转完成 — "hello" → "olleh"',
        color: 'green',
        actor: 'CPU',
        detail: '循环结束，left 和 right 相遇于中间位置（都是\'l\'）。字符串已完全反转。返回原指针 str。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:str',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 19,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { str: 'olleh' },
      highlightVar: 'left',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'code',
        text: 'memMove — 安全的内存移动（处理重叠）',
        color: 'purple',
        actor: 'Interviewer',
        detail: '面试进阶题：memcpy 不处理内存重叠，memMove 可以。判断 dest 和 src 是否有重叠，如果有则从后向前复制。'
      },
      prediction: {
        question: 'memcpy 和 memmove 的主要区别是什么？',
        options: ['memmove 更快', 'memmove 处理内存重叠', '没有区别'],
        answer: 1
      },
      misconception: null,
      actor: 'Interviewer',
      target: 'func:memMove',
      timing: 'design-time'
    },
    {
      step: 9,
      line: 23,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      vars: { str: 'olleh' },
      highlightVar: 'left',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'alert',
        text: '检测内存重叠：dest >= src && dest < src + n',
        color: 'yellow',
        actor: 'CPU',
        detail: '如果目标区域起始地址在源区域内部（dest >= src 且 dest < src+n），则存在重叠。此时必须从后向前复制，避免覆盖未复制的数据。'
      },
      prediction: null,
      misconception: {
        title: '内存重叠场景',
        text: '重叠场景：memmove(str+2, str, 3)，将 str 前 3 字节移到 str+2。如果从前往后复制，会覆盖还未复制的数据。必须从后往前复制。'
      },
      actor: 'CPU',
      target: 'check',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 35,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      vars: { str: 'olleh' },
      highlightVar: 'str',
      isDanger: false,
      output: [{ type: 'success', text: 'Reversed: olleh' }],
      explanation: {
        icon: 'terminal',
        text: '输出反转结果 — "olleh"',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出反转后的字符串。面试时要在白板上写出完整可运行的代码，包括 main 函数和测试。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 39,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
      vars: { str: 'olleh' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Reversed: olleh' }],
      explanation: {
        icon: 'check',
        text: '面试手写代码要点：边界检查 + 双指针 + 内存重叠处理',
        color: 'green',
        actor: 'Interviewer',
        detail: '面试要点：1) NULL 检查 2) 双指针技巧 3) 内存重叠处理 4) 时间复杂度分析 5) 测试用例。主动说明思路和优化方案。'
      },
      prediction: null,
      misconception: null,
      actor: 'Interviewer',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '手写代码：边界检查 + 双指针技巧（字符串反转）+ 内存重叠处理（memmove）',
    pitfalls: [
      '字符串操作前必须检查 NULL 指针，这是基本的防御性编程意识',
      'memmove 与 memcpy 的区别：memmove 处理内存重叠，从后向前复制',
      '双指针法要注意终止条件：left < right，不是 left <= right（会多交换一次）'
    ],
    transferQuestion: '如何用递归实现字符串反转？（提示：swap 首尾字符，递归处理中间部分）',
    miniExercise: {
      bugCode: 'char* reverseString(char* str) {\n    char *left = str, *right = str + strlen(str);\n    while (left < right) {\n        char tmp = *left; *left = *right; *right = tmp;\n        left++; right--;\n    }\n    return str;\n}',
      hint: 'right 初始化为 strlen(str) 而不是 strlen(str)-1，指向了\\0 而不是最后一个字符'
    }
  }
};
