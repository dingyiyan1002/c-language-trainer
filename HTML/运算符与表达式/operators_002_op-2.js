window.LESSON_DATA = {
  meta: {
    chapter: 'operators',
    lessonId: 'op-2',
    title: '自增自减与逻辑运算',
    description: '掌握++ --自增自减运算符和&& || ! 逻辑运算符'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// a = 5' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// b = 5, 然后 a = 6' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '++' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// a = 7, 然后 c = 7' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// x = 1 (真)' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// y = 0 (假)' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'res1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&&' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// res1 = 0 (1 && 0 = 0)' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'res2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '||' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'y' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// res2 = 1 (1 || 0 = 1)' }
    ]
  ],

  varConfig: [
    { name: 'a', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'b', color: '#22c55e', appearStep: 2, type: 'int' },
    { name: 'c', color: '#f59e0b', appearStep: 3, type: 'int' },
    { name: 'x', color: '#ef4444', appearStep: 4, type: 'int' },
    { name: 'y', color: '#8b5cf6', appearStep: 5, type: 'int' },
    { name: 'res1', color: '#06b6d4', appearStep: 6, type: 'int' },
    { name: 'res2', color: '#ec4899', appearStep: 7, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示自增自减和逻辑运算符',
        detail: 'a++ 先用后加，++a 先加后用。&& 逻辑与（两边都真才真），|| 逻辑或（一边真就真），! 逻辑非。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { a: { value: 5, type: 'int', address: '0x7ffd4000' } },
      explanation: {
        text: '第 1 行：声明变量 a 并赋值为 5',
        detail: '变量 a 初始化为 5。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: {
        a: { value: 6, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' }
      },
      explanation: {
        text: '第 2 行：b = a++，先用后加',
        detail: 'a++ 是后缀自增：先将 a 的当前值 (5) 赋给 b，然后 a 自增为 6。所以 b=5, a=6。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 2,
      executedLines: [0, 1, 2],
      vars: {
        a: { value: 7, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' },
        c: { value: 7, type: 'int', address: '0x7ffd4008' }
      },
      explanation: {
        text: '第 3 行：c = ++a，先加后用',
        detail: '++a 是前缀自增：先将 a 自增为 7，然后将新值 (7) 赋给 c。所以 a=7, c=7。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'purple'
      }
    },
    {
      step: 4,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: {
        a: { value: 7, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' },
        c: { value: 7, type: 'int', address: '0x7ffd4008' },
        x: { value: 1, type: 'int', address: '0x7ffd400c' }
      },
      explanation: {
        text: '第 4 行：声明变量 x 并赋值为 1（真）',
        detail: '在 C 语言中，非零值表示真，零表示假。x=1 表示真。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 4,
      executedLines: [0, 1, 2, 3, 4],
      vars: {
        a: { value: 7, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' },
        c: { value: 7, type: 'int', address: '0x7ffd4008' },
        x: { value: 1, type: 'int', address: '0x7ffd400c' },
        y: { value: 0, type: 'int', address: '0x7ffd4010' }
      },
      explanation: {
        text: '第 5 行：声明变量 y 并赋值为 0（假）',
        detail: 'y=0 表示假。C 语言中，零值表示假。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 5,
      executedLines: [0, 1, 2, 3, 4, 5],
      vars: {
        a: { value: 7, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' },
        c: { value: 7, type: 'int', address: '0x7ffd4008' },
        x: { value: 1, type: 'int', address: '0x7ffd400c' },
        y: { value: 0, type: 'int', address: '0x7ffd4010' },
        res1: { value: 0, type: 'int', address: '0x7ffd4014' }
      },
      explanation: {
        text: '第 6 行：计算 x && y（逻辑与）',
        detail: '&& 逻辑与：两边都为真才返回真。x=1(真), y=0(假)，所以 1 && 0 = 0(假)。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'orange'
      }
    },
    {
      step: 7,
      line: 6,
      executedLines: [0, 1, 2, 3, 4, 5, 6],
      vars: {
        a: { value: 7, type: 'int', address: '0x7ffd4000' },
        b: { value: 5, type: 'int', address: '0x7ffd4004' },
        c: { value: 7, type: 'int', address: '0x7ffd4008' },
        x: { value: 1, type: 'int', address: '0x7ffd400c' },
        y: { value: 0, type: 'int', address: '0x7ffd4010' },
        res1: { value: 0, type: 'int', address: '0x7ffd4014' },
        res2: { value: 1, type: 'int', address: '0x7ffd4018' }
      },
      explanation: {
        text: '第 7 行：计算 x || y（逻辑或）',
        detail: '|| 逻辑或：只要一边为真就返回真。x=1(真), y=0(假)，所以 1 || 0 = 1(真)。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'orange'
      }
    }
  ],

  predictions: [
    {
      question: '如果 a = 5，执行 b = a++ 后，b 的值是多少？',
      options: [
        { text: '5', feedback: '正确！a++ 先用后加，b 得到 a 的旧值 5。' },
        { text: '6', feedback: '错误！这是++a 的行为（先加后用）。' },
        { text: '4', feedback: '错误！这是自减运算符--的行为。' },
        { text: '编译错误', feedback: '错误！a++ 是合法的语法。' }
      ],
      correctIndex: 0
    },
    {
      question: '表达式 (1 && 1) || 0 的结果是多少？',
      options: [
        { text: '0', feedback: '错误！1 && 1 = 1，然后 1 || 0 = 1。' },
        { text: '1', feedback: '正确！1 && 1 = 1（真），1 || 0 = 1（真）。' },
        { text: '2', feedback: '错误！逻辑运算结果是 0 或 1，不是计数。' },
        { text: '编译错误', feedback: '错误！这是合法的逻辑表达式。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'a++ 和++a 效果一样',
      truth: 'a++ 是先用后加（返回旧值），++a 是先加后用（返回新值）。b=a++ 使 b=5,a=6；b=++a 使 a=6,b=6。'
    },
    {
      myth: '&& 和||可以短路求值',
      truth: '正确！&& 左边为假时不再计算右边（假&&任何=假）；|| 左边为真时不再计算右边（真||任何=真）。这是短路特性。'
    },
    {
      myth: '逻辑运算返回 true 或 false',
      truth: 'C 语言中逻辑运算返回整数 1(真) 或 0(假)。C99 引入了<bool.h>和 true/false 宏，但底层仍是 1 和 0。'
    }
  ],

  summary: {
    keyPoints: [
      'a++ 先用后加：b = a++; (b 得旧值，a 随后 +1)',
      '++a 先加后用：b = ++a; (a 先 +1，b 得新值)',
      '&& 逻辑与：两边都真才真，有短路特性',
      '|| 逻辑或：一边真就真，有短路特性',
      'C 语言中 1 表示真，0 表示假'
    ],
    pitfalls: [
      '混淆 a++ 和++a 的返回值',
      '忘记&&和||有短路特性',
      '在条件中使用=而不是=='
    ],
    transferQuestion: '如果 a=3，执行 b = ++a + a++ 后，a 和 b 各是多少？'
  }
};
