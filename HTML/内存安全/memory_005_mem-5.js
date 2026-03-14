window.LESSON_DATA = {
  meta: {
    chapter: 'memory',
    lessonId: 'mem-5',
    title: '缓冲区溢出',
    description: '数组越界、字符串溢出、栈溢出的原理与危害'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 场景 1：数组越界写入' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '3' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'arr' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ']' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '100' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 越界！最大下标是 4' }
    ],
    [
      { type: 'cmt', text: '// 场景 2：字符串缓冲区溢出' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '6' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'strcpy' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Hello World"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 11 字符 +\\\\0=12>6，溢出！' }
    ],
    [
      { type: 'cmt', text: '// 场景 3：栈溢出（递归无终止）' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'overflow' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'overflow' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 无限递归！' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'arr[0]', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'arr[1]', color: '#22c55e', appearStep: 1, type: 'int' },
    { name: 'arr[2]', color: '#f59e0b', appearStep: 1, type: 'int' },
    { name: 'arr[3]', color: '#ef4444', appearStep: 1, type: 'int' },
    { name: 'arr[4]', color: '#8b5cf6', appearStep: 1, type: 'int' },
    { name: 'buf', color: '#06b6d4', appearStep: 3, type: 'char[6]' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示缓冲区溢出',
        detail: '缓冲区溢出是指向缓冲区写入超过其容量的数据。后果：破坏其他数据、程序崩溃、安全漏洞（黑客可注入恶意代码）。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: {
        'arr[0]': { value: 1, type: 'int', address: '0x7ffc0000' },
        'arr[1]': { value: 2, type: 'int', address: '0x7ffc0004' },
        'arr[2]': { value: 3, type: 'int', address: '0x7ffc0008' },
        'arr[3]': { value: 4, type: 'int', address: '0x7ffc000c' },
        'arr[4]': { value: 5, type: 'int', address: '0x7ffc0010' }
      },
      explanation: {
        text: '第 2 行：声明并初始化数组 arr[5]',
        detail: 'int arr[5] 分配 5 个连续 int（20 字节）。合法下标：0-4。arr[5] 越界！',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        'arr[0]': { value: 1, type: 'int', address: '0x7ffc0000' },
        'arr[1]': { value: 2, type: 'int', address: '0x7ffc0004' },
        'arr[2]': { value: 3, type: 'int', address: '0x7ffc0008' },
        'arr[3]': { value: 4, type: 'int', address: '0x7ffc000c' },
        'arr[4]': { value: 5, type: 'int', address: '0x7ffc0010' },
        'arr[5]': { value: 100, type: 'int', address: '0x7ffc0014', overflow: true }
      },
      explanation: {
        text: '第 3 行：arr[5] = 100 数组越界',
        detail: '严重错误！arr[5] 超出数组范围，写入相邻内存。可能覆盖其他变量、返回地址或代码。这是未定义行为。',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [1, 2, 4],
      vars: { buf: { value: '(垃圾值)', type: 'char[6]', address: '0x7ffc1000', size: 6 } },
      explanation: {
        text: '第 5 行：声明缓冲区 buf[6]',
        detail: 'char buf[6] 只能容纳 6 个字符（包括\\0）。超过 6 字符的字符串会导致溢出。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [1, 2, 4, 5],
      vars: { buf: { value: '"Hello World"', type: 'char[6]', address: '0x7ffc1000', size: 6, actualLength: 12, overflow: true } },
      explanation: {
        text: '第 6 行：strcpy 导致缓冲区溢出',
        detail: '"Hello World" 长 11 字符 + \\0 = 12 字节，但 buf 只有 6 字节。多余 6 字节写入相邻内存，破坏数据！',
        actor: 'CPU',
        icon: 'CircleX',
        color: 'red'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [1, 2, 4, 5, 7],
      vars: {},
      explanation: {
        text: '第 8 行：定义无限递归函数',
        detail: 'overflow 函数调用自己，没有终止条件。每次调用在栈区分配栈帧，栈区迅速耗尽。',
        actor: 'CPU',
        icon: 'Function',
        color: 'yellow'
      }
    },
    {
      step: 6,
      line: 8,
      executedLines: [1, 2, 4, 5, 7, 8],
      vars: { stackFrame: { count: '∞', status: 'overflow', zone: '栈区' } },
      explanation: {
        text: '第 9 行：无限递归导致栈溢出',
        detail: '每次函数调用在栈区分配空间。无限递归使栈区耗尽，触发 Stack Overflow 错误，程序崩溃。',
        actor: 'Kernel',
        icon: 'CircleX',
        color: 'red'
      }
    }
  ],

  predictions: [
    {
      question: 'int arr[5] 的最大合法下标是多少？',
      options: [
        { text: '5', feedback: '错误！下标从 0 开始，最大下标是长度 -1。' },
        { text: '4', feedback: '正确！下标范围 0-4。arr[5] 越界！' },
        { text: '3', feedback: '错误！arr[4] 也是合法的。' },
        { text: '6', feedback: '错误！严重越界。' }
      ],
      correctIndex: 1
    },
    {
      question: '如何安全地复制字符串到 buf[6]？',
      options: [
        { text: 'strcpy(buf, src)', feedback: '错误！strcpy 不检查边界。' },
        { text: 'strncpy(buf, src, 5)', feedback: '正确！strncpy 限制复制长度，留 1 字节给\\0。' },
        { text: 'buf = src', feedback: '错误！数组不能直接赋值。' },
        { text: 'memcpy(buf, src, 100)', feedback: '错误！更危险，直接复制 100 字节。' }
      ],
      correctIndex: 1
    },
    {
      question: '栈溢出的原因是什么？',
      options: [
        { text: 'malloc 太大', feedback: '错误！malloc 分配的是堆区。' },
        { text: '无限递归或大局部变量', feedback: '正确！递归耗尽栈区，或大数组超过栈限制。' },
        { text: '数组越界', feedback: '不完全，数组越界是另一种问题。' },
        { text: 'free 重复释放', feedback: '错误！这是双重释放问题。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '数组越界会编译错误',
      truth: 'C 语言不做数组边界检查！越界访问可以编译通过，但运行时是未定义行为。'
    },
    {
      myth: '缓冲区溢出只是崩溃而已',
      truth: '严重！黑客可以利用溢出注入恶意代码、劫持程序控制。这是最常见安全漏洞之一。'
    },
    {
      myth: 'strcpy 是安全的',
      truth: 'strcpy 不检查目标缓冲区大小！必须用 strncpy 或 snprintf 等安全函数。'
    },
    {
      myth: '栈溢出只发生在递归',
      truth: '大局部变量（如 char buf[10MB]）也会导致栈溢出。栈区通常只有 8MB。'
    }
  ],

  summary: {
    keyPoints: [
      '数组下标范围：0 到 length-1',
      'strcpy 不检查边界，使用 strncpy',
      '栈溢出：无限递归或大局部变量',
      '缓冲区溢出可导致安全漏洞',
      '始终验证输入长度再复制'
    ],
    pitfalls: [
      '数组下标越界（off-by-one 错误）',
      '用 strcpy 复制长字符串',
      'scanf 不限制输入长度',
      '递归没有终止条件或过深'
    ],
    transferQuestion: '如何用安全的方式读取用户输入到 char buf[100]？写出正确代码。'
  }
};
