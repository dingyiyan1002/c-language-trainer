window.LESSON_DATA = {
  meta: {
    id: 'bt-data-types',
    title: '数据类型',
    chapter: 'basics-test',
    index: 1,
    filename: 'data-types.c',
    keyPoints: ['数据类型取值范围', '有符号无符号', 'stdint 类型']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdint.h>' }] },
    { num: 3, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 4, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 5, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 有符号整型' }] },
    { num: 6, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'char' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'c' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'str', text: "'A'" }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 字符 (1 字节)' }] },
    { num: 7, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'float' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'f' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3.14f' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 单精度浮点' }] },
    { num: 8, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'double' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'd' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '3.14159' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 双精度浮点' }] },
    { num: 9, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint8_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'u8' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '255' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 无符号 8 位' }] },
    { num: 10, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'uint16_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'u16' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '65535' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int32_t' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's32' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 12, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'signed' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 's_i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'op', text: '-' }, { type: 'num', text: '1' }, { type: 'punc', text: ';' }] },
    { num: 13, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'unsigned' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'u_i' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '4294967295' }, { type: 'punc', text: ';' }] },
    { num: 14, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"int: %d, char: %c\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'i' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'c' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 15, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 16, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'i', name: 'i', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'c', name: 'c', type: 'char', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 2 },
    { key: 'f', name: 'f', type: 'float', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 3 },
    { key: 'd', name: 'd', type: 'double', addr: '0x7ffc10', glowColor: 'rgba(168,85,247,0.35)', accentCls: 'text-purple-400', badgeCls: 'text-purple-400 border-purple-500/30 bg-purple-500/12', appearStep: 4 },
    { key: 'u8', name: 'u8', type: 'uint8_t', addr: '0x7ffc18', glowColor: 'rgba(236,72,153,0.35)', accentCls: 'text-pink-400', badgeCls: 'text-pink-400 border-pink-500/30 bg-pink-500/12', appearStep: 5 },
    { key: 'u16', name: 'u16', type: 'uint16_t', addr: '0x7ffc1c', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 6 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习数据类型', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 5, executedLines: [3, 4], vars: { i: 10 }, highlightVar: 'i', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int 变量 i = 10，分配 4 字节栈空间', color: 'yellow', actor: 'CPU', detail: 'int 类型在大多数系统上占 4 字节 (32 位)，取值范围 -2,147,483,648 到 2,147,483,647。编译器生成 MOV 指令将立即数 10 写入栈内存。' }, prediction: { question: 'int 类型在有符号 32 位系统上的最大值是多少？', options: ['32767', '2147483647', '4294967295'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:i', timing: 'main-loop' },
    { step: 2, line: 6, executedLines: [3, 4, 5], vars: { i: 10, c: 'A' }, highlightVar: 'c', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 char 变量 c = \'A\'，分配 1 字节空间', color: 'blue', actor: 'CPU', detail: 'char 类型固定为 1 字节，存储 ASCII 码值 65（字符'A'的 ASCII 码）。字符常量用单引号括起。' }, prediction: null, misconception: { title: 'char 存储的是 ASCII 码不是字符图形', text: 'char 变量实际存储的是数值（ASCII 码），\'A\' 存储的是 65，\'0\' 存储的是 48。printf 用%c 时才显示为字符图形。' }, actor: 'CPU', target: 'var:c', timing: 'main-loop' },
    { step: 3, line: 7, executedLines: [3, 4, 5, 6], vars: { i: 10, c: 'A', f: 3.14 }, highlightVar: 'f', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 float 变量 f = 3.14f，分配 4 字节', color: 'purple', actor: 'CPU', detail: 'float 是单精度浮点数，遵循 IEEE 754 标准，4 字节中 1 位符号、8 位指数、23 位尾数。后缀 f 表示 float 字面量。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:f', timing: 'main-loop' },
    { step: 4, line: 8, executedLines: [3, 4, 5, 6, 7], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159 }, highlightVar: 'd', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 double 变量 d = 3.14159，分配 8 字节', color: 'purple', actor: 'CPU', detail: 'double 是双精度浮点数，8 字节中 1 位符号、11 位指数、52 位尾数。精度约 15-17 位有效数字，比 float 精度高。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:d', timing: 'main-loop' },
    { step: 5, line: 9, executedLines: [3, 4, 5, 6, 7, 8], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255 }, highlightVar: 'u8', isDanger: false, output: [], explanation: { icon: 'check', text: '声明 uint8_t 变量 u8 = 255，固定 1 字节无符号', color: 'green', actor: 'CPU', detail: 'uint8_t 是 C99 标准引入的定宽类型，保证精确 1 字节无符号，取值范围 0~255。嵌入式开发中常用于寄存器值、传感器数据。' }, prediction: { question: 'uint8_t 能存储的最大值是多少？', options: ['127', '255', '65535'], answer: 1 }, misconception: null, actor: 'CPU', target: 'var:u8', timing: 'main-loop' },
    { step: 6, line: 10, executedLines: [3, 4, 5, 6, 7, 8, 9], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255, u16: 65535 }, highlightVar: 'u16', isDanger: false, output: [], explanation: { icon: 'check', text: '声明 uint16_t 变量 u16 = 65535，固定 2 字节无符号', color: 'green', actor: 'CPU', detail: 'uint16_t 保证精确 2 字节无符号，取值范围 0~65535。常用于 16 位 ADC 采样值、端口号等。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:u16', timing: 'main-loop' },
    { step: 7, line: 11, executedLines: [3, 4, 5, 6, 7, 8, 9, 10], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255, u16: 65535, s32: -1 }, highlightVar: 's32', isDanger: false, output: [], explanation: { icon: 'memory', text: '声明 int32_t 变量 s32 = -1，固定 4 字节有符号', color: 'blue', actor: 'CPU', detail: 'int32_t 保证精确 4 字节有符号，取值范围 -2,147,483,648~2,147,483,647。-1 在内存中以补码形式存储 (0xFFFFFFFF)。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:s32', timing: 'main-loop' },
    { step: 8, line: 12, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255, u16: 65535, s32: -1, s_i: -1 }, highlightVar: 's_i', isDanger: false, output: [], explanation: { icon: 'info', text: '声明 signed int 变量 s_i = -1，默认就是有符号', color: 'orange', actor: 'CPU', detail: 'signed 关键字可省略，int 默认就是有符号类型。最高位为符号位，0 正 1 负。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:s_i', timing: 'main-loop' },
    { step: 9, line: 13, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255, u16: 65535, s32: -1, s_i: -1, u_i: 4294967295 }, highlightVar: 'u_i', isDanger: false, output: [], explanation: { icon: 'info', text: '声明 unsigned int 变量 u_i = 4294967295，全部位都是数值', color: 'orange', actor: 'CPU', detail: 'unsigned int 无符号类型，4 字节全部用于存储数值，取值范围 0~4,294,967,295。没有负数，减法可能出现下溢。' }, prediction: null, misconception: { title: 'unsigned 减法下溢不会变负数', text: 'unsigned 变量做减法时，如果结果小于 0，会环绕 (wrap around) 到最大值。例如 0-1=4294967295，而不是 -1。这是常见 bug 来源。' }, actor: 'CPU', target: 'var:u_i', timing: 'main-loop' },
    { step: 10, line: 14, executedLines: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], vars: { i: 10, c: 'A', f: 3.14, d: 3.14159, u8: 255, u16: 65535, s32: -1, s_i: -1, u_i: 4294967295 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'int: 10, char: A' }], explanation: { icon: 'terminal', text: 'printf 输出格式化结果：int: 10, char: A', color: 'green', actor: 'CPU', detail: 'printf 根据格式串%d 将 int 转为十进制字符串，%c 将 char 的 ASCII 码转为对应字符图形输出到终端。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '数据类型决定内存占用和取值范围，嵌入式开发优先使用 uint8_t 等定宽类型',
    pitfalls: [
      'int 大小依赖平台 (可能 2/4/8 字节)，嵌入式系统应使用 int32_t 等定宽类型',
      'unsigned 变量做减法可能出现下溢 (0-1=4294967295 而不是 -1)',
      'float 精度有限 (约 7 位有效数字)，比较浮点数应用误差范围而非直接=='
    ],
    transferQuestion: '如果将 uint8_t u8 = 255 改为 u8 = 256，实际存储的值是多少？(提示：考虑 8 位无符号的取值范围)',
    miniExercise: {
      bugCode: 'uint8_t timeout = 0;\ntimeout--;  // 这里会发生什么？',
      hint: 'uint8_t 取值范围是 0~255，0 减 1 会下溢'
    }
  }
};
