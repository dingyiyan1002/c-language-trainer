window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-5',
    title: '进程间通信原理',
    description: '管道、共享内存、Unix Domain Socket、消息队列对比'
  },

  codeLines: [
    [
      { type: 'cmt', text: '// 管道：基于内核缓冲区的单向通信' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'pipefd' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pipe' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pipefd' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// pipefd[0]=读端，pipefd[1]=写端' }
    ],
    [
      { type: 'id', text: 'write' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pipefd' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '1' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"hello"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'read' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pipefd' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'buf' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '5' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 共享内存：最快的 IPC（无数据拷贝）' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'shmid' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'shmget' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'key' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '4096' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'IPC_CREAT' },
      { type: 'punc', text: '|' },
      { type: 'id', text: '0666' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'char' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '*' },
      { type: 'id', text: 'shm' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'shmat' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'shmid' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'strcpy' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'shm' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"shared data"' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 直接写入共享内存' }
    ]
  ],

  varConfig: [
    { name: 'pipefd[0]', color: '#3b82f6', appearStep: 1, type: 'int' },
    { name: 'pipefd[1]', color: '#22c55e', appearStep: 1, type: 'int' },
    { name: 'shmid', color: '#f59e0b', appearStep: 4, type: 'int' },
    { name: 'shm', color: '#8b5cf6', appearStep: 5, type: 'char*' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示进程间通信（IPC）',
        detail: 'IPC 机制对比：管道（基于内核缓冲区，有数据拷贝）、共享内存（最快，无拷贝）、Unix Domain Socket（可传递 fd）、消息队列（内核维护链表）。选择 IPC 需权衡性能、复杂度、同步需求。',
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
        'pipefd[0]': { value: '未定义', type: 'int', description: '读端' },
        'pipefd[1]': { value: '未定义', type: 'int', description: '写端' }
      },
      explanation: {
        text: '第 2 行：声明管道文件描述符数组',
        detail: 'pipefd[2] 存储两个 fd：pipefd[0] 是读端，pipefd[1] 是写端。管道是单向通信。',
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
        'pipefd[0]': { value: 3, type: 'int', description: '读端', kernelBuffer: '4KB-64KB' },
        'pipefd[1]': { value: 4, type: 'int', description: '写端' }
      },
      explanation: {
        text: '第 3 行：pipe() 创建匿名管道',
        detail: 'pipe 系统调用创建内核缓冲区（通常 4KB-64KB）。pipefd[0] 读端，pipefd[1] 写端。数据流向：用户→内核缓冲区→用户。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2, 3],
      vars: {
        'pipefd[0]': { value: 3, type: 'int' },
        'pipefd[1]': { value: 4, type: 'int' },
        'pipe_buffer': { value: '"hello"', size: 5, type: 'kernel_buffer' }
      },
      explanation: {
        text: '第 4 行：write 写入管道',
        detail: '数据"hello"从用户缓冲区拷贝到内核管道缓冲区。写操作阻塞直到有读者读取（如果缓冲区满）。',
        actor: 'Kernel',
        icon: 'Upload',
        color: 'purple'
      }
    },
    {
      step: 4,
      line: 4,
      executedLines: [1, 2, 3, 4],
      vars: {
        'pipefd[0]': { value: 3, type: 'int' },
        'pipefd[1]': { value: 4, type: 'int' },
        'buf': { value: '"hello"', type: 'char[5]', received: true }
      },
      explanation: {
        text: '第 5 行：read 从管道读取',
        detail: '数据从内核管道缓冲区拷贝到用户缓冲区。读操作阻塞直到有数据（如果缓冲区空）。管道通信完成：用户→内核→用户，2 次数据拷贝。',
        actor: 'Kernel',
        icon: 'Download',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 6,
      executedLines: [1, 2, 3, 4, 6],
      vars: {
        shmid: { value: 65536, type: 'int', size: 4096, key: 'key' }
      },
      explanation: {
        text: '第 7 行：shmget 创建共享内存段',
        detail: 'shmget 创建或获取共享内存段，返回标识符 shmid。大小 4096 字节，权限 0666（所有进程可访问）。共享内存是物理内存映射到多个进程地址空间。',
        actor: 'Kernel',
        icon: 'Server',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 7,
      executedLines: [1, 2, 3, 4, 6, 7],
      vars: {
        shmid: { value: 65536, type: 'int' },
        shm: { value: '0x7f000000', type: 'char*', mapped: true, shared: true }
      },
      explanation: {
        text: '第 8 行：shmat 附加共享内存到地址空间',
        detail: 'shmat 将共享内存段附加到进程地址空间，返回指针 shm。进程可以直接读写 shm 指针访问共享内存，无需系统调用！',
        actor: 'Kernel',
        icon: 'Link',
        color: 'purple'
      }
    },
    {
      step: 7,
      line: 8,
      executedLines: [1, 2, 3, 4, 6, 7, 8],
      vars: {
        shm: { value: '0x7f000000', type: 'char*', content: '"shared data"', shared: true }
      },
      explanation: {
        text: '第 9 行：strcpy 直接写入共享内存',
        detail: '共享内存优势：无数据拷贝！进程 A 写入 shm，进程 B 可以直接读取。但需要同步机制（mutex/信号量）避免竞态条件。这是最快的 IPC。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '哪种 IPC 机制最快？',
      options: [
        { text: '管道', feedback: '错误！管道有 2 次数据拷贝。' },
        { text: '共享内存', feedback: '正确！共享内存无数据拷贝，直接访问同一物理内存。' },
        { text: '消息队列', feedback: '错误！消息队列也有拷贝开销。' },
        { text: 'Unix Domain Socket', feedback: '错误！UDS 也有拷贝。' }
      ],
      correctIndex: 1
    },
    {
      question: '管道通信的数据拷贝次数是多少？',
      options: [
        { text: '0 次', feedback: '错误！共享内存才是 0 次。' },
        { text: '1 次', feedback: '错误！' },
        { text: '2 次', feedback: '正确！写：用户→内核，读：内核→用户。' },
        { text: '3 次', feedback: '错误！' }
      ],
      correctIndex: 2
    },
    {
      question: '共享内存的主要缺点是什么？',
      options: [
        { text: '速度慢', feedback: '错误！共享内存最快。' },
        { text: '需要同步机制', feedback: '正确！多进程同时访问需要 mutex/信号量同步。' },
        { text: '大小有限制', feedback: '部分正确，但不是主要缺点。' },
        { text: '只能用于相关进程', feedback: '错误！不相关的进程也可以用共享内存。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '管道可以双向通信',
      truth: '普通管道是单向的。双向通信需要两个管道（一个读、一个写）或使用命名管道（FIFO）。'
    },
    {
      myth: '共享内存自动同步',
      truth: '共享内存没有任何同步机制！必须显式使用 mutex、信号量或其他同步原语，否则会导致竞态条件。'
    },
    {
      myth: 'Unix Domain Socket 比网络 socket 慢',
      truth: 'UDS 比网络 socket 快得多！UDS 只在本地内核内传输，不经过网络协议栈。还可以传递文件描述符。'
    },
    {
      myth: '消息队列没有限制',
      truth: '消息队列有大小和数量限制（系统级）。超过限制会阻塞或失败。'
    }
  ],

  summary: {
    keyPoints: [
      '管道：基于内核缓冲区，单向通信，2 次数据拷贝',
      '共享内存：最快 IPC，无数据拷贝，需同步机制',
      'Unix Domain Socket：类似网络 socket，可传递 fd',
      '消息队列：内核维护链表，支持类型选择接收',
      '性能排序：共享内存 > UDS > 管道/消息队列'
    ],
    pitfalls: [
      '管道忘记关闭不用的端口',
      '共享内存未加同步导致竞态条件',
      'UDS 忘记关闭连接的 socket',
      '消息队列达到上限未处理'
    ],
    transferQuestion: '如果要实现两个不相关进程之间的高效通信，应该选择哪种 IPC？为什么？'
  }
};
