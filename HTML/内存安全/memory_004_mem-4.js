window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-4',
    title: '野指针与悬空指针',
    description: '未初始化指针、悬空指针、返回局部变量地址'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 野指针：未初始化就使用' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'wild' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 未初始化！' }
    ],
    [
      { type: 'op', text: '*' },
      { type: 'id', text: 'wild' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '42' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 危险！写入随机地址' }
    ],
    [
      { type: 'cmt', text: '// 悬空指针：指向已释放内存' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'dangling' },
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
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'dangling' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 已释放' }
    ],
    [
      { type: 'op', text: '*' },
      { type: 'id', text: 'dangling' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 危险！使用已释放内存' }
    ],
    [
      { type: 'cmt', text: '// 返回局部变量地址' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'badFunc' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'local' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '10' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'local' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 返回栈地址！' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'wild', color: '#ef4444', appearStep: 1, type: 'int*', isDanger: true },
    { name: 'dangling', color: '#f59e0b', appearStep: 3, type: 'int*', isDanger: true }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示野指针和悬空指针',
        detail: '野指针是未初始化的指针，指向随机地址。悬空指针指向已释放的内存。两者都会导致未定义行为，可能崩溃或破坏数据。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: { wild: { value: '0x????', type: 'int*', isWild: true } },
      explanation: {
        text: '第 2 行：声明未初始化的指针 wild',
        detail: 'int *wild; 声明指针但未初始化，包含垃圾地址 (0x????)。这是野指针，非常危险。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: { wild: { value: '0x????', type: 'int*', isWild: true, dereferenced: true } },
      explanation: {
        text: '第 3 行：*wild = 42 写入随机地址',
        detail: '严重错误！野指针解引用会向随机地址写入数据，可能破坏其他变量、代码或导致程序崩溃。这是未定义行为。',
        actor: 'Kernel',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: { dangling: { value: '0x1000', type: 'int*', mallocSize: 100 } },
      explanation: {
        text: '第 5 行：malloc 分配 100 字节',
        detail: 'dangling = malloc(100) 正常分配内存。指针有效，可以安全使用。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4, 5],
      vars: { dangling: { value: '0x1000', type: 'int*', freed: true, isDangling: true } },
      explanation: {
        text: '第 6 行：free(dangling) 释放内存',
        detail: 'free 后内存返回给系统，但 dangling 指针仍保存原地址 0x1000。现在它是悬空指针。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 4, 5, 6],
      vars: { dangling: { value: '0x1000', type: 'int*', freed: true, isDangling: true, dereferenced: true } },
      explanation: {
        text: '第 7 行：*dangling = 100 使用已释放内存',
        detail: '危险！悬空指针解引用可能：1) 破坏其他数据 2) 导致崩溃 3) 看似正常工作但埋下隐患。这是未定义行为。',
        actor: 'Kernel',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [1, 2, 4, 5, 6, 9],
      vars: { local: { value: 10, type: 'int', address: '0x7ffc0000', zone: '栈区' } },
      explanation: {
        text: '第 10 行：函数内声明局部变量 local',
        detail: 'local 是栈区变量，函数返回时会被销毁。它的地址 0x7ffc0000 在函数结束后无效。',
        actor: 'CPU',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 10,
      executedLines: [1, 2, 4, 5, 6, 9, 10],
      vars: { local: { value: 10, type: 'int', address: '0x7ffc0000', zone: '栈区', invalidated: true } },
      explanation: {
        text: '第 11 行：返回&local 是悬空指针',
        detail: '严重错误！函数返回后栈内存被回收，返回的地址指向无效内存。调用者拿到的是悬空指针。',
        actor: 'CPU',
        icon: 'CircleX',
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
      question: 'free 后如何避免悬空指针？',
      options: [
        { text: '不要再使用该指针', feedback: '正确！但还需要更多措施。' },
        { text: 'free 后立即置为 NULL', feedback: '正确！NULL 指针解引用会立即崩溃，易于调试。' },
        { text: '重新赋值 malloc', feedback: '可行但浪费内存。' },
        { text: 'A 和 B 都对', feedback: '正确！不要使用 + 置为 NULL 是最佳实践。' }
      ],
      correctIndex: 3
    },
    {
      question: '为什么不能返回局部变量地址？',
      options: [
        { text: '编译错误', feedback: '错误！编译时无法检测。' },
        { text: '局部变量在函数返回后销毁', feedback: '正确！栈内存被回收，地址无效。' },
        { text: '返回值会被覆盖', feedback: '错误！与返回值无关。' },
        { text: '没有为什么，可以使用', feedback: '严重错误！绝对不能这样做。' }
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
      myth: 'free 后内存立即清零',
      truth: 'free 不修改内存内容，只是标记为可用。原数据可能暂时存在，但随时可能被覆盖。'
    },
    {
      myth: '悬空指针解引用会立即崩溃',
      truth: '不一定！可能看似正常工作，但埋下隐患。未定义行为最危险，因为难以调试。'
    },
    {
      myth: '返回局部变量地址可以工作',
      truth: '可能暂时"工作"，因为栈内存未被立即覆盖。但这是定时炸弹，随时可能崩溃。'
    }
  ],

  summary: {
    keyPoints: [
      '野指针：未初始化，指向随机地址',
      '悬空指针：指向已释放内存',
      '声明指针时必须初始化：int *p = NULL;',
      'free 后立即置为 NULL',
      '绝不返回局部变量地址'
    ],
    pitfalls: [
      '声明指针忘记初始化',
      'free 后继续使用指针',
      '返回函数局部变量的地址',
      '数组越界访问（也是悬空指针的一种）'
    ],
    transferQuestion: '如何修复 badFunc 函数？如果需要从函数返回数据，应该怎么做？'
  }
};
