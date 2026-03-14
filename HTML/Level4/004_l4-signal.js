window.LESSON_DATA = {
  meta: {
    id: 'l4-signal',
    title: '信号处理',
    chapter: 'Level4',
    index: 4,
    filename: 'signal_handler.c',
    keyPoints: ['signal', 'sigaction', '信号处理']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<signal.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sig_atomic_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'gotSigInt' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sigintHandler' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sig' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'gotSigInt' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"\\nCaught SIGINT!\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }] },
    { num: 12, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 13, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'signal' }, { type: 'punc', text: '(' }, { type: 'id', text: 'SIGINT' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sigintHandler' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'gotSigInt' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Running... Press Ctrl+C\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'sleep' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Exiting gracefully\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'gotSigInt', name: 'gotSigInt', type: 'volatile sig_atomic_t', addr: '0x600000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'sigintHandler', name: 'sigintHandler', type: 'void(*)(int)', addr: '0x00401000', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 }
  ],
  scenes: [
    {
      step: 0,
      line: -1,
      executedLines: [],
      vars: {},
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: { icon: 'rocket', text: '点击播放，学习 Unix 信号处理机制', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [],
      vars: { gotSigInt: 0 },
      highlightVar: 'gotSigInt',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'volatile sig_atomic_t gotSigInt = 0 信号标志',
        color: 'yellow',
        actor: 'Linker',
        detail: 'volatile 告诉编译器不要优化此变量（每次从内存读取）。sig_atomic_t 保证原子性（信号处理中读写不会被中断）。这是信号安全的标志变量。'
      },
      prediction: {
        question: '为什么需要 volatile 关键字？',
        options: ['不需要', '防止编译器优化', '加密目的'],
        answer: 1
      },
      misconception: null,
      actor: 'Linker',
      target: 'var:gotSigInt',
      timing: 'link-time'
    },
    {
      step: 2,
      line: 7,
      executedLines: [5, 6],
      vars: { gotSigInt: 0 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'sigintHandler 信号处理函数',
        color: 'blue',
        actor: 'Developer',
        detail: '信号处理函数签名：void (*)(int)。参数是信号编号（如 SIGINT=2）。当信号到达时，内核中断进程执行，跳转至此函数。'
      },
      prediction: null,
      misconception: {
        title: '信号处理函数的限制',
        text: '信号处理函数中只能调用"信号安全"的函数（如 write）。printf 不是信号安全的（内部使用静态缓冲），可能导致死锁。生产代码应用 write 代替 printf。'
      },
      actor: 'Developer',
      target: 'func:sigintHandler',
      timing: 'design-time'
    },
    {
      step: 3,
      line: 8,
      executedLines: [5, 6, 7],
      vars: { gotSigInt: 1 },
      highlightVar: 'gotSigInt',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'gotSigInt = 1 设置信号标志',
        color: 'green',
        actor: 'Signal',
        detail: '当 SIGINT 信号到达时，此函数被调用。设置全局标志是信号安全的操作。'
      },
      prediction: null,
      misconception: null,
      actor: 'Signal',
      target: 'var:gotSigInt',
      timing: 'signal-arrival'
    },
    {
      step: 4,
      line: 9,
      executedLines: [5, 6, 7, 8],
      vars: { gotSigInt: 1 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'terminal',
        text: 'printf 输出捕获信号的消息',
        color: 'yellow',
        actor: 'Signal',
        detail: '注意：printf 不是信号安全函数，这里是演示用途。实际生产代码应该用最基础的 write() 系统调用。'
      },
      prediction: null,
      misconception: null,
      actor: 'Signal',
      target: 'stdout',
      timing: 'signal-arrival'
    },
    {
      step: 5,
      line: 14,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      vars: { gotSigInt: 0 },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'signal(SIGINT, sigintHandler) 注册信号处理函数',
        color: 'green',
        actor: 'OS',
        detail: 'signal 系统调用注册处理函数。当用户按 Ctrl+C 时，内核发送 SIGINT 信号，进程执行 sigintHandler。这是异步事件处理机制。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'signal:register',
      timing: 'runtime'
    },
    {
      step: 6,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      vars: { gotSigInt: 0 },
      highlightVar: 'gotSigInt',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'loop',
        text: 'while(gotSigInt == 0) 主循环',
        color: 'blue',
        actor: 'CPU',
        detail: '主循环检查信号标志。gotSigInt 为 0 时继续运行。信号处理函数会在 SIGINT 到达时将其设为 1。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'main-loop',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 16,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { gotSigInt: 0 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Running... Press Ctrl+C' }],
      explanation: {
        icon: 'terminal',
        text: '输出提示信息，等待用户按 Ctrl+C',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 每秒输出一次。程序处于等待状态。'
      },
      prediction: {
        question: 'Ctrl+C 发送什么信号？',
        options: ['SIGKILL', 'SIGINT', 'SIGTERM'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 8,
      line: 17,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { gotSigInt: 0 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Running... Press Ctrl+C' }],
      explanation: {
        icon: 'clock',
        text: 'sleep(1) 休眠 1 秒',
        color: 'blue',
        actor: 'OS',
        detail: 'sleep 让进程休眠 1 秒。即使休眠，信号也能中断处理（但 sleep 会返回剩余时间）。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'sleep',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 15,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 15, 15, 15],
      vars: { gotSigInt: 1 },
      highlightVar: 'gotSigInt',
      isDanger: false,
      output: [{ type: 'success', text: 'Running... Press Ctrl+C' }, { type: 'success', text: '\nCaught SIGINT!' }],
      explanation: {
        icon: 'alert',
        text: '用户按 Ctrl+C，SIGINT 信号到达，gotSigInt=1',
        color: 'red',
        actor: 'Signal',
        detail: '内核中断进程，执行 sigintHandler。gotSigInt 被设为 1，输出"Caught SIGINT!"。然后返回主程序。'
      },
      prediction: null,
      misconception: null,
      actor: 'Signal',
      target: 'var:gotSigInt',
      timing: 'signal-arrival'
    },
    {
      step: 10,
      line: 19,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 15, 15, 15, 18],
      vars: { gotSigInt: 1 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Running... Press Ctrl+C' }, { type: 'success', text: '\nCaught SIGINT!' }, { type: 'success', text: 'Exiting gracefully' }],
      explanation: {
        icon: 'check',
        text: '退出循环，输出 Exiting gracefully',
        color: 'green',
        actor: 'CPU',
        detail: 'gotSigInt=1，while 条件为假，退出循环。程序优雅退出（graceful shutdown），可以清理资源。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'main-loop'
    },
    {
      step: 11,
      line: 20,
      executedLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 15, 15, 15, 18, 19],
      vars: { gotSigInt: 1 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Running... Press Ctrl+C' }, { type: 'success', text: '\nCaught SIGINT!' }, { type: 'success', text: 'Exiting gracefully' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，信号处理：注册→等待→捕获→优雅退出',
        color: 'green',
        actor: 'OS',
        detail: '信号处理要点：1) volatile 标志 2) 信号处理函数要简单 3) 主循环检查标志 4) 优雅退出。常见信号：SIGINT(2), SIGTERM(15), SIGKILL(9), SIGSEGV(11)。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: '信号处理：signal 注册处理函数，volatile 标志同步，异步事件驱动',
    pitfalls: [
      '信号处理函数中不能用 printf（非信号安全），应该用 write',
      '忘记 volatile 可能导致编译器优化，标志变化不被主程序察觉',
      'SIGKILL(9) 不能被捕获或忽略，强制杀死进程'
    ],
    transferQuestion: '如何实现定时器功能？（提示：SIGALRM 信号 + alarm 函数）',
    miniExercise: {
      bugCode: 'int gotSignal = 0;  // 没有 volatile\n// 信号处理函数设置 gotSignal=1\n// 主循环 while(gotSignal==0)\n// 这样有什么问题？',
      hint: '编译器可能优化为死循环（认为 gotSignal 永远不会变）'
    }
  }
};
