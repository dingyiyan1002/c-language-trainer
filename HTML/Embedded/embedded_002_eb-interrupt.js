window.LESSON_DATA = {
  meta: {
    id: 'embedded-2',
    title: '中断系统',
    chapter: 'embedded',
    index: 2,
    filename: 'interrupt-system.c',
    keyPoints: ['NVIC', '中断向量', 'ISR']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'NVIC_ISER1' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0xE000E104)' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'NVIC_ICER1' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0xE000E184)' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'interrupt_count' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'EXTI0_Handler' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 外部中断 0 服务程序' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'interrupt_count' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 计数中断次数' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 清除中断标志位（略）' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'interrupt_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 1. 使能 GPIO 时钟（略）' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 2. 配置 EXTI 触发沿' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 3. 使能 NVIC 中断' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'NVIC_ISER1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '6' }, { type: 'ws', text: ' ' }, { type: 'op', text: '%' }, { type: 'ws', text: ' ' }, { type: 'num', text: '32' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 使能 IRQ6' }] },
    { num: 20, tokens: [{ type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'interrupt_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 25, tokens: [{ type: 'ws', text: '        ' }, { type: 'cmt', text: '// 主循环执行其他任务' }] },
    { num: 26, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'interrupt_count' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '>' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 27, tokens: [{ type: 'ws', text: '            ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"Interrupt! Count=%d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'interrupt_count' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'ws', text: '            ' }, { type: 'id', text: 'interrupt_count' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 29, tokens: [{ type: 'ws', text: '        ' }, { type: 'punc', text: '}' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 31, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'interrupt_count', name: 'interrupt_count', type: 'volatile uint32_t', addr: '0x20000000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'NVIC_ISER1', name: 'NVIC_ISER1', type: 'volatile uint32_t', addr: '0xE000E104', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习中断系统', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 7, executedLines: [1, 2, 3, 4, 5, 6], vars: { interrupt_count: 0 }, highlightVar: 'interrupt_count', isDanger: false, output: [], explanation: { icon: 'memory', text: 'volatile uint32_t interrupt_count = 0', color: 'yellow', actor: 'CPU', detail: 'volatile 确保主循环和 ISR 都访问真实内存，而不是寄存器缓存的值。这是多上下文共享变量的必要条件。' }, prediction: { question: '为什么中断共享变量要用 volatile？', options: ['提高速度', '防止编译器优化', '节省内存'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:interrupt_count', timing: 'declaration' },
    { step: 2, line: 9, executedLines: [1, 2, 3, 4, 5, 6, 7, 8], vars: { interrupt_count: 0 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'EXTI0_Handler 中断服务程序', color: 'purple', actor: 'CPU', detail: 'ISR 函数名必须与向量表一致。当 EXTI0 中断触发时，CPU 自动跳转到此函数执行。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'isr-def' },
    { step: 3, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { interrupt_count: 1 }, highlightVar: 'interrupt_count', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'interrupt_count++ 计数中断', color: 'green', actor: 'ISR', detail: '每次中断发生时计数器加 1。主循环通过检查此变量知道中断发生。这是中断驱动编程模式。' }, prediction: null, misconception: null, actor: 'ISR', target: 'var:interrupt_count', timing: 'isr-exec' },
    { step: 4, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { NVIC_ISER1: 0x00000040 }, highlightVar: 'NVIC_ISER1', isDanger: false, output: [], explanation: { icon: 'register', text: 'NVIC_ISER1 |= (1<<6) 使能 IRQ6', color: 'blue', actor: 'CPU', detail: 'NVIC 是嵌套向量中断控制器。ISER 是中断使能寄存器。设置 bit6 使能 IRQ6（EXTI0 中断）。中断使能后，触发时将执行 ISR。' }, prediction: { question: 'NVIC 的作用是什么？', options: ['管理中断优先级和使能', '分配内存', '控制 GPIO'], answer: 0 }, misconception: null, actor: 'CPU', target: 'var:NVIC_ISER1', timing: 'enable' },
    { step: 5, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { interrupt_count: 0 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'check', text: 'interrupt_init() 初始化中断', color: 'green', actor: 'CPU', detail: '配置 GPIO、EXTI、NVIC 后，中断系统准备就绪。等待外部事件触发。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'init' },
    { step: 6, line: 24, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], vars: { interrupt_count: 0 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'loop', text: 'while(1) 主循环', color: 'purple', actor: 'CPU', detail: '主循环执行前台任务。中断在后台异步发生。这是前后台系统架构。' }, prediction: null, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'main-loop' },
    { step: 7, line: 26, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], vars: { interrupt_count: 1 }, highlightVar: 'interrupt_count', isDanger: false, output: [], explanation: { icon: 'target', text: '检测到中断计数 > 0', color: 'orange', actor: 'CPU', detail: '主循环轮询 interrupt_count。中断发生后，ISR 设置标志，主循环检测到并处理。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:interrupt_count', timing: 'check' },
    { step: 8, line: 27, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], vars: { interrupt_count: 1 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'Interrupt! Count=1' }], explanation: { icon: 'terminal', text: 'printf 输出中断事件', color: 'green', actor: 'CPU', detail: '处理中断事件。实际应用中，这里会执行具体的业务逻辑。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'process' },
    { step: 9, line: 28, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], vars: { interrupt_count: 0 }, highlightVar: 'interrupt_count', isDanger: false, output: [{ type: 'success', text: 'Interrupt! Count=1' }], explanation: { icon: 'check', text: '清零计数器，准备下次中断', color: 'green', actor: 'CPU', detail: '清零后，主循环继续等待。中断驱动编程的核心：ISR 快速响应，主循环处理复杂逻辑。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:interrupt_count', timing: 'clear' }
  ],
  summary: {
    oneLiner: 'NVIC 管理中断使能，ISR 快速响应，volatile 共享变量通信',
    pitfalls: [
      'ISR 应该短小快速，避免影响其他中断响应',
      'volatile 确保主循环和 ISR 看到相同的变量值',
      '中断处理通常只设置标志，复杂逻辑交给主循环'
    ],
    transferQuestion: '如果 ISR 中执行 printf 会有什么问题？',
    miniExercise: {
      bugCode: 'void ISR() {\\n    delay_ms(1000);  // 延时 1 秒\\n    process_data();\\n}',
      hint: 'ISR 太长会阻塞其他中断！应该只设置标志，在主循环中处理耗时操作。'
    }
  }
};
