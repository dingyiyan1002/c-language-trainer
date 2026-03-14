window.LESSON_DATA = {
  meta: {
    id: 'l4-thread',
    title: '多线程编程',
    chapter: 'Level4',
    index: 1,
    filename: 'pthread_basic.c',
    keyPoints: ['pthread', 'mutex', '线程同步']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<pthread.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'pthread_mutex_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'void' }, { type: 'op', text: '*' }, { type: 'fn', text: 'increment' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'arg' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_lock' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'counter' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Counter = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_unlock' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'pthread_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 't2' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_create' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'increment' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_join' }, { type: 'punc', text: '(' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'counter', name: 'counter', type: 'int', addr: '0x600000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'mutex', name: 'mutex', type: 'pthread_mutex_t', addr: '0x600004', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 't1', name: 't1', type: 'pthread_t', addr: '0x7fff10', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
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
      explanation: { icon: 'rocket', text: '点击播放，学习 POSIX 多线程编程 (pthread)', color: 'blue', actor: null, detail: null },
      prediction: null,
      misconception: null,
      actor: null,
      target: null,
      timing: null
    },
    {
      step: 1,
      line: 4,
      executedLines: [],
      vars: { counter: 0 },
      highlightVar: 'counter',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'memory',
        text: 'counter = 0 全局变量，所有线程共享',
        color: 'yellow',
        actor: 'Linker',
        detail: '全局变量存储在数据段（.data），所有线程共享同一份。这是线程间通信的基础，也是竞争条件的根源。'
      },
      prediction: {
        question: '多个线程同时修改 counter 会有什么问题？',
        options: ['没问题', '竞争条件（Race Condition）', '编译错误'],
        answer: 1
      },
      misconception: null,
      actor: 'Linker',
      target: 'var:counter',
      timing: 'link-time'
    },
    {
      step: 2,
      line: 5,
      executedLines: [],
      vars: { counter: 0, mutex: 'LOCKED' },
      highlightVar: 'mutex',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'lock',
        text: 'mutex 互斥锁，保护共享资源 counter',
        color: 'purple',
        actor: 'System',
        detail: 'pthread_mutex_t 是互斥锁类型。锁保护临界区（共享资源访问），确保同一时间只有一个线程能访问。'
      },
      prediction: null,
      misconception: {
        title: '为什么需要互斥锁',
        text: 'counter++ 不是原子操作：1) 读取 counter 2) 加 1 3) 写回。两线程同时执行可能丢失更新。锁确保互斥访问。'
      },
      actor: 'System',
      target: 'var:mutex',
      timing: 'runtime'
    },
    {
      step: 3,
      line: 7,
      executedLines: [4, 5, 6],
      vars: { counter: 0, mutex: 'LOCKED' },
      highlightVar: null,
      isDanger: false,
      output: [],
      explanation: {
        icon: 'gear',
        text: 'increment 线程函数：锁保护下的临界区',
        color: 'blue',
        actor: 'Developer',
        detail: '线程函数签名：void* (*)(void*)。参数和返回值都是 void*，可传递任意类型数据。'
      },
      prediction: null,
      misconception: null,
      actor: 'Developer',
      target: 'func:increment',
      timing: 'design-time'
    },
    {
      step: 4,
      line: 8,
      executedLines: [4, 5, 6, 7],
      vars: { counter: 0, mutex: 'LOCKED' },
      highlightVar: 'mutex',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'lock',
        text: 'pthread_mutex_lock 加锁，进入临界区',
        color: 'purple',
        actor: 'OS',
        detail: '加锁：如果锁空闲则获得锁；如果锁被占用则阻塞等待。这是线程同步的核心机制。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'mutex:lock',
      timing: 'runtime'
    },
    {
      step: 5,
      line: 9,
      executedLines: [4, 5, 6, 7, 8],
      vars: { counter: 1, mutex: 'LOCKED' },
      highlightVar: 'counter',
      isDanger: false,
      output: [],
      explanation: {
        icon: 'bolt',
        text: 'counter++ 安全递增，此时无其他线程能访问',
        color: 'green',
        actor: 'CPU',
        detail: '在锁保护下，counter++ 是安全的。即使有其他线程调用 increment，它们也会在 lock 处阻塞。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:counter',
      timing: 'thread-exec'
    },
    {
      step: 6,
      line: 10,
      executedLines: [4, 5, 6, 7, 8, 9],
      vars: { counter: 1, mutex: 'LOCKED' },
      highlightVar: 'counter',
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'terminal',
        text: '输出 Counter = 1',
        color: 'green',
        actor: 'CPU',
        detail: 'printf 输出当前 counter 值。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'stdout',
      timing: 'thread-exec'
    },
    {
      step: 7,
      line: 11,
      executedLines: [4, 5, 6, 7, 8, 9, 10],
      vars: { counter: 1, mutex: 'UNLOCKED' },
      highlightVar: 'mutex',
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'lock',
        text: 'pthread_mutex_unlock 解锁，释放临界区',
        color: 'purple',
        actor: 'OS',
        detail: '解锁后，其他等待该锁的线程可以获得锁并进入临界区。必须成对使用 lock/unlock。'
      },
      prediction: null,
      misconception: {
        title: '死锁（Deadlock）',
        text: '忘记解锁或重复加锁会导致死锁。规则：1) 锁持有时间尽量短 2) 固定顺序获取多个锁 3) 解锁 responsibility 与加锁相同。'
      },
      actor: 'OS',
      target: 'mutex:unlock',
      timing: 'runtime'
    },
    {
      step: 8,
      line: 16,
      executedLines: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      vars: { counter: 1, mutex: 'UNLOCKED', t1: '12345' },
      highlightVar: 't1',
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'gear',
        text: 'pthread_t t1, t2 线程标识符',
        color: 'blue',
        actor: 'CPU',
        detail: 'pthread_t 是线程 ID 类型（通常是整数或结构体）。用于标识和操作线程。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'var:t1',
      timing: 'main-loop'
    },
    {
      step: 9,
      line: 17,
      executedLines: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      vars: { counter: 1, mutex: 'UNLOCKED', t1: '12345' },
      highlightVar: 't1',
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'rocket',
        text: 'pthread_create 创建线程 t1，执行 increment 函数',
        color: 'green',
        actor: 'OS',
        detail: 'pthread_create 参数：1) 线程 ID 地址 2) 线程属性（NULL 默认）3) 线程函数 4) 传递给线程函数的参数。新线程从 increment 开始执行。'
      },
      prediction: {
        question: 'pthread_create 成功后，主线程和新线程如何执行？',
        options: ['主线程等待新线程完成', '并发执行（顺序不确定）', '新线程等待主线程'],
        answer: 1
      },
      misconception: null,
      actor: 'OS',
      target: 'thread:create',
      timing: 'runtime'
    },
    {
      step: 10,
      line: 18,
      executedLines: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      vars: { counter: 1, mutex: 'UNLOCKED', t1: '12345' },
      highlightVar: 't1',
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'check',
        text: 'pthread_join 等待 t1 线程结束',
        color: 'green',
        actor: 'OS',
        detail: 'pthread_join 阻塞主线程直到 t1 结束。用于同步线程，确保 t1 完成后主线程才继续。类似进程的 wait()。'
      },
      prediction: null,
      misconception: null,
      actor: 'OS',
      target: 'thread:join',
      timing: 'runtime'
    },
    {
      step: 11,
      line: 19,
      executedLines: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      vars: { counter: 1, mutex: 'UNLOCKED', t1: '12345' },
      highlightVar: null,
      isDanger: false,
      output: [{ type: 'success', text: 'Counter = 1' }],
      explanation: {
        icon: 'check',
        text: '程序执行完毕，多线程：创建→并发执行→ join 同步',
        color: 'green',
        actor: 'CPU',
        detail: '多线程编程要点：1) pthread_create 创建 2) 互斥锁保护共享资源 3) pthread_join 等待 4) 避免死锁和竞争条件。'
      },
      prediction: null,
      misconception: null,
      actor: 'CPU',
      target: 'exit',
      timing: 'main-loop'
    }
  ],
  summary: {
    oneLiner: 'pthread 创建线程，mutex 保护共享资源，join 等待线程结束',
    pitfalls: [
      '共享变量必须用互斥锁保护，否则会发生竞争条件（Race Condition）',
      '忘记 pthread_join 会导致主线程提前退出，子线程可能被终止',
      '死锁：两个线程互相等待对方的锁，或忘记解锁'
    ],
    transferQuestion: '如果要创建 10 个线程并发递增 counter，应该如何修改代码？（提示：线程数组 + 循环）',
    miniExercise: {
      bugCode: 'pthread_create(&t1, NULL, increment, NULL);\n// 忘记 pthread_join\nprintf("Counter = %d", counter);  // 这样有什么问题？',
      hint: '主线程可能在 t1 完成前就打印 counter，看到的是未完成的值'
    }
  }
};
