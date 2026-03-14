window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-4',
    title: 'IO 多路复用',
    description: 'select/poll/epoll 的原理与性能对比'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<sys/epoll.h>' }
    ],
    [
      { type: 'cmt', text: '// 创建 epoll 实例' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'epfd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'epoll_create1' },
      { type: 'punc', text: '(' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 注册感兴趣的事件（只需一次）' }
    ],
    [
      { type: 'kw', text: 'struct' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'epoll_event' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'ev' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'ev' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'events' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EPOLLIN' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'ev' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'data' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'fd' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sockfd' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'epoll_ctl' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'epfd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'EPOLL_CTL_ADD' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sockfd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'ev' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 等待事件发生（只返回就绪的 fd）' }
    ],
    [
      { type: 'kw', text: 'struct' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'epoll_event' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'events' },
      { type: 'punc', text: '[' },
      { type: 'num', text: 'MAX_EVENTS' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'n' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'epoll_wait' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'epfd' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'events' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'MAX_EVENTS' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '-' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'epfd', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'ev', color: '#22c55e', appearStep: 2, type: 'struct epoll_event' },
    { name: 'sockfd', color: '#f59e0b', appearStep: 3, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 IO 多路复用',
        detail: 'IO 多路复用允许同时监视多个文件描述符。select/poll 需要遍历所有 fd（O(n)），epoll 只返回就绪的 fd（O(1)）。epoll 使用红黑树存储 fd，回调机制通知就绪。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: { epfd: { value: 3, type: 'int', description: 'epoll 实例 fd' } },
      explanation: {
        text: '第 3 行：epoll_create1 创建 epoll 实例',
        detail: 'epoll_create1 返回 epoll 实例的文件描述符。内核创建红黑树存储待监听的 fd，就绪链表存储就绪的 fd。',
        actor: 'Kernel',
        icon: 'Server',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [2, 4],
      vars: {
        epfd: { value: 3, type: 'int' },
        ev: { value: '{events: EPOLLIN, data.fd: ?}', type: 'struct epoll_event' }
      },
      explanation: {
        text: '第 5 行：声明 epoll_event 结构',
        detail: 'epoll_event 结构包含：events（感兴趣的事件类型）和 data（用户数据，通常是 fd）。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [2, 4, 5],
      vars: {
        epfd: { value: 3, type: 'int' },
        ev: { value: '{events: EPOLLIN, data.fd: sockfd}', type: 'struct epoll_event', events: 'EPOLLIN' }
      },
      explanation: {
        text: '第 6 行：设置事件类型为 EPOLLIN',
        detail: 'EPOLLIN 表示监听读就绪事件。其他事件：EPOLLOUT（写就绪）、EPOLLERR（错误）、EPOLLHUP（挂起）。',
        actor: 'CPU',
        icon: 'Settings',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 7,
      executedLines: [2, 4, 5, 6, 7],
      vars: {
        epfd: { value: 3, type: 'int' },
        ev: { value: '{events: EPOLLIN, data.fd: sockfd}', type: 'struct epoll_event', registered: true },
        sockfd: { value: 4, type: 'int', monitored: true }
      },
      explanation: {
        text: '第 8 行：epoll_ctl 注册 fd 到红黑树',
        detail: 'epoll_ctl(EPOLL_CTL_ADD) 将 sockfd 添加到红黑树。只需注册一次，之后 epoll_wait 自动返回就绪的 fd。时间复杂度 O(log n)。',
        actor: 'Kernel',
        icon: 'Plus',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [2, 4, 5, 6, 7, 9],
      vars: {
        epfd: { value: 3, type: 'int' },
        ev: { value: '{events: EPOLLIN, data.fd: sockfd}', type: 'struct epoll_event', registered: true },
        events: { value: '数组', type: 'struct epoll_event[MAX_EVENTS]', size: 'MAX_EVENTS' }
      },
      explanation: {
        text: '第 10 行：声明 events 数组',
        detail: 'events 数组用于接收 epoll_wait 返回的就绪事件。MAX_EVENTS 通常设置为 1024 或更大。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [2, 4, 5, 6, 7, 9, 10],
      vars: {
        epfd: { value: 3, type: 'int' },
        n: { value: 1, type: 'int', readyCount: 1 },
        events: { value: '[{fd: sockfd, events: EPOLLIN}]', type: 'struct epoll_event[]', ready: true }
      },
      explanation: {
        text: '第 11 行：epoll_wait 等待事件',
        detail: 'epoll_wait 阻塞直到有 fd 就绪。返回就绪事件的数量。关键优势：只返回就绪的 fd，无需遍历所有 fd！时间复杂度 O(1)。内核使用回调机制，fd 就绪时自动加入就绪链表。',
        actor: 'Kernel',
        icon: 'Clock',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: 'select/poll 的性能瓶颈是什么？',
      options: [
        { text: 'fd 数量限制', feedback: '部分正确（select 有 1024 限制），但不是主要瓶颈。' },
        { text: '每次调用都要遍历所有 fd', feedback: '正确！O(n) 复杂度，n 很大时性能急剧下降。' },
        { text: '系统调用开销大', feedback: '错误！epoll 也有系统调用开销。' },
        { text: '不支持边缘触发', feedback: '错误！与性能瓶颈无关。' }
      ],
      correctIndex: 1
    },
    {
      question: 'epoll 为什么比 select/poll 快？',
      options: [
        { text: '没有系统调用', feedback: '错误！epoll 也有系统调用。' },
        { text: '只返回就绪的 fd，无需遍历', feedback: '正确！O(1) 复杂度，fd 数量增加不影响性能。' },
        { text: '使用轮询机制', feedback: '错误！epoll 使用回调机制。' },
        { text: 'fd 数量更多', feedback: '部分正确，但不是主要原因。' }
      ],
      correctIndex: 1
    },
    {
      question: 'epoll 使用什么数据结构存储 fd？',
      options: [
        { text: '数组', feedback: '错误！这是 poll 的数据结构。' },
        { text: '链表', feedback: '错误！链表查找慢。' },
        { text: '红黑树', feedback: '正确！红黑树保证 O(log n) 的插入/删除/查找。' },
        { text: '哈希表', feedback: '错误！虽然哈希表也快，但 epoll 使用红黑树。' }
      ],
      correctIndex: 2
    }
  ],

  misconceptions: [
    {
      myth: 'epoll 没有系统调用开销',
      truth: 'epoll 有 3 个系统调用：epoll_create、epoll_ctl、epoll_wait。但 epoll_ctl 只需注册一次，epoll_wait 效率高。'
    },
    {
      myth: 'epoll 总是比 select/poll 好',
      truth: '对于少量 fd（<100）且活跃度高，select/poll 可能更快（无红黑树维护开销）。epoll 优势在大量 fd、低活跃度场景。'
    },
    {
      myth: 'epoll_wait 返回后可以直接读写',
      truth: '需要检查事件类型（EPOLLIN/EPOLLOUT）和错误（EPOLLERR/EPOLLHUP）。直接读写可能导致错误。'
    },
    {
      myth: 'epoll 只能用于网络 socket',
      truth: 'epoll 可以用于任何支持非阻塞 IO 的 fd：socket、pipe、eventfd、signalfd 等。'
    }
  ],

  summary: {
    keyPoints: [
      'select：fd_set 限制 1024，O(n) 遍历',
      'poll：数组存储 fd，仍需 O(n) 遍历',
      'epoll：红黑树存储 fd，O(1) 返回就绪',
      'epoll_ctl 注册事件（一次），epoll_wait 等待',
      'epoll 使用回调机制通知就绪'
    ],
    pitfalls: [
      '忘记设置非阻塞模式',
      'epoll_ctl 重复注册同一 fd',
      '未处理 EPOLLERR/EPOLLHUP 事件',
      '边缘触发（ET）模式下未读完数据'
    ],
    transferQuestion: 'epoll 的边缘触发（ET）和水平触发（LT）有什么区别？各自适用什么场景？'
  }
};
