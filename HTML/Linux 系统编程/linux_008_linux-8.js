window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-8',
    title: '性能分析与优化',
    description: '系统调用优化、缓存优化、锁优化、IO 优化'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 批量操作减少 syscall 次数' }
    ],
    [
      { type: 'cmt', text: '// 错误：多次小 IO 调用' }
    ],
    [
      { type: 'kw', text: 'for' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '1000' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'i' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'write' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: '[' },
      { type: 'id', text: 'i' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 1000 次 syscall！' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// 正确：批量 IO' }
    ],
    [
      { type: 'id', text: 'write' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'sizeof' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 1 次 syscall' }
    ],
    [
      { type: 'cmt', text: '// 缓存行对齐避免伪共享' }
    ],
    [
      { type: 'kw', text: 'struct' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'alignas' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '64' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'CacheAligned' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'counter1' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 独占缓存行' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'counter2' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 独占缓存行' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'fd', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'buf', color: '#22c55e', appearStep: 2, type: 'int[1000]' },
    { name: 'CacheAligned', color: '#f59e0b', appearStep: 5, type: 'struct' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示性能优化技术',
        detail: 'Linux 性能优化：系统调用优化（批量操作）、缓存优化（缓存行对齐、避免伪共享）、锁优化（减小临界区、读写锁）、IO 优化（epoll、异步 IO）。理解底层原理才能写出高效代码。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: {},
      explanation: {
        text: '场景 1：多次小 IO 调用（错误示例）',
        detail: '循环内调用 write，每次写入一个 int。1000 次迭代 = 1000 次系统调用。每次 syscall 开销约 100-200ns，总开销约 100-200μs。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        fd: { value: 3, type: 'int' },
        syscall_count: { value: 1, type: 'int', cumulative: 1000 }
      },
      explanation: {
        text: '第 4 行：循环内 write 调用',
        detail: '每次 write 都是系统调用：用户态→内核态切换、参数拷贝、实际写入、返回。1000 次小 IO 调用性能极差。',
        actor: 'Kernel',
        icon: 'Clock',
        color: 'red'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [2, 3, 5],
      vars: {
        fd: { value: 3, type: 'int' },
        buf: { value: '数组', type: 'int[1000]', size: 4000 }
      },
      explanation: {
        text: '场景 2：批量 IO（正确做法）',
        detail: '一次 write 写入整个缓冲区。1 次系统调用 vs 1000 次，性能提升 100 倍！缓冲区大小 4000 字节（1000 * 4）。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [2, 3, 5, 6],
      vars: {
        fd: { value: 3, type: 'int' },
        syscall_count: { value: 1, type: 'int', optimized: true }
      },
      explanation: {
        text: '第 7 行：批量 write 只需 1 次 syscall',
        detail: '批量 IO 原理：减少系统调用次数。类似技术：writev/readv（分散/聚集 IO）、mmap（零拷贝）。',
        actor: 'Kernel',
        icon: 'TrendingUp',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [2, 3, 5, 6, 8],
      vars: {
        CacheAligned: {
          counter1: { offset: 0, cacheLine: 0, size: 64 },
          counter2: { offset: 64, cacheLine: 1, size: 64 }
        }
      },
      explanation: {
        text: '场景 3：缓存行对齐结构',
        detail: 'alignas(64) 确保结构成员独占缓存行（64 字节）。counter1 和 counter2 分别在不同缓存行，避免伪共享。多核并发修改时互不干扰。',
        actor: 'CPU',
        icon: 'CPU',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [2, 3, 5, 6, 8, 9],
      vars: {
        counter1: { value: 0, type: 'int', cacheLine: 0, core: 'Core-0' },
        counter2: { value: 0, type: 'int', cacheLine: 1, core: 'Core-1' }
      },
      explanation: {
        text: '第 10 行：counter1 独占缓存行',
        detail: 'Core-0 修改 counter1 只影响缓存行 0。Core-1 可以同时修改 counter2（缓存行 1），无需缓存一致性同步。性能提升 10 倍以上。',
        actor: 'CPU',
        icon: 'Core',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 10,
      executedLines: [2, 3, 5, 6, 8, 9, 10],
      vars: {
        counter2: { value: 0, type: 'int', cacheLine: 1, core: 'Core-1' }
      },
      explanation: {
        text: '第 11 行：counter2 独占缓存行',
        detail: '伪共享（False Sharing）：两个独立变量在同一缓存行，多核修改时互相失效缓存行。解决：缓存行对齐（padding、alignas）。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '如何减少系统调用开销？',
      options: [
        { text: '使用更快的 CPU', feedback: '错误！CPU 速度不影响 syscall 开销。' },
        { text: '批量操作减少 syscall 次数', feedback: '正确！一次 syscall 处理更多数据。' },
        { text: '使用多线程', feedback: '错误！多线程不减少 syscall 次数。' },
        { text: '增加内存', feedback: '错误！与内存大小无关。' }
      ],
      correctIndex: 1
    },
    {
      question: '伪共享（False Sharing）是什么？',
      options: [
        { text: '共享内存导致的性能问题', feedback: '错误！' },
        { text: '同一缓存行的独立变量被多核修改', feedback: '正确！导致缓存行频繁无效，性能下降。' },
        { text: '线程共享锁', feedback: '错误！' },
        { text: '进程共享文件', feedback: '错误！' }
      ],
      correctIndex: 1
    },
    {
      question: '缓存行大小通常是多少？',
      options: [
        { text: '32 字节', feedback: '错误！现代 CPU 通常是 64 字节。' },
        { text: '64 字节', feedback: '正确！Intel/AMD现代CPU缓存行大小为64字节。' },
        { text: '128 字节', feedback: '错误！' },
        { text: '256 字节', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '系统调用越快越好',
      truth: '系统调用开销相对固定（100-200ns）。优化方向是减少调用次数，而不是优化单次调用。'
    },
    {
      myth: '多线程总是提高性能',
      truth: '多线程有锁竞争、上下文切换开销。对于 IO 密集型有效，CPU 密集型可能更慢（锁竞争、伪共享）。'
    },
    {
      myth: '缓存优化不重要',
      truth: '缓存性能影响巨大！缓存命中率差 10%，程序性能可能下降 50% 以上。缓存行对齐、数据局部性至关重要。'
    },
    {
      myth: 'epoll 总是比 select 快',
      truth: 'epoll 优势在大量 fd、低活跃度场景。少量 fd（<100）且活跃度高时，select 可能更快（无红黑树维护开销）。'
    }
  ],

  summary: {
    keyPoints: [
      '批量操作减少 syscall 次数（1000 次→1 次）',
      '缓存行对齐（64 字节）避免伪共享',
      'epoll 替代 select/poll（高并发）',
      '异步 IO（aio/io_uring）进一步提升性能',
      '直接 IO 绕过页缓存（特定场景）'
    ],
    pitfalls: [
      '循环内多次小 IO 调用',
      '忽略缓存行对齐导致伪共享',
      '锁粒度过大降低并发性能',
      '在不适用场景使用 epoll'
    ],
    transferQuestion: '如何设计一个高性能的并发服务器？列出关键优化点。'
  }
};
