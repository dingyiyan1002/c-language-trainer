window.LESSON_DATA = {
  meta: {
    id: 'l4-signal',
    title: '信号处理',
    chapter: 'level4',
    index: 4,
    filename: 'signal-handler.c',
    keyPoints: ['signal', 'sigaction', 'SIGINT', 'SIGTERM']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdlib.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<signal.h>' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<unistd.h>' }] },
    { num: 5, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 6, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'sig_atomic_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'got_signal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 原子变量' }] },
    { num: 7, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 8, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'signal_handler' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'signum' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'got_signal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"\\\\nCaught signal %d!\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'signum' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'signum' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SIGINT' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 12, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Graceful shutdown...\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 17, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sigaction' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sa' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'sa' }, { type: 'punc', text: '.' }, { type: 'id', text: 'sa_handler' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'signal_handler' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'sa' }, { type: 'punc', text: '.' }, { type: 'id', text: 'sa_flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'sigaction' }, { type: 'punc', text: '(' }, { type: 'id', text: 'SIGINT' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'id', text: 'sa' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'NULL' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 22, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Running... Press Ctrl+C to send SIGINT\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'got_signal' }, { type: 'ws', text: ' ' }, { type: 'op', text: '==' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 25, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'sleep' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"."' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'fflush' }, { type: 'punc', text: '(' }, { type: 'id', text: 'stdout' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"\\\\nProgram exited cleanly.\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'got_signal', name: 'got_signal', type: 'volatile sig_atomic_t', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'sa', name: 'sa', type: 'struct sigaction', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习信号处理', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 6, executedLines: [1, 2, 3, 4, 5], vars: { got_signal: 0 }, highlightVar: 'got_signal', isDanger: false, output: [], explanation: { icon: 'memory', text: 'volatile sig_atomic_t got_signal = 0', color: 'yellow', actor: 'CPU', detail: 'volatile 确保每次读取都从内存获取（不被编译器优化）。sig_atomic_t 是原子类型，信号处理中写入安全，不会发生竞态条件。' }, prediction: { question: '为什么信号处理中要用 volatile sig_atomic_t？', options: ['节省内存', '防止竞态条件', '提高速度'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:got_signal', timing: 'init' },
    { step: 2, line: 8, executedLines: [1, 2, 3, 4, 5, 6, 7], vars: { got_signal: 0 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 signal_handler 信号处理函数', color: 'purple', actor: 'CPU', detail: '信号处理函数签名：void handler(int signum)。当信号到达时，内核中断主程序，调用此函数。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 3, line: 9, executedLines: [1, 2, 3, 4, 5, 6, 7, 8], vars: { got_signal: 1 }, highlightVar: 'got_signal', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'got_signal = 1，标记信号已到达', color: 'green', actor: 'Signal', detail: '信号处理函数设置标志位。主程序轮询此标志，实现优雅退出。这是信号处理的安全模式。' }, prediction: null, misconception: null, actor: 'Signal', target: 'var:got_signal', timing: 'signal-handler' },
    { step: 4, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { got_signal: 0, sa: {} }, highlightVar: 'sa', isDanger: false, output: [], explanation: { icon: 'memory', text: 'struct sigaction sa，信号动作结构体', color: 'blue', actor: 'CPU', detail: 'sigaction 是现代化的信号处理 API，比 signal() 更可靠。包含处理函数指针和标志位。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:sa', timing: 'init' },
    { step: 5, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { got_signal: 0, sa: { sa_handler: 'signal_handler' } }, highlightVar: 'sa', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'sa.sa_handler = signal_handler', color: 'green', actor: 'CPU', detail: '设置信号处理函数。当 SIGINT 到达时，内核调用 signal_handler。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:sa', timing: 'config' },
    { step: 6, line: 21, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], vars: { got_signal: 0, sa: { sa_handler: 'signal_handler', sa_flags: 0 } }, highlightVar: 'sa', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'sigaction(SIGINT, &sa, NULL) 注册处理函数', color: 'green', actor: 'CPU', detail: '注册 SIGINT（Ctrl+C）的处理函数。sigaction 比 signal 更可靠：不随 exec 重置，可设置 SA_RESTART 等标志。' }, prediction: { question: 'SIGINT 是什么信号？', options: ['程序终止', '键盘中断 Ctrl+C', '键盘退出'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:sa', timing: 'register' },
    { step: 7, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { got_signal: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Running... Press Ctrl+C to send SIGINT' }], explanation: { icon: 'terminal', text: 'printf 提示用户按 Ctrl+C', color: 'green', actor: 'CPU', detail: '程序进入主循环，等待信号到达。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 8, line: 24, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], vars: { got_signal: 0 }, highlightVar: 'got_signal', isDanger: false, output: [{ type: 'success', text: 'Running... Press Ctrl+C to send SIGINT' }], explanation: { icon: 'bolt', text: 'while(got_signal == 0) 主循环', color: 'green', actor: 'CPU', detail: '主程序轮询 got_signal 标志。信号处理函数设置标志后，循环退出。这是异步事件处理的常用模式。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'loop' },
    { step: 9, line: 25, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], vars: { got_signal: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Running... Press Ctrl+C to send SIGINT' }, { type: 'success', text: '.' }], explanation: { icon: 'clock', text: 'sleep(1) 每秒打印一次', color: 'purple', actor: 'CPU', detail: 'sleep 使程序休眠 1 秒。期间可以被信号中断。实际应用中，这里会是业务逻辑。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'loop-body' },
    { step: 10, line: 24, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 24, 25, 26, 27], vars: { got_signal: 1 }, highlightVar: 'got_signal', isDanger: false, output: [{ type: 'success', text: 'Running... Press Ctrl+C to send SIGINT' }, { type: 'success', text: '.' }, { type: 'success', text: '.' }, { type: 'success', text: '.' }], explanation: { icon: 'bolt', text: '用户按 Ctrl+C，SIGINT 到达', color: 'orange', actor: 'Signal', detail: '内核中断 sleep，调用 signal_handler。handler 设置 got_signal=1，打印 Caught signal。主程序循环条件为假，退出循环。' }, prediction: { question: '信号处理函数执行时，主程序在哪里？', options: ['继续执行', '被中断等待', '并行执行'], answer: 1 }, misconception: { title: '信号是异步的', text: '信号可以在任何时候到达，中断主程序。信号处理函数应该尽快执行，避免阻塞主程序。' }, actor: 'Signal', target: 'var:got_signal', timing: 'signal-arrived' },
    { step: 11, line: 29, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], vars: { got_signal: 1 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Running... Press Ctrl+C to send SIGINT' }, { type: 'success', text: '.' }, { type: 'success', text: '.' }, { type: 'success', text: '.' }, { type: 'success', text: 'Caught signal 2!' }, { type: 'success', text: 'Graceful shutdown...' }, { type: 'success', text: 'Program exited cleanly.' }], explanation: { icon: 'terminal', text: 'printf 输出退出消息', color: 'green', actor: 'CPU', detail: '程序优雅退出。信号处理使程序能够清理资源、保存状态后再退出。这是守护进程（daemon）的标准行为。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'cleanup' }
  ],
  summary: {
    oneLiner: 'sigaction 注册信号处理函数，volatile sig_atomic_t 保证原子性，信号中断主程序',
    pitfalls: [
      '信号处理函数必须简单快速，不能调用非安全函数（如 malloc、printf）',
      'volatile sig_atomic_t 确保信号处理中的读写是原子的',
      'sigaction 比 signal 更可靠，不随 exec 重置，支持 SA_RESTART 等标志'
    ],
    transferQuestion: '为什么信号处理函数中不应该调用 printf？',
    miniExercise: {
      bugCode: 'void handler(int sig) {\\n    malloc(100);  // 危险！\\n    printf("got signal");  // 非安全\\n}',
      hint: 'malloc 和 printf 不是信号安全函数，可能导致死锁或未定义行为。应该只设置标志位。'
    }
  }
};
