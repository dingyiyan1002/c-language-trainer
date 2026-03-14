window.LESSON_DATA = {
  meta: {
    chapter: 'control',
    lessonId: 'ctrl-1',
    title: 'if-else 条件判断',
    description: '根据条件选择执行不同代码'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'score' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '75' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 分数 75' }
    ],
    [
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'score' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '60' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"及格"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'else' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'score' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '>=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '40' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"补考"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'else' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"重修"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'score', color: '#3b82f6', appearStep: 1, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，准备进行条件判断',
        detail: 'if-else if-else 结构按顺序检查条件，执行第一个满足条件的分支。条件表达式放在小括号 () 内，语句块用大括号 {} 包围。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { score: { value: 75, type: 'int', address: '0x7ffd5000' } },
      explanation: {
        text: '第 1 行：声明变量 score 并赋值为 75',
        detail: '变量 score 存储分数值 75，将用于后续的条件判断。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: { score: { value: 75, type: 'int', address: '0x7ffd5000' } },
      explanation: {
        text: '第 2 行：检查条件 score >= 60',
        detail: '75 >= 60 为真 (1)，进入 if 分支执行。如果条件为假，会继续检查 else if。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 2,
      executedLines: [0, 1, 2],
      vars: { score: { value: 75, type: 'int', address: '0x7ffd5000' } },
      explanation: {
        text: '第 3 行：执行 printf 输出"及格"',
        detail: '因为条件 score >= 60 为真，执行此分支，在屏幕输出"及格"。else if 和 else 分支被跳过。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 7,
      executedLines: [0, 1, 2, 7],
      vars: { score: { value: 75, type: 'int', address: '0x7ffd5000' } },
      explanation: {
        text: 'if-else 结构执行完毕',
        detail: 'if 分支已执行，程序跳过 else if 和 else 分支，继续执行后续代码。整个 if-else 结构只执行一个分支。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '如果 score = 35，程序输出什么？',
      options: [
        { text: '及格', feedback: '错误！35 < 60，不满足第一个条件。' },
        { text: '补考', feedback: '错误！35 < 40，不满足第二个条件。' },
        { text: '重修', feedback: '正确！35 < 40，进入 else 分支输出"重修"。' },
        { text: '无输出', feedback: '错误！else 分支会执行。' }
      ],
      correctIndex: 2
    },
    {
      question: '如果 score = 50，程序输出什么？',
      options: [
        { text: '及格', feedback: '错误！50 < 60。' },
        { text: '补考', feedback: '正确！50 >= 40 且 50 < 60，进入 else if 分支。' },
        { text: '重修', feedback: '错误！50 >= 40，不会进入 else 分支。' },
        { text: '编译错误', feedback: '错误！代码是正确的。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'if 条件中可以用 = 代替==',
      truth: 'if(score = 60) 会将 60 赋值给 score，而不是比较。条件永远为真（非零）。必须用 if(score == 60)。'
    },
    {
      myth: 'else if 可以不加大括号',
      truth: '单条语句可以省略大括号，但推荐始终加上，避免后续添加代码时出错。'
    },
    {
      myth: '多个条件都会执行',
      truth: 'if-else if-else 结构只执行第一个满足条件的分支。一旦某个条件为真，其余分支都会被跳过。'
    }
  ],

  summary: {
    keyPoints: [
      'if(条件) { ... } 条件为真时执行',
      'else if(条件) { ... } 前一个条件为假时检查此条件',
      'else { ... } 所有条件都为假时执行',
      '条件表达式放在小括号 () 内',
      '语句块用大括号 {} 包围'
    ],
    pitfalls: [
      '条件中使用=而不是==',
      '忘记大括号导致逻辑错误',
      'else if 顺序错误导致某些分支永不执行'
    ],
    transferQuestion: '如果要添加"优秀"（score >= 90）的判断，应该放在哪里？'
  }
};
