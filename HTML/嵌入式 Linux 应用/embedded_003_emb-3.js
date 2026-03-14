window.LESSON_DATA = {
  meta: {
    chapter: 'embedded',
    lessonId: 'embedded-3',
    title: '信号处理',
    description: 'signal、sigaction、kill 信号机制详解'
  },

  codeLines: [
    [
      { type: 'pp', text: '#include' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '<signal.h>' }
    ],
    [
      { type: 'cmt', text: '// 信号处理函数' }
    ],
    [
      { type: 'kw', text: 'void' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'handler' },
      { type: 'punc', text: '(' },
      { type: 'kw', text: 'int' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sig' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'printf' },
      { type: 'punc', text: '(' },
      { type: 'str', text: '"Caught signal %d"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sig' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// signal - 注册信号处理函数' }
    ],
    [
      { type: 'id', text: 'signal' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'SIGINT' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'handler' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// 捕获 Ctrl+C' }
    ],
    [
      { type: 'cmt', text: '// sigaction - 推荐方式' }
    ],
    [
      { type: 'kw', text: 'struct' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sigaction' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'sa' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'sa' },
      { type: 'punc', text: '.' },
      { type: 'id', text: 'sa_handler' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '=' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'handler' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'id', text: 'sigaction' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'SIGTERM' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'op', text: '&' },
      { type: 'id', text: 'sa' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'NULL' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'cmt', text: '// kill - 发送信号' }
    ],
    [
      { type: 'id', text: 'kill' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pid' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SIGUSR1' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'sig', color: '#ef4444', appearStep: 2, type: 'int' },
    { name: 'sa', color: '#8b5cf6', appearStep: 5, type: 'struct sigaction' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示信号处理机制',
        detail: 'Linux 信号机制：异步事件通知。常见信号：SIGINT(2 Ctrl+C)、SIGKILL(9 强制终止)、SIGTERM(15 正常终止)、SIGSEGV(11 段错误)。signal/sigaction 注册处理函数，kill 发送信号。',
        actor: 'Compiler',
        icon: 'CPU',
        color: 'blue'
      }
    },
    {
      step: 1,
      line: 1,
      executedLines: [1],
      vars: {},
      explanation: {
        text: '第 2 行：定义信号处理函数 handler',
        detail: '信号处理函数签名：void handler(int sig)。sig 参数告知是哪个信号。处理函数应尽量简短，避免复杂操作（malloc、printf 等不是异步信号安全）。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'blue'
      }
    },
    {
      step: 2,
      line: 2,
      executedLines: [1, 2],
      vars: {
        sig: { value: 'SIGINT(2)', type: 'int', description: '中断信号' }
      },
      explanation: {
        text: '第 3 行：signal 处理函数被调用',
        detail: '当进程收到 SIGINT（用户按 Ctrl+C）时，内核中断正常执行，跳转到 handler 函数。sig 参数 = 2（SIGINT 编号）。',
        actor: 'Kernel',
        icon: 'Bell',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 3,
      executedLines: [1, 2, 3],
      vars: {
        sig: { value: 'SIGINT(2)', type: 'int' }
      },
      explanation: {
        text: '第 4 行：printf 输出信号捕获信息',
        detail: '注意：printf 不是异步信号安全函数！严格来说应在信号处理中使用 write。但简单示例中 printf 通常能工作。生产环境应使用 write 或设置标志变量。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'yellow'
      }
    },
    {
      step: 4,
      line: 6,
      executedLines: [1, 2, 3, 6],
      vars: {
        sigaction_registed: { signal: 'SIGINT', handler: 'handler', active: true }
      },
      explanation: {
        text: '第 7 行：signal(SIGINT, handler) 注册处理函数',
        detail: 'signal 注册 SIGINT 信号的处理函数。当用户按 Ctrl+C 时，调用 handler 而非默认终止。signal 语义因系统而异，推荐用 sigaction。',
        actor: 'Kernel',
        icon: 'Settings',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 8,
      executedLines: [1, 2, 3, 6, 8],
      vars: {
        sa: { value: '{sa_handler: handler, sa_mask: 0, sa_flags: 0}', type: 'struct sigaction' }
      },
      explanation: {
        text: '第 9 行：声明 sigaction 结构',
        detail: 'sigaction 结构包含：sa_handler（处理函数）、sa_mask（信号掩码）、sa_flags（标志）。比 signal 更强大、更可靠。',
        actor: 'CPU',
        icon: 'Memory',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 10,
      executedLines: [1, 2, 3, 6, 8, 10],
      vars: {
        sa: { value: '{sa_handler: handler}', type: 'struct sigaction', registered: true }
      },
      explanation: {
        text: '第 11 行：sigaction 注册 SIGTERM 处理',
        detail: 'sigaction(SIGTERM, &sa, NULL) 注册 SIGTERM 信号处理。第三个参数可获取旧的处理方式（NULL 忽略）。sigaction 是推荐方式，POSIX 标准。',
        actor: 'Kernel',
        icon: 'Check',
        color: 'green'
      }
    },
    {
      step: 7,
      line: 13,
      executedLines: [1, 2, 3, 6, 8, 10, 13],
      vars: {
        pid: { value: 1234, type: 'pid_t', target: '目标进程' },
        signal_sent: { value: 'SIGUSR1', type: 'int', user_defined: true }
      },
      explanation: {
        text: '第 14 行：kill(pid, SIGUSR1) 发送信号',
        detail: 'kill 向进程 pid 发送 SIGUSR1 信号。SIGUSR1/SIGUSR2 是用户自定义信号（10/12）。进程需注册处理函数，否则默认终止。kill 需要权限（同用户或 root）。',
        actor: 'Kernel',
        icon: 'Mail',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: 'SIGKILL(9) 可以被捕获吗？',
      options: [
        { text: '可以', feedback: '错误！SIGKILL 是特殊的。' },
        { text: '不可以', feedback: '正确！SIGKILL 和 SIGSTOP 不可捕获、不可忽略。' },
        { text: '视情况而定', feedback: '错误！绝对不能。' },
        { text: '只有 root 可以', feedback: '错误！与权限无关。' }
      ],
      correctIndex: 1
    },
    {
      question: 'signal 和 sigaction 的区别？',
      options: [
        { text: '没有区别', feedback: '错误！有重要区别。' },
        { text: 'sigaction 更可靠、更强大', feedback: '正确！signal 语义因系统而异，sigaction 是 POSIX 标准。' },
        { text: 'signal 更可靠', feedback: '错误！' },
        { text: 'sigaction 只能用于实时信号', feedback: '错误！可用于所有信号。' }
      ],
      correctIndex: 1
    },
    {
      question: '如何发送信号给进程？',
      options: [
        { text: 'send(pid, sig)', feedback: '错误！无此函数。' },
        { text: 'kill(pid, sig)', feedback: '正确！kill 发送信号，不一定杀死进程。' },
        { text: 'signal(pid, sig)', feedback: '错误！signal 用于注册处理函数。' },
        { text: 'raise(pid, sig)', feedback: '错误！raise 发送信号给自己。' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: 'kill 一定会杀死进程',
      truth: 'kill 只是发送信号！SIGTERM 请求正常退出，SIGKILL 才强制杀死。进程可捕获大部分信号并忽略。'
    },
    {
      myth: '信号处理函数可以做任何事',
      truth: '只能调用异步信号安全函数！不安全：malloc、printf、scanf、操作全局链表。安全：write、_exit、signal 等系统调用。'
    },
    {
      myth: '信号会排队等待处理',
      truth: '普通信号不排队！相同信号快速连续发送多次，可能只处理一次。实时信号（SIGRTMIN~SIGRTMAX）才支持排队。'
    },
    {
      myth: 'SIGKILL 可以被捕获',
      truth: '绝对不能！SIGKILL(9) 和 SIGSTOP 是唯二不可捕获、不可忽略的信号。这是为了让系统总能终止失控进程。'
    }
  ],

  summary: {
    keyPoints: [
      '常见信号：SIGINT(2)、SIGKILL(9)、SIGTERM(15)、SIGSEGV(11)',
      'signal 注册处理函数（简单但不可靠）',
      'sigaction 是推荐方式（POSIX 标准）',
      'kill 发送信号给进程',
      'SIGKILL 和 SIGSTOP 不可捕获'
    ],
    pitfalls: [
      '信号处理中调用非异步信号安全函数',
      '依赖信号排队（普通信号不排队）',
      '忘记 SIGKILL 不可捕获',
      'kill 权限不足（需同用户或 root）'
    ],
    transferQuestion: '如何编写一个守护进程，捕获 SIGTERM 信号后优雅退出（清理资源再退出）？写出代码框架。'
  }
};
