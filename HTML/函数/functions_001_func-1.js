window.LESSON_DATA = {
  meta: {
    chapter: 'functions',
    lessonId: 'func-1',
    title: '函数定义与调用',
    description: '学会定义函数和调用函数'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'add' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'a', color: '#3b82f6', appearStep: 5, type: 'int' },
    { name: 'b', color: '#22c55e', appearStep: 5, type: 'int' },
    { name: 'result', color: '#f59e0b', appearStep: 4, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示函数定义与调用',
        detail: '函数定义包括：返回类型、函数名、参数列表、函数体。调用函数时传入实参，函数返回计算结果。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: {},
      explanation: {
        text: '第 1 行：定义函数 add',
        detail: '函数签名：int add(int a, int b)。返回类型 int 表示返回整数，函数名 add，两个 int 参数 a 和 b。',
        actor: 'Compiler',
        icon: 'Code',
        color: 'blue'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: {},
      explanation: {
        text: '第 2 行：函数体 - 返回 a + b',
        detail: 'return 语句将 a+b 的结果返回给调用者。函数定义只是声明逻辑，不会立即执行。',
        actor: 'Compiler',
        icon: 'Code',
        color: 'blue'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: { result: { value: 8, type: 'int', address: '0x7ffd8000' } },
      explanation: {
        text: '第 4 行：调用 add(3, 5) 并将结果存入 result',
        detail: '调用函数 add，传入实参 3 和 5。函数执行后返回 8，赋值给变量 result。',
        actor: 'CPU',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 0,
      executedLines: [0, 1, 2, 3],
      vars: {
        result: { value: 8, type: 'int', address: '0x7ffd8000' },
        a: { value: 3, type: 'int', address: '0x7ffd8100' },
        b: { value: 5, type: 'int', address: '0x7ffd8104' }
      },
      explanation: {
        text: '进入函数 add，形参 a=3, b=5',
        detail: '函数调用时，实参 3 和 5 分别复制给形参 a 和 b。这是值传递，形参是实参的副本。',
        actor: 'CPU',
        icon: 'Function',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 1,
      executedLines: [0, 1, 2, 3, 4],
      vars: {
        result: { value: 8, type: 'int', address: '0x7ffd8000' },
        a: { value: 3, type: 'int', address: '0x7ffd8100' },
        b: { value: 5, type: 'int', address: '0x7ffd8104' }
      },
      explanation: {
        text: '执行 return a + b',
        detail: '计算 3 + 5 = 8，return 将 8 返回给调用处，赋值给 result。函数执行结束，局部变量 a 和 b 被销毁。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '函数 add(3, 5) 的返回值是多少？',
      options: [
        { text: '3', feedback: '错误！add 函数返回 a+b 的结果。' },
        { text: '5', feedback: '错误！add 函数返回 a+b 的结果。' },
        { text: '8', feedback: '正确！3 + 5 = 8。' },
        { text: '无返回值', feedback: '错误！add 函数返回 int 类型值。' }
      ],
      correctIndex: 2
    },
    {
      question: '如果调用 add(10, 20)，result 的值是多少？',
      options: [
        { text: '10', feedback: '错误！' },
        { text: '20', feedback: '错误！' },
        { text: '30', feedback: '正确！10 + 20 = 30。' },
        { text: '1020', feedback: '错误！+是加法运算符，不是字符串连接。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '函数定义时会立即执行',
      truth: '函数定义只是声明逻辑，不会执行。只有调用函数时（如 add(3,5)）才会执行函数体。'
    },
    {
      myth: '返回类型可以省略',
      truth: 'C 语言中返回类型不能省略。不返回值的函数用 void 表示。C99 前默认返回 int，但现代 C 必须显式声明。'
    },
    {
      myth: '参数名可以不写',
      truth: '函数定义时参数名可以省略（只写类型），但强烈建议写上，提高代码可读性。'
    }
  ],

  summary: {
    keyPoints: [
      '函数定义：返回类型 函数名 (参数列表) { 函数体 }',
      'return 返回值；将结果返回给调用者',
      '函数调用：函数名 (实参 1, 实参 2)',
      '返回类型写在函数名前',
      'void 表示无返回值'
    ],
    pitfalls: [
      '忘记 return 导致未定义行为',
      '返回类型与实际返回值不匹配',
      '参数类型与实参类型不匹配'
    ],
    transferQuestion: '如果要写一个函数计算两数的乘积，应该如何定义？'
  }
};
