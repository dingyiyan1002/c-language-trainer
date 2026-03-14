window.LESSON_DATA = {
  meta: {
    chapter: 'linux',
    lessonId: 'linux-6',
    title: '信号与异步编程',
    description: '信号处理机制、可重入函数、实时信号'
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
      { type: 'id', text: 'signum' },
      { type: 'punc', text: ')' },
      { type: 'ws', text: ' ' },
      { type: 'punc', text: '{' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: 'write' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'STDOUT_FILENO' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'str', text: '"Caught signal\\n"' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'num', text: '14' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ],
    [
      { type: 'ws', text: '    ' },
      { type: 'id', text: '_exit' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'SIGTERM' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' },
      { type: 'ws', text: '  ' },
      { type: 'cmt', text: '// 异步信号安全函数' }
    ],
    [
      { type: 'punc', text: '}' }
    ],
    [
      { type: 'cmt', text: '// 注册信号处理函数' }
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
      { type: 'cmt', text: '// 实时信号：支持排队和携带数据' }
    ],
    [
      { type: 'id', text: 'sigqueue' },
      { type: 'punc', text: '(' },
      { type: 'id', text: 'pid' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'SIGRTMIN' },
      { type: 'punc', text: ',' },
      { type: 'ws', text: ' ' },
      { type: 'id', text: 'value' },
      { type: 'punc', text: ')' },
      { type: 'punc', text: ';' }
    ]
  ],

  varConfig: [
    { name: 'signum', color: '#3b82f6', appearStep: 2, type: 'int' },
    { name: 'pid', color: '#22c55e', appearStep: 5, type: 'pid_t' }
  ],

  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      explanation: {
        text: '程序开始执行，演示信号处理机制',
        detail: '信号是异步事件通知机制。内核检查目标进程的 signal_pending，从内核态返回用户态时处理信号。信号处理函数在进程上下文中执行，只能调用异步信号安全函数（write、_exit 等）。',
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
        text: '第 3 行：定义信号处理函数 handler',
        detail: '信号处理函数签名：void handler(int signum)。signum 是信号编号（如 SIGINT=2）。处理函数应尽量简短，避免复杂操作。',
        actor: 'Compiler',
        icon: 'Function',
        color: 'blue'
      }
    },
    {
      step: 2,
      line: 3,
      executedLines: [2, 3],
      vars: { signum: { value: 'SIGINT(2)', type: 'int', description: '信号编号' } },
      explanation: {
        text: '第 4 行：signal 处理函数被调用',
        detail: '当进程收到 SIGINT（Ctrl+C）时，内核中断正常执行，跳转到 handler 函数。signum 参数告知是哪个信号。',
        actor: 'Kernel',
        icon: 'Bell',
        color: 'purple'
      }
    },
    {
      step: 3,
      line: 4,
      executedLines: [2, 3, 4],
      vars: { signum: { value: 'SIGINT(2)', type: 'int' } },
      explanation: {
        text: '第 5 行：write 输出信号捕获信息',
        detail: 'write 是异步信号安全函数（async-signal-safe）。可以在信号处理中安全调用。不能用 printf，因为 printf 不是异步信号安全的（可能使用 malloc、持有锁）。',
        actor: 'CPU',
        icon: 'Terminal',
        color: 'green'
      }
    },
    {
      step: 4,
      line: 5,
      executedLines: [2, 3, 4, 5],
      vars: { signum: { value: 'SIGINT(2)', type: 'int' } },
      explanation: {
        text: '第 6 行：_exit 终止进程',
        detail: '_exit 是异步信号安全的系统调用。exit 不是（会刷新 stdio 缓冲区、调用 atexit 处理函数）。信号处理中应使用 _exit。',
        actor: 'Kernel',
        icon: 'CircleX',
        color: 'green'
      }
    },
    {
      step: 5,
      line: 7,
      executedLines: [2, 3, 4, 5, 7],
      vars: { sigaction: { handler: 'handler', signal: 'SIGINT', registered: true } },
      explanation: {
        text: '第 8 行：signal 注册处理函数',
        detail: 'signal(SIGINT, handler) 注册 SIGINT 信号的处理函数。当用户按 Ctrl+C 时，内核发送 SIGINT，调用 handler。推荐使用 sigaction（更可靠）。',
        actor: 'Kernel',
        icon: 'Settings',
        color: 'green'
      }
    },
    {
      step: 6,
      line: 9,
      executedLines: [2, 3, 4, 5, 7, 9],
      vars: {
        pid: { value: 1234, type: 'pid_t', target: '目标进程' },
        value: { value: '{int: 42}', type: 'union sigval', realtime: true }
      },
      explanation: {
        text: '第 10 行：sigqueue 发送实时信号',
        detail: '实时信号（SIGRTMIN~SIGRTMAX）支持排队（普通信号不排队）和携带数据（sigval 联合体）。优先级高于普通信号。适合需要可靠传递的场景。',
        actor: 'Kernel',
        icon: 'Mail',
        color: 'purple'
      }
    }
  ],

  predictions: [
    {
      question: '为什么信号处理函数中不能用 printf？',
      options: [
        { text: 'printf 太慢', feedback: '错误！速度不是问题。' },
        { text: 'printf 不是异步信号安全函数', feedback: '正确！printf 可能调用 malloc、持有锁，导致死锁或未定义行为。' },
        { text: 'printf 输出缓冲区太小', feedback: '错误！与缓冲区无关。' },
        { text: '可以用 printf', feedback: '错误！绝对不可以。' }
      ],
      correctIndex: 1
    },
    {
      question: '实时信号和普通信号的区别是什么？',
      options: [
        { text: '实时信号优先级高', feedback: '部分正确，但不完整。' },
        { text: '实时信号支持排队', feedback: '部分正确。' },
        { text: '实时信号可以携带数据', feedback: '部分正确。' },
        { text: '以上都是', feedback: '正确！实时信号优先级高、支持排队、可携带数据。' }
      ],
      correctIndex: 3
    },
    {
      question: '信号什么时候被处理？',
      options: [
        { text: '立即处理', feedback: '错误！信号是异步的。' },
        { text: '从内核态返回用户态时', feedback: '正确！内核检查 signal_pending，返回用户态前处理。' },
        { text: '进程空闲时', feedback: '错误！' },
        { text: '定时器到期时', feedback: '错误！' }
      ],
      correctIndex: 1
    }
  ],

  misconceptions: [
    {
      myth: '信号处理函数可以调用任何函数',
      truth: '只能调用异步信号安全函数！不安全函数：malloc/free、printf、scanf、操作全局链表等。安全函数：write、_exit、signal 等系统调用。'
    },
    {
      myth: '信号会排队等待处理',
      truth: '普通信号不排队！相同信号快速连续发送多次，可能只处理一次。实时信号才支持排队。'
    },
    {
      myth: '信号处理函数应该做复杂工作',
      truth: '信号处理应尽可能简短！复杂工作应在主循环完成。信号处理只设置标志变量或调用简单函数。'
    },
    {
      myth: 'signal 和 sigaction 一样',
      truth: 'sigaction 更可靠！signal 语义因系统而异，sigaction 提供精确控制（信号掩码、标志等）。'
    }
  ],

  summary: {
    keyPoints: [
      '信号是异步事件通知机制',
      '从内核态返回用户态时处理信号',
      '只能调用异步信号安全函数（write、_exit）',
      '实时信号支持排队和携带数据',
      '优先使用 sigaction 而非 signal'
    ],
    pitfalls: [
      '信号处理中调用 printf/malloc',
      '依赖信号排队（普通信号不排队）',
      '信号处理函数过于复杂',
      '忽略信号掩码设置'
    ],
    transferQuestion: '如何安全地在信号处理和主程序之间共享数据？写出正确的代码模式。'
  }
};
