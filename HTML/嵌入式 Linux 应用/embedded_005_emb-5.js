window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-5',
    title: '多线程编程',
    description: 'pthread_create、mutex、condition variable 详解'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<pthread.h>' }
    ],
    [
      { type: 'cmt', text: '// pthread_create - 创建线程' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'thread_func' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'arg' },
      { type: 'punc', text: ')' }
    ],
    [
      { type: 'punc', text: '{ /* 线程代码 */' },
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'kw', text: 'pthread_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'tid' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pthread_create' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'tid' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'thread_func' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// pthread_mutex - 互斥锁' }
    ],
    [
      { type: 'kw', text: 'pthread_mutex_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pthread_mutex_init' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pthread_mutex_lock' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 临界区 (Critical Section)' }
    ],
    [
      { type: 'id', text: 'pthread_mutex_unlock' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// pthread_cond - 条件变量' }
    ],
    [
      { type: 'kw', text: 'pthread_cond_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'cond' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pthread_cond_wait' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'cond' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'mutex' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pthread_cond_signal' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'cond' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'tid', color: '#3b82f6', appearStep: 2, type: 'pthread_t' },
    { name: 'mutex', color: '#22c55e', appearStep: 5, type: 'pthread_mutex_t' },
    { name: 'cond', color: '#f59e0b', appearStep: 8, type: 'pthread_cond_t' },
    { name: 'shared_data', color: '#8b5cf6', appearStep: 4, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示多线程编程',
        detail: 'Linux 多线程编程：pthread_create 创建线程，pthread_join 等待线程结束，mutex 互斥锁保护临界区，condition variable 条件变量实现线程同步。线程共享进程内存空间。',
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
        main_thread: { tid: 1001, type: 'pthread_t', state: 'running' }
      },
      explanation: {
        text: '主线程开始执行',
        detail: '每个进程至少有一个主线程。线程是 CPU 调度的基本单位。同一进程的线程共享代码段、数据段、文件描述符等资源。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 5,
      executedLines: [1, 5],
      vars: {
        tid: { value: 1002, type: 'pthread_t', created: true }
      },
      explanation: {
        text: '第 6 行：pthread_create 创建新线程',
        detail: 'pthread_create 创建新线程，执行 thread_func。参数：&tid(线程 ID)、NULL(属性)、thread_func(入口函数)、NULL(参数)。新线程与主线程并发执行。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 6,
      executedLines: [1, 5, 6],
      vars: {
        threads: { main: 1001, child: 1002, running: 2 }
      },
      explanation: {
        text: '两个线程并发执行',
        detail: '主线程 (1001) 和子线程 (1002) 同时执行。调度器决定执行顺序。线程切换比进程切换快（共享地址空间）。',
        actor: 'Kernel',
        icon: 'Cpu',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 7,
      executedLines: [1, 5, 6, 7],
      vars: {
        shared_data: { value: 0, type: 'int', shared: true },
        mutex: { value: 'unlocked', type: 'pthread_mutex_t' }
      },
      explanation: {
        text: '第 8 行：声明共享数据和互斥锁',
        detail: 'shared_data 被多个线程共享。无保护访问会导致竞态条件（race condition）。mutex 用于保护临界区，确保同一时刻只有一个线程访问。',
        actor: 'CPU',
        icon: 'Lock',
        color: 'yellow'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [1, 5, 6, 7, 9],
      vars: {
        mutex: { value: 'locked by thread 1002', type: 'pthread_mutex_t', owner: 1002 }
      },
      explanation: {
        text: '线程 A 获取互斥锁',
        detail: 'pthread_mutex_lock 获取锁。如果锁已被占用，调用线程阻塞等待。获取锁后进入临界区，其他线程无法获取同一锁。',
        actor: 'Kernel',
        icon: 'Lock',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 5, 6, 7, 9, 10],
      vars: {
        shared_data: { value: 1, type: 'int', modified_by: 1002 },
        mutex: { value: 'locked', owner: 1002 }
      },
      explanation: {
        text: '线程 A 在临界区修改共享数据',
        detail: '线程 A 执行 shared_data++。由于持有锁，线程 B 无法同时访问。临界区应尽可能短，减少锁竞争。',
        actor: 'CPU',
        icon: 'Calculator',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 11,
      executedLines: [1, 5, 6, 7, 9, 10, 11],
      vars: {
        mutex: { value: 'unlocked', type: 'pthread_mutex_t' },
        shared_data: { value: 1, type: 'int' }
      },
      explanation: {
        text: '线程 A 释放互斥锁',
        detail: 'pthread_mutex_unlock 释放锁。等待的其他线程（如线程 B）可获取锁。一次只有一个线程能持有锁。',
        actor: 'Kernel',
        icon: 'Unlock',
        color: 'green'
      }
    },
    {
      step: 8,
      line: 13,
      executedLines: [1, 5, 6, 7, 9, 10, 11, 13],
      vars: {
        cond: { value: 'waiting', type: 'pthread_cond_t', waiters: 0 }
      },
      explanation: {
        text: '第 14 行：初始化条件变量',
        detail: '条件变量用于线程同步：一个线程等待条件成立，另一个线程通知条件已满足。条件变量总是与互斥锁配合使用。',
        actor: 'Kernel',
        icon: 'Bell',
        color: 'green'
      }
    },
    {
      step: 9,
      line: 14,
      executedLines: [1, 5, 6, 7, 9, 10, 11, 13, 14],
      vars: {
        cond: { value: 'waiting', waiters: 1 },
        mutex: { value: 'unlocked', released_by_wait: true }
      },
      explanation: {
        text: '线程 B 调用 pthread_cond_wait 等待',
        detail: 'pthread_cond_wait 原子地释放锁并进入等待。当条件变量被 signal 时，重新获取锁并返回。等待期间其他线程可修改共享数据。',
        actor: 'Kernel',
        icon: 'Clock',
        color: 'purple'
      }
    },
    {
      step: 10,
      line: 15,
      executedLines: [1, 5, 6, 7, 9, 10, 11, 13, 14, 15],
      vars: {
        cond: { value: 'signaled', notified: true },
        mutex: { value: 'locked by woken thread' }
      },
      explanation: {
        text: '线程 A 调用 pthread_cond_signal 通知',
        detail: 'pthread_cond_signal 唤醒一个等待该条件的线程。被唤醒的线程重新竞争锁，获取锁后从 wait 返回继续执行。',
        actor: 'Kernel',
        icon: 'Bell',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: 'pthread_create 成功后，新线程何时开始执行？',
      options: [
        { text: '立即执行', feedback: '错误！由调度器决定。' },
        { text: '由调度器决定', feedback: '正确！可能在调用返回前或后。' },
        { text: 'pthread_create 返回后', feedback: '错误！可能更早。' },
        { text: '主线程结束后', feedback: '错误！并发执行。' }
      ],
      correctIndex: 1
    },
    {
      question: 'mutex 锁的作用是什么？',
      options: [
        { text: '提高性能', feedback: '错误！可能降低性能。' },
        { text: '保护临界区，防止竞态', feedback: '正确！确保互斥访问。' },
        { text: '同步线程执行顺序', feedback: '错误！这是条件变量的作用。' },
        { text: '避免死锁', feedback: '错误！使用不当反而导致死锁。' }
      ],
      correctIndex: 1
    },
    {
      question: 'pthread_cond_wait 为什么需要 mutex 参数？',
      options: [
        { text: '不需要，可以传 NULL', feedback: '错误！必须传 mutex。' },
        { text: '原子释放锁并等待', feedback: '正确！避免竞态条件。' },
        { text: '只是为了检查锁状态', feedback: '错误！有更深原因。' },
        { text: '历史原因', feedback: '错误！设计必需。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '线程比进程轻量，所以无限制创建',
      truth: '线程也有开销！每个线程需要栈空间（默认几 MB）。创建数千线程会导致内存耗尽。使用线程池限制数量。'
    },
    {
      myth: 'mutex 锁自动避免死锁',
      truth: ' mutex 使用不当会导致死锁！多个锁必须以固定顺序获取。使用 pthread_mutex_trylock 或超时避免无限等待。'
    },
    {
      myth: 'pthread_cond_signal 唤醒所有等待线程',
      truth: 'signal 只唤醒一个线程！pthread_cond_broadcast 才唤醒所有等待者。根据场景选择。'
    },
    {
      myth: '临界区可以调用任何函数',
      truth: '临界区应保持简短！避免在持有锁时调用阻塞函数（IO、网络请求）。这会降低并发性能。'
    }
  ],

  summary: {
    keyPoints: [
      'pthread_create 创建线程（并发执行）',
      'pthread_join 等待线程结束',
      'mutex 互斥锁保护临界区',
      'condition variable 条件变量同步',
      'pthread_cond_wait 原子释放锁并等待'
    ],
    pitfalls: [
      '忘记 pthread_mutex_unlock 导致死锁',
      '临界区过长降低并发性能',
      '多个锁顺序不一致导致死锁',
      'pthread_cond_wait 后未检查条件（虚假唤醒）'
    ],
    transferQuestion: '如何实现生产者 - 消费者模式？使用 mutex 和 condition variable 写出代码框架。'
  }
};
