window.LESSON_DATA = {
  meta: {
    id: 'l4-thread',
    title: '多线程编程',
    chapter: 'level4',
    index: 1,
    filename: 'thread-pthread.c',
    keyPoints: ['pthread_create', 'mutex', '线程同步']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<pthread.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'pthread_mutex_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ';' }] },
    { num: 5, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'fn', text: 'increment' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'arg' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_lock' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'counter' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_unlock' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'punc', text: '}' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'pthread_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 't2' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_init' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_create' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ',' }, { type: 'id', text: 'increment' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_create' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 't2' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ',' }, { type: 'id', text: 'increment' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_join' }, { type: 'punc', text: '(' }, { type: 'id', text: 't1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_join' }, { type: 'punc', text: '(' }, { type: 'id', text: 't2' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '\"Counter = %d\\\\n\"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'pthread_mutex_destroy' }, { type: 'punc', text: '(' }, { type: 'op', text: '&' }, { type: 'id', text: 'mutex' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'counter', name: 'counter', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'mutex', name: 'mutex', type: 'pthread_mutex_t', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 },
    { key: 't1', name: 't1', type: 'pthread_t', addr: '0x7ffc08', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 4 },
    { key: 't2', name: 't2', type: 'pthread_t', addr: '0x7ffc0c', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习多线程编程', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [1, 2, 3, 4], vars: { counter: 0 }, highlightVar: 'counter', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int counter = 0，全局共享变量', color: 'yellow', actor: 'CPU', detail: 'counter 是全局变量，将被多个线程共享修改。没有保护的情况下并发递增会导致竞态条件。' }, prediction: { question: '两个线程各递增 1 次，counter 最终值是多少？', options: ['一定是 2', '可能是 1 或 2', '一定是 1'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:counter', timing: 'init' },
    { step: 2, line: 4, executedLines: [1, 2, 3, 4, 5], vars: { counter: 0, mutex: 'initialized' }, highlightVar: 'mutex', isDanger: false, output: [], explanation: { icon: 'lock', text: 'pthread_mutex_t mutex，互斥锁', color: 'blue', actor: 'CPU', detail: 'mutex 用于保护共享资源。同一时刻只有一个线程可以持有锁，其他线程必须等待。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:mutex', timing: 'init' },
    { step: 3, line: 7, executedLines: [1, 2, 3, 4, 5, 6], vars: { counter: 0, mutex: 'initialized' }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 increment 线程函数', color: 'purple', actor: 'CPU', detail: '线程函数签名：void* (*)(void*)。lock→修改→unlock 是临界区保护的标准模式。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 4, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { counter: 0, mutex: 'initialized', t1: 'running' }, highlightVar: 't1', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'pthread_create(&t1) 创建线程 1', color: 'green', actor: 'CPU', detail: '创建新线程执行 increment 函数。线程开始并发运行。pthread_create 参数：线程 ID、属性、函数指针、参数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:t1', timing: 'thread-create' },
    { step: 5, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { counter: 0, mutex: 'initialized', t1: 'running', t2: 'running' }, highlightVar: 't2', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'pthread_create(&t2) 创建线程 2', color: 'green', actor: 'CPU', detail: '创建第二个线程。现在两个线程并发执行 increment 函数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:t2', timing: 'thread-create' },
    { step: 6, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { counter: 2, mutex: 'initialized', t1: 'running', t2: 'running' }, highlightVar: 'counter', isDanger: false, output: [], explanation: { icon: 'bolt', text: '两个线程执行完毕，counter=2', color: 'green', actor: 'CPU', detail: '由于 mutex 保护，两个线程序列化执行：线程 1 lock→counter++(0→1)→unlock，线程 2 lock→counter++(1→2)→unlock。结果正确为 2。' }, prediction: { question: '如果没有 mutex 保护，结果会怎样？', options: ['还是 2', '可能是 1', '一定是 0'], answer: 1 }, misconception: { title: '竞态条件（Race Condition）', text: '没有 mutex 时：两个线程可能同时读取 counter=0，各自递增后都写入 1，最终结果丢失一次递增。这就是竞态条件。' }, actor: 'CPU', target: 'var:counter', timing: 'thread-exec' },
    { step: 7, line: 20, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], vars: { counter: 2, mutex: 'initialized', t1: 'joined', t2: 'running' }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'check', text: 'pthread_join(t1) 等待线程 1 结束', color: 'green', actor: 'CPU', detail: 'join 阻塞直到线程结束。确保主线程等待工作线程完成后再继续。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'thread-join' },
    { step: 8, line: 21, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], vars: { counter: 2, mutex: 'initialized', t1: 'joined', t2: 'joined' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Counter = 2' }], explanation: { icon: 'terminal', text: 'printf 输出 Counter = 2', color: 'green', actor: 'CPU', detail: '验证多线程并发执行结果正确。mutex 确保了临界区的互斥访问。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 9, line: 22, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { counter: 2, mutex: 'destroyed' }, highlightVar: 'mutex', isDanger: false, output: [{ type: 'success', text: 'Counter = 2' }], explanation: { icon: 'check', text: 'pthread_mutex_destroy 释放锁资源', color: 'green', actor: 'CPU', detail: '使用完毕的 mutex 必须 destroy，释放系统资源。完整生命周期：init→lock/unlock 循环→destroy。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:mutex', timing: 'cleanup' }
  ],
  summary: {
    oneLiner: 'pthread_create 创建线程，mutex 保护临界区，pthread_join 等待线程结束',
    pitfalls: [
      '共享变量必须用 mutex 保护，否则会发生竞态条件',
      'pthread_join 阻塞等待线程结束，忘记 join 会导致资源泄漏',
      'mutex 使用后必须 destroy 释放资源'
    ],
    transferQuestion: '如果两个线程不用 mutex 保护 counter++，最终结果可能是什么？为什么？',
    miniExercise: {
      bugCode: '// 线程函数中\\ncounter++;  // 没有 lock/unlock\\n// 这样有什么问题？',
      hint: '竞态条件！两个线程可能同时读取旧值，导致递增丢失。必须用 mutex 包裹临界区。'
    }
  }
};
