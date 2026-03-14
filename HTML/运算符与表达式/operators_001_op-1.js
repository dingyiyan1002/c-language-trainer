window.LESSON_DATA = {
  meta: {
    chapter: 'operators',
    lessonId: 'op-1',
    title: '算术与比较运算符',
    description: '掌握算术运算符和比较运算符的使用'
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
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// b = 3' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sum' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// sum = 13' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'rem' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '%' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// rem = 1 (10 % 3)' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'eq' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '==' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// eq = 0 (false)' }
    ]
  ],

  varConfig: [
    { name: 'a', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'b', color: '#22c55e', appearStep: 2, type: 'int' },
    { name: 'sum', color: '#f59e0b', appearStep: 3, type: 'int' },
    { name: 'rem', color: '#ef4444', appearStep: 4, type: 'int' },
    { name: 'eq', color: '#8b5cf6', appearStep: 5, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，准备演示算术和比较运算符',
        detail: '算术运算符包括 + - * / %，比较运算符包括 == != > < >= <=，比较运算返回 1(真) 或 0(假)。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { a: { value: 10, type: 'int', address: '0x7ffd3000' } },
      explanation: {
        text: '第 1 行：声明变量 a 并赋值为 10',
        detail: '变量 a 被分配内存，存储整数值 10。',
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
        a: { value: 10, type: 'int', address: '0x7ffd3000' },
        b: { value: 3, type: 'int', address: '0x7ffd3004' }
      },
      explanation: {
        text: '第 2 行：声明变量 b 并赋值为 3',
        detail: '变量 b 被分配内存，存储整数值 3。',
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
        a: { value: 10, type: 'int', address: '0x7ffd3000' },
        b: { value: 3, type: 'int', address: '0x7ffd3004' },
        sum: { value: 13, type: 'int', address: '0x7ffd3008' }
      },
      explanation: {
        text: '第 3 行：计算 a + b 并存入 sum',
        detail: '加法运算符 + 将 a(10) 和 b(3) 相加，结果 13 存入 sum 变量。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 3,
      executedLines: [0, 1, 2, 3],
      vars: {
        a: { value: 10, type: 'int', address: '0x7ffd3000' },
        b: { value: 3, type: 'int', address: '0x7ffd3004' },
        sum: { value: 13, type: 'int', address: '0x7ffd3008' },
        rem: { value: 1, type: 'int', address: '0x7ffd300c' }
      },
      explanation: {
        text: '第 4 行：计算 a % b 并存入 rem',
        detail: '取余运算符 % 计算 10 除以 3 的余数。10 = 3×3 + 1，所以余数是 1。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 4,
      executedLines: [0, 1, 2, 3, 4],
      vars: {
        a: { value: 10, type: 'int', address: '0x7ffd3000' },
        b: { value: 3, type: 'int', address: '0x7ffd3004' },
        sum: { value: 13, type: 'int', address: '0x7ffd3008' },
        rem: { value: 1, type: 'int', address: '0x7ffd300c' },
        eq: { value: 0, type: 'int', address: '0x7ffd3010' }
      },
      explanation: {
        text: '第 5 行：计算 a == b 并存入 eq',
        detail: '比较运算符 == 检查 a 和 b 是否相等。10 != 3，所以结果为假 (0)。C 语言中，比较运算返回 1(真) 或 0(假)。',
        actor: 'ALU',
        icon: 'Calculator',
        color: 'orange'
      }
    }
  ],

  predictions: [
    {
      question: '表达式 10 % 3 的结果是多少？',
      options: [
        { text: '3', feedback: '错误！3 是商，不是余数。' },
        { text: '1', feedback: '正确！10 = 3×3 + 1，余数是 1。' },
        { text: '0', feedback: '错误！10 不能被 3 整除。' },
        { text: '10', feedback: '错误！%是取余，不是返回被除数。' }
      ],
      correctIndex: 1
    },
    {
      question: '表达式 5 == 5 的结果是多少？',
      options: [
        { text: '0', feedback: '错误！5 等于 5，应该返回真。' },
        { text: '1', feedback: '正确！5 等于 5，比较结果为真 (1)。' },
        { text: 'true', feedback: '错误！C 语言没有 true 关键字，真值用 1 表示。' },
        { text: 'false', feedback: '错误！5 等于 5，不是假。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '=和==可以互换使用',
      truth: '=是赋值运算符（将值存入变量），== 是比较运算符（检查两个值是否相等）。if(a=5) 会将 5 赋值给 a，而不是比较 a 是否等于 5。'
    },
    {
      myth: '整数除法会得到小数',
      truth: '整数除法会截断小数部分。10/3 = 3（不是 3.333）。要得到小数结果，至少一个操作数必须是浮点数。'
    },
    {
      myth: '%运算符可以用于小数',
      truth: '%只能用于整数类型。对浮点数取余需要使用 fmod() 函数。'
    }
  ],

  summary: {
    keyPoints: [
      '算术运算符：+ - * / %',
      '% 取余数：10 % 3 = 1',
      '比较运算符返回 1(真) 或 0(假)',
      '== 比较相等，!= 比较不相等',
      '整数除法截断小数部分'
    ],
    pitfalls: [
      '=是赋值，== 是比较，不要混淆',
      '整数除法 10/3=3 不是 3.333',
      '%只能用于整数，不能用于浮点数'
    ],
    transferQuestion: '表达式 17 % 5 的结果是多少？表达式 7 == 7 的结果是多少？'
  }
};
