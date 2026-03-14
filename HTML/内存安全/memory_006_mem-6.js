window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-6',
    title: '双重释放',
    description: 'double free 和 use-after-free 的危害与预防'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 场景 1：双重释放 (Double Free)' }
    ],
    [
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
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 第一次释放' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 双重释放！崩溃！' }
    ],
    [
      { type: 'cmt', text: '// 场景 2：释放后使用 (Use-After-Free)' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'str' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'malloc' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '50' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'strcpy' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"hello"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 释放内存' }
    ],
    [
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"%s"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'str' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 危险！使用已释放内存' }
    ],
    [
      { type: 'cmt', text: '// 正确做法：free 后置为 NULL' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'p' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'free' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'p' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 安全！free(NULL) 无操作' }
    ]
  ],

  varConfig: [
    { name: 'p', color: '#ef4444', appearStep: 1, type: 'int*' },
    { name: 'str', color: '#f59e0b', appearStep: 4, type: 'char*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示双重释放问题',
        detail: '双重释放（Double Free）是对同一块内存调用两次 free。释放后使用（Use-After-Free）是访问已释放内存。两者都会导致严重错误和安全漏洞。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: { p: { value: '0x1000', type: 'int*', mallocSize: 100 } },
      explanation: {
        text: '第 2 行：malloc 分配 100 字节',
        detail: 'p 指向新分配的堆内存 0x1000。这是正常的内存分配。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: { p: { value: '0x1000', type: 'int*', freed: true } },
      explanation: {
        text: '第 3 行：free(p) 第一次释放',
        detail: '内存 0x1000 被释放回系统。p 仍保存地址 0x1000，但已成为悬空指针。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2, 3],
      vars: { p: { value: '0x1000', type: 'int*', freed: true, doubleFree: true } },
      explanation: {
        text: '第 4 行：free(p) 双重释放！',
        detail: '严重错误！对已释放内存再次调用 free。内存管理器元数据被破坏，通常导致程序立即崩溃（Segmentation Fault）。',
        actor: 'Kernel',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 3, 5],
      vars: { str: { value: '0x2000', type: 'char*', mallocSize: 50 } },
      explanation: {
        text: '场景 2：malloc 分配 50 字节',
        detail: 'str 指向新分配的堆内存，用于存储字符串。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 5, 6],
      vars: { str: { value: '0x2000', type: 'char*', mallocSize: 50, content: '"hello"' } },
      explanation: {
        text: '第 7 行：strcpy 复制字符串',
        detail: 'strcpy 将"hello"复制到 str 指向的内存。正常操作。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 3, 5, 6, 7],
      vars: { str: { value: '0x2000', type: 'char*', freed: true } },
      explanation: {
        text: '第 8 行：free(str) 释放内存',
        detail: '内存 0x2000 被释放。str 成为悬空指针，但仍保存原地址。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 5, 6, 7, 8],
      vars: { str: { value: '0x2000', type: 'char*', freed: true, usedAfterFree: true } },
      explanation: {
        text: '第 9 行：printf(str) 释放后使用！',
        detail: '危险！访问已释放内存是未定义行为。可能：1) 读到老数据 2) 读到垃圾值 3) 程序崩溃 4) 安全漏洞。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 8,
      line: 10,
      executedLines: [1, 2, 3, 5, 6, 7, 8, 10],
      vars: { p: { value: 'NULL', type: 'int*', freed: true, nullified: true } },
      explanation: {
        text: '正确做法：free 后立即置为 NULL',
        detail: 'p = NULL 使指针成为空指针。再次 free(NULL) 是安全的（无操作）。这防止了双重释放和悬空指针。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    },
    {
      step: 9,
      line: 11,
      executedLines: [1, 2, 3, 5, 6, 7, 8, 10, 11],
      vars: { p: { value: 'NULL', type: 'int*', freed: true, nullified: true } },
      explanation: {
        text: 'free(NULL) 是安全的',
        detail: 'C 标准规定 free(NULL) 不执行任何操作。这提供了安全保障：即使误调用也不会崩溃。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '双重释放会导致什么后果？',
      options: [
        { text: '没有任何问题', feedback: '错误！双重释放是严重错误。' },
        { text: '内存泄漏', feedback: '不完全，主要是破坏内存管理器。' },
        { text: '程序崩溃或安全漏洞', feedback: '正确！破坏堆元数据，可被黑客利用。' },
        { text: '编译错误', feedback: '错误！编译时无法检测。' }
      ],
      correctIndex: 2
    },
    {
      question: '如何防止悬空指针？',
      options: [
        { text: '不要再使用它', feedback: '正确！但还需要更多措施。' },
        { text: 'free 后立即置为 NULL', feedback: '正确！NULL 指针解引用会立即崩溃，易于调试。' },
        { text: '重新 malloc', feedback: '可行但浪费。' },
        { text: 'A 和 B 都对', feedback: '正确！不使用 + 置为 NULL 是最佳实践。' }
      ],
      correctIndex: 3
    },
    {
      question: 'free(NULL) 的结果是什么？',
      options: [
        { text: '崩溃', feedback: '错误！C 标准规定无操作。' },
        { text: '无操作（安全）', feedback: '正确！free(NULL) 是定义的，不做任何事情。' },
        { text: '内存泄漏', feedback: '错误！没有分配新内存。' },
        { text: '未定义行为', feedback: '错误！标准明确定义。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'free 后指针自动变 NULL',
      truth: 'free 不修改指针值！必须手动 p = NULL。否则指针仍保存原地址，成为悬空指针。'
    },
    {
      myth: '双重释放只是浪费性能',
      truth: '严重错误！破坏堆管理器元数据，导致崩溃。黑客可利用此漏洞执行任意代码。'
    },
    {
      myth: '释放后使用只是读到老数据',
      truth: '未定义行为！可能看似正常工作，但内存可能已被重新分配给其他用途，导致数据损坏或安全漏洞。'
    },
    {
      myth: '只有新手会犯 double free',
      truth: '复杂代码中很常见！多条执行路径、错误处理、回调函数都可能导致意外双重释放。'
    }
  ],

  summary: {
    keyPoints: [
      '双重释放：对同一内存调用两次 free',
      '释放后使用：访问已释放的内存',
      'free 后立即置为 NULL',
      'free(NULL) 是安全的（无操作）',
      '使用工具检测：valgrind、AddressSanitizer'
    ],
    pitfalls: [
      '错误处理路径中重复释放',
      '多个指针指向同一块内存',
      '释放后忘记置为 NULL',
      '回调函数中意外释放已释放内存'
    ],
    transferQuestion: '如果有多个指针指向同一块 malloc 内存，应该如何正确释放？'
  }
};
