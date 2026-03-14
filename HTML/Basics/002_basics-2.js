window.LESSON_DATA = {
  meta: {
    id: 'basics-2',
    title: 'printf 输出函数',
    chapter: 'Basics',
    index: 2,
    filename: 'printf_demo.c',
    keyPoints: ['printf 格式', '占位符', '转义字符']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }] },
    { num: 4, tokens: [{ type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hello"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '" World\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Number: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Hex: %x, Octal: %o\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Tab\\\\tHere\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Backslash: \\\\\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7fff00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'printf', name: 'printf', type: 'library function', addr: '0xLibc001', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
  ],
  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: { icon: 'rocket', text: '点击播放，学习 printf 输出函数', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'printf',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'output',
        text: 'printf("Hello") — 输出字符串',
        color: 'purple',
        actor: 'CPU',
        detail: 'printf 输出字符串"Hello"到标准输出。没有换行符，光标停留在"Hello"后面。连续调用 printf 会紧接着输出。'
      },
      prediction: {
        question: 'printf("Hello") 输出后光标在哪里？',
        options: ['行首', '"Hello"后面', '下一行开头'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 2,
      line: 6,
      executedLines: [1, 2, 3, 4, 5],
      vars: {},
      highlightVar: 'printf',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }],
      explanation: {
        icon: 'newline',
        text: 'printf(" World\\n") — 输出" World"并换行',
        color: 'purple',
        actor: 'CPU',
        detail: '\\n 是换行转义符，输出后光标移动到下一行开头。前面没有换行，所以"Hello"和" World"在同一行，显示为"Hello World"。'
      },
      prediction: null,
      misconception: {
        title: '转义字符',
        text: '\\n 不是两个字符，而是一个转义字符，代表换行符（ASCII 10）。类似地，\\t 是制表符（ASCII 9），\\\\ 是反斜杠本身。'
      },
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { num: 42 },
      highlightVar: 'num',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }],
      explanation: {
        icon: 'variable',
        text: 'int num = 42 — 定义整型变量',
        color: 'green',
        actor: 'CPU',
        detail: '定义 int 类型变量 num，赋值为 42。变量存储在栈上，可以在后续代码中使用。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:num',
      timing: 'runtime'
    },
    {
      step: 4,
      line: 8,
      executedLines: [1, 2, 3, 4, 5, 6, 7],
      vars: { num: 42 },
      highlightVar: 'printf',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }, { type: 'success', text: 'Number: 42' }],
      explanation: {
        icon: 'format',
        text: 'printf("Number: %d", num) — %d 是整数占位符',
        color: 'purple',
        actor: 'CPU',
        detail: '%d 是格式占位符，表示十进制整数。printf 用 num 的值（42）替换%d。可以有多个占位符，参数按顺序对应。'
      },
      prediction: {
        question: '%d 占位符用于输出什么类型？',
        options: ['浮点数', '十进制整数', '字符串'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8],
      vars: { num: 42 },
      highlightVar: 'printf',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }, { type: 'success', text: 'Number: 42' }, { type: 'success', text: 'Hex: 2a, Octal: 52' }],
      explanation: {
        icon: 'format',
        text: '%x 十六进制，%o 八进制 — 42 = 0x2A = 052',
        color: 'purple',
        actor: 'CPU',
        detail: '%x 输出十六进制（42=0x2A），%o 输出八进制（42=052）。同一变量可以用不同格式输出，printf 自动转换。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      vars: { num: 42 },
      highlightVar: 'printf',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }, { type: 'success', text: 'Number: 42' }, { type: 'success', text: 'Hex: 2a, Octal: 52' }, { type: 'success', text: 'Tab    Here' }],
      explanation: {
        icon: 'tab',
        text: '\\t 是制表符（Tab）— 对齐文本',
        color: 'purple',
        actor: 'CPU',
        detail: '\\t 是水平制表符，通常相当于 8 个空格。用于对齐列数据。"Tab\\tHere"输出为"Tab    Here"。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 11,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      vars: { num: 42 },
      highlightVar: 'printf',
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }, { type: 'success', text: 'Number: 42' }, { type: 'success', text: 'Hex: 2a, Octal: 52' }, { type: 'success', text: 'Tab    Here' }, { type: 'success', text: 'Backslash: \\\\' }],
      explanation: {
        icon: 'escape',
        text: '\\\\ 输出反斜杠本身',
        color: 'purple',
        actor: 'CPU',
        detail: '\\\\ 是转义序列，输出一个反斜杠字符。第一个\\是转义符，告诉编译器第二个\\是字面量。类似地，\\" 输出双引号。'
      },
      prediction: {
        question: '如何在 printf 中输出反斜杠\\？',
        options: ['printf("\\")', 'printf("\\\\")', 'printf("/")'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 13,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { num: 42 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Hello World' }, { type: 'success', text: 'Number: 42' }, { type: 'success', text: 'Hex: 2a, Octal: 52' }, { type: 'success', text: 'Tab    Here' }, { type: 'success', text: 'Backslash: \\\\' }],
      explanation: {
        icon: 'check',
        text: 'printf 要点：格式占位符+%d/%x/%o+ 转义字符\\n\\t\\\\',
        color: 'green',
        actor: 'Teacher',
        detail: 'printf 用法：1) 字符串直接输出 2) %d 十进制整数 3) %x 十六进制 4) %o 八进制 5) \\n 换行 6) \\t 制表符 7) \\\\ 反斜杠。多个占位符按顺序对应参数。'
      },
      prediction: null,
      misconception: null,
      actor: 'Teacher',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: 'printf 输出：格式占位符（%d/%x/%o）+ 转义字符（\\n 换行/\\t 制表/\\\\ 反斜杠）',
    pitfalls: [
      'printf 字符串没有自动换行，需要显式添加\\n 才能换行',
      '%d 用于十进制整数，%x 用于十六进制，%o 用于八进制，不能混用',
      '转义字符\\是一个字符，不是两个：\\n 是换行，\\t 是制表，\\\\ 是反斜杠'
    ],
    transferQuestion: '如何输出双引号字符"？（提示：转义序列）',
    miniExercise: {
      bugCode: 'printf("Path: C:\\Windows\\System32\\n");',
      hint: '\\W 和\\S 不是合法转义序列。应该用\\\\转义反斜杠：printf("Path: C:\\\\Windows\\\\System32\\n");'
    }
  }
};
