window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-2',
    title: '进程控制',
    description: 'fork、exec、wait、exit 系统调用详解'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<unistd.h>' }
    ],
    [
      { type: 'cmt', text: '// fork - 创建子进程' }
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
      { type: 'str', text: '"子进程，PID=%d"' },
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
      { type: 'str', text: '"父进程，子进程 PID=%d"' },
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
      { type: 'cmt', text: '// wait - 等待子进程' }
    ],
    [
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'status' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'wait' },
      { type: 'punc', text: '(' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'status' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// exec - 执行新程序' }
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
    { name: 'pid', color: '#3b82f6', appearStep: 1, type: 'pid_t' },
    { name: 'status', color: '#22c55e', appearStep: 5, type: 'int' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示进程控制',
        detail: 'Linux 进程控制：fork 创建子进程（返回两次），exec 替换进程映像，wait 等待子进程结束，exit 退出进程。理解 fork 返回值和 COW（写时拷贝）机制是关键。',
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
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程返回子进程 PID' },
        pid_child: { value: 0, type: 'pid_t', context: '子进程返回 0' }
      },
      explanation: {
        text: '第 3 行：fork() 返回两次',
        detail: 'fork 神奇之处：调用一次，返回两次。父进程返回子进程 PID(1234)，子进程返回 0。返回值用于区分父子进程执行分支。fork 使用 COW（写时拷贝）优化性能。',
        actor: 'Kernel',
        icon: 'GitBranch',
        color: 'purple'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程' },
        pid_child: { value: 0, type: 'pid_t', context: '子进程' }
      },
      explanation: {
        text: '第 4 行：if(pid < 0) 检查错误',
        detail: 'fork 失败返回 -1（资源不足、超过进程数限制）。子进程中 pid=0，不进入此分支。父进程中 pid>0（子进程 PID）。',
        actor: 'CPU',
        icon: 'TriangleAlert',
        color: 'yellow'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [2, 3, 4],
      vars: {
        pid_child: { value: 0, type: 'pid_t', context: '子进程', executing: true }
      },
      explanation: {
        text: '子进程执行：printf("子进程")',
        detail: '子进程中 pid=0，执行 if 分支。getpid() 返回子进程实际 PID。父子进程从 fork 处继续独立执行，有独立的地址空间。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [2, 3, 4, 6],
      vars: {
        pid_parent: { value: 1234, type: 'pid_t', context: '父进程', executing: true }
      },
      explanation: {
        text: '父进程执行：printf("子进程 PID=1234")',
        detail: '父进程中 pid=1234（子进程 PID），执行 else 分支。父进程通常调用 wait 等待子进程结束。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 9,
      executedLines: [2, 3, 4, 6, 9],
      vars: {
        status: { value: 0, type: 'int', waited: true }
      },
      explanation: {
        text: '第 10 行：wait(&status) 等待子进程',
        detail: 'wait 阻塞直到子进程结束。返回结束的子进程 PID，status 存储退出状态。WIFEXITED(status) 检查是否正常退出，WEXITSTATUS(status) 获取退出码。',
        actor: 'Kernel',
        icon: 'Clock',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 12,
      executedLines: [2, 3, 4, 6, 9, 12],
      vars: {
        exec_called: { value: true, program: '/bin/ls', args: ['ls', '-l'] }
      },
      explanation: {
        text: '第 13 行：execl 执行新程序',
        detail: 'execl 成功时不返回！当前进程代码、数据、堆、栈全部被替换为/bin/ls 程序。PID 保持不变，文件描述符默认继承。失败返回 -1。',
        actor: 'Kernel',
        icon: 'RefreshCw',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: 'fork 在子进程中返回什么？',
      options: [
        { text: '子进程的 PID', feedback: '错误！父进程中返回子进程 PID。' },
        { text: '0', feedback: '正确！子进程返回 0，父进程返回子进程 PID。' },
        { text: '-1', feedback: '错误！-1 表示失败。' },
        { text: '父进程的 PID', feedback: '错误！getppid() 才返回父进程 PID。' }
      ],
      correctIndex: 1
    },
    {
      question: 'exec 成功后会返回吗？',
      options: [
        { text: '会返回 0', feedback: '错误！' },
        { text: '会返回 PID', feedback: '错误！' },
        { text: '不会返回', feedback: '正确！exec 成功替换进程映像，原代码不再执行。' },
        { text: '返回 1', feedback: '错误！' }
      ],
      correctIndex: 2
    },
    {
      question: 'wait 的作用是什么？',
      options: [
        { text: '创建子进程', feedback: '错误！这是 fork。' },
        { text: '等待子进程结束并回收资源', feedback: '正确！避免僵尸进程。' },
        { text: '终止子进程', feedback: '错误！这是 kill。' },
        { text: '暂停子进程', feedback: '错误！这是 SIGSTOP。' }
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
      myth: '子进程结束后父进程自动回收',
      truth: '父进程必须调用 wait/waitpid 回收子进程！否则子进程成为僵尸进程（占用进程表项）。'
    },
    {
      myth: 'fork 后子进程先执行',
      truth: '父子进程执行顺序不确定！由内核调度器决定。需要同步时使用 IPC（管道、信号量等）。'
    }
  ],

  summary: {
    keyPoints: [
      'fork 创建子进程：父进程返回子进程 PID，子进程返回 0',
      'fork 使用 COW（写时拷贝）优化性能',
      'exec 替换进程映像，成功不返回',
      'wait 等待子进程结束并回收资源',
      'exit/_exit 退出进程（_exit 不刷新缓冲区）'
    ],
    pitfalls: [
      '忘记检查 fork 返回值（可能 -1）',
      'fork 后未区分子父进程逻辑',
      '不调用 wait 导致僵尸进程',
      'exec 失败后未处理（会继续执行原代码）'
    ],
    transferQuestion: '如何结合 fork 和 exec 实现一个简单的 shell？写出基本流程。'
  }
};
