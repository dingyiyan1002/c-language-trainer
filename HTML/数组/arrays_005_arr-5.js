window.LESSON_DATA = {
  meta: {
    chapterId: 'arrays',
    lessonId: 'arr-5',
    title: '字符数组与字符串',
    index: 5,
    filename: 'arrays_005_arr-5.js',
    keyPoints: ['字符串字面量存储', '\\0 终止符重要性', '字符数组初始化', '字符串拷贝错误']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 字符数组与字符串：\\0 终止符的重要性' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str1' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"hello"' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 实际存储 6 字节' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: "// str1 = {'h','e','l','l','o','\\\\0'}" }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str2' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'str', text: "'h'" },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'e'" },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'l'" },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'l'" },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'o'" },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 危险！没有\\\\0' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// str2 只有 5 字节，不是合法 C 字符串' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"str1 = %s\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 正确输出：hello' }
    ]},
    { num: 10, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"str2 = %s\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str2' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 11, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 未定义行为！可能输出乱码或崩溃' }
    ]},
    { num: 12, tokens: [] },
    { num: 13, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'len1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'fn', text: 'strlen' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// len1 = 5' }
    ]},
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'size1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// size1 = 6' }
    ]},
    { num: 15, tokens: [] },
    { num: 16, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'str1', name: 'str1', type: 'char[6]', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '"hello\\0"' },
    { key: 'str2', name: 'str2', type: 'char[5]', addr: '0x7ffc10', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '"hello"' },
    { key: 'str1_bytes', name: 'str1 字节', type: 'char[6]', addr: '0x7ffc00', glowColor: 'rgba(59,130,246,0.35)', appearStep: 7, value: '[h][e][l][l][o][\\0]' },
    { key: 'len1', name: 'len1', type: 'int', addr: '0x7ffc20', glowColor: 'rgba(249,115,22,0.35)', appearStep: 10, value: '5' },
    { key: 'size1', name: 'size1', type: 'int', addr: '0x7ffc24', glowColor: 'rgba(250,204,21,0.35)', appearStep: 11, value: '6' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示字符串与字符数组的区别'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { str1: '"hello\\0"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：\\0 终止符的重要性',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示字符串终止符'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { str1: '"hello\\0"' },
      highlightVar: 'str1',
      explanation: {
        icon: 'memory',
        text: 'char str1[] = "hello"，编译器分配 6 字节',
        color: 'green',
        actor: 'CPU',
        detail: '字符串字面量 "hello" 包含隐式\\0，编译器自动计算长度为 6，在栈上分配地址 0x7ffc00-0x7ffc05'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { str1: '"hello\\0"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：str1 = {h,e,l,l,o,\\0}',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明实际存储内容'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      highlightVar: 'str2',
      explanation: {
        icon: 'alert',
        text: 'char str2[5] = {h,e,l,l,o}，没有\\0 终止符',
        color: 'red',
        actor: 'CPU',
        detail: '显式初始化 5 个字符，正好填满 5 字节数组，没有空间存储\\0，这不是合法 C 字符串'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：str2 只有 5 字节，不是合法 C 字符串',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，警告 str2 缺少终止符'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：正确输出：hello',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示 str1 可以安全打印'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { str1: '"hello\\0"', str2: '"hello"', str1_bytes: '[h][e][l][l][o][\\0]' },
      highlightVar: 'str1_bytes',
      explanation: {
        icon: 'terminal',
        text: 'printf("%s", str1) 正确输出 hello',
        color: 'green',
        actor: 'CPU',
        detail: '%s 从 0x7ffc00 开始逐字节输出，遇到\\0 停止，正确输出 "hello"'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { str1: '"hello\\0"', str2: '"hello"', str1_bytes: '[h][e][l][l][o][\\0]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：正确输出 hello',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，确认输出正确'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：未定义行为！可能输出乱码或崩溃',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，警告 str2 打印危险'
      }
    },
    {
      step: 10,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      highlightVar: 'str2',
      isDanger: true,
      explanation: {
        icon: 'skull',
        text: 'printf("%s", str2) 未定义行为！',
        color: 'red',
        actor: 'CPU',
        detail: '%s 从 0x7ffc10 开始输出 "hello" 后找不到\\0，继续读取栈上垃圾数据直到偶然遇到 0 值，可能输出乱码或越界访问'
      }
    },
    {
      step: 11,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10],
      vars: { str1: '"hello\\0"', str2: '"hello"' },
      explanation: {
        icon: 'info',
        text: '阅读注释：未定义行为',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，强调危险'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 11],
      vars: { str1: '"hello\\0"', str2: '"hello"', len1: 5 },
      highlightVar: 'len1',
      explanation: {
        icon: 'memory',
        text: 'strlen(str1) = 5，不计\\0',
        color: 'yellow',
        actor: 'CPU',
        detail: 'strlen 从起始地址遍历直到\\0，计数 5 个字符，不包括终止符本身'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 11, 13],
      vars: { str1: '"hello\\0"', str2: '"hello"', len1: 5, size1: 6 },
      highlightVar: 'size1',
      explanation: {
        icon: 'memory',
        text: 'sizeof(str1) = 6，包含\\0',
        color: 'purple',
        actor: 'CPU',
        detail: 'sizeof 返回数组总字节数：5 个字符 + 1 个\\0 = 6 字节'
      }
    },
    {
      step: 14,
      line: 16,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 14],
      vars: { str1: '"hello\\0"', str2: '"hello"', len1: 5, size1: 6 },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键结论：C 字符串必须以\\0 结尾，否则所有字符串函数都会越界'
      }
    }
  ],

  summary: {
    oneLiner: '掌握字符串\\0 终止符的重要性及 strlen/sizeof 区别',
    pitfalls: [
      '字符串字面量 "hello" 实际存储 6 字节：h,e,l,l,o,\\0',
      '字符数组初始化若无\\0 终止符，不是合法 C 字符串',
      'strlen 返回字符个数 (不含\\0)，sizeof 返回总字节数 (含\\0)',
      'printf("%s") 遇到没有\\0 的数组会产生未定义行为'
    ],
    transferQuestion: '为什么 strcpy(dest, src) 要求 dest 的空间至少是 strlen(src)+1？',
    miniExercise: {
      bugCode: 'char buf[5] = "hello"; printf("%s", buf); // 危险！',
      hint: '"hello" 需要 6 字节 (含\\0)，buf 只有 5 字节，\\0 被截断导致没有终止符'
    }
  }
};
