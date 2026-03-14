window.LESSON_DATA = {
  meta: {
    id: 'l1-printf',
    title: 'printf 格式化输出',
    chapter: 'level1',
    index: 1,
    filename: 'printf-format.c',
    keyPoints: ['格式符', '十六进制输出', '调试打印']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '42' }, { type: 'punc', text: ';' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0xDEADBEEF' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 寄存器值' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'voltage' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3.3f' }, { type: 'punc', text: ';' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'id', text: 'msg' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: '"System Ready"' }, { type: 'punc', text: ';' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[INFO] num = %d\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'num' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[DEBUG] reg = 0x%x\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'reg' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[SENSOR] voltage = %.2f V\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'voltage' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[STATUS] %s\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'msg' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'num', name: 'num', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'reg', name: 'reg', type: 'uint32_t', addr: '0x7ffc04', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 2 },
    { key: 'voltage', name: 'voltage', type: 'float', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 3 },
    { key: 'msg', name: 'msg', type: 'char*', addr: '0x7ffc0c', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习 printf 格式化输出', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [3, 4], vars: { num: 42 }, highlightVar: 'num', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int 变量 num = 42', color: 'yellow', actor: 'CPU', detail: 'num 存储在栈上，占用 4 字节，值为 42。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:num', timing: 'main-loop' },
    { step: 2, line: 6, executedLines: [3, 4, 5], vars: { num: 42, reg: 3735928559 }, highlightVar: 'reg', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 uint32_t 变量 reg = 0xDEADBEEF (十六进制)', color: 'purple', actor: 'CPU', detail: '0x 前缀表示十六进制。0xDEADBEEF = 3,735,928,559(十进制)。嵌入式开发中常用十六进制表示寄存器值、内存地址。' }, prediction: { question: '0xFF 的十进制值是多少？', options: ['100', '255', '512'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:reg', timing: 'main-loop' },
    { step: 3, line: 7, executedLines: [3, 4, 5, 6], vars: { num: 42, reg: 3735928559, voltage: 3.3 }, highlightVar: 'voltage', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 float 变量 voltage = 3.3f', color: 'orange', actor: 'CPU', detail: 'float 是单精度浮点数，后缀 f 表示 float 字面量。3.3f 存储在内存中遵循 IEEE 754 标准。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:voltage', timing: 'main-loop' },
    { step: 4, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { num: 42, reg: 3735928559, voltage: 3.3, msg: '0x????' }, highlightVar: 'msg', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 char 指针 msg 指向字符串常量"System Ready"', color: 'blue', actor: 'CPU', detail: 'msg 存储的是字符串首字符的地址。字符串字面量存储在只读数据段。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:msg', timing: 'main-loop' },
    { step: 5, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { num: 42, reg: 3735928559, voltage: 3.3, msg: '0x????' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INFO] num = 42' }], explanation: { icon: 'terminal', text: 'printf 使用%d 格式符输出十进制整数', color: 'green', actor: 'CPU', detail: '%d 是有符号十进制整数格式符。printf 将 int 值 42 转换为 ASCII 字符串"42"输出到终端。' }, prediction: { question: '%d 是输出什么进制的格式符？', options: ['二进制', '十进制', '十六进制'], answer: 1 }, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 6, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { num: 42, reg: 3735928559, voltage: 3.3, msg: '0x????' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INFO] num = 42' }, { type: 'success', text: '[DEBUG] reg = 0xdeadbeef' }], explanation: { icon: 'terminal', text: 'printf 使用%x 格式符输出十六进制无符号整数', color: 'green', actor: 'CPU', detail: '%x 是十六进制格式符 (小写 a-f)。0x%x 组合输出标准的十六进制格式。嵌入式调试中常用%x 打印寄存器值、内存内容。' }, prediction: null, misconception: { title: '%x 和%X 的区别', text: '%x 输出小写 a-f(如 deadbeef)，%X 输出大写 A-F(如 DEADBEEF)。数值相同只是字母大小写不同。' }, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 7, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { num: 42, reg: 3735928559, voltage: 3.3, msg: '0x????' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INFO] num = 42' }, { type: 'success', text: '[DEBUG] reg = 0xdeadbeef' }, { type: 'success', text: '[SENSOR] voltage = 3.30 V' }], explanation: { icon: 'terminal', text: 'printf 使用%.2f 格式符输出保留 2 位小数的浮点数', color: 'green', actor: 'CPU', detail: '%.2f 表示保留 2 位小数。3.3f 被格式化为"3.30"。%.1f 保留 1 位，%.3f 保留 3 位。嵌入式中常用于传感器数据、电压电流值输出。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 8, line: 12, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { num: 42, reg: 3735928559, voltage: 3.3, msg: '0x????' }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: '[INFO] num = 42' }, { type: 'success', text: '[DEBUG] reg = 0xdeadbeef' }, { type: 'success', text: '[SENSOR] voltage = 3.30 V' }, { type: 'success', text: '[STATUS] System Ready' }], explanation: { icon: 'terminal', text: 'printf 使用%s 格式符输出字符串', color: 'green', actor: 'CPU', detail: '%s 是字符串格式符。printf 从 msg 所指地址开始读取字符，直到遇到\\0 终止符。输出"System Ready"。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: 'printf 用格式符控制输出：%d 十进制、%x 十六进制、%.2f 浮点、%s 字符串',
    pitfalls: [
      '%d 用于有符号 int，%u 用于无符号 uint32_t，用错会导致负数显示错误',
      '%x 输出小写 a-f，%X 输出大写 A-F，数值相同只是字母大小写不同',
      '浮点数有精度误差，比较浮点数应用误差范围而非直接=='
    ],
    transferQuestion: '如果 reg 是 int 类型且值为 -1，用%x 输出会显示什么？(提示：考虑补码表示)',
    miniExercise: {
      bugCode: 'uint32_t val = 0x123;\nprintf("val = %d\\n", val);  // 这样输出有什么问题？',
      hint: '无符号类型应该用%u 而不是%d，大数时会显示负数'
    }
  }
};
