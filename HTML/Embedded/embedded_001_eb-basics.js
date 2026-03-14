window.LESSON_DATA = {
  meta: {
    id: 'embedded-1',
    title: '嵌入式系统概述',
    chapter: 'embedded',
    index: 1,
    filename: 'embedded-basics.c',
    keyPoints: ['寄存器操作', '位带操作', '内存映射']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'PERIPH_BASE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x40000000' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIOA_BASE' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(PERIPH_BASE + 0x0000)' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIOA_MODER' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)(GPIOA_BASE + 0x00))' }] },
    { num: 7, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'GPIOA_ODR' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)(GPIOA_BASE + 0x14))' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'gpio_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 配置 PA5 为通用输出模式' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'GPIOA_MODER' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '~' }, { type: 'punc', text: '(' }, { type: 'num', text: '0x3' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'GPIOA_MODER' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '0x1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '5' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ')' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'punc', text: '}' }] },
    { num: 14, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'gpio_toggle' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'GPIOA_ODR' }, { type: 'ws', text: ' ' }, { type: 'op', text: '^=' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'num', text: '0x1' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '5' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 翻转 PA5' }] },
    { num: 17, tokens: [{ type: 'punc', text: '}' }] },
    { num: 18, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 19, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'gpio_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 22, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'gpio_toggle' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '100000' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'j' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'punc', text: '{' }, { type: 'punc', text: '}' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 26, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'GPIOA_MODER', name: 'GPIOA_MODER', type: 'volatile uint32_t', addr: '0x40000000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'GPIOA_ODR', name: 'GPIOA_ODR', type: 'volatile uint32_t', addr: '0x40000014', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习嵌入式系统概述', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { GPIOA_MODER: 0x00000000 }, highlightVar: 'GPIOA_MODER', isDanger: false, output: [], explanation: { icon: 'register', text: '配置 MODER 寄存器，清零 PA5 模式位', color: 'yellow', actor: 'CPU', detail: 'MODER 是模式寄存器，每 2 位控制一个引脚。PA5 对应 bit[11:10]。&= ~(0x3<<(5*2)) 将 bit[11:10] 清零，为配置做准备。' }, prediction: { question: '为什么先清零再设置？', options: ['硬件要求', '确保只修改目标位', '节省指令'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:GPIOA_MODER', timing: 'rmw' },
    { step: 2, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { GPIOA_MODER: 0x00000400 }, highlightVar: 'GPIOA_MODER', isDanger: false, output: [], explanation: { icon: 'bolt', text: '设置 PA5 为输出模式 (01)', color: 'green', actor: 'CPU', detail: 'MODER 的 2 位编码：00=输入，01=输出，10=复用，11=模拟。|= (0x1<<(5*2)) 设置 bit[11:10]=01，PA5 配置为通用输出。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:GPIOA_MODER', timing: 'rmw' },
    { step: 3, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { GPIOA_ODR: 0x00000000 }, highlightVar: 'GPIOA_ODR', isDanger: false, output: [], explanation: { icon: 'register', text: 'ODR 寄存器，控制引脚输出电平', color: 'blue', actor: 'CPU', detail: 'ODR 是输出数据寄存器，每位对应一个引脚。bit5=0 输出低电平，bit5=1 输出高电平。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:GPIOA_ODR', timing: 'output' },
    { step: 4, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { GPIOA_ODR: 0x00000020 }, highlightVar: 'GPIOA_ODR', isDanger: false, output: [], explanation: { icon: 'bolt', text: '^= (1<<5) 翻转 PA5 电平', color: 'green', actor: 'CPU', detail: 'XOR 操作翻转特定位。0x00000020 = bit5=1，PA5 输出高电平，LED 点亮。再次执行则 bit5=0，LED 熄灭。' }, prediction: { question: 'XOR 操作的特点是什么？', options: ['置位', '清零', '翻转'], answer: 2 }, misconception: null, actor: 'CPU', target: 'var:GPIOA_ODR', timing: 'toggle' },
    { step: 5, line: 21, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], vars: { i: 0 }, highlightVar: 'i', isDanger: false, output: [], explanation: { icon: 'loop', text: 'for 循环 10 次，LED 闪烁', color: 'purple', actor: 'CPU', detail: '主循环执行 10 次 LED 闪烁。volatile 确保编译器不优化掉循环（因为 i 没有被使用）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:i', timing: 'loop' },
    { step: 6, line: 22, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { GPIOA_ODR: 'toggling' }, highlightVar: 'GPIOA_ODR', isDanger: false, output: [], explanation: { icon: 'flash', text: 'gpio_toggle() 翻转 LED 状态', color: 'green', actor: 'CPU', detail: '每次调用翻转一次 ODR 的 bit5。LED 在亮/灭之间切换。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:GPIOA_ODR', timing: 'toggle' },
    { step: 7, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { j: 'counting' }, highlightVar: 'j', isDanger: false, output: [], explanation: { icon: 'clock', text: '延时循环，控制闪烁频率', color: 'orange', actor: 'CPU', detail: '空循环消耗 CPU 周期，产生软件延时。实际项目应该用定时器，而不是忙等待。' }, prediction: null, misconception: { title: '软件延时的缺点', text: '浪费 CPU 资源，时间不精确。应该使用硬件定时器产生精确延时，同时释放 CPU 执行其他任务。' }, actor: 'CPU', target: 'var:j', timing: 'delay' },
    { step: 8, line: 25, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], vars: {}, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'LED blinked 10 times' }], explanation: { icon: 'check', text: '程序完成，LED 闪烁 10 次', color: 'green', actor: 'CPU', detail: '嵌入式编程核心：1) 内存映射 I/O（寄存器映射到地址）；2) volatile 确保真实访问硬件；3) 位操作配置和控制外设。' }, prediction: null, misconception: null, actor: 'CPU', target: 'exit', timing: 'exit' }
  ],
  summary: {
    oneLiner: '内存映射 I/O、volatile 确保硬件访问、位操作配置寄存器',
    pitfalls: [
      'volatile 确保每次访问都读写硬件，不被编译器优化',
      '读 - 改-写（RMW）操作：先清零目标位，再设置新值',
      'XOR 翻转特定位，实现 LED  toggling'
    ],
    transferQuestion: '如果要配置 PA5 为输入模式，MODER 应该怎么设置？',
    miniExercise: {
      bugCode: '#define LED_PIN 5\\nGPIOA_ODR = (1 << LED_PIN);  // 这样对吗？',
      hint: '不对！直接赋值会覆盖其他引脚。应该用 GPIOA_ODR |= (1 << LED_PIN) 只设置目标位。'
    }
  }
};
