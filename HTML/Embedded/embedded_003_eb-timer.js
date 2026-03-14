window.LESSON_DATA = {
  meta: {
    id: 'embedded-3',
    title: '定时器系统',
    chapter: 'embedded',
    index: 3,
    filename: 'timer-system.c',
    keyPoints: ['定时器配置', 'PWM 输出', '输入捕获']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'TIM2_CR1' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40000000)' }] },
    { num: 5, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'TIM2_ARR' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x4000002C)' }] },
    { num: 6, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'TIM2_PSC' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40000028)' }] },
    { num: 7, tokens: [{ type: 'kw', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'TIM2_CCR1' }, { type: 'ws', text: ' ' }, { type: 'num', text: '(*(volatile uint32_t *)0x40000034)' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'timer_pwm_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'cmt', text: '// 配置定时器 2 产生 PWM 波形' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'TIM2_PSC' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '71' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 72MHz/72=1MHz 计数频率' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'TIM2_ARR' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '999' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 1MHz/1000=1kHz PWM 频率' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'TIM2_CCR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '500' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 50% 占空比' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'TIM2_CR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x01' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 启动定时器' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] },
    { num: 16, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 17, tokens: [{ type: 'kw', text: 'void' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'timer_set_duty' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'uint16_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'duty' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'TIM2_CCR1' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'duty' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 0-999: 0%-100% 占空比' }] },
    { num: 19, tokens: [{ type: 'punc', text: '}' }] },
    { num: 20, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 21, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 22, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'timer_pwm_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'uint16_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'duty' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'duty' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '1000' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'duty' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 24, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'timer_set_duty' }, { type: 'punc', text: '(' }, { type: 'id', text: 'duty' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'for' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'volatile' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'delay' } }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'delay' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10000' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'delay' }, { type: 'op', text: '++' }, { type: 'punc', text: ')' }, { type: 'punc', text: '{' }, { type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 27, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 28, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'TIM2_CR1', name: 'TIM2_CR1', type: 'volatile uint32_t', addr: '0x40000000', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'TIM2_ARR', name: 'TIM2_ARR', type: 'volatile uint32_t', addr: '0x4000002C', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'TIM2_CCR1', name: 'TIM2_CCR1', type: 'volatile uint32_t', addr: '0x40000034', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习定时器系统', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 11, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vars: { TIM2_PSC: 71 }, highlightVar: 'TIM2_PSC', isDanger: false, output: [], explanation: { icon: 'register', text: 'TIM2_PSC = 71，预分频器', color: 'yellow', actor: 'CPU', detail: '定时器时钟源 72MHz，PSC=71 时分频系数为 72，计数频率 = 72MHz/72 = 1MHz，每个计数周期 1μs。' }, prediction: { question: 'PSC=71 时，计数频率是多少？', options: ['72MHz', '1MHz', '72kHz'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:TIM2_PSC', timing: 'config' },
    { step: 2, line: 12, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { TIM2_PSC: 71, TIM2_ARR: 999 }, highlightVar: 'TIM2_ARR', isDanger: false, output: [], explanation: { icon: 'register', text: 'TIM2_ARR = 999，自动重装载值', color: 'blue', actor: 'CPU', detail: 'ARR 是自动重装载寄存器。计数器从 0 计数到 999，共 1000 个计数。PWM 频率 = 1MHz/1000 = 1kHz。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:TIM2_ARR', timing: 'config' },
    { step: 3, line: 13, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { TIM2_PSC: 71, TIM2_ARR: 999, TIM2_CCR1: 500 }, highlightVar: 'TIM2_CCR1', isDanger: false, output: [], explanation: { icon: 'register', text: 'TIM2_CCR1 = 500，设置占空比', color: 'purple', actor: 'CPU', detail: 'CCR1 是比较寄存器。当计数器 < CCR1 时输出有效电平，否则无效。占空比 = CCR1/(ARR+1) = 500/1000 = 50%。' }, prediction: { question: '50% 占空比时 CCR1 应该是多少？', options: ['250', '500', '750'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:TIM2_CCR1', timing: 'config' },
    { step: 4, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { TIM2_CR1: 0x01 }, highlightVar: 'TIM2_CR1', isDanger: false, output: [], explanation: { icon: 'play', text: 'TIM2_CR1 |= 0x01 启动定时器', color: 'green', actor: 'CPU', detail: 'CR1 的 bit0(CEN) 是计数器使能位。设置后定时器开始计数，硬件自动产生 PWM 波形，无需 CPU 干预。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:TIM2_CR1', timing: 'start' },
    { step: 5, line: 23, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], vars: { duty: 0 }, highlightVar: 'duty', isDanger: false, output: [], explanation: { icon: 'loop', text: 'for 循环，duty 从 0 到 1000', color: 'orange', actor: 'CPU', detail: '主循环逐步改变占空比，实现 LED 渐变效果（呼吸灯）。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:duty', timing: 'loop' },
    { step: 6, line: 24, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], vars: { duty: 500 }, highlightVar: 'TIM2_CCR1', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'timer_set_duty(duty) 更新占空比', color: 'green', actor: 'CPU', detail: '写入 CCR1 后，硬件在下一个周期自动使用新值。PWM 更新是即时的，无需软件干预波形生成。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:TIM2_CCR1', timing: 'update' },
    { step: 7, line: 25, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], vars: { delay: 'counting' }, highlightVar: 'delay', isDanger: false, output: [], explanation: { icon: 'clock', text: '软件延时，控制渐变速度', color: 'purple', actor: 'CPU', detail: '延时决定占空比变化的速率。实际项目应使用定时器中断，而不是忙等待。' }, prediction: null, misconception: { title: '硬件定时器的优势', text: '硬件定时器独立于 CPU 运行，可精确控制时间，同时释放 CPU 执行其他任务。软件延时浪费 CPU 资源且精度低。' }, actor: 'CPU', target: 'var:delay', timing: 'delay' },
    { step: 8, line: 26, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], vars: { duty: 1000 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'PWM: 0% → 50% → 100%' }], explanation: { icon: 'terminal', text: '完成一次渐变循环', color: 'green', actor: 'CPU', detail: '占空比从 0% 渐变到 100%，LED 从灭逐渐变亮。这是呼吸灯效果。定时器是嵌入式系统最重要的外设之一。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'complete' }
  ],
  summary: {
    oneLiner: 'PSC 分频、ARR 设置频率、CCR 设置占空比，硬件自动生成 PWM',
    pitfalls: [
      'PSC 分频系数 = PSC 值 + 1，实际分频数为 72',
      'PWM 频率 = 时钟/((PSC+1)×(ARR+1))',
      '占空比 = CCR/(ARR+1)，CCR 决定有效电平时间'
    ],
    transferQuestion: '如果要产生 10kHz 的 PWM，ARR 应该设置为多少？（假设 PSC=71，时钟 72MHz）',
    miniExercise: {
      bugCode: 'TIM2_PSC = 0;  // 不分频\\nTIM2_ARR = 7199;  // 10kHz\\n// 这样配置对吗？',
      hint: '对！72MHz/(0+1)/(7199+1) = 72MHz/7200 = 10kHz。但要注意定时器的最大计数值限制。'
    }
  }
};
