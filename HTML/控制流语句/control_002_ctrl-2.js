window.LESSON_DATA = {
  meta: {
    chapter: 'control',
    lessonId: 'ctrl-2',
    title: 'for 循环',
    description: 'for 循环的三个部分：初始化、条件、更新'
  },

  codeLines: [
    [
      { type: 'kw', text: 'for' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
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
        text: '程序开始执行，准备演示 for 循环',
        detail: 'for 循环执行顺序：1)初始化（只执行一次）2)判断条件 3)执行循环体 4)更新变量 5)回到步骤 2。条件 i<5 会循环 5 次（i=0,1,2,3,4）。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '第 1 行：初始化 i = 0',
        detail: 'for 循环的初始化部分只执行一次，创建循环变量 i 并赋初值 0。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 0,
      executedLines: [0],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '0 < 5 为真，进入循环体执行。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 1,
      executedLines: [0, 1],
      vars: { i: { value: 0, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '第 2 行：输出 i 的值 (0)',
        detail: '第一次循环，输出 0。然后执行更新部分 i++，i 变为 1。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 0,
      executedLines: [0, 1, 2],
      vars: { i: { value: 1, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '1 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 1,
      executedLines: [0, 1, 2, 3],
      vars: { i: { value: 1, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '输出 i 的值 (1)',
        detail: '第二次循环，输出 1。然后 i++，i 变为 2。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 0,
      executedLines: [0, 1, 2, 3, 4],
      vars: { i: { value: 2, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '2 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5],
      vars: { i: { value: 2, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '输出 i 的值 (2)',
        detail: '第三次循环，输出 2。然后 i++，i 变为 3。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 0,
      executedLines: [0, 1, 2, 3, 4, 5, 6],
      vars: { i: { value: 3, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '3 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7],
      vars: { i: { value: 3, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '输出 i 的值 (3)',
        detail: '第四次循环，输出 3。然后 i++，i 变为 4。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 10,
      line: 0,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      vars: { i: { value: 4, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '4 < 5 为真，继续循环。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 11,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: { i: { value: 4, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '输出 i 的值 (4)',
        detail: '第五次循环，输出 4。然后 i++，i 变为 5。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 12,
      line: 0,
      executedLines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: { i: { value: 5, type: 'int', address: '0x7ffd6000' } },
      explanation: {
        text: '检查条件 i < 5',
        detail: '5 < 5 为假，退出循环。循环结束，共执行 5 次（i=0,1,2,3,4）。',
        actor: 'ALU',
        icon: 'CircleX',
        color: 'red'
      }
    }
  ],

  predictions: [
    {
      question: 'for(int i=0; i<5; i++) 循环执行多少次？',
      options: [
        { text: '4 次', feedback: '错误！i 从 0 到 4，共 5 次。' },
        { text: '5 次', feedback: '正确！i=0,1,2,3,4，共 5 次。' },
        { text: '6 次', feedback: '错误！i=5 时条件 i<5 为假，不执行。' },
        { text: '无限次', feedback: '错误！i 会递增，最终达到 5 退出。' }
      ],
      correctIndex: 1
    },
    {
      question: '如果要循环 10 次（0 到 9），条件应该怎么写？',
      options: [
        { text: 'i < 10', feedback: '正确！i 从 0 到 9，共 10 次。' },
        { text: 'i <= 10', feedback: '错误！这会循环 11 次（0 到 10）。' },
        { text: 'i < 9', feedback: '错误！这只循环 9 次（0 到 8）。' },
        { text: 'i > 10', feedback: '错误！这会导致一次都不执行。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: 'for 循环 i<5 会执行到 i=5',
      truth: 'i<5 时 i 最大为 4。当 i=5 时条件为假，循环退出。要包含 5，需用 i<=5。'
    },
    {
      myth: 'i++ 和++i 在 for 循环中有区别',
      truth: '在 for 循环的更新部分，i++ 和++i 效果相同，因为更新操作独立执行，不涉及返回值。'
    },
    {
      myth: 'for 循环必须先初始化再判断',
      truth: 'for 循环的三个部分都可以省略：for(;;) 是无限循环。初始化可以在循环外完成。'
    }
  ],

  summary: {
    keyPoints: [
      'for(初始化;条件;更新) { 循环体 }',
      '初始化只执行一次',
      '每次循环：判断条件→执行循环体→更新变量',
      'i<5 循环 5 次（i=0,1,2,3,4）',
      'break 跳出循环，continue 跳过本次'
    ],
    pitfalls: [
      '条件写错导致差一错误（如 i<=5  vs i<5）',
      '忘记更新变量导致死循环',
      '循环体内修改循环变量导致意外行为'
    ],
    transferQuestion: '如果要输出 1 到 10，for 循环应该怎么写？'
  }
};
