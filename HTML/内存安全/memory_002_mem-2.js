window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-2',
    title: '动态内存分配',
    description: 'malloc、calloc、realloc、free 的使用模式'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<stdlib.h>' }
    ],
    [
      { type: 'cmt', text: '// malloc: 分配未初始化的内存' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '5' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// calloc: 分配并初始化为 0' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'p2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'calloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// realloc: 调整已分配内存大小' }
    ],
    [
      { type: 'id', text: 'p1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'realloc' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p1' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// free: 释放内存（重要！）' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'id', text: 'p1' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p2' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'id', text: 'p2' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'p1', color: '#3b82f6', appearStep: 1, type: 'int*' },
    { name: 'p2', color: '#22c55e', appearStep: 2, type: 'int*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示动态内存分配',
        detail: '动态内存分配允许程序在运行时请求内存。malloc 分配未初始化内存，calloc 初始化为 0，realloc 调整大小，free 释放内存。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: { p1: { value: '0x1000', type: 'int*', mallocSize: 20, initialized: false } },
      explanation: {
        text: '第 3 行：malloc 分配 5 个 int 的内存',
        detail: 'malloc(5 * sizeof(int)) 分配 20 字节未初始化内存。返回首地址给 p1。内存内容是垃圾值，必须手动初始化。',
        actor: 'Kernel',
        icon: 'Pointer',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [2, 4],
      vars: {
        p1: { value: '0x1000', type: 'int*', mallocSize: 20, initialized: false },
        p2: { value: '0x1020', type: 'int*', callocSize: 20, initialized: true, zeroed: true }
      },
      explanation: {
        text: '第 5 行：calloc 分配并初始化为 0',
        detail: 'calloc(5, sizeof(int)) 分配 20 字节并全部初始化为 0。与 malloc 不同，calloc 自动清零。适合需要初始值的场景。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 6,
      executedLines: [2, 4, 6],
      vars: {
        p1: { value: '0x2000', type: 'int*', mallocSize: 40, initialized: false, reallocated: true },
        p2: { value: '0x1020', type: 'int*', callocSize: 20, initialized: true, zeroed: true }
      },
      explanation: {
        text: '第 7 行：realloc 调整 p1 大小为 10 个 int',
        detail: 'realloc(p1, 40) 将内存从 20 字节扩展到 40 字节。可能返回新地址（数据已复制）。原内存被释放。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'purple'
      }
    },
    {
      step: 4,
      line: 8,
      executedLines: [2, 4, 6, 8],
      vars: {
        p1: { value: 'NULL', type: 'int*', freed: true },
        p2: { value: '0x1020', type: 'int*', callocSize: 20, initialized: true, zeroed: true }
      },
      explanation: {
        text: '第 9 行：free(p1) 释放内存并置为 NULL',
        detail: 'free 释放堆内存回系统。释放后 p1 成为悬空指针，必须置为 NULL 防止误用。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [2, 4, 6, 8, 9],
      vars: {
        p1: { value: 'NULL', type: 'int*', freed: true },
        p2: { value: 'NULL', type: 'int*', freed: true }
      },
      explanation: {
        text: '第 10 行：free(p2) 释放内存',
        detail: '所有动态分配的内存必须释放。释放后指针置为 NULL，成为空指针，不再指向任何内存。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: 'malloc 和 calloc 的主要区别是什么？',
      options: [
        { text: '没有区别', feedback: '错误！有重要区别。' },
        { text: 'malloc 更快', feedback: '不完全正确，速度差异不大。' },
        { text: 'calloc 初始化为 0，malloc 不初始化', feedback: '正确！calloc 自动清零，malloc 包含垃圾值。' },
        { text: 'malloc 参数更多', feedback: '错误！calloc 参数更多。' }
      ],
      correctIndex: 2
    },
    {
      question: 'realloc 失败时返回什么？',
      options: [
        { text: 'NULL', feedback: '正确！但原内存仍然有效，不应释放。' },
        { text: '0', feedback: '错误！返回指针，不是整数。' },
        { text: '原指针', feedback: '错误！失败返回 NULL。' },
        { text: '崩溃', feedback: '错误！失败不会崩溃，返回 NULL。' }
      ],
      correctIndex: 0
    },
    {
      question: 'free 后为什么要将指针置为 NULL？',
      options: [
        { text: '节省内存', feedback: '错误！指针本身占用的内存不受影响。' },
        { text: '防止悬空指针误用', feedback: '正确！NULL 指针解引用会立即崩溃，易于调试。' },
        { text: '必须这样做', feedback: '不是必须，但强烈推荐。' },
        { text: '提高性能', feedback: '错误！没有性能影响。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'malloc 分配的内存自动为 0',
      truth: 'malloc 不初始化内存！内容是垃圾值。需要初始值时用 calloc 或手动 memset。'
    },
    {
      myth: 'free 后指针自动变 NULL',
      truth: 'free 只释放内存，不修改指针值。指针仍保存原地址，成为悬空指针。必须手动置为 NULL。'
    },
    {
      myth: 'realloc 总是在原地址扩展',
      truth: 'realloc 可能移动内存到新地址。总是用返回值更新指针：p = realloc(p, newsize)。'
    },
    {
      myth: '小内存不需要 free',
      truth: '任何 malloc/calloc/realloc 分配的内存都必须 free。不释放就是内存泄漏。'
    }
  ],

  summary: {
    keyPoints: [
      'malloc(n): 分配 n 字节未初始化内存',
      'calloc(n, size): 分配并初始化为 0',
      'realloc(p, n): 调整已分配内存大小',
      'free(p): 释放内存，之后置为 NULL',
      '始终检查返回值是否为 NULL'
    ],
    pitfalls: [
      '忘记 free 导致内存泄漏',
      'free 后继续使用指针（悬空指针）',
      '不检查 malloc 返回值（可能为 NULL）',
      'realloc 失败时丢失原指针'
    ],
    transferQuestion: '如果需要分配一个 100 个整数的数组并初始化为 0，应该用 malloc 还是 calloc？为什么？'
  }
};
