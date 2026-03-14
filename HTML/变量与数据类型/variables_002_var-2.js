window.LESSON_DATA = {
  meta: {
    chapter: 'variables',
    lessonId: 'var-2',
    title: '格式化输入输出',
    description: '使用格式说明符进行输入输出'
  },

  codeLines: [
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'num' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'scanf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'num' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// 输入整数，注意&' }
    ],
    [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'num' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '     ' },
      { type: 'cmt', text: '// 输出整数' }
    ]
  ],

  varConfig: [
    { name: 'num', color: '#3b82f6', appearStep: 1, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，准备进行输入输出操作',
        detail: 'scanf 和 printf 是 C 语言的标准输入输出函数，需要包含<stdio.h>头文件。格式说明符%d 用于整数。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 0,
      executedLines: [0],
      vars: { num: { value: '?', type: 'int', address: '0x7ffd2000' } },
      explanation: {
        text: '第 1 行：声明整型变量 num（未初始化）',
        detail: 'num 被分配了内存空间，但尚未赋值，此时值为未定义的垃圾值。使用未初始化的变量是危险的。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'yellow'
      }
    },
    {
      step: 2,
      line: 1,
      executedLines: [0, 1],
      vars: { num: { value: 42, type: 'int', address: '0x7ffd2000' } },
      explanation: {
        text: '第 2 行：scanf 从键盘读取整数存入 num',
        detail: 'scanf 需要&取地址符来获取变量的内存地址。&num 表示 num 的地址。用户输入 42 后，num 的值变为 42。',
        actor: 'Kernel',
        icon: 'Keyboard',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 2,
      executedLines: [0, 1, 2],
      vars: { num: { value: 42, type: 'int', address: '0x7ffd2000' } },
      explanation: {
        text: '第 3 行：printf 输出 num 的值',
        detail: 'printf 将格式化字符串中的%d 替换为 num 的值（42），在屏幕上显示"42"。不需要&取地址符。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '如果用户输入 100，程序输出什么？',
      options: [
        { text: '100', feedback: '正确！scanf 读取 100，printf 输出 100。' },
        { text: '%d', feedback: '错误！%d 是格式说明符，会被实际值替换。' },
        { text: 'num', feedback: '错误！输出的是变量的值，不是变量名。' },
        { text: '编译错误', feedback: '错误！代码是正确的，可以正常编译运行。' }
      ],
      correctIndex: 0
    }
  ],

  misconceptions: [
    {
      myth: 'scanf 读取变量时不需要加&',
      truth: 'scanf 需要知道变量的地址才能修改它的值。&num 提供 num 的地址。不加&会导致未定义行为（通常崩溃）。'
    },
    {
      myth: 'printf 也需要&取地址符',
      truth: 'printf 只需要读取变量的值，不需要修改，所以直接传变量名即可，不需要&。'
    },
    {
      myth: '%d 可以输出任何类型',
      truth: '%d 专用于 int 类型。%f 用于 float，%c 用于 char，%s 用于字符串。用错会导致输出错误或崩溃。'
    }
  ],

  summary: {
    keyPoints: [
      'scanf("%d", &num) - 读取整数，需要&取地址',
      'printf("%d", num) - 输出整数，不需要&',
      '%d 对应 int，%f 对应 float，%c 对应 char，%s 对应字符串'
    ],
    pitfalls: [
      'scanf 忘记&会导致程序崩溃',
      'printf 错误使用&会输出地址而非值',
      '格式说明符必须与变量类型匹配'
    ],
    transferQuestion: '如果要读取一个浮点数到变量 float price，应该怎么写 scanf？'
  }
};
