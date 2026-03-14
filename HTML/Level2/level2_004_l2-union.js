window.LESSON_DATA = {
  meta: {
    id: 'l2-union',
    title: '联合体',
    chapter: 'level2',
    index: 4,
    filename: 'union-data.c',
    keyPoints: ['联合体定义', '内存共享', '数据解析']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'kw', text: 'union' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'Data' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 4, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'raw' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 原始数据' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'struct' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 6, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b0' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 低 8 位' }] },
    { num: 7, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b1' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 次低 8 位' }] },
    { num: 8, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b2' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 次高 8 位' }] },
    { num: 9, tokens: [{ type: 'ws', text: '        ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'b3' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 高 8 位' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'punc', text: '}' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 13, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'union' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'Data' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'raw' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0x12345678' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"raw = 0x%08X\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'raw' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 17, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"bytes: %02X %02X %02X %02X\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: '.' }, { type: 'id', text: 'b0' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: '.' }, { type: 'id', text: 'b1' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: '.' }, { type: 'id', text: 'b2' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: '.' }, { type: 'id', text: 'b3' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'bytes' }, { type: 'punc', text: '.' }, { type: 'id', text: 'b0' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0xAA' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"After b0=0xAA: raw = 0x%08X\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'punc', text: '.' }, { type: 'id', text: 'raw' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 21, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'd', name: 'd', type: 'union Data', addr: '0x7ffc00', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 1 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习联合体', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 3, executedLines: [1, 2], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '定义 union Data 联合体类型', color: 'purple', actor: 'CPU', detail: '联合体 (union) 所有成员共享同一块内存。大小等于最大成员的大小。本例中 raw(uint32_t) 和 bytes(结构体 4 字节) 都是 4 字节，所以联合体大小为 4 字节。' }, prediction: { question: '联合体大小由什么决定？', options: ['所有成员大小之和', '最大成员的大小', '第一个成员的大小'], answer: 1 }, misconception: null, actor: 'CPU', target: 'preprocessor', timing: 'pre-compile' },
    { step: 2, line: 14, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { d: { raw: 0 } }, highlightVar: 'd', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 union Data d，联合体变量', color: 'purple', actor: 'CPU', detail: 'd 是联合体变量，占用 4 字节。raw 和 bytes 共享这 4 字节。修改 raw 会影响 bytes，反之亦然。这是联合体与结构体的关键区别。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:d', timing: 'main-loop' },
    { step: 3, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { d: { raw: 0x12345678 } }, highlightVar: 'd', isDanger: false, output: [], explanation: { icon: 'bolt', text: 'd.raw = 0x12345678，写入原始数据', color: 'green', actor: 'CPU', detail: 'raw=0x12345678 写入联合体的 4 字节内存。由于联合体共享内存，bytes.b0~b3 也对应这 4 个字节的值。小端序下：b0=0x78, b1=0x56, b2=0x34, b3=0x12。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:d', timing: 'main-loop' },
    { step: 4, line: 16, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], vars: { d: { raw: 0x12345678 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'raw = 0x12345678' }], explanation: { icon: 'terminal', text: 'printf 输出 raw = 0x12345678', color: 'green', actor: 'CPU', detail: '%08X 输出 8 位十六进制，不足补零。验证 raw 确实存储了 0x12345678。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 5, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { d: { raw: 0x12345678 } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'raw = 0x12345678' }, { type: 'success', text: 'bytes: 78 56 34 12' }], explanation: { icon: 'terminal', text: 'printf 输出各字节：78 56 34 12', color: 'green', actor: 'CPU', detail: '小端序 (Little Endian)：低位字节在低地址。0x12345678 的最低位 0x78 在 b0，最高位 0x12 在 b3。联合体让我们可以用字节方式访问 32 位数据，非常适合解析二进制协议。' }, prediction: { question: '0x12345678 在小端序下 b3 的值是什么？', options: ['0x12', '0x34', '0x78'], answer: 0 }, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 6, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], vars: { d: { raw: 0x123456AA } }, highlightVar: 'd', isDanger: false, output: [{ type: 'success', text: 'raw = 0x12345678' }, { type: 'success', text: 'bytes: 78 56 34 12' }], explanation: { icon: 'bolt', text: 'd.bytes.b0 = 0xAA，修改最低字节', color: 'green', actor: 'CPU', detail: '通过 bytes.b0 修改最低字节为 0xAA。因为联合体共享内存，raw 的值也会改变。新值 = 0x123456AA（最低字节从 0x78 变为 0xAA）。' }, prediction: null, misconception: { title: '联合体修改一个成员，其他成员"同步"变化', text: '联合体所有成员共享同一内存。修改 b0 后，raw 的值自动"变化"（实际是同一块内存的不同解释方式）。' }, actor: 'CPU', target: 'var:d', timing: 'main-loop' },
    { step: 7, line: 19, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], vars: { d: { raw: 0x123456AA } }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'raw = 0x12345678' }, { type: 'success', text: 'bytes: 78 56 34 12' }, { type: 'success', text: 'After b0=0xAA: raw = 0x123456AA' }], explanation: { icon: 'terminal', text: 'printf 输出 raw = 0x123456AA', color: 'green', actor: 'CPU', detail: '验证了联合体特性：通过 b0 修改最低字节，raw 的值从 0x12345678 变为 0x123456AA。联合体在嵌入式中用于寄存器访问、协议解析、数据转换等场景。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '联合体成员共享内存，大小等于最大成员，修改一个成员其他成员"同步"变化',
    pitfalls: [
      '联合体同一时刻只有一个成员有效，写入一个成员会覆盖其他成员的值',
      '联合体大小等于最大成员的大小（考虑对齐），不是各成员大小之和',
      '字节序 (大端/小端) 影响联合体字节访问结果，x86 是小端序'
    ],
    transferQuestion: '如果 union { uint32_t raw; uint8_t b[4]; } u; u.raw = 0x11223344; u.b[0] 在小端序下是多少？',
    miniExercise: {
      bugCode: 'union Data { uint32_t raw; uint8_t b[4]; } u;\\nu.raw = 0x12345678;\\nprintf("%d", u.raw + u.b[0]);  // 这样用对吗？',
      hint: '联合体同一时刻只有一个成员"有效"，虽然语法上可以同时访问多个成员，但逻辑上不应该混用'
    }
  }
};
