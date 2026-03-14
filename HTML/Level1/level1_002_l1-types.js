window.LESSON_DATA = {
  meta: {
    id: 'l1-types',
    title: '整型类型与溢出',
    chapter: 'level1',
    index: 2,
    filename: 'int-overflow.c',
    keyPoints: ['stdint 类型', '溢出', '数据范围']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '250' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 传感器原始值' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'sensor' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 累加后溢出' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"sensor = %u (expected 260)\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint16_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '65530' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'counter' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 65531' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'counter' }, { type: 'op', text: '++' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 65532' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int16_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '32760' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'temp' }, { type: 'ws', text: ' ' }, { type: 'op', text: '+=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 有符号溢出' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"counter = %u, temp = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'counter' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'temp' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'sensor', name: 'sensor', type: 'uint8_t', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'counter', name: 'counter', type: 'uint16_t', addr: '0x7ffc02', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 4 },
    { key: 'temp', name: 'temp', type: 'int16_t', addr: '0x7ffc04', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 6 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习整型类型与溢出', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [3, 4], vars: { sensor: 250 }, highlightVar: 'sensor', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 uint8_t 变量 sensor = 250', color: 'yellow', actor: 'CPU', detail: 'uint8_t 是无符号 8 位整数，取值范围 0~255。250 在合法范围内。嵌入式中常用于传感器原始值 (ADC 采样 0-255)。' }, prediction: { question: 'uint8_t 的最大值是多少？', options: ['127', '255', '65535'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:sensor', timing: 'main-loop' },
    { step: 2, line: 6, executedLines: [3, 4, 5], vars: { sensor: 4 }, highlightVar: 'sensor', isDanger: true, output: [], explanation: { icon: 'alert', text: 'sensor += 10 发生溢出！250+10=260 超过 255，回绕到 4', color: 'red', actor: 'CPU', detail: 'uint8_t 最大值是 255。250+10=260 超出范围，发生无符号溢出。CPU 执行加法后只保留低 8 位：260 = 0x104，低 8 位是 0x04 = 4。这称为"回绕"(wrap around)。' }, prediction: null, misconception: { title: '无符号溢出不会报错但会回绕', text: 'C 语言不检查无符号整数溢出。250+10 不会得到 260，而是回绕到 4(260-256)。这是嵌入式系统常见 bug 来源。' }, actor: 'CPU', target: 'var:sensor', timing: 'main-loop' },
    { step: 3, line: 7, executedLines: [3, 4, 5, 6], vars: { sensor: 4 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'sensor = 4 (expected 260)' }], explanation: { icon: 'terminal', text: 'printf 输出 sensor = 4，而不是预期的 260', color: 'green', actor: 'CPU', detail: '%u 是无符号十进制格式符。输出结果 4 揭示了溢出问题。实际开发中应使用更大类型 (如 uint16_t) 或添加溢出检查。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 4, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { sensor: 4, counter: 65530 }, highlightVar: 'counter', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 uint16_t 变量 counter = 65530', color: 'blue', actor: 'CPU', detail: 'uint16_t 是无符号 16 位整数，取值范围 0~65535。65530 接近最大值，再加就会溢出。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:counter', timing: 'main-loop' },
    { step: 5, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { sensor: 4, counter: 65531 }, highlightVar: 'counter', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'counter++ 变为 65531，仍在范围内', color: 'green', actor: 'CPU', detail: '65530+1=65531 < 65535，未溢出。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:counter', timing: 'main-loop' },
    { step: 6, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { sensor: 4, counter: 65532 }, highlightVar: 'counter', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'counter++ 变为 65532，仍在范围内', color: 'green', actor: 'CPU', detail: '65531+1=65532 < 65535，未溢出。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:counter', timing: 'main-loop' },
    { step: 7, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { sensor: 4, counter: 65532, temp: 32760 }, highlightVar: 'temp', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int16_t 变量 temp = 32760', color: 'orange', actor: 'CPU', detail: 'int16_t 是有符号 16 位整数，取值范围 -32768~32767。32760 接近正最大值 32767。' }, prediction: { question: 'int16_t 的最大值是多少？', options: ['32767', '65535', '2147483647'], answer: 0 }, misconception: null, actor: 'CPU', target: 'var:temp', timing: 'main-loop' },
    { step: 8, line: 12, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { sensor: 4, counter: 65532, temp: -32766 }, highlightVar: 'temp', isDanger: true, output: [], explanation: { icon: 'alert', text: 'temp += 10 发生有符号溢出！32760+10=32770 超过 32767，变为负数', color: 'red', actor: 'CPU', detail: '有符号整数溢出是未定义行为 (Undefined Behavior)。在大多数补码系统中，32770 的二进制 0x8002 被解释为 -32766。最高位 1 表示负数。' }, prediction: null, misconception: { title: '有符号溢出是未定义行为', text: '无符号溢出定义明确 (回绕)，但有符号溢出是未定义行为。编译器可能产生任意结果，不能依赖特定行为。应使用更大类型或检查溢出。' }, actor: 'CPU', target: 'var:temp', timing: 'main-loop' },
    { step: 9, line: 13, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { sensor: 4, counter: 65532, temp: -32766 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'counter = 65532, temp = -32766' }], explanation: { icon: 'terminal', text: 'printf 输出：counter = 65532, temp = -32766', color: 'green', actor: 'CPU', detail: 'counter 正常累加到 65532；temp 因有符号溢出变为负数 -32766。这演示了溢出的危险性。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: 'uint8_t 范围 0~255，uint16_t 范围 0~65535，超过最大值会回绕 (无符号) 或未定义行为 (有符号)',
    pitfalls: [
      'uint8_t 最大值 255，250+10 会回绕到 4 而不是 260',
      '有符号整数溢出是未定义行为，可能变为负数或产生其他异常结果',
      '嵌入式开发应选择合适类型，传感器数据用 uint16_t 避免溢出'
    ],
    transferQuestion: '如果 uint8_t x = 0，执行 x-- 后 x 的值是多少？(提示：无符号下溢)',
    miniExercise: {
      bugCode: 'uint8_t timeout = 0;\ntimeout--;  // timeout 现在是多少？',
      hint: '无符号数减法下溢会回绕到最大值'
    }
  }
};
