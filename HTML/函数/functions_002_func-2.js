window.LESSON_DATA = {
  meta: {
    chapter: 'functions',
    lessonId: 'func-2',
    title: '值传递',
    description: 'C 语言函数参数是值传递——复制一份'
  },

  codeLines: [
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'change' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'x' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'x' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 只修改副本' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'change' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// a 仍然是 5！' }
    ]
  ],

  varConfig: [
    { name: 'a', color: '#3b82f6', appearStep: 4, type: 'int' },
    { name: 'x', color: '#22c55e', appearStep: 5, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示值传递机制',
        detail: 'C 语言函数参数是值传递——调用函数时复制实参的值给形参。函数内修改形参不影响原变量。',
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
        text: '第 1 行：定义函数 change',
        detail: '函数签名：void change(int x)。void 表示无返回值，x 是形参（形式参数）。',
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
        text: '第 2 行：函数体内修改 x 的值',
        detail: 'x = 100 只修改形参 x 的副本，不影响调用处的实参。',
        actor: 'Compiler',
        icon: 'Code',
        color: 'blue'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: { a: { value: 5, type: 'int', address: '0x7ffd9000' } },
      explanation: {
        text: '第 4 行：声明变量 a 并初始化为 5',
        detail: '变量 a 被分配内存，存储值 5。这是主调函数的局部变量。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 4,
      executedLines: [0, 1, 2, 3, 4],
      vars: {
        a: { value: 5, type: 'int', address: '0x7ffd9000' },
        x: { value: 5, type: 'int', address: '0x7ffd9100' }
      },
      explanation: {
        text: '第 5 行：调用 change(a)',
        detail: '值传递：将 a 的值 (5) 复制给形参 x。x 是 a 的副本，有独立的内存地址。修改 x 不影响 a。',
        actor: 'CPU',
        icon: 'Function',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 1,
      executedLines: [0, 1, 2, 3, 4, 5],
      vars: {
        a: { value: 5, type: 'int', address: '0x7ffd9000' },
        x: { value: 100, type: 'int', address: '0x7ffd9100' }
      },
      explanation: {
        text: '进入函数，执行 x = 100',
        detail: 'x 被修改为 100，但 a 仍然是 5。因为 x 是 a 的副本，修改副本不影响原变量。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'orange'
      }
    },
    {
      step: 6,
      line: 5,
      executedLines: [0, 1, 2, 3, 4, 5, 6],
      vars: { a: { value: 5, type: 'int', address: '0x7ffd9000' } },
      explanation: {
        text: '函数返回，x 被销毁',
        detail: '函数执行完毕，局部变量 x 被销毁。回到主调函数，a 的值仍然是 5，未受影响。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '执行 change(a) 后，a 的值是多少？',
      options: [
        { text: '5', feedback: '正确！值传递不改变原变量，a 仍然是 5。' },
        { text: '100', feedback: '错误！函数修改的是副本 x，不是 a。' },
        { text: '0', feedback: '错误！a 的值没有被修改。' },
        { text: '未定义', feedback: '错误！a 的值保持为 5。' }
      ],
      correctIndex: 0
    },
    {
      question: '如果要修改原变量 a，应该怎么做？',
      options: [
        { text: '使用返回值', feedback: '部分正确，但不是最佳方式。' },
        { text: '传递指针&a', feedback: '正确！传递地址可以修改原变量。' },
        { text: '使用全局变量', feedback: '可行但不推荐，破坏封装。' },
        { text: '无法修改', feedback: '错误！传递指针可以修改。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '函数内修改形参会影响实参',
      truth: 'C 语言是值传递，形参是实参的副本。修改形参只影响副本，不影响原变量。要修改原变量需传递指针。'
    },
    {
      myth: '数组作为参数也是值传递',
      truth: '数组作为参数时退化爲指针，实际上传递的是地址。修改数组元素会影响原数组。'
    },
    {
      myth: '值传递效率低',
      truth: '值传递复制数据，对于小数据类型（int、char）开销很小。对于大结构体，传递指针更高效。'
    }
  ],

  summary: {
    keyPoints: [
      'C 语言函数参数是值传递',
      '形参是实参的副本，有独立内存',
      '修改形参不影响原变量',
      '要修改原变量需传递指针（&a）',
      '数组作为参数时传递的是指针'
    ],
    pitfalls: [
      '误以为函数内修改会影响原变量',
      '需要修改原变量时忘记用指针',
      '混淆值传递和引用传递'
    ],
    transferQuestion: '如果要写一个函数交换两个变量的值，应该如何实现？'
  }
};
