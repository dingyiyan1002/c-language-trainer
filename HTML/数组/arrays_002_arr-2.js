window.LESSON_DATA = {
  meta: {
    chapter: 'arrays',
    lessonId: 'arr-2',
    title: '字符串',
    description: 'C 语言字符串是字符数组，以\\0 结尾'
  },

  codeLines: [
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: '[' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Hello"' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 实际存储：H e l l o \\0（6 个字符）' }
    ],
    [
      { type: 'id', text: 'strlen' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 返回 5（不含\\0）' }
    ],
    [
      { type: 'id', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 返回 6（含\\0）' }
    ]
  ],

  varConfig: [
    { name: 'str[0]', color: '#3b82f6', appearStep: 1, type: 'char' },
    { name: 'str[1]', color: '#22c55e', appearStep: 1, type: 'char' },
    { name: 'str[2]', color: '#f59e0b', appearStep: 1, type: 'char' },
    { name: 'str[3]', color: '#ef4444', appearStep: 1, type: 'char' },
    { name: 'str[4]', color: '#8b5cf6', appearStep: 1, type: 'char' },
    { name: 'str[5]', color: '#06b6d4', appearStep: 1, type: 'char' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示字符串',
        detail: 'C 语言字符串是字符数组，以空字符\\0 结尾。字符串字面量用双引号，字符用单引号。strlen 返回长度（不含\\0），sizeof 返回总大小（含\\0）。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: {
        'str[0]': { value: "'H'", type: 'char', address: '0x7ffdb000' },
        'str[1]': { value: "'e'", type: 'char', address: '0x7ffdb001' },
        'str[2]': { value: "'l'", type: 'char', address: '0x7ffdb002' },
        'str[3]': { value: "'l'", type: 'char', address: '0x7ffdb003' },
        'str[4]': { value: "'o'", type: 'char', address: '0x7ffdb004' },
        'str[5]': { value: "'\\0'", type: 'char', address: '0x7ffdb005' }
      },
      explanation: {
        text: '第 1 行：声明并初始化字符串 str',
        detail: 'char str[] = "Hello" 自动推断长度为 6（包含\\0）。实际存储：H e l l o \\0，每个字符占 1 字节。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [0, 1, 2],
      vars: {
        'str[0]': { value: "'H'", type: 'char', address: '0x7ffdb000' },
        'str[1]': { value: "'e'", type: 'char', address: '0x7ffdb001' },
        'str[2]': { value: "'l'", type: 'char', address: '0x7ffdb002' },
        'str[3]': { value: "'l'", type: 'char', address: '0x7ffdb003' },
        'str[4]': { value: "'o'", type: 'char', address: '0x7ffdb004' },
        'str[5]': { value: "'\\0'", type: 'char', address: '0x7ffdb005' }
      },
      explanation: {
        text: '第 3 行：strlen(str) 返回 5',
        detail: 'strlen 函数计算字符串长度，从开头到\\0 但不包括\\0。"Hello" 长度是 5。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: {
        'str[0]': { value: "'H'", type: 'char', address: '0x7ffdb000' },
        'str[1]': { value: "'e'", type: 'char', address: '0x7ffdb001' },
        'str[2]': { value: "'l'", type: 'char', address: '0x7ffdb002' },
        'str[3]': { value: "'l'", type: 'char', address: '0x7ffdb003' },
        'str[4]': { value: "'o'", type: 'char', address: '0x7ffdb004' },
        'str[5]': { value: "'\\0'", type: 'char', address: '0x7ffdb005' }
      },
      explanation: {
        text: '第 4 行：sizeof(str) 返回 6',
        detail: 'sizeof 运算符返回数组总大小，包括\\0。char str[6] 大小是 6 字节。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'char str[] = "A" 占用多少字节？',
      options: [
        { text: '1 字节', feedback: '错误！字符串"A"包含\'A\'和\'\\0\'，共 2 字节。' },
        { text: '2 字节', feedback: '正确！\'A\'占 1 字节，\'\\0\'占 1 字节。' },
        { text: '3 字节', feedback: '错误！' },
        { text: '4 字节', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: "'A' 和 \"A\" 有什么区别？",
      options: [
        { text: '没有区别', feedback: '错误！有重要区别。' },
        { text: "'A'是字符，\"A\"是字符串", feedback: '正确！\'A\'是 char 类型（1 字节），"A"是字符串（2 字节，含\\0）。' },
        { text: "'A\"是字符串，\"A\"是字符", feedback: '错误！刚好相反。' },
        { text: '两者都是字符串', feedback: '错误！\'A\'是字符字面量。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '字符串和字符可以互换使用',
      truth: '\'A\'是字符字面量（char 类型，1 字节），"A" 是字符串字面量（char[2]，含\\0）。类型不同，不能混用。'
    },
    {
      myth: 'strlen 返回数组大小',
      truth: 'strlen 返回字符串长度（不含\\0），sizeof 返回数组总大小（含\\0）。对于"Hello"，strlen=5, sizeof=6。'
    },
    {
      myth: '字符串可以用=直接赋值',
      truth: '数组初始化时可以 str[] = "Hello"，但之后不能用 str = "World"。需用 strcpy 函数复制字符串。'
    }
  ],

  summary: {
    keyPoints: [
      '字符串是字符数组，以\\0 结尾',
      '字符用单引号 (\'A\')，字符串用双引号 ("Hello")',
      'strlen(str) 返回长度（不含\\0）',
      'sizeof(str) 返回总大小（含\\0）',
      '"Hello" 实际存储 H e l l o \\0（6 字节）'
    ],
    pitfalls: [
      '忘记字符串末尾的\\0',
      '混淆 strlen 和 sizeof',
      '字符用双引号或字符串用单引号'
    ],
    transferQuestion: '如果要存储字符串"World"，需要多大的字符数组？'
  }
};
