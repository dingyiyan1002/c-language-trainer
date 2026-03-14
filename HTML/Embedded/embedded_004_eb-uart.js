window.LESSON_DATA = {
  meta: {
    id: 'embedded-4',
    title: 'UART 通信',
    chapter: 'embedded',
    index: 4,
    filename: 'uart-communication.c',
    keyPoints: ['UART 配置', '发送数据', '接收中断']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'USART1_SR' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40013800)' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'USART1_DR' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40013804)' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'USART1_BRR' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40013808)' }] },
    { num: 7, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'USART1_CR1' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x4001380C)' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SR_TXE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(1 << 7)' }] },
    { num: 10, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SR_RXNE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(1 << 5)' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'rx_data' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'rx_ready' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'uart_init' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'baud' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 假设 PCLK2=72MHz，计算 BRR 值' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'brr' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '72000000' }, { type: 'ws', text: ' ' }, { type: 'op', text: '/' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'baud' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_BRR' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'brr' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 设置波特率' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_CR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'op', text: '<<' }, { type: 'num', text: '2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// RE 接收使能' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_CR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'op', text: '<<' }, { type: 'num', text: '3' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// TE 发送使能' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_CR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'op', text: '<<' }, { type: 'num', text: '13' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// UE USART 使能' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_CR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'op', text: '<<' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// RXNEIE 接收中断使能' }] },
    { num: 23, tokens: [{ type: 'punc', text: '}' }] },
    { num: 24, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 25, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'uart_putc' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'c' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'op', text: '!' }, { type: 'punc', text: '(' }, { type: 'id', text: 'USART1_SR' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SR_TXE' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: '{' }, { type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'USART1_DR' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'c' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0xFF' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'punc', text: '}' }] },
    { num: 29, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 30, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'USART1_IRQHandler' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'USART1_SR' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SR_RXNE' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 32, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'rx_data' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'USART1_DR' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'ws', text: '        ' }, { type: 'id', text: 'rx_ready' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 34, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 35, tokens: [{ type: 'punc', text: '}' }] },
    { num: 36, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 37, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 38, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'uart_init' }, { type: 'punc', text: '(' }, { type: 'num', text: '115200' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 39, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'uart_putc' } }, { type: 'punc', text: '(' }, { type: 'str', text: '"A"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 40, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'while' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 41, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'rx_ready' } }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 42, tokens: [{ type: 'ws', text: '            ' }, { type: 'fn', text: 'uart_putc' } }, { type: 'punc', text: '(' }, { type: 'id', text: 'rx_data' } }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 回显接收到的数据' }] },
    { num: 43, tokens: [{ type: 'ws', text: '            ' }, { type: 'id', text: 'rx_ready' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 44, tokens: [{ type: 'ws', text: '        ' }, { type: 'punc', text: '}' }] },
    { num: 45, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 46, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'USART1_BRR', name: 'USART1_BRR', type: 'volatile uint32_t', addr: '0x40013808', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'USART1_CR1', name: 'USART1_CR1', type: 'volatile uint32_t', addr: '0x4001380C', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'rx_data', name: 'rx_data', type: 'volatile uint8_t', addr: '0x20000000', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 6 },
    { key: 'rx_ready', name: 'rx_ready', type: 'volatile uint8_t', addr: '0x20000001', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 7 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习 UART 通信', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { brr: 625 }, highlightVar: 'USART1_BRR', isDanger: false, output: [], explanation: { icon: 'register', text: '计算 BRR = 72000000/115200 ≈ 625', color: 'yellow', actor: 'CPU', detail: 'BRR 是波特率寄存器。波特率 = PCLK2/BRR。115200 是常用波特率，用于与 PC 或其他设备通信。' }, prediction: { question: '波特率 115200 的含义是什么？', options: ['每秒 115200 字节', '每秒 115200 位', '每分钟 115200 字节'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:USART1_BRR', timing: 'config' },
    { step: 2, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { USART1_BRR: 625 }, highlightVar: 'USART1_BRR', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'USART1_BRR = 625 设置波特率', color: 'green', actor: 'CPU', detail: '写入 BRR 后，UART 硬件按 115200 波特率进行串行通信。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:USART1_BRR', timing: 'set-baud' },
    { step: 3, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { USART1_CR1: 0x0000000C }, highlightVar: 'USART1_CR1', isDanger: false, output: [], explanation: { icon: 'register', text: 'CR1 |= (1<<2)|(1<<3)|(1<<13) 使能 UART', color: 'blue', actor: 'CPU', detail: 'UE=1 使能 UART，TE=1 使能发送，RE=1 使能接收。UART 开始工作。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:USART1_CR1', timing: 'enable' },
    { step: 4, line: 22, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { USART1_CR1: 0x0000002C }, highlightVar: 'USART1_CR1', isDanger: false, output: [], explanation: { icon: 'register', text: 'CR1 |= (1<<5) 使能接收中断', color: 'green', actor: 'CPU', detail: 'RXNEIE=1 使能接收中断。当接收到数据时，硬件自动触发中断，执行 USART1_IRQHandler。' }, prediction: { question: '接收中断的作用是什么？', options: ['提高发送速度', '异步接收数据', '降低功耗'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:USART1_CR1', timing: 'irq-enable' },
    { step: 5, line: 26, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], vars: {}, highlightVar: 'USART1_SR', isDanger: false, output: [], explanation: { icon: 'wait', text: 'while(!(SR & TXE)) 等待发送缓冲区空', color: 'purple', actor: 'CPU', detail: 'TXE=1 表示发送缓冲区为空，可以写入新数据。这是轮询方式等待硬件就绪。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:USART1_SR', timing: 'wait-tx' },
    { step: 6, line: 27, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], vars: { USART1_DR: 'A' }, highlightVar: 'USART1_DR', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'USART1_DR = \"A\" 发送字符', color: 'green', actor: 'UART', detail: '写入 DR 后，硬件自动添加起始位、停止位，按波特率串行输出。CPU 可继续执行其他任务。' }, prediction: null, misconception: null, actor: 'UART', target: 'var:USART1_DR', timing: 'transmit' },
    { step: 7, line: 32, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], vars: { rx_data: 'R', rx_ready: 1 }, highlightVar: 'rx_data', isDanger: false, output: [], explanation: { icon: 'interrupt', text: '中断接收：rx_data = DR', color: 'orange', actor: 'ISR', detail: '硬件接收到数据后触发中断，ISR 读取 DR 寄存器，设置 rx_ready 标志。主循环检测到标志后处理数据。' }, prediction: { question: '中断接收相比轮询有什么优势？', options: ['代码简单', '不占用 CPU', '提高波特率'], answer: 1 }, misconception: null, actor: 'ISR', target: 'var:rx_data', timing: 'irq-rx' },
    { step: 8, line: 42, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], vars: { rx_ready: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'TX: A' }, { type: 'success', text: 'RX: R, TX: R (echo)' }], explanation: { icon: 'terminal', text: '回显接收到的数据', color: 'green', actor: 'CPU', detail: '主循环检测到 rx_ready 后，将接收到的数据回显发送。这是串口调试的常用技术：echo。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'echo' }
  ],
  summary: {
    oneLiner: 'BRR 设置波特率，CR1 使能 UART 和中断，DR 寄存器收发数据',
    pitfalls: [
      '发送前必须检查 TXE 标志，否则数据可能丢失',
      '接收中断中读取 DR 会自动清除 RXNE 标志',
      'volatile 确保主循环和 ISR 看到相同的变量值'
    ],
    transferQuestion: '如果波特率设置错误会发生什么？',
    miniExercise: {
      bugCode: 'uart_init(9600);  // 上位机波特率 115200\\n// 这样能通信吗？',
      hint: '不能！双方波特率必须一致。9600 vs 115200 会导致接收乱码。'
    }
  }
};
