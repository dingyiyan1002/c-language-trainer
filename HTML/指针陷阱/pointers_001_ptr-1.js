window.LESSON_DATA = {
  meta: {
    chapter: 'pointers',
    lessonId: 'ptr-1',
    title: '指针基础',
    description: '指针存储变量的内存地址'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// a = 10' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// p 存储 a 的地址' }
    ],
    [
      { type: 'cmt', text: '// & 取地址，* 解引用（获取地址上的值）' }
    ],
    [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 输出 10' }
    ],
    [
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '       ' },
      { type: 'cmt', text: '// 通过指针修改 a' }
    ],
    [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 输出 20' }
    ]
  ],

  varConfig: [
    { name: 'a', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'p', color: '#22c55e', appearStep: 2, type: 'int*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示指针基础',
        detail: '指针是存储内存地址的变量。&是取地址运算符，获取变量的地址。*是解引用运算符，获取地址上存储的值。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { a: { value: 10, type: 'int', address: '0x7ffc1000' } },
      explanation: {
        text: '第 1 行：声明变量 a 并初始化为 10',
        detail: '变量 a 被分配内存地址 0x7ffc1000，存储值 10。',
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
        a: { value: 10, type: 'int', address: '0x7ffc1000' },
        p: { value: '0x7ffc1000', type: 'int*', address: '0x7ffc1004' }
      },
      explanation: {
        text: '第 2 行：声明指针 p 并指向 a',
        detail: 'int *p = &a; 声明 p 为 int 指针，&a 获取 a 的地址 (0x7ffc1000)，p 存储这个地址。现在 p 指向 a。',
        actor: 'CPU',
        icon: 'Pointer',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: {
        a: { value: 10, type: 'int', address: '0x7ffc1000' },
        p: { value: '0x7ffc1000', type: 'int*', address: '0x7ffc1004' }
      },
      explanation: {
        text: '第 4 行：*p 解引用，输出 10',
        detail: '*p 是解引用操作，获取 p 所指向地址 (0x7ffc1000) 上的值，即 a 的值 10。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 4,
      executedLines: [0, 1, 2, 3, 4],
      vars: {
        a: { value: 20, type: 'int', address: '0x7ffc1000' },
        p: { value: '0x7ffc1000', type: 'int*', address: '0x7ffc1004' }
      },
      explanation: {
        text: '第 5 行：*p = 20，通过指针修改 a',
        detail: '*p = 20 将值 20 写入 p 所指向的地址 (0x7ffc1000)，即修改了 a 的值。现在 a = 20。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 5,
      executedLines: [0, 1, 2, 3, 4, 5],
      vars: {
        a: { value: 20, type: 'int', address: '0x7ffc1000' },
        p: { value: '0x7ffc1000', type: 'int*', address: '0x7ffc1004' }
      },
      explanation: {
        text: '第 6 行：输出 a 的值 (20)',
        detail: '通过指针*p 修改后，a 的值从 10 变为 20。这证明指针可以直接修改原变量。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '*p 和 &a 分别是什么意思？',
      options: [
        { text: '*p 是地址，&a 是值', feedback: '错误！' },
        { text: '*p 是解引用取的值，&a 是取地址', feedback: '正确！*p 获取 p 指向地址的值，&a 获取 a 的地址。' },
        { text: '*p 是乘法，&a 是与运算', feedback: '错误！这里*和&是一元运算符，不是二元运算符。' },
        { text: '没有区别', feedback: '错误！完全不同。' }
      ],
      correctIndex: 1
    },
    {
      question: '如果 p = &a，那么*p 等于什么？',
      options: [
        { text: 'a 的地址', feedback: '错误！*p 是 a 的值，不是地址。' },
        { text: 'a 的值', feedback: '正确！*p 解引用得到 a 的值。' },
        { text: 'p 的地址', feedback: '错误！&p 才是 p 的地址。' },
        { text: 'a 的类型', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '*在声明和使用时意义相同',
      truth: 'int *p 中的*表示 p 是指针类型；*p = 10 中的*是解引用运算符。语法相同但含义不同。'
    },
    {
      myth: '指针和整数可以互换',
      truth: '指针存储地址，虽然地址本质是数字，但不能直接当整数用。指针有类型，支持指针运算。'
    },
    {
      myth: '指针可以指向任意地址',
      truth: '指针必须指向合法分配的内存。野指针（未初始化）和悬空指针（指向已释放内存）会导致未定义行为。'
    }
  ],

  summary: {
    keyPoints: [
      '指针存储变量的内存地址',
      '&运算符取地址：&a 得到 a 的地址',
      '*运算符解引用：*p 获取 p 指向地址的值',
      '通过指针可以间接修改原变量',
      '指针有类型：int* 指向 int，char* 指向 char'
    ],
    pitfalls: [
      '混淆&和*的含义',
      '指针未初始化就使用（野指针）',
      '指针类型与目标变量类型不匹配'
    ],
    transferQuestion: '如果有 int b = 5; int *q = &b; 那么*q 的值是多少？'
  }
};
