window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-2',
    title: '进程管理深度',
    description: 'fork() 写时拷贝、exec 替换进程映像、CFS 调度'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<sys/types.h>' }
    ],
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<unistd.h>' }
    ],
    [
      { type: 'cmt', text: '// fork() 创建子进程' }
    ],
    [
      { type: 'kw', text: 'pid_t' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'pid' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'fork' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'kw', text: 'if' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pid' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '<' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '0' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"子进程，pid=%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'getpid' },
      { type: 'punc', text: '(' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' },
      { type: 'ws', text: ' ' },
      { type: 'kw', text: 'else' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"父进程，子进程 pid=%d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'pid' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// exec 族替换当前进程映像' }
    ],
    [
      { type: 'id', text: 'execl' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"/bin/ls"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"ls"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"-l"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'pid', color: '#3b82f6', appearStep: 1, type: 'pid_t' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示进程管理',
        detail: 'fork 创建子进程（使用 COW 写时拷贝优化），exec 替换当前进程映像。Linux 使用 CFS（完全公平调度器）调度进程，基于 vruntime 决定调度顺序。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 3,
      executedLines: [3],
      vars: { pid: { value: '未定义', type: 'pid_t' } },
      explanation: {
        text: '第 4 行：声明 pid 变量',
        detail: 'pid_t 是进程 ID 类型（通常是 int）。fork 执行前 pid 未定义。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 2,
      line: 4,
      executedLines: [3, 4],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程' },
        pid_child: { value: 0, type: 'pid_t', context: '子进程' }
      },
      explanation: {
        text: '第 5 行：fork() 返回两次',
        detail: 'fork 神奇之处：调用一次，返回两次。父进程返回子进程 PID（1234），子进程返回 0。这是因为 fork 使用 COW（写时拷贝）技术，只复制页表，实际内存页面在写入时才复制，所以 fork 比想象中快得多。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 5,
      executedLines: [3, 4, 5],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程' },
        pid_child: { value: 0, type: 'pid_t', context: '子进程' }
      },
      explanation: {
        text: '第 6 行：if(pid < 0) 检查错误',
        detail: 'fork 失败返回 -1（资源不足等）。子进程中 pid=0，不进入此分支。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [3, 4, 5, 6],
      vars: {
        pid_child: { value: 0, type: 'pid_t', context: '子进程', executing: true }
      },
      explanation: {
        text: '子进程执行：printf("子进程")',
        detail: '子进程中 pid=0，执行 if 分支。getpid() 返回子进程实际 PID。父子进程有独立的地址空间，互不干扰。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [3, 4, 5, 6, 8],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程', executing: true }
      },
      explanation: {
        text: '父进程执行：printf("子进程 pid=1234")',
        detail: '父进程中 pid=1234（子进程 PID），执行 else 分支。父子进程从 fork 处继续独立执行。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 11,
      executedLines: [3, 4, 5, 6, 8, 11],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程', replaced: true }
      },
      explanation: {
        text: '第 12 行：execl 替换进程映像',
        detail: 'execl 执行后，当前进程代码、数据、堆、栈全部被替换为/bin/ls 程序。原程序不再执行。文件描述符默认保持打开。',
        actor: 'Kernel',
        icon: 'RefreshCw',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: 'fork() 在子进程中返回什么？',
      options: [
        { text: '子进程的 PID', feedback: '错误！父进程中返回子进程 PID。' },
        { text: '0', feedback: '正确！子进程中 fork 返回 0，父进程中返回子进程 PID。' },
        { text: '-1', feedback: '错误！-1 表示失败。' },
        { text: '父进程的 PID', feedback: '错误！getppid() 才返回父进程 PID。' }
      ],
      correctIndex: 1
    },
    {
      question: 'fork 为什么使用 COW（写时拷贝）？',
      options: [
        { text: '节省内存', feedback: '部分正确，但不完整。' },
        { text: '提高 fork 速度', feedback: '正确！COW 避免立即复制全部内存，fork 更快。' },
        { text: '简化实现', feedback: '错误！COW 实现更复杂。' },
        { text: 'A 和 B 都对', feedback: '正确！COW 既节省内存又提高速度。' }
      ],
      correctIndex: 3
    },
    {
      question: 'exec 执行后原程序会怎样？',
      options: [
        { text: '继续执行', feedback: '错误！exec 替换整个进程映像。' },
        { text: '被完全替换，不再执行', feedback: '正确！exec 后原代码、数据、堆、栈全部被替换。' },
        { text: '暂停执行', feedback: '错误！不是暂停，是替换。' },
        { text: '在后台继续', feedback: '错误！完全被替换。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'fork 复制整个进程内存',
      truth: 'fork 使用 COW（写时拷贝）：只复制页表并标记为只读，实际内存页面在写入时才复制。这使得 fork 非常高效。'
    },
    {
      myth: 'exec 创建新进程',
      truth: 'exec 不创建新进程，而是替换当前进程的映像。PID 保持不变，但代码、数据、堆、栈全部被新程序替换。'
    },
    {
      myth: 'fork 后父子进程共享内存',
      truth: 'fork 后父子进程有独立的地址空间。修改互不影响（COW 确保写时复制）。共享内存需要显式使用 mmap 或 shm。'
    },
    {
      myth: 'exec 后文件描述符关闭',
      truth: '默认情况下 exec 保留打开的文件描述符。如需关闭，可设置 FD_CLOEXEC 标志。'
    }
  ],

  summary: {
    keyPoints: [
      'fork 创建子进程：父进程返回子进程 PID，子进程返回 0',
      'fork 使用 COW（写时拷贝）优化性能',
      'exec 替换当前进程映像，PID 保持不变',
      'CFS 调度器基于 vruntime 公平调度',
      'nice 值影响进程权重（优先级）'
    ],
    pitfalls: [
      '忘记检查 fork 返回值（可能为 -1）',
      'fork 后未区分子父进程逻辑',
      'exec 后原程序不再执行',
      '忽略文件描述符在 exec 后的状态'
    ],
    transferQuestion: '如何结合 fork 和 exec 实现一个 shell 命令执行器？写出基本流程。'
  }
};
