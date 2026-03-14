window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-3',
    title: '线程与并发原理',
    description: 'POSIX 线程、互斥锁实现、缓存一致性 MESI 协议'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<pthread.h>' }
    ],
    [
      { type: 'cmt', text: '// 互斥锁保护共享数据' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'counter' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'pthread_mutex_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'worker' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'arg' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'pthread_mutex_lock' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'counter' },
      { type: 'op', text: '++' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 临界区：保护共享数据' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'pthread_mutex_unlock' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'kw', text: 'return' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ]
  ],

  varConfig: [
    { name: 'counter', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'mutex', color: '#22c55e', appearStep: 2, type: 'pthread_mutex_t' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示线程并发',
        detail: '线程共享代码段、数据段、堆、打开文件。线程私有：栈、寄存器、线程局部存储。线程切换比进程切换快（无需切换页表）。互斥锁使用 futex 实现高效同步。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: { counter: { value: 0, type: 'int', address: '0x601000', shared: true } },
      explanation: {
        text: '第 3 行：声明共享变量 counter=0',
        detail: 'counter 是全局变量，被所有线程共享。多线程并发修改会导致竞态条件（Race Condition），需要互斥锁保护。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        counter: { value: 0, type: 'int', address: '0x601000', shared: true },
        mutex: { value: 'PTHREAD_MUTEX_INITIALIZER', type: 'pthread_mutex_t', state: 'unlocked' }
      },
      explanation: {
        text: '第 4 行：声明互斥锁 mutex',
        detail: 'pthread_mutex_t 用于保护临界区。初始状态为解锁。线程竞争锁时，先尝试用户态自旋，失败后进入内核态等待（futex 机制）。',
        actor: 'CPU',
        icon: 'Lock',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [2, 3, 4],
      vars: {
        counter: { value: 0, type: 'int', address: '0x601000', shared: true },
        mutex: { value: 'PTHREAD_MUTEX_INITIALIZER', type: 'pthread_mutex_t', state: 'unlocked' }
      },
      explanation: {
        text: '第 5 行：定义线程函数 worker',
        detail: 'worker 函数是线程入口。每个线程执行相同代码，但通过参数 arg 区分不同线程。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'blue'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [2, 3, 4, 5],
      vars: {
        counter: { value: 0, type: 'int', address: '0x601000', shared: true },
        mutex: { value: 'PTHREAD_MUTEX_INITIALIZER', type: 'pthread_mutex_t', state: 'locked', owner: 'Thread-1' }
      },
      explanation: {
        text: '第 6 行：Thread-1 获取锁',
        detail: 'pthread_mutex_lock 尝试获取锁。futex 机制：先用户态自旋（短暂等待），失败后进入内核态等待。获取锁后进入临界区。',
        actor: 'CPU',
        icon: 'Lock',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [2, 3, 4, 5, 6],
      vars: {
        counter: { value: 1, type: 'int', address: '0x601000', shared: true },
        mutex: { value: 'PTHREAD_MUTEX_INITIALIZER', type: 'pthread_mutex_t', state: 'locked', owner: 'Thread-1' }
      },
      explanation: {
        text: '第 7 行：Thread-1 在临界区内 counter++',
        detail: '临界区内操作受保护，其他线程无法同时访问。counter 从 0 变为 1。如果没有锁，多线程并发++会导致数据不一致。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'purple'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [2, 3, 4, 5, 6, 7],
      vars: {
        counter: { value: 1, type: 'int', address: '0x601000', shared: true },
        mutex: { value: 'PTHREAD_MUTEX_INITIALIZER', type: 'pthread_mutex_t', state: 'unlocked' }
      },
      explanation: {
        text: '第 8 行：Thread-1 释放锁',
        detail: 'pthread_mutex_unlock 释放锁，唤醒等待的线程。临界区结束。',
        actor: 'CPU',
        icon: 'Unlock',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [2, 3, 4, 5, 6, 7, 8],
      vars: {
        counter: { value: 1, type: 'int', address: '0x601000', shared: true }
      },
      explanation: {
        text: '第 9 行：线程返回，退出',
        detail: '线程函数返回，线程终止。其他线程可以继续执行。',
        actor: 'CPU',
        icon: 'Check',
        color: 'blue'
      }
    }
  ],

  predictions: [
    {
      question: '线程切换为什么比进程切换快？',
      options: [
        { text: '线程更小', feedback: '不完全正确。' },
        { text: '无需切换页表', feedback: '正确！线程共享地址空间，无需切换页表、TLB 等。' },
        { text: '线程优先级高', feedback: '错误！与优先级无关。' },
        { text: '线程数量少', feedback: '错误！与数量无关。' }
      ],
      correctIndex: 1
    },
    {
      question: '互斥锁的 futex 机制是什么？',
      options: [
        { text: '纯用户态锁', feedback: '错误！futex 结合用户态和内核态。' },
        { text: '先自旋，失败后进入内核等待', feedback: '正确！避免频繁系统调用，提高性能。' },
        { text: '纯内核态锁', feedback: '错误！futex 优化了无竞争情况。' },
        { text: '自旋锁', feedback: '不完全，futex 不只是自旋。' }
      ],
      correctIndex: 1
    },
    {
      question: 'MESI 协议的作用是什么？',
      options: [
        { text: '提高 CPU 频率', feedback: '错误！与频率无关。' },
        { text: '保证多核缓存一致性', feedback: '正确！Modified/Exclusive/Shared/Invalid 状态保证一致性。' },
        { text: '减少内存使用', feedback: '错误！与内存使用无关。' },
        { text: '加速磁盘 IO', feedback: '错误！与磁盘无关。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '线程是轻量级的进程',
      truth: '线程和进程是不同概念。线程共享地址空间，进程有独立地址空间。线程切换更快，但并发编程更复杂（需要处理竞态条件）。'
    },
    {
      myth: '互斥锁总是进入内核态',
      truth: 'futex 优化了无竞争情况：先用户态自旋，失败后才进入内核态。这减少了系统调用开销。'
    },
    {
      myth: '伪共享不影响性能',
      truth: '伪共享：同一缓存行的独立变量被多核修改，导致缓存行频繁无效。性能可能下降 10 倍以上。解决方法：缓存行对齐（通常 64 字节）。'
    },
    {
      myth: '多线程一定比单线程快',
      truth: '多线程有锁竞争、上下文切换开销。对于 IO 密集型任务有效，CPU 密集型任务可能更慢（锁竞争）。'
    }
  ],

  summary: {
    keyPoints: [
      '线程共享：代码段、数据段、堆、打开文件',
      '线程私有：栈、寄存器、线程局部存储',
      '线程切换比进程快（无需切换页表）',
      'futex：用户态自旋 + 内核态等待',
      'MESI 协议保证多核缓存一致性'
    ],
    pitfalls: [
      '忘记加锁导致竞态条件',
      '锁粒度太大降低并发性能',
      '死锁：多个锁以不同顺序获取',
      '伪共享：同一缓存行的独立变量'
    ],
    transferQuestion: '如何避免伪共享？写出缓存行对齐的代码实现。'
  }
};
