window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-3',
    title: '内存泄漏',
    description: '忘记 free、异常路径、指针覆盖导致的内存泄漏'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 场景 1：忘记 free' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'leak1' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"done"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 忘记 free(p)！' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// 场景 2：异常路径未释放' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'leak2' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'error' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'buf' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '256' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'error' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '        ' },
      { type: 'kw', text: 'return' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 提前返回，未 free(buf)！' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// 场景 3：指针覆盖导致泄漏' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'leak3' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '200' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 覆盖 p，丢失原地址！' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 只释放了第二块内存' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'p', color: '#ef4444', appearStep: 1, type: 'int*' },
    { name: 'buf', color: '#f59e0b', appearStep: 4, type: 'char*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示内存泄漏场景',
        detail: '内存泄漏是指分配的内存未被释放就丢失了引用。常见原因：忘记 free、异常路径未处理、指针覆盖。泄漏累积会导致程序内存耗尽。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: { p: { value: '0x1000', type: 'int*', mallocSize: 100 } },
      explanation: {
        text: '场景 1：leak1 函数分配 100 字节',
        detail: 'p = malloc(100) 成功分配内存。但函数结束前没有 free(p)，这 100 字节永久丢失。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [2, 3, 4],
      vars: { p: { value: '0x1000', type: 'int*', mallocSize: 100, leaked: true } },
      explanation: {
        text: '场景 1：函数返回，内存泄漏！',
        detail: '函数结束时 p 被销毁，但堆内存未被释放。这 100 字节无法再访问也无法释放，形成泄漏。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 3,
      line: 7,
      executedLines: [2, 3, 4, 7],
      vars: { buf: { value: '0x2000', type: 'char*', mallocSize: 256 } },
      explanation: {
        text: '场景 2：leak2 函数分配 256 字节',
        detail: 'buf = malloc(256) 分配缓冲区。如果 error 为 true，函数提前返回但忘记释放 buf。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 4,
      line: 9,
      executedLines: [2, 3, 4, 7, 8, 9],
      vars: { buf: { value: '0x2000', type: 'char*', mallocSize: 256, leaked: true } },
      explanation: {
        text: '场景 2：error=true 时提前返回',
        detail: '如果 error 为 true，return 语句直接退出函数。buf 未被 free，256 字节泄漏。这是异常路径泄漏。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 5,
      line: 13,
      executedLines: [2, 3, 4, 7, 8, 9, 13],
      vars: { p: { value: '0x3000', type: 'char*', mallocSize: 100 } },
      explanation: {
        text: '场景 3：第一次 malloc(100)',
        detail: 'p 指向第一块 100 字节内存 (0x3000)。这是正常的分配。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 14,
      executedLines: [2, 3, 4, 7, 8, 9, 13, 14],
      vars: { p: { value: '0x4000', type: 'char*', mallocSize: 200, leakedPrevious: 100 } },
      explanation: {
        text: '场景 3：p = malloc(200) 覆盖指针',
        detail: '危险！p 被重新赋值为新地址 (0x4000)。原地址 0x3000 丢失，100 字节泄漏。这是指针覆盖泄漏。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 7,
      line: 15,
      executedLines: [2, 3, 4, 7, 8, 9, 13, 14, 15],
      vars: { p: { value: '0x4000', type: 'char*', freed: true } },
      explanation: {
        text: '场景 3：只释放了第二块内存',
        detail: 'free(p) 释放了 200 字节，但第一块 100 字节已无法访问。总泄漏：100 字节。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '以下哪种情况不会导致内存泄漏？',
      options: [
        { text: 'malloc 后忘记 free', feedback: '错误！这是最常见的泄漏原因。' },
        { text: 'free 后将指针置为 NULL', feedback: '正确！这是良好的编程习惯，不会泄漏。' },
        { text: '指针被覆盖前未 free', feedback: '错误！这会导致原内存泄漏。' },
        { text: '异常路径未释放内存', feedback: '错误！异常返回前必须释放。' }
      ],
      correctIndex: 1
    },
    {
      question: '内存泄漏的后果是什么？',
      options: [
        { text: '程序立即崩溃', feedback: '错误！泄漏是累积的，不会立即崩溃。' },
        text: '内存占用逐渐增加，最终耗尽',
        feedback: '正确！长期运行的程序泄漏会耗尽内存。'
      },
      { text: '编译错误', feedback: '错误！泄漏是运行时问题。' },
      { text: '性能提升', feedback: '错误！只会降低性能。' }
    ],
    correctIndex: 1
  ],

  misconceptions: [
    {
      myth: '程序结束时操作系统会回收内存，所以不需要 free',
      truth: '虽然 OS 会回收，但长期运行的程序（服务器、后台服务）会因累积泄漏而耗尽内存。必须养成 free 习惯。'
    },
    {
      myth: '小内存泄漏没关系',
      truth: '小泄漏在循环中会累积。每次泄漏 100 字节，循环 1 万次就是 1MB。服务器运行数月可能耗尽内存。'
    },
    {
      myth: 'free 后指针会自动变 NULL',
      truth: 'free 不修改指针值。必须手动 p = NULL，否则成为悬空指针，可能导致更严重问题。'
    }
  ],

  summary: {
    keyPoints: [
      '忘记 free：最直接的泄漏原因',
      '异常路径：提前返回/goto 前必须释放',
      '指针覆盖：重新赋值前必须先 free',
      '内存泄漏累积会导致程序崩溃',
      '使用工具检测：valgrind、AddressSanitizer'
    ],
    pitfalls: [
      '函数多条返回路径忘记释放',
      '循环内部分配内存未释放',
      '错误处理路径跳过 free',
      '指针重新赋值前未保存或未释放'
    ],
    transferQuestion: '如何修复场景 2 中的异常路径泄漏？写出正确的代码模式。'
  }
};
