window.LESSON_DATA = {
  meta: {
    chapterId: 'variables',
    lessonId: 'var-3',
    title: '数据类型转换',
    index: 3,
    filename: 'variables_003_var-3.js',
    keyPoints: ['隐式类型转换', '显式强制类型转换', '整数除法 vs 浮点除法', '类型转换的精度丢失']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 数据类型转换：隐式转换与强制转换' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 3, tokens: [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 隐式转换：int→double' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3.9' },
      { type: 'punc', text: ';' }
    ]},
    { num: 6, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 强制转换：截断小数' }
    ]},
    { num: 7, tokens: [] },
    { num: 8, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'm' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 整数除法' }
    ]},
    { num: 9, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' }
    ]},
    { num: 10, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'm' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '/' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// result1 = 2 (不是 2.5)' }
    ]},
    { num: 11, tokens: [] },
    { num: 12, tokens: [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'double' },
      { type: 'punc', text: ')' },
      { type: 'id', text: 'm' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '/' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// result2 = 2.5' }
    ]},
    { num: 13, tokens: [] },
    { num: 14, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'big' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1000000000' },
      { type: 'punc', text: ';' }
    ]},
    { num: 15, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'overflow' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'big' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 整数溢出！' }
    ]},
    { num: 16, tokens: [
      { type: 'ws', text: '    ' },
      { type: 'cmt', text: '// 10 亿×3 超出 int 范围，结果错误' }
    ]},
    { num: 17, tokens: [] },
    { num: 18, tokens: [
      { type: 'kw', text: 'long' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'safe' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'long' },
      { type: 'punc', text: ')' },
      { type: 'id', text: 'big' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 安全：long 范围更大' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '10' },
    { key: 'b', name: 'b', type: 'double', addr: '0x7ffd08', glowColor: 'rgba(59,130,246,0.35)', appearStep: 2, value: '10.0' },
    { key: 'x', name: 'x', type: 'double', addr: '0x7ffd10', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '3.9' },
    { key: 'y', name: 'y', type: 'int', addr: '0x7ffd18', glowColor: 'rgba(249,115,22,0.35)', appearStep: 5, value: '3' },
    { key: 'm', name: 'm', type: 'int', addr: '0x7ffd20', glowColor: 'rgba(34,197,94,0.35)', appearStep: 7, value: '5' },
    { key: 'n', name: 'n', type: 'int', addr: '0x7ffd24', glowColor: 'rgba(59,130,246,0.35)', appearStep: 8, value: '2' },
    { key: 'result1', name: 'result1', type: 'int', addr: '0x7ffd28', glowColor: 'rgba(239,68,68,0.35)', appearStep: 9, value: '2' },
    { key: 'result2', name: 'result2', type: 'double', addr: '0x7ffd30', glowColor: 'rgba(250,204,21,0.35)', appearStep: 11, value: '2.5' },
    { key: 'big', name: 'big', type: 'int', addr: '0x7ffd38', glowColor: 'rgba(168,85,247,0.35)', appearStep: 13, value: '1000000000' },
    { key: 'overflow', name: 'overflow', type: 'int', addr: '0x7ffd3c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 14, value: '-1294967296(错误)' },
    { key: 'safe', name: 'safe', type: 'long', addr: '0x7ffd40', glowColor: 'rgba(34,197,94,0.35)', appearStep: 17, value: '3000000000' }
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
        detail: '程序即将开始运行，演示数据类型转换规则'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { a: '10' },
      explanation: {
        icon: 'info',
        text: '阅读注释：数据类型转换 - 隐式转换与强制转换',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示类型转换的两种形式'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { a: '10' },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: '声明 int a = 10',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将立即数 10 写入 a 的内存地址 0x7ffd00,占用 4 字节'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { a: '10', b: '10.0' },
      highlightVar: 'b',
      explanation: {
        icon: 'pointer',
        text: 'double b = a,隐式转换 int→double',
        color: 'purple',
        actor: 'CPU',
        detail: 'CVTSI2SD 指令将整数 10 转换为浮点数 10.0,写入 b 的 8 字节内存。隐式转换自动发生，无精度损失'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3],
      vars: { a: '10', b: '10.0', x: '3.9' },
      highlightVar: 'x',
      explanation: {
        icon: 'memory',
        text: '声明 double x = 3.9',
        color: 'orange',
        actor: 'CPU',
        detail: 'MOVSD 指令将 64 位浮点数 3.9 写入 x 的内存地址 0x7ffd10,占用 8 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3' },
      highlightVar: 'y',
      explanation: {
        icon: 'calculator',
        text: 'int y = (int)x,强制转换截断小数',
        color: 'red',
        actor: 'CPU',
        detail: 'CVTTSD2SI 指令将 3.9 转换为整数 3,直接截断小数部分 0.9,不是四舍五入！'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 3, 5, 6],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3' },
      explanation: {
        icon: 'alert',
        text: '关键：强制转换截断而非四舍五入',
        color: 'red',
        actor: 'CPU',
        detail: '3.9 → 3,不是 4！(int)3.9 直接丢弃小数部分。如果需要四舍五入，用 round() 函数'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 8],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5' },
      highlightVar: 'm',
      explanation: {
        icon: 'memory',
        text: '声明 int m = 5',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 5 写入 m 的内存地址 0x7ffd20'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 6, 8, 9],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2' },
      highlightVar: 'n',
      explanation: {
        icon: 'memory',
        text: '声明 int n = 2',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOV 指令将 2 写入 n 的内存地址 0x7ffd24'
      }
    },
    {
      step: 9,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2' },
      highlightVar: 'result1',
      explanation: {
        icon: 'calculator',
        text: 'int result1 = m / n = 5 / 2 = 2',
        color: 'orange',
        actor: 'CPU',
        detail: '整数除法：5/2=2,余数 1 被丢弃！两个整数相除，结果仍为整数，小数部分被截断'
      }
    },
    {
      step: 10,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2' },
      explanation: {
        icon: 'alert',
        text: '陷阱：整数除法丢失精度',
        color: 'red',
        actor: 'CPU',
        detail: '5÷2=2.5,但整数除法只返回 2。这是 C 语言常见陷阱：两个 int 相除，结果为 int'
      }
    },
    {
      step: 11,
      line: 12,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5' },
      highlightVar: 'result2',
      explanation: {
        icon: 'calculator',
        text: 'double result2 = (double)m / n = 2.5',
        color: 'yellow',
        actor: 'CPU',
        detail: '关键技巧：先将 m 强制转换为 double，触发隐式转换 n→double，执行浮点除法 5.0/2.0=2.5'
      }
    },
    {
      step: 12,
      line: 13,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5' },
      explanation: {
        icon: 'check',
        text: '类型转换技巧：至少一个操作数为浮点',
        color: 'green',
        actor: 'CPU',
        detail: '要得到精确结果，将任一操作数转换为 double：(double)m/n 或 m/(double)n 或 (double)m/(double)n'
      }
    },
    {
      step: 13,
      line: 14,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12, 14],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5', big: '1000000000' },
      highlightVar: 'big',
      explanation: {
        icon: 'memory',
        text: '声明 int big = 1000000000 (10 亿)',
        color: 'purple',
        actor: 'CPU',
        detail: 'MOV 指令将 10 亿写入 big 的内存。int 范围：-2147483648 到 2147483647(约 21 亿)'
      }
    },
    {
      step: 14,
      line: 15,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12, 14, 15],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5', big: '1000000000', overflow: '-1294967296(错误)' },
      highlightVar: 'overflow',
      explanation: {
        icon: 'alert',
        text: '整数溢出！10 亿×3 超出 int 范围',
        color: 'red',
        actor: 'CPU',
        detail: '1000000000×3=3000000000,超出 int 最大值 2147483647。结果溢出变为负数 -1294967296，严重错误！'
      }
    },
    {
      step: 15,
      line: 16,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12, 14, 15],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5', big: '1000000000', overflow: '-1294967296(错误)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：10 亿×3 超出 int 范围，结果错误',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，解释溢出原因。int 为 32 位有符号，最大值约 21 亿'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12, 14, 15, 18],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5', big: '1000000000', overflow: '-1294967296(错误)', safe: '3000000000' },
      highlightVar: 'safe',
      explanation: {
        icon: 'check',
        text: 'long safe = (long)big * 3 = 30 亿，安全',
        color: 'green',
        actor: 'CPU',
        detail: '先将 big 转换为 long(64 位),范围 -9223372036854775808 到 9223372036854775807(约 922 京),30 亿完全在范围内'
      }
    },
    {
      step: 17,
      line: 20,
      executedLines: [1, 2, 3, 5, 6, 8, 9, 10, 12, 14, 15, 18, 20],
      vars: { a: '10', b: '10.0', x: '3.9', y: '3', m: '5', n: '2', result1: '2', result2: '2.5', big: '1000000000', overflow: '-1294967296(错误)', safe: '3000000000' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。关键教训：1)强制转换截断而非四舍五入 2)整数除法丢弃余数 3)大数运算用 long 防止溢出'
      }
    }
  ],

  summary: {
    oneLiner: '掌握隐式转换、强制转换、整数除法和溢出预防',
    pitfalls: [
      '(int)3.9 = 3，强制转换截断小数而非四舍五入',
      '5/2 = 2（整数除法），不是 2.5！需要 (double)5/2',
      '大数相乘可能溢出:int 最大约 21 亿，用 long 处理更大数值',
      '隐式转换从低精度到高精度安全，反之可能丢失数据'
    ],
    transferQuestion: '如何计算两个整数的精确商（保留小数）？',
    miniExercise: {
      bugCode: 'int avg = sum / count; // 如果 sum=10,count=3，avg=3 不是 3.33',
      hint: '修复：double avg = (double)sum / count; 先将分子转换为 double'
    }
  },

  predictions: [
    {
      question: '(int)3.9 的结果是多少？',
      options: [
        { text: '4（四舍五入）', feedback: '错误！强制转换不是四舍五入，是截断。' },
        { text: '3（截断小数）', feedback: '正确！(int)3.9 直接丢弃 0.9 小数部分，得到 3。' },
        { text: '3.9', feedback: '错误！结果类型是 int，不是 double。' },
        { text: '编译错误', feedback: '错误！强制转换是合法语法。' }
      ],
      correctIndex: 1
    },
    {
      question: '如何避免 5/2 的整数除法问题？',
      options: [
        { text: '5.0/2.0', feedback: '正确！两个浮点数相除，执行浮点除法得到 2.5。' },
        { text: '(double)5/2', feedback: '也正确！5 转换为 double 后触发隐式转换 2→2.0。' },
        { text: '5/(double)2', feedback: '也正确！2 转换为 double 后触发隐式转换 5→5.0。' },
        { text: '以上都对', feedback: '正确！三种方法都能得到 2.5。' }
      ],
      correctIndex: 3
    }
  ],

  misconceptions: [
    {
      myth: '(int)3.9 会四舍五入为 4',
      truth: '强制类型转换直接截断小数部分，3.9→3，-3.9→-3。需要四舍五入请用 round() 函数。'
    },
    {
      myth: '5/2 等于 2.5',
      truth: '两个整数相除，结果为整数：5/2=2。余数 1 被丢弃。要得到 2.5，需将至少一个操作数转换为 double。'
    },
    {
      myth: 'int 可以存储任意大小的整数',
      truth: 'int 是 32 位有符号类型，范围 -2147483648 到 2147483647。超出范围会溢出，结果错误。大数用 long 或 long long。'
    }
  ]
};
