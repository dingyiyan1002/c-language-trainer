window.LESSON_DATA = {
  meta: {
    id: 'l5-driver',
    title: '设备驱动基础',
    chapter: 'level5',
    index: 2,
    filename: 'device-driver.c',
    keyPoints: ['寄存器访问', '内存映射', '中断处理']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '/usr/include/linux/ioctl.h>' }] },
    { num: 4, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIO_BASE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x4804C000' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIO_OE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x134' }] },
    { num: 7, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIO_DATAOUT' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x13C' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'typedef' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'outen' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 输出使能' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'dataout' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 数据输出' }] },
    { num: 12, tokens: [{ type: 'kw', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'gpio_t' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'gpio_t' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'gpio' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'gpio_t' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'punc', text: ')' }, { type: 'id', text: 'GPIO_BASE' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'led_mask' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x01' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// LED 连接 GPIO1' }] },
    { num: 17, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 配置 GPIO1 为输出模式' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'gpio' }, { type: 'op', text: '->' }, { type: 'id', text: 'outen' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '~' }, { type: 'id', text: 'led_mask' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'gpio' }, { type: 'op', text: '->' }, { type: 'id', text: 'dataout' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'led_mask' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// LED ON' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"GPIO configured, LED ON\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'gpio', name: 'gpio', type: 'gpio_t*', addr: '0x4804C000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'led_mask', name: 'led_mask', type: 'uint32_t', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习设备驱动基础', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { gpio: '0x4804C000' }, highlightVar: 'gpio', isDanger: false, output: [], explanation: { icon: 'memory', text: 'gpio_t *gpio = (gpio_t*)GPIO_BASE 内存映射', color: 'yellow', actor: 'CPU', detail: 'GPIO_BASE 是硬件寄存器的物理地址。通过指针强制转换，将虚拟地址空间的指针指向硬件寄存器。这是内存映射 I/O（MMIO）技术。' }, prediction: { question: '内存映射 I/O 是什么？', options: ['将文件映射到内存', '将硬件寄存器映射到内存地址', '虚拟内存技术'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:gpio', timing: 'mmap' },
    { step: 2, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { gpio: '0x4804C000' }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'memory', text: 'uint32_t led_mask = 0x01，LED 位掩码', color: 'blue', actor: 'CPU', detail: 'led_mask = 0x01 = 0001(二进制)，代表 GPIO1。位掩码用于选择特定的 GPIO 引脚。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:led_mask', timing: 'init' },
    { step: 3, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { gpio: '0x4804C000', led_mask: 0x01 }, highlightVar: 'gpio', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'gpio->outen &= ~led_mask 配置 GPIO1 为输出', color: 'green', actor: 'CPU', detail: 'outen 寄存器：0=输出，1=输入。~led_mask = ~0x01 = 0xFFFFFFFE。outen &= 0xFFFFFFFE 将 bit0 清零，配置 GPIO1 为输出模式。' }, prediction: { question: '为什么用~led_mask？', options: ['取反后清零目标位', '设置目标位', '翻转目标位'], answer: 0 }, misconception: { title: '位操作配置寄存器', text: '&= ~mask 清零目标位（配置为输出）；|= mask 设置目标位（输出高电平）。这是寄存器配置的标准操作。' }, actor: 'CPU', target: 'var:gpio', timing: 'config' },
    { step: 4, line: 20, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], vars: { gpio: '0x4804C000', led_mask: 0x01 }, highlightVar: 'gpio', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'gpio->dataout |= led_mask 输出高电平', color: 'green', actor: 'CPU', detail: 'dataout |= 0x01 设置 GPIO1 输出高电平（3.3V）。LED 阳极接 GPIO，阴极接地，高电平点亮 LED。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:gpio', timing: 'write' },
    { step: 5, line: 22, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { gpio: '0x4804C000', led_mask: 0x01 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'GPIO configured, LED ON' }], explanation: { icon: 'terminal', text: 'printf 输出配置完成', color: 'green', actor: 'CPU', detail: 'LED 已点亮。实际嵌入式系统中，这里会有延时和循环，实现 LED 闪烁效果。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'output' }
  ],
  summary: {
    oneLiner: '内存映射 I/O 将硬件寄存器映射到内存地址，volatile 确保每次访问都读写硬件',
    pitfalls: [
      'volatile 关键字确保编译器不优化寄存器访问，每次都真正读写硬件',
      '&= ~mask 清零目标位（配置输出模式），|= mask 设置目标位（输出高电平）',
      '物理地址需要通过 MMU 映射到虚拟地址才能访问'
    ],
    transferQuestion: '如果要熄灭 LED，应该怎么写代码？',
    miniExercise: {
      bugCode: '// 熄灭 LED\\ngpio->dataout &= led_mask;  // 这样对吗？',
      hint: '不对！应该是 gpio->dataout &= ~led_mask; 这样才能清零 GPIO1 输出（熄灭 LED）。'
    }
  }
};
