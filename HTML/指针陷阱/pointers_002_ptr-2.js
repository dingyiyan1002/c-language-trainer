window.LESSON_DATA = {
  meta: {
    chapter: 'pointers',
    lessonId: 'ptr-2',
    title: '常见指针错误',
    description: '野指针、空指针解引用、悬空指针'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 野指针：未初始化就使用' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '      ' },
      { type: 'cmt', text: '// p 是垃圾值' }
    ],
    [
      { type: 'op', text: '*' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 危险！写入随机地址' }
    ],
    [
      { type: 'cmt', text: '// 空指针解引用' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'q' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'op', text: '*' },
      { type: 'id', text: 'q' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'cmt', text: '// 程序崩溃！' }
    ]
  ],

  varConfig: [
    { name: 'p', color: '#ef4444', appearStep: 2, type: 'int*', isDanger: true },
    { name: 'q', color: '#f59e0b', appearStep: 5, type: 'int*', isDanger: true }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示常见指针错误',
        detail: '指针使用前必须初始化。野指针指向随机地址，空指针解引用会崩溃，悬空指针指向已释放内存。这三种都是严重错误。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: {},
      explanation: {
        text: '第 2 行：声明未初始化的指针 p',
        detail: 'int *p; 声明了指针但没有初始化，p 包含垃圾值（随机地址）。这是野指针。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: { p: { value: '0x????', type: 'int*', address: '0x7ffc2000', isDanger: true } },
      explanation: {
        text: '第 3 行：*p = 10 野指针解引用',
        detail: '危险！p 指向随机地址 0x????，*p = 10 会向这个随机地址写入 10，可能破坏其他数据或导致程序崩溃。这是未定义行为。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: { p: { value: '0x????', type: 'int*', address: '0x7ffc2000', isDanger: true } },
      explanation: {
        text: '第 5 行：声明空指针 q = NULL',
        detail: 'int *q = NULL; 声明指针 q 并初始化为 NULL（空指针）。NULL 是特殊值，表示不指向任何有效地址。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4, 5],
      vars: {
        p: { value: '0x????', type: 'int*', address: '0x7ffc2000', isDanger: true },
        q: { value: '0x0000', type: 'int*', address: '0x7ffc2004', isDanger: true }
      },
      explanation: {
        text: '第 6 行：*q = 10 空指针解引用',
        detail: '崩溃！q 是 NULL(0x0000)，这是非法地址。*q = 10 试图向地址 0 写入数据，操作系统会发送 SIGSEGV 信号终止程序。',
        actor: 'Kernel',
        icon: 'CircleAlert',
        color: 'red'
      }
    }
  ],

  predictions: [
    {
      question: '如何避免野指针？',
      options: [
        { text: '使用后及时释放', feedback: '不完全，这是避免内存泄漏。' },
        { text: '声明时初始化为 NULL 或有效地址', feedback: '正确！未初始化是指针危险的根源。' },
        { text: '尽量少用指针', feedback: '不是根本解决方法。' },
        { text: '用全局变量', feedback: '不能解决问题。' }
      ],
      correctIndex: 1
    },
    {
      question: '空指针有什么用？',
      options: [
        { text: '没有任何用处', feedback: '错误！空指针很有用。' },
        { text: '表示指针不指向任何对象', feedback: '正确！空指针表示"无指向"，可以安全检查。' },
        { text: '提高程序性能', feedback: '错误！' },
        { text: '节省内存', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '未初始化的指针值是 0',
      truth: '未初始化的局部指针包含垃圾值（随机地址），不是 0。只有全局指针和静态指针默认初始化为 NULL。'
    },
    {
      myth: '空指针解引用只是返回 0',
      truth: '空指针解引用是严重错误，会导致程序崩溃（Segmentation Fault）。地址 0 是受保护的，不允许访问。'
    },
    {
      myth: '指针声明后可以随便用',
      truth: '指针必须先初始化再使用。正确做法：int *p = NULL; 或 int *p = &a;'
    }
  ],

  summary: {
    keyPoints: [
      '野指针：未初始化就使用，指向随机地址',
      '空指针：值为 NULL，解引用会崩溃',
      '悬空指针：指向已释放的内存',
      '指针声明时必须初始化',
      '用前检查：if(p != NULL)'
    ],
    pitfalls: [
      '忘记初始化指针',
      '解引用 NULL 指针',
      'free 后继续使用指针'
    ],
    transferQuestion: '如何安全地使用指针？写出正确的代码模式。'
  }
};
