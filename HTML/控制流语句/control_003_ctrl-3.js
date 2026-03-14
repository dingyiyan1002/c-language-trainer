window.LESSON_DATA = {
  meta: {
    chapter: 'control',
    lessonId: 'ctrl-3',
    title: 'while 循环',
    description: 'while 先判断后执行，do-while 先执行后判断'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// i = 0' }
    ],
    [
      { type: 'kw', text: 'while' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d "' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// i 自增' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'i', color: '#3b82f6', appearStep: 1, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 while 循环',
        detail: 'while 循环先判断条件，条件为真时执行循环体。与 for 循环不同，while 需要在循环体内手动更新变量。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '第 1 行：声明变量 i 并初始化为 0',
        detail: 'while 循环需要在循环外初始化变量。i 被赋初值 0。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '第 2 行：检查条件 i < 5',
        detail: '0 < 5 为真，进入 while 循环体执行。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 2,
      executedLines: [0, 1, 2],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '第 3 行：输出 i 的值 (0)',
        detail: '第一次循环，输出 0。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: { i: { value: 1, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '第 4 行：i 自增为 1',
        detail: 'i++ 执行后，i 从 0 变为 1。然后回到 while 条件继续判断。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 1,
      executedLines: [0, 1, 2, 3, 4],
      vars: { i: { value: 1, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '1 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 2,
      executedLines: [0, 1, 2, 3, 4, 5],
      vars: { i: { value: 1, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '输出 i 的值 (1)',
        detail: '第二次循环，输出 1。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 3,
      executedLines: [0, 1, 2, 3, 4, 5, 6],
      vars: { i: { value: 2, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: 'i 自增为 2',
        detail: 'i++ 执行后，i 从 1 变为 2。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7],
      vars: { i: { value: 2, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '2 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 2,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      vars: { i: { value: 2, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '输出 i 的值 (2)',
        detail: '第三次循环，输出 2。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 10,
      line: 3,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: { i: { value: 3, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: 'i 自增为 3',
        detail: 'i++ 执行后，i 从 2 变为 3。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 11,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: { i: { value: 3, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '3 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 12,
      line: 2,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      vars: { i: { value: 3, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '输出 i 的值 (3)',
        detail: '第四次循环，输出 3。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 13,
      line: 3,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { i: { value: 4, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: 'i 自增为 4',
        detail: 'i++ 执行后，i 从 3 变为 4。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 14,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { i: { value: 4, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '4 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 15,
      line: 2,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { i: { value: 4, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '输出 i 的值 (4)',
        detail: '第五次循环，输出 4。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 16,
      line: 3,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { i: { value: 5, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: 'i 自增为 5',
        detail: 'i++ 执行后，i 从 4 变为 5。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 17,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { i: { value: 5, type: 'int', address: '0x7ffd7000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '5 < 5 为假，退出 while 循环。循环共执行 5 次（i=0,1,2,3,4）。',
        actor: 'ALU',
        icon: 'CircleX',
        color: 'red'
      }
    }
  ],

  predictions: [
    {
      question: 'while 循环和 for 循环的主要区别是什么？',
      options: [
        { text: 'while 循环更快', feedback: '错误！两者性能基本相同。' },
        { text: 'while 需要手动更新变量', feedback: '正确！while 需要在循环体内手动更新变量，for 在更新部分自动更新。' },
        { text: 'while 不能嵌套', feedback: '错误！while 可以嵌套使用。' },
        { text: '没有区别', feedback: '错误！语法和使用场景有差异。' }
      ],
      correctIndex: 1
    },
    {
      question: 'do-while 和 while 的区别是什么？',
      options: [
        { text: 'do-while 更快', feedback: '错误！两者性能基本相同。' },
        { text: 'do-while 至少执行一次', feedback: '正确！do-while 先执行后判断，while 先判断后执行。' },
        { text: 'do-while 不能嵌套', feedback: '错误！do-while 可以嵌套。' },
        { text: '没有区别', feedback: '错误！执行顺序不同。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'while 循环不需要更新变量',
      truth: 'while 循环必须在循环体内手动更新变量，否则会死循环。for 循环在更新部分自动处理。'
    },
    {
      myth: 'while(1) 是语法错误',
      truth: 'while(1) 是合法的无限循环，常用于嵌入式系统和服务器程序。需要用 break 退出。'
    },
    {
      myth: 'do-while 和 while 完全一样',
      truth: 'do-while 先执行循环体再判断条件，至少执行一次。while 先判断条件，可能一次都不执行。'
    }
  ],

  summary: {
    keyPoints: [
      'while(条件) { 循环体 } - 先判断后执行',
      '需要在循环体内手动更新变量',
      'do { 循环体 } while(条件); - 先执行后判断',
      'do-while 至少执行一次，while 可能一次不执行',
      'do-while 注意分号不能省略'
    ],
    pitfalls: [
      '忘记更新变量导致死循环',
      'do-while 忘记结尾分号',
      '条件永远为真导致无限循环'
    ],
    transferQuestion: '如果要确保循环至少执行一次，应该用 while 还是 do-while？'
  }
};
