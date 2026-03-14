window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-1',
    title: '内存布局',
    description: 'C 语言程序的内存分区：栈区、堆区、数据段、代码段'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// C 程序内存布局（从高地址到低地址）' }
    ],
    [
      { type: 'cmt', text: '// +----------------+ <- 高地址' }
    ],
    [
      { type: 'cmt', text: '// |    栈区 Stack    |  自动变量、函数调用' }
    ],
    [
      { type: 'cmt', text: '// +----------------+' }
    ],
    [
      { type: 'cmt', text: '// |    堆区 Heap     |  动态分配 (malloc)' }
    ],
    [
      { type: 'cmt', text: '// +----------------+' }
    ],
    [
      { type: 'cmt', text: '// |   数据段 Data    |  全局变量、静态变量' }
    ],
    [
      { type: 'cmt', text: '// +----------------+' }
    ],
    [
      { type: 'cmt', text: '// |   代码段 Code    |  程序代码、常量' }
    ],
    [
      { type: 'cmt', text: '// +----------------+ <- 低地址' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'global' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 全局变量 -> 数据段' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'func' },
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
      { type: 'num', text: '20' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 局部变量 -> 栈区' }
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
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 动态分配 -> 堆区' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'global', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'local', color: '#22c55e', appearStep: 2, type: 'int' },
    { name: 'p', color: '#f59e0b', appearStep: 3, type: 'int*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示内存布局',
        detail: 'C 语言程序内存分为 4 个区域：栈区（Stack）、堆区（Heap）、数据段（Data）、代码段（Code）。理解内存布局对编写安全代码至关重要。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 10,
      executedLines: [10],
      vars: { global: { value: 100, type: 'int', address: '0x601000', zone: '数据段' } },
      explanation: {
        text: '第 11 行：全局变量 global 存储在数据段',
        detail: '全局变量和静态变量存储在数据段，生命周期贯穿整个程序运行期。global 初始值为 100，地址固定。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 12,
      executedLines: [10, 12],
      vars: {
        global: { value: 100, type: 'int', address: '0x601000', zone: '数据段' },
        local: { value: 20, type: 'int', address: '0x7ffc0000', zone: '栈区' }
      },
      explanation: {
        text: '第 13 行：局部变量 local 存储在栈区',
        detail: '函数内的局部变量存储在栈区，由编译器自动管理。函数调用时分配，返回时释放。栈区大小有限（通常约 8MB）。',
        actor: 'CPU',
        icon: 'Function',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 13,
      executedLines: [10, 12, 13],
      vars: {
        global: { value: 100, type: 'int', address: '0x601000', zone: '数据段' },
        local: { value: 20, type: 'int', address: '0x7ffc0000', zone: '栈区' },
        p: { value: '0x1000000', type: 'int*', address: '0x7ffc0004', zone: '堆区', mallocSize: 100 }
      },
      explanation: {
        text: '第 14 行：malloc 分配 100 字节堆内存',
        detail: 'malloc 从堆区分配内存，返回首地址给指针 p。堆区内存需手动释放（free），否则会导致内存泄漏。堆区空间较大（GB 级别）。',
        actor: 'Kernel',
        icon: 'Pointer',
        color: 'purple'
      }
    },
    {
      step: 4,
      line: 14,
      executedLines: [10, 12, 13, 14],
      vars: {
        global: { value: 100, type: 'int', address: '0x601000', zone: '数据段' }
      },
      explanation: {
        text: '函数返回，栈区变量 local 被销毁',
        detail: '函数结束时，栈区局部变量 local 和指针 p 自动销毁。但堆区内存不会自动释放，必须显式调用 free(p)。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '局部变量存储在哪个内存区域？',
      options: [
        { text: '堆区', feedback: '错误！堆区用于动态内存分配。' },
        { text: '栈区', feedback: '正确！局部变量由编译器自动管理，存储在栈区。' },
        { text: '数据段', feedback: '错误！数据段存储全局变量和静态变量。' },
        { text: '代码段', feedback: '错误！代码段存储程序指令。' }
      ],
      correctIndex: 1
    },
    {
      question: 'malloc 分配的内存位于哪个区域？',
      options: [
        { text: '栈区', feedback: '错误！栈区由编译器自动管理。' },
        { text: '数据段', feedback: '错误！数据段用于全局变量。' },
        { text: '堆区', feedback: '正确！malloc/calloc/realloc 从堆区分配内存。' },
        { text: '代码段', feedback: '错误！代码段是只读的。' }
      ],
      correctIndex: 2
    },
    {
      question: '哪个区域需要手动释放？',
      options: [
        { text: '栈区', feedback: '错误！栈区自动释放。' },
        { text: '数据段', feedback: '错误！数据段生命周期与程序相同。' },
        { text: '堆区', feedback: '正确！堆区内存必须用 free 手动释放。' },
        { text: '代码段', feedback: '错误！代码段不可修改。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: '栈区和堆区一样大',
      truth: '栈区通常较小（约 8MB），而堆区可以很大（GB 级别）。栈区过大会导致栈溢出（Stack Overflow）。'
    },
    {
      myth: '函数返回后堆区内存自动释放',
      truth: '堆区内存不会自动释放！函数返回后，指向堆内存的指针消失，但内存仍然存在，导致内存泄漏。'
    },
    {
      myth: '全局变量和局部变量存储位置相同',
      truth: '全局变量存储在数据段，生命周期贯穿程序；局部变量在栈区，函数结束即销毁。'
    }
  ],

  summary: {
    keyPoints: [
      '栈区（Stack）：局部变量、函数调用，自动管理',
      '堆区（Heap）：动态分配 (malloc)，需手动释放',
      '数据段（Data）：全局变量、静态变量',
      '代码段（Code）：程序指令、常量，只读',
      '栈区约 8MB，堆区可达 GB 级别'
    ],
    pitfalls: [
      '忘记释放 malloc 分配的堆内存导致泄漏',
      '栈区分配过大数组导致栈溢出',
      '混淆各内存区域的生命周期'
    ],
    transferQuestion: '如果一个程序需要存储 100 万个整数的数组，应该使用栈区还是堆区？为什么？'
  }
};
