window.LESSON_DATA = {
  meta: {
    id: 'interview-5',
    title: '概念深度题',
    chapter: 'Interview',
    index: 5,
    filename: 'volatile_and_barrier.c',
    keyPoints: ['volatile 原理', '内存屏障', '系统调用']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<signal.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sig_atomic_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'gotSignal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'signalHandler' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sig' }, { type: 'punc', text: ')' }] },
    { num: 8, tokens: [{ type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'gotSignal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Signal %d received\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sig' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }] },
    { num: 12, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 13, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'buggyWait' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 14, tokens: [{ type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'flag' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'flag' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 17, tokens: [{ type: 'ws', text: '        ' }, { type: 'cmt', text: '// 等待 flag 被信号处理函数修改' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Flag changed\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'fixedWait' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 23, tokens: [{ type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'signal' }, { type: 'punc', text: '(' }, { type: 'id', text: 'SIGINT' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'signalHandler' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Waiting for Ctrl+C...\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'gotSignal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 27, tokens: [{ type: 'ws', text: '        ' }, { type: 'cmt', text: '// volatile 确保每次从内存读取，不被优化' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Signal received!\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'punc', text: '}' }] },
    { num: 31, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 32, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'memoryBarrier' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'punc', text: ')' }] },
    { num: 33, tokens: [{ type: 'punc', text: '{' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 35, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'data' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 36, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// __sync_synchronize(); // 内存屏障' }] },
    { num: 37, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ready' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 38, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Data: %d, Ready: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'data' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ready' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 39, tokens: [{ type: 'punc', text: '}' }] },
    { num: 40, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 41, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }] },
    { num: 42, tokens: [{ type: 'punc', text: '{' }] },
    { num: 43, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"=== Volatile Demo ===\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// fixedWait(); // 等待 Ctrl+C' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"=== Memory Barrier Demo ===\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 46, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'memoryBarrier' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 47, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 48, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'gotSignal', name: 'gotSignal', type: 'volatile sig_atomic_t', addr: '0x600000', glowColor: 'rgba(239,68,68,0.35)', accentCls: 'text-red-400', badgeCls: 'text-red-400 border-red-500/30 bg-red-500/12', appearStep: 1 },
    { key: 'flag', name: 'flag', type: 'int', addr: '0x7fff10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'data', name: 'data', type: 'int', addr: '0x7fff14', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 C 语言概念深度题', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 5,
      executedLines: [1, 2, 3, 4],
      vars: {},
      highlightVar: 'gotSignal',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: 'volatile sig_atomic_t gotSignal — volatile 关键字',
        color: 'red',
        actor: 'Interviewer',
        detail: 'volatile 告诉编译器：这个变量可能被外部因素修改（硬件、中断、其他线程），不要优化对它的访问。每次读取都必须从内存重新加载。'
      },
      prediction: {
        question: 'volatile 关键字的作用是什么？',
        options: ['让变量可变', '防止编译器优化访问', '让变量原子性'],
        answer: 1
      },
      misconception: null,
      actor: 'Interviewer',
      target: 'var:gotSignal',
      timing: 'design-time'
    },
    {
      step: 2,
      line: 7,
      executedLines: [1, 2, 3, 4, 5, 6],
      vars: { gotSignal: 0 },
      highlightVar: 'gotSignal',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'signalHandler — 信号处理函数',
        color: 'yellow',
        actor: 'Developer',
        detail: '信号处理函数在信号到达时异步执行。它修改 gotSignal=1。主循环通过检查这个标志知道信号已到达。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:signalHandler',
      timing: 'design-time'
    },
    {
      step: 3,
      line: 13,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      vars: { gotSignal: 0 },
      highlightVar: 'flag',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'warning',
        text: 'buggyWait — 没有 volatile 的等待循环',
        color: 'red',
        actor: 'Interviewer',
        detail: 'flag 没有 volatile 修饰。编译器可能优化：将 flag 的值缓存到寄存器，while 循环永远检查寄存器中的 0，即使信号处理函数修改了内存中的 flag。'
      },
      prediction: null,
      misconception: {
        title: '编译器优化陷阱',
        text: '没有 volatile 时，编译器可能：1) 将变量缓存到寄存器 2) 消除\"冗余\"的内存读取 3) 重排序指令。多线程/中断共享的变量必须用 volatile。'
      },
      actor: 'Interviewer',
      target: 'func:buggyWait',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 16,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { gotSignal: 0, flag: 0 },
      highlightVar: 'flag',
      isDanger: true,
      output: [],
      explanation: {
        icon: 'alert',
        text: 'while(flag == 0) — 可能被优化成死循环',
        color: 'red',
        actor: 'CPU',
        detail: '编译器看到 flag 在循环内未被修改，可能生成：1) 读取 flag 到寄存器 2) 循环只检查寄存器。即使信号处理函数修改了内存，寄存器不变，循环永不退出。'
      },
      prediction: {
        question: '为什么 flag 需要 volatile 修饰？',
        options: ['让代码跑得更快', '信号处理函数会异步修改它', '没有特别原因'],
        answer: 1
      },
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 22,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      vars: { gotSignal: 0 },
      highlightVar: 'gotSignal',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'check',
        text: 'fixedWait — 修复版本（volatile 确保正确读取）',
        color: 'green',
        actor: 'Developer',
        detail: 'gotSignal 用 volatile 修饰。每次 while 循环检查时，CPU 必须从内存重新读取 gotSignal，能\"看到\"信号处理函数的修改。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:fixedWait',
      timing: 'design-time'
    },
    {
      step: 6,
      line: 26,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      vars: { gotSignal: 0 },
      highlightVar: 'gotSignal',
      isDanger: false,
      output: [{ type: 'success', text: 'Waiting for Ctrl+C...' }],
      explanation: {
        icon: 'loop',
        text: 'while(volatile gotSignal == 0) — 每次从内存读取',
        color: 'green',
        actor: 'CPU',
        detail: 'volatile 强制每次循环都从内存读取 gotSignal。当用户按下 Ctrl+C 时，信号处理函数执行，gotSignal=1，循环退出。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'loop',
      timing: 'runtime'
    },
    {
      step: 7,
      line: 32,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      vars: { gotSignal: 1 },
      highlightVar: 'data',
      isDanger: false,
      output: [{ type: 'success', text: 'Signal received!' }],
      explanation: {
        icon: 'memory',
        text: 'memoryBarrier — 内存屏障防止指令重排序',
        color: 'yellow',
        actor: 'Architect',
        detail: '内存屏障（Memory Barrier）阻止编译器和 CPU 重排序指令。多核环境中，确保 data=42 在 ready=1 之前完成，其他线程看到 ready=1 时 data 已更新。'
      },
      prediction: null,
      misconception: {
        title: '指令重排序问题',
        text: '编译器和 CPU 可能重排序指令以优化性能。单线程没问题，但多线程/多核时会导致其他线程看到不一致的状态。内存屏障确保操作顺序。'
      },
      actor: 'Architect',
      target: 'func:memoryBarrier',
      timing: 'design-time'
    },
    {
      step: 8,
      line: 35,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      vars: { gotSignal: 1, data: 0 },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'data = 42 — 写入数据',
        color: 'green',
        actor: 'CPU',
        detail: '先写入数据 data=42。如果没有内存屏障，编译器/CPU 可能将这行和下一行 ready=1 重排序，导致其他线程先看到 ready=1 但 data 还是 0。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:data',
      timing: 'runtime'
    },
    {
      step: 9,
      line: 37,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      vars: { gotSignal: 1, data: 42 },
      highlightVar: 'data',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'shield',
        text: 'ready = 1 — 设置就绪标志',
        color: 'green',
        actor: 'CPU',
        detail: '设置就绪标志。内存屏障确保这行不会跑到 data=42 前面。其他线程看到 ready=1 时，可以安全读取 data，保证看到 42。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:ready',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 47,
      executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
      vars: { gotSignal: 1, data: 42 },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: '=== Volatile Demo ===' }, { type: 'success', text: '=== Memory Barrier Demo ===' }, { type: 'success', text: 'Data: 42, Ready: 1' }],
      explanation: {
        icon: 'check',
        text: '概念深度题要点：volatile 防优化 + 内存屏障防重排序',
        color: 'green',
        actor: 'Interviewer',
        detail: '面试要点：1) volatile 防止编译器优化访问 2) 用于中断/多线程共享变量 3) 内存屏障防止指令重排序 4) 多核同步必备 5) sig_atomic_t 是信号安全的原子类型。'
      },
      prediction: null,
      misconception: null,
      actor: 'Interviewer',
      target: 'exit',
      timing: 'runtime'
    }
  ],
  summary: {
    oneLiner: '概念深度：volatile 防止编译器优化 + 内存屏障防止指令重排序 + sig_atomic_t 信号安全',
    pitfalls: [
      'volatile 不保证原子性，只保证每次从内存读取。复杂操作仍需 mutex 或其他同步机制',
      'sig_atomic_t 是原子类型，信号处理函数中只能使用有限的异步信号安全函数',
      '内存屏障在多核/多线程环境中至关重要，确保其他线程看到一致的状态'
    ],
    transferQuestion: '如何实现一个自旋锁（spinlock）？（提示：atomic_flag + 内存屏障）',
    miniExercise: {
      bugCode: '// 多线程共享变量\nint sharedData = 0;  // 有什么问题？\nvoid thread1() { sharedData = 1; }\nvoid thread2() { while (sharedData == 0) {} }',
      hint: 'sharedData 应该用 volatile int 或 C11 atomic_int。volatile 防止编译器优化，atomic 保证原子性和内存顺序。'
    }
  }
};
