window.LESSON_DATA = {
  meta: {
    chapter: 'variables',
    lessonId: 'var-1',
    title: '变量声明与初始化',
    description: '学会声明变量，理解不同数据类型'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'age' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '       ' },
      { type: 'cmt', text: '// 整型变量' }
    ],
    [
      { type: 'kw', text: 'float' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'price' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '9.9' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 浮点型' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'grade' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'A'" },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '   ' },
      { type: 'cmt', text: '// 字符型' }
    ]
  ],

  varConfig: [
    { name: 'age', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'price', color: '#22c55e', appearStep: 2, type: 'float' },
    { name: 'grade', color: '#f59e0b', appearStep: 3, type: 'char' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，准备声明变量',
        detail: '在 C 语言中，变量声明告诉编译器变量的类型和名称。这里我们将声明三个不同类型的变量。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { age: { value: 20, type: 'int', address: '0x7ffd1000' } },
      explanation: {
        text: '第 1 行：声明整型变量 age 并初始化为 20',
        detail: 'int 类型用于存储整数，占用 4 字节内存。变量 age 被分配内存地址 0x7ffd1000，存储值 20。',
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
        age: { value: 20, type: 'int', address: '0x7ffd1000' },
        price: { value: 9.9, type: 'float', address: '0x7ffd1004' }
      },
      explanation: {
        text: '第 2 行：声明浮点型变量 price 并初始化为 9.9',
        detail: 'float 类型用于存储带小数的数值，占用 4 字节。price 被分配地址 0x7ffd1004，存储值 9.9。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 2,
      executedLines: [0, 1, 2],
      vars: {
        age: { value: 20, type: 'int', address: '0x7ffd1000' },
        price: { value: 9.9, type: 'float', address: '0x7ffd1004' },
        grade: { value: "'A'", type: 'char', address: '0x7ffd1008' }
      },
      explanation: {
        text: '第 3 行：声明字符型变量 grade 并初始化为 \'A\'',
        detail: 'char 类型用于存储单个字符，占用 1 字节。字符用单引号包围，\'A\'的 ASCII 码值为 65。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '以下哪个变量声明是正确的？',
      options: [
        { text: 'int 1name = 10;', feedback: '错误！变量名不能以数字开头。' },
        { text: 'int name = 10;', feedback: '正确！符合命名规则。' },
        { text: 'int = 10;', feedback: '错误！缺少变量名。' },
        { text: 'int int = 10;', feedback: '错误！不能使用关键字作为变量名。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '变量名可以任意命名，包括数字开头',
      truth: '变量名必须以字母或下划线开头，只能包含字母、数字、下划线，且不能使用关键字（如 int、if、for 等）'
    },
    {
      myth: 'float 和 int 可以互换使用',
      truth: 'int 存储整数（如 20），float 存储小数（如 9.9）。将 float 赋值给 int 会截断小数部分。'
    },
    {
      myth: '字符可以用双引号表示',
      truth: '字符用单引号（\'A\'），字符串用双引号（"Hello"）。\'A\'是 char 类型，"A"是字符串（含\'\\0\'结尾）。'
    }
  ],

  summary: {
    keyPoints: [
      '变量声明语法：类型 变量名 = 初始值;',
      'int 存储整数（4 字节）',
      'float 存储小数（4 字节）',
      'char 存储单个字符（1 字节）',
      '变量名规则：字母/下划线开头，只能含字母数字下划线'
    ],
    pitfalls: [
      '变量名不能以数字开头（如 1name 非法）',
      '不能使用关键字作为变量名（如 int int 非法）',
      '字符用单引号，字符串用双引号，不要混淆'
    ],
    transferQuestion: '如果要存储圆周率 3.14159，应该使用什么类型？如果要存储字母\'B\'呢？'
  }
};
