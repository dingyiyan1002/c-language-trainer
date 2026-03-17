window.LESSON_DATA = {
  meta: {
    chapterId: 'pointers',
    lessonId: 'ptr-5',
    title: '指针类型转换错误',
    index: 5,
    filename: 'pointers_005_ptr-5.js',
    keyPoints: ['指针类型不匹配', '隐式类型转换危险', '字节序问题', '强制类型转换规则']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 指针类型转换错误：int* 与 char* 混用' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'num' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0x12345678' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// num = 305419896 (十进制)，占用 4 字节' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pInt' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'num' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// int* 指向 num' }
    ]},
    { num: 6, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pChar' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'char' },
      { type: 'op', text: '*' },
      { type: 'punc', text: ')' },
      { type: 'id', text: 'pInt' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 强制转换为 char*' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"*pInt = 0x%x\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pInt' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 0x12345678，正确读取 int' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"*pChar = 0x%x\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pChar' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 12, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 危险！只读取第 1 字节 (小端序：0x78)' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'id', text: 'pChar' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '                          ' },
      { type: 'cmt', text: '// pChar 移动 1 字节' }
    ]},
    { num: 15, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"pChar++ 后：*pChar = 0x%x\\\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'pChar' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 输出 0x56 (小端序：第 2 字节)' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7ffc10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '0x12345678' },
    { key: 'pInt', name: 'pInt', type: 'int*', addr: '0x7ffc18', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4 },
    { key: 'pChar', name: 'pChar', type: 'char*', addr: '0x7ffc1c', glowColor: 'rgba(59,130,246,0.35)', appearStep: 5 },
    { key: 'num_bytes', name: 'num[4 字节]', type: 'byte[4]', addr: '0x7ffc10', glowColor: 'rgba(249,115,22,0.35)', appearStep: 7, value: '[0x78][0x56][0x34][0x12]' }
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
        detail: '程序即将开始运行，演示指针类型转换错误'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { num: '0x12345678' },
      explanation: {
        icon: 'info',
        text: '阅读注释：指针类型转换错误 - int* 与 char* 混用',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示类型转换危险'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { num: '0x12345678' },
      highlightVar: 'num',
      explanation: {
        icon: 'memory',
        text: '声明 int 变量 num 并初始化为 0x12345678',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 32 位立即数 0x12345678 写入栈地址 0x7ffc10，小端序存储为 78 56 34 12'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { num: '0x12345678' },
      explanation: {
        icon: 'info',
        text: '阅读注释：num = 305419896 (十进制)，占用 4 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，说明数值的十进制表示和内存占用'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { num: '0x12345678', pInt: '0x7ffc10' },
      highlightVar: 'pInt',
      explanation: {
        icon: 'pointer',
        text: 'int* pInt = &num，pInt 指向 num 的地址',
        color: 'purple',
        actor: 'CPU',
        detail: 'LEA 指令加载 num 的地址 0x7ffc10 到 pInt 变量，pInt 现在指向 4 字节整数的起始位置'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10' },
      highlightVar: 'pChar',
      explanation: {
        icon: 'alert',
        text: 'char* pChar = (char*)pInt，强制类型转换',
        color: 'orange',
        actor: 'CPU',
        detail: '地址值直接复制到 pChar，但类型变为 char*，解引用时只会读取 1 字节而非 4 字节'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 3, 5, 6],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：输出 0x12345678，正确读取 int',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将用 int* 正确读取'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10', num_bytes: '[0x78][0x56][0x34][0x12]' },
      highlightVar: 'num_bytes',
      explanation: {
        icon: 'memory',
        text: '*pInt 读取 4 字节，得到 0x12345678',
        color: 'yellow',
        actor: 'CPU',
        detail: 'MOV 指令从 0x7ffc10 读取 4 字节，小端序重组：字节 [0x78,0x56,0x34,0x12] → 32 位值 0x12345678'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10', num_bytes: '[0x78][0x56][0x34][0x12]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：危险！只读取第 1 字节 (小端序：0x78)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，警告即将发生的字节级访问差异'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10', num_bytes: '[0x78][0x56][0x34][0x12]' },
      highlightVar: 'pChar',
      explanation: {
        icon: 'alert',
        text: '*pChar 只读取 1 字节：0x78 (小端序最低位)',
        color: 'red',
        actor: 'CPU',
        detail: 'MOVZX 指令从 0x7ffc10 读取单字节 0x78，零扩展为 32 位输出。int* 读取 4 字节，char* 读取 1 字节，结果完全不同！'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10', num_bytes: '[0x78][0x56][0x34][0x12]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：小端序内存布局详解',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释 x86 小端序：低地址存低位字节'
      }
    },
    {
      step: 11,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc10', num_bytes: '[0x78][0x56][0x34][0x12]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：pChar 移动 1 字节',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示步长差异'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc11', num_bytes: '[0x78][0x56][0x34][0x12]' },
      highlightVar: 'pChar',
      explanation: {
        icon: 'pointer',
        text: 'pChar++ 移动 sizeof(char) = 1 字节',
        color: 'green',
        actor: 'CPU',
        detail: 'INC 指令将 pChar 从 0x7ffc10 增加到 0x7ffc11，char* 步长为 1。若 pInt++ 则移动 4 字节'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc11', num_bytes: '[0x78][0x56][0x34][0x12]' },
      explanation: {
        icon: 'info',
        text: '阅读注释：输出 0x56 (小端序：第 2 字节)',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将读取第 2 字节'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc11', num_bytes: '[0x78][0x56][0x34][0x12]' },
      highlightVar: 'pChar',
      explanation: {
        icon: 'memory',
        text: '*pChar 读取地址 0x7ffc11 的字节：0x56',
        color: 'purple',
        actor: 'CPU',
        detail: '从 0x7ffc11 读取单字节 0x56，这是 num 的第 2 个字节。指针类型决定步长和解引用宽度'
      }
    },
    {
      step: 15,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
      vars: { num: '0x12345678', pInt: '0x7ffc10', pChar: '0x7ffc11' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。指针类型转换本身合法，但解引用行为由类型决定，混用会导致数据解释错误'
      }
    }
  ],

  summary: {
    oneLiner: '掌握指针类型对步长和解引用宽度的决定作用',
    pitfalls: [
      'int* 解引用读取 4 字节，char* 只读取 1 字节',
      'p++ 的步长由指针类型决定：int* 移动 4 字节，char* 移动 1 字节',
      '小端序系统：低地址存低位字节 (0x78 在 0x7ffc10，0x12 在 0x7ffc13)',
      '强制类型转换 (char*)pInt 不改变地址值，只改变解引用解释方式'
    ],
    transferQuestion: '如果 pInt 是 short* 类型 (2 字节)，*pInt 在小端序下会读取到什么值 (假设 num = 0x12345678)？',
    miniExercise: {
      bugCode: 'int num = 0x12345678; char *p = (char*)&num; int val = *p; // val 是多少？',
      hint: 'char* 解引用只读取第 1 字节 0x78，扩展到 int 时零扩展为 0x00000078'
    }
  }
};
