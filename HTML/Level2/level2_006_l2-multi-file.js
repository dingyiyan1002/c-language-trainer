window.LESSON_DATA = {
  meta: {
    id: 'l2-multi-file',
    title: '多文件编程',
    chapter: 'level2',
    index: 6,
    filename: 'multi-file.c',
    keyPoints: ['头文件', 'extern', '模块化']
  },
  codeLines: [
    { num: 1, tokens: [{ type: 'pp', text: '#include' }, { type: 'ws', text: ' ' }, { type: 'str', text: '<stdio.h>' }] },
    { num: 2, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 3, tokens: [{ type: 'pp', text: '// sensor.h - 传感器模块头文件' }] },
    { num: 4, tokens: [{ type: 'pp', text: '#ifndef' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SENSOR_H' }] },
    { num: 5, tokens: [{ type: 'pp', text: '#define' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'SENSOR_H' }] },
    { num: 6, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 7, tokens: [{ type: 'pp', text: 'extern' }, { type: 'ws', text: ' ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor_count' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 外部变量声明' }] },
    { num: 8, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 9, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 10, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_read' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 11, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 12, tokens: [{ type: 'pp', text: '#endif' }] },
    { num: 13, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 14, tokens: [{ type: 'pp', text: '// sensor.c - 传感器模块实现' }] },
    { num: 15, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor_count' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'num', text: '4' }, { type: 'punc', text: ';' }, { type: 'ws', text: ' ' }, { type: 'cmt', text: '// 变量定义' }] },
    { num: 16, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 17, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 18, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[INIT] Sensors initialized\\\\n"' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 19, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 20, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 21, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 22, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_read' }, { type: 'punc', text: '(' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'punc', text: ')' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 23, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"[READ] Sensor %d: %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 24, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'id' }, { type: 'ws', text: ' ' }, { type: 'op', text: '*' }, { type: 'ws', text: ' ' }, { type: 'num', text: '10' }, { type: 'punc', text: ';' }] },
    { num: 25, tokens: [{ type: 'ws', text: '    ' }, { type: 'punc', text: '}' }] },
    { num: 26, tokens: [{ type: 'ws', text: ' ' }] },
    { num: 27, tokens: [{ type: 'pp', text: '// main.c - 主程序' }] },
    { num: 28, tokens: [{ type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'main' }, { type: 'punc', text: '()' }, { type: 'ws', text: ' ' }, { type: 'punc', text: '{' }] },
    { num: 29, tokens: [{ type: 'ws', text: '    ' }, { type: 'fn', text: 'printf' }, { type: 'punc', text: '(' }, { type: 'str', text: '"sensor_count = %d\\\\n"' }, { type: 'punc', text: ',' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'sensor_count' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 30, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'ret' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_init' }, { type: 'punc', text: '(' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 31, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'int' }, { type: 'ws', text: ' ' }, { type: 'id', text: 'val' }, { type: 'ws', text: ' ' }, { type: 'op', text: '=' }, { type: 'ws', text: ' ' }, { type: 'fn', text: 'sensor_read' }, { type: 'punc', text: '(' }, { type: 'num', text: '1' }, { type: 'punc', text: ')' }, { type: 'punc', text: ';' }] },
    { num: 32, tokens: [{ type: 'ws', text: '    ' }, { type: 'kw', text: 'return' }, { type: 'ws', text: ' ' }, { type: 'num', text: '0' }, { type: 'punc', text: ';' }] },
    { num: 33, tokens: [{ type: 'punc', text: '}' }] }
  ],
  varConfig: [
    { key: 'sensor_count', name: 'sensor_count', type: 'int', addr: '0x7ffc00', glowColor: 'rgba(34,197,94,0.35)', accentCls: 'text-green-400', badgeCls: 'text-green-400 border-green-500/30 bg-green-500/12', appearStep: 1 },
    { key: 'ret', name: 'ret', type: 'int', addr: '0x7ffc04', glowColor: 'rgba(59,130,246,0.35)', accentCls: 'text-blue-400', badgeCls: 'text-blue-400 border-blue-500/30 bg-blue-500/12', appearStep: 3 },
    { key: 'val', name: 'val', type: 'int', addr: '0x7ffc08', glowColor: 'rgba(249,115,22,0.35)', accentCls: 'text-orange-400', badgeCls: 'text-orange-400 border-orange-500/30 bg-orange-500/12', appearStep: 4 }
  ],
  scenes: [
    { step: 0, line: -1, executedLines: [], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'rocket', text: '点击播放，开始学习多文件编程', color: 'blue', actor: null, detail: null }, prediction: null, misconception: null, actor: null, target: null, timing: null },
    { step: 1, line: 4, executedLines: [1, 2, 3], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '#ifndef SENSOR_H 条件编译开始', color: 'purple', actor: 'Preprocessor', detail: '这是头文件保护符 (Include Guard)。#ifndef/#define/#endif 防止头文件被重复包含。第一次包含时 SENSOR_H 未定义，进入定义；再次包含时已定义，跳过内容。' }, prediction: { question: '头文件保护符的作用是什么？', options: ['加快编译', '防止重复包含', '定义宏'], answer: 1 }, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 2, line: 7, executedLines: [1, 2, 3, 4, 5, 6], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'extern int sensor_count; 外部变量声明', color: 'purple', actor: 'Preprocessor', detail: 'extern 声明变量但不定义。告诉编译器 sensor_count 在其他文件中定义。头文件中只放声明，源文件中放定义。这样多个文件可以共享同一个全局变量。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 3, line: 9, executedLines: [1, 2, 3, 4, 5, 6, 7, 8], vars: {}, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: '函数声明：sensor_init 和 sensor_read', color: 'purple', actor: 'Preprocessor', detail: '头文件包含函数声明（接口），源文件包含函数实现（细节）。main.c 包含 sensor.h 后就可以调用这些函数。这是模块化编程的基础。' }, prediction: null, misconception: null, actor: 'Preprocessor', target: 'preprocessor', timing: 'pre-compile' },
    { step: 4, line: 15, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], vars: { sensor_count: 4 }, highlightVar: 'sensor_count', isDanger: false, output: [], explanation: { icon: 'memory', text: 'int sensor_count = 4; 变量定义', color: 'green', actor: 'CPU', detail: '在 sensor.c 中定义变量 sensor_count 并初始化为 4。这是实际分配内存的地方。extern 声明不分配内存，定义才分配。整个程序只有一个 sensor_count 变量。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:sensor_count', timing: 'global-init' },
    { step: 5, line: 17, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], vars: { sensor_count: 4 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'sensor_init 函数实现', color: 'purple', actor: 'CPU', detail: 'sensor.c 实现 sensor_init 函数，输出初始化信息并返回 0 表示成功。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 6, line: 22, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], vars: { sensor_count: 4 }, highlightVar: null, isDanger: false, output: [], explanation: { icon: 'gear', text: 'sensor_read 函数实现', color: 'purple', actor: 'CPU', detail: 'sensor_read 接受传感器 ID，返回模拟读数 (id*10)。这是模块内部实现细节，使用模块的代码不需要知道。' }, prediction: null, misconception: null, actor: 'CPU', target: 'code', timing: 'function-def' },
    { step: 7, line: 29, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], vars: { sensor_count: 4 }, highlightVar: 'sensor_count', isDanger: false, output: [{ type: 'success', text: 'sensor_count = 4' }], explanation: { icon: 'terminal', text: 'main 函数访问 sensor_count = 4', color: 'green', actor: 'CPU', detail: 'main.c 通过 extern 声明可以访问 sensor.c 中定义的 sensor_count。这是跨文件共享全局变量的方式。输出 sensor_count = 4。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'main-loop' },
    { step: 8, line: 30, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], vars: { sensor_count: 4, ret: 0 }, highlightVar: 'ret', isDanger: false, output: [{ type: 'success', text: 'sensor_count = 4' }], explanation: { icon: 'gear', text: '调用 sensor_init() 初始化传感器', color: 'green', actor: 'CPU', detail: 'main.c 调用 sensor.c 中的 sensor_init 函数。这是因为 main.c 包含了 sensor.h，知道函数声明。ret = 0 表示初始化成功。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:ret', timing: 'main-loop' },
    { step: 9, line: 18, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], vars: { sensor_count: 4, ret: 0 }, highlightVar: null, isDanger: false, output: [{ type: 'success', text: 'sensor_count = 4' }, { type: 'success', text: '[INIT] Sensors initialized' }], explanation: { icon: 'terminal', text: 'sensor_init 输出初始化信息', color: 'green', actor: 'CPU', detail: '跳转到 sensor.c 中的 sensor_init 函数执行，输出 [INIT] Sensors initialized。这证明跨文件函数调用成功。' }, prediction: null, misconception: null, actor: 'CPU', target: 'stdout', timing: 'function-call' },
    { step: 10, line: 31, executedLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20], vars: { sensor_count: 4, ret: 0, val: 10 }, highlightVar: 'val', isDanger: false, output: [{ type: 'success', text: 'sensor_count = 4' }, { type: 'success', text: '[INIT] Sensors initialized' }, { type: 'success', text: '[READ] Sensor 1: 10' }], explanation: { icon: 'gear', text: '调用 sensor_read(1) 读取传感器 1', color: 'green', actor: 'CPU', detail: 'sensor_read(1) 返回 1*10=10，存入 val。这是模块化设计：sensor 模块隐藏实现细节，只提供接口给外部使用。' }, prediction: null, misconception: null, actor: 'CPU', target: 'var:val', timing: 'main-loop' }
  ],
  summary: {
    oneLiner: '头文件放声明，源文件放实现，extern 声明外部变量，#ifndef 防止重复包含',
    pitfalls: [
      '头文件必须用#ifndef/#define/#endif 保护，防止重复包含导致重复定义错误',
      'extern 只声明不定义，变量必须在某个源文件中定义（分配内存）',
      '函数声明后要有分号，函数定义后不能有分号'
    ],
    transferQuestion: '如果在 main.c 中直接写 int sensor_count = 4; 会发生什么？',
    miniExercise: {
      bugCode: '// sensor.h\\nint sensor_count = 4;\\n// 这样写有什么问题？',
      hint: '头文件中定义变量会导致每个包含该头文件的源文件都定义一个 sensor_count，链接时报"重复定义"错误。应该用 extern 声明'
    }
  }
};
