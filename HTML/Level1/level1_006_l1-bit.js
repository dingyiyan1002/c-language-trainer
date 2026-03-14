window.LESSON_DATA = {
  meta: {
    id: 'l1-bit',
    title: '位运算',
    chapter: 'level1',
    index: 6,
    filename: 'bit-operation.c',
    keyPoints: ['位运算', '掩码操作', '寄存器配置']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x00' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 标志寄存器' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x01' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 设置 bit0: 使能' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '|=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x04' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 设置 bit2: 中断' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"flags = 0x%02X (binary: "' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'flags' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mask' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x04' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'if' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '(' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'mask' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 11, tokens: [{ type: 'ws', text: '        ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"\\n[CHECK] Bit2 is SET\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '&=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '~' }, { type: 'id', text: 'mask' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 清除 bit2' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"flags = 0x%02X\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'flags' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '^=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x01' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 翻转 bit0' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'flags' }, { type: 'ws', text: ' ' }, { type: 'op', text: '<<=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '2' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 左移 2 位' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"flags = 0x%02X (after shift)\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'flags' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'flags', name: 'flags', type: 'uint8_t', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'mask', name: 'mask', type: 'uint8_t', addr: '0x7ffc01', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 5 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习位运算', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [3, 4], vars: { flags: 0 }, highlightVar: 'flags', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 uint8_t 变量 flags = 0x00，标志寄存器', color: 'yellow', actor: 'CPU', detail: 'flags 是 8 位寄存器，每个位 (bit) 可以独立表示一个开关状态。bit0=使能，bit1=就绪，bit2=中断，等等。嵌入式系统中常用位运算配置寄存器。' }, prediction: { question: '0x00 的二进制表示是什么？', options: ['00000000', '11111111', '00001111'], answer: 0 }, misconception: null, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 2, line: 6, executedLines: [3, 4, 5], vars: { flags: 1 }, highlightVar: 'flags', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'flags |= 0x01，设置 bit0 为 1 (使能)', color: 'green', actor: 'CPU', detail: '|= 是按位或赋值。0x00 | 0x01 = 00000000 | 00000001 = 00000001 = 0x01。或运算特性：任何位与 1 或结果为 1，与 0 或结果不变。所以|=用于设置特定位为 1。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 3, line: 7, executedLines: [3, 4, 5, 6], vars: { flags: 5 }, highlightVar: 'flags', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'flags |= 0x04，设置 bit2 为 1 (中断使能)', color: 'green', actor: 'CPU', detail: '0x01 | 0x04 = 00000001 | 00000100 = 00000101 = 0x05。bit0 和 bit2 都被设置为 1。注意 bit1 保持为 0，因为 0x04 的 bit1 是 0。' }, prediction: null, misconception: { title: '|=只影响目标位，不影响其他位', text: 'flags |= 0x04 只设置 bit2，bit0 和 bit1 等其他位不受影响。这是位运算的精髓：独立控制每个位。' }, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 4, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { flags: 5 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }], explanation: { icon: 'terminal', text: 'printf 输出 flags = 0x05', color: 'green', actor: 'CPU', detail: '%02X 格式表示输出两位十六进制，不足补零。0x05 输出为"05"。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { flags: 5, mask: 4 }, highlightVar: 'mask', isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }], explanation: { icon: 'memory', text: '声明 mask = 0x04，用于检查 bit2', color: 'purple', actor: 'CPU', detail: 'mask 是位掩码 (bitmask)，0x04 = 00000100，只有 bit2 是 1。用于检查或操作特定位。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:mask', timing: 'main-loop' },
    { step: 6, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { flags: 5, mask: 4 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }], explanation: { icon: 'target', text: '判断 flags & mask，即 0x05 & 0x04', color: 'orange', actor: 'CPU', detail: '& 是按位与运算。0x05 & 0x04 = 00000101 & 00000100 = 00000100 = 0x04。结果非 0，在 C 语言中表示真 (true)。' }, prediction: { question: '0x05 & 0x04 的结果是什么？', options: ['0x00', '0x04', '0x05'], answer: 1 }, misconception: null, actor: 'CPU', target: 'control-flow', timing: 'condition-check' },
    { step: 7, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { flags: 5, mask: 4 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }], explanation: { icon: 'terminal', text: '输出 [CHECK] Bit2 is SET', color: 'green', actor: 'CPU', detail: 'flags & mask 非 0，说明 bit2 被设置。这是检查特定位的标准方法：用&运算，结果非 0 表示该位为 1。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 8, line: 13, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { flags: 1, mask: 4 }, highlightVar: 'flags', isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }], explanation: { icon: 'bolt', text: 'flags &= ~mask，清除 bit2', color: 'green', actor: 'CPU', detail: '~是按位取反。~0x04 = ~00000100 = 11111011。flags & ~mask = 0x05 & 0xFB = 00000101 & 11111011 = 00000001 = 0x01。清除 bit2 但保留其他位。' }, prediction: null, misconception: { title: '清除位用&=~mask，不是&=mask', text: '清除 bit2 应该用 flags &= ~0x04，不是 flags &= 0x04。~mask 产生"除了目标位外全为 1"的掩码，&运算后只有目标位被清零。' }, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 9, line: 14, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { flags: 1, mask: 4 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }, { type: 'success', text: 'flags = 0x01' }], explanation: { icon: 'terminal', text: '输出 flags = 0x01', color: 'green', actor: 'CPU', detail: 'bit2 已被清除，现在只有 bit0 为 1。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 10, line: 15, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { flags: 0, mask: 4 }, highlightVar: 'flags', isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }, { type: 'success', text: 'flags = 0x01' }], explanation: { icon: 'bolt', text: 'flags ^= 0x01，翻转 bit0', color: 'green', actor: 'CPU', detail: '^是异或运算。0x01 ^ 0x01 = 00000001 ^ 00000001 = 00000000 = 0x00。异或特性：相同为 0，不同为 1。任何位与 1 异或会翻转，与 0 异或不变。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 11, line: 16, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { flags: 0, mask: 4 }, highlightVar: 'flags', isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }, { type: 'success', text: 'flags = 0x01' }], explanation: { icon: 'bolt', text: 'flags <<= 2，左移 2 位', color: 'green', actor: 'CPU', detail: '<<= 是左移赋值。0x00 << 2 = 00000000 << 2 = 00000000 = 0x00。左移 n 位等于乘以 2^n。低位补 0，高位丢弃。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:flags', timing: 'main-loop' },
    { step: 12, line: 17, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { flags: 0, mask: 4 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'flags = 0x05 (binary: ' }, { type: 'success', text: '[CHECK] Bit2 is SET' }, { type: 'success', text: 'flags = 0x01' }, { type: 'success', text: 'flags = 0x00 (after shift)' }], explanation: { icon: 'terminal', text: '输出 flags = 0x00 (after shift)', color: 'green', actor: 'CPU', detail: '左移后结果仍为 0。位运算在嵌入式中用于寄存器配置、标志位管理、数据压缩等场景。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '|=设置位，&=~清除位，^=翻转位，&检查位，<<=左移乘 2',
    pitfalls: [
      '清除位要用&=~mask 不是&=mask，~mask 产生"除目标位外全 1"的掩码',
      '&按位与结果非 0 表示至少一位为 1，可用来检查特定位是否设置',
      '^异或特性：与 1 异或翻转，与 0 异或不变，可用于切换开关状态'
    ],
    transferQuestion: '如果 flags=0x05，执行 flags ^= 0x05 后结果是什么？(提示：异或的特性)',
    miniExercise: {
      bugCode: 'uint8_t reg = 0x05;\nreg &= 0x04;  // 这样能清除 bit2 吗？',
      hint: '&=0x04 会保留 bit2 但清除其他位，应该用&=~0x04 来清除 bit2'
    }
  }
};
