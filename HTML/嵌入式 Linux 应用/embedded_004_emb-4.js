window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-4',
    title: '进程间通信 (IPC)',
    description: '管道、FIFO、共享内存、消息队列详解'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<sys/ipc.h>' }
    ],
    [
      { type: 'cmt', text: '// pipe - 匿名管道' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: '[' },
      { type: 'num', text: '2' },
      { type: 'punc', text: ']' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'pipe' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'fd' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// fd[0]=读端，fd[1]=写端' }
    ],
    [
      { type: 'cmt', text: '// mkfifo - 命名管道 (FIFO)' }
    ],
    [
      { type: 'id', text: 'mkfifo' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '\"/tmp/myfifo\"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0666' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// shmget - 共享内存' }
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
      { type: 'op', text: '|' },
      { type: 'id', text: '0666' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// shmat - 附加共享内存' }
    ],
    [
      { type: 'kw', text: 'void' },
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
      { type: 'cmt', text: '// msgsnd - 发送消息' }
    ],
    [
      { type: 'id', text: 'msgsnd' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'msqid' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'msg' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'msglen' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'fd', color: '#3b82f6', appearStep: 2, type: 'int[2]' },
    { name: 'shmid', color: '#22c55e', appearStep: 5, type: 'int' },
    { name: 'shm', color: '#f59e0b', appearStep: 6, type: 'void*' },
    { name: 'msg', color: '#8b5cf6', appearStep: 8, type: 'struct msgbuf' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示 IPC 机制',
        detail: 'Linux 进程间通信 (IPC)：管道 (Pipe)、命名管道 (FIFO)、共享内存 (Shared Memory)、消息队列 (Message Queue)。IPC 用于进程间数据交换和同步。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 2,
      executedLines: [2],
      vars: {
        pipe_created: { read_end: 'fd[0]', write_end: 'fd[1]', type: 'anonymous' }
      },
      explanation: {
        text: '第 3 行：pipe(fd) 创建匿名管道',
        detail: 'pipe 创建内核缓冲区，fd[0] 用于读，fd[1] 用于写。管道是半双工的（数据单向流动）。只能用于父子进程或兄弟进程（有亲缘关系）。',
        actor: 'Kernel',
        icon: 'Pipe',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        fd: { value: [3, 4], type: 'int[2]', usage: 'pipe endpoints' }
      },
      explanation: {
        text: '管道文件描述符：fd[0]=3(读), fd[1]=4(写)',
        detail: 'pipe 返回两个文件描述符：读端 fd[0] 和写端 fd[1]。写端写入的数据从读端读出。关闭写端后，读端 read 返回 0（EOF）。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'green'
      }
    },
    {
      step: 3,
      line: 6,
      executedLines: [2, 3, 6],
      vars: {
        fifo_created: { path: '/tmp/myfifo', perms: '0666', type: 'named pipe' }
      },
      explanation: {
        text: '第 7 行：mkfifo 创建命名管道',
        detail: 'mkfifo 创建持久化的 FIFO 文件（即使无进程使用也存在）。无关进程可通过路径名打开管道。读端先打开会阻塞，直到写端打开。',
        actor: 'Kernel',
        icon: 'FileText',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 9,
      executedLines: [2, 3, 6, 9],
      vars: {
        shmid: { value: 65536, type: 'int', size: 4096, key: 'IPC_PRIVATE' }
      },
      explanation: {
        text: '第 10 行：shmget 创建共享内存段',
        detail: 'shmget 分配 4096 字节共享内存，返回标识符 shmid。IPC_CREAT 表示不存在则创建。0666 是访问权限。共享内存最快（无数据拷贝）。',
        actor: 'Kernel',
        icon: 'Memory',
        color: 'purple'
      }
    },
    {
      step: 5,
      line: 10,
      executedLines: [2, 3, 6, 9, 10],
      vars: {
        shm: { value: '0x7f8a0000', type: 'void*', shmid: 65536, attached: true }
      },
      explanation: {
        text: '第 11 行：shmat 附加共享内存到进程空间',
        detail: 'shmat 将共享内存段映射到进程地址空间，返回指针 shm。进程可直接读写 shm 指针访问共享内存。多个进程附加同一段可实现共享。',
        actor: 'Kernel',
        icon: 'Link',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 11,
      executedLines: [2, 3, 6, 9, 10, 11],
      vars: {
        shm_data: { writer_wrote: 'Hello from Process A', reader_can_read: true }
      },
      explanation: {
        text: '进程 A 写入共享内存：strcpy(shm, "Hello")',
        detail: '进程 A 直接写共享内存：strcpy(shm, "Hello")。数据立即可见，无需系统调用。进程 B 读取同一段内存即可获取数据。需要同步机制（信号量）避免竞态。',
        actor: 'CPU',
        icon: 'Upload',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 14,
      executedLines: [2, 3, 6, 9, 10, 11, 14],
      vars: {
        msg: { value: '{mtype: 1, mtext: "Hello"}', type: 'struct msgbuf', sent: true }
      },
      explanation: {
        text: '第 15 行：msgsnd 发送消息到消息队列',
        detail: 'msgsnd 将消息复制到内核消息队列。mtype 是消息类型（>0），mtext 是数据。接收方按类型接收消息。消息队列自动处理同步。',
        actor: 'Kernel',
        icon: 'Mail',
        color: 'green'
      }
    }
  ],

  predictions: [
    {
      question: '管道 (pipe) 和共享内存哪个更快？',
      options: [
        { text: '管道更快', feedback: '错误！管道需要数据拷贝。' },
        { text: '共享内存更快', feedback: '正确！共享内存无数据拷贝，直接访问。' },
        { text: 一样快', feedback: '错误！共享内存最快。' },
        { text: '取决于数据大小', feedback: '部分正确，但共享内存通常更快。' }
      ],
      correctIndex: 1
    },
    {
      question: '匿名管道可以用于无关进程间通信吗？',
      options: [
        { text: '可以', feedback: '错误！匿名管道需要文件描述符继承。' },
        { text: '不可以', feedback: '正确！只能用于父子/兄弟进程。' },
        { text: '可以，通过环境变量', feedback: '错误！环境变量不传递 fd。' },
        { text: '可以，通过命令行参数', feedback: '错误！参数不传递 fd。' }
      ],
      correctIndex: 1
    },
    {
      question: '共享内存需要同步机制吗？',
      options: [
        { text: '不需要', feedback: '错误！会导致竞态条件。' },
        { text: '需要', feedback: '正确！需要信号量或互斥锁。' },
        { text: '看情况', feedback: '错误！总是需要。' },
        { text: '内核自动处理', feedback: '错误！内核不处理同步。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '共享内存会自动同步',
      truth: '共享内存不提供任何同步！必须使用信号量、互斥锁或其他同步机制。否则会导致竞态条件和数据损坏。'
    },
    {
      myth: '管道可以双向通信',
      truth: '管道是半双工的！数据只能单向流动（写→读）。双向通信需要两个管道（一个读，一个写）。'
    },
    {
      myth: '消息队列是先进先出',
      truth: '消息队列按类型接收！接收方可以指定接收特定类型的消息，不是严格的 FIFO。同类型消息才是 FIFO。'
    },
    {
      myth: 'FIFO 和管道完全一样',
      truth: 'FIFO 是命名管道，以文件形式存在！无关进程可通过路径名访问。管道是匿名的，只在内存中存在。'
    }
  ],

  summary: {
    keyPoints: [
      'pipe 匿名管道：用于亲缘进程，半双工',
      'mkfifo 命名管道：持久化文件，无关进程可用',
      'shmget/shmat 共享内存：最快 IPC，无数据拷贝',
      'msgsnd/msgrcv 消息队列：按类型收发',
      '共享内存需要同步机制（信号量）'
    ],
    pitfalls: [
      '共享内存未同步导致竞态',
      '管道忘记关闭写端导致读阻塞',
      'FIFO 读写顺序错误导致阻塞',
      '消息队列未检查返回值'
    ],
    transferQuestion: '如何设计一个客户端 - 服务器 IPC 方案？服务器需要同时处理多个客户端请求。'
  }
};
