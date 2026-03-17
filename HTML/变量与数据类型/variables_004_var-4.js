window.LESSON_DATA = {
  meta: {
    chapterId: 'variables',
    lessonId: 'var-4',
    title: '类型提升和运算规则',
    index: 4,
    filename: 'variables_004_var-4.js',
    keyPoints: ['算术类型提升规则', '混合精度运算', '字符类型的算术运算', '运算符优先级']
  },

  codeLines: [
    { num: 1, tokens: [{ type: 'cmt', text: '// 类型提升：小类型向大类型提升后再运算' }] },
    { num: 2, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'A'" },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// c1 = 65 (ASCII)' }
    ]},
    { num: 3, tokens: [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: "'B'" },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// c2 = 66 (ASCII)' }
    ]},
    { num: 4, tokens: [] },
    { num: 5, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sum' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'c2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// sum = 131，char 先提升为 int' }
    ]},
    { num: 6, tokens: [] },
    { num: 7, tokens: [
      { type: 'kw', text: 'short' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' }
    ]},
    { num: 8, tokens: [
      { type: 'kw', text: 'short' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '200' },
      { type: 'punc', text: ';' }
    ]},
    { num: 9, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'result' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 's2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// result = 300，short 提升为 int' }
    ]},
    { num: 10, tokens: [] },
    { num: 11, tokens: [
      { type: 'kw', text: 'float' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'f' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3.14f' },
      { type: 'punc', text: ';' }
    ]},
    { num: 12, tokens: [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2.0' },
      { type: 'punc', text: ';' }
    ]},
    { num: 13, tokens: [
      { type: 'kw', text: 'double' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'product' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'f' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'd' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// float 提升为 double 后运算' }
    ]},
    { num: 14, tokens: [] },
    { num: 15, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ]},
    { num: 16, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ';' }
    ]},
    { num: 17, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'expr1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// expr1 = 16，先乘后加' }
    ]},
    { num: 18, tokens: [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'expr2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'a' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '+' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'b' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// expr2 = 26，括号优先' }
    ]},
    { num: 19, tokens: [] },
    { num: 20, tokens: [
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ]}
  ],

  varConfig: [
    { key: 'c1', name: 'c1', type: 'char', addr: '0x7ffd00', glowColor: 'rgba(34,197,94,0.35)', appearStep: 1, value: '65(A)' },
    { key: 'c2', name: 'c2', type: 'char', addr: '0x7ffd01', glowColor: 'rgba(59,130,246,0.35)', appearStep: 2, value: '66(B)' },
    { key: 'sum', name: 'sum', type: 'int', addr: '0x7ffd04', glowColor: 'rgba(168,85,247,0.35)', appearStep: 4, value: '131' },
    { key: 's1', name: 's1', type: 'short', addr: '0x7ffd08', glowColor: 'rgba(249,115,22,0.35)', appearStep: 6, value: '100' },
    { key: 's2', name: 's2', type: 'short', addr: '0x7ffd0a', glowColor: 'rgba(250,204,21,0.35)', appearStep: 7, value: '200' },
    { key: 'result', name: 'result', type: 'int', addr: '0x7ffd0c', glowColor: 'rgba(239,68,68,0.35)', appearStep: 8, value: '300' },
    { key: 'f', name: 'f', type: 'float', addr: '0x7ffd10', glowColor: 'rgba(34,197,94,0.35)', appearStep: 10, value: '3.14' },
    { key: 'd', name: 'd', type: 'double', addr: '0x7ffd18', glowColor: 'rgba(59,130,246,0.35)', appearStep: 11, value: '2.0' },
    { key: 'product', name: 'product', type: 'double', addr: '0x7ffd20', glowColor: 'rgba(168,85,247,0.35)', appearStep: 12, value: '6.28' },
    { key: 'a', name: 'a', type: 'int', addr: '0x7ffd28', glowColor: 'rgba(249,115,22,0.35)', appearStep: 14, value: '10' },
    { key: 'b', name: 'b', type: 'int', addr: '0x7ffd2c', glowColor: 'rgba(250,204,21,0.35)', appearStep: 15, value: '3' },
    { key: 'expr1', name: 'expr1', type: 'int', addr: '0x7ffd30', glowColor: 'rgba(239,68,68,0.35)', appearStep: 16, value: '16' },
    { key: 'expr2', name: 'expr2', type: 'int', addr: '0x7ffd34', glowColor: 'rgba(34,197,94,0.35)', appearStep: 17, value: '26' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        icon: 'rocket',
        text: '准备执行代码',
        color: 'blue',
        actor: 'System',
        detail: '程序即将开始运行，演示类型提升规则和运算符优先级'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [],
      vars: { c1: '65(A)' },
      explanation: {
        icon: 'info',
        text: '阅读注释：类型提升 - 小类型向大类型提升后再运算',
        color: 'blue',
        actor: 'CPU',
        detail: '注释行不产生机器码，提示即将展示 char/short等小类型如何提升为int再运算'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1],
      vars: { c1: '65(A)' },
      highlightVar: 'c1',
      explanation: {
        icon: 'memory',
        text: '声明 char c1 = \'A\'，ASCII 值为 65',
        color: 'green',
        actor: 'CPU',
        detail: 'MOV 指令将 65 写入 c1 的内存地址 0x7ffd00，占用 1 字节。char 本质是单字节整数'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2],
      vars: { c1: '65(A)', c2: '66(B)' },
      highlightVar: 'c2',
      explanation: {
        icon: 'memory',
        text: '声明 char c2 = \'B\'，ASCII 值为 66',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOV 指令将 66 写入 c2 的内存地址 0x7ffd01，占用 1 字节'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3, 5],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131' },
      highlightVar: 'sum',
      explanation: {
        icon: 'calculator',
        text: 'int sum = c1 + c2，char 先提升为 int 再相加',
        color: 'purple',
        actor: 'CPU',
        detail: '关键规则：char 参与运算前，先提升 (promote)为 int！65+66=131。MOVSX 指令将 1 字节符号扩展为 4 字节'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131' },
      explanation: {
        icon: 'info',
        text: '整数提升 (Integer Promotion)规则',
        color: 'blue',
        actor: 'CPU',
        detail: 'C 语言规定：char/short在运算前自动提升为int。这称为"整数提升"，避免小类型运算溢出'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 3, 5, 7],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100' },
      highlightVar: 's1',
      explanation: {
        icon: 'memory',
        text: '声明 short s1 = 100',
        color: 'orange',
        actor: 'CPU',
        detail: 'MOV 指令将 100 写入 s1 的内存地址 0x7ffd08，占用 2 字节。short 范围：-32768 到 32767'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 7, 8],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200' },
      highlightVar: 's2',
      explanation: {
        icon: 'memory',
        text: '声明 short s2 = 200',
        color: 'yellow',
        actor: 'CPU',
        detail: 'MOV 指令将 200 写入 s2 的内存地址 0x7ffd0a，占用 2 字节'
      }
    },
    {
      step: 8,
      line: 9,
      executedLines: [1, 2, 3, 5, 7, 8, 9],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300' },
      highlightVar: 'result',
      explanation: {
        icon: 'calculator',
        text: 'int result = s1 + s2，short 提升为 int 后相加',
        color: 'red',
        actor: 'CPU',
        detail: 'short 同样先提升为 int：100+200=300。MOVSX 指令将 2 字节扩展为 4 字节，然后 ADD 指令相加'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14' },
      highlightVar: 'f',
      explanation: {
        icon: 'memory',
        text: '声明 float f = 3.14f，单精度浮点数',
        color: 'green',
        actor: 'CPU',
        detail: 'MOVSS 指令将 32 位浮点数 3.14 写入 f 的内存地址 0x7ffd10，占用 4 字节。float 有效数字约 7 位'
      }
    },
    {
      step: 10,
      line: 12,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0' },
      highlightVar: 'd',
      explanation: {
        icon: 'memory',
        text: '声明 double d = 2.0，双精度浮点数',
        color: 'cyan',
        actor: 'CPU',
        detail: 'MOVSD 指令将 64 位浮点数 2.0 写入 d 的内存地址 0x7ffd18，占用 8 字节。double 有效数字约 15 位'
      }
    },
    {
      step: 11,
      line: 13,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28' },
      highlightVar: 'product',
      explanation: {
        icon: 'calculator',
        text: 'double product = f * d，float 提升为 double 后运算',
        color: 'purple',
        actor: 'CPU',
        detail: '关键规则：float 与 double 运算时，float 先提升为 double！3.14→3.14(double)，然后 3.14×2.0=6.28'
      }
    },
    {
      step: 12,
      line: 14,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28' },
      explanation: {
        icon: 'info',
        text: '浮点类型提升规则：float→double',
        color: 'blue',
        actor: 'CPU',
        detail: '混合精度运算：低精度类型向高精度类型提升。float(32 位)→double(64 位)，保证运算精度'
      }
    },
    {
      step: 13,
      line: 15,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28', a: '10' },
      highlightVar: 'a',
      explanation: {
        icon: 'memory',
        text: '声明 int a = 10',
        color: 'orange',
        actor: 'CPU',
        detail: 'MOV 指令将 10 写入 a 的内存地址 0x7ffd28'
      }
    },
    {
      step: 14,
      line: 16,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28', a: '10', b: '3' },
      highlightVar: 'b',
      explanation: {
        icon: 'memory',
        text: '声明 int b = 3',
        color: 'yellow',
        actor: 'CPU',
        detail: 'MOV 指令将 3 写入 b 的内存地址 0x7ffd2c'
      }
    },
    {
      step: 15,
      line: 17,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28', a: '10', b: '3', expr1: '16' },
      highlightVar: 'expr1',
      explanation: {
        icon: 'calculator',
        text: 'int expr1 = a + b * 2 = 10 + 3*2 = 16',
        color: 'red',
        actor: 'CPU',
        detail: '运算符优先级：* 高于+。先计算 b*2=6，再计算 a+6=16。不是 (a+b)*2=26！'
      }
    },
    {
      step: 16,
      line: 18,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 18],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28', a: '10', b: '3', expr1: '16', expr2: '26' },
      highlightVar: 'expr2',
      explanation: {
        icon: 'calculator',
        text: 'int expr2 = (a + b) * 2 = (10+3)*2 = 26',
        color: 'green',
        actor: 'CPU',
        detail: '括号优先级最高！先计算 (a+b)=13，再计算 13*2=26。括号可以改变运算顺序'
      }
    },
    {
      step: 17,
      line: 20,
      executedLines: [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 18, 20],
      vars: { c1: '65(A)', c2: '66(B)', sum: '131', s1: '100', s2: '200', result: '300', f: '3.14', d: '2.0', product: '6.28', a: '10', b: '3', expr1: '16', expr2: '26' },
      explanation: {
        icon: 'terminal',
        text: '函数返回',
        color: 'blue',
        actor: 'CPU',
        detail: 'RET 指令返回。核心规则：1)char/short运算前提升为int 2)float与double运算时float提升为double 3)*优先级高于+，括号优先级最高'
      }
    }
  ],

  summary: {
    oneLiner: '掌握类型提升规则和运算符优先级',
    pitfalls: [
      'char/short在运算前自动提升为int，不会以小类型直接运算',
      'float与double运算时，float提升为double，精度对齐',
      '乘法 (*) 优先级高于加法 (+)，a+b*c 不等于 (a+b)*c',
      '括号可以改变运算顺序，不确定时始终用括号明确优先级'
    ],
    transferQuestion: '为什么 \'A\' + \'B\' 的结果是 131 而不是某个字符？',
    miniExercise: {
      bugCode: 'char c = \'A\' + \'B\'; // 警告：可能溢出！131 超出 char 范围',
      hint: '修复：int sum = \'A\' + \'B\'; 或用强制转换：char c = (char)(\'A\' + \'B\');'
    }
  },

  predictions: [
    {
      question: 'char 类型参与加法运算时，会发生什么？',
      options: [
        { text: '直接以char运算，结果仍为char', feedback: '错误！char会先提升为int再运算。' },
        { text: 'char自动提升为int，结果为int', feedback: '正确！整数提升规则：char/short运算前自动提升为int。' },
        { text: '编译错误', feedback: '错误！char可以参与算术运算。' },
        { text: 'char提升为double', feedback: '错误！整数类型提升为int，不是double。' }
      ],
      correctIndex: 1
    },
    {
      question: '表达式 a + b * c 的运算顺序是什么？',
      options: [
        { text: '从左到右：(a + b) * c', feedback: '错误！* 优先级高于+。' },
        { text: '先乘法后加法：a + (b * c)', feedback: '正确！乘法优先级高，先算b*c，再加a。' },
        { text: '从右到左：a + (b * c)', feedback: '虽然结果相同，但描述不准确。优先级决定顺序，不是结合性。' },
        { text: '随机顺序', feedback: '错误！C语言有明确的运算符优先级表。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'char + char 的结果还是 char',
      truth: 'char 在运算前自动提升为 int，所以 char + char 的结果是 int 类型，不是 char。'
    },
    {
      myth: 'a + b * c 从左到右计算',
      truth: 'C 语言有明确的运算符优先级：* / % 高于 + -。所以 a + b * c 先算 b * c，再算 a + 结果。'
    },
    {
      myth: 'float 和 double 可以直接运算',
      truth: 'float 与 double 运算时，float 先隐式转换为 double，然后执行 double 精度运算。低精度向高精度对齐。'
    }
  ]
};
